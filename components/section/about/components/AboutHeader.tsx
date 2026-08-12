import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "@/components/ui/motion";

export function AboutHeader() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-16 lg:mb-24"
    >
      {/* Label with subtle neon glow */}
      <motion.div variants={staggerChild} className="text-mask flex justify-center lg:justify-start">
        <span className="inline-block px-4 py-1.5 rounded-full bg-utbex-maroon/10 border border-utbex-maroon/20 text-xs font-bold tracking-widest text-utbex-maroon uppercase mb-6 shadow-sm">
          EXECUTIVE SUMMARY
        </span>
      </motion.div>

      {/* Description in frosted glass card */}
      <motion.div variants={staggerChild} className="max-w-4xl">
        <div className="about-glass rounded-2xl sm:rounded-3xl p-6 sm:p-10 space-y-6">
          <p className="text-base sm:text-lg text-utbex-dark leading-relaxed font-medium">
            UTBEX Indonesia lahir dari sebuah keyakinan: <em className="text-utbex-maroon font-bold">&ldquo;Setiap ide, sekecil apapun, dapat menjadi kekuatan besar jika dipikirkan secara berbeda dan dieksekusi secara nyata.&rdquo;</em>
          </p>
          
          <div className="pl-4 sm:pl-6 border-l-2 border-utbex-maroon/30 space-y-3 py-2 my-6">
            <p className="text-base sm:text-lg text-utbex-dark leading-relaxed">
              <strong className="text-utbex-dark">Unusually Think:</strong> Cara berpikir berbeda, berani keluar dari kebiasaan.
            </p>
            <p className="text-base sm:text-lg text-utbex-dark leading-relaxed">
              <strong className="text-utbex-dark">Become Extraordinary:</strong> Dari ide-ide sederhana menjadi karya yang luar biasa dan berdampak.
            </p>
          </div>

          <p className="text-base sm:text-lg text-utbex-dark leading-relaxed font-medium">
            UTBEX percaya bahwa kreativitas bukan hanya milik kota besar, tetapi milik siapa pun, termasuk pemuda desa. Sejak berdiri pada 2014, <strong className="text-utbex-dark">dari desa kami memulai, dan dari keterbatasan kami bertumbuh</strong> &mdash; memadukan usaha bisnis kreatif (fashion, kriya, kuliner, dan pariwisata) dengan gerakan pemberdayaan pemuda.
          </p>

          <p className="text-base sm:text-lg text-utbex-dark leading-relaxed font-medium">
            <span className="font-bold text-utbex-maroon">Genap 1 Dekade.</span> Kini UTBEX bertransformasi menjadi Creative Hub Pesisir, menggandeng berbagai sektor untuk membangun generasi kreatif desa yang berkelanjutan.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
