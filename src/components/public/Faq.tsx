"use client";
import { Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const items = [
  {
    id: 1,
    question: "Есть ли бесплатная версия?",
    answer:
      "Да, у нас есть бесплатная версия с ограниченными возможностями. Она подходит для знакомства с сервисом и ежедневного планирования. Для доступа ко всем функциям доступны платные тарифы.",
  },
  {
    id: 2,
    question: "На каких устройствах работает Planola?",
    answer:
      "Planola работает в современных браузерах на компьютерах, планшетах и смартфонах. Вы можете пользоваться сервисом с любого устройства.",
  },
  {
    id: 3,
    question:
      "Можно ли пользоваться сервисом бесплатно без ограничения по времени?",
    answer:
      "Да, бесплатный тариф не ограничен по времени. При необходимости вы всегда сможете перейти на платный план и получить дополнительные функции.",
  },
  {
    id: 4,
    question: "Мои данные защищены?",
    answer:
      "Да. Мы используем современные методы защиты данных и безопасное соединение, чтобы обеспечить конфиденциальность вашей информации.",
  },
  {
    id: 5,
    question: "Можно ли изменить тариф позже?",
    answer:
      "Конечно. Вы можете перейти на более высокий тариф или вернуться на бесплатный в любое удобное время.",
  },
  {
    id: 6,
    question: "Будет ли мобильное приложение?",
    answer:
      "Да, мобильные приложения для iOS и Android находятся в разработке. Сейчас сервис полностью адаптирован для мобильных браузеров.",
  },
  {
    id: 7,
    question: "Можно ли вести учет финансов?",
    answer:
      "Да. Вы можете добавлять доходы и расходы, создавать собственные категории и анализировать финансовую статистику.",
  },
  {
    id: 8,
    question: "Можно ли планировать задачи на несколько дней вперед?",
    answer:
      "Да. Planola позволяет создавать планы на любой день, управлять задачами и отслеживать их выполнение.",
  },
  {
    id: 9,
    question: "Есть ли поддержка нескольких языков?",
    answer:
      "Да. В приложении доступны русский, английский и казахский языки. В дальнейшем список поддерживаемых языков будет расширяться.",
  },
  {
    id: 10,
    question: "Как связаться с поддержкой?",
    answer:
      "Вы можете написать нам через форму обратной связи в приложении или отправить письмо на электронную почту службы поддержки. Мы стараемся отвечать в кратчайшие сроки.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<number | null>(1);
  const faqRef = useRef<HTMLDivElement>(null);
  const handleToggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (faqRef.current && !faqRef.current.contains(event.target as Node)) {
        setOpenId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-5">
      <div className="container mx-auto px-4 lg:px-5">
        <div className="shadow-md border-gray-100 dark:border-white/10 border rounded-xl pt-5 md:pt-8 pb-5 px-2 md:px-5">
          <h2 className="font-semibold text-xl md:text-2xl text-center mb-5">
            Часто задаваемые
            <span className="text-yellow"> вопросы</span>
          </h2>
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-5 items-start"
            ref={faqRef}
          >
            {items.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div
                  className="shadow-md border-gray-100 cursor-pointer dark:border-white/10 border rounded-xl px-2.5 md:px-5 py-1.5 md:py-2.5"
                  key={item.id}
                  onClick={() => handleToggle(item.id)}
                >
                  <button className="flex items-center cursor-pointer w-full justify-between gap-x-2">
                    <p className="text-left text-sm md:text-base font-medium">
                      {item.question}
                    </p>
                    <span
                      className={`border-3  bg-black border-gray-300 p-1 flex items-center transition-all duration-300 justify-center rounded-full ${isOpen ? "rotate-45" : ""} `}
                    >
                      <Plus
                        className=" w-4 h-4 sm:w-5 sm:h-5"
                        color="#F5C212"
                      />
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? "max-h-40 mt-3 pt-3" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm text-gray-500 dark:text-white/50">
                      {item.answer}
                    </p>
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
