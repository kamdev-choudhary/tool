import { createTheme } from "@mui/material";

// Common configuration for both themes
const commonTheme = {
  shape: {
    borderRadius: 8, // Rounded corners for all components
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    button: {
      textTransform: "none", // Prevent uppercase button text
    },
  },
  components: {},
};

// Light theme
export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // Blue as primary
    },
    secondary: {
      main: "#9c27b0", // Purple as secondary
    },
    background: {
      default: "#f1f3fb", // Light background
      paper: "#ffffff", // Paper background
      primary: "#fff",
    },
    text: {
      primary: "#000000", // Text color
      secondary: "#666666", // Secondary text color
    },
  },
  components: {},
});

// Dark theme
export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // Light blue as primary
    },
    secondary: {
      main: "#f48fb1", // Pink as secondary
    },
    background: {
      default: "#121212", // Dark background
      paper: "#1e1e1e", // Paper background
      primary: "#010101",
    },
    text: {
      primary: "#ffffff", // Text color
      secondary: "#bbbbbb", // Secondary text color
    },
  },
  components: {},
});
