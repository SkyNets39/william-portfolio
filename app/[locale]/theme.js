import { createTheme } from "@mui/material";
import "@fontsource-variable/urbanist";

const palette = {
  primary: {
    // main: "#8DA9C4",
    // main: "#d4eaffff",
    main: "#c6b3ffff",
  },
  secondary: {
    main: "#f0edf4ff",
  },
  error: {
    main: "#d32f2f",
  },
  warning: {
    main: "#ed6c02",
  },
  info: {
    main: "#0288d1",
  },
  success: {
    main: "#2e7d32",
  },
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#3a3a3aff",
    800: "#232323ff",
    900: "#141414ff",
  },
  background: {
    default: "#000810",
    // paper: "#0D1120",
    paper: "#232323ff",
  },
  text: {
    primary: "#fafafa",
    secondary: "#9e9e9e",
    disabled: "rgba(0, 0, 0, 0.38)",
  },
  divider: "#fafafa",
};

const typography = {
  fontFamily: '"Urbanist Variable", sans-serif',
  h1: {
    fontFamily: '"Urbanist Variable", sans-serif',
    fontWeight: 600,
    fontSize: "2.25rem", // 3rem × 0.75
  },
  h2: {
    fontFamily: '"Urbanist Variable", sans-serif',
    fontWeight: 600,
    fontSize: "1.688rem", // 2.25rem × 0.75
  },
  h3: {
    fontFamily: '"Urbanist Variable", sans-serif',
    fontWeight: 600,
    fontSize: "1.313rem", // 1.75rem × 0.75
  },
  h4: {
    fontFamily: '"Urbanist Variable", sans-serif',
    fontWeight: 600,
    fontSize: "1.125rem", // 1.5rem × 0.75
  },
  h5: {
    fontFamily: '"Urbanist Variable", sans-serif',
    fontWeight: 600,
    fontSize: "0.975rem", // 1.3rem × 0.75
  },
  h6: {
    fontFamily: '"Urbanist Variable", sans-serif',
    fontWeight: 600,
    fontSize: "0.9rem", // 1.2rem × 0.75
  },
  body1: {
    fontSize: "0.8rem", // 1.3rem × 0.75
    lineHeight: 1.6,
  },
  body2: {
    fontSize: "0.75rem", // 1rem × 0.75
  },
  button: {
    textTransform: "none",
    fontWeight: 500,
    letterSpacing: "0.3px",
  },
};

const breakpoints = {
  values: {
    xs: 0, // phone
    sm: 600, // tablet
    md: 900, // small laptop
    lg: 1200, // desktop
    xl: 1536, // large screen
  },
};

export const theme = createTheme({ palette, typography, breakpoints });
