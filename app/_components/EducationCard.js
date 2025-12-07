"use client";

import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function EducationCard() {
  const t = useTranslations("sections.education");

  return (
    <Box id="education-section" sx={{ px: 2, mb: 4 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        {t("title")}
      </Typography>

      <Card
        sx={{
          boxShadow: "none",
          borderRadius: 3,
          border: "1px solid",
          borderColor: "grey.700",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 0.3, mb: 2 }}
          >
            <Typography variant="h3">{t("university")}</Typography>

            <Typography variant="body2" color="text.secondary">
              {t("major")}
            </Typography>
          </Box>

          <Chip label={t("period")} sx={{ minWidth: "100%" }} />
        </CardContent>
      </Card>
    </Box>
  );
}
