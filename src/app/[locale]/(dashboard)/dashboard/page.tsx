"use client";
import { useTranslations } from "next-intl";
export default function Dashboard() {
  const t = useTranslations("HomePage");
  return <h1>{t("title")}</h1>;
}
