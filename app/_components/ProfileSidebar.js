"use client";

import { Drawer, Box, Divider } from "@mui/material";
import ProfileCard from "./profile/ProfileCard";
import Address from "./profile/Address";
import Languages from "./profile/Languages";
import TechStacks from "./profile/TechStacks";
import ContactInfo from "./profile/ContactInfo";
import Resume from "./profile/Resume";
import ProfileFooter from "./profile/ProfileFooter";

export default function ProfileSidebar({ open, onClose }) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: "50vw",
            bgcolor: "grey.900",
            color: "text.primary",
            overflowY: "auto", // biar scroll tetap rapih
          },
        },
      }}
    >
      <ProfileCard />
      <Address />
      <Divider sx={{ mx: 3 }} />
      <Languages />
      <Divider sx={{ mx: 3 }} />
      <TechStacks />
      <Divider sx={{ mx: 3 }} />
      <ContactInfo />
      <Divider sx={{ mx: 3 }} />
      <Resume />
      <ProfileFooter />
    </Drawer>
  );
}
