
import './App.css';
import React, { useEffect, useState } from "react";

function App() {
  
  const apiKey = 'a3d9eb01d4de82b9b8d0849ef604dbed'
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState('')

  // Ask information to api to get something
  const getWeather = (event) => {
    if (event.key == 'Enter') {
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

      <div className='weather-data'>
        <p className='city'>{weatherData.name}</p>
        <p className='temp'>{Math.round(weatherData.main.temp)}°C</p>
        <p className='weather'>{weatherData.weather[0].main}</p>
      </div>
      
      
    </div>
  )
}

export default App;
