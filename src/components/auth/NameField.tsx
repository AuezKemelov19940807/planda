"use client";
import { useTranslations } from "next-intl";
interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function NameField({ value, onChange }: Props) {
  const t = useTranslations("Auth");
  return (
    <fieldset>
      <label className="block text-sm font-medium text-gray-700">
        {t("name")}
      </label>
      <input
        className="border-gray-300 border  outline-none py-2 px-2.5 rounded-lg w-full text-xs text-gray"
        type="text"
        placeholder={t("namePlaceholder")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete="name"
      />
    </fieldset>
  );
}
