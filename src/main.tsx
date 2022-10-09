import React from "react";
import ReactDOM from "react-dom/client";
import GlobalCSS from "./styles/global.css";

import App from "./App";
import { MealContextProvider } from "./store/meal-context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <GlobalCSS />
    <MealContextProvider>
      <App />
    </MealContextProvider>
  </>
);
