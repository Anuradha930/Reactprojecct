// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";   // ✅ Redux Provider
import { BrowserRouter } from "react-router-dom"; // ✅ Router
import store from "./Store";              
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>   
      <BrowserRouter>   {/* ✅ wrap App with Router */}
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
