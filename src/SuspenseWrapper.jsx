import React, { Suspense } from "react";

// Centralized fallback UI
const Loading = () => <div>Loading...</div>;

const SuspenseWrapper = ({ children }) => (
  <Suspense fallback={<Loading />}>{children}</Suspense>
);

export default SuspenseWrapper;
