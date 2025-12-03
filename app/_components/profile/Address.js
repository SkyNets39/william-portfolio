import { Box, Typography } from "@mui/material";

export default function Address() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 0.8, p: 2, my: 2 }}
    >
      <AddressRow fieldName="Residence" value="Menteng" />
      <AddressRow fieldName="Nationality" value="Indonesian" />
      <AddressRow fieldName="City" value="Jakarta" />
      <AddressRow fieldName="Age" value="24" />
    </Box>
  );
}

function AddressRow({ fieldName, value }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 600 }}>
        {fieldName}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {value}
      </Typography>
    </Box>
  );
}
