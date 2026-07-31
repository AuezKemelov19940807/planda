import {
  Code2,
  GraduationCap,
  Briefcase,
  BriefcaseBusiness,
  Laptop,
} from "lucide-react";

const items = [
  {
    id: 1,
    title: "Разработчики",
    desc: "Планируйте спринты и задачи",
    icon: Code2,
  },
  {
    id: 2,
    title: "Студенты",
    desc: "Управляйте учебой и дедлайнами",
    icon: GraduationCap,
  },
  {
    id: 3,
    title: "Офисные сотрудники",
    desc: "Будьте продуктивнее каждый день",
    icon: Briefcase,
  },
  {
    id: 4,
    title: "Предприниматели",
    desc: "Держите бизнес под контролем",
    icon: BriefcaseBusiness,
  },
  {
    id: 5,
    title: "Фрилансеры",
    desc: "Балансируйте проекты и личную жизнь",
    icon: Laptop,
  },
];

export default function WhoIsItFor() {
  return (
    <section className="mb-5" id="for-who">
      <div className="container mx-auto px-4 lg:px-5">
        <div className="shadow-md border-gray-100 dark:border-white/10 border rounded-xl pt-5 md:pt-8 pb-5 px-2 md:px-5">
          <h2 className="font-semibold text-xl sm:text-2xl text-center mb-5">
            Для кого
            <span className="text-yellow"> Planola</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-5 gap-2 md:gap-5 w-full">
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  className="shadow-xl border-gray-100 dark:border-white/10 flex flex-col h-full gap-y-2 lg:flex-row items-center gap-x-4 p-5 border rounded-xl w-full"
                  key={item.id}
                >
                  <Icon
                    className="w-8 h-8 md:w-12.5 md:h-12.5"
                    color="#F5C212"
                  />
                  <div className="flex flex-col h-full ">
                    <h5 className="font-bold text-sm lg:text-base flex-1 mb-1 text-center lg:text-left">
                      {item.title}
                    </h5>
                    <p className="text-black text-sm dark:text-white opacity-70 text-center lg:text-left">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
