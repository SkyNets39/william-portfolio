"use client";

import { Card, CardContent, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function ExpertiseCard({ expertise }) {
  const t = useTranslations();

  return (
    <Card
      sx={{
        p: 1,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "grey.700",
        height: "100%",
      }}
    >
      <CardContent>
        <Typography variant="h4" sx={{ mb: 2 }}>
          {t(expertise.title)}
        </Typography>

        <Typography variant="body1" color="text.secondary">
          {t(expertise.description)}
        </Typography>
      </CardContent>
    </Card>
  );
}
