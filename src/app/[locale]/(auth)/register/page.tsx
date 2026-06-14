import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";
import AuthLayout from "@/components/auth/AuthLayout";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "CareFood — Регистрация",
  description:
    "Создайте аккаунт CareFood, чтобы получать персональные рационы питания, оформлять заказы и следить за здоровым питанием.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Profile() {
  const t = useTranslations("Auth");
  return (
    <AuthLayout title={t("welcome")} subtitle={t("registerSubtitle")}>
      <AuthForm mode="register" />
    </AuthLayout>
  );
}
