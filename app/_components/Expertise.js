import { Box, Grid, Typography } from "@mui/material";
import ExpertiseCard from "./ExpertiseCard";
import expertises from "../_data/expertises";

export default function Expertise() {
  return (
    <Box id="expertise-section" sx={{ px: 2 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Expertise
      </Typography>
      <Grid container spacing={2} sx={{ width: "100%" }}>
        {expertises.map((expertise) => (
          <Grid key={expertise.id} size={{ xs: 12, md: 6 }}>
            <ExpertiseCard expertise={expertise} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
