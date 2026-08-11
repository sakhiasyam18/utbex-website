// components/section/hero/components/HeroStatsBar.tsx
import { heroStatsData as stats } from "../data/heroData";

export function HeroStatsBar() {
  return (
    <div
      className="grid grid-cols-3 border-t border-black/[0.07] px-4 sm:px-10 bg-white/80 backdrop-blur-sm animate-fade-up opacity-0"
      style={{
        animationDelay: "300ms",
        animationFillMode: "forwards",
        position: "relative",
        zIndex: 30,
      }}
    >
      {stats.map((s, i) => (
        <div
          key={s.label}
          className={`py-4 sm:py-6 flex flex-col items-center justify-center text-center gap-1.5 px-2 sm:px-6 ${i < stats.length - 1 ? "border-r border-black/[0.07]" : ""}`}
        >
          <span className="text-[clamp(1.25rem,4vw,2.25rem)] font-black text-utbex-dark leading-none">{s.value}</span>
          <span className="text-[9px] sm:text-[11px] lg:text-xs font-medium text-utbex-text-secondary leading-tight max-w-[120px] sm:max-w-none">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
