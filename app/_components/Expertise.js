"use client";

import { Box, Grid, Typography } from "@mui/material";
import ExpertiseCard from "./ExpertiseCard";
import expertises from "../_data/expertises";
import { useTranslations } from "next-intl";

export default function Expertise() {
  const t = useTranslations("sections.expertise");

  return (
    <Box id="expertise-section" sx={{ px: 2 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        {t("title")}
      </Typography>

      <Grid container spacing={2} sx={{ width: "100%" }}>
        {expertises.map((expertise) => (
          <Grid key={expertise.id} size={{ xs: 12, md: 6 }}>
            <ExpertiseCard expertise={expertise} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
