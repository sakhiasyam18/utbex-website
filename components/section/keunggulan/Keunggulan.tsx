"use client";

import Image from "next/image";
import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "../../../motion/variants/stagger";

const keunggulanData = [
  {
    aspek: "Basis Lokal",
    keunggulan: "Memperkuat akar pemberdayaan langsung dari desa",
  },
  {
    aspek: "Pemuda Desa",
    keunggulan: "Fokus generasi muda produktif",
  },
  {
    aspek: "Social Enterprise",
    keunggulan: "Menggabungkan profit & dampak sosial",
  },
  {
    aspek: "Kolaboratif",
    keunggulan: "Siap bersinergi dengan pemerintah, kampus, perusahaan",
  },
  {
    aspek: "Pengalaman",
    keunggulan: "1 Dekade Membangun Bisnis Ekonomi Kreatif & Mendampingi UMKM Desa diberbagai Kota Kabupaten di Indonesia",
  },
  {
    aspek: "Prestasi",
    keunggulan: "Telah diakui di tingkat regional, nasional, bahkan internasional",
  },
];

export default function Keunggulan() {
  return (
    <section id="keunggulan" className="relative w-full bg-[#f8f9fa] text-utbex-dark overflow-hidden flex flex-col lg:flex-row">
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 right-10 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Abstract curvy lines decoration (right side) */}
      <svg className="absolute bottom-0 right-0 w-[30vw] h-auto text-black/10 pointer-events-none" viewBox="0 0 500 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 200 C 100 150, 200 250, 300 150 S 450 100, 500 0" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
        <path d="M50 200 C 150 180, 250 220, 350 120 S 480 80, 500 50" stroke="currentColor" strokeWidth="1" />
      </svg>

      {/* Left side: Image */}
      <div className="relative w-full lg:w-5/12 h-[50vh] lg:h-auto min-h-[400px]">
        <Image
          src="/images/foto-penyerahan-penghargaan-utbex-arif-dwi-asmara-dengan-pemerintah.avif"
          alt="Arik Dwi Asmara menerima penghargaan"
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
        {/* Gradient overlay to smoothly blend image to the background on mobile, or right edge on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#f8f9fa] via-transparent to-transparent opacity-80 lg:opacity-20" />
      </div>

      {/* Right side: Content */}
      <div className="relative w-full lg:w-7/12 py-16 lg:py-24 px-6 sm:px-10 lg:px-16 xl:px-20 z-10 flex flex-col justify-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Section Title */}
          <motion.h2 
            variants={staggerChild} 
            className="text-4xl sm:text-5xl font-black text-[#1e1b4b] mb-12 uppercase tracking-tight leading-tight"
          >
            KEUNGGULAN <br />
            UTBEX INDONESIA
          </motion.h2>

          {/* Table-like Layout */}
          <motion.div variants={staggerChild} className="w-full mb-10">
            {/* Table Header */}
            <div className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-4 pb-4 border-b-2 border-black/80 font-bold text-lg">
              <div className="text-center">Aspek</div>
              <div className="text-center">Keunggulan</div>
            </div>

            {/* Table Rows */}
            <div className="flex flex-col">
              {keunggulanData.map((item, idx) => (
                <div 
                  key={idx} 
                  className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-4 py-4 border-b border-black/20 text-sm sm:text-base items-center"
                >
                  <div className="font-bold text-center px-2">{item.aspek}</div>
                  <div className="font-medium text-black/80 px-4 sm:px-8 border-l border-black/20">{item.keunggulan}</div>
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
    </section>
  );
}
