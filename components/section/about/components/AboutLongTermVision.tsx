import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "@/motion/variants/stagger";
import { visiJangkaPanjangItems } from "../data/aboutData";

export function AboutLongTermVision() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-24 lg:mb-32 grid md:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center"
    >
      {/* Left: Image (Dream Board aesthetic) */}
      <motion.div variants={staggerChild} className="relative aspect-[4/3] sm:aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group bg-gray-100">
        <img src="/images/visi-panjang-utbex.avif" alt="UTBEX Dream Board" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-utbex-maroon/10 mix-blend-multiply pointer-events-none" />
        {/* Overlay Gradient for premium feel */}
        <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)] rounded-3xl pointer-events-none" />
      </motion.div>

      {/* Right: Text Content */}
      <motion.div variants={staggerChild} className="flex flex-col gap-6">
        <h3 className="text-3xl sm:text-4xl font-black text-utbex-dark tracking-tight">
          Visi Besar Jangka Panjang
        </h3>
        
        <ul className="space-y-4">
          {visiJangkaPanjangItems.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 group/li">
              <div className="w-6 h-6 rounded-full bg-utbex-maroon/10 flex items-center justify-center shrink-0 mt-0.5 group-hover/li:bg-utbex-maroon/20 transition-colors">
                <div className="w-2 h-2 rounded-full bg-utbex-maroon" />
              </div>
              <span className="text-[15px] sm:text-base text-utbex-dark/80 font-semibold leading-relaxed group-hover/li:text-utbex-dark transition-colors">
                {item}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-4 p-5 sm:p-6 rounded-2xl bg-utbex-maroon/[0.03] border border-utbex-maroon/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 text-8xl text-utbex-maroon/5 font-serif leading-none -mt-4 mr-2 pointer-events-none">
            &ldquo;
          </div>
          <p className="relative z-10 text-sm sm:text-base text-utbex-text-secondary leading-relaxed font-medium italic">
            Setiap perjalanan memiliki <strong className="text-utbex-dark">tantangan</strong>. Di UTBEX, kami menghadapi berbagai rintangan, mulai dari <strong className="text-utbex-dark">pendanaan</strong> hingga <strong className="text-utbex-dark">penerimaan masyarakat</strong>. Namun, setiap tantangan adalah kesempatan untuk belajar dan <strong className="text-utbex-dark">beradaptasi</strong>, memperkuat komitmen kami.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
