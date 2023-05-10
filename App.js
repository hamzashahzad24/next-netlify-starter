import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleGetWeather = async () => {
    try {
      const response = await axios.get(`5dd5a5355b2f44a7b0c180515231005`);
      setWeather(response.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError('Could not fetch weather. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input type="text" value={city} onChange={handleCityChange} />
      <button onClick={handleGetWeather}>Get Weather</button>
      {weather && (
        <div>
          <p>{weather.name}, {weather.sys.country}</p>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default App;
