import React, { useState } from "react";
import axios from "axios";

export default function WeatherForm() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState("");

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function displayWeather(response) {
    let temperature = Math.round(response.data.temperature.current);

    setWeather(
      <ul>
        <li>Temperature: {temperature}°C</li>
        <li>Description: {response.data.condition.description}</li>
        <li>Humidity: {response.data.temperature.humidity}%</li>
        <li>Wind: {response.data.wind.speed} km/h</li>
        <li>
          <img src={response.data.condition.icon_url} alt="weather icon" />
        </li>
      </ul>
    );
  }

  function getWeather(event) {
    event.preventDefault();
    const key = "96f59ob69a32facbb34b2tdb5d2e7405";
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`;
    axios.get(url).then(displayWeather);
  }

  return (
    <div className="container">
      <form onSubmit={getWeather}>
        <input
          type="text"
          placeholder="Enter a city..."
          onChange={updateCity}
        />
        <button type="submit">Search</button>
      </form>
      {weather}
    </div>
  );
}
