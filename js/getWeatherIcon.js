const getWeatherIcon = function thatReturnsEmojiBasedOnWeatherDescription(
  weatherIconDescription
) {
  const weatherEmojis = {
    'clear-day': '☀️',
    'partly-cloudy-day': '⛅️',
    rain: '🌧️',
  };

  return weatherEmojis[weatherIconDescription];
};

export default getWeatherIcon;
