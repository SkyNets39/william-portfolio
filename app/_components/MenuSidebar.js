//MenuSidebar.js
import { Box, Button, Drawer } from "@mui/material";
import LanguageSwitcher from "./LanguageSwitcher";

export default function MenuSidebar({ open, onClose, links, onLinkClick }) {
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: "45vw",
            p: 2,
            bgcolor: "background.default",
            color: "text.primary",
            overflowY: "auto",
          },
        },
      }}
    >
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: 2,

          justifyContent: "center",
        }}
      >
        {links.map((link) => {
          const { label, target, icon } = link;
          return (
            <Button
              startIcon={icon}
              key={label}
              onClick={() => onLinkClick(target)}
              sx={{
                px: 2,
                justifyContent: "flex-start",
                gap: 1,
                color: "white",
                "&:hover": {
                  bgcolor: "background.paper",
                  color: "primary.main",
                },
              }}
            >
              {label}
            </Button>
          );
        })}
      </Box>

      <LanguageSwitcher props={{ m: "auto", width: "100%" }} />
    </Drawer>
  );
}
