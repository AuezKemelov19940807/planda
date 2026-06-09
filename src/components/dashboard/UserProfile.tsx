"use client";

import {
  User,
  Settings,
  LogOut,
  ChevronDown,
  CircleUserRound,
  LogIn,
} from "lucide-react";

import { useClickOutside } from "@/shared/hooks/useClickOutside";
import { useAuthStore } from "@/store/auth.store";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

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
  const { user, logout, loading } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  const handleLogOut = async () => {
    await logout();
    router.push("/login");
  };

    if (loading) {
    return <UserSkeleton />;
  }

  return (
    <div ref={ref} className="relative">
      {user ? (
        <>
          {/* Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              flex items-center cursor-pointer gap-2 font-medium text-sm
              text-zinc-800 dark:text-zinc-200
              hover:text-black dark:hover:text-white
              transition
            "
          >
            <CircleUserRound size={28} />
            <span className="">{user.email}</span>

            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown */}
          <div
            className={`
              absolute right-0 mt-3 min-w-52
              rounded-xl shadow-lg border
              bg-white dark:bg-zinc-900
              border-zinc-200 dark:border-zinc-800
              text-zinc-800 dark:text-zinc-200

              transition-all duration-200
              ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2 pointer-events-none"
              }
            `}
          >
            <div className="flex flex-col py-2">
              <button className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                <User size={16} />
                Профиль
              </button>

              <button className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
                <Settings size={16} />
                Настройки
              </button>

              <button
                onClick={handleLogOut}
                className="flex items-center gap-2 px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 transition"
              >
                <LogOut size={16} />
                Выход
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
