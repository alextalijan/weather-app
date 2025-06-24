const getWeatherIcon = function thatReturnsEmojiBasedOnWeatherDescription(
  weatherIconDescription
) {
  switch (weatherIconDescription) {
    case 'clear-day':
      return '☀️';
    case 'partly-cloudy-day':
      return '⛅️';
    case 'rain':
      return '🌧️';
    default:
      return '🌈';
  }
};

export default getWeatherIcon;
