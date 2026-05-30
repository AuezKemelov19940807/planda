import Image from "next/image";

export default function Logo() {
  return (
    <div className="mb-24 flex items-center justify-center">
      <Image src="/icons/logo-planola.jpg" alt="Logo" width={150} height={72} />
    </div>
  );
}
