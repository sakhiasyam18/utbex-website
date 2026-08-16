/**
 * components/section/keunggulan/components/KeunggulanTable.tsx
 * ----------------------------------------------------------------------
 * Menampilkan tabel daftar keunggulan UTBEX.
 * 
 * Aksesibilitas (A11y) & SEO:
 * Meskipun secara visual terlihat seperti "tabel", secara kode menggunakan CSS Grid `div`.
 * Oleh karena itu, kita menambahkan atribut ARIA (role="table", role="row", dll)
 * agar screen reader (pembaca layar untuk tunanetra) dan bot mesin pencari (SEO)
 * tetap bisa memahaminya sebagai sebuah tabel struktural.
 */
import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "@/components/ui/motion";
import { keunggulanData } from "../data/keunggulanData";

export function KeunggulanTable() {
  return (
    <div className="relative w-full xl:w-7/12 py-12 xl:py-24 px-5 sm:px-10 xl:px-20 z-10 flex flex-col justify-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {/* Section Title */}
        <motion.h2 
          variants={staggerChild} 
          className="text-3xl sm:text-5xl font-black text-[#1e1b4b] mb-8 sm:mb-12 uppercase tracking-tight leading-tight"
        >
          KEUNGGULAN <br />
          UTBEX INDONESIA
        </motion.h2>

        {/* Table-like Layout with Semantic ARIA Roles for Chatbots/SEO */}
        <motion.div variants={staggerChild} className="w-full mb-10" role="table" aria-label="Keunggulan UTBEX Indonesia">
          {/* Table Header */}
          <div className="grid grid-cols-[90px_1fr] sm:grid-cols-[160px_1fr] gap-3 pb-3 border-b-2 border-black/80 font-bold text-sm sm:text-lg" role="row">
            <div className="text-center" role="columnheader">Aspek</div>
            <div className="text-center" role="columnheader">Keunggulan</div>
          </div>

          {/* Table Rows */}
          <div className="flex flex-col" role="rowgroup">
            {keunggulanData.map((item, idx) => (
              <div 
                key={idx} 
                role="row"
                className="grid grid-cols-[90px_1fr] sm:grid-cols-[160px_1fr] gap-3 py-3 border-b border-black/20 text-xs sm:text-base items-center"
              >
                <div className="font-bold text-center px-1 text-xs sm:text-sm" role="cell">{item.aspek}</div>
                <div className="font-medium text-black/80 px-3 sm:px-8 border-l border-black/20 text-xs sm:text-sm leading-relaxed" role="cell">{item.keunggulan}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Quote / Paragraph */}
        <motion.p variants={staggerChild} className="text-sm sm:text-base text-black/70 leading-relaxed font-medium">
          Arik percaya pada gaya kepemimpinan transformasional yang memberdayakan timnya. Ia menciptakan lingkungan kolaborasi, kreativitas, dan tanggung jawab, mendorong karyawan untuk mencapai potensi penuh mereka. Pendekatan ini telah berperan penting dalam memajukan Utbex Indonesia.
        </motion.p>
      </motion.div>
    </div>
  );
}
