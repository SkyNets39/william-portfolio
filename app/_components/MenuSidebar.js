//MenuSidebar.js
import { Box, Button, Drawer } from "@mui/material";

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
            bgcolor: "background.default",
            color: "text.primary",
            overflowY: "auto",
          },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          p: 2,
          my: "auto",
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
    </Drawer>
  );
}
