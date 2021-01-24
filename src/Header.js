import React from "react";
// import "./Header.css";

import Logo from "./Logo";
import SearchEngine from "./SearchEngine";
import TempSwitch from "./TempSwitch";
import CurrentLocation from "./CurrentLocation";

export default function Header() {
  return (
    <div className="Header">
      <nav>
        <div className="row">
          <Logo />
          <SearchEngine />
          <div className="col-4">
            <TempSwitch />
            <CurrentLocation />
          </div>
        </div>
      </nav>
    </div>
  );
}
