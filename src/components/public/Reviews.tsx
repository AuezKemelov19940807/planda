"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import NextButton from "../ui/NextButton";
import PrevButton from "../ui/PrevButton";
import { Star } from "lucide-react";
const items = [
  {
    id: 1,
    fullName: "Александр Иванов",
    avatar: "https://www.loremfaces.net/96/id/1.jpg",
    profession: "Разработчик",
    desc: "Planola помогла мне лучше планировать день и выполнять больше задач без перегрузки.",
    rating: 1,
  },
  {
    id: 2,
    fullName: "Айжан Сейтова",
    avatar: "https://www.loremfaces.net/96/id/2.jpg",
    profession: "Дизайнер",
    desc: "Очень удобный интерфейс. Особенно понравились Big 3 и аналитика продуктивности.",
    rating: 3,
  },
  {
    id: 3,
    fullName: "Дмитрий Ковалев",
    avatar: "https://www.loremfaces.net/96/id/3.jpg",
    profession: "Маркетолог",
    desc: "Использую каждый день. Теперь все задачи, финансы и планы находятся в одном месте.",
    rating: 2,
  },
  {
    id: 4,
    fullName: "Александр Иванов",
    avatar: "https://www.loremfaces.net/96/id/1.jpg",
    profession: "Разработчик",
    desc: "Planola помогла мне лучше планировать день и выполнять больше задач без перегрузки.",
    rating: 4,
  },
  {
    id: 5,
    fullName: "Айжан Сейтова",
    profession: "Дизайнер",
    avatar: "https://www.loremfaces.net/96/id/2.jpg",
    desc: "Очень удобный интерфейс. Особенно понравились Big 3 и аналитика продуктивности.",
    rating: 1,
  },
  {
    id: 6,
    fullName: "Дмитрий Ковалев",
    profession: "Маркетолог",
    avatar: "https://www.loremfaces.net/96/id/3.jpg",
    desc: "Использую каждый день. Теперь все задачи, финансы и планы находятся в одном месте.",
    rating: 5,
  },
];

export default function Reviews() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="mb-5">
      <div className="container mx-auto px-4 lg:px-5">
        <div className="shadow-md border-gray-100 dark:border-white/10 border rounded-xl pt-5 md:pt-8 pb-10 px-2 md:px-5">
          <h2 className="font-semibold text-2xl text-center mb-5">
            Что говорят наши
            <span className="text-yellow"> пользователи</span>
          </h2>
          <div className="flex relative justify-between gap-x-10 w-full  items-center">
            <PrevButton swiper={swiperRef} />
            <Swiper
              spaceBetween={24}
              slidesPerView={3}
              wrapperClass="items-stretch"
              breakpoints={{
                0: {
                  slidesPerView: 1.2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1280: {
                  slidesPerView: 3,
                },
              }}
              className="max-w-325"
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {items.map((item) => (
                <SwiperSlide key={item.id} className="h-auto">
                  <div className="shadow-md min-h-62.5 flex flex-col h-fullt border-gray-100 dark:border-white/10 border rounded-xl p-5 mb-5">
                    <p className="text-black flex-1 dark:text-white opacity-70 mb-5 max-w-80 ">
                      "{item.desc}"
                    </p>
                    <div className="flex flex-col gap-y-2 xl:flex-row justify-between">
                      <div className="flex gap-x-2">
                        <div>
                          <img
                            className="object-cover w-14 h-14 rounded-full "
                            src={item.avatar}
                            alt={item.fullName}
                          />
                        </div>
                        <div>
                          <p>{item.fullName}</p>
                          <p className="text-black text-sm dark:text-white opacity-70">
                            {item.profession}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <Star
                              key={index}
                              color="#F5C212"
                              fill={index < item.rating ? "#F5C212" : "none"}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <NextButton swiper={swiperRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
