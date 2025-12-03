"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import { motion, AnimatePresence } from "motion/react";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel({ projects }) {
  const [index, setIndex] = useState(0);
  const [dragDirection, setDragDirection] = useState(null); // "left" | "right" | null

  const next = () => {
    if (index < projects.length - 1) setIndex((i) => i + 1);
  };

  const prev = () => {
    if (index > 0) setIndex((i) => i - 1);
  };

  const active = projects[index];
  const nextPreview = projects[index + 1];
  const prevPreview = projects[index - 1];

  const showPrevPreview =
    prevPreview && (dragDirection === "right" || dragDirection === null);
  const showNextPreview =
    nextPreview && (dragDirection === "left" || dragDirection === null);

  return (
    <Box
      sx={{
        position: "relative",
        height: 500,
        overflow: "hidden",
        display: { md: "none" },
      }}
    >
      {/* PREVIEW LEFT (PREVIOUS) */}
      {showPrevPreview && (
        <motion.div
          initial={{ opacity: 0.4, scale: 0.9 }}
          animate={{ opacity: 0.5, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            left: "-10%",
            top: 0,
            pointerEvents: "none",
            transform: "translateX(-15%)",
            zIndex: 1,
            height: "100%",
          }}
        >
          <ProjectCard project={prevPreview} />
        </motion.div>
      )}

      {/* ACTIVE CARD */}
      <AnimatePresence initial={false}>
        <motion.div
          key={active.id}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDrag={(e, info) => {
            if (info.offset.x > 0) {
              setDragDirection("right");
            } else if (info.offset.x < 0) {
              setDragDirection("left");
            } else {
              setDragDirection(null);
            }
          }}
          onDragEnd={(e, info) => {
            if (info.offset.x < -80) next();
            if (info.offset.x > 80) prev();
            setDragDirection(null);
          }}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            zIndex: 10,
            height: "100%",
          }}
        >
          <ProjectCard project={active} />
        </motion.div>
      </AnimatePresence>

      {/* PREVIEW RIGHT (NEXT) */}
      {showNextPreview && (
        <motion.div
          initial={{ opacity: 0.4, scale: 0.9 }}
          animate={{ opacity: 0.5, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          style={{
            position: "absolute",
            right: "-10%",
            top: 0,
            pointerEvents: "none",
            transform: "translateX(15%)",
            zIndex: 1,
            height: "100%",
          }}
        >
          <ProjectCard project={nextPreview} />
        </motion.div>
      )}
    </Box>
  );
}
