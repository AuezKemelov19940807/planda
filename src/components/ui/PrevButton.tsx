import type { Swiper as SwiperType } from "swiper";
import { RefObject } from "react";
import { ArrowLeft } from "lucide-react";

interface Props {
  swiper: RefObject<SwiperType | null>;
}

export default function PrevButton({ swiper }: Props) {
  return (
    <button
      onClick={() => swiper.current?.slidePrev()}
      className="absolute cursor-pointer left-1 -bottom-8 2xl:top-1/2 2xl:-translate-y-1/2 z-50"
    >
      <span className="w-10 h-10 bg-yellow flex items-center justify-center rounded-full">
        <ArrowLeft size={20} color="#000" />
      </span>
    </button>
  );
}
