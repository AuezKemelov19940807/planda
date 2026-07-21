import { UserPlus, CalendarCheck, Rocket, ChartPie } from "lucide-react";

const items = [
  {
    id: 1,
    index: 1,
    icon: UserPlus,
    title: "Создайте аккаунт",
    desc: "Регистрация займет меньше минуты",
  },
  {
    id: 2,
    index: 2,
    icon: CalendarCheck,
    title: "Запланируйте день",
    desc: "Добавьте Big 3 и распишите задачи по времени",
  },
  {
    id: 3,
    index: 3,
    icon: Rocket,
    title: "Действуйте",
    desc: "Выполняйте задачи и отслеживайте прогресс",
  },
  {
    id: 4,
    index: 4,
    icon: ChartPie,
    title: "Анализируйте",
    desc: "Получайте статистику и улучшайте результаты",
  },
];

export default function HowItWorks() {
  return (
    <div className="mb-5">
      <div className="container mx-auto px-4 lg:px-5">
        <h2 className="font-semibold text-xl md:text-2xl text-center mb-5">
          Как это
          <span className="text-yellow"> работает?</span>
        </h2>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row relative lg:justify-between gap-x-10 w-full  lg:items-center">
            {/* Горизонтальная */}
            <div
              className="absolute hidden lg:block top-5 left-[10.5%] right-[12.5%] h-1"
              style={{
                background:
                  "radial-gradient(circle, #F5C212 2px, transparent 2px) repeat-x",
                backgroundSize: "6px 4px",
              }}
            />
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className="relative pb-10 last:pb-5  flex gap-x-5 lg:gap-x-0 lg:flex-col gap-y-4 lg:items-center lg:justify-center "
                  key={item.id}
                >
                  {index !== items.length - 1 && (
                    <div
                      className="absolute lg:hidden left-5 top-10 w-1 h-[calc(100%-2.5rem)]"
                      style={{
                        background:
                          "radial-gradient(circle, #F5C212 2px, transparent 2px) repeat-y",
                        backgroundSize: "4px 8px",
                      }}
                    />
                  )}
                  <span className="w-10 h-10 min-w-10 min-h-10 relative z-10 rounded-full text-white bg-yellow justify-center font-bold flex items-center ">
                    {item.index}
                  </span>
                  <div className="flex  gap-x-5 flex-col lg:items-center lg:justify-center gap-y-4">
                    <Icon
                      color="#F5C212"
                      className="w-8 h-8 md:w-12.5 md:h-12.5"
                    />
                    <div className="flex flex-col gap-y-2 lg:gap-y-4 lg:items-center lg:justify-center">
                      <h4 className="font-semibold text-sm md:text-base">
                        {" "}
                        {item.title}{" "}
                      </h4>
                      <p className="text-black text-sm md:text-base dark:text-white opacity-70 lg:text-center">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
