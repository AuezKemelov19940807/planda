import Logo from "../ui/Logo";
import Navigation from "./Navigation";

export default function SideBar() {
  return (
    <aside className="w-86.25">
      <div className="flex flex-col gap-y-24">
        <Logo />
        <Navigation />
      </div>
    </aside>
  );
}
