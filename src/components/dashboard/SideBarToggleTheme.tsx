"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function SideBarToggleTheme() {
  // use State
  const { theme, setTheme, resolvedTheme } = useTheme();
  // Is Dark
  const isDark = resolvedTheme === "dark";
  // Toggle function
  const handleToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="flex items-center justify-center cursor-pointer">
      <div
        className="relative w-20 h-10 rounded-full border-2  border-[#EDEEF0] dark:border-zinc-700 bg-[#F3F2F4] dark:bg-[#151718]"
        onClick={handleToggleTheme}
      >
        {/* Sun Icon */}
        <span className="absolute top-1/2 left-1.5 -translate-y-1/2 z-10 ">
          <Sun
            size={23}
            color={`${theme === "light" ? "#F5C212" : "#9F9FA9"}`}
          />
        </span>
        {/* overlay */}
        <span
          className={`${isDark ? "bg-[#2A2818]" : "bg-white"} absolute top-1/2 -translate-y-1/2 left-0.5 w-8 h-8 rounded-full  transition-transform duration-300 ${
            isDark ? "translate-x-10" : "translate-x-0"
          }`}
        />
        {/* Dark Icon */}
        <span className="absolute top-1/2 right-1.5 -translate-y-1/2 z-10 ">
          <Moon
            size={23}
            color={`${theme === "dark" ? "#F5C212" : "#9F9FA9"}`}
          />
        </span>
      </div>
    </div>
  );
}
