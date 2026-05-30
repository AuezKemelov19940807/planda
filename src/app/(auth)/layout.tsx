import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-end h-screen gap-x-44">
      <div className="max-w-102.75 w-full">{children}</div>
      <div className="w-1/2 h-full relative">
        <Image
          src="/images/auth.png"
          alt="Login Image"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover rounded-l-2xl"
        />
      </div>
    </div>
  );
}
