// components/section/footer/components/FooterMap.tsx
import { m as motion } from "framer-motion";

export function FooterMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="mt-14 mb-14"
    >
      <div
        className="group relative rounded-[2rem] overflow-hidden
                   bg-white/50 backdrop-blur-xl
                   border border-white/65
                   shadow-[0_12px_40px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.95)]
                   hover:shadow-[0_16px_52px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,1)]
                   transition-shadow duration-500"
      >
        {/* Top edge shine */}
        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none z-10" />
        {/* Left neon accent bar */}
        <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-utbex-maroon/50 shadow-[0_0_10px_rgba(139,0,0,0.25)] z-10" />

        <div className="flex flex-col lg:flex-row">
          {/* ── Left: Location info panel ── */}
          <div className="flex-shrink-0 lg:w-64 xl:w-72 flex flex-col justify-center gap-5 p-7 lg:p-8 pl-8 lg:pl-10">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[9px] font-bold tracking-[0.25em] uppercase text-utbex-maroon/70 mb-3">
                <span className="w-3 h-px bg-utbex-maroon/50" />
                Temukan Kami
              </span>
              <h3 className="text-base font-black text-utbex-dark leading-snug tracking-tight">
                UTBEX Indonesia
              </h3>
              <p className="text-xs text-utbex-text-secondary/55 font-medium mt-0.5">
                Bantur, Malang — Jawa Timur
              </p>
            </div>

            {/* Address */}
            <div className="flex items-start gap-2.5">
              <span className="mt-0.5 text-utbex-maroon flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <p className="text-[11px] text-utbex-text-secondary/65 leading-relaxed">
                Jl. Kyai Rajiman RT.06 RW.02<br />
                Bantur, Kab. Malang<br />
                Jawa Timur 65179
              </p>
            </div>

            {/* Open Maps CTA */}
            <a
              href="https://maps.app.goo.gl/XK3o1qds4trNNwX86"
              target="_blank"
              rel="noopener noreferrer"
              id="klik-maps-cta"
              aria-label="Buka di Google Maps"
              className="group/m inline-flex items-center gap-2 self-start
                         px-4 py-2.5 rounded-xl text-[10px] font-bold tracking-widest uppercase
                         bg-utbex-maroon text-white
                         shadow-[0_4px_14px_rgba(139,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.2)]
                         hover:shadow-[0_6px_20px_rgba(139,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.25)]
                         hover:-translate-y-0.5 active:translate-y-0
                         transition-all duration-300 overflow-hidden relative"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-[150%] group-hover/m:translate-x-[150%] transition-transform duration-700 ease-in-out" />
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="relative z-10">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
              </svg>
              <span className="relative z-10">Buka Maps</span>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="relative z-10 group-hover/m:translate-x-0.5 group-hover/m:-translate-y-0.5 transition-transform duration-300">
                <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
          </div>

          {/* ── Right: Map iframe ── */}
          <div className="relative flex-1 min-h-[220px] lg:min-h-[280px] overflow-hidden lg:rounded-r-[2rem]">
            {/* Frosted overlays */}
            <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-white/20 to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 inset-x-0 h-6 bg-gradient-to-t from-white/15 to-transparent z-10 pointer-events-none" />
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/25 to-transparent z-10 pointer-events-none" />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.1!2d112.626!3d-8.333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7c7aec3b50001%3A0x3421bdb47a55fd34!2sBantur%2C%20Kec.%20Bantur%2C%20Kabupaten%20Malang%2C%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1696000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block", minHeight: "inherit" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi UTBEX Indonesia — Bantur, Malang"
              className="absolute inset-0 w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
