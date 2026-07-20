// components/explore/layers/OverlayLayer.tsx
//
// Top-most visual layer of the World Canvas.
// Source of truth: 03_VISUAL_SYSTEM.md §7 (Layer 08+), §12
//
// Renders:
//   - Vignette: subtle edge darkening for cinematic framing
//   - Grain overlay: fine noise on top of everything (documentary feel)
//
// This layer does NOT move with the camera (parallax ratio = 0).
// It is fixed to the viewport to maintain consistent framing.
//
// pointer-events-none so it never blocks interaction.

"use client";

export function OverlayLayer() {
  return (
    <div
      className="absolute inset-0 z-[60] pointer-events-none"
      aria-hidden="true"
    >
      {/* Vignette — darkens edges for cinematic depth */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Fine grain overlay — subtler than BackgroundLayer noise */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 512 512%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22grain%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23grain)%22/%3E%3C/svg%3E")',
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
