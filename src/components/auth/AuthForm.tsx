"use client";
import { useAuthStore } from "@/store/auth.store";
import { useState } from "react";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import AuthButton from "./AuthButton";
import AuthFooter from "./AuthFooter";
import Deliver from "./Divider";
import SocialAuth from "./SocialAuth";
import NameField from "./NameField";
import { useRouter } from "next/navigation";

type Mode = "login" | "register";

interface Props {
  mode: Mode;
}

export default function AuthForm({ mode }: Props) {
  const router = useRouter();
  const { login, register, getProfile, logout, loading, error, user } =
    useAuthStore();
  const isLogin = mode === "login";
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      await login({ email: form.email, password: form.password });
    } else {
      await register({
        name: form.name,
        email: form.email,
        password: form.password,
      });
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-y-6 mb-9" onSubmit={handleSubmit}>
        {!isLogin && (
          <NameField
            value={form.name}
            onChange={(val) => setForm({ ...form, name: val })}
          />
        )}

        <EmailField
          value={form.email}
          onChange={(val) => setForm({ ...form, email: val })}
        />
        <PasswordField
          mode={mode}
          value={form.password}
          onChange={(val) => setForm({ ...form, password: val })}
        />
        <AuthButton text={isLogin ? "Кіру" : "Тіркелу"} />
      </form>
      <Deliver />
      <SocialAuth />
      <AuthFooter mode={mode} />
    </div>
  );
}
