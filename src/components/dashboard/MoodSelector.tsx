"use client";
import { useState } from "react";
import SelectableGrid from "./SelectableGrid";

type Mood = "happy" | "focused" | "tired" | "excited" | "sad";

const options = [
  { label: "Happy", value: "happy" as Mood, icon: "😊" },
  { label: "Focused", value: "focused" as Mood, icon: "😎" },
  { label: "Tired", value: "tired" as Mood, icon: "😴" },
  { label: "Excited", value: "excited" as Mood, icon: "🤩" },
  { label: "Sad", value: "sad" as Mood, icon: "😔" },
];

export default function MoodSelector() {
  const [value, setValue] = useState<Mood | null>(null);

  return (
    <SelectableGrid
      title="Бүгін көңіл-күйіңіз қалай?"
      options={options.map((o) => ({
        ...o,
        icon: <span className="text-xl">{o.icon}</span>,
      }))}
      value={value}
      onChange={setValue}
    />
  );
}
