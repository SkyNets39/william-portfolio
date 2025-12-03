"use client";

import { Box } from "@mui/material";
import { motion } from "motion/react";

export default function CosmicBackground() {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        bgcolor: "#02040A",
        zIndex: 0,
      }}
    >
      {/* ───────────────────────────────
          STARFIELD (small white dots)
      ─────────────────────────────── */}
      <motion.div
        animate={{
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(2px 2px at 20% 30%, white 60%, transparent), radial-gradient(1.5px 1.5px at 70% 80%, white 60%, transparent), radial-gradient(1.5px 1.5px at 40% 60%, white 60%, transparent), radial-gradient(2px 2px at 80% 20%, white 60%, transparent)",
          opacity: 0.35,
          zIndex: 1,
        }}
      />

      {/* ───────────────────────────────
          AURORA GLOW (center big glow)
      ─────────────────────────────── */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1200px",
          height: "600px",
          background:
            "radial-gradient(circle at center, rgba(120,80,255,0.5), rgba(0,0,0,0.4) 70%)",
          backgroundSize: "300% 100%",
          filter: "blur(120px)",
          opacity: 0.8,
          zIndex: 2,
        }}
      />

      {/* ───────────────────────────────
          PLANET HORIZON (bottom curve)
      ─────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          bottom: "-40%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "180%",
          height: "100%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 50% 20%, rgba(255,255,255,0.7), rgba(120,80,255,0.05) 40%, rgba(0,0,0,0) 70%)",
          filter: "blur(20px)",
          zIndex: 3,
        }}
      />

      {/* HORIZON SHINE LINE */}
      <motion.div
        animate={{
          opacity: [0.25, 0.6, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          bottom: "0px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "140%",
          height: "160px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.9), rgba(255,255,255,0.05) 70%, transparent)",
          filter: "blur(12px)",
          zIndex: 4,
        }}
      />
    </Box>
  );
}
