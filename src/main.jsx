import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./index.css";
import ErrorBoundary from "./utils/ErrorBoundary";

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById("root")
);
