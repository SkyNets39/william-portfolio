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

export default function ProjectCard({ project }) {
  const { id, img, title, techStacks, description, url, github } = project;
  return (
    <Card sx={{ width: 350, height: "100%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height={200}
        image={img}
      ></CardMedia>
      <CardContent sx={{ p: 3 }}>
        <Typography variant="h2" sx={{ mb: 1 }}>
          {title}
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
          {description}
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
              Visit
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
            Github
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
