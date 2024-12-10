import React, { Suspense, ReactNode } from "react";
import Loader from "./components/Loader";

interface SuspenseWrapperProps {
  children: ReactNode;
}

const SuspenseWrapper: React.FC<SuspenseWrapperProps> = ({ children }) => (
  <Suspense fallback={<Loader open={true} />}>{children}</Suspense>
);

export default SuspenseWrapper;
