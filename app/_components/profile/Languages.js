"use client";

import { Box, Typography, Grid, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { useMotionValue, animate } from "motion/react";
import languages from "../../_data/languages";

export default function Languages() {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Languages
      </Typography>
      <Box sx={{ px: 2 }}>
        <Grid container spacing={2}>
          {languages.map((lang) => (
            <Grid item xs={6} key={lang.id}>
              <LanguageCircle language={lang.language} level={lang.level} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

/* Component kecil untuk satu circle */
function LanguageCircle({ language, level }) {
  const progress = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

  // Animasi berjalan sekali saat component mount → tetap perlu useEffect, bukan untuk data berubah
  useEffect(() => {
    const unsubscribe = progress.on("change", (v) => {
      setDisplayValue(Math.floor(v));
    });

    animate(progress, level, {
      duration: 1.2,
      easing: "easeOut",
    });

    return () => unsubscribe();
  }, [level]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={displayValue}
          size={60}
          thickness={3}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="body1">{displayValue}%</Typography>
        </Box>
      </Box>
      <Typography variant="body2" sx={{ mt: 1 }}>
        {language}
      </Typography>
    </Box>
  );
}
