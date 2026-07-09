// content/images/registry.ts
//
// Image Metadata Registry — structured metadata for all documentary photography.
// This file connects raw image files in /public/images/ to the narrative system.
//
// Source of truth:
//   - 04_VISUAL_NARRATIVE_SYSTEM.md §Engineering Notes (schema)
//   - 04_VISUAL_NARRATIVE_SYSTEM.md §Visual Story Flow (ordering)
//   - 01_PHOTOGRAPHY_DIRECTION.md (photography direction)
//
// IMPORTANT:
//   - Every image MUST have meaningful alt text (never empty, never "image")
//   - Images are ordered by chapter, then by narrative priority
//   - New photos are appended with full metadata
//
// Initial population from existing /public/images/ — categorized by
// filename analysis and chapter purpose alignment.

import type { ChapterMedia } from '@/types/chapter';

export const imageRegistry: ChapterMedia[] = [
  // ───────────────────────────────────────────────────────────────
  // CHAPTER 01 — FIRST IMPRESSION
  // Photography purpose: introduce presence, active interaction
  // ───────────────────────────────────────────────────────────────
  {
    src: '/images/arik-dwi-asmara-penyampaian-materi-utbex.avif',
    alt: 'Arif Dwi Asmara menyampaikan materi di hadapan peserta pelatihan UTBEX',
    chapter: '01-first-impression',
    emotion: 'curiosity',
    priority: 'hero',
    people: ['Arif Dwi Asmara'],
    story: 'Mentor aktif terlibat dengan peserta — kesan pertama yang autentik',
  },

  // ───────────────────────────────────────────────────────────────
  // CHAPTER 02 — BELIEF
  // Photography purpose: philosophy, journey beginnings
  // ───────────────────────────────────────────────────────────────
  {
    src: '/images/arik-dwi-asmara-utbex-menyampaikan-materi.avif',
    alt: 'Arif Dwi Asmara menyampaikan materi tentang visi dan misi UTBEX',
    chapter: '02-belief',
    emotion: 'understanding',
    priority: 'high',
    people: ['Arif Dwi Asmara'],
    story: 'Keyakinan yang disampaikan melalui tindakan nyata',
  },

  // ───────────────────────────────────────────────────────────────
  // CHAPTER 03 — HUMAN
  // Photography purpose: mentor teaching, listening, mentoring
  // ───────────────────────────────────────────────────────────────
  {
    src: '/images/foto-bersama-arif-dwi-asmara-utbex.avif',
    alt: 'Arif Dwi Asmara bersama peserta pelatihan UTBEX dalam suasana akrab',
    chapter: '03-human',
    emotion: 'connection',
    priority: 'high',
    people: ['Arif Dwi Asmara', 'peserta pelatihan'],
    story: 'Mentor yang dekat dengan komunitas — membangun kepercayaan melalui kedekatan',
  },
  {
    src: '/images/pemateri-arik-dwi-asmara-meyerahkan-gift-dengan-peserta-seminar-umkm.avif',
    alt: 'Arif Dwi Asmara menyerahkan cendera mata kepada peserta seminar UMKM',
    chapter: '03-human',
    emotion: 'connection',
    priority: 'normal',
    people: ['Arif Dwi Asmara', 'peserta seminar UMKM'],
    story: 'Apresiasi tulus terhadap setiap individu yang berpartisipasi',
  },

  // ───────────────────────────────────────────────────────────────
  // CHAPTER 04 — MOVEMENT
  // Photography purpose: workshops, training, field activities
  // ───────────────────────────────────────────────────────────────
  {
    src: '/images/pelatihan-digital-marketing-dan-packaging-utbex-dengan-arif-dwi-asmara.avif',
    alt: 'Pelatihan digital marketing dan packaging UTBEX bersama Arif Dwi Asmara dan peserta UMKM',
    chapter: '04-movement',
    emotion: 'recognition',
    priority: 'high',
    people: ['Arif Dwi Asmara', 'peserta UMKM'],
    story: 'Gerakan nyata — pelatihan digital marketing untuk pemberdayaan UMKM',
  },
  {
    src: '/images/pelatihan-digital-marketing-dan-packaging-utbex.avif',
    alt: 'Suasana pelatihan digital marketing dan packaging yang diselenggarakan UTBEX',
    chapter: '04-movement',
    emotion: 'recognition',
    priority: 'normal',
    people: ['peserta pelatihan'],
    story: 'Ruang belajar bersama yang tumbuh dari kebutuhan nyata',
  },
  {
    src: '/images/pelatihan-utbex-digital-marketing-di-umkm.avif',
    alt: 'Peserta UMKM mengikuti pelatihan digital marketing dari UTBEX',
    chapter: '04-movement',
    emotion: 'recognition',
    priority: 'normal',
    people: ['peserta UMKM'],
    story: 'Kolaborasi yang terus berkembang bersama masyarakat',
  },
  {
    src: '/images/utbex-pelatihan-manajemen-umkm-dengan-arik-dwi-asmara.avif',
    alt: 'Pelatihan manajemen UMKM yang difasilitasi oleh Arif Dwi Asmara bersama UTBEX',
    chapter: '04-movement',
    emotion: 'recognition',
    priority: 'normal',
    people: ['Arif Dwi Asmara', 'peserta UMKM'],
    story: 'Pendampingan yang membangun kapasitas lokal',
  },

  // ───────────────────────────────────────────────────────────────
  // CHAPTER 05 — STORIES
  // Photography purpose: project documentation, evidence, before/after
  // ───────────────────────────────────────────────────────────────
  {
    src: '/images/postingan-utbex-news-saat-seminar-penyampaian-materi-dengan-umkm-lokal-arik-dwi-asmara.avif',
    alt: 'Dokumentasi UTBEX News: seminar penyampaian materi bersama UMKM lokal oleh Arif Dwi Asmara',
    chapter: '05-stories',
    emotion: 'confidence',
    priority: 'high',
    people: ['Arif Dwi Asmara', 'pelaku UMKM lokal'],
    story: 'Bukti nyata kegiatan yang didokumentasikan secara autentik',
  },
  {
    src: '/images/postingan-utbex-news-kolase-foto-foto.avif',
    alt: 'Kolase dokumentasi berbagai kegiatan UTBEX bersama masyarakat',
    chapter: '05-stories',
    emotion: 'confidence',
    priority: 'normal',
    story: 'Rangkaian cerita perjalanan UTBEX melalui berbagai komunitas',
  },
  {
    src: '/images/postingan-news-kolase-utbex-penyerahan-dengan-pemerintahan.avif',
    alt: 'Kolase dokumentasi penyerahan hasil kolaborasi UTBEX dengan pemerintah daerah',
    chapter: '05-stories',
    emotion: 'confidence',
    priority: 'normal',
    story: 'Kolaborasi yang melibatkan berbagai pemangku kepentingan',
  },

  // ───────────────────────────────────────────────────────────────
  // CHAPTER 06 — IMPACT
  // Photography purpose: community outcomes, recognition, transformation
  // ───────────────────────────────────────────────────────────────
  {
    src: '/images/foto-bersama-arik-dwi-asmara-utbex-dengan-pemerintah.avif',
    alt: 'Arif Dwi Asmara bersama perwakilan pemerintah dalam rangka kolaborasi UTBEX',
    chapter: '06-impact',
    emotion: 'trust',
    priority: 'high',
    people: ['Arif Dwi Asmara', 'perwakilan pemerintah'],
    story: 'Pengakuan dari institusi terhadap dampak nyata',
  },
  {
    src: '/images/foto-penyerahan-penghargaan-utbex-arif-dwi-asmara-dengan-pemerintah.avif',
    alt: 'Penyerahan penghargaan kepada UTBEX oleh pemerintah daerah',
    chapter: '06-impact',
    emotion: 'trust',
    priority: 'normal',
    people: ['Arif Dwi Asmara', 'perwakilan pemerintah'],
    story: 'Penghargaan sebagai bukti, bukan tujuan',
  },
  {
    src: '/images/awarding-inotek-award-ceremony-2023-utbex.avif',
    alt: 'Upacara penghargaan Inotek Award 2023 yang diterima oleh UTBEX',
    chapter: '06-impact',
    emotion: 'trust',
    priority: 'normal',
    year: 2023,
    people: ['tim UTBEX'],
    story: 'Pengakuan inovasi — validasi eksternal terhadap gerakan internal',
  },
  {
    src: '/images/piagam-penghargaan-utbex-sebagai-media-pemerdaya-generasi-nusantara-terinovatif-utbex.avif',
    alt: 'Piagam penghargaan UTBEX sebagai Media Pemberdaya Generasi Nusantara Terinovatif',
    chapter: '06-impact',
    emotion: 'trust',
    priority: 'normal',
    story: 'Piagam penghargaan — bukti tertulis dampak pemberdayaan',
  },
  {
    src: '/images/penyerahan-arik-dwi-asmara-dengan-pemerintahan.avif',
    alt: 'Penyerahan hasil kolaborasi antara Arif Dwi Asmara dan pemerintah daerah',
    chapter: '06-impact',
    emotion: 'trust',
    priority: 'normal',
    people: ['Arif Dwi Asmara', 'perwakilan pemerintah'],
    story: 'Kolaborasi pemerintah-masyarakat yang menghasilkan perubahan nyata',
  },
  {
    src: '/images/penyerahan-sertif-dengan-pemerintah-utbex.avif',
    alt: 'Penyerahan sertifikat kerja sama antara UTBEX dan pemerintah',
    chapter: '06-impact',
    emotion: 'trust',
    priority: 'low',
    story: 'Formalisasi kemitraan — fondasi untuk dampak berkelanjutan',
  },

  // ───────────────────────────────────────────────────────────────
  // CHAPTER 07 — CONVERSATION
  // Photography purpose: invitation, warmth, openness, togetherness
  // ───────────────────────────────────────────────────────────────
  {
    src: '/images/utbex-foto-bersama-pemerintah-arif-dwi-asmara.avif',
    alt: 'Foto bersama seluruh peserta dan pemerintah setelah kegiatan kolaborasi UTBEX',
    chapter: '07-conversation',
    emotion: 'belonging',
    priority: 'high',
    people: ['Arif Dwi Asmara', 'perwakilan pemerintah', 'peserta'],
    story: 'Kebersamaan yang mengundang — setiap orang memiliki tempat di perjalanan ini',
  },

  // ───────────────────────────────────────────────────────────────
  // SHARED / BREATHER — cross-chapter breathing photos
  // Used for ChapterBreather components between chapters
  // ───────────────────────────────────────────────────────────────
  {
    src: '/images/kolase-foto-utbex-penghargaan-dan-selamat-sukses-arik-dwi-asmara.avif',
    alt: 'Kolase foto perjalanan UTBEX: penghargaan, kolaborasi, dan pencapaian bersama',
    chapter: '05-stories',
    emotion: 'confidence',
    priority: 'low',
    story: 'Rangkuman visual perjalanan UTBEX',
  },
  {
    src: '/images/foto-bersama-arik-dwi-asmara-di-pammeran-utbex.avif',
    alt: 'Arif Dwi Asmara bersama pengunjung di pameran UTBEX',
    chapter: '04-movement',
    emotion: 'recognition',
    priority: 'low',
    people: ['Arif Dwi Asmara', 'pengunjung pameran'],
    story: 'Gerakan yang menjangkau publik lebih luas melalui pameran',
  },
  {
    src: '/images/foto-bersama-arik-dwi-asmara-dengan-pemerintah-utbex.avif',
    alt: 'Arif Dwi Asmara bersama perwakilan pemerintah mendukung program UTBEX',
    chapter: '06-impact',
    emotion: 'trust',
    priority: 'low',
    people: ['Arif Dwi Asmara', 'perwakilan pemerintah'],
    story: 'Dukungan kelembagaan terhadap misi UTBEX',
  },
];

// ─── Image Query Helpers ───────────────────────────────────────

import type { ChapterId } from '@/types/chapter';

/** Returns all images belonging to a chapter, ordered by priority */
export function getChapterImages(chapterId: ChapterId): ChapterMedia[] {
  const priorityOrder: Record<string, number> = {
    hero: 0,
    high: 1,
    normal: 2,
    low: 3,
  };

  return imageRegistry
    .filter((img) => img.chapter === chapterId)
    .sort((a, b) => (priorityOrder[a.priority] ?? 9) - (priorityOrder[b.priority] ?? 9));
}

/** Returns the hero/primary image for a chapter */
export function getHeroImage(chapterId: ChapterId): ChapterMedia | undefined {
  return imageRegistry.find(
    (img) => img.chapter === chapterId && img.priority === 'hero'
  ) ?? imageRegistry.find(
    (img) => img.chapter === chapterId && img.priority === 'high'
  );
}
