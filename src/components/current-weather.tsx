import { WeatherDataType } from "@/types/type";
import { memo } from "react";
import { PlainText, Title1, Title2 } from "./UI-components/typography";
import Image from "next/image";
import Skeleton from "./UI-components/skeleton";
import { CommonProps } from "@/types/props";

interface CurrentWeatherProps extends CommonProps {
  data?: WeatherDataType;
}

const CurrentWeather = memo<CurrentWeatherProps>(({ data, isLoading }) => {
  if (isLoading) return <Skeleton />;
  if (!data) return null;

  const { temp_c, condition } = data.current;

  return (
    <div className="w-max max-w-full py-8 px-16 flex flex-col items-center gap-3 bg-[#34495E] rounded-lg animate-fadeInUp">
      {/* city */}
      <Title2 content={data.location.name} />

      {/* temp */}
      <div className="text-white">
        <Title1 content={temp_c} />
        <span className="align-top text-lg">°C</span>
      </div>

      {/* icon & condition */}
      <div className="w-max flex gap-2 items-center">
        <Image
          src={`https:${condition.icon}`}
          width={40}
          height={40}
          alt="weather icon"
        />
        <PlainText content={condition.text} />
      </div>
    </div>
  );
});

CurrentWeather.displayName = "CurrentWeather";

export default CurrentWeather;
