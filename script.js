function fetch(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const xhr = new XMLHttpRequest()
            xhr.open("GET", url);
            xhr.send();
            xhr.onreadystatechange = function () {
                if (xhr.readyState !== 4 || xhr.status !== 200) {
                    return
                }
                const response = JSON.parse(xhr.response)
                resolve(response)
            }
        }, 2000)
    })
}

// function Weather(city, token) {
//   this.city = city;
//   this.token = token;
//   this.api = fetch(`https://api.weatherapi.com/v1/current.json?key=${this.token}&q=${this.city}&aqi=no`);
//   this.init = (this.api).then((response) => response.json()).then((data) => ({
//     city: this.city,
//     country: data.location.country,
//     temp_c: data.current.temp_c,
//     cloud: data.current.cloud,
//     humidity: data.current.humidity,
//     condition: data.current.condition.text,
//   }));
// }
