import { ForecastDayDataType } from "@/types/type";
import { memo } from "react";
import Skeleton from "./UI-components/skeleton";
import ForecastItem from "./forecast-item";
import { CommonProps } from "@/types/props";
import { Title2 } from "./UI-components/typography";

interface ForecastListProps extends CommonProps {
  data?: ForecastDayDataType[];
}

const ForecastList = memo<ForecastListProps>(({ data, isLoading }) => {
  if (!isLoading && !data) return null;

  return (
    <div className="w-full py-8 flex flex-col items-center gap-3">
      <div className="w-full">
        <Title2 content="5 days weather forecast" />
      </div>

      {isLoading
        ? [1, 2, 3, 4, 5].map((i) => (
            <Skeleton key={i} className="w-full h-[72px]" />
          ))
        : data
        ? data.map((d) => <ForecastItem key={d.date} data={d} />)
        : null}
    </div>
  );
});

ForecastList.displayName = "ForecastList";

export default ForecastList;
