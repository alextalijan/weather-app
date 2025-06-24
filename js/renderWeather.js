import getIconSRC from 'getIconSRC.js';

const renderWeather = function thatDisplaysWeatherDataOnScreen(weatherData) {
  const content = document.querySelector('.content');
  content.textContent = '';

  const locationHeading = document.createElement('h2');
  locationHeading.classList.add('location');
  locationHeading.textContent = weatherData.address;

  const locationDescription = document.createElement('p');
  locationDescription.classList.add('location-description');
  locationDescription.textContent = weatherData.description;

  const daysList = document.createElement('ul');
  daysList.classList.add('days-list');
  for (const day of weatherData.days) {
    const icon = document.createElement('img');
    icon.src = getIconSRC(day.icon);
    icon.alt = `${day.icon} weather icon`;

    const maxTemp = document.createElement('span');
    maxTemp.textContent = `Max: ${day.tempMax}`;

    const minTemp = document.createElement('span');
    minTemp.textContent = `Min: ${day.tempMin}`;

    const precipitation = document.createElement('span');
    precipitation.textContent = `Chance of rain: ${day.precipitationProb}`;

    const date = document.createElement('span');
    // If the weather is about today, say today instead of the date
    if (weatherData.days.indexof(day) === 0) {
      date.textContent = 'Today';

      // Append everything to the div about today's weather
      const todaysWeather = document.createElement('div');
      todaysWeather.classList.add('weather-today');

      todaysWeather.appendChild(date);
      todaysWeather.appendChild(icon);
      todaysWeather.appendChild(maxTemp);
      todaysWeather.appendChild(minTemp);
      todaysWeather.appendChild(precipitation);

      content.appendChild(todaysWeather);
    } else {
      date.textContent = day.datetime;

      const dayListing = document.createElement('li');
      dayListing.appendChild(date);
      dayListing.appendChild(icon);
      dayListing.appendChild(maxTemp);
      dayListing.appendChild(minTemp);
      dayListing.appendChild(precipitation);

      daysList.append(dayListing);
    }
  }

  content.appendChild(daysList);
};

export default renderWeather;
