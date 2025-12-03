import { Box, Card, CardContent, Chip, Typography } from "@mui/material";

export default function EducationCard() {
  return (
    <Box id="education-section" sx={{ px: 2, mb: 4 }}>
      <Typography variant="h2" sx={{ mb: 2 }}>
        Education
      </Typography>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: 3,
          border: "1px solid",
          borderColor: "grey.700",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 0.3, mb: 2 }}
          >
            <Typography variant="h3">Shanghai University</Typography>
            <Typography variant="body2" color="text.secondary">
              Computer Science and Engineering
            </Typography>
          </Box>
          {/* <Typography variant="body1" sx={{ mb: 2 }}>
            I earned my Bachelor of Software Enginering degree forom college and
            I acheve meticulous skill of very high dddalsdjf sjdklf jalsjf
            asljdflk asjlfjas jask
          </Typography> */}
          <Chip label="September 2020 - June 2024" sx={{ minWidth: "100%" }} />
        </CardContent>
      </Card>
    </Box>
  );
}
