"use client";

import { useMemo, useState } from "react";
import { Box, IconButton } from "@mui/material";
import { motion, AnimatePresence } from "motion/react";
import ProjectCard from "./ProjectCard";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

export default function ProjectShowcasePaged({ projects = [] }) {
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const perPage = 2;
  const pages = Math.ceil(projects.length / perPage);

  const pageItems = useMemo(() => {
    const start = page * perPage;
    return projects.slice(start, start + perPage);
  }, [projects, page]);

  const isLastPage = page >= pages - 1;
  const isFirstPage = page === 0;

  const variants = {
    initial: (dir) => ({
      x: dir === 1 ? 100 : -100,
      opacity: 0,
      scale: 0.95,
    }),
    animate: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.45, easing: "easeOut" },
    },
    exit: (dir) => ({
      x: dir === 1 ? -100 : 100,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.35, easing: "easeIn" },
    }),
  };

  const nextPage = () => {
    if (!isLastPage) {
      setDirection(1);
      setPage((p) => p + 1);
    }
  };

  const prevPage = () => {
    if (!isFirstPage) {
      setDirection(-1);
      setPage((p) => p - 1);
    }
  };

  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        width: "100%",
        maxWidth: 1100,
        mx: "auto",
        py: 4,
        px: 4,
        position: "relative",
      }}
    >
      {/* BUTTON LEFT (<) */}
      <IconButton
        onClick={prevPage}
        disabled={isFirstPage}
        sx={{
          position: "absolute",
          top: "50%",
          left: -10,
          transform: "translateY(-50%)",
          zIndex: 20,
          color: "white",
        }}
      >
        <KeyboardDoubleArrowLeftIcon fontSize="large" />
      </IconButton>

      {/* BUTTON RIGHT (>) */}
      <IconButton
        onClick={nextPage}
        disabled={isLastPage}
        sx={{
          position: "absolute",
          top: "50%",
          right: -10,
          transform: "translateY(-50%)",
          zIndex: 20,
          color: "white",
        }}
      >
        <KeyboardDoubleArrowRightIcon fontSize="large" />
      </IconButton>

      {/* PAGE VIEWPORT */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          height: 520, // Sesuaikan tinggi tampilan (match ProjectCard)
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={`page-${page}`}
            custom={direction}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 8, // <-- GAP ANTAR CARD (UBAH SESUAI SELERA)
                px: 3,
              }}
            >
              {pageItems.map((project) => (
                <Box
                  key={project.id}
                  sx={{
                    width: 350, // width ProjectCard
                    flexShrink: 0,
                  }}
                >
                  <ProjectCard project={project} />
                </Box>
              ))}

              {/* Jika halaman terakhir cuma 1 card */}
              {pageItems.length === 1 && (
                <Box sx={{ width: 350, visibility: "hidden" }} />
              )}
            </Box>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
}
