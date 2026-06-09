"use client";

import { useState } from "react";
import { toast } from "sonner";
import { api } from "@/shared/lib/api";
import EmailField from "./EmailField";
import AuthButton from "./AuthButton";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email енгізіңіз");
      return;
    }

    try {
      setLoading(true);

      await api.post("/auth/forgot-password", {
        email,
      });

      setSent(true);
      toast.success("Сілтеме email-ға жіберілді");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Қате орын алды");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="text-center text-sm text-gray-600">
        Егер аккаунт бар болса, email-ға қалпына келтіру сілтемесі жіберілді.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
      <EmailField value={email} onChange={setEmail} />

      <AuthButton loading={loading} text="Сілтеме жіберу" />
    </form>
  );
}
