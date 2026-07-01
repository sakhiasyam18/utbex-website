// components/atmosphere/GlobalAtmosphere.tsx
//
// UTBEX Global Atmosphere System
// Source of truth: /docs/atmosphere/ (all documents)
//
// This component is the invisible layer beneath every section.
// It transforms isolated sections into one continuous editorial world.
//
// Architecture:
//   absolute inset-0 -z-10   — spans full page height, behind all content
//   Sections are transparent  — atmosphere is always visible beneath them
//
// Layer order (01_BACKGROUND_SYSTEM.md):
//   Layer 1: Warm canvas (body bg handles this)
//   Layer 2: Primary warm white ambient — Hero / top
//   Layer 3: Soft maroon accent — upper right
//   Layer 4: Hero → About transition warmth
//   Layer 5: About → Portfolio neutral diffusion
//   Layer 6: Portfolio balanced light
//   Layer 7: Impact optimism glow
//   Layer 8: Footer fading warmth
//   Layer 9: Global noise texture — unifies all sections

/**
 * Ambient lighting density per section (02_AMBIENT_LIGHT_SYSTEM.md):
 *   Hero     — highest (warm optimism)
 *   About    — soft clarity
 *   Portfolio — balanced neutrality
 *   Impact   — slight optimism
 *   Footer   — gradually fading
 *
 * Positioning uses percent of page height to naturally align with sections.
 * Radials are oversized + heavily blurred — transitions disappear (04_SECTION_TRANSITION_SYSTEM.md).
 *
 * Noise (05_NOISE_TEXTURE_SYSTEM.md):
 *   Global PNG texture. 1.5% opacity. Monochromatic. Static.
 *   Unites every section under the same physical surface.
 *   Never per-section — always global.
 */
export function GlobalAtmosphere() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
    >
      {/* ── HERO ATMOSPHERE — Warm optimism. Highest density. ── */}

      {/* Primary warm white ambient — large, soft, top-left */}
      {/* DS 02: "Think of sunlight entering a quiet architectural studio." */}
      <div className="absolute -top-[20%] -left-[15%] w-[90vw] h-[75vh] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,252,250,0.85)_0%,_rgba(255,252,250,0)_65%)] blur-[80px]" />

      {/* Soft maroon ambient accent — upper right, barely perceptible */}
      {/* DS 02: "Extremely soft UTBEX Maroon". Opacity must remain invisible. */}
      <div className="absolute -top-[8%] right-[-8%] w-[55vw] h-[55vh] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(139,0,0,0.028)_0%,_rgba(139,0,0,0)_65%)] blur-[130px]" />

      {/* ── HERO → ABOUT TRANSITION — Atmosphere overlaps. No hard break. ── */}

      {/* Warm ivory bridge — spans the gap between Hero and About */}
      {/* DS 04: "Radial lights should overlap. Never allow one to suddenly disappear." */}
      <div className="absolute top-[10%] left-[10%] w-[75vw] h-[60vh] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(253,251,248,0.65)_0%,_rgba(253,251,248,0)_65%)] blur-[110px]" />

      {/* ── ABOUT ATMOSPHERE — Soft clarity. Slightly calmer. ── */}

      {/* Neutral white diffusion — balanced, readable, documentary feel */}
      <div className="absolute top-[26%] right-[5%] w-[60vw] h-[55vh] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,254,252,0.55)_0%,_rgba(255,254,252,0)_65%)] blur-[130px]" />

      {/* ── ABOUT → PORTFOLIO TRANSITION ── */}

      <div className="absolute top-[38%] left-[0%] w-[65vw] h-[50vh] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(250,249,247,0.5)_0%,_rgba(250,249,247,0)_65%)] blur-[140px]" />

      {/* ── PORTFOLIO ATMOSPHERE — Balanced neutrality. Photography dominant. ── */}

      {/* Very soft balanced lighting — never competes with photographs */}
      {/* DS 02: "Balanced neutrality. Photography gradually becomes dominant." */}
      <div className="absolute top-[52%] right-[10%] w-[55vw] h-[50vh] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,254,253,0.5)_0%,_rgba(255,254,253,0)_65%)] blur-[150px]" />

      {/* ── PORTFOLIO → IMPACT TRANSITION ── */}

      <div className="absolute top-[63%] left-[15%] w-[60vw] h-[45vh] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(254,252,249,0.48)_0%,_rgba(254,252,249,0)_65%)] blur-[130px]" />

      {/* ── IMPACT ATMOSPHERE — Slight optimism. Confidence. ── */}

      {/* Slightly warmer — confidence light, not dramatic */}
      {/* DS 02: "Slight optimism". DS 06: "Depth: slight increase." */}
      <div className="absolute top-[72%] right-[0%] w-[58vw] h-[50vh] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(254,252,248,0.52)_0%,_rgba(254,252,248,0)_65%)] blur-[120px]" />

      {/* ── FOOTER ATMOSPHERE — Gentle fade. Light disappears. ── */}

      {/* DS 02: "Gentle fade into silence." DS 06: "Footer: gradually flatten." */}
      {/* Atmosphere quiets — not removed, just softer. */}
      <div className="absolute bottom-[2%] left-[20%] w-[60vw] h-[40vh] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(250,249,247,0.38)_0%,_rgba(250,249,247,0)_65%)] blur-[150px]" />

      {/* A final faint maroon hint — echoes the brand at rest */}
      <div className="absolute bottom-[8%] right-[25%] w-[40vw] h-[35vh] rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(139,0,0,0.018)_0%,_rgba(139,0,0,0)_65%)] blur-[140px]" />

      {/* ── GLOBAL NOISE TEXTURE — One layer. All sections. ── */}
      {/* DS 05: "One continuous texture layer. Never per-section. Always global." */}
      {/* Uses pre-rendered PNG — zero browser computation cost. */}
      {/* mix-blend-multiply: integrates with warm canvas without adding hue. */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-multiply"
        style={{
          backgroundImage: 'url("/images/noise.png")',
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
