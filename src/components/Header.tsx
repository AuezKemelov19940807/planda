import PageTitle from "./PageTitle";
import UserProfile from "./UserProfile";

export default function Header() {
  return (
    <header className="py-5">
      <div className="flex items-center justify-between">
        <PageTitle />
        <UserProfile />
      </div>
    </header>
  );
}
