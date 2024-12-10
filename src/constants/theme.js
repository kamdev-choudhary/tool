import { createTheme } from "@mui/material";

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

export const lightTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "light",
    primary: {
      main: "#5E35B1", // Rich purple
    },
    secondary: {
      main: "#388E3C", // Deep green
    },
    background: {
      default: "#f1f3fb", // Neutral light background
      paper: "#ffffff", // Pure white paper background
    },
    text: {
      primary: "#212121", // Deep black text
      secondary: "#616161", // Subtle gray text
    },
  },
});

// Dark theme with rich purple and green
export const darkTheme = createTheme({
  ...commonTheme,
  palette: {
    mode: "dark",
    primary: {
      main: "#9575CD", // Lighter purple for dark mode
    },
    secondary: {
      main: "#4CAF50", // Softer green for dark mode
    },
    background: {
      default: "#121212", // Neutral dark background
      paper: "#1E1E1E", // Slightly lighter dark for paper
    },
    text: {
      primary: "#FFFFFF", // Pure white text
      secondary: "#BDBDBD", // Subtle gray text
    },
  },
});
