import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

import App from "./App";

let webStyle = {
  height: "100vh",
  width: "100vw",
  fontFamily: "sans-serif",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
  <div style={webStyle}>
    <App />
  </div>

);
