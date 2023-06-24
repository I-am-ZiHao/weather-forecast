import { ForecastDayDataType } from "@/types/data";
import { memo, useState } from "react";
import StatusBar from "../UI-components/status-bar";
import { Label, PlainText } from "../UI-components/typography";
import { normalizeValue } from "@/utils/utils";
import WeatherIcon from "../UI-components/weather-icon";
import Modal from "../UI-components/modal";
import DetailsChart from "./details-chart";

interface ForecastItemProps {
  data: ForecastDayDataType;
}

// weather info for a single day
const ForecastItem = memo<ForecastItemProps>(({ data }) => {
  const [showModal, setShowModal] = useState(false);

  if (!data) return null;

  const onToggleModal = () => setShowModal((prev) => !prev);

  const { condition, daily_chance_of_rain, maxtemp_c, mintemp_c } = data.day;

  return (
    <>
      {/* modal for details */}
      <Modal title={data.date} show={showModal} onClose={onToggleModal}>
        <div className="w-full h-full sm:px-8 sm:py-6 py-3">
          <DetailsChart data={data.hour} />
        </div>
      </Modal>

      {/* main content */}
      <div
        className="w-full px-8 py-4 flex justify-between items-center flex-wrap gap-3 bg-[#34495E] opacity-80 rounded-lg ease-in-out duration-500 cursor-pointer hover:scale-105 hover:opacity-100 animate-fadeInUp"
        onClick={onToggleModal}
      >
        {/* date */}
        <div className="sm:w-[20%] w-full">
          <Label content={data.date} />
        </div>

        {/* icon & rain chance & weather description */}
        <div className="sm:w-[40%] w-full flex flex-wrap gap-3 items-center">
          <WeatherIcon src={condition.icon} />
          <Label content={`${daily_chance_of_rain}%`} />
          <PlainText content={condition.text} />
        </div>

        {/* mix & max temp */}
        <div className="w-max flex gap-3 items-center">
          <PlainText content={normalizeValue(mintemp_c)} />
          <StatusBar />
          <PlainText content={normalizeValue(maxtemp_c)} />
        </div>
      </div>
    </>
  );
});

ForecastItem.displayName = "ForecastItem";

export default ForecastItem;
