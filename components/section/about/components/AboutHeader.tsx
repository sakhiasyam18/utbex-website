import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "../../../../motion/variants/stagger";

export function AboutHeader() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="mb-16 lg:mb-24"
    >
      <motion.div variants={staggerChild} className="text-mask">
        <span className="inline-block text-xs font-semibold tracking-widest text-utbex-maroon uppercase mb-4 neon-text-maroon">
          — Tentang Kami
        </span>
      </motion.div>

      <motion.div variants={staggerChild} className="text-mask">
        <h2
          id="about-headline"
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-utbex-dark leading-[0.95] tracking-tighter max-w-3xl"
        >
          Perubahan Besar Selalu Dimulai dari{" "}
          <span className="text-utbex-maroon italic neon-text-maroon">Langkah Kecil.</span>
        </h2>
      </motion.div>

      <motion.div variants={staggerChild} className="mt-8 max-w-2xl">
        <div className="about-glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4">
          <p className="text-base sm:text-lg text-utbex-text-secondary/80 leading-relaxed font-medium">
            UTBEX Indonesia Group adalah sebuah lembaga <em className="text-utbex-dark not-italic font-semibold">social enterprise</em> yang berkomitmen untuk memajukan dan meningkatkan kualitas hidup masyarakat di wilayah Bantur, Jawa Timur, Indonesia, serta daerah sekitarnya. Kami memiliki visi yang kuat untuk menciptakan perubahan positif melalui inovasi, pembangunan berkelanjutan, dan kemitraan yang berdampak.
          </p>
          <p className="text-sm sm:text-base text-utbex-text-secondary/60 leading-relaxed">
            Sebagai lembaga social enterprise, kami memadukan prinsip bisnis yang berkelanjutan dengan misi sosial yang tulus mengatasi berbagai tantangan sosial, ekonomi, dan lingkungan di wilayah Bantur dengan pendekatan yang berfokus pada pendidikan, lingkungan, dan pengembangan ekonomi masyarakat.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
