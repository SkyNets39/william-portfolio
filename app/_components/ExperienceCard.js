import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import Link from "next/link";

export default function ExperienceCard() {
  return (
    <Card
      sx={{ borderRadius: 3, border: "1px solid", borderColor: "grey.700" }}
    >
      <CardContent sx={{ p: 4 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h3" sx={{ mb: 1 }}>
            Hand Solution Indonesia
          </Typography>
          <Typography variant="body1" color="text.secondary">
            SAP FICO Consultant
          </Typography>
          <Typography variant="body2" color="grey.700">
            <Link
              style={{ color: "grey", textDecoration: "none" }}
              href="https://www.hand-global.com/"
            >
              www.hand-global.com
            </Link>
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          - I provide production support for SAP ECC 6.0 FI–CO across large
          manufacturing and trading clients, ensuring 99%+ system availability
          during critical financial periods. I led the design, development, and
          UAT of a custom Z-program to automate recurring journal entries and
          intercompany reconciliations, saving over 20 hours per month-end
          close.
          <br />
          <br />
          - I manage month-end and year-end closing activities—including balance
          carry-forward, FX revaluation, depreciation runs, and cost
          settlements—with 100% accuracy. I also enhance FI–MM/SD integration by
          improving automatic account determination, validation/substitution
          logic, and custom reporting, increasing process efficiency by 25%.
          <br />
          <br />- Additionally, I support internal and external audits with
          accurate financial data and documentation, and resolve complex FI/CO
          issues using ABAP runtime analysis and SQL trace, consistently meeting
          SLA requirements.
        </Typography>
        <Chip label="September 2020 - Present" sx={{ width: "100%" }} />
      </CardContent>
    </Card>
  );
}
