//src/components/sections/about/data/aboutGallery.ts
import { AboutGalleryData } from "../types/about";

/**
 * IMPORTANT — Photography Rules (02_ABOUT_VISUAL_SYSTEM.md / 06_ABOUT_IMPLEMENTATION_GUIDE.md):
 * Use authentic documentary photography only. No stock photos. No AI-generated
 * people. No decorative images. Every image must strengthen trust.
 *
 * The paths below are placeholders pointing at /public/images/about/*.
 * Replace them with real, authorized documentation photography before
 * shipping — nothing here should be treated as final creative.
 */
export const aboutGallery: AboutGalleryData = {
  primary: {
    id: "primary-mentoring",
    src: "/images/foto-bersama-arif-dwi-asmara-utbex.avif",
    alt: "Mentor UTBEX duduk bersama kelompok kecil pengusaha desa, berdiskusi bersama dengan pencahayaan alami.",
    width: 1200,
    height: 1500,
    isPrimary: true,
    annotation: {
      title: "Pendampingan Komunitas",
      location: "Banyuwangi",
      detail: "2024",
    },
  },
  supporting: [
    {
      id: "support-discussion-circle",
      src: "/images/pelatihan-digital-marketing-dan-packaging-utbex.avif",
      alt: "Lingkaran diskusi dengan anggota komunitas selama sesi pemberdayaan desa.",
      width: 800,
      height: 1000,
      annotation: {
        title: "Lingkaran Diskusi",
        location: "Pemberdayaan Desa",
        detail: "12 Peserta",
      },
    },
    {
      id: "support-umkm-training",
      src: "/images/pemateri-arik-dwi-asmara-meyerahkan-gift-dengan-peserta-seminar-umkm.avif",
      alt: "Pemilik UMKM lokal mempraktikkan keterampilan baru selama sesi pelatihan praktik.",
      width: 800,
      height: 1000,
      annotation: {
        title: "Pendampingan UMKM",
        location: "Malang",
        detail: "27 Peserta",
      },
    },
    {
      id: "support-youth-innovation",
      src: "/images/pelatihan-utbex-digital-marketing-di-umkm.avif",
      alt: "Siswa berkolaborasi selama lokakarya inovasi pemuda.",
      width: 800,
      height: 600,
      annotation: {
        title: "Pemasaran Digital",
        location: "Surabaya",
        detail: "Lokakarya Kreatif",
      },
    },
    {
      id: "support-government-collab",
      src: "/images/foto-bersama-arik-dwi-asmara-di-pammeran-utbex.avif",
      alt: "Anggota tim UTBEX berdiskusi dengan mitra komunitas lokal.",
      width: 800,
      height: 600,
      annotation: {
        title: "Kolaborasi Komunitas",
        location: "Jawa Timur",
        detail: "Program Lokal",
      },
    },
  ],
};
