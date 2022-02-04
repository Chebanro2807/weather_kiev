import {fetch} from './fetch'

const kiev = fetch('https://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no)')
kiev.then(data => {
    document.getElementById("weather").insertAdjacentHTML(
        "beforeend", `
            <div>country ${data.location.country}</div>
            <div>country ${data.location.name}</div>
            <div>temperature ${data.current.temp_c}</div>
            <div>clouds ${data.current.cloud}</div>
            <div>humidity ${data.current.humidity}</div>
            <div>condition ${data.current.condition.text}</div>
`)})
