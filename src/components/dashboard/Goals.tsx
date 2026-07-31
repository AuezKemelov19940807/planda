"use client";

import { Goal, Lightbulb } from "lucide-react";
import { useState } from "react";
import { ChecklistItem } from "@/shared/types/ChecklistItem";
import DashboardCard from "./DashboardCard";
export default function Goals() {
  const [goals, setGoals] = useState<ChecklistItem[]>([
    { id: crypto.randomUUID(), text: "", done: false },
    { id: crypto.randomUUID(), text: "", done: false },
    { id: crypto.randomUUID(), text: "", done: false },
  ]);

  const updateItem = (index: number, data: Partial<ChecklistItem>) => {
    const updated = goals.map((item, i) =>
      i === index ? { ...item, ...data } : item,
    );
    setGoals(updated);
  };

  return (
    <DashboardCard
      title="Үш негізгі мақсат"
      icon={<Goal className="dark:text-yellow w-5 md:w-7 md:h-7 h-5" />}
      border
    >
      <div className="px-2 md:px-5 md:mb-10 flex flex-col flex-1">
        <ul className="space-y-3 flex-1">
          {goals.map((item, index) => (
            <li
              key={item.id}
              className="flex items-center gap-1.5 md:gap-3 border border-light-gray  dark:bg-middle-gray dark:border-dark-gray rounded-lg px-2 md:px-4 py-2.5 md:py-4"
            >
              <span className=" text-black dark:text-yellow bg-[#FFF4D0] dark:bg-[#30290D] w-5 h-5 md:w-7 md:h-7 flex items-center justify-center rounded-sm font-medium text-sm">
                {index + 1}
              </span>
              <input
                type="text"
                value={item.text}
                onChange={(e) => updateItem(index, { text: e.target.value })}
                placeholder={`Максатынызды жазыныз...`}
                className="w-full outline-none placeholder:text-gray-400 text-sm md:text-base dark:placeholder:text-gray-400"
              />
              <input
                type="checkbox"
                checked={item.done}
                onChange={() => updateItem(index, { done: !item.done })}
                className="appearance-none w-4 h-4 md:w-5 md:h-5 shrink-0  rounded-full border-2 border-gray-400 dark:border-yellow cursor-pointer  checked:bg-yellow checked:border-transparent dark:checked:border-yellow transition"
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="px-2 md:px-5 md:block hidden">
        <div className="bg-[#FFFCF4] dark:bg-middle-gray rounded-md p-5 flex items-center gap-x-6">
          <span className="relative w-10 h-10 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-yellow-100 dark:bg-[#1B1A15] blur-sm" />
            <Lightbulb className="relative z-10" color="#F5C212" />
          </span>
          <p className="opacity-70 max-w-60">
            Ен манызды 3 максатка фокустаныныз
          </p>
        </div>
      </div>
    </DashboardCard>
  );
}
