import { Avatar, Box, Typography } from "@mui/material";

export default function ProfileCard() {
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
      <Typography variant="h4">William</Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "center" }}
      >
        Full-stack Developer | Next JS
      </Typography>
    </Box>
  );
}
