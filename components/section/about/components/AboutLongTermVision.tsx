import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "@/components/ui/motion";
import { visiJangkaPanjangItems } from "../data/aboutData";
import Image from "next/image";

export function AboutLongTermVision() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-24 lg:mb-32 flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] xl:grid-cols-[4fr_5fr] gap-8 lg:gap-12 xl:gap-16 items-center relative"
    >
      {/* Subtle ambient glow behind the section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-utbex-maroon/[0.02] rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Left: Image with Neumorphism Frame */}
      <motion.div variants={staggerChild} className="relative w-full aspect-video lg:aspect-[4/3] rounded-[2rem] p-2 sm:p-2.5 bg-white/40 backdrop-blur-sm border border-white/70 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.7),_0_20px_50px_rgba(0,0,0,0.08)] group">
        <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gray-100 shadow-[inset_0_4px_10px_rgba(0,0,0,0.06)]">
          <Image 
            src="/images/visi-panjang-utbex.avif" 
            alt="UTBEX Dream Board" 
            fill
            sizes="(max-width: 768px) 90vw, 40vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-utbex-maroon/10 mix-blend-multiply pointer-events-none transition-opacity duration-700 group-hover:opacity-50" />
          
          {/* Ambient inner glow */}
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(139,0,0,0.15)] rounded-3xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>
      </motion.div>

      {/* Right: Text Content in Glassmorphism Card */}
      <motion.div variants={staggerChild} className="flex flex-col gap-5 xl:gap-6 relative w-full">
        <div className="relative p-6 sm:p-8 xl:p-10 rounded-[2rem] xl:rounded-[2.5rem] bg-white/50 backdrop-blur-md border border-white/80 shadow-[inset_2px_2px_4px_rgba(255,255,255,0.9),_0_8px_32px_rgba(0,0,0,0.04)]">
          
          {/* Glass pill for section label */}
          <span className="inline-block text-[9px] sm:text-[10px] font-bold tracking-[0.25em] uppercase text-utbex-maroon/80 mb-4 xl:mb-5 px-3 sm:px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-utbex-maroon/10 shadow-sm">
            Fokus Utama
          </span>

          <h3 className="text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-5xl font-black text-utbex-dark tracking-tight mb-6 xl:mb-8 bg-gradient-to-br from-utbex-dark via-utbex-dark to-utbex-maroon/70 bg-clip-text text-transparent leading-[1.1]">
            Visi Besar Jangka Panjang
          </h3>
          
          <ul className="space-y-3 sm:space-y-4 xl:space-y-5">
            {visiJangkaPanjangItems.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 xl:gap-4 group/li">
                {/* Neumorphism bullet point */}
                <div className="w-6 h-6 xl:w-8 xl:h-8 rounded-full bg-white/70 backdrop-blur-sm border border-white flex items-center justify-center shrink-0 mt-0.5 xl:mt-1 shadow-[inset_1px_1px_2px_rgba(255,255,255,1),_2px_2px_6px_rgba(0,0,0,0.05)] group-hover/li:shadow-[inset_1px_1px_2px_rgba(255,255,255,1),_4px_4px_12px_rgba(139,0,0,0.1)] group-hover/li:border-utbex-maroon/20 transition-all duration-300">
                  <div className="w-2 h-2 xl:w-2.5 xl:h-2.5 rounded-full bg-utbex-maroon/80 shadow-[0_0_8px_rgba(139,0,0,0.4)] group-hover/li:scale-125 transition-transform duration-300" />
                </div>
                <span className="text-sm sm:text-[15px] xl:text-base text-utbex-text-secondary font-medium leading-relaxed group-hover/li:text-utbex-dark transition-colors duration-300 pt-0.5 xl:pt-1">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* Quote Section - Deep Neumorphism inset */}
          <div className="mt-8 xl:mt-10 p-5 sm:p-6 xl:p-8 rounded-[1.25rem] xl:rounded-[1.5rem] bg-white/40 backdrop-blur-xl border border-white/50 shadow-[inset_2px_2px_8px_rgba(0,0,0,0.04),_0_4px_12px_rgba(255,255,255,0.5)] relative overflow-hidden group/quote">
            <div className="absolute -top-4 -right-3 xl:-top-6 xl:-right-4 text-8xl xl:text-9xl text-utbex-maroon/[0.04] font-serif leading-none pointer-events-none group-hover/quote:text-utbex-maroon/[0.08] transition-colors duration-700">
              &ldquo;
            </div>
            
            <p className="relative z-10 text-sm sm:text-base text-utbex-text-secondary leading-relaxed font-medium italic">
              Setiap perjalanan memiliki <strong className="text-utbex-dark bg-white/60 px-1 rounded-sm shadow-sm border border-white">tantangan</strong>. Di UTBEX, kami menghadapi berbagai rintangan, mulai dari <strong className="text-utbex-dark bg-white/60 px-1 rounded-sm shadow-sm border border-white">pendanaan</strong> hingga <strong className="text-utbex-dark bg-white/60 px-1 rounded-sm shadow-sm border border-white">penerimaan masyarakat</strong>. Namun, setiap tantangan adalah kesempatan untuk belajar dan <strong className="text-utbex-dark bg-white/60 px-1 rounded-sm shadow-sm border border-white">beradaptasi</strong>, memperkuat komitmen kami.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
