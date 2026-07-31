import Finance from "./Finance";
import Goals from "./Goals";
import Plans from "./Plans";

export default function MiddleSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  gap-5 2xl:grid-cols-[1fr_1fr_1.2fr] mb-5">
      <Goals />

      <Plans />

      <div className="md:col-span-2 2xl:col-span-1">
        <Finance />
      </div>
    </div>
  );
}
