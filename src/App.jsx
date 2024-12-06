import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SuspenseWrapper from "./SuspenseWrapper";
import Layout from "./layout/Layout";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./constants/theme";
import { useGlobalContext } from "./GlobalProvider";
import { motion } from "framer-motion"; // Import motion

function App() {
  const { theme } = useGlobalContext();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <Router>
        <SuspenseWrapper>
          <motion.div
            initial={{ opacity: 0 }} // Fade in at first
            animate={{ opacity: 1 }} // Fade out when the layout is loaded
            exit={{ opacity: 0 }} // Fade out when navigating away
            transition={{ duration: 0.5 }} // Fade duration
          >
            <Layout />
          </motion.div>
        </SuspenseWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
