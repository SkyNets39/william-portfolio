"use client";

import { AppBar, Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import ProfileSidebar from "./ProfileSidebar";
import MenuSidebar from "./MenuSidebar";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import useScrollToSection from "../_hooks/useScrollToSection";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "./LanguageSwitcher";

// Links will be translated AFTER t() exists
export default function Navbar() {
  const t = useTranslations("nav");

  const links = [
    { label: t("home"), target: "home-section", icon: <HomeIcon /> },
    {
      label: t("expertise"),
      target: "expertise-section",
      icon: <PermContactCalendarIcon />,
    },
    { label: t("projects"), target: "projects-section", icon: <StarIcon /> },
    {
      label: t("education"),
      target: "education-section",
      icon: <SchoolIcon />,
    },
    {
      label: t("experience"),
      target: "experience-section",
      icon: <WorkIcon />,
    },
  ];

  const [openProfile, setOpenProfile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const scrollToSection = useScrollToSection();

  const handleOpenProfile = () => setOpenProfile(true);
  const handleCloseProfile = () => setOpenProfile(false);
  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);

  const handleLinkClick = (target) => {
    scrollToSection(target);
    setOpenMenu(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="background.default"
        sx={{ boxShadow: "none", zIndex: 10 }}
      >
        {/* Mobile Navbar */}
        <Box
          sx={{
            display: { md: "none", xs: "flex" },
            justifyContent: "space-between",
            px: 2,
            py: 1,
            bgcolor: "grey.900",
          }}
        >
          <IconButton
            aria-label="profile"
            color="primary"
            onClick={handleOpenProfile}
          >
            <AccountBoxIcon />
          </IconButton>
          <IconButton
            aria-label="navbar"
            color="primary"
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* Desktop Navbar */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            py: 2,
            px: 3,
            bgcolor: "grey.900",
          }}
        >
          {/* LEFT SPACER */}
          <Box sx={{ flex: 1 }} />

          {/* CENTER LINKS */}
          <Box sx={{ display: "flex", gap: 2 }}>
            {links.map(({ label, target }) => (
              <Button
                disableRipple
                key={label}
                onClick={() => handleLinkClick(target)}
                sx={{ color: "white" }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* RIGHT LANGUAGE BUTTON */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
            <LanguageSwitcher />
          </Box>
        </Box>
      </AppBar>

      <ProfileSidebar open={openProfile} onClose={handleCloseProfile} />

      <MenuSidebar
        open={openMenu}
        onClose={handleCloseMenu}
        links={links}
        onLinkClick={handleLinkClick}
      />
    </>
  );
}
