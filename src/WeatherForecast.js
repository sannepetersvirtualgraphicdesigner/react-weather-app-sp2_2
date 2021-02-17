import React, { useState } from "react";
import WeatherForecastPreview from "./WeatherForecastPreview";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        {forecast.list.slice(0, 5).map(function (forecastItem) {
          return (
            <WeatherForecastPreview data={forecastItem} unit={props.unit} />
          );
        })}
      </div>
    );
  } else {
    let apiKey = "8d988e6da17ced5fb36c8fbb6a0c1a20";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
