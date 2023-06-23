import { WeatherDataType } from "@/types/data";
import { memo } from "react";
import { PlainText, Title1, Title2 } from "../UI-components/typography";
import Skeleton from "../UI-components/skeleton";
import { CommonProps } from "@/types/props";
import WeatherIcon from "../UI-components/weather-icon";

interface CurrentWeatherProps extends CommonProps {
  data?: WeatherDataType;
}

// main info for current weather
const CurrentWeather = memo<CurrentWeatherProps>(({ data, isLoading }) => {
  if (isLoading) return <Skeleton />;
  if (!data) return null;

  const { temp_c, condition } = data.current;

  return (
    <div className="w-max max-w-full py-8 sm:px-16 px-8 flex flex-col items-center gap-3 bg-[#34495E] rounded-lg animate-fadeInUp">
      {/* city */}
      <Title2 content={data.location.name} />

      {/* temp */}
      <div className="text-white">
        <Title1 content={temp_c} />
        <span className="align-top text-lg">°C</span>
      </div>

      {/* icon & condition */}
      <div className="w-max max-w-full flex gap-2 items-center">
        <WeatherIcon src={condition.icon} />
        <PlainText
          content={condition.text}
          className="whitespace-break-spaces"
        />
      </div>
    </div>
  );
});

CurrentWeather.displayName = "CurrentWeather";

export default CurrentWeather;
