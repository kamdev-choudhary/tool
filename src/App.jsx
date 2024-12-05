import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SuspenseWrapper from "./SuspenseWrapper";
import routes from "./routes";
import Layout from "./layout/Layout";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./constants/theme";
import { useGlobalContext } from "./GlobalProvider";

function App() {
  const { theme } = useGlobalContext();
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CssBaseline />
      <Router>
        <SuspenseWrapper>
          <Layout />
        </SuspenseWrapper>
      </Router>
    </ThemeProvider>
  );
}

export default App;
