import Image from "next/image";
import { memo } from "react";

interface WeatherIconProps {
  src: string;
}

const WeatherIcon = memo<WeatherIconProps>(({ src }) => (
  <Image src={`https:${src}`} width={40} height={40} alt="weather icon" />
));

WeatherIcon.displayName = "WeatherIcon";

export default WeatherIcon;
