"use client";

import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const weekdaysKZ = [
  "Жексенбі",
  "Дүйсенбі",
  "Сейсенбі",
  "Сәрсенбі",
  "Бейсенбі",
  "Жұма",
  "Сенбі",
];

function formatDateTime(date: Date) {
  const day = weekdaysKZ[date.getDay()];
  const dayNum = date.getDate();
  const year = date.getFullYear();

  const time = new Intl.DateTimeFormat("kk-KZ", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

  return `${day} ${dayNum}, ${year} | ${time}`;
}

export default function TodayHeader() {
  const [now, setNow] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement | null>(null);

  // clock
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const displayDate = selectedDate ?? now;

  function isToday(date: Date) {
    const today = new Date();

    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    );
  }

  const isSelectedToday = selectedDate ? isToday(selectedDate) : true;

  return (
    <div ref={ref} className="relative w-fit">
      {/* HEADER */}
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer select-none"
      >
        <p className="text-2xl 2xl:text-4xl font-semibold mb-1.5 text-zinc-900 dark:text-white">
          {isSelectedToday ? "Бүгін" : "Таңдалған күн"}
        </p>

        <p className="2xl:text-xl font-medium text-zinc-600 dark:text-zinc-300">
          {formatDateTime(displayDate)}
        </p>
      </div>

      {/* CALENDAR POPUP */}
      {open && (
        <div className="absolute top-full mt-3 z-50 bg-white dark:bg-zinc-900 shadow-xl rounded-xl p-2">
          <Calendar
            onChange={(val) => setSelectedDate(val as Date)}
            value={selectedDate}
            className="border-none"
          />

          {selectedDate && (
            <button
              onClick={() => setSelectedDate(null)}
              className="w-full mt-2 text-sm text-red-500 hover:underline"
            >
              Бүгінге қайту
            </button>
          )}
        </div>
      )}
    </div>
  );
}
