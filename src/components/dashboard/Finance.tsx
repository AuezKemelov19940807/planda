import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Car,
  House,
  Laptop,
  ShoppingCart,
  Utensils,
  Wallet,
  Wifi,
} from "lucide-react";
import DashboardCard from "./DashboardCard";
import FinanceTransactionList from "./FinanceTransactionList";

export default function Finance() {
  const incomes = [
    {
      id: 1,
      icon: BriefcaseBusiness,
      title: "Жалақы",
      description: "Негізгі жұмыс",
      amount: "400 000 тг",
      time: "05:32",
    },
    {
      id: 2,
      icon: Laptop,
      title: "Фриланс",
      description: "Upwork",
      amount: "250 000 тг",
      time: "08:11",
    },
  ];

  const expenses = [
    {
      id: 1,
      icon: ShoppingCart,
      title: "Азық-түлік",
      description: "Magnum",
      amount: "18 450 тг",
      time: "09:20",
    },
    {
      id: 2,
      icon: Car,
      title: "Жанармай",
      description: "Qazaq Oil",
      amount: "15 000 тг",
      time: "11:45",
    },
    {
      id: 3,
      icon: Utensils,
      title: "Түскі ас",
      description: "Coffee Boom",
      amount: "6 800 тг",
      time: "13:15",
    },
  ];

  return (
    <DashboardCard
      title="Каржы есебы"
      icon={<Wallet className="dark:text-yellow  w-5 md:w-7 md:h-7 h-5" />}
      border
      action={
        <button className="cursor-pointer text-sm border border-transparent dark:border-yellow bg-[#FFF4D0] dark:bg-[#121211] text-black dark:text-yellow rounded-md px-5 py-2">
          + Қосу
        </button>
      }
    >
      <div className="flex flex-col gap-y-2">
        <FinanceTransactionList
          title="Табыстар"
          totalLabel="Күндік жалпы табыс:"
          total="650 000 тг"
          color="text-green-500"
          iconBg="bg-green-500"
          items={incomes}
        />
        <FinanceTransactionList
          title="Шығыстар"
          totalLabel="Күндік жалпы шығын:"
          total="125 000 тг"
          color="text-red-500"
          iconBg="bg-red-500"
          items={expenses}
        />
        <button className="flex items-center justify-center gap-x-2">
          <span className="text-yellow">Барлыгын кору</span>
          <ArrowRight className="text-yellow" />
        </button>
      </div>
    </DashboardCard>
  );
}
