"use client";

import { navigation } from "@/shared/config/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-y-4">
      {navigation.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.path;

        return (
          <Link
            className={`py-5 px-7 rounded-2xl font-semibold flex items-center gap-x-6 transition
              ${isActive ? "bg-black text-white" : "text-black bg-white"}
            `}
            key={item.path}
            href={item.path}
          >
            <Icon
              size={24}
              className={isActive ? "text-yellow-400" : "text-gray-400"}
            />
            <span>{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
