import TodayHeader from "@/components/dashboard/TodayHeader";
import WeatherSelector from "@/components/dashboard/WeatherSelector";
import MoodSelector from "@/components/dashboard/MoodSelector";

export default function TopSection() {
  return (
    <div className="flex flex-col gap-y-5 md:flex-row md:items-center w-full pb-10 2xl:gap-x-10 md:justify-between">
      <TodayHeader />
      <div className="flex flex-col xl:flex-row gap-y-5 xl:w-fit xl:items-center xl:justify-end gap-x-2.5">
        <MoodSelector />
        <WeatherSelector />
      </div>
    </div>
  );
}
