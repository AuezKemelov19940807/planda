import { LayoutDashboard, BarChart3, CalendarDays } from "lucide-react";
import { useTranslations } from "next-intl";

// export function useNavigation() {
//   const t = useTranslations("Navigation");

//   return [
//     {
//       title: t("dashboard"),
//       path: "/dashboard",
//       icon: LayoutDashboard,
//     },
//     {
//       title: t("analytics"),
//       path: "/analytics",
//       icon: BarChart3,
//     },
//   ];
// }

export const navigation = [
  // {
  //   key: "dashboard",
  //   path: "/dashboard",
  //   icon: LayoutDashboard,
  // },

  {
    key: "dailyPlan",
    path: "/daily-plan",
    icon: CalendarDays,
  },
  {
    key: "analytics",
    path: "/analytics",
    icon: BarChart3,
  },
];
