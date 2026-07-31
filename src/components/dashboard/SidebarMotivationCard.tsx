import { Target, TrendingUp } from "lucide-react";
export default function SidebarMotivationCard() {
  return (
    <div className="border border-zinc-200 dark:border-zinc-700 rounded-xl p-5 flex flex-col gap-y-1.5 text-sm text-zinc-500 dark:text-zinc-400 py-5">
      <div className="mb-2.5">
        <Target color={"#F5C212"} size={24} />
      </div>
      <p className="max-w-40"> Кун сайын жоспарыныз, максатынызга жакынданыз</p>
      <div className="flex items-end justify-end">
        <TrendingUp color={"#F5C212"} size={42} />
      </div>
    </div>
  );
}
