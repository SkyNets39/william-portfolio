"use client";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ProjectCard({ project }) {
  const t = useTranslations();

  const { img, title, techStacks, description, url, github } = project;

  return (
    <Card sx={{ width: 350, height: "100%" }}>
      <CardMedia component="img" alt={t(title)} height={200} image={img} />

      <CardContent sx={{ p: 3 }}>
        <Typography variant="h2" sx={{ mb: 1 }}>
          {t(title)}
        </Typography>

        <Box sx={{ display: "flex", gap: 1, mb: 2, flexWrap: "wrap" }}>
          {techStacks.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{ px: 1, border: 0.5, borderColor: "primary.main" }}
            />
          ))}
        </Box>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {t(description)}
        </Typography>

        <Box sx={{ display: "flex", gap: 2 }}>
          {url && (
            <Button
              component={Link}
              href={url}
              variant="outlined"
              disableElevation
              target="_blank"
              sx={{ minWidth: 100 }}
            >
              {t("common.visit")}
            </Button>
          )}

          <Button
            startIcon={<GitHubIcon />}
            component={Link}
            href={github}
            variant="contained"
            disableElevation
            target="_blank"
            sx={{ minWidth: 100 }}
          >
            {t("common.github")}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
