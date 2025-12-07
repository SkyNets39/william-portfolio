"use client";

import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function ContactInfo() {
  const t = useTranslations("profile.contact");

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
          fieldName={t("emailAddress")}
          value="williamwinata37@gmail.com"
        />

        <ContactRow
          fieldName={t("phone")}
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
