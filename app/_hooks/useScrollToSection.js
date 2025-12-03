// src/hooks/useScrollToSection.js
"use client";

import { useCallback } from "react";

/**
 * useScrollToSection()
 * - Scopes lookup to #main-scroll-container when available (desktop case)
 * - Falls back to document.getElementById -> scrollIntoView for normal window scroll
 */
export default function useScrollToSection() {
  return useCallback((targetId) => {
    if (!targetId) return;

    // prefer scroll inside our app's main scroll container if it exists
    const container =
      typeof document !== "undefined" &&
      document.getElementById("main-scroll-container");

    if (container) {
      // find the section inside the container
      const element = container.querySelector(`#${targetId}`);
      if (!element) return;

      // compute offset relative to container's scrollTop
      const containerRect = container.getBoundingClientRect();
      const elementRect = element.getBoundingClientRect();

      const offsetTop =
        elementRect.top - containerRect.top + container.scrollTop;

      container.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      return;
    }

    // fallback to window scrolling
    const el =
      typeof document !== "undefined" && document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);
}
