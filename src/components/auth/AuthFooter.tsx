import Link from "next/link";

type Mode = "login" | "register";

export default function AuthFooter({ mode }: { mode: Mode }) {
  const isLogin = mode === "login";

  return (
    <p className="text-sm font-medium text-center mt-6">
      {isLogin ? (
        <>
          Аккаунтыңыз жоқ па?{" "}
          <Link className="text-blue-700" href="/register">
            Тіркелу
          </Link>
        </>
      ) : (
        <>
          Аккаунтыңыз бар ма?{" "}
          <Link className="text-blue-700" href="/login">
            Кіру
          </Link>
        </>
      )}
    </p>
  );
}
