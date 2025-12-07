"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "../[locale]/theme";

export default function StyleProvider({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
