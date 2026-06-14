import AuthForm from "@/components/auth/AuthForm";
import AuthLayout from "@/components/auth/AuthLayout";
import { useTranslations } from "next-intl";

export default function Profile() {
  const t = useTranslations("Auth");
  return (
    <AuthLayout title={t("welcome")} subtitle={t("registerSubtitle")}>
      <AuthForm mode="register" />
    </AuthLayout>
  );
}
