import React from "react";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="col-4">
      <div className="Logo">
        <a
          href="https://www.sannepeters.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="img/sp-logo.svg"
            alt="Sanne Peters Virtual Graphic Designer"
          />
        </a>
      </div>
    </div>
  );
}
