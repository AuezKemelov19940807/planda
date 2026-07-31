const locales = ["en", "kk", "ru"];
import { usePathname, useRouter } from "next/navigation";

export default function SideBarToggleLang() {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split("/");
  const currentLocale = segments[1];
  const changeLang = (locale: string) => {
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex gap-x-2 py-2 mt-2">
        {locales.map((l) => (
          <button
            key={l}
            className={`cursor-pointer rounded-lg p-2   text-black font-medium  dark:border ${l === currentLocale ? "dark:text-yellow dark:border-yellow bg-[#FEF6DA] dark:bg-[#1D1B10] " : "text-black border border-zinc-200 dark:border-zinc-700  dark:text-white"}`}
            onClick={() => changeLang(l)}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}
