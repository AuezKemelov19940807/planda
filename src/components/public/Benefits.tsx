import { CheckCircle } from "lucide-react";

const items = [
  {
    id: 1,
    title: "Основано на современных методиках продуктивности",
  },
  {
    id: 2,
    title: "Все важные инструменты в одном месте",
  },
  {
    id: 3,
    title: "Минималистичный и удобный интерфейс",
  },
  {
    id: 4,
    title: "Работает на всех устройствах",
  },
  {
    id: 5,
    title: "Ваши данные в безопасности",
  },
];

export default function Benefits() {
  return (
    <div className="mb-5">
      <div className="container mx-auto px-4 lg:px-5">
        <div className="relative overflow-hidden   flex flex-col lg:flex-row gap-y-5 lg:gap-y-0 justify-between  shadow-md border-gray-100 dark:border-white/10 border rounded-xl pt-5 md:pt-8 pb-5 px-2 md:px-5">
          <div className="basis-1/2">
            <h2 className="font-semibold text-center md:text-left text-xl md:text-2xl mb-5">
              Почему
              <span className="text-yellow"> Planola?</span>
            </h2>
            <ul className="flex flex-col gap-y-5">
              {items.map((item) => (
                <li key={item.id} className="flex gap-x-2">
                  <CheckCircle
                    color="#F5C212"
                    className="shrink-0 h-4 w-4 sm:w-5 sm:h-5 "
                  />
                  <span className="text-black text-sm md:text-base opacity-70 dark:text-white">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 grid grid-cols-10 gap-3 opacity-20">
            {Array.from({ length: 200 }).map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-yellow" />
            ))}
          </div>
          <div className="flex flex-col-reverse gap-y-5 sm:flex-row items-center basis-1/2 ">
            <img
              src="/images/macbook.svg"
              alt=""
              className="w-full sm:w-[80%] max-w-140"
            />

            <img
              src="/images/iphone.svg"
              alt=""
              className="w-full sm:w-[20%] max-w-35 -ml-5 shrink-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
