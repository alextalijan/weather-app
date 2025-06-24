import getLocationWeather from './getLocationWeather.js';
import renderWeather from './renderWeather.js';
import PubSub from 'PubSub.js';

const searchWeatherBtn = document.querySelector('.search-weather-btn');
searchWeatherBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const location = document.querySelector('#locationInput').value;
  // console.log(getLocationWeather(location));
});
