"use client";
import { CalendarCheck2, Goal, GripVertical, X } from "lucide-react";
import DashboardCard from "./DashboardCard";
import { useState } from "react";
import { ChecklistItem } from "@/shared/types/ChecklistItem";

export default function Plans() {
  const [plans, setPlans] = useState<ChecklistItem[]>([
    { id: crypto.randomUUID(), text: "", done: false },
    { id: crypto.randomUUID(), text: "", done: false },
    { id: crypto.randomUUID(), text: "", done: false },
    { id: crypto.randomUUID(), text: "", done: false },
    { id: crypto.randomUUID(), text: "", done: false },
    { id: crypto.randomUUID(), text: "", done: false },
  ]);

  const updateItem = (index: number, data: Partial<ChecklistItem>) => {
    const updated = plans.map((item, i) =>
      i === index ? { ...item, ...data } : item,
    );
    setPlans(updated);
  };

  const removePlan = (id: string) => {
    setPlans((prev) => prev.filter((plan) => plan.id !== id));
  };

  const addPlan = () => {
    setPlans((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text: "",
        done: false,
      },
    ]);
  };

  return (
    <DashboardCard
      title="Бугинги жоспар"
      icon={
        <CalendarCheck2 className="dark:text-yellow w-5 md:w-7 md:h-7 h-5" />
      }
      action={
        <button
          className="cursor-pointer text-sm border border-transparent dark:border-yellow bg-[#FFF4D0] dark:bg-[#121211] text-black dark:text-yellow rounded-md px-5 py-2"
          onClick={addPlan}
        >
          + Қосу
        </button>
      }
    >
      <div className="px-2 md:px-5 md:mb-10 flex flex-col flex-1">
        <ul className="dark:bg-[#0D1012] border rounded-lg border-light-gray  dark:border-dark-gray">
          {plans.map((plan, index) => (
            <li
              className="py-3 px-2 md:p-4 border-b flex items-center gap-1.5 md:gap-3 border-light-gray  dark:border-dark-gray last:border-none"
              key={plan.id}
            >
              <input
                type="checkbox"
                checked={plan.done}
                onChange={() => updateItem(index, { done: !plan.done })}
                className="appearance-none  w-4 h-4 md:w-5 md:h-5 shrink-0  rounded-full border-2 border-gray-400 dark:border-yellow cursor-pointer  checked:bg-yellow checked:border-transparent dark:checked:border-yellow transition"
              />
              <input
                type="text"
                value={plan.text}
                onChange={(e) => updateItem(index, { text: e.target.value })}
                placeholder={`Жоспарынызды жазыныз...`}
                className="w-full outline-none text-sm md:text-base placeholder:text-gray-400 dark:placeholder:text-gray-400"
              />
              <div className="flex items-center md:gap-x-5">
                <button className="cursor-pointer">
                  <GripVertical className="text-gray-400" />
                </button>
                <button
                  className="cursor-pointer"
                  onClick={() => removePlan(plan.id)}
                >
                  <X className="text-gray-400" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </DashboardCard>
  );
}
