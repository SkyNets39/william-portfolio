"use client";

import { Box, Typography } from "@mui/material";
import { useTranslations } from "next-intl";

export default function Address() {
  const t = useTranslations("profile.address");

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 0.8, p: 2, my: 2 }}
    >
      <AddressRow fieldName={t("residence")} value={t("residenceValue")} />
      <AddressRow fieldName={t("nationality")} value={t("nationalityValue")} />
      <AddressRow fieldName={t("city")} value={t("cityValue")} />
      <AddressRow fieldName={t("age")} value={t("ageValue")} />
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
