const filterWeatherData = function thatFiltersOnlyDataWeNeed(weatherAPIObject) {
  const relevantWeatherData = {
    address: weatherAPIObject.resolvedAddress,
    description: weatherAPIObject.description,
    days: [],
  };

  for (const day of weatherAPIObject.days) {
    const relevantDayData = {
      datetime: day.datetime,
      tempMax: day.tempmax,
      tempMin: day.tempmin,
      precipitationProb: day.precipprob,
      description: day.description,
      icon: day.icon,
    };

    relevantWeatherData.days.push(relevantDayData);
  }

  return relevantWeatherData;
};

export default filterWeatherData;
