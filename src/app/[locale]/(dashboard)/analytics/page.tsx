"use client";

import { useTranslations } from "next-intl";

export default function Analytics() {
  const t = useTranslations("home");

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
}
