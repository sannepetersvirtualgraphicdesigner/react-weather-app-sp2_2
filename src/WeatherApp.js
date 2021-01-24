import React from "react";
import "./WeatherApp.css";

import Weather from "./Weather";
import Header from "./Header";
import Footer from "./Footer";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
      <div>
        <Header />
        <Weather />
        <Footer />
      </div>
    </div>
  );
}
