"use client";

import { useTranslations } from "next-intl";
import { navigation } from "@/shared/config/navigation";

export function useNavigation() {
  const t = useTranslations("Navigation");

  return navigation.map((item) => ({
    ...item,
    title: t(item.key),
  }));
}
