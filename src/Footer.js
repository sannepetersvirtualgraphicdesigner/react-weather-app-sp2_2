import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <small>
          Made by Sanne P. Code on
          <a
            href="https://github.com/sannepetersvirtualgraphicdesigner/vanilla-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub{" "}
          </a>{" "}
          2020
        </small>
      </footer>
    </div>
  );
}
