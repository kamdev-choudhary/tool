import React, { Suspense } from "react";
import Loader from "./components/Loader";

// Centralized fallback UI
const Loading = () => <div>Loading...</div>;

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

export default SuspenseWrapper;
