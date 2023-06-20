import WeatherForecast from "@/components/weather-forecast";

export default function Home() {
  return (
    // full screen container
    <main className="flex min-h-screen flex-col items-center justify-between">
      <WeatherForecast />
    </main>
  );
}
