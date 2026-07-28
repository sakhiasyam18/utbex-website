"use client";
// components/section/portfolio/Portfolio.tsx — Gen Z glassmorphism portfolio

import Image from "next/image";
import { m as motion } from "framer-motion";
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
    span: "md:col-span-2 md:row-span-1", // wide
    aspect: "aspect-[16/10]",
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
    span: "", // normal
    aspect: "aspect-[4/5]",
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
    span: "", // normal
    aspect: "aspect-[4/5]",
  },
  {
    id: "proj-4",
    num: "04",
    category: "INOVASI",
    title: "Kaos Lukis Tanpa Tinta — Inovasi Pertama di Indonesia",
    story: "Mengembangkan teknik kaos lukis tanpa tinta yang ramah lingkungan — inovasi pertama di Indonesia.",
    location: "Jawa Timur",
    year: "2023",
    evidence: "HAKI Terdaftar",
    image: "/images/kaos-lukis-tanpa-tinta-pertama-di-indonesia.avif",
    span: "", // normal
    aspect: "aspect-[4/5]",
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
    span: "md:col-span-2 md:row-span-1", // wide
    aspect: "aspect-[16/10]",
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
    span: "",
    aspect: "aspect-[4/5]",
  },
];

// Neon glow color per category
const categoryGlow: Record<string, string> = {
  KOMUNITAS: "group-hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]",
  UMKM: "group-hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]",
  PENDIDIKAN: "group-hover:shadow-[0_0_40px_rgba(34,197,94,0.15)]",
  INOVASI: "group-hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]",
  BRANDING: "group-hover:shadow-[0_0_40px_rgba(236,72,153,0.15)]",
  PELATIHAN: "group-hover:shadow-[0_0_40px_rgba(139,0,0,0.2)]",
};

