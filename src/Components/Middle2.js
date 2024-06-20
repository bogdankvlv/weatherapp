import React, { useState } from "react";
import axios from "axios";

function SearchBar() {
  const [city, setCity] = useState("");
  const [warning, setWarning] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = process.env.REACT_APP_API_KEY;

  const search = async () => {
    if (city === "") {
      setWarning("Please select a city.");
    } else {
      try {
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeatherData(response.data);
        setWarning("");
      } catch (error) {
        console.log(error);
        setWarning("Please enter a valid city name");
      }
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city"
      />
      <button onClick={search}>Search</button>
      {warning && <div style={{ color: "red" }}>{warning}</div>}
      {weatherData && (
        <div>
          <h2>Weather in {city}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default SearchBar;