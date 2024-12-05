import React from "react";
import { Route, Routes } from "react-router-dom";
const Home = React.lazy(() => import("./pages/home/Home"));

// Define routes
const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
);

export default routes;
