import LangSwitcher from "../ui/LangSwitcher";
import Logo from "../ui/Logo";

export default function AuthLayout({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="mb-2.5 md:mb-8 flex flex-col items-center gap-y-2.5 md:gap-y-4">
        <Logo />
        <h1 className="text-2xl lg:text-3xl font-medium text-center">
          {title}
        </h1>
        <p className="text-sm md:text-base text-center">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}
