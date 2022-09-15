
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  
  const apiKey = require('./apiKey')
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState('')

  // Ask information to api to get something
  const getWeather = (event) => {
    if (event.key === 'Enter') {
      fetch(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`) 
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
          <p>Welcome to weather app! Enter a city to get the weather.</p>
        </div>
      ) : (
        <div className='weather-data'>
          <p className='city'>{weatherData.name}</p>
          <p className='temp'>{Math.round(weatherData.main.temp)}°C</p>
          <p className='weather'>{weatherData.weather[0].main}</p>
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
