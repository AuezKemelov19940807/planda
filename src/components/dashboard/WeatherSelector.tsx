"use client";
import { Sun, Cloud, CloudRain, Snowflake, Wind } from "lucide-react";

import { useState } from "react";
import SelectableGrid from "./SelectableGrid";

type Weather = "sunny" | "cloudy" | "rainy" | "snowy" | "windy";

const options = [
  { label: "Sunny", value: "sunny" as Weather, icon: <Sun size={20} /> },
  { label: "Cloudy", value: "cloudy" as Weather, icon: <Cloud size={20} /> },
  { label: "Rainy", value: "rainy" as Weather, icon: <CloudRain size={20} /> },
  { label: "Snowy", value: "snowy" as Weather, icon: <Snowflake size={20} /> },
  { label: "Windy", value: "windy" as Weather, icon: <Wind size={20} /> },
];

export default function WeatherSelector() {
  const [value, setValue] = useState<Weather | null>(null);

  return (
    <SelectableGrid
      title="Ауа райы"
      options={options}
      value={value}
      onChange={setValue}
    />
  );
}
