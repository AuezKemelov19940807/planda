import TextAreaCard from "./TextAreaCard";

export default function DailyReflectionBlock() {
  return (
    <div className="grid md:grid-cols-2 w-full gap-5 mb-5">
      <TextAreaCard title="Шүкіршілік" placeholder="Алғыс білдіріңіз..." />
      <TextAreaCard title="Ойлар" placeholder="Жүрегіңіздегі ойлар... 💭" />
    </div>
  );
}
