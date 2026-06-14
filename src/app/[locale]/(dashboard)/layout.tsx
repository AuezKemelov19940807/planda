"use client";

import SideBar from "../../../components/dashboard/SideBar";
import Header from "../../../components/dashboard/Header";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="container mx-auto py-4 px-5">
      <div className="flex gap-x-20">
        <SideBar isOpen={sidebarOpen} />

        <main className="w-full min-h-screen">
          <Header onToggleSidebar={() => setSidebarOpen((prev) => !prev)} />

          <div
            className="
              rounded-2xl p-5 w-full
              bg-zinc-100 text-zinc-900
              dark:bg-zinc-900 dark:text-zinc-100
              transition-colors duration-300
            "
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
