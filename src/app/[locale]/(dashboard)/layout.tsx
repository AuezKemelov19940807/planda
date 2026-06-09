import SideBar from "../../../components/dashboard/SideBar";
import Header from "../../../components/dashboard/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto py-4">
      <div className="flex gap-x-20">
        <SideBar />

        <main className="w-full min-h-screen">
          <Header />

          <div
            className="
              rounded-2xl p-5 w-full
              bg-zinc-100 text-zinc-900
              dark:bg-zinc-900 dark:text-zinc-100
              transition-colors duration-300
            "
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
