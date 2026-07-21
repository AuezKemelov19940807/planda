import {
  CalendarDays,
  Goal,
  Smile,
  Wallet,
  ChartColumnIncreasing,
  CloudSun,
} from "lucide-react";

const items = [
  {
    id: 1,
    title: "Big 3",
    desc: "Сфокусируйтесь на главном",
    icon: Goal,
  },
  {
    id: 2,
    title: "Планировщик",
    desc: "Планируйте свой день по часам",
    icon: CalendarDays,
  },
  {
    id: 3,
    title: "Настроение",
    desc: "Отслеживайте свое состояние",
    icon: Smile,
  },
  {
    id: 4,
    title: "Финансы",
    desc: "Контролируйте свои доходы и расходы",
    icon: Wallet,
  },
  {
    id: 5,
    title: "Аналитика",
    desc: "Анализируйте прогресс и результат",
    icon: ChartColumnIncreasing,
  },
  {
    id: 6,
    title: "Погода",
    desc: "Планируйте день с учетом погоды",
    icon: CloudSun,
  },
];

export default function Features() {
  return (
    <div className="mb-5">
      <div className="container mx-auto px-4 lg:px-5">
        <div className="shadow-md border-gray-100 dark:border-white/10 border rounded-xl pt-5 md:pt-8 pb-5 px-2 md:px-5">
          <h2 className="font-semibold text-xl sm:text-2xl text-center mb-5">
            Все интрументы для
            <span className="text-yellow"> вашей продуктивности</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-6 gap-2 md:gap-5 w-full ">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="shadow-xl w-full  border-gray-100 dark:border-white/10 flex flex-col  items-center justify-center gap-y-5  p-5 border rounded-xl"
                  key={item.id}
                >
                  <Icon
                    color="#F5C212"
                    className="w-8 h-8 md:w-12.5 md:h-12.5"
                  />
                  <h5 className="font-bold text-sm md:text-base flex-1">
                    {item.title}
                  </h5>
                  <p className="text-black text-sm md:text-base dark:text-white opacity-70 text-center">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
