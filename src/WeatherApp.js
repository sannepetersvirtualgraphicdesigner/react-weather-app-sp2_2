import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./WeatherApp.css";

import Weather from "./Weather";
import Header from "./Header";
import Footer from "./Footer";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div class="container">
        <div>
          <Header />
          <Weather />
          <Footer />
        </div>
      </div>
    </div>
  );
}
