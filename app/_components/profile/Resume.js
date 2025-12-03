"use client";

import { useState } from "react";
import { Box, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Link from "next/link";

export default function Resume() {
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
      <Typography variant="h6">Download Resume</Typography>

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
          English Version
        </MenuItem>

        <MenuItem
          component="a"
          href="/files/william-resume-cn.pdf"
          download
          onClick={handleClose}
        >
          Chinese Version
        </MenuItem>
      </Menu>
    </Box>
  );
}
