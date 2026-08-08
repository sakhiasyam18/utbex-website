// components/section/portfolio/data/portfolioData.ts

export type CategoryTab = "Bisnis Kreatif" | "Pelatihan & Edukasi" | "Inisiatif Sosial";

export interface ProjectData {
  id: string;
  tab: CategoryTab;
  categoryTag: string; // The small pill text (e.g. FASHION, UMKM, SOSIAL)
  title: string;
  story: string;
  location: string;
  year: string;
  evidence: string;
  image: string;
  span?: string; // For CSS grid layout (e.g. md:col-span-2)
  aspect: string; // Aspect ratio
}

export const portfolioData: ProjectData[] = [
  // ─── TAB 1: BISNIS KREATIF ───────────────────────────────────────
  {
    id: "bk-1",
    tab: "Bisnis Kreatif",
    categoryTag: "INOVASI",
    title: "Kaos Lukis Tanpa Tinta — Inovasi Pertama di Indonesia",
    story: "Mengembangkan teknik kaos lukis tanpa tinta yang ramah lingkungan. Inovasi karya anak bangsa pertama di Indonesia.",
    location: "Jawa Timur",
    year: "2023",
    evidence: "HAKI Terdaftar",
    image: "/images/kaos-lukis-tanpa-tinta-pertama-di-indonesia.avif",
    span: "",
    aspect: "aspect-[4/5]",
  },
  {
    id: "bk-2",
    tab: "Bisnis Kreatif",
    categoryTag: "FASHION & MERCH",
    title: "Sablon, Fashion Custom & Merchandise",
    story: "Memproduksi berbagai pakaian custom dan souvenir promosi kualitas premium untuk perusahaan dan komunitas.",
    location: "Malang, Jawa Timur",
    year: "2024",
    evidence: "Ratusan Klien",
    image: "/images/produk-2024-utbex-macam-macam.avif",
    span: "", // normal
    aspect: "aspect-[4/5]",
  },
  {
    id: "bk-3",
    tab: "Bisnis Kreatif",
    categoryTag: "DESAIN & BRANDING",
    title: "Jasa Desain Grafis & Digital Printing",
    story: "Menyediakan layanan desain grafis komprehensif mulai dari logo, kemasan UMKM, hingga pencetakan skala besar.",
    location: "Indonesia",
    year: "2025",
    evidence: "Desain Premium",
    image: "/images/utapura-egg-premium-ayam-kampung.avif",
    span: "", // normal
    aspect: "aspect-[4/5]",
  },

  // ─── TAB 2: PELATIHAN & EDUKASI ──────────────────────────────────
  {
    id: "pe-1",
    tab: "Pelatihan & Edukasi",
    categoryTag: "DIGITAL MARKETING",
    title: "Edukasi Manajemen Usaha & Pemasaran Digital",
    story: "Membekali pelaku UMKM desa dengan strategi digital marketing, foto produk, dan optimalisasi media sosial.",
    location: "Yogyakarta",
    year: "2023",
    evidence: "Ratusan Peserta",
    image: "/images/pelatihan-digital-marketing-dan-packaging-utbex-dengan-arif-dwi-asmara.avif",
    span: "",
    aspect: "aspect-[4/5]",
  },
  {
    id: "pe-2",
    tab: "Pelatihan & Edukasi",
    categoryTag: "INKUBASI",
    title: "Inkubasi Wirausaha Muda Desa",
    story: "Program pendampingan intensif bagi pemuda desa untuk merintis dan memvalidasi model bisnis kreatif mereka.",
    location: "Bandung, Jawa Barat",
    year: "2024",
    evidence: "Lahirnya Wirausaha Baru",
    image: "/images/utbex-pelatihan-manajemen-umkm-dengan-arik-dwi-asmara.avif",
    aspect: "aspect-[4/5]",
  },
  {
    id: "pe-3",
    tab: "Pelatihan & Edukasi",
    categoryTag: "PENDAMPINGAN",
    title: "Konsultan Pendampingan UMKM Naik Kelas",
    story: "Mendampingi UMKM lokal mengurus legalitas (NIB, PIRT, Halal) serta meningkatkan standardisasi pengemasan.",
    location: "Malang, Jawa Timur",
    year: "2025",
    evidence: "80+ UMKM Didampingi",
    image: "/images/arik-dwi-asmara-penyampaian-materi-utbex.avif",
    aspect: "aspect-[4/5]",
  },

  // ─── TAB 3: INISIATIF SOSIAL ─────────────────────────────────────
  {
    id: "is-1",
    tab: "Inisiatif Sosial",
    categoryTag: "PENDIDIKAN",
    title: "SCoVIL (School of Creative Village Learning)",
    story: "Sekolah non-formal yang memberikan beasiswa keterampilan untuk pemuda pesisir agar siap kerja dan mandiri.",
    location: "Pesisir Malang Selatan",
    year: "2024",
    evidence: "Membangun Generasi Muda",
    image: "/images/foto-bersama-arik-dwi-asmara-dengan-pemerintah-utbex.avif",
    span: "",
    aspect: "aspect-[4/5]",
  },
  {
    id: "is-2",
    tab: "Inisiatif Sosial",
    categoryTag: "PARIWISATA",
    title: "Pengembangan Desa Wisata & Ekosistem Pesisir",
    story: "Membangun ekosistem ekonomi kreatif pariwisata yang terintegrasi untuk mengangkat potensi wisata daerah pantai.",
    location: "Bantur, Malang",
    year: "2023",
    evidence: "Desa Mandiri",
    image: "/images/postingan-utbex-news-kolase-foto-foto.avif",
    aspect: "aspect-[4/5]",
  },
  {
    id: "is-3",
    tab: "Inisiatif Sosial",
    categoryTag: "KEMANUSIAAN",
    title: "SAR Banturono Rescue",
    story: "Terlibat aktif dalam mitigasi bencana, penyelamatan (SAR), dan bantuan kemanusiaan di wilayah pesisir Jawa Timur.",
    location: "Jawa Timur",
    year: "2025",
    evidence: "Tim Relawan Tangguh",
    image: "/images/pemateri-arik-dwi-asmara-meyerahkan-gift-dengan-peserta-seminar-umkm.avif",
    aspect: "aspect-[4/5]",
  },
];
