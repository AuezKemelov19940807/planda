import DailyReflectionBlock from "@/components/dashboard/DailyReflectionBlock";
import DashboardCard from "@/components/dashboard/DashboardCard";
import FinanceReport from "@/components/dashboard/FinanceReport";
import MiddleSection from "@/components/dashboard/MiddleSection";
import TodayHeader from "@/components/dashboard/TodayHeader";

import TopSection from "@/components/dashboard/TopSection";
import { Wallet } from "lucide-react";

export default function Today() {
  return (
    <div className="">
      <div className="lg:hidden mb-5 ">
        <TodayHeader />
      </div>

      {/* Calendar && Mood && weather */}
      <TopSection />
      {/* Goal && Plans && Finance */}
      <MiddleSection />
      {/* Reflections */}

      {/* <DailyReflectionBlock /> */}
    </div>
  );
}
