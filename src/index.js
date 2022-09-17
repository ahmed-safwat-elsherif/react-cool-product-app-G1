import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// container
const appContainer = document.getElementById("root");
// create a root for the application.
const root = ReactDOM.createRoot(appContainer);
// injection process
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
