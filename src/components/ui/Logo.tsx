import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center transition-opacity hover:opacity-90"
    >
      <Image
        src="/icons/icon-logo.png"
        alt="PlanDa Logo"
        width={42}
        height={42}
        priority
      />

      <div className="leading-none">
        <span className="text-2xl md:text-3xl font-extrabold tracking-tight bg-linear-to-r from-yellow-400 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
          PlanDa
        </span>
      </div>
    </Link>
  );
}
