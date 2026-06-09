"use client";

import { usePathname } from "next/navigation";
import { useNavigation } from "@/shared/hooks/useNavigation";
import { Menu } from "lucide-react";

export default function PageTitle() {
  const pathname = usePathname();
  const navigation = useNavigation();
  const segments = pathname.split("/");
  const pathWithoutLocale = "/" + segments.slice(2).join("/");

  const current = navigation.find((item) => item.path === pathWithoutLocale);

  return (
    <div>
      <button className="text-2xl cursor-pointer font-bold flex items-center gap-x-4">
        <Menu className="w-5 h-5" />
        {current?.title}
      </button>
    </div>
  );
}
