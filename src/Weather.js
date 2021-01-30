import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <main>
          <div className="overview">
            <h1>Sydney</h1>
            <ul className="date-text">
              <li>Last updated: 10:00</li>
              <li>Friday, 13 November 2020</li>
            </ul>
          </div>
          <div className="row">
            <div className="col-4 weather-temperature">
              {Math.round(temperature)}°C
            </div>
            <div className="col-4 weather-icons">
              <img src="img/wi-night-alt-cloudy-gusts.svg" alt="cloudy" />
            </div>
            <div className="col-4 temp-parameters">
              <ul>
                <li>Feels like: 19°C</li>
              </ul>
              <ul>
                <li>Humidity: 3%</li>
              </ul>
              <ul>
                <li>Wind speed: 3 km/h</li>
              </ul>
            </div>
          </div>
          <div className="row description">
            <div className="col-12">cloudy</div>
          </div>
        </main>
      </div>
    );
  } else {
    const apiKey = "e347c1e77eff0865f24ace0de5ae743f";
    let city = "Sydney";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}

// BACKUP
// export default function Weather() {
//   const [ready, setReady] = useState(false);
//   const [temperature, setTemperature] = useState(null);

//   function handleResponse(response) {
//     console.log(response.data);
//     setTemperature(response.data.main.temp);
//     setReady(true);
//   }
// let weatherData = {
//     city: "Sydney",
//     temperature: 19,
//     time: "10:00",
//     date: "Friday, 13 November 2020",
//     description: "Cloudy",
//     imgUrl: "img/wi-night-alt-cloudy-gusts.svg",
//     feels: 20,
//     humidity: 80,
//     wind: 10,
//   };
//   if (ready) {
//     return (
//       <div className="Weather">
//         <main>
//           <div className="overview">
//             <h1>{weatherData.city}</h1>
//             <ul className="date-text">
//               <li>Last updated: {weatherData.time}</li>
//               <li>{weatherData.date}</li>
//             </ul>
//           </div>
//           <div className="row">
//             {/* <div className="col-4 weather-temperature">
//             {weatherData.temperature}°C
//           </div> */}
//             <div className="col-4 weather-temperature">{temperature}°C</div>
//             <div className="col-4 weather-icons">
//               <img src={weatherData.imgUrl} alt={weatherData.description} />
//             </div>
//             <div className="col-4 temp-parameters">
//               <ul>
//                 <li>Feels like: {weatherData.feels}°C</li>
//               </ul>
//               <ul>
//                 <li>Humidity: {weatherData.humidity}%</li>
//               </ul>
//               <ul>
//                 <li>Wind speed: {weatherData.wind} km/h</li>
//               </ul>
//             </div>
//           </div>
//           <div className="row description">
//             <div className="col-12">{weatherData.description}</div>
//           </div>
//         </main>
//       </div>
//     );
//   } else {
//     const apiKey = "e347c1e77eff0865f24ace0de5ae743f";
//     let city = "New York";
//     let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//     axios.get(apiUrl).then(handleResponse);
//     return "Loading...";
//   }
// }
