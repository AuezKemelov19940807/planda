import Logo from "./Logo";
import Navigation from "./Navigation";

export default function SideBar() {
  return (
    <aside className="w-86.25">
      <div>
        <Logo />
        <Navigation />
      </div>
    </aside>
  );
}
