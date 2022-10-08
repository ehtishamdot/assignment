import React from "react";
import ReactDOM from "react-dom/client";
import GlobalCSS from "./styles/global.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalCSS />
    <App />
  </React.StrictMode>
);
