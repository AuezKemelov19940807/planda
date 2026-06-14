import Link from "next/link";
import { useTranslations } from "next-intl";
type Mode = "login" | "register";

export default function AuthFooter({ mode }: { mode: Mode }) {
  const t = useTranslations("Auth");
  const isLogin = mode === "login";

  return (
    <p className="text-sm font-medium text-center mt-6">
      {isLogin ? (
        <>
          {t("noAccount")}{" "}
          <Link className="text-blue-700" href="/register">
            {t("register")}
          </Link>
        </>
      ) : (
        <>
          {t("haveAccount")}{" "}
          <Link className="text-blue-700" href="/login">
            {t("login")}
          </Link>
        </>
      )}
    </p>
  );
}
