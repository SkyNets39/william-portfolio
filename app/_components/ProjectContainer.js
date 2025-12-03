"use client";

import { Box, Typography } from "@mui/material";
import ProjectCarousel from "../_components/ProjectCarousel";
import ProjectShowcaseDesktop from "../_components/ProjectShowcaseDesktop";
import projects from "../_data/projects";

export default function ProjectContainer() {
  return (
    <Box id="projects-section" sx={{ px: 2, py: 3 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        My Projects
      </Typography>

      <ProjectCarousel projects={projects} />
      <Box sx={{ px: 8 }}>
        <ProjectShowcaseDesktop projects={projects} />
      </Box>
    </Box>
  );
}
