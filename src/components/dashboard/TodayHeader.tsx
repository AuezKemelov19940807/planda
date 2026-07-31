"use client";

import { useEffect, useRef, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalendarCheck } from "lucide-react";
import { useLocale } from "next-intl";

export default function TodayHeader() {
  const [now, setNow] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);
  const locale = useLocale();

  const weekdays = {
    kk: [
      "Жексенбі",
      "Дүйсенбі",
      "Сейсенбі",
      "Сәрсенбі",
      "Бейсенбі",
      "Жұма",
      "Сенбі",
    ],
  };

  const months = {
    kk: [
      "қаңтар",
      "ақпан",
      "наурыз",
      "сәуір",
      "мамыр",
      "маусым",
      "шілде",
      "тамыз",
      "қыркүйек",
      "қазан",
      "қараша",
      "желтоқсан",
    ],
  };

  function formatDate(date: Date, locale: string) {
    if (locale === "kk") {
      return `${date.getDate()} ${months.kk[date.getMonth()]}, ${date.getFullYear()}`;
    }

    return new Intl.DateTimeFormat(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  }

  function formatWeekday(date: Date, locale: string) {
    if (locale === "kk") {
      return weekdays.kk[date.getDay()];
    }

    return new Intl.DateTimeFormat(locale, {
      weekday: "long",
    }).format(date);
  }

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
        className="cursor-pointer flex items-center gap-x-2 select-none"
      >
        <span className="w-12 h-12 rounded-full flex items-center justify-center border border-[#26292C]">
          <CalendarCheck />
        </span>
        <div>
          <div className="flex items-center gap-x-1">
            <p className=" text-zinc-900 dark:text-white text-sm md:text-base">
              {isSelectedToday ? "Бүгін: " : "Таңдалған күн: "}
            </p>

            <p className="font-medium text-zinc-600 dark:text-zinc-300 text-sm md:text-base">
              {formatDate(displayDate, locale)}
            </p>
          </div>
          <div className="font-medium text-zinc-600 dark:text-zinc-300 text-sm md:text-base">
            {formatWeekday(displayDate, locale)}
          </div>
        </div>
      </div>

      {/* CALENDAR POPUP */}
      {open && (
        <div className="absolute top-full mt-3 z-50 bg-white dark:bg-zinc-900">
          <Calendar
            onChange={(val) => setSelectedDate(val as Date)}
            value={selectedDate}
            className="planola-calendar"
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
