"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useNavigation } from "@/shared/hooks/useNavigation";

interface Props {
  onItemClick?: () => void;
}

export default function Navigation({ onItemClick }: Props) {
  const pathname = usePathname();
  const locale = useLocale();
  const navigation = useNavigation();

  return (
    <nav className="flex flex-col gap-y-3 md:px-5">
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
              font-bold

              ${
                isActive
                  ? "bg-[#FEF6DA] text-black font-black dark:bg-[#1D1B10] dark:text-yellow border-transparent dark:border-yellow dark:border"
                  : "text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
              }
            `}
            onClick={onItemClick}
          >
            <Icon
              size={22}
              className={isActive ? "text-black dark:text-yellow" : ""}
            />
            <span className="font-bold whitespace-nowrap">{item.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
