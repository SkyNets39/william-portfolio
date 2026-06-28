"use client";

import { Box, Stack, Typography } from "@mui/material";
import ExperienceCard from "./ExperienceCard";
import { useTranslations } from "next-intl";

export default function ExperienceContainer() {
  const t = useTranslations("sections.experience");
  const items = t.raw("items");

  return (
    <Box id="experience-section" sx={{ px: 2 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        {t("title")}
      </Typography>

      <Stack spacing={2}>
        {items.map((item, index) => (
          <ExperienceCard key={index} experience={item} />
        ))}
      </Stack>
    </Box>
  );
}
