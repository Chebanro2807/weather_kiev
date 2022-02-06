import {fetch} from './fetch'

const kiev = fetch('https://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no)')
kiev.then(({location, current})=> {
    document.getElementById("weather").insertAdjacentHTML(
        "beforeend", `
            <div>country ${location.country}</div>
            <div>country ${location.name}</div>
            <div>temperature ${current.temp_c}</div>
            <div>clouds ${current.cloud}</div>
            <div>humidity ${current.humidity}</div>
            <div>condition ${current.condition.text}</div>
`)})
