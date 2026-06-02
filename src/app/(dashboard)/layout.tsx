import SideBar from "../../components/SideBar";
import Header from "../../components/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto py-4">
      <div className="flex gap-x-20">
        <SideBar />
        <main className="w-full min-h-full">
          <Header />
          <div className="bg-gray-200 rounded-2xl p-5 w-full ">{children}</div>
        </main>
      </div>
    </div>
  );
}
