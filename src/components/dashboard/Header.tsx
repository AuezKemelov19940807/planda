"use client";
import { Menu } from "lucide-react";
import LangSwitcher from "../ui/LangSwitcher";
import ThemeToggle from "../ui/ThemeToggle";
import PageTitle from "./PageTitle";
import UserProfile from "./UserProfile";
import { useState } from "react";
import Logo from "../ui/Logo";
import Navigation from "./Navigation";

interface Props {
  onToggleSidebar: () => void;
}

export default function Header({ onToggleSidebar }: Props) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="py-5">
      <div className="flex items-center justify-between">
        {/* MOBILE MENU BUTTON */}
        <div className="block lg:hidden">
          <Menu
            className="w-5 h-5 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
        </div>

        <PageTitle onClick={onToggleSidebar} />
        <div className="flex items-center justify-end w-full lg:w-fit gap-x-4">
          <ThemeToggle />
          <LangSwitcher />
          <UserProfile />
        </div>
      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`
          fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300
          ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* DRAWER */}
      <div
        className={`
          fixed top-0 left-0 h-full w-72 bg-white dark:bg-zinc-900
          z-50 p-5 shadow-xl
          transform transition-transform duration-300
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* close */}
        <div className="flex justify-between items-center mb-8">
          <Logo />
        </div>

        <Navigation onItemClick={handleCloseMenu} />
      </div>
    </header>
  );
}
