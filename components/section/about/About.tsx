"use client";
// components/section/about/About.tsx — Heynesh-style sticky split layout

import Image from "next/image";
import { m as motion } from "framer-motion";
import { staggerContainer, staggerChild } from "../../../motion/variants/stagger";

const milestones = [
  {
    year: "'14",
    title: "Titik Awal UTBEX",
    story:
      "UTBEX resmi berdiri dengan keyakinan bahwa setiap ide, sekecil apa pun, dapat menjadi kekuatan besar jika dipikirkan secara berbeda dan dieksekusi secara nyata.",
    image: "/images/arik-dwi-asmara-penyampaian-materi-utbex.avif",
    alt: "Arik Dwi Asmara",
    tag: "Pendirian",
  },
  {
    year: "'16",
    title: "Inovasi Kaos Lukis",
    story:
      "Kami meluncurkan inovasi Kaos Lukis Tanpa Tinta Pertama di Indonesia, membuktikan bahwa kreativitas tanpa batas bisa lahir dari ide-ide sederhana di desa.",
    image: "/images/kaos-lukis-tanpa-tinta-pertama-di-indonesia.avif",
    alt: "Kaos Lukis Tanpa Tinta",
    tag: "Inovasi",
  },
  {
    year: "'19",
    title: "Penghargaan Malaysia",
    story:
      "Mewakili Indonesia dan meraih Juara I Penemu Ide Kreatif di Malaysia, membuktikan bahwa gagasan pemuda desa mampu bersaing di panggung internasional.",
    image: "/images/awarding-inotek-award-ceremony-2023-utbex.avif",
    alt: "Penghargaan Ide Kreatif",
    tag: "Prestasi Global",
  },
  {
    year: "'21",
    title: "Social Enterprise",
    story:
      "Resmi bertransformasi menjadi Social Enterprise yang fokus pada pemberdayaan pemuda desa dan pelaku UMKM melalui ekonomi kreatif berkelanjutan.",
    image: "/images/pelatihan-digital-marketing-dan-packaging-utbex.avif",
    alt: "Pemberdayaan UMKM",
    tag: "Transformasi",
  },
  {
    year: "'22",
    title: "MotoGP Mandalika",
    story:
      "Produk inovasi UTBEX terpilih dan dipercaya menjadi Merchandise Resmi untuk ajang internasional MotoGP Mandalika.",
    image: "/images/pelatihan-utbex-digital-marketing-di-umkm.avif",
    alt: "Produk UTBEX MotoGP",
    tag: "Kolaborasi",
  },
  {
    year: "'23",
    title: "Penghargaan Nasional",
    story:
      "Meraih Juara II INOTEK Award Provinsi Jawa Timur dan menerima Penghargaan Sumpah Pemuda dari Bupati Malang atas dedikasi pemberdayaan masyarakat.",
    image: "/images/utbex-foto-bersama-pemerintah-arif-dwi-asmara.avif",
    alt: "Penghargaan INOTEK",
    tag: "Penghargaan",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-headline"
      className="relative w-full bg-utbex-canvas overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-24 lg:py-32">

        {/* Section intro */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 lg:mb-24"
        >
          <motion.div variants={staggerChild} className="text-mask">
            <span className="inline-block text-xs font-semibold tracking-widest text-utbex-maroon uppercase mb-4">
              — Tentang Kami
            </span>
          </motion.div>
          <motion.div variants={staggerChild} className="text-mask">
            <h2
              id="about-headline"
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-utbex-dark leading-[0.95] tracking-tighter max-w-3xl"
            >
              Perubahan Besar Selalu Dimulai dari{" "}
              <span className="text-utbex-maroon italic">Langkah Kecil.</span>
            </h2>
          </motion.div>
          <motion.div variants={staggerChild} className="mt-8 max-w-2xl space-y-4">
            <p className="text-base sm:text-lg text-utbex-text-secondary/80 leading-relaxed font-medium">
              UTBEX Indonesia Group adalah sebuah lembaga <em className="text-utbex-dark not-italic font-semibold">social enterprise</em> yang berkomitmen untuk memajukan dan meningkatkan kualitas hidup masyarakat di wilayah Bantur, Jawa Timur, Indonesia, serta daerah sekitarnya. Kami memiliki visi yang kuat untuk menciptakan perubahan positif melalui inovasi, pembangunan berkelanjutan, dan kemitraan yang berdampak.
            </p>
            <p className="text-sm sm:text-base text-utbex-text-secondary/60 leading-relaxed">
              Sebagai lembaga social enterprise, kami memadukan prinsip bisnis yang berkelanjutan dengan misi sosial yang tulus mengatasi berbagai tantangan sosial, ekonomi, dan lingkungan di wilayah Bantur dengan pendekatan yang berfokus pada pendidikan, lingkungan, dan pengembangan ekonomi masyarakat.
            </p>
          </motion.div>
        </motion.div>

        {/* Visi & Misi Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 lg:mb-32 grid lg:grid-cols-2 gap-8 lg:gap-16"
        >
          {/* Visi */}
          <motion.div variants={staggerChild} className="bg-white rounded-[2rem] p-8 sm:p-12 border border-black/[0.04] shadow-[0_8px_32px_rgba(0,0,0,0.04)] h-full flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-utbex-maroon/10 flex items-center justify-center mb-8">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-utbex-maroon">
                <path d="M2 12h4l3-9 5 18 3-9h5" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-utbex-dark mb-5 tracking-tight">Visi Kami</h3>
            <p className="text-utbex-text-secondary text-lg leading-relaxed font-medium">
              Menjadi pusat pengembangan kreativitas dan pemberdayaan pemuda desa berbasis ekonomi kreatif yang berkelanjutan dan berdampak nasional hingga global.
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div variants={staggerChild} className="bg-[#111111] rounded-[2rem] p-8 sm:p-12 shadow-[0_16px_48px_rgba(0,0,0,0.2)] text-white h-full flex flex-col">
            <h3 className="text-3xl font-black mb-8 text-white tracking-tight">Misi Utama</h3>
            <ul className="space-y-6 flex-1">
              {[
                "Mengembangkan potensi pemuda desa melalui program pelatihan, produksi, dan pengelolaan usaha.",
                "Mendorong lahirnya wirausahawan muda desa yang mandiri, kreatif, dan inovatif.",
                "Menjadi rumah kolaborasi antar pelaku ekonomi kreatif lintas sektor.",
                "Mengangkat kearifan lokal menjadi produk berkualitas dan berdaya saing."
              ].map((misi, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <span className="w-7 h-7 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white/90 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-[15px] text-white/70 leading-relaxed font-medium">{misi}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Timeline scroll cards — 2 col on desktop */}
        <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">

          {/* Sticky left label (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-1/3">
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-widest text-utbex-text-secondary/50 uppercase">Perjalanan</p>
                <p className="text-xs text-utbex-text-secondary/50">2014 — Sekarang</p>
              </div>
              <motion.div className="mt-8 w-px h-40 bg-gradient-to-b from-utbex-maroon/30 to-transparent" />
            </div>
          </div>

          {/* Right: Scroll cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 lg:space-y-10"
          >
            {milestones.map((item) => (
              <motion.div
                key={item.year}
                variants={staggerChild}
                className="group relative bg-white rounded-2xl overflow-hidden border border-black/[0.04] shadow-[0_2px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all duration-500"
              >
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_200px] lg:grid-cols-[1fr_240px]">
                  {/* Text content */}
                  <div className="p-7 lg:p-9 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl font-black text-utbex-maroon">{item.year}</span>
                      <span className="text-xs font-semibold tracking-wider text-utbex-text-secondary/60 uppercase border border-black/[0.04] rounded-full px-3 py-1">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-utbex-dark mb-3 leading-snug group-hover:text-utbex-maroon transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-utbex-text-secondary leading-relaxed">
                      {item.story}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="relative h-48 sm:h-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Quote block */}
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="mt-20 lg:mt-28 relative bg-utbex-maroon rounded-2xl px-8 py-10 sm:px-12 text-white overflow-hidden shadow-[0_16px_48px_rgba(139,0,0,0.15)]"
        >
          <motion.div className="absolute -top-6 -left-4 text-[120px] font-black text-white/10 leading-none select-none">"</motion.div>
          <p className="relative z-10 text-xl sm:text-2xl font-medium leading-relaxed max-w-2xl">
            UTBEX tidak hanya mengajari kami cara menjalankan bisnis. Mereka lebih dulu percaya pada kami.
          </p>
          <footer className="mt-6 flex items-center gap-3 relative z-10">
            <div className="w-8 h-px bg-white/40" />
            <div>
              <p className="text-sm font-semibold text-white/90">Mitra Komunitas</p>
              <p className="text-xs text-white/60">Jawa Timur</p>
            </div>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
