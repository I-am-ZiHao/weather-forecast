import { ForecastDayDataType } from "@/types/type";
import { memo } from "react";
import StatusBar from "./UI-components/status-bar";
import Image from "next/image";
import { Label, PlainText } from "./UI-components/typography";

const normalizeTemp = (temp: number) => temp.toFixed(1);

interface ForecastItemProps {
  data: ForecastDayDataType;
}

const ForecastItem = memo<ForecastItemProps>(({ data }) => {
  if (!data) return null;

  const { condition, daily_chance_of_rain, maxtemp_c, mintemp_c } = data.day;

  return (
    <div className="w-full px-8 py-4 flex justify-between items-center flex-wrap gap-3 bg-[#34495E] opacity-80 rounded-lg ease-in-out duration-500 hover:scale-105 hover:opacity-100 animate-fadeInUp">
      {/* date */}
      <div className="sm:w-[20%] w-full">
        <Label content={data.date} />
      </div>

      {/* icon & rain chance */}
      <div className="sm:w-[40%] w-full flex flex-wrap gap-3 items-center">
        <Image
          src={`https:${condition.icon}`}
          width={40}
          height={40}
          alt="weather icon"
        />
        <Label content={`${daily_chance_of_rain}%`} />
        <PlainText content={condition.text} />
      </div>

      {/* mix & max temp */}
      <div className="w-max flex gap-3 items-center">
        <PlainText content={normalizeTemp(mintemp_c)} />
        <StatusBar />
        <PlainText content={normalizeTemp(maxtemp_c)} />
      </div>
    </div>
  );
});

ForecastItem.displayName = "ForecastItem";

export default ForecastItem;
