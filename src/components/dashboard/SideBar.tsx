import Logo from "../ui/Logo";
import Navigation from "./Navigation";

export default function SideBar({ isOpen }: { isOpen: boolean }) {
  return (
    <aside
      className={`hidden lg:block overflow-hidden transition-all duration-300 ease-in-out ${
        isOpen ? "w-86.25 opacity-100" : "w-0 opacity-0"
      }`}
    >
      <div className="flex flex-col gap-y-24">
        <Logo />
        <Navigation />
      </div>
    </aside>
  );
}
