import Link from "next/link";
export default function SignInButton() {
  return (
    <Link href="/login" className="font-semibold cursor-pointer">
      Войти
    </Link>
  );
}
