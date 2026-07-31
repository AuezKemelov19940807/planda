"use client";

import {
  User,
  Settings,
  LogOut,
  Mail,
  ChevronDown,
  CircleUserRound,
  LogIn,
  MessageCircle,
} from "lucide-react";

import { useClickOutside } from "@/shared/hooks/useClickOutside";
import { useAuthStore } from "@/store/auth.store";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

function UserSkeleton() {
  return (
    <div className="flex items-center gap-2 animate-pulse">
      <div className="w-8 h-8 rounded-full bg-zinc-300 dark:bg-zinc-700" />
      <div className="w-24 h-4 rounded bg-zinc-300 dark:bg-zinc-700" />
    </div>
  );
}

export default function UserProfile() {
  const router = useRouter();
  const { user, logout, isAuthLoading, isHydrated } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("UserMenu");
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const handleLogOut = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <div className="relative">
      {/* LOADING */}
      {!isHydrated || isAuthLoading ? (
        <UserSkeleton />
      ) : user ? (
        <>
          {/* Trigger */}
          <div className="flex items-center gap-x-2 md:gap-x-10">
            <div className="flex gap-x-1 md:gap-x-2.5 items-center">
              <span className="w-8 h-8 rounded-full flex items-center justify-center border border-[#26292C]">
                <Mail size={20} />
              </span>
              <span className="text-sm md:text-base">{user.email}</span>
            </div>
            <div
              ref={ref}
              className="flex items-center cursor-pointer gap-x-10 relative w-20 md:w-25  dark:bg-[#0F1113] rounded-full border border-yellow dark:border-[#323537]"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="border-2 border-yellow rounded-full">
                <img
                  className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
                  src={user.image}
                  alt=""
                />
              </div>
              <ChevronDown
                size={20}
                className={`transition-transform  absolute top-1/2 -translate-y-1/2 right-2.5 md:right-5 duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
          {/* Dropdown */}
          <div
            className={`
              absolute right-0 mt-2 z-50
              rounded-xl shadow-lg border
              bg-white dark:bg-zinc-900
              border-zinc-200 dark:border-zinc-800
              text-zinc-800 dark:text-zinc-200 pt-2  

              transition-all duration-200
              ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }
            `}
          >
            <div className="flex flex-col">
              <Link
                className="flex items-center gap-2 py-3 px-6  hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
                href="/profile"
              >
                <User size={16} />
                {t("profile")}
              </Link>

              <button className="flex items-center gap-2  py-3 px-6  hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                <Settings size={16} />
                {t("settings")}
              </button>

              <button
                onClick={handleLogOut}
                className="flex items-center border-t border-gray-700 px-6  gap-2 py-3  text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition"
              >
                <LogOut size={16} />
                {t("logout")}
              </button>
            </div>
          </div>
        </>
      ) : (
        <Link
          href="/login"
          className="
            flex items-center gap-2 text-sm font-medium
            text-zinc-800 dark:text-zinc-200
            hover:text-black dark:hover:text-white
            transition
          "
        >
          Войти
          <LogIn size={16} />
        </Link>
      )}
    </div>
  );
}
