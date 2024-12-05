import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SuspenseWrapper from "./SuspenseWrapper";
import routes from "./routes";
import Layout from "./layout/Layout";

function App() {
  return (
    <Router basename="/tool">
      <SuspenseWrapper>
        <Layout />
      </SuspenseWrapper>
    </Router>
  );
}

export default App;
