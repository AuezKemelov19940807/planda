"use client";

import Logo from "../ui/Logo";
import Navigation from "./Navigation";

import SideBarToggleTheme from "./SideBarToggleTheme";
import SideBarToggleLang from "./SideBarToggleLang";
import SidebarMotivationCard from "./SidebarMotivationCard";

export default function SideBar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      className={`
    hidden lg:block lg:fixed
    top-0 left-0
    h-screen
    overflow-hidden
    transition-all duration-300
    border-r border-zinc-200 dark:border-zinc-700
    bg-[#F9FAFB] dark:bg-[#0C0E11]
    
    ${
      isOpen
        ? "opacity-100 blur-0 translate-x-0 "
        : "opacity-0 -translate-x-4 pointer-events-none blur-lg"
    }
  `}
    >
      <div className="flex flex-col h-screen">
        <div className="flex flex-col gap-y-5 flex-1">
          <div className="flex items-center pt-5 justify-center">
            <Logo />
          </div>
          <Navigation />
        </div>
        <div className="flex flex-col gap-y-5 mb-20 px-5">
          <SidebarMotivationCard />
          <SideBarToggleTheme />
          <SideBarToggleLang />
        </div>
      </div>
    </aside>
  );
}
