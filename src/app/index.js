const {Weather} = require('./weather')
const {UI} = require('./UI')
const ui = new UI()
const weather = new Weather('Palmira','CO')
require('./index.css');

async function fetchWeather(){
  let data = await weather.getWeather();
  console.log(data)
  ui.render(data)
}

document.getElementById('w-change-btn').addEventListener('click', (element)=>{
  const city = document.getElementById('city').value;
  const countryCode = document.getElementById('countryCode').value;
  weather.chageLocation(city, countryCode);
  fetchWeather();
  element.preventDefault();
})

document.addEventListener('DOMContentLoaded', fetchWeather)