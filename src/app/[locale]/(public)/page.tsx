import Benefits from "@/components/public/Benefits";
import Faq from "@/components/public/Faq";
import Features from "@/components/public/Features";
import Go from "@/components/public/Go";
import Header from "@/components/public/Header";
import Hero from "@/components/public/Hero";
import HowItWorks from "@/components/public/HowItWorks";
import Reviews from "@/components/public/Reviews";
import WhoIsItFor from "@/components/public/WhoIsItFor";
import Logo from "@/components/ui/Logo";
import {
  Send,
  Globe,
  MessageCircle,
  AtSign,
  Link,
  ExternalLink,
  Share2,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col h-full ">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />

        <WhoIsItFor />

        <Reviews />

        <Faq />

        <Go />
      </main>

      <footer className="container mx-auto px-4 lg:px-5  ">
        <div className="grid md:grid-cols-2-reversed lg:grid-cols-4 gap-10 2xl:gap-30  border-t dark:border-white/10 pt-5 md:pt-10 pb-10">
          <div>
            <Logo />
            <p className="text-sm">© 2026 Planola. Все права защищены.</p>
          </div>
          <div>
            <p className="font-semibold mb-1">Остались вопросы? Мы рядом</p>
            <p className="text-black dark:text-white opacity-70">
              Напишите нам - мы подкскжем и поможем, как упростить планирование
              и достичь целей с Planola
            </p>
          </div>
          <div className="text-black dark:text-white opacity-70">
            <ul className="flex flex-col  gap-y-2 mb-1">
              <li className="flex gap-x-1">
                <Send color="#F5C212" />
                <a href="" target="_blank">
                  Twitter
                </a>
              </li>
              <li className="flex gap-x-1">
                <MessageCircle color="#F5C212" />
                <a href="" target="_blank">
                  Telegram
                </a>
              </li>
              <li className="flex gap-x-1">
                <AtSign color="#F5C212" />
                <a href="" target="_blank">
                  Instagram
                </a>
              </li>
            </ul>
            <p className="text-sm">Отвечаем в течение 1 рабочего дня</p>
          </div>
          <div className="lg:justify-self-end">
            <button className="inline-flex border mb-5 items-center border-yellow px-10 gap-x-4 py-2.5 rounded-2xl">
              <span className="text-yellow font-bold whitespace-nowrap">
                Написать нам
              </span>
              <span>
                <MessageCircle size={18} color="#F5C212" />
              </span>
            </button>
            <p className="text-black text-sm dark:text-white opacity-70">
              Без спама. Без навязование.
            </p>
            <p className="text-black text-sm dark:text-white opacity-70">
              Только по делу
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
