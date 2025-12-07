"use client";

import { useState } from "react";
import { Box, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { useTranslations } from "next-intl";

export default function Resume() {
  const t = useTranslations("profile.resume");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h6">{t("title")}</Typography>

      {/* Button trigger */}
      <IconButton
        aria-label="download resume"
        color="secondary"
        onClick={handleOpen}
      >
        <FileDownloadIcon />
      </IconButton>

      {/* Dropdown menu */}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem
          component="a"
          href="/files/william-resume-en.pdf"
          download
          onClick={handleClose}
        >
          {t("englishVersion")}
        </MenuItem>

        <MenuItem
          component="a"
          href="/files/william-resume-cn.pdf"
          download
          onClick={handleClose}
        >
          {t("chineseVersion")}
        </MenuItem>
      </Menu>
    </Box>
  );
}
