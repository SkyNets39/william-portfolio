"use client";

import { Box, Typography } from "@mui/material";
import ProjectCarousel from "./ProjectCarousel";
import ProjectShowcaseDesktop from "./ProjectShowcaseDesktop";
import projects from "../_data/projects";
import { useTranslations } from "next-intl";

export default function ProjectContainer() {
  const t = useTranslations("sections.projects");

  return (
    <Box id="projects-section" sx={{ px: 2, py: 3 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        {t("title")}
      </Typography>

      <ProjectCarousel projects={projects} />

      <Box sx={{ px: 8 }}>
        <ProjectShowcaseDesktop projects={projects} />
      </Box>
    </Box>
  );
}
