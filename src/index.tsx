import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import http from "./utils/http";

http.get('/posts')

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
