import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <small>
          Made by Sanne P. Code on
          <a
            href="https://github.com/sannepetersvirtualgraphicdesigner/react-weather-app-sp2_2"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub{" "}
          </a>{" "}
          2021
        </small>
      </footer>
    </div>
  );
}
