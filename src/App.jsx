import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SuspenseWrapper from "./SuspenseWrapper";
import routes from "./routes";

function App() {
  return (
    <Router>
      <SuspenseWrapper>{routes}</SuspenseWrapper>
    </Router>
  );
}

export default App;
