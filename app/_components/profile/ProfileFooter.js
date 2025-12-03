"use client";

import { Box, IconButton, Modal } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IoLogoWechat } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProfileFooter() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        p: 0.2,
        display: "flex",
        justifyContent: "center",
        bgcolor: "grey.800",
        gap: 2,
        position: "sticky",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Link href="https://github.com/SkyNets39" target="_blank">
        <IconButton aria-label="github">
          <GitHubIcon color="secondary" />
        </IconButton>
      </Link>

      <Link
        href="https://www.linkedin.com/in/william-winata-553b01311/"
        target="_blank"
      >
        <IconButton aria-label="linkedIn">
          <LinkedInIcon color="secondary" />
        </IconButton>
      </Link>

      <IconButton aria-label="wechat" onClick={handleOpen}>
        <IoLogoWechat style={{ color: "#f0edf4ff", fontSize: 25 }} />
      </IconButton>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            p: 2,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 250,
            height: 340,
            borderRadius: 2,
            overflow: "hidden",
            bgcolor: "background.paper",
            position: "relative", // REQUIRED for Image fill mode
          }}
        >
          <Image
            alt="wechat-qr-code"
            src="/wechat.jpg"
            fill
            style={{
              objectFit: "contain", // or "cover"
            }}
          />
        </Box>
      </Modal>
    </Box>
  );
}
