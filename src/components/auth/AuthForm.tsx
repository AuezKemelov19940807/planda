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
import { toast } from "sonner";
import { useTranslations } from "next-intl";

type Mode = "login" | "register";

interface Props {
  mode: Mode;
}

export default function AuthForm({ mode }: Props) {
  const router = useRouter();
  const { login, register, isActionLoading, error } = useAuthStore();
  const t = useTranslations("Auth");
  const isLogin = mode === "login";

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      try {
        await login({
          email: form.email,
          password: form.password,
        });

        toast.success("Добро пожаловать!");
        router.push("/daily-plan");
      } catch (err: any) {
        toast.error(err.message);
      }
    } else {
      try {
        await register({
          name: form.name,
          email: form.email,
          password: form.password,
        });

        toast.success("Аккаунт успешно создан");
        router.push("/");
      } catch (err: any) {
        toast.error(err.message);
      }
    }
  };

  return (
    <div>
      <form
        className="flex flex-col gap-y-6 mb-5 md:mb-9"
        onSubmit={handleSubmit}
      >
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
        <AuthButton
          loading={isActionLoading}
          text={isLogin ? t("login") : t("register")}
        />
      </form>
      <Deliver />
      <SocialAuth />
      <AuthFooter mode={mode} />
    </div>
  );
}
