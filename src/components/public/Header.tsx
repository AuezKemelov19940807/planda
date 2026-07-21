"use client";
import { useEffect, useState } from "react";
import LangSwitcher from "../ui/LangSwitcher";
import Logo from "../ui/Logo";
import ThemeToggle from "../ui/ThemeToggle";
import { Menu } from "lucide-react";
import HeaderMenu from "../ui/Menu";
import { usePathname, useRouter } from "next/navigation";

const locales = ["en", "kk", "ru"];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const segments = pathname.split("/");
  const currentLocale = segments[1];

  const changeLang = (locale: string) => {
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className=" w-full px-4 lg:px-5 py-2.5 lg:py-5">
      <div className="flex container mx-auto items-center justify-between">
        <Logo />
        {/* Burger */}
        <button
          className="block lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu />
        </button>
        <div
          className={`fixed  lg:hidden top-0 left-0 w-full h-full bg-black/50 z-50 transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div
          className={`fixed lg:hidden top-0  overflow-y-auto px-5 left-0 w-64 h-full bg-white dark:bg-zinc-950 z-50 transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col ">
            <div className=" flex-1 flex flex-col gap-y-5 ">
              <Logo />

              <HeaderMenu />
            </div>

            <div className=" mb-5">
              <button className="font-semibold text-xl mt-5">
                <span>Войти</span>
              </button>
              <button className="font-semibold mt-5 bg-yellow text-black px-2.5 2xl:px-5 py-2.5 rounded-xl ">
                <span>Начать бесплатно</span>
              </button>
              <div className="flex  py-2 mt-2">
                {locales.map((l) => (
                  <button
                    key={l}
                    className={`cursor-pointer px-2 py-1 hover:opacity-70 ${l === currentLocale ? "font-bold bg-yellow rounded-lg " : ""}`}
                    onClick={() => changeLang(l)}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block">
          <HeaderMenu />
        </div>

        <div className="hidden lg:flex items-center justify-between gap-x-2.5 2xl:gap-x-5">
          <div className="flex items-center gap-x-2.5 2xl:gap-x-5">
            <div className="flex items-center gap-x-2.5">
              <ThemeToggle />
              <LangSwitcher />
            </div>
            <div className="flex items-center  gap-x-2.5 2xl:gap-x-5">
              <button className="font-semibold">
                <span>Войти</span>
              </button>
              <button className="font-semibold bg-yellow text-black px-2.5 2xl:px-5 py-2.5 rounded-xl ">
                <span>Начать бесплатно</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
