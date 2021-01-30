import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Sydney",
    temperature: 19,
    time: "10:00",
    date: "Friday, 13 November 2020",
    description: "Cloudy",
    imgUrl: "img/wi-night-alt-cloudy-gusts.svg",
    feels: 20,
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="Weather">
      <main>
        <div className="overview">
          <h1>{weatherData.city}</h1>
          <ul className="date-text">
            <li>Last updated: {weatherData.time}</li>
            <li>{weatherData.date}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-4 weather-temperature">
            {weatherData.temperature}°C
          </div>
          <div className="col-4 weather-icons">
            <img src={weatherData.imgUrl} alt={weatherData.description} />
          </div>
          <div className="col-4 temp-parameters">
            <ul>
              <li>Feels like: {weatherData.feels}°C</li>
            </ul>
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
            </ul>
            <ul>
              <li>Wind speed: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
        <div className="row description">
          <div className="col-12">{weatherData.description}</div>
        </div>
      </main>
    </div>
  );
}
