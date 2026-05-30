"use client";

import { usePathname } from "next/navigation";
import { navigation } from "@/shared/config/navigation";

export default function PageTitle() {
  const pathname = usePathname();

  const current = navigation.find((item) => item.path === pathname);

  return (
    <div>
      <button className="text-2xl cursor-pointer font-bold flex items-center gap-x-4">
        <img src="/icons/page-title.svg" alt="Page Title" />
        {current?.title}
      </button>
    </div>
  );
}
