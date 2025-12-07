"use client";

import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ExperienceCard() {
  const t = useTranslations("sections.experience");

  return (
    <Card
      sx={{ borderRadius: 3, border: "1px solid", borderColor: "grey.700" }}
    >
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            {t("company")}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {t("position")}
          </Typography>

          <Typography variant="body2" color="grey.700">
            <Link
              style={{ color: "grey", textDecoration: "none" }}
              href="https://www.hand-global.com/"
            >
              {t("website")}
            </Link>
          </Typography>
        </Box>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {t("description")}
        </Typography>

        <Chip label={t("period")} sx={{ width: "100%" }} />
      </CardContent>
    </Card>
  );
}
