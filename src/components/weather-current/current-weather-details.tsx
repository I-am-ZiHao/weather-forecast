import { HourDataType } from "@/types/data";
import { memo } from "react";
import { HighlightText, Label, PlainText } from "../UI-components/typography";
import Skeleton from "../UI-components/skeleton";
import { CommonProps } from "@/types/props";
import { getTimeFromDateString, normalizeValue } from "@/utils/utils";
import WeatherIcon from "../UI-components/weather-icon";

interface CurrentWeatherDetailsProps extends CommonProps {
  data?: HourDataType[];
}

// hourly info for today
const CurrentWeatherDetails = memo<CurrentWeatherDetailsProps>(
  ({ data, isLoading }) => {
    if (isLoading)
      return (
        <div className="w-full mt-8">
          <Skeleton className="w-full h-[165px]" />
        </div>
      );

    if (!data) return null;

    return (
      <div className="w-max max-w-full mt-4 overflow-x-auto no-scrollbar px-8 py-4 flex items-center justify-between gap-5 bg-[#34495E] rounded-lg animate-fadeInUp">
        {data.map((d) => (
          <div key={d.time} className="w-max flex flex-col items-center gap-2">
            {/* time looks like "2023-06-23 15:15" */}
            <PlainText content={getTimeFromDateString(d.time)} />

            {/* icon & rain chance */}
            <div className="w-max flex flex-col items-center gap-1">
              <WeatherIcon src={d.condition.icon} />
              <HighlightText content={`${d.chance_of_rain}%`} />
            </div>

            {/* temp */}
            <Label content={`${normalizeValue(d.temp_c)}°`} />
          </div>
        ))}
      </div>
    );
  }
);

CurrentWeatherDetails.displayName = "CurrentWeatherDetails";

export default CurrentWeatherDetails;
