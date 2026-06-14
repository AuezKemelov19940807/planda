import AuthForm from "@/components/auth/AuthForm";
import AuthLayout from "@/components/auth/AuthLayout";
import { useTranslations } from "next-intl";
export default function Login() {
  const t = useTranslations("Auth");

  return (
    <AuthLayout title={t("welcomeBack")} subtitle={t("loginSubtitle")}>
      <AuthForm mode="login" />
    </AuthLayout>
  );
}
