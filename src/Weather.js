import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Logo from "./Logo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("celsius");

  function handleResponse(response) {
    setweatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey = "39894af632085c3f059962ef4c16e634";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function retrievePosition(position) {
    let apiKey = "39894af632085c3f059962ef4c16e634";
    let unit = "metric";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiBeginpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiBeginpoint}?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(retrievePosition);
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <nav class="header">
          <div class="row">
            <Logo />

            <div className="col-4">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Which place?"
                  className="form-control"
                  autoComplete="off"
                  autofocus="on"
                  spellCheck="false"
                  onChange={handleCityChange}
                />
                <button className="button">
                  <i className="fas fa-search search-icon"></i>
                </button>
              </form>
            </div>

            <div class="col-4">
              <div className="TempSwitch">
                <span onClick={showCelsius}>°C</span> /{" "}
                <span onClick={showFahrenheit}>°F</span>
              </div>
              <div className="CurrentLocation">
                <i className="fas fa-map-marker-alt" onClick={getPosition}></i>
              </div>
            </div>
          </div>
        </nav>
        <WeatherInfo data={weatherData} unit={unit} />
        <WeatherForecast city={weatherData.city} unit={unit} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
