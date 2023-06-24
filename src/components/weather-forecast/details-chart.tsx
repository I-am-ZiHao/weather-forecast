import { HourDataType } from "@/types/data";
import { memo } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { HighlightText, PlainText } from "../UI-components/typography";
import WeatherIcon from "../UI-components/weather-icon";
import { getTimeFromDateString, normalizeValue } from "@/utils/utils";

interface DetailsChartProps {
  data: HourDataType[];
}

const DetailsChart = memo<DetailsChartProps>(({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="2 5" strokeWidth={0.5} />
        <XAxis dataKey="time" tick={<CustomAxisTick />} />
        <YAxis tick={<CustomYxisTick />} />
        <Tooltip content={<CustomTooltip />} />
        <Area
          type="monotone"
          dataKey="temp_c"
          stroke="#38BDF8"
          strokeWidth={3}
          fill="#38BDF8"
          fillOpacity={0.3}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
});

DetailsChart.displayName = "DetailsChart";

export default DetailsChart;

const CustomAxisTick = ({ x, y, payload }: any) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={10}
        textAnchor="middle"
        fill="#BDC1C6"
        fontSize={14}
      >
        {/* value looks like "2023-06-24 18:00" */}
        {getTimeFromDateString(payload.value)}
      </text>
    </g>
  );
};

const CustomYxisTick = ({ x, y, payload }: any) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={5} textAnchor="end" fill="#BDC1C6" fontSize={14}>
        {/* value is temp */}
        {payload.value}°
      </text>
    </g>
  );
};

interface CustomTooltipProps {
  active?: boolean;
  payload?: {
    value: number; // temp
    payload: HourDataType;
  }[];
  label?: string; // "2023-06-24 18:00"
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length && label) {
    const data = payload[0].payload;

    return (
      <div className="w-max flex flex-col items-center gap-1 bg-white p-4 border-2 border-solid border-color-[#0000001F] rounded">
        {/* time */}
        <PlainText
          content={getTimeFromDateString(label)}
          className="text-[#8E8E8E]"
        />

        {/* icon & rain chance */}
        <div className="w-max flex flex-col items-center">
          <WeatherIcon src={data.condition.icon} />
          <HighlightText content={`${data.chance_of_rain}%`} />
        </div>

        {/* temp */}
        <PlainText
          content={`${normalizeValue(data.temp_c)}°`}
          className="text-[#646464]"
        />
      </div>
    );
  }
  return null;
};
