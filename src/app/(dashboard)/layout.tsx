import SideBar from "../../components/SideBar";
import Header from "../../components/Header";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto py-4">
      <div className="flex">
        <SideBar />
        <main className="w-full h-full">
          <Header />
          <div className="bg-gray-200 w-full h-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
