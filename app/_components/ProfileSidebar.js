"use client";

import { Drawer, Box, Divider } from "@mui/material";
import ProfileCard from "../_components/profile/ProfileCard";
import Address from "../_components/profile/Address";
import Languages from "../_components/profile/Languages";
import TechStacks from "../_components/profile/TechStacks";
import ContactInfo from "../_components/profile/ContactInfo";
import Resume from "../_components/profile/Resume";
import ProfileFooter from "../_components/profile/ProfileFooter";

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
