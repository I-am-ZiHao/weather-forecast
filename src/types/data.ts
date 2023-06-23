type WeatherConditionType = {
  text: string; // "Moderate rain"
  icon: string; // "//cdn.weatherapi.com/weather/64x64/day/302.png"
};

export type HourDataType = {
  time_epoch: number; // 1687694400 (second)
  time: string; // "2023-06-25 20:00"
  temp_c: number; // 26.9
  condition: WeatherConditionType;
  chance_of_rain: number; // 77
};

export type ForecastDayDataType = {
  date: string; // "2023-06-23"
  day: {
    maxtemp_c: number; // 31.3
    mintemp_c: number; // 25.4
    avgtemp_c: number; // 27.9
    daily_chance_of_rain: number; // 89
    condition: WeatherConditionType;
  };
  hour: HourDataType[];
};

export type WeatherDataType = {
  location: {
    name: string; // "Taipei"
    country: string; // "Taiwan"
    localtime: string; // "2023-06-23 15:15"
  };
  current: {
    temp_c: number; // 26.0
    condition: WeatherConditionType;
  };
  forecast: {
    forecastday: ForecastDayDataType[];
  };
};
