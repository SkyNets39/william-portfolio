"use client";

import { Avatar, Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function ProfileCard() {
  const t = useTranslations("profile");
  const avatarSize = 100;

  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        bgcolor: "grey.800",
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1.5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
    >
      <Box
        sx={{
          width: avatarSize + 10,
          height: avatarSize + 10,
          borderRadius: "50%",
          border: "2px solid",
          borderColor: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          src="/SHU.jpeg"
          sx={{ width: avatarSize, height: avatarSize }}
        />
      </Box>

      <Typography variant="h4">{t("name")}</Typography>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "center" }}
      >
        {t("title")}
      </Typography>
    </Box>
  );
}
