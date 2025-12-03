import { Box, Typography } from "@mui/material";

export default function ContactInfo() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 0.8,
        p: 2,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <ContactRow
          fieldName="Email Address"
          value="williamwinata39@gmail.com"
        />
        <ContactRow
          fieldName="Phone"
          value={
            <>
              +62 85183092845 <br />
              +86 13381824310
            </>
          }
        />
      </Box>
    </Box>
  );
}

function ContactRow({ fieldName, value }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        {fieldName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {value}
      </Typography>
    </Box>
  );
}
