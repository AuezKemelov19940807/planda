"use client";

import { CloudRainWind, Droplet, Rainbow, Wind } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Sun,
  CloudSun,
} from "lucide-react";
interface WeatherData {
  temperature_2m: number;
  relative_humidity_2m: number;
  wind_speed_10m: number;
  precipitation: number;
  weather_code: number;
}

interface HourlyWeather {
  time: string[];
  temperature_2m: number[];
  weather_code: number[];
}

interface WeatherResponse {
  current: WeatherData;
  hourly: HourlyWeather;
}

export default function Weather() {
  const [weather, setWeather] = useState<WeatherResponse | null>(null);

  useEffect(() => {
    async function getWeather() {
      const res = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=43.238949&longitude=76.889709&current=temperature_2m,relative_humidity_2m,wind_speed_10m,precipitation,weather_code&hourly=temperature_2m,weather_code&forecast_days=1",
      );

      const data: WeatherResponse = await res.json();

      setWeather(data);
    }

    getWeather();
  }, []);

  function getWeatherText(code: number) {
    switch (code) {
      case 0:
        return "Күн ашық";
      case 1:
      case 2:
        return "Аз бұлтты";
      case 3:
        return "Бұлтты";
      case 61:
      case 63:
      case 65:
        return "Жаңбыр";
      case 71:
      case 73:
      case 75:
        return "Қар";
      case 95:
        return "Найзағай";
      default:
        return "Белгісіз";
    }
  }

  function getWeatherIcon(code: number) {
    const iconClass = "w-10 h-10 2xl:w-17.5 2xl:h-17.5";

    switch (code) {
      // Ясно
      case 0:
        return <Sun className={iconClass} color="#F5C212" />;

      // Переменная облачность
      case 1:
      case 2:
        return <CloudSun className={iconClass} color="#F5C212" />;

      // Пасмурно
      case 3:
        return <Cloud className={iconClass} color="#9CA3AF" />;

      // Морось
      case 51:
      case 53:
      case 55:
      // Дождь
      case 61:
      case 63:
      case 65:
      // Ливень
      case 80:
      case 81:
      case 82:
        return <CloudRain className={iconClass} color="#3B82F6" />;

      // Снег
      case 71:
      case 73:
      case 75:
      case 77:
      case 85:
      case 86:
        return <CloudSnow className={iconClass} color="#60A5FA" />;

      // Гроза
      case 95:
      case 96:
      case 99:
        return <CloudLightning className={iconClass} color="#F59E0B" />;

      default:
        return <Cloud className={iconClass} color="#9CA3AF" />;
    }
  }

  const currentHour = new Date().getHours();

  const startIndex =
    weather?.hourly.time.findIndex((time) => {
      const hour = new Date(time).getHours();
      return hour >= currentHour;
    }) ?? 0;

  return (
    <div className="bg-white dark:bg-[#0F1114] rounded-lg md:rounded-2xl px-2 md:w-fit  md:px-5 xl:px-7 py-2 md:py-4 shadow">
      <p className="font-semibold mb-3 text-sm md:text-base">Ауа райы</p>
      <div className="flex flex-col gap-y-4 md:flex-row md:items-center">
        <div>
          <div className="flex gap-x-2.5 xl:gap-x-5 items-center pr-5 2xl:pr-10  relative md:before:absolute md:before:right-0 md:before:top-1/2   md:before:-translate-1/2 md:before:w-0.5 md:before:h-full md:before:bg-light-gray md:dark:before:bg-[#242629]">
            {weather ? (
              getWeatherIcon(weather?.current.weather_code)
            ) : (
              <Cloud
                className="w-10 h-10 2xl:w-17.5 2xl:h-17.5"
                color="#9CA3AF"
              />
            )}
            {/* Temperature && getWeatherText */}
            <div>
              <p className="md:text-2xl xl:text-3xl font-semibold md:mb-1">
                {weather?.current.temperature_2m ?? "--"}°C
              </p>
              <p className="text-sm md:text-base">
                {" "}
                {weather
                  ? getWeatherText(weather?.current.weather_code)
                  : "..."}
              </p>
            </div>
          </div>
        </div>
        <div className="md:pl-2.5 px-0 xl:px-5 flex flex-col gap-y-2.5 2xl:pl-10">
          <p className="flex items-center gap-x-2">
            <Wind className="w-4 h-4 xl:w-5 xl:h-5" />
            <p className="flex items-center gap-x-2.5">
              <span className="text-zinc-600 text-nowrap text-sm 2xl:text-base">
                Жел:
              </span>
              <span className="text-nowrap">
                {weather?.current.wind_speed_10m ?? "--"} км/c
              </span>
            </p>
          </p>
          <p className="flex items-center gap-x-2">
            <Droplet className="w-4 h-4 xl:w-5 xl:h-5" />
            <p className="flex gap-x-2.5">
              <span className="text-zinc-600 text-nowrap text-sm 2xl:text-base">
                Ылгалдык:
              </span>
              <span className="text-nowrap">
                {weather?.current.relative_humidity_2m ?? "--"}%
              </span>
            </p>
          </p>
          <p className="flex items-center gap-x-2">
            <CloudRainWind className="w-4 h-4 xl:w-5 xl:h-5" />
            <p className="flex gap-x-2.5">
              <span className="text-zinc-600 text-nowrap text-sm 2xl:text-base">
                Жауын-шашын:
              </span>
              <span className="text-nowrap">
                {weather?.current.precipitation ?? "--"} мм
              </span>
            </p>
          </p>
        </div>
      </div>
      {/* <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
        {weather?.hourly.time
          .slice(startIndex, startIndex + 12)
          .map((time, index) => (
            <div
              key={time}
              className="min-w-[70px] rounded-xl bg-zinc-100 dark:bg-zinc-800 p-3 flex flex-col items-center gap-2"
            >
              <span className="text-xs text-zinc-500">
                {index > 0 && time.slice(11, 16)}
              </span>

              {getWeatherIcon(
                weather.hourly.weather_code[startIndex + index],
                true,
              )}

              <span className="font-semibold">
                {Math.round(weather.hourly.temperature_2m[startIndex + index])}°
              </span>
            </div>
          ))}
      </div> */}
    </div>
  );
}
