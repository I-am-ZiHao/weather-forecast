"use client";

import { KeyboardEvent, useRef, useState } from "react";
import SearchInput from "./search-input";
import ErrorMessage from "./error-message";
import { CurrentWeatherDataType } from "@/types/type";
import CurrentWeather from "./current-weather";
import { useRequest } from "@/utils/request";

// const mockData: CurrentWeatherDataType = {
//   location: {
//     name: "Taipei",
//     country: "Taiwan",
//     localtime: "2023-06-20 16:05",
//   },
//   current: {
//     temp_c: 34.0,
//     temp_f: 93.2,
//     condition: {
//       text: "Partly cloudy",
//       icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
//     },
//   },
// };

const WeatherForecast = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { sendRequest } = useRequest();

  const [currentWeather, setCurrentWeather] =
    useState<CurrentWeatherDataType>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);

  // triggered by Enter
  const onEnterSearchTerm = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsLoading(true);
      const result = await sendRequest<CurrentWeatherDataType>({
        url: `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=${inputRef.current?.value}`,
      });

      if (result.success) {
        setCurrentWeather(result.data);
        setErrorMessage(undefined);
      } else {
        setCurrentWeather(undefined);
        setErrorMessage(result.errorMessage);
      }
      setIsLoading(false);
    }
  };

  return (
    // container with max-width
    <div className="max-w-7xl w-full sm:px-10 px-5 grow sm:pt-32 pt-24 pb-20">
      <SearchInput
        ref={inputRef}
        onKeyDown={onEnterSearchTerm}
        isLoading={isLoading}
      />

      {/* info section */}
      <div className="w-full py-16 flex flex-col items-center gap-2">
        {/* <CurrentWeather data={mockData} isLoading={isLoading} /> */}
        {errorMessage ? (
          <ErrorMessage message={errorMessage} />
        ) : (
          <CurrentWeather data={currentWeather} isLoading={isLoading} />
        )}
      </div>
    </div>
  );
};

export default WeatherForecast;
