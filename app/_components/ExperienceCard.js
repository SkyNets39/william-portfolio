"use client";

import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import Link from "next/link";

export default function ExperienceCard({ experience }) {
  const { company, position, website, websiteUrl, description, period } =
    experience;

  return (
    <Card
      sx={{ borderRadius: 3, border: "1px solid", borderColor: "grey.700" }}
    >
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            {company}
          </Typography>

          <Typography variant="body1" color="text.secondary">
            {position}
          </Typography>

          <Typography variant="body2" color="grey.700">
            <Link
              style={{ color: "grey", textDecoration: "none" }}
              href={websiteUrl}
            >
              {website}
            </Link>
          </Typography>
        </Box>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 2, whiteSpace: "pre-line" }}
        >
          {description}
        </Typography>

        <Chip label={period} sx={{ width: "100%" }} />
      </CardContent>
    </Card>
  );
}
