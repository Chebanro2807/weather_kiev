/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
function Weather(city, token) {
  this.city = city;
  this.token = token;
  this.api = fetch(`https://api.weatherapi.com/v1/current.json?key=${this.token}&q=${this.city}&aqi=no`);
  this.init = (this.api).then((response) => response.json()).then((data) => ({
    city: this.city,
    country: data.location.country,
    temp_c: data.current.temp_c,
    cloud: data.current.cloud,
    humidity: data.current.humidity,
    condition: data.current.condition.text,
  }));
}
