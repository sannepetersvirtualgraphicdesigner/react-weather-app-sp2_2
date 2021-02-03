import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import Logo from "./Logo";

import axios from "axios";
import "./Weather.css";
import TempSwitch from "./TempSwitch";
import CurrentLocation from "./CurrentLocation";

// import SearchEngine from "./SearchEngine";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      // imgUrl: "img/wi-night-alt-cloudy-gusts.svg",
      icon: response.data.weather[0].icon,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }
  function search() {
    const apiKey = "8d988e6da17ced5fb36c8fbb6a0c1a20";
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

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <nav class="header">
          <div class="row">
            <Logo />

            <div className="col-4">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
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
              <TempSwitch />
              <CurrentLocation />
            </div>
          </div>
        </nav>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
