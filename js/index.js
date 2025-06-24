import getLocationWeather from './getLocationWeather.js';
import renderWeather from './renderWeather.js';

const searchWeatherBtn = document.querySelector('.search-weather-btn');
searchWeatherBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const location = document.querySelector('#locationInput').value;
  getLocationWeather(location).then(renderWeather);
});
