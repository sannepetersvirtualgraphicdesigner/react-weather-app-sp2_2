import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./WeatherApp.css";

import Weather from "./Weather";
import Footer from "./Footer";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div className="container">
        <div>
          <Weather defaultCity="Sydney" />
          <Footer />
        </div>
      </div>
    </div>
  );
}
