"use client";

import { useEffect, useState } from "react";

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
    hour: "numeric",
    minute: "2-digit",
  }).format(date);

  return `${day} ${dayNum}, ${year} | ${time}`;
}

export default function TodayHeader() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <p className="text-4xl font-semibold mb-1.5">Бүгін</p>
      <p className="text-xl font-medium">{formatDateTime(now)}</p>
    </div>
  );
}
