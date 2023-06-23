import { ForecastDayDataType } from "@/types/data";
import { memo } from "react";
import Skeleton from "../UI-components/skeleton";
import ForecastItem from "./forecast-item";
import { CommonProps } from "@/types/props";
import { Title2 } from "../UI-components/typography";
import { FORECAST_DAY } from "@/config";

interface ForecastListProps extends CommonProps {
  data?: ForecastDayDataType[];
}

// list of info for future weather
const ForecastList = memo<ForecastListProps>(({ data, isLoading }) => {
  if (!isLoading && !data) return null;

  return (
    <div className="w-full py-8 flex flex-col items-center gap-3 ">
      <div className="w-full animate-fadeInUp">
        <Title2 content={`${FORECAST_DAY} days weather forecast`} />
      </div>

      {isLoading
        ? new Array(FORECAST_DAY)
            .fill(1)
            .map((_, index) => (
              <Skeleton key={index} className="w-full h-[72px]" />
            ))
        : data
        ? data.map((d) => <ForecastItem key={d.date} data={d} />)
        : null}
    </div>
  );
});

ForecastList.displayName = "ForecastList";

export default ForecastList;
