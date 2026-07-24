"use client";
// components/section/about/About.tsx — Heynesh-style sticky split layout

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, staggerChild } from "../../../motion/variants/stagger";

const milestones = [
  {
    year: "'20",
    title: "Lahirnya UTBEX",
    story:
      "UTBEX lahir dari keyakinan bahwa perubahan tidak harus selalu dimulai dari sesuatu yang besar. Sebuah ide sederhana yang tumbuh dari kegelisahan melihat potensi desa yang belum tersentuh.",
    image: "/images/arik-dwi-asmara-penyampaian-materi-utbex.avif",
    alt: "Arik Dwi Asmara menyampaikan materi",
    tag: "Asal Mula",
  },
  {
    year: "'21",
    title: "Program SCoVil Pertama",
    story:
      "Program SCoVil (Social Community Village) pertama diluncurkan. Bersama komunitas desa, kami membangun ruang untuk belajar, berkolaborasi, dan menciptakan solusi dari kebutuhan nyata.",
    image: "/images/pelatihan-digital-marketing-dan-packaging-utbex.avif",
    alt: "Pelatihan digital marketing dan packaging UTBEX",
    tag: "Program",
  },
  {
    year: "'22",
    title: "Ekspansi ke UMKM",
    story:
      "Memperluas dampak ke pelaku UMKM lokal — membantu mereka bertransformasi digital, membangun merek, dan menjangkau pasar yang lebih luas.",
    image: "/images/pelatihan-utbex-digital-marketing-di-umkm.avif",
    alt: "Pelatihan UTBEX di UMKM lokal",
    tag: "Ekspansi",
  },
  {
    year: "'23",
    title: "Penghargaan INOTEK",
    story:
      "UTBEX meraih penghargaan INOTEK Award sebagai pengakuan atas kontribusi nyata dalam inovasi pemberdayaan masyarakat lokal Indonesia.",
    image: "/images/awarding-inotek-award-ceremony-2023-utbex.avif",
    alt: "Awarding INOTEK 2023 UTBEX",
    tag: "Penghargaan",
  },
  {
    year: "'24",
    title: "Kolaborasi Pemerintah",
    story:
      "Menjalin kemitraan strategis dengan pemerintah daerah untuk memperluas program pemberdayaan. Bagi kami, dampak adalah perubahan yang tetap dirasakan setelah kegiatan selesai.",
    image: "/images/utbex-foto-bersama-pemerintah-arif-dwi-asmara.avif",
    alt: "UTBEX foto bersama pemerintah",
    tag: "Kemitraan",
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
        </motion.div>

        {/* Timeline scroll cards — 2 col on desktop */}
        <div className="lg:grid lg:grid-cols-[200px_1fr] lg:gap-16">

          {/* Sticky left label (desktop) */}
          <div className="hidden lg:block">
            <div className="sticky top-1/3">
              <div className="space-y-1">
                <p className="text-xs font-semibold tracking-widest text-utbex-text-secondary/50 uppercase">Perjalanan</p>
                <p className="text-xs text-utbex-text-secondary/50">2020 — 2024</p>
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
