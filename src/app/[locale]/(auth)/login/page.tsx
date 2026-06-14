import type { Metadata } from "next";
import AuthForm from "@/components/auth/AuthForm";
import AuthLayout from "@/components/auth/AuthLayout";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "CareFood — Вход в аккаунт",
  description:
    "Войдите в свой аккаунт CareFood, чтобы управлять заказами, рационом и персональными настройками питания.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Login() {
  const t = useTranslations("Auth");

  return (
    <AuthLayout title={t("welcomeBack")} subtitle={t("loginSubtitle")}>
      <AuthForm mode="login" />
    </AuthLayout>
  );
}
