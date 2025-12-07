"use client";

import { Box, Typography } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import { useTranslations } from "next-intl";

export default function ExperienceContainer() {
  const t = useTranslations("sections.experience");

  return (
    <Box id="experience-section" sx={{ px: 2 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        {t("title")}
      </Typography>

      <ExperienceCard />
    </Box>
  );
}
