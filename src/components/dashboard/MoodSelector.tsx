"use client";
import { useState } from "react";

type Mood = "happy" | "focused" | "tired" | "excited" | "sad";

const options = [
  { id: 1, label: "Happy", value: "happy" as Mood, icon: "😊" },
  { id: 2, label: "Focused", value: "focused" as Mood, icon: "😎" },
  { id: 3, label: "Tired", value: "tired" as Mood, icon: "😴" },
  { id: 4, label: "Excited", value: "excited" as Mood, icon: "🤩" },
  { id: 5, label: "Sad", value: "sad" as Mood, icon: "😔" },
];

export default function MoodSelector() {
  const [value, setValue] = useState<Mood | null>(null);

  return (
    <div className="flex flex-col gap-2.5 w-fit rounded-lg md:rounded-2xl px-2 md:px-5 py-2 md:py-4 bg-white dark:bg-[#0F1114] text-black dark:text-white transition shadow">
      <h2 className="font-semibold text-sm md:text-base md:mb-3">Көңіл-күй</h2>

      <div className="flex gap-3">
        {options.map((item) => {
          const isActive = value === item.value;

          return (
            <button
              key={item.value}
              onClick={() => setValue(item.value)}
              className={`flex items-center justify-center w-12  h-12 xl:w-14 xl:h-14 2xl:w-20 2xl:h-20 rounded-xl cursor-pointer   transition ${
                isActive
                  ? "border-yellow border-2"
                  : "border-light-gray dark:border-dark-gray border"
              }`}
              title={item.label}
            >
              <span className="text-3xl 2xl:text-4xl">{item.icon}</span>
            </button>
          );
        })}
      </div>
      <p className="text-zinc-500 text-sm md:text-base">
        Конил куйинизды калай сипаттар единиз?
      </p>
    </div>
  );
}
