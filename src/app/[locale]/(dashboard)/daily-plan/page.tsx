import DailyFocusBlock from "@/components/dashboard/DailyFocusBlock";
import DailyReflectionBlock from "@/components/dashboard/DailyReflectionBlock";
import FinanceReport from "@/components/dashboard/FinanceReport";

import TopSection from "@/components/dashboard/TopSection";

export default function Today() {
  return (
    <div className="flex flex-col items-center  justify-between mb-5">
      {/* Calendar && Mood && weather */}
      <TopSection />
      {/* DailyFocusBlock */}
      <DailyFocusBlock />
      <FinanceReport />
      {/* Reflections */}
      <DailyReflectionBlock />
    </div>
  );
}
