// src/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">
      <div className="notfound-container">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <button className="back-btn" onClick={() => navigate("/")}>
          🏠 Go Back Home
        </button>

        <div className="notfound-animation">
          <div className="ghost">
            <div className="ghost-eye left"></div>
            <div className="ghost-eye right"></div>
            <div className="ghost-mouth"></div>
          </div>
          <p className="ghost-text">Lost in the kitchen? 😅</p>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
