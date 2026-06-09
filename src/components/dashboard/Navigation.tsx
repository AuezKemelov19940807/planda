"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useNavigation } from "@/shared/hooks/useNavigation";
export default function Sidebar() {
  const pathname = usePathname();
  const locale = useLocale();
  const navigation = useNavigation();

  return (
    <nav className="flex flex-col gap-y-3">
      {navigation.map((item) => {
        const Icon = item.icon;

        const isActive = pathname === `/${locale}${item.path}`;

        return (
          <Link
            key={item.path}
            href={`/${locale}${item.path}`}
            className={`
              flex items-center gap-x-4 px-5 py-4 rounded-xl
              transition-all duration-200

              ${
                isActive
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                  : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }
            `}
          >
            <Icon size={22} className={isActive ? "text-yellow-400" : ""} />
            <span className="font-medium">{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
