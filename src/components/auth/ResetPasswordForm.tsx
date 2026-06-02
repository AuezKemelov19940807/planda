"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

import PasswordField from "./PasswordField";
import AuthButton from "./AuthButton";
import { api } from "@/shared/lib/api";

export default function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");
  console.log("Token:", token);

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!token) {
      toast.error("Invalid token");
      return;
    }

    try {
      setLoading(true);

      await api.post("/auth/reset-password", {
        token,
        password,
      });

      toast.success("Құпия сөз жаңартылды");

      router.push("/login");
    } catch (error: any) {
      toast.error(
        error.response?.data?.message || "Құпия сөзді жаңарту мүмкін болмады",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
      <PasswordField mode="register" value={password} onChange={setPassword} />

      <AuthButton loading={loading} text="Құпия сөзді жаңарту" />
    </form>
  );
}
