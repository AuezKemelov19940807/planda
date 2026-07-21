"use client";

import { ChecklistItem } from "@/shared/types/ChecklistItem";

type Props = {
  title: string;
  placeholderPrefix: string;
  items: ChecklistItem[];
  onChange: (items: ChecklistItem[]) => void;
};

export default function Checklist({
  title,
  placeholderPrefix,
  items,
  onChange,
}: Props) {
  const updateItem = (index: number, data: Partial<ChecklistItem>) => {
    const updated = items.map((item, i) =>
      i === index ? { ...item, ...data } : item,
    );
    onChange(updated);
  };

  const addItem = () => {
    onChange([
      ...items,
      {
        id: crypto.randomUUID(),
        text: "",
        done: false,
      },
    ]);
  };

  const removeItem = (index: number) => {
    onChange(items.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-5 transition">
      <h2 className="text-xl font-semibold mb-5 text-center text-zinc-900 dark:text-zinc-100">
        {title}
      </h2>

      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={item.id} className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => updateItem(index, { done: !item.done })}
              className="w-5 h-5 accent-yellow-500 cursor-pointer"
            />

            <input
              type="text"
              value={item.text}
              onChange={(e) => updateItem(index, { text: e.target.value })}
              placeholder={`${placeholderPrefix} ${index + 1}`}
              className={`w-full border-b bg-transparent outline-none
                border-zinc-300 dark:border-zinc-700
                text-zinc-900 dark:text-zinc-100
                ${
                  item.done
                    ? "line-through text-zinc-400 dark:text-zinc-500"
                    : ""
                }`}
            />

            <button
              onClick={() => removeItem(index)}
              className="text-red-500 text-sm"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={addItem}
        className="mt-4 text-sm text-blue-500 hover:underline"
      >
        + Add
      </button>
    </div>
  );
}
