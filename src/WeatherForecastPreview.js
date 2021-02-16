import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }
  function celsiusTemperature() {
    let celsiusTemperature = Math.round(props.data.main.temp);
    console.log(celsiusTemperature);
    return `${celsiusTemperature}°C`;
  }
  function fahrenheitTemperature() {
    let fahrenheitTemperature = Math.round(
      (props.data.temperature * 9) / 5 + 32
    );
    console.log(fahrenheitTemperature);
    return `${fahrenheitTemperature}°F`;
  }
  if (props.unit === "celsius") {
    // console.log(props.unit);
    return (
      <div className="WeatherForecastPreview col">
        <WeatherIcon code={props.data.weather[0].icon} />
        <br />
        <strong>{hours()}</strong>
        <br />
        {celsiusTemperature()}
      </div>
    );
  } else {
    return (
      <div className="WeatherForecastPreview col">
        <WeatherIcon code={props.data.weather[0].icon} />
        <br />
        <strong>{hours()}</strong>
        <br />
        {fahrenheitTemperature()}
      </div>
    );
  }
}
