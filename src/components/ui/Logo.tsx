import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link className="" href="/">
      <Image src="/icons/logo-planola.png" alt="Logo" width={140} height={30} />
    </Link>
  );
}
