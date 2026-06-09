"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { getProfile } = useAuthStore();

  useEffect(() => {
    getProfile().catch(() => {
      router.push("/login");
    });
  }, []);

  return children;
}
