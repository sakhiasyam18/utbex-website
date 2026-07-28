"use client";

import { m as motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export function EditorialBreather() {
  const containerRef = useRef<HTMLElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Subtle parallax for background elements
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full py-28 md:py-40 bg-[#030003] text-white overflow-hidden flex items-center justify-center min-h-[70vh]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient background gradients (Gen Z Neon Vibe) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Dark noise texture */}
        <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]" />
        
        {/* Deep maroon glowing orb */}
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full bg-utbex-maroon/10 blur-[120px]"
          animate={{
            scale: isHovered ? 1.1 : 1,
            opacity: isHovered ? 0.8 : 0.4,
          }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Floating colored orbs */}
        <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-purple-900/15 blur-[100px]" />
        <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-rose-900/15 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-10 perspective-[1000px]">
        
        {/* Glassmorphism / Neumorphism Card */}
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`relative group rounded-[2.5rem] sm:rounded-[3rem] p-8 sm:p-16 lg:p-20 
                     transition-all duration-700 ease-out transform-gpu
                     ${isHovered ? 'scale-[1.02] shadow-[0_40px_100px_rgba(139,0,0,0.15)]' : 'scale-100 shadow-[0_20px_80px_rgba(0,0,0,0.5)]'}`}
        >
          {/* Card background (Frosted Glass / Neumorphism blend) */}
          <div className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem] bg-white/[0.02] backdrop-blur-2xl border border-white/[0.05] z-0 overflow-hidden">
            {/* Inner glow on hover */}
            <div className={`absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-utbex-maroon/[0.08] opacity-0 transition-opacity duration-700 ${isHovered ? 'opacity-100' : ''}`} />
            {/* Highlight border on top */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            
            {/* Tagline Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-black/40 border border-white/10 backdrop-blur-md mb-10 sm:mb-12"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.6)" }}
            >
              <div className="relative flex items-center justify-center w-2 h-2">
                <div className="absolute inset-0 bg-utbex-maroon rounded-full animate-ping opacity-75" />
                <div className="relative w-1.5 h-1.5 bg-utbex-maroon rounded-full" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] text-white/70 uppercase">
                Filosofi Perjalanan
              </span>
            </motion.div>

            {/* The Quote */}
            <div className="relative max-w-4xl mx-auto">
              {/* Huge subtle quote marks */}
              <div className="absolute -top-10 -left-6 sm:-top-16 sm:-left-12 text-[120px] sm:text-[180px] font-serif leading-none text-white/[0.03] select-none pointer-events-none group-hover:text-utbex-maroon/[0.05] transition-colors duration-700">
                &ldquo;
              </div>

              <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.3] text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/60 mb-12 sm:mb-16">
                Berpikirlah yang secara logika orang akan bilang{" "}
                <span className="inline-block relative">
                  <span className="relative z-10 text-white italic font-light px-2">tidak mungkin.</span>
                  {/* Highlight under text */}
                  <motion.span 
                    className="absolute bottom-1 sm:bottom-2 left-0 right-0 h-3 sm:h-4 bg-utbex-maroon/40 -z-10 -rotate-2 rounded-sm"
                    animate={{ width: isHovered ? "100%" : "0%" }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                  />
                </span>
                {" "}Kemudian pikirkan lagi, cari caranya hingga hal tersebut berubah menjadi{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-utbex-maroon font-bold">
                  mungkin.
                </span>
              </blockquote>
            </div>

            {/* Author Section */}
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
              {/* Author Avatar with Glass Frame */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full p-1 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(139,0,0,0.2)]">
                <div className="relative w-full h-full rounded-full overflow-hidden border border-white/20">
                  <Image
                    src="/images/arik.webp"
                    alt="Arik Dwi Asmara"
                    fill
                    className="object-cover object-[center_20%] group-hover:scale-110 transition-transform duration-700"
                    sizes="80px"
                  />
                </div>
              </div>

              {/* Author Details */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
                <cite className="not-italic text-base sm:text-lg font-black tracking-wide text-white">
                  Arik Dwi Asmara
                </cite>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-px bg-utbex-maroon" />
                  <p className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white/50">
                    CEO & Founder UTBEX
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
