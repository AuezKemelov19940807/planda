import { useTranslations } from "next-intl";

export default function Deliver() {
  const t = useTranslations("Auth");
  return <p className="text-center text-xs font-medium">{t("or")}</p>;
}
