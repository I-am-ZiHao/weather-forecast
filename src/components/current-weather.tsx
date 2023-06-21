import { CurrentWeatherDataType } from "@/types/type";
import { memo } from "react";
import { Title1, Title2 } from "./typography";
import Image from "next/image";
import Skeleton from "./skeleton";

interface CurrentWeatherProps {
  data?: CurrentWeatherDataType;
  isLoading?: boolean;
}

const CurrentWeather = memo<CurrentWeatherProps>(({ data, isLoading }) => {
  if (isLoading) return <Skeleton />;
  if (!data) return null;

  return (
    <div className="w-max py-8 px-12 flex flex-col items-center gap-3 bg-[#34495E] rounded-lg ">
      {/* city */}
      <Title2 content={data.location.name} />

      {/* temp */}
      <div className="text-white">
        <Title1 content={data.current.temp_c} />
        <span className="align-top text-lg">°C</span>
      </div>

      {/* icon & condition */}
      <div className="w-max flex gap-2 items-center">
        <Image
          src={`https:${data.current.condition.icon}`}
          width={40}
          height={40}
          alt="weather icon"
        />
        <text>{data.current.condition.text}</text>
      </div>
    </div>
  );
});

CurrentWeather.displayName = "CurrentWeather";

export default CurrentWeather;
