"use client";
// components/section/portfolio/Portfolio.tsx — Dark heynesh-style project cards

import Image from "next/image";
import {  m as motion  } from "framer-motion";
import { staggerContainer, staggerChild } from "../../../motion/variants/stagger";

const projects = [
  {
    id: "proj-1",
    num: "01",
    category: "KOMUNITAS",
    title: "Membantu Petani Kopi Lokal Menjangkau Pasar Digital",
    story: "Bersama petani di Malang, kami memperkenalkan alat digital koperasi yang menghubungkan panen mereka langsung dengan roastery di kota.",
    location: "Malang, Jawa Timur",
    year: "2024",
    evidence: "120 Petani Berpartisipasi",
    image: "/images/pelatihan-utbex-digital-marketing-di-umkm.avif",
    tags: ["Digital", "Komunitas"],
  },
  {
    id: "proj-2",
    num: "02",
    category: "UMKM",
    title: "Merevitalisasi Produksi Batik & Kerajinan Tradisional",
    story: "Bersama perajin lokal, kami menyempurnakan teknik produksi dan membuka peluang menuju pasar fesyen yang lebih luas.",
    location: "Yogyakarta",
    year: "2023",
    evidence: "3 Desa Perajin",
    image: "/images/pelatihan-digital-marketing-dan-packaging-utbex-dengan-arif-dwi-asmara.avif",
    tags: ["UMKM", "Kerajinan"],
  },
  {
    id: "proj-3",
    num: "03",
    category: "PENDIDIKAN",
    title: "Literasi Digital untuk Pelajar Pedesaan",
    story: "Bermitra dengan sekolah setempat, membangun kurikulum yang membekali siswa untuk menavigasi dunia digital dengan aman.",
    location: "Banyuwangi, Jawa Timur",
    year: "2024",
    evidence: "500+ Siswa Didampingi",
    image: "/images/arik-dwi-asmara-penyampaian-materi-utbex.avif",
    tags: ["Pendidikan", "Digital"],
  },
  {
    id: "proj-4",
    num: "04",
    category: "INOVASI",
    title: "Kaos Lukis Tanpa Tinta — Inovasi Pertama di Indonesia",
    story: "Mengembangkan teknik kaos lukis tanpa tinta yang ramah lingkungan — inovasi pertama di Indonesia yang kini dipasarkan secara nasional.",
    location: "Jawa Timur",
    year: "2023",
    evidence: "HAKI Terdaftar",
    image: "/images/kaos-lukis-tanpa-tinta-pertama-di-indonesia.avif",
    tags: ["Inovasi", "Produk"],
  },
  {
    id: "proj-5",
    num: "05",
    category: "BRANDING",
    title: "UTAPURA — Produk Lokal Menuju Pasar Nasional",
    story: "Membangun merek UTAPURA untuk produk-produk unggulan desa — dari telur premium ayam kampung hingga produk pangan inovatif.",
    location: "Jawa Timur",
    year: "2024",
    evidence: "Distribusi Nasional",
    image: "/images/utapura-egg-premium-ayam-kampung.avif",
    tags: ["Branding", "Produk Lokal"],
  },
  {
    id: "proj-6",
    num: "06",
    category: "PELATIHAN",
    title: "Mendampingi Perempuan Pelaku Usaha",
    story: "Program 6 bulan tentang literasi keuangan dan pengembangan merek bagi perempuan yang memimpin usaha kecil.",
    location: "Bandung, Jawa Barat",
    year: "2025",
    evidence: "6 Bulan Pendampingan",
    image: "/images/utbex-pelatihan-manajemen-umkm-dengan-arik-dwi-asmara.avif",
    tags: ["Perempuan", "Pelatihan"],
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-label="Portfolio dan Jejak Kolaborasi UTBEX"
      className="relative w-full bg-[#0a0000] text-white overflow-hidden"
    >
      {/* Subtle texture overlay without Parallax */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(139,0,0,0.15)_0%,_transparent_60%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(139,0,0,0.08)_0%,_transparent_60%)]" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10 py-24 lg:py-32">

        {/* Header */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 lg:mb-24"
        >
          <motion.div variants={staggerChild} className="text-mask">
            <span className="inline-block text-xs font-semibold tracking-widest text-white uppercase mb-4">
              — Jejak Kolaborasi
            </span>
          </motion.div>
          <motion.div variants={staggerChild} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tighter max-w-2xl">
              Setiap Program adalah{" "}
              <span className="text-utbex-maroon italic">Cerita Nyata.</span>
            </h2>
            <p className="text-white/50 text-sm max-w-xs leading-relaxed">
              Kolaborasi yang kami bangun bukan sekadar proyek — ini adalah perjalanan transformasi bersama.
            </p>
          </motion.div>
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={staggerChild}
              className="group relative bg-[#111111] border border-white/5 rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-500 hover:-translate-y-1 hover:bg-[#1a1a1a] will-change-transform transform-gpu"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transform transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                {/* Category badge on image */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="text-xs font-bold text-white/70 tracking-widest bg-black/20 backdrop-blur-sm px-2 py-0.5 rounded">{project.num}</span>
                  <span className="glass-panel text-[10px] sm:text-xs font-semibold text-white/90 rounded-full px-3 py-1 shadow-sm border border-white/10 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
                {/* Maroon overlay on hover */}
                <div className="absolute inset-0 bg-utbex-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-base font-bold text-white leading-snug mb-2 group-hover:text-utbex-maroon/90 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed mb-4">
                  {project.story}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white/40">{project.location} · {project.year}</p>
                    <p className="text-xs text-utbex-maroon mt-0.5 font-medium">{project.evidence}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-utbex-maroon group-hover:border-utbex-maroon transition-all duration-300 transform group-hover:scale-110">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-0.5 transition-transform">
                      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Cinematic divider images */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          <motion.div
            variants={staggerChild}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0">
                <Image
                  src="/images/kolase-foto-utbex-penghargaan-dan-selamat-sukses-arik-dwi-asmara.avif"
                  alt="Divider 2"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <p className="absolute bottom-5 left-6 text-white/90 text-sm font-semibold tracking-wide z-10">Penghargaan Nasional 2023</p>
          </motion.div>
          <motion.div
            variants={staggerChild}
            className="relative aspect-[16/9] rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0">
                <Image
                  src="/images/produk-2024-utbex-macam-macam.avif"
                  alt="Divider 1"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-1000"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <p className="absolute bottom-5 left-6 text-white/90 text-sm font-semibold tracking-wide z-10">Produk Inovasi 2024</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
