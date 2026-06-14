"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { initAuth, isHydrated } = useAuthStore();

  useEffect(() => {
    initAuth();
  }, []);

  if (!isHydrated) {
    return null; // или skeleton layout
  }

  return children;
}
