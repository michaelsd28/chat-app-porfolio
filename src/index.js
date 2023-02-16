import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div
    style={{

      height: "100vh",
      width: "100vw",
      fontFamily: "sans-serif",
  
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <App />
  </div>
);
