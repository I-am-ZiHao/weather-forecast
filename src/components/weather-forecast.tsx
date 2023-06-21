"use client";

import { KeyboardEvent, useRef, useState } from "react";
import SearchInput from "./search-input";
import ErrorMessage from "./error-message";
import { WeatherDataType } from "@/types/type";
import CurrentWeather from "./current-weather";
import { useRequest } from "@/utils/request";
import ForecastList from "./forecast-list";

const mockData: WeatherDataType = {
  location: {
    name: "Taipei",
    country: "Taiwan",
    localtime: "2023-06-20 16:05",
  },
  current: {
    temp_c: 34.0,
    condition: {
      text: "Partly cloudy",
      icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
    },
  },
  forecast: {
    forecastday: [
      {
        date: "2023-06-21",
        day: {
          maxtemp_c: 34.0,
          mintemp_c: 31.1,
          avgtemp_c: 32,
          daily_chance_of_rain: 85,
          condition: {
            text: "Partly cloudy",
            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
          },
        },
      },
      {
        date: "2023-06-22",
        day: {
          maxtemp_c: 34.0,
          mintemp_c: 31.1,
          avgtemp_c: 32,
          daily_chance_of_rain: 85,
          condition: {
            text: "Partly cloudy",
            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
          },
        },
      },
      {
        date: "2023-06-23",
        day: {
          maxtemp_c: 34.0,
          mintemp_c: 31.1,
          avgtemp_c: 32,
          daily_chance_of_rain: 85,
          condition: {
            text: "Partly cloudy",
            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
          },
        },
      },
      {
        date: "2023-06-24",
        day: {
          maxtemp_c: 34.0,
          mintemp_c: 31.1,
          avgtemp_c: 32,
          daily_chance_of_rain: 85,
          condition: {
            text: "Partly cloudy",
            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
          },
        },
      },
      {
        date: "2023-06-25",
        day: {
          maxtemp_c: 34.0,
          mintemp_c: 31.1,
          avgtemp_c: 32,
          daily_chance_of_rain: 85,
          condition: {
            text: "Partly cloudy",
            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
          },
        },
      },
      {
        date: "2023-06-26",
        day: {
          maxtemp_c: 34.0,
          mintemp_c: 31.1,
          avgtemp_c: 32,
          daily_chance_of_rain: 85,
          condition: {
            text: "Partly cloudy",
            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
          },
        },
      },
    ],
  },
};

const WeatherForecast = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { sendRequest } = useRequest();

  const [weatherData, setWeatherData] = useState<WeatherDataType>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  // triggered by Enter
  const onEnterSearchTerm = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsLoading(true);
      const result = await sendRequest<WeatherDataType>({
        url: `https://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${inputRef.current?.value}&days=6&aqi=no&alerts=no`,
      });

      if (result.success) {
        setWeatherData(result.data);
        console.log("result.data", result.data);
        setErrorMessage(undefined);
      } else {
        setWeatherData(undefined);
        setErrorMessage(result.errorMessage);
      }
      setIsLoading(false);
    }
  };

  return (
    // container with max-width
    <div className="max-w-5xl w-full sm:px-10 px-5 grow sm:pt-32 pt-24 pb-20">
      <SearchInput
        ref={inputRef}
        onKeyDown={onEnterSearchTerm}
        isLoading={isLoading}
      />

      {/* info section */}
      <div className="w-full py-16 flex flex-col items-center gap-2">
        {/* <CurrentWeather data={mockData} isLoading={isLoading} />
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

            {/* future weather */}
            <ForecastList
              data={weatherData?.forecast.forecastday.slice(1)}
              isLoading={isLoading}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherForecast;
