
import './App.css';
import React, { useState } from "react";

function App() {
  
  const apiKey = require('./apiKey')
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState('')

  // Ask information to api to get something
  const getWeather = (event) => {
    if (event.key === 'Enter') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`) 
      .then(response => response.json())
      .then(data => setWeatherData(data), setCity('')) 
    }
  } 

  return (
    <div className='container'>
      <input 
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather} 
        className='input' 
        placeholder='Enter city...'
      />

      {typeof weatherData.main === 'undefined' ? (
        <div>
          <h2>Welcome to weather app! Enter a city to get the weather.</h2>
        </div>
      ) : (
        <div className='weather-data'>
          <p className='city'>{weatherData.name}</p>
          <p className='temp'>{Math.round(weatherData.main.temp)}°C</p>
          <p className='weather'>{weatherData.weather[0].description}</p>
          <p>Min: {Math.round(weatherData.main.temp_min)}°C  Max: {Math.round(weatherData.main.temp_max)}°C</p>
          <p>Feels like: {Math.round(weatherData.main.feels_like)}°C </p>
          
        </div>
      )}

      {weatherData.cod === '404' ? (
        <p> City not found, try again.</p>
      ) : (
        <></>
      )}
      
    </div>
  )
}

export default App;
