"use client";

type Option<T extends string> = {
  label: string;
  value: T;
  icon: React.ReactNode;
};

type Props<T extends string> = {
  title: string;
  options: Option<T>[];
  value: T | null;
  onChange: (value: T) => void;
};

export default function SelectableGrid<T extends string>({
  title,
  options,
  value,
  onChange,
}: Props<T>) {
  return (
    <div className="flex flex-col gap-2.5 w-fit md:w-full xl:w-fit rounded-lg md:rounded-2xl px-2 md:px-5 py-2 md:py-4 bg-white dark:bg-zinc-900 text-black dark:text-white transition">
      <h2 className="text-sm font-semibold">{title}</h2>

      <div className="flex gap-3 flex-wrap">
        {options.map((item) => {
          const isActive = value === item.value;

          return (
            <button
              key={item.value}
              onClick={() => onChange(item.value)}
              className={`flex items-center justify-center p-1.5 md:p-3 rounded-xl cursor-pointer border transition ${
                isActive
                  ? "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white"
                  : "bg-white text-black border-gray-200 hover:bg-gray-100 dark:bg-zinc-800 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-700"
              }`}
              title={item.label}
            >
              {item.icon}
            </button>
          );
        })}
      </div>
    </div>
  );
}
