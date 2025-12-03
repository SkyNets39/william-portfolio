import { Box, Typography } from "@mui/material";
import ExperienceCard from "./ExperienceCard";

export default function ExperienceContainer() {
  return (
    <Box id="experience-section" sx={{ px: 2 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Experience
      </Typography>
      <ExperienceCard />
    </Box>
  );
}
