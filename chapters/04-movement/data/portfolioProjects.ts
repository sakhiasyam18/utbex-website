// components/section/portfolio/data/portfolioProjects.ts
import { PortfolioProject } from "../types/portfolio";

/**
 * REVISION 01: All images now use local /public/images/portofolio/ assets.
 * Only gallery-1.avif is currently available — all images temporarily reuse it.
 * Replace src values with real assets once photography is provided.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "proj-1",
    category: "KOMUNITAS",
    title: "Membantu Petani Kopi Lokal Menjangkau Pasar Digital",
    story: "Bersama petani di Malang, kami memperkenalkan alat digital koperasi yang menghubungkan panen mereka langsung dengan roastery di kota.",
    location: "Malang, Jawa Timur",
    year: "2024",
    partner: "Kementerian Pertanian Daerah",
    evidence: "120 Petani Berpartisipasi",
    isFeatured: true,
    primaryImage: {
      src: "/images/pelatihan-utbex-digital-marketing-di-umkm.avif",
      alt: "Petani kopi mendiskusikan hasil panen mereka di sekitar meja kayu",
    },
    secondaryImages: [
      {
        src: "/images/foto-bersama-arik-dwi-asmara-di-pammeran-utbex.avif",
        alt: "Tangan yang sedang menyortir biji kopi dari jarak dekat",
      },
    ],
  },
  {
    id: "proj-2",
    category: "UMKM",
    title: "Merevitalisasi Produksi Batik Tradisional",
    story: "Bersama dengan perajin lokal, kami menyempurnakan teknik produksi, membuka peluang menuju pasar fesyen internasional yang.",
    location: "Yogyakarta",
    year: "2023",
    evidence: "Menjangkau 3 Desa Perajin",
    isFeatured: false,
    primaryImage: {
      src: "/images/pelatihan-digital-marketing-dan-packaging-utbex-dengan-arif-dwi-asmara.avif",
      alt: "Seorang perajin dengan hati-hati menggambar pola batik di atas kain",
    },
  },
  {
    id: "proj-3",
    category: "PENDIDIKAN",
    title: "Membangun Literasi Digital untuk Pelajar Pedesaan",
    story: "Bermitra dengan sekolah-sekolah setempat, kami membangun kurikulum yang membekali siswa untuk menavigasi dunia digital dengan aman.",
    location: "Banyuwangi, Jawa Timur",
    year: "2024",
    partner: "Dinas Pendidikan",
    evidence: "500+ Siswa Didampingi",
    isFeatured: false,
    primaryImage: {
      src: "/images/arik-dwi-asmara-penyampaian-materi-utbex.avif",
      alt: "Siswa berkolaborasi di sekitar laptop di ruang kelas",
    },
  },
  {
    id: "proj-4",
    category: "INOVASI",
    title: "Kemasan Ramah Lingkungan untuk Pedagang Kaki Lima",
    story: "Bersama para pedagang perkotaan, kami merancang kemasan yang mudah terurai untuk mengurangi hampir setengah sampah plastik harian.",
    location: "Surabaya",
    year: "2023",
    evidence: "Mengurangi Sampah Plastik Harian hingga 40%",
    isFeatured: false,
    primaryImage: {
      src: "/images/foto-bersama-arif-dwi-asmara-utbex.avif",
      alt: "Seorang pedagang mendiskusikan alternatif kemasan dengan tokoh masyarakat",
    },
  },
  {
    id: "proj-5",
    category: "PELATIHAN",
    title: "Mendampingi Perempuan Pelaku Usaha",
    story: "Program pendampingan enam bulan tentang literasi keuangan dan pengembangan merek bagi perempuan yang memimpin usaha kecil.",
    location: "Bandung, Jawa Barat",
    year: "2025",
    evidence: "Enam Bulan Pendampingan",
    isFeatured: false,
    primaryImage: {
      src: "/images/utbex-pelatihan-manajemen-umkm-dengan-arik-dwi-asmara.avif",
      alt: "Perempuan pengusaha selama diskusi lokakarya",
    },
  },
  {
    id: "proj-6",
    category: "BRANDING",
    title: "Meningkatkan Pasar Makanan Laut Lokal",
    story: "Berkolaborasi dengan nelayan untuk membangun merek koperasi — memastikan harga yang adil dan praktik yang berkelanjutan.",
    location: "Bali",
    year: "2024",
    evidence: "Kemitraan Pemerintah",
    isFeatured: false,
    primaryImage: {
      src: "/images/awarding-inotek-award-ceremony-2023-utbex.avif",
      alt: "Nelayan memeriksa tangkapan pagi mereka di pasar",
    },
  },
];
