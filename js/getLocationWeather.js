import filterWeatherData from './filterWeatherData.js';

async function getLocationWeather(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}`,
      { mode: 'cors' }
    );
    const jsonData = await response.json();
    return filterWeatherData(jsonData);
  } catch (error) {
    console.log(error);
    alert(
      `Could not find the weather for your location. Make sure you spelled ${location} correctly.`
    );
  }
}

export default getLocationWeather;
