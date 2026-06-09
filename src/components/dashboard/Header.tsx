import LangSwitcher from "../ui/LangSwitcher";
import ThemeToggle from "../ui/ThemeToggle";
import PageTitle from "./PageTitle";
import UserProfile from "./UserProfile";

export default function Header() {
  return (
    <header className="py-5">
      <div className="flex items-center justify-between">
        <PageTitle />
        <div className="flex items-center gap-x-4">
          <ThemeToggle />
          <LangSwitcher />
          <UserProfile />
        </div>
      </div>
    </header>
  );
}
