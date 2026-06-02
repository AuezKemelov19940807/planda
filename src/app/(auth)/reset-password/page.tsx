"use client";
export const dynamic = "force-dynamic";

import AuthLayout from "@/components/auth/AuthLayout";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <AuthLayout
      title="Құпия сөзді қалпына келтіру"
      subtitle="Жаңа құпия сөзді енгізіңіз"
    >
      <ResetPasswordForm />
    </AuthLayout>
  );
}
