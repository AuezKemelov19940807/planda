import MoodSelector from "@/components/dashboard/MoodSelector";
import Weather from "./Weather";

export default function TopSection() {
  return (
    <div className="flex flex-col md:flex-row mb-5 gap-5">
      <MoodSelector />
      <Weather />
    </div>
  );
}
