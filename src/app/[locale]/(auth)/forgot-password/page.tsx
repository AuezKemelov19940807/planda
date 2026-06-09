import AuthLayout from "@/components/auth/AuthLayout";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      title="Құпия сөзді ұмытып қалдыңыз ба?"
      subtitle="Құпия сөзді қалпына келтіру үшін электрондық поштаңызды енгізіңіз"
    >
      <ForgotPasswordForm />
    </AuthLayout>
  );
}
