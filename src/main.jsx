import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import AppContextWrapper from "./context/AppContextWrapper.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContextWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </AppContextWrapper>
);
