import React, { Suspense } from "react";
import Loader from "./components/Loader";

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

export default SuspenseWrapper;
