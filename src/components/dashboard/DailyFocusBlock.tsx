"use client";
import { useState } from "react";
import Checklist from "./Checklist";
import { ChecklistItem } from "@/shared/types/ChecklistItem";

export default function DailyFocusBlock() {
  const [goals, setGoals] = useState<ChecklistItem[]>([
    { id: crypto.randomUUID(), text: "", done: false },
    { id: crypto.randomUUID(), text: "", done: false },
    { id: crypto.randomUUID(), text: "", done: false },
  ]);

  const [plans, setPlans] = useState<ChecklistItem[]>([
    { id: crypto.randomUUID(), text: "", done: false },
    { id: crypto.randomUUID(), text: "", done: false },
    { id: crypto.randomUUID(), text: "", done: false },
    { id: crypto.randomUUID(), text: "", done: false },
    { id: crypto.randomUUID(), text: "", done: false },
    { id: crypto.randomUUID(), text: "", done: false },
  ]);

  return (
    <div className="grid w-full md:grid-cols-2 gap-5 mb-5">
      <Checklist
        title="Үш негізгі мақсат"
        placeholderPrefix="Мақсат"
        items={goals}
        onChange={setGoals}
      />
      <Checklist
        title="Бүгінгі жоспар"
        placeholderPrefix="Жоспар"
        items={plans}
        onChange={setPlans}
      />
    </div>
  );
}
