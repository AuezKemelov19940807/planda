import { LucideArrowRight, Rocket } from "lucide-react";

export default function Go() {
  return (
    <div className="mb-5">
      <div className="container mx-auto px-4 lg:px-5">
        <div className="relative overflow-hidden flex flex-col xl:flex-row xl:items-center justify-between gap-5 md:gap-10 rounded-3xl border border-gray-200 dark:border-white/10 bg-yellow/10 px-5 md:px-10 py-5 sm:py-10 shadow-md">
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Glow */}
            <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-yellow/20 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-yellow/15 blur-3xl" />

            {/* Rings */}
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full border border-yellow/20" />
            <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full border border-yellow/10" />
            <div className="absolute -bottom-16 left-20 h-64 w-64 rounded-full border border-yellow/10" />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(245,194,18,.06) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(245,194,18,.06) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* Left */}
          <div className="relative z-10 flex flex-col xl:flex-row xl:items-center gap-5 md:gap-8">
            <div className="flex w-20 h-20 md:h-28 md:w-28 items-center justify-center rounded-3xl border-2 border-yellow bg-black/80 shadow-lg">
              <Rocket color="#F5C212" className="w-10 h-10 md:h-15 md:w-15" />
            </div>

            <div className="max-w-2xl">
              <h2 className="mb-3 text-xl md:text-3xl font-bold">
                Начните планировать уже{" "}
                <span className="text-yellow">сегодня</span>
              </h2>

              <p className="leading-7 text-sm md:text-base text-gray-600 dark:text-white/70">
                Planola — это операционная система личной продуктивности,
                которая помогает организовывать день, управлять финансами,
                отслеживать привычки и достигать целей без хаоса. Начните
                бесплатно и создайте свою лучшую систему планирования.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="relative z-10">
            <button className="group flex items-center gap-3 rounded-2xl bg-yellow px-7 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow/30">
              <span>Начать бесплатно</span>

              <LucideArrowRight
                size={20}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
