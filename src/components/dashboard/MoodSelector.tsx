"use client";

import { useState } from "react";

type Mood = {
  label: string;
  emoji: string;
  value: string;
};

const moods: Mood[] = [
  { label: "Happy", emoji: "😊", value: "happy" },
  { label: "Focused", emoji: "😎", value: "focused" },
  { label: "Tired", emoji: "😴", value: "tired" },
  { label: "Excited", emoji: "🤩", value: "excited" },
  { label: "Sad", emoji: "😔", value: "sad" },
];

export default function MoodSelector() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  const selectMood = (mood: Mood) => {
    setSelectedMood(mood.value);
  };

  return (
    <div className="flex flex-col gap-2.5 bg-white dark:bg-zinc-900 rounded-2xl px-5 py-4">
      <h2 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
        Бүгін көңіл-күйіңіз қалай?
      </h2>

      <div className="flex gap-2">
        {moods.map((mood) => {
          const isActive = selectedMood === mood.value;

          return (
            <button
              key={mood.value}
              onClick={() => selectMood(mood)}
              className={`
                flex flex-col items-center justify-center px-3 py-2 rounded-xl
                cursor-pointer border transition
                ${
                  isActive
                    ? "bg-black text-white border-black dark:bg-white dark:text-black"
                    : "bg-white text-black border-gray-200 hover:bg-gray-100 dark:bg-zinc-900 dark:text-zinc-200 dark:border-zinc-700 dark:hover:bg-zinc-800"
                }
              `}
            >
              <span className="text-xl">{mood.emoji}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
