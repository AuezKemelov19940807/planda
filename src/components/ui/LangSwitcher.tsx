"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useClickOutside } from "@/shared/hooks/useClickOutside";
import { usePathname, useRouter } from "next/navigation";

const locales = ["en", "kk", "ru"];

export default function LangSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split("/");
  const currentLocale = segments[1];

  const changeLang = (locale: string) => {
    segments[1] = locale;
    router.push(segments.join("/"));
    setIsOpen(false);
  };

  return (
    <div className="relative text-xs lg:text-base" ref={ref}>
      <button
        className="cursor-pointer flex items-center gap-x-0.5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{currentLocale?.toUpperCase()}</span>

        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`
          absolute right-0 mt-4 md:mt-3 
          rounded-xl shadow-lg border w-fit
          bg-white dark:bg-zinc-900
          border-zinc-200 dark:border-zinc-800
          text-zinc-800 dark:text-zinc-200
          px-4
          transition-all duration-200
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }
        `}
      >
        <div className="flex flex-col py-2">
          {locales
            .filter((l) => l !== currentLocale)
            .map((l) => (
              <button
                key={l}
                className="cursor-pointer px-2 py-1 hover:opacity-70"
                onClick={() => changeLang(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
