import Link from "next/link";
import Image from "next/image";
export default function Logo() {
  return (
    <Link className="flex items-center justify-center" href="/">
      Logo
      {/* <Image
        src="/icons/logo-planola-light.png"
        alt="Logo light"
        width={150}
        height={60}
        className="dark:hidden"
      />

      <Image
        src="/icons/logo-planola-dark.png"
        alt="Logo dark"
        width={150}
        height={60}
        className="hidden dark:block"
      /> */}
    </Link>
  );
}
