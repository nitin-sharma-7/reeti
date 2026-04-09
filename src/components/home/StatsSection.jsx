const stats = [
  { value: "20+", label: "States" },
  { value: "50+", label: "Cities" },
  { value: "100+", label: "Clients" },
  { value: "10000+", label: "Employees" },
  { value: "50 Lac+", label: "Sq. Ft. Something" },
];

export default function StatsSection() {
  return (
    <section className="w-full bg-[#f8f8f8] py-6">
      <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-between gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center"
          >
            {/* Circle */}
            <div className="w-24 h-24 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg shadow-md">
              {item.value}
            </div>

            {/* Pointer */}
            <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] border-l-transparent border-r-transparent border-t-brand mt-[-2px]" />

            {/* Label */}
            <p className="mt-2 text-sm font-medium text-gray-700 text-center max-w-[100px]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}