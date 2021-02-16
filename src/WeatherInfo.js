import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  function fahrenheit() {
    return Math.round((props.data.temperature * 9) / 5 + 32);
  }
  function fahrenheitFeels() {
    return Math.round((props.data.feels * 9) / 5 + 32);
  }
  if (props.unit === "celsius") {
    return (
      <div className="WeatherInfo">
        <main>
          <div className="overview">
            <h1>{props.data.city}</h1>
            <ul className="date-text">
              <FormattedDate date={props.data.date} />
            </ul>
          </div>
          <div className="row">
            <div className="col-4 weather-temperature">
              {Math.round(props.data.temperature)}°C
            </div>
            <div className="col-4 weather-icons">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
            <div className="col-4 temp-parameters">
              <ul>
                <li>Feels like: {Math.round(props.data.feels)}°C</li>
              </ul>
              <ul>
                <li>Humidity: {props.data.humidity}%</li>
              </ul>
              <ul>
                <li>Wind speed: {Math.round(props.data.wind)} km/h</li>
              </ul>
            </div>
          </div>
          <div className="row description">
            <div className="col-12 text-capitalize">
              {props.data.description}
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    return (
      <div className="WeatherInfo">
        <main>
          <div className="overview">
            <h1>{props.data.city}</h1>
            <ul className="date-text">
              <FormattedDate date={props.data.date} />
            </ul>
          </div>
          <div className="row">
            <div className="col-4 weather-temperature">{fahrenheit()}°F</div>
            <div className="col-4 weather-icons">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
            <div className="col-4 temp-parameters">
              <ul>
                <li>Feels like: {fahrenheitFeels()}°F</li>
              </ul>
              <ul>
                <li>Humidity: {props.data.humidity}%</li>
              </ul>
              <ul>
                <li>Wind speed: {Math.round(props.data.wind)} km/h</li>
              </ul>
            </div>
          </div>
          <div className="row description">
            <div className="col-12 text-capitalize">
              {props.data.description}
            </div>
          </div>
        </main>
      </div>
    );
  }
}
