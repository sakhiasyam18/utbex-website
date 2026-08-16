/**
 * components/section/impact/data/impactData.ts
 * ----------------------------------------------------------------------
 * File data sentral untuk seksi "Dampak & Kolaborasi" (Impact).
 * Berisi konfigurasi array statis untuk:
 * 1. `partnersData`: Daftar logo instansi/klien yang berkolaborasi.
 * 2. `collaborationItemsData`: Daftar penawaran bentuk kerjasama (Card).
 * 3. `impactPhotosData`: Tautan URL gambar untuk blok kolase foto.
 */

export interface Partner {
  id: string;
  num: string;
  title: string;
  desc: string;
  color: string;
  glow: string;
  textGlow: string;
}

export const partnersData: Partner[] = [
  {
    id: "partner-1",
    num: "01",
    title: "Pemerintah Daerah & Provinsi",
    desc: "Berkolaborasi merancang dan mengeksekusi program pemberdayaan masyarakat serta pengembangan UMKM berbasis potensi lokal.",
    color: "from-blue-500/10 to-transparent",
    glow: "group-hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] group-hover:border-blue-500/30",
    textGlow: "group-hover:text-blue-700",
  },
  {
    id: "partner-2",
    num: "02",
    title: "Kementerian / Lembaga Negara",
    desc: "Menjadi mitra pelaksana program-program strategis nasional dalam memajukan ekonomi kreatif dan kemandirian desa.",
    color: "from-red-500/10 to-transparent",
    glow: "group-hover:shadow-[0_20px_40px_rgba(239,68,68,0.15)] group-hover:border-red-500/30",
    textGlow: "group-hover:text-red-700",
  },
  {
    id: "partner-3",
    num: "03",
    title: "Program CSR Swasta & BUMN",
    desc: "Menyalurkan dana tanggung jawab sosial perusahaan (CSR) ke dalam program berdampak nyata dan berkelanjutan bagi masyarakat.",
    color: "from-purple-500/10 to-transparent",
    glow: "group-hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)] group-hover:border-purple-500/30",
    textGlow: "group-hover:text-purple-700",
  },
  {
    id: "partner-4",
    num: "04",
    title: "Lembaga Pendidikan & Kampus",
    desc: "Bersinergi dalam penelitian, pengabdian masyarakat, dan transfer pengetahuan untuk menciptakan inovasi terapan.",
    color: "from-green-500/10 to-transparent",
    glow: "group-hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] group-hover:border-green-500/30",
    textGlow: "group-hover:text-green-700",
  },
  {
    id: "partner-5",
    num: "05",
    title: "Lembaga Sosial & Komunitas Ekonomi Kreatif",
    desc: "Membangun jaringan dan ekosistem yang saling mendukung antar penggerak sosial untuk memperluas jangkauan kebermanfaatan.",
    color: "from-orange-500/10 to-transparent",
    glow: "group-hover:shadow-[0_20px_40px_rgba(249,115,22,0.15)] group-hover:border-orange-500/30",
    textGlow: "group-hover:text-orange-700",
  },
  {
    id: "partner-6",
    num: "06",
    title: "Organisasi Internasional Pemberdayaan",
    desc: "Mengadaptasi standar global dan membawa potensi desa ke kancah internasional melalui program kolaborasi lintas batas.",
    color: "from-teal-500/10 to-transparent",
    glow: "group-hover:shadow-[0_20px_40px_rgba(20,184,166,0.15)] group-hover:border-teal-500/30",
    textGlow: "group-hover:text-teal-700",
  },
];

export const collaborationItemsData = [
  "Program Inkubasi Pemuda Desa",
  "Co-Branding Produk Lokal",
  "CSR Pendidikan & Pelatihan Wirausaha",
  "Program Desa Wisata Kreatif",
  "Pendampingan UMKM Digital",
  "Program Anti Stunting Berbasis Ekonomi Kreatif",
];
