// components/section/timeline/data/timelineContent.ts

import { TimelineMilestone } from '../types/timeline';

export const timelineMilestones: TimelineMilestone[] = [
    {
        id: 'tl-1',
        year: '2019',
        tag: 'PRESTASI NASIONAL',
        title: 'Juara I Nasional LKTI',
        story: 'Juara I Nasional Lomba Karya Tulis Mahasiswa di Universitas Jember, menunjukkan gagasan inovatif sejak dini.',
        image: '/images/arik-dwi-asmara-penyampaian-materi-utbex.avif',
        imageAlt: 'Juara I LKTI Universitas Jember',
    },
    {
        id: 'tl-2',
        year: '2019',
        tag: 'DEBAT EKONOMI',
        title: 'Juara I Debat Ekonomi Nasional',
        story: 'Meraih Juara I Debat Ekonomi Nasional di Universitas Bengkulu, memperkuat landasan pemikiran strategis ekonomi.',
        image: '/images/foto-bersama-arik-dwi-asmara-dengan-pemerintah-utbex.avif',
        imageAlt: 'Debat Ekonomi Nasional',
    },
    {
        id: 'tl-3',
        year: '2021',
        tag: 'WIRAUSAHA MUDA',
        title: 'Juara II East Java Youth Entrepreneur',
        story: 'Mendapat penghargaan bergengsi dari Dinas Koperasi dan UKM Provinsi Jawa Timur atas dedikasi dalam wirausaha.',
        image: '/images/foto-dengan-sertif-arik-dwi-asmara.avif',
        imageAlt: 'East Java Youth Entrepreneur',
        evidence: [
            { label: 'Lihat Sertifikat', href: '/images/foto-dengan-sertif-arik-dwi-asmara.avif', type: 'certificate' },
        ],
    },
    {
        id: 'tl-4',
        year: '2022',
        tag: 'PENGAKUAN',
        title: 'Penghargaan Bidang UMKM',
        story: 'Menerima penghargaan khusus di Bidang Koperasi dan UMKM dari Pemerintah Kabupaten Malang.',
        image: '/images/awarding-inotek-award-ceremony-2023-utbex.avif',
        imageAlt: 'Penghargaan UMKM Malang',
    },
    {
        id: 'tl-5',
        year: '2022',
        tag: 'KOLABORASI GLOBAL',
        title: 'Perwakilan MotoGP Mandalika',
        story: 'Menjadi salah satu perwakilan UMKM unggulan dari Jawa Timur pada ajang internasional MotoGP Mandalika.',
        image: '/images/foto-bersama-arik-dwi-asmara-di-pammeran-utbex.avif',
        imageAlt: 'UMKM di MotoGP Mandalika',
        evidence: [
            { label: 'Lihat Dokumentasi', href: '/images/foto-bersama-arik-dwi-asmara-di-pammeran-utbex.avif', type: 'documentation' },
        ],
    },
    {
        id: 'tl-6',
        year: '2023',
        tag: 'INOVASI',
        title: 'INOTEK Award Jawa Timur',
        story: 'Meraih penghargaan inovasi teknologi (INOTEK) Award Provinsi Jawa Timur di Bidang Ekonomi Kreatif.',
        image: '/images/awarding-inotek-award-ceremony-2023-utbex.avif',
        imageAlt: 'INOTEK Award 2023',
    },
    {
        id: 'tl-7',
        year: '2023',
        tag: 'PENGGERAK DESA',
        title: 'Top 12 Penggerak Desa',
        story: 'Terpilih sebagai Top 12 Penggerak Desa Kabupaten Malang, menegaskan peran sentral dalam membangun desa mandiri.',
        image: '/images/postingan-utbex-news-kolase-foto-foto.avif',
        imageAlt: 'Top 12 Penggerak Desa',
    },
    {
        id: 'tl-8',
        year: '2023',
        tag: 'PEMUDA BERPRESTASI',
        title: 'Penghargaan Hari Sumpah Pemuda',
        story: 'Menerima Penghargaan Pemuda Berprestasi dari Bupati Malang bertepatan dengan momen Hari Sumpah Pemuda.',
        image: '/images/piagam-penghargaan-utbex-sebagai-media-pemerdaya-generasi-nusantara-terinovatif-utbex.avif',
        imageAlt: 'Penghargaan Sumpah Pemuda',
        evidence: [
            { label: 'Lihat Piagam', href: '/images/piagam-penghargaan-utbex-sebagai-media-pemerdaya-generasi-nusantara-terinovatif-utbex.avif', type: 'certificate' },
        ],
    },
];

export const timelineHeader = {
    label: 'PENGALAMAN & PRESTASI',
    headline: 'Rekam Jejak & Dedikasi.',
    description: 'Dedikasi tanpa henti dalam pengembangan ekonomi kreatif dan pemberdayaan masyarakat, dibuktikan melalui berbagai pengakuan nasional.',
};