const categoryColor: Record<string, string> = {
  KOMUNITAS: "bg-blue-500/20 text-blue-300 border-blue-500/20",
  UMKM: "bg-purple-500/20 text-purple-300 border-purple-500/20",
  PENDIDIKAN: "bg-green-500/20 text-green-300 border-green-500/20",
  INOVASI: "bg-amber-500/20 text-amber-300 border-amber-500/20",
  BRANDING: "bg-pink-500/20 text-pink-300 border-pink-500/20",
  PELATIHAN: "bg-red-900/30 text-red-300 border-red-500/20",
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      aria-label="Portfolio dan Jejak Kolaborasi UTBEX"
      className="relative w-full bg-[#060006] text-white overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-utbex-maroon/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-utbex-maroon/5 rounded-full blur-[150px]" />
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 py-24 lg:py-36">

        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 lg:mb-24"
        >
          <motion.div variants={staggerChild} className="text-mask">
            <span className="inline-block text-[10px] font-bold tracking-[0.25em] text-utbex-maroon uppercase mb-5">
              — Jejak Kolaborasi
            </span>
          </motion.div>
          <motion.div variants={staggerChild} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.92] tracking-tighter max-w-3xl">
              Setiap Program adalah{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-utbex-maroon via-red-400 to-utbex-maroon italic">
                Cerita Nyata.
              </span>
            </h2>
            <p className="text-white/40 text-sm max-w-xs leading-relaxed">
              Kolaborasi yang kami bangun bukan sekadar proyek — ini adalah perjalanan transformasi bersama.
            </p>
          </motion.div>
        </motion.div>

        {/* Project Masonry Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={staggerChild}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer
                         transition-all duration-500 hover:-translate-y-1.5
                         ${project.span}
                         ${categoryGlow[project.category] || "group-hover:shadow-[0_0_40px_rgba(139,0,0,0.15)]"}`}
            >
              {/* Glass border frame */}
              <div className="absolute inset-0 rounded-3xl border border-white/[0.06] group-hover:border-white/[0.12] transition-colors duration-500 z-20 pointer-events-none" />

              {/* Image */}
              <div className={`relative ${project.aspect} overflow-hidden`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                  quality={80}
                />

                {/* Dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Top badge row */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-[10px] font-black text-white/50 tracking-[0.2em]">{project.num}</span>
                  <span className={`text-[9px] sm:text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full border backdrop-blur-md ${categoryColor[project.category] || "bg-white/10 text-white/70 border-white/10"}`}>
                    {project.category}
                  </span>
                </div>

                {/* Bottom content — glassmorphism panel */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 z-10">
                  {/* Glass card */}
                  <div className="bg-white/[0.07] backdrop-blur-xl rounded-2xl p-4 sm:p-5 border border-white/[0.08] transition-all duration-500 group-hover:bg-white/[0.12] group-hover:border-white/[0.15]">
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug mb-2 line-clamp-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-white/40 leading-relaxed mb-3 line-clamp-2">
                      {project.story}
                    </p>

                    {/* Meta row */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-medium text-white/30 truncate">{project.location} · {project.year}</p>
                        <p className="text-[10px] sm:text-[11px] text-utbex-maroon font-semibold mt-0.5">{project.evidence}</p>
                      </div>
                      {/* Arrow button */}
                      <div className="w-8 h-8 rounded-full bg-white/[0.08] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-utbex-maroon group-hover:border-utbex-maroon group-hover:scale-110 transition-all duration-300">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                          <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Maroon glow overlay on hover */}
                <div className="absolute inset-0 bg-utbex-maroon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Cinematic collage section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 sm:mt-28 relative"
        >
          {/* Section mini-heading */}
          <motion.p variants={staggerChild} className="text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase mb-6 text-center">
            ✦ Momen Bersejarah
          </motion.p>

          {/* Tilted collage grid */}
          <div className="grid grid-cols-12 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {/* Large tilted left */}
            <motion.div
              variants={staggerChild}
              className="col-span-12 sm:col-span-7 relative group"
            >
              <div className="relative aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden sm:-rotate-1 hover:rotate-0 transition-transform duration-700 shadow-2xl">
                <Image
                  src="/images/kolase-foto-utbex-penghargaan-dan-selamat-sukses-arik-dwi-asmara.avif"
                  alt="Kolase penghargaan UTBEX"
                  fill
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent" />
                {/* Glass label */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-utbex-maroon animate-pulse" />
                    <span className="text-[10px] sm:text-[11px] font-semibold text-white/80">Penghargaan Nasional 2023</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Smaller tilted right */}
            <motion.div
              variants={staggerChild}
              className="col-span-12 sm:col-span-5 relative group"
            >
              <div className="relative aspect-[4/3] sm:aspect-[3/4] rounded-2xl sm:rounded-3xl overflow-hidden sm:rotate-2 hover:rotate-0 transition-transform duration-700 shadow-2xl">
                <Image
                  src="/images/produk-2024-utbex-macam-macam.avif"
                  alt="Produk UTBEX 2024"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  quality={80}
                />
                <div className="absolute inset-0 bg-gradient-to-tl from-black/70 via-black/20 to-transparent" />
                {/* Glass label */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-[10px] sm:text-[11px] font-semibold text-white/80">Produk Inovasi 2024</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Small accent photos */}
            <motion.div
              variants={staggerChild}
              className="col-span-6 sm:col-span-4 relative group"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden sm:rotate-1 hover:rotate-0 transition-transform duration-700 shadow-xl">
                <Image
                  src="/images/foto-bersama-arik-dwi-asmara-dengan-pemerintah-utbex.avif"
                  alt="UTBEX bersama pemerintah"
                  fill
                  sizes="(max-width: 768px) 50vw, 30vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={75}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            </motion.div>

            <motion.div
              variants={staggerChild}
              className="col-span-6 sm:col-span-4 relative group"
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden sm:-rotate-2 hover:rotate-0 transition-transform duration-700 shadow-xl">
                <Image
                  src="/images/pemateri-arik-dwi-asmara-meyerahkan-gift-dengan-peserta-seminar-umkm.avif"
                  alt="UTBEX seminar gift"
                  fill
                  sizes="(max-width: 768px) 50vw, 30vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={75}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            </motion.div>

            <motion.div
              variants={staggerChild}
              className="col-span-12 sm:col-span-4 relative group"
            >
              <div className="relative aspect-[16/9] sm:aspect-square rounded-2xl overflow-hidden sm:rotate-1 hover:rotate-0 transition-transform duration-700 shadow-xl">
                <Image
                  src="/images/postingan-utbex-news-kolase-foto-foto.avif"
                  alt="UTBEX news collage"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  quality={75}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
