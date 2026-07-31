"use client";
import { Heart, MessageCircle } from "lucide-react";
import DashboardCard from "./DashboardCard";
import TextAreaCard from "./TextAreaCard";

export default function DailyReflectionBlock() {
  return (
    <div className="grid md:grid-cols-2 w-full gap-5 mb-5">
      <DashboardCard
        title="Шүкіршілік"
        icon={<Heart className="dark:text-yellow" />}
      >
        <TextAreaCard
          placeholder="Алғыс білдіріңіз..."
          icon="/images/leaves.png"
        />
      </DashboardCard>
      <DashboardCard
        title="Ойлар"
        icon={<MessageCircle className="dark:text-yellow" />}
      >
        <TextAreaCard
          placeholder="Жүрегіңіздегі ойлар... 💭"
          icon="/images/mountain.png"
        />
      </DashboardCard>
    </div>
  );
}
