"use client";

// components/atmosphere/GlobalAtmosphere.tsx
// UTBEX Global Atmosphere System — GPU-optimized
// All animations use only `transform` and `opacity` — compositor-friendly, zero CPU overhead.

export function GlobalAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 overflow-hidden bg-white pointer-events-none"
    >
      <style>{`
        /* GPU-composited: only uses transform (translate) — no layout/paint */
        @keyframes orbFloat1 {
          0%,  100% { transform: translate(0px, 0px); }
          50%        { transform: translate(24px, -18px); }
        }
        @keyframes orbFloat2 {
          0%,  100% { transform: translate(0px, 0px); }
          50%        { transform: translate(-16px, 12px); }
        }
        .orb-float-1 {
          animation: orbFloat1 22s ease-in-out infinite;
          will-change: transform;
        }
        .orb-float-2 {
          animation: orbFloat2 28s ease-in-out infinite;
          will-change: transform;
          animation-delay: -10s;
        }
      `}</style>

      {/* Orb 1 — top-left warm ivory, GPU animated */}
      <div
        className="orb-float-1 absolute -top-[15%] -left-[15%] w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,248,235,0.6) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Orb 2 — bottom-right faint maroon warmth, GPU animated */}
      <div
        className="orb-float-2 absolute -bottom-[10%] -right-[10%] w-[450px] h-[450px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(139,0,0,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Static noise texture — no animation, no performance cost */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
}

