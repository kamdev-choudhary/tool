import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalProvider } from "./GlobalProvider";
import { Provider } from "react-redux";
import store from "./store/store";

// Type assertion to ensure TypeScript knows the element is of type HTMLElement
const rootElement = document.getElementById("root") as HTMLElement;

createRoot(rootElement).render(
  <StrictMode>
    <GlobalProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalProvider>
  </StrictMode>
);
