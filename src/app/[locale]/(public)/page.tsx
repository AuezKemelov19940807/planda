import Logo from "@/components/ui/Logo";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <Logo />

      <h1 className="text-3xl font-bold mt-6">Добро пожаловать в CareFood</h1>

      <p className="text-gray-600 mt-2">Лендинг в разработке 🚧</p>

      <p className="text-gray-500 mt-1">
        Но вы уже можете войти в систему и протестировать приложение
      </p>

      <Link
        href="/dashboard"
        className="mt-6 bg-green text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
      >
        Перейти к Админ панели
      </Link>

      <footer className="absolute bottom-6 text-xs text-gray-400">
        © 2026 CareFood
      </footer>
    </main>
  );
}
