"use client";

import { Box, Chip, Typography } from "@mui/material";
import { motion } from "motion/react";

export default function Banner() {
  return (
    <Box
      id="home-section"
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        justifyContent: "center",
        bgcolor: "#000810",
      }}
    >
      {/* =====================================================
          CENTERED GLOW BEAM
      ===================================================== */}
      <motion.div
        animate={{
          opacity: [0.35, 0.55, 0.35],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "25%",
          left: "32%",
          transform: "translate(-50%, -50%)",

          width: "450px",
          height: "450px",
          borderRadius: "50%",

          background:
            "radial-gradient(circle at center, rgba(120,80,255,0.45), rgba(0,0,0,0) 70%)",

          filter: "blur(80px)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}
      <Box sx={{ position: "relative", zIndex: 10 }}>
        <Chip
          label="Welcome to my portfolio"
          sx={{
            px: 2,
            mb: 1,
            color: "white",
            fontWeight: 600,
            background:
              "linear-gradient(90deg,rgba(131, 58, 180, 1), rgba(253, 29, 29, 1), rgba(252, 176, 69, 1))",

            backgroundSize: "300% 100%",
            animation: "gradientMove 15s ease infinite",

            "@keyframes gradientMove": {
              "0%": { backgroundPosition: "0% 50%" },
              "50%": { backgroundPosition: "100% 50%" },
              "100%": { backgroundPosition: "0% 50%" },
            },
          }}
        />
        <Typography
          variant="h1"
          sx={{
            fontSize: "8rem",
            fontWeight: 600,
            background:
              "linear-gradient(90deg,rgba(252, 252, 252, 1) 0%, rgba(0, 0, 255, 1) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Hello
        </Typography>

        <Typography
          sx={{
            fontSize: "1.5rem",
            color: "secondary.main",
            marginTop: "1rem",
          }}
        >
          ~It&apos;s William, the Full-stack Developer
        </Typography>
      </Box>
    </Box>
  );
}

/* ==========================================
   STAR STYLE HELPER
========================================== */
function starStyle(top, left, size) {
  return {
    position: "absolute",
    top,
    left,
    width: `${size}px`,
    height: `${size}px`,
    background: "white",
    borderRadius: "50%",
  };
}
