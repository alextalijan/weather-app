const getIconSRC = function thatReturnsURLOfWeatherIcon(iconDescription) {
  return `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/refs/heads/main/PNG/3rd%20Set%20-%20Color/${iconDescription}.png`;
};

export default getIconSRC;
