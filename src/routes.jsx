import React from "react";
import { Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("./pages/home/Home"));

// utilities
const Clock = React.lazy(() => import("./pages/utilities/clock/Clock"));

// Define routes
const routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/clock" element={<Clock />} />
  </Routes>
);

export default routes;
