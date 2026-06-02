"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { api } from "@/shared/lib/api";
import PasswordField from "./PasswordField";
import AuthButton from "./AuthButton";

export default function ResetPasswordForm() {
  const router = useRouter();

  const [token, setToken] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setToken(params.get("token"));
  }, []);

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
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-y-5 " onSubmit={handleSubmit}>
      <PasswordField mode="register" value={password} onChange={setPassword} />
      <AuthButton loading={loading} text="Құпия сөзді жаңарту" />
    </form>
  );
}
