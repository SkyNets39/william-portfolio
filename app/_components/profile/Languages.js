"use client";

import { Box, Typography, Grid, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import { useMotionValue, animate } from "motion/react";
import languages from "../../_data/languages";
import { useTranslations } from "next-intl";

export default function Languages() {
  const t = useTranslations(); // global t untuk seluruh key

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        {t("profile.languages.title")}
      </Typography>

      <Box sx={{ px: 2 }}>
        <Grid container spacing={2}>
          {languages.map((lang) => (
            <Grid item xs={6} key={lang.id}>
              <LanguageCircle
                language={lang.language}
                level={lang.level}
                t={t}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

/* Component kecil untuk satu circle */
function LanguageCircle({ language, level, t }) {
  const progress = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState(0);

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

      {/* 🔥 Translation key applied here */}
      <Typography variant="body2" sx={{ mt: 1 }}>
        {t(language)}
      </Typography>
    </Box>
  );
}
