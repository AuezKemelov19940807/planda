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
export default function UserProfile() {
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickOutside<HTMLDivElement>(() => {
    setIsOpen(false);
  });

  const handleLogOut = async () => {
    await logout();
    router.push("/login");
  };

  return (
    <div ref={ref}>
      {user ? (
        <div className="relative">
          <button
            className="font-semibold cursor-pointer flex items-center gap-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <CircleUserRound size={28} />
            {user.email}
            <ChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"} transition-all top-full mt-2 right-0 min-w-48 duration-300  absolute w-full  left-1/2 px-5 flex flex-col gap-y-5 py-2 transform -translate-x-1/2 shadow-lg bg-white rounded-lg`}
          >
            <button className="w-full cursor-pointer flex items-center gap-2  text-sm  transition-colors">
              <User size={16} />
              Профиль
            </button>

            <button className="w-full cursor-pointer flex items-center gap-2  text-sm  transition-colors">
              <Settings size={16} />
              Настройки
            </button>

            <button
              className="w-full cursor-pointer flex items-center gap-2  text-sm text-red-500 transition-colors"
              onClick={handleLogOut}
            >
              <LogOut size={16} />
              Выход
            </button>
          </div>
        </div>
      ) : (
        <Link
          className="flex items-center text-sm font-medium gap-2"
          href="/login"
        >
          Войти
          <LogIn size={16} />
        </Link>
      )}
    </div>
  );
}
