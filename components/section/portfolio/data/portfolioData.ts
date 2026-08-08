// components/section/portfolio/data/portfolioData.ts

export type CategoryTab = "Ekonomi Kreatif" | "Pemberdayaan" | "Sosial & Kemitraan";

export interface ProjectData {
  id: string;
  tab: CategoryTab;
  categoryTag: string;
  title: string;
  story: string;
  location: string;
  year: string;
  evidence: string;
  image: string;
  span?: string;
  aspect: string;
}

export const portfolioData: ProjectData[] = [
  // ─── TAB 1: EKONOMI KREATIF ───────────────────────────────────────
  {
    id: "ek-1",
    tab: "Ekonomi Kreatif",
    categoryTag: "PRODUK LOKAL",
    title: "Inovasi Kriya & Fashion Berkelanjutan",
    story: "Mengangkat potensi kearifan lokal melalui produk inovatif seperti kaos lukis tanpa tinta pertama di Indonesia.",
    location: "Nasional",
    year: "Sejak 2016",
    evidence: "HAKI & Penghargaan",
    image: "/images/kaos-lukis-tanpa-tinta-pertama-di-indonesia.avif",
    span: "",
    aspect: "aspect-[4/5]",
  },
  {
    id: "ek-2",
    tab: "Ekonomi Kreatif",
    categoryTag: "DIGITALISASI",
    title: "Optimalisasi Desain & Branding UMKM",
    story: "Memberikan nilai tambah pada produk lokal melalui standardisasi kemasan, identitas visual, dan digital marketing.",
    location: "Malang Raya",
    year: "Sejak 2023",
    evidence: "Transformasi Digital",
    image: "/images/utapura-egg-premium-ayam-kampung.avif",
    span: "",
    aspect: "aspect-[4/5]",
  },

  // ─── TAB 2: PEMBERDAYAAN ──────────────────────────────────────────
  {
    id: "pb-1",
    tab: "Pemberdayaan",
    categoryTag: "INKUBASI",
    title: "Mencetak Wirausaha Muda Desa",
    story: "Program pelatihan intensif untuk membekali pemuda desa dengan mindset bisnis, keterampilan praktis, dan manajemen.",
    location: "Jawa Timur",
    year: "Berkelanjutan",
    evidence: "Generasi Mandiri",
    image: "/images/utbex-pelatihan-manajemen-umkm-dengan-arik-dwi-asmara.avif",
    aspect: "aspect-[4/5]",
  },
  {
    id: "pb-2",
    tab: "Pemberdayaan",
    categoryTag: "PENDAMPINGAN",
    title: "Pendampingan Legalitas & UMKM Naik Kelas",
    story: "Mendampingi UMKM lokal secara langsung dalam pengurusan NIB, PIRT, sertifikasi Halal, hingga perluasan akses pasar.",
    location: "Jawa Timur",
    year: "Berkelanjutan",
    evidence: "UMKM Terverifikasi",
    image: "/images/arik-dwi-asmara-penyampaian-materi-utbex.avif",
    aspect: "aspect-[4/5]",
  },

  // ─── TAB 3: SOSIAL & KEMITRAAN ─────────────────────────────────────
  {
    id: "sk-1",
    tab: "Sosial & Kemitraan",
    categoryTag: "EDUKASI SOSIAL",
    title: "SCoVIL & Penggerak Pariwisata Pesisir",
    story: "Membangun School of Creative Village Learning untuk pemuda pesisir dan mengembangkan ekosistem desa wisata yang terintegrasi.",
    location: "Pesisir Selatan",
    year: "Berkelanjutan",
    evidence: "Dampak Sosial",
    image: "/images/foto-bersama-arik-dwi-asmara-dengan-pemerintah-utbex.avif",
    span: "",
    aspect: "aspect-[4/5]",
  },
  {
    id: "sk-2",
    tab: "Sosial & Kemitraan",
    categoryTag: "KOLABORASI",
    title: "Sinergi Multi-Sektor (Pentahelix)",
    story: "Menjalin kemitraan strategis dengan pemerintah, CSR perusahaan, institusi pendidikan, dan komunitas untuk keberlanjutan program.",
    location: "Indonesia",
    year: "Berkelanjutan",
    evidence: "Jejaring Kemitraan",
    image: "/images/postingan-utbex-news-kolase-foto-foto.avif",
    aspect: "aspect-[4/5]",
  },
];
