import LangSwitcher from "@/components/ui/LangSwitcher";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-y-5 pb-10 md:pb-0 flex-col-reverse md:flex-row items-center justify-end h-screen gap-x-10 xl:gap-x-44 md:pl-5">
      <div className="absolute top-5 right-5 z-20 flex gap-2  items-center rounded-2xl bg-white/70 dark:bg-black/50 backdrop-blur-sm shadow-lg p-2">
        <ThemeToggle />
        <LangSwitcher />
      </div>

      <div className="w-full px-3 md:px-0 md:w-1/2 lg:max-w-102.75 lg:w-full">
        {children}
      </div>
      <div className="w-full min-h-20 md:w-1/2 h-full relative">
        <Image
          src="/images/care-food-bg-1.jpg"
          alt="Login Image"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          placeholder="blur"
          blurDataURL="/images/care-food-bg-1.jpg"
          className="object-cover rounded-b-xl md:rounded-l-2xl"
        />
      </div>
    </div>
  );
}
