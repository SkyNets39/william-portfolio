"use client";
import { AppBar, Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuIcon from "@mui/icons-material/Menu";
import ProfileSidebar from "../_components/ProfileSidebar";
import { useState } from "react";
import MenuSidebar from "../_components/MenuSidebar";
import HomeIcon from "@mui/icons-material/Home";
import StarIcon from "@mui/icons-material/Star";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import useScrollToSection from "../_hooks/useScrollToSection";

const links = [
  { label: "Home", target: "home-section", icon: <HomeIcon /> },
  {
    label: "Expertise",
    target: "expertise-section",
    icon: <PermContactCalendarIcon />,
  },
  { label: "Projects", target: "projects-section", icon: <StarIcon /> },
  { label: "Education", target: "education-section", icon: <SchoolIcon /> },
  { label: "Experience", target: "experience-section", icon: <WorkIcon /> },
];

export default function Navbar() {
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
            justifyContent: "flex-end",
            gap: 2,
            pr: 3,
            py: 2,
            bgcolor: "grey.900",
          }}
        >
          {links.map((link) => {
            const { label, target } = link;
            return (
              <Button
                disableRipple
                key={label}
                onClick={() => handleLinkClick(target)}
                sx={{ color: "white" }}
              >
                {label}
              </Button>
            );
          })}
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
