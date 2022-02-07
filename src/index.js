import {fetch} from './fetch'

const kiev = fetch('https://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no)')
kiev.then(({
               location:{
                   country,
                   name},
               current:{
                   temp_c,
                   cloud,
                   humidity,
                   condition:{text}
               }})=> {
    document.getElementById("weather").insertAdjacentHTML(
        "beforeend", `
            <div>country ${country}</div>
            <div>country ${name}</div>
            <div>temperature ${temp_c}</div>
            <div>clouds ${cloud}</div>
            <div>humidity ${humidity}</div>
            <div>condition ${text}</div>
`)

})


