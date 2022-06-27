import './App.css';
import {fetch} from './fetch'
import { useState, useEffect } from 'react';

function App() {
  const [weather, setWeather] = useState({});

  useEffect(
    function () {
    const kiev = fetch('https://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no)')
    kiev.then((data) => {
      setWeather({
       country: data.location.country,
       name: data.location.name,
       temp_c: data.current.temp_c,
       cloud: data.current.cloud,
       humidity: data.current.humidity,
       text: data.current.condition.text
      });
    });
    },
  );
  return (
  <div className='weather'>
    <div>country {weather.country}</div>
    <div>country {weather.name}</div>
    <div>temperature {weather.temp_c}</div>
    <div>clouds {weather.cloud}</div>
    <div>humidity {weather.humidity}</div>
    <div>condition {weather.text}</div>
  </div>
  );
}

export default App;
