// components/section/hero/components/HeroTopBar.tsx
const tags = ["Inovatif", "Berdampak", "Kolaboratif", "Berkelanjutan", "Lokal"];

export function HeroTopBar() {
  return (
    <div
      className="flex flex-wrap items-center justify-between gap-3 px-10 pt-8 lg:pt-10 animate-fade-up opacity-0"
      style={{ animationDelay: "60ms", animationFillMode: "forwards" }}
    >
      <div className="relative group cursor-default">
        {/* Subtle glow behind the badge */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-utbex-maroon to-red-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
        {/* The badge itself */}
        <span className="relative inline-flex items-center gap-2.5 py-2 px-5 rounded-full bg-white/90 backdrop-blur-md text-utbex-dark text-xs font-black tracking-[0.15em] border border-black/5 shadow-sm uppercase">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-utbex-maroon opacity-60"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-utbex-maroon"></span>
          </span>
          PT. UTBEX INOVASI INDONESIA
        </span>
      </div>
      <div className="hidden md:flex flex-wrap items-center gap-3 mt-1">
        {tags.map((t, i) => (
          <span key={t} className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-utbex-dark uppercase tracking-[0.2em] opacity-70 hover:opacity-100 transition-opacity duration-300 cursor-default">
              {t}
            </span>
            {i < tags.length - 1 && (
              <span className="text-black/20 text-[10px] select-none">/</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
