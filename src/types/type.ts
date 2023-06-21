type WeatherConditionType = {
  text: string;
  icon: string;
};

export interface ForecastDayDataType {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    daily_chance_of_rain: number;
    condition: WeatherConditionType;
  };
}

export interface WeatherDataType {
  location: {
    name: string;
    country: string;
    localtime: string;
  };
  current: {
    temp_c: number;
    condition: WeatherConditionType;
  };
  forecast: {
    forecastday: ForecastDayDataType[];
  };
}
