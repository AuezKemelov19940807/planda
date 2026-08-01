import {
  LucideArrowRight,
  Play,
  Star,
  StarOff,
  Stars,
  StarsIcon,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="pt-20 lg:pt-30 pb-5">
      <div className="container mx-auto px-2 md:px-4 lg:px-5">
        <div className="flex flex-col lg:flex-row justify-between items-stretch w-full h-full gap-x-10 2xl:gap-x-20">
          <div className="py-5 md:py-10 basis-2/5">
            <p className="text-yellow text-sm sm:text-base md:text-xl font-bold uppercase pb-3 sm:pb-5 md:pb-10">
              Планируй.Действуй.Достигай
            </p>
            <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold max-w-lg pb-5 md:pb-10">
              <span>Операционная система </span>
              <span className="text-yellow">личной продуктивности.</span>
            </h1>
            <div className="pb-5 md:pb-10 text-sm md:text-base text-black dark:text-white font-medium opacity-70">
              <p>Вдохновлено методиками гарварда</p>
              <p>Создано для вашей повседневной жизни.</p>
            </div>
            <div className="inline-flex sm:flex flex-col gap-y-5 sm:gap-y-0 sm:flex-row sm:items-center gap-x-5 pb-5 md:pb-10">
              <button className="font-semibold bg-yellow flex items-center gap-x-2 text-black px-5 py-3 rounded-xl ">
                <span>Начать бесплатно</span>
                <span>
                  <LucideArrowRight size={18} />
                </span>
              </button>
              <button className="font-semibold border-gray-300 dark:border-white/10  border-2 rounded-xl flex items-center gap-x-2 px-5 py-3">
                <span>Смотреть демо</span>
                <span>
                  <Play color="black" />
                </span>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row  gap-5">
              <div className="flex">
                <div className="rounded-full object-cover border-2 border-white overflow-hidden w-14 h-14 sm:w-20 sm:h-20 ">
                  <img src="https://www.loremfaces.net/96/id/1.jpg" alt="" />
                </div>
                <div className="-ml-4 sm:-ml-8 rounded-full object-cover border-2 border-white overflow-hidden w-14 h-14 sm:w-20 sm:h-20">
                  <img src="https://www.loremfaces.net/96/id/2.jpg" alt="" />
                </div>
                <div className="-ml-4 sm:-ml-8 rounded-full object-cover border-2 border-white overflow-hidden w-14 h-14 sm:w-20 sm:h-20">
                  <img src="https://www.loremfaces.net/96/id/3.jpg" alt="" />
                </div>
                <div className="-ml-4 sm:-ml-8 rounded-full object-cover border-2 border-white overflow-hidden w-14 h-14 sm:w-20 sm:h-20">
                  <img src="https://www.loremfaces.net/96/id/4.jpg" alt="" />
                </div>
                <div className="-ml-4 sm:-ml-8 rounded-full object-cover border-2 border-white overflow-hidden w-14 h-14 sm:w-20 sm:h-20">
                  <img
                    className=""
                    src="https://www.loremfaces.net/96/id/5.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-3">
                <div className="flex">
                  <Star color="#F5C212" fill="#F5C212" />
                  <Star color="#F5C212" fill="#F5C212" />
                  <Star color="#F5C212" fill="#F5C212" />
                  <Star color="#F5C212" fill="#F5C212" />
                  <Star color="#F5C212" fill="#F5C212" />
                </div>
                <p className="text-black dark:text-white opacity-70 text-sm max-w-50">
                  Более 10 000 пользователей доверяют Planola
                </p>
              </div>
            </div>
          </div>
          <div className="relative flex-1 w-full min-h-75 lg:min-h-full  rounded-xl overflow-hidden shadow-2xl basis-2/5">
            <img
              className="absolute w-full h-full object-cover left-0 top-0"
              src="/images/auth.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
