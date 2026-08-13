export function FooterBottom() {
  return (
    <>
      {/* ── Divider ─────────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 h-px bg-gradient-to-r from-transparent via-black/[0.07] to-transparent" />

      {/* ── Copyright bar ────────────────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-[11px] text-utbex-dark/80 font-medium tracking-wide text-center sm:text-left">
          © 2026 UTBEX Indonesia. Hak cipta dilindungi undang-undang.
        </p>
        <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-utbex-dark/80">
          AHU-0100239.AH.01.01.TAHUN 2025
        </p>
      </div>

      {/* ════════════════════════════════════════════════════════
          UTBEX Wordmark — batik gradient watermark
          ════════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full overflow-hidden select-none mt-4" aria-hidden="true">
        <style>{`
          .utbex-wordmark {
            font-size: clamp(72px, 17vw, 260px);
            font-weight: 900;
            line-height: 0.85;
            letter-spacing: -0.04em;
            font-family: 'Arial Black', 'Impact', 'Helvetica Neue', sans-serif;
            text-align: center;
            width: 100%;
            display: block;
            background: linear-gradient(
              135deg,
              #3d0000 0%,
              #8B0000 30%,
              #C0392B 55%,
              #8B0000 75%,
              #4a0000 100%
            ),
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cellipse cx='15' cy='15' rx='8' ry='5' fill='none' stroke='rgba(255,255,255,0.22)' stroke-width='0.8'/%3E%3Cellipse cx='15' cy='15' rx='5' ry='8' fill='none' stroke='rgba(255,255,255,0.22)' stroke-width='0.8'/%3E%3Cellipse cx='45' cy='15' rx='8' ry='5' fill='none' stroke='rgba(255,255,255,0.22)' stroke-width='0.8'/%3E%3Cellipse cx='45' cy='15' rx='5' ry='8' fill='none' stroke='rgba(255,255,255,0.22)' stroke-width='0.8'/%3E%3Cellipse cx='15' cy='45' rx='8' ry='5' fill='none' stroke='rgba(255,255,255,0.22)' stroke-width='0.8'/%3E%3Cellipse cx='15' cy='45' rx='5' ry='8' fill='none' stroke='rgba(255,255,255,0.22)' stroke-width='0.8'/%3E%3Cellipse cx='45' cy='45' rx='8' ry='5' fill='none' stroke='rgba(255,255,255,0.22)' stroke-width='0.8'/%3E%3Cellipse cx='45' cy='45' rx='5' ry='8' fill='none' stroke='rgba(255,255,255,0.22)' stroke-width='0.8'/%3E%3Ccircle cx='30' cy='30' r='4' fill='none' stroke='rgba(255,255,255,0.16)' stroke-width='0.8'/%3E%3Ccircle cx='30' cy='30' r='2' fill='rgba(255,255,255,0.09)'/%3E%3Cline x1='0' y1='0' x2='60' y2='60' stroke='rgba(255,255,255,0.07)' stroke-width='0.6'/%3E%3Cline x1='60' y1='0' x2='0' y2='60' stroke='rgba(255,255,255,0.07)' stroke-width='0.6'/%3E%3C/svg%3E");
            background-blend-mode: normal, overlay;
            background-size: 100% 100%, 60px 60px;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            color: transparent;
            opacity: 0.9;
          }
        `}</style>
        <span className="utbex-wordmark">UTBEX</span>
      </div>
    </>
  );
}
