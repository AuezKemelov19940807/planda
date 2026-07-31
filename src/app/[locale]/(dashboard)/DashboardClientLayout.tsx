"use client";

import Header from "@/components/dashboard/Header";
import SideBar from "@/components/dashboard/SideBar";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store/auth.store";
export default function DashboardClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const initAuth = useAuthStore((s) => s.initAuth);
  const isHydrated = useAuthStore((s) => s.isHydrated);

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  if (!isHydrated) {
    return null; // или Loader
  }
  return (
    <div className="w-full bg-[#FBFCFC] dark:bg-[#090C0E]">
      <div className="flex gap-x-20">
        <SideBar isOpen={sidebarOpen} />

        <main
          className={`
    w-full min-h-screen px-2.5 md:px-5 lg:px-10
    transition-all duration-300
    ${sidebarOpen ? "lg:ml-60" : "lg:ml-0"}
  `}
        >
          <Header onToggleSidebar={() => setSidebarOpen((p) => !p)} />
          <div>{children}</div>
        </main>
      </div>
    </div>
  );
}
