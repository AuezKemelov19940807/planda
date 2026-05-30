import AuthForm from "@/components/auth/AuthForm";
import AuthLayout from "@/components/auth/AuthLayout";

export default function Profile() {
  return (
    <AuthLayout
      title="PlanDa-ға қош келдіңіз!"
      subtitle="Аккаунт жасау үшін мәліметтерді толтырыңыз"
    >
      <AuthForm mode="register" />
    </AuthLayout>
  );
}
