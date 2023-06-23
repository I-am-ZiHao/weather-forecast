"use client";

import { KeyboardEvent, useCallback, useRef, useState } from "react";
import SearchInput from "./search-input";
import ErrorMessage from "./error-message";
import { WeatherDataType } from "@/types/data";
import CurrentWeather from "./weather-current/current-weather";
import { useRequest } from "@/utils/request";
import ForecastList from "./weather-forecast/forecast-list";
import { filterDataByHour, throttle } from "@/utils/utils";
import CurrentWeatherDetails from "./weather-current/current-weather-details";
import { FORECAST_DAY } from "@/config";
// import mockData from "./mock-data";

const Root = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { sendRequest } = useRequest();

  const [weatherData, setWeatherData] = useState<WeatherDataType>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  // throttle the function to avoid double click
  const searchWeather = useCallback(
    throttle(async (cityName?: string) => {
      setIsLoading(true);
      const result = await sendRequest<WeatherDataType>({
        url: `https://api.weatherapi.com/v1/forecast.json?key=${
          process.env.NEXT_PUBLIC_WEATHER_API_KEY
        }&q=${cityName}&days=${FORECAST_DAY + 1}&aqi=no&alerts=no`,
      });

      if (result.success) {
        setWeatherData(result.data);
        setErrorMessage(undefined);
      } else {
        setWeatherData(undefined);
        setErrorMessage(result.errorMessage);
      }
      setIsLoading(false);
    }, 1000),
    [sendRequest]
  );

  // triggered by Enter
  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      searchWeather(inputRef.current?.value);
    }
  };

  return (
    // container with max-width
    <div className="max-w-5xl w-full sm:px-10 px-5 grow sm:pt-32 pt-24 pb-20">
      <SearchInput ref={inputRef} onKeyDown={onKeyDown} isLoading={isLoading} />

      {/* info section */}
      <div className="w-full py-16 flex flex-col items-center gap-2">
        {/* <CurrentWeather data={mockData} isLoading={isLoading} />
        <CurrentWeatherDetails
          data={filterHourData(mockData.forecast.forecastday[0].hour)}
          isLoading={isLoading}
        />
        <ForecastList
          data={mockData.forecast.forecastday.slice(1)}
          isLoading={isLoading}
        /> */}
        {errorMessage ? (
          <ErrorMessage message={errorMessage} />
        ) : (
          <>
            {/* current weather */}
            <CurrentWeather data={weatherData} isLoading={isLoading} />

            {/* current weather hourly info */}
            <CurrentWeatherDetails
              data={
                // 1st data in forecastday is today
                weatherData?.forecast?.forecastday?.[0]?.hour
                  ? filterDataByHour(weatherData?.forecast.forecastday[0].hour)
                  : undefined
              }
              isLoading={isLoading}
            />

            {/* future weather */}
            <ForecastList
              data={weatherData?.forecast?.forecastday?.slice(1)}
              isLoading={isLoading}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Root;
