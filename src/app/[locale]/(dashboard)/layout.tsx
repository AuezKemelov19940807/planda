import type { Metadata } from "next";
import DashboardClientLayout from "./DashboardClientLayout";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Панель управления Planola. Управляйте задачами, привычками, финансами, календарем и аналитикой в одном месте.",

  robots: {
    index: false,
    follow: false,
    nocache: true,
  },

  alternates: {
    canonical: "https://planola.app/dashboard",
  },

  openGraph: {
    title: "Planola Dashboard",
    description:
      "Личный кабинет Planola для управления продуктивностью, задачами, финансами и целями.",
    url: "https://planola.app/dashboard",
    siteName: "Planola",
    type: "website",
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardClientLayout>{children}</DashboardClientLayout>;
}
