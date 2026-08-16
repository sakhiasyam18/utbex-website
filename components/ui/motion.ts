/**
 * components/ui/motion.ts
 * ----------------------------------------------------------------------
 * Kumpulan preset animasi (Variants) yang digunakan oleh Framer Motion
 * di seluruh komponen website UTBEX.
 * 
 * File ini adalah satu-satunya tempat resmi untuk menyimpan variasi animasi
 * yang dipakai bersama (shared). Sesuai aturan arsitektur UTBEX (AGENTS.md),
 * animasi yang hanya dipakai oleh satu komponen sebaiknya ditulis langsung
 * (inline) di dalam komponen tersebut.
 * 
 * Cara menggunakan:
 *   import { staggerContainer, staggerChild } from "@/components/ui/motion";
 *   <motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
 *     <motion.p variants={staggerChild}>Teks...</motion.p>
 *   </motion.div>
 */
import { Variants } from "framer-motion";

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.7, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};
