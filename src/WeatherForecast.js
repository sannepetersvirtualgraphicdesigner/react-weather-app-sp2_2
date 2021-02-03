import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    // console.log(forecast);
    return (
      <div className="WeatherForecast">
        <WeatherIcon code={forecast.list[0].weather[0].icon} />
        <br />
        <strong>05:00</strong>
        <br />
        {Math.round(forecast.list[0].main.temp)}°C
      </div>
    );
  } else {
    let apiKey = "8d988e6da17ced5fb36c8fbb6a0c1a20";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);

    return null;
  }
}
