// components/explore/layers/BackgroundLayer.tsx
//
// Layer 01–03 of the World Canvas layer system.
// Source of truth: 03_VISUAL_SYSTEM.md §5, §7, §12
//
// Renders:
//   Layer 01 — Solid black background (not gray, not blue)
//   Layer 02 — Film grain / noise texture (very subtle, documentary feel)
//   Layer 03 — Subtle texture
//
// Per 03_VISUAL §12: Noise is mandatory but must be very subtle.
// Per 03_VISUAL §5: "Hitam pekat. Bukan abu-abu. Bukan biru."

"use client";

export function BackgroundLayer() {
  return (
    <div className="absolute inset-0 z-0" aria-hidden="true">
      {/* Layer 01: Solid black base */}
      <div className="absolute inset-0 bg-black" />

      {/* Layer 02: Noise / grain texture — documentary feel */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E")',
          backgroundRepeat: "repeat",
        }}
      />

      {/* Layer 03: Subtle horizontal texture lines — adds depth */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 3px)",
        }}
      />
    </div>
  );
}
