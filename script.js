function Weather() {
    this.api = fetch('https://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no')
    this.init = (this.api)
        .then((response) =>  response.json())
        .then((data) => {
            let locaition = data.location
            let weather = data.current
            console.log(locaition.name)
            document.getElementById("weather").insertAdjacentHTML(
                "beforeend",
                `
        <div>Weather</div>
        <div>${locaition.country}</div>
        <div>
            <div>${weather.temp_c}°C</div>
            <div>Probability of precipitation: ${weather.cloud}%</div>
            <div>Humidity: ${weather.humidity}%</div>
            <div>Gust: ${weather.gust_kph} км/ч</div>
            <div>${locaition.name}, ${locaition.region}</div>
            <div>${locaition.localtime}</div>
            <div>
                <img src="${weather.condition.icon}" alt="">
            </div>
            <div>${weather.condition.text}</div>
        </div>
    `)})
}

