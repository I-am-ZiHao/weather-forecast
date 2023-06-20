import { CurrentWeatherDataType } from "@/types/type";
import { memo } from "react";

interface CurrentWeatherProps {
  data: CurrentWeatherDataType;
}

// TODO: display current weather
const CurrentWeather = memo<CurrentWeatherProps>(({ data }) => {
  console.log("data", data);

  return <div></div>;
});

CurrentWeather.displayName = "CurrentWeather";

export default CurrentWeather;
