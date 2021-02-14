import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import Logo from "./Logo";
import axios from "axios";
import "./Weather.css";
import TempSwitch from "./TempSwitch";
// import CurrentLocation from "./CurrentLocation";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    // console.log(response.data);
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

  function displayTemperature(response) {
    console.log(response.data);
  }
  // let currentTemp = Math.round(response.data.main.temp);
  // let header = document.querySelector("#header");
  // header.innerHTML = `current temp is ${currentTemp} is ${response.data.name}`;
  //   console.log(response.data.main.temp);
  // }

  function retrievePosition(position) {
    let apiKey = "8d988e6da17ced5fb36c8fbb6a0c1a20";
    let unit = "metric";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let apiBeginpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiBeginpoint}?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`;
    axios.get(apiUrl).then(displayTemperature);
  }

  function getPosition(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(retrievePosition);
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
              <TempSwitch />
              {/* <CurrentLocation /> */}
              <div className="CurrentLocation">
                <a href="/" onClick={getPosition}>
                  <i className="fas fa-map-marker-alt"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <WeatherInfo data={weatherData} />
        <WeatherForecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
