import { useSearchParams } from "next/navigation";
import AuthLayout from "@/components/auth/AuthLayout";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return (
    <AuthLayout
      title="Құпия сөзді қалпына келтіру"
      subtitle="Жаңа құпия сөзді енгізіңіз"
    >
      <ResetPasswordForm token={token} />
    </AuthLayout>
  );
}
