import AuthForm from "@/components/auth/AuthForm";
import AuthLayout from "@/components/auth/AuthLayout";

export default function Login() {
  return (
    <AuthLayout
      title="Қайта қош келдіңіз!"
      subtitle="Жұмысты жалғастыру үшін аккаунтқа кіріңіз"
    >
      <AuthForm mode="login" />
    </AuthLayout>
  );
}
