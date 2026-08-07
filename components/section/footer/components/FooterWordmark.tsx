// components/section/footer/components/FooterWordmark.tsx
export function FooterWordmark() {
  return (
    <div className="relative w-full overflow-hidden select-none py-10" aria-hidden="true">
      {/* Subtle ambient red glow underneath */}
      <div 
        className="absolute inset-x-0 bottom-0 h-full pointer-events-none opacity-40"
        style={{ background: "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(139,0,0,0.15) 0%, transparent 80%)" }} 
      />

      {/* Clean, strong wordmark */}
      <span 
        className="block text-center font-black tracking-tighter w-full bg-clip-text text-transparent"
        style={{
          fontSize: "clamp(60px, 14vw, 200px)",
          lineHeight: "0.85",
          backgroundImage: "linear-gradient(to bottom, #A00000, #5A0000)",
          filter: "drop-shadow(0px 10px 20px rgba(139,0,0,0.15))"
        }}
      >
        UTBEX
      </span>
    </div>
  );
}
