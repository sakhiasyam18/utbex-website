// components/section/timeline/data/timelineContent.ts

import { TimelineMilestone } from '../types/timeline';

export const timelineMilestones: TimelineMilestone[] = [
    {
        id: 'tl-1',
        year: '2019',
        tag: 'INTERNASIONAL',
        title: 'Juara I Penemu Ide Kreatif Malaysia',
        story: 'Mewakili inovasi dari Indonesia dan berhasil meraih Juara I pada ajang penemuan ide kreatif di Malaysia.',
        image: '/images/arik-dwi-asmara-penyampaian-materi-utbex.avif',
        imageAlt: 'Juara I Ide Kreatif Malaysia',
    },
    {
        id: 'tl-2',
        year: '2020',
        tag: 'PENGHARGAAN',
        title: 'Top 10 Breakthru UMKM Jawa Timur',
        story: 'Masuk dalam jajaran 10 besar UMKM paling terobosan (Breakthru) di tingkat Provinsi Jawa Timur.',
        image: '/images/foto-bersama-arik-dwi-asmara-dengan-pemerintah-utbex.avif',
        imageAlt: 'Top 10 Breakthru UMKM',
    },
    {
        id: 'tl-3',
        year: '2021',
        tag: 'PRESTASI',
        title: 'Juara II UMKM Prestasi Provinsi Jatim',
        story: 'Diakui sebagai salah satu UMKM berprestasi terbaik di Provinsi Jawa Timur atas kontribusi dan inovasinya.',
        image: '/images/foto-dengan-sertif-arik-dwi-asmara.avif',
        imageAlt: 'UMKM Prestasi Jatim',
        evidence: [
            { label: 'Lihat Sertifikat', href: '/images/foto-dengan-sertif-arik-dwi-asmara.avif', type: 'certificate' },
        ],
    },
    {
        id: 'tl-4',
        year: '2022',
        tag: 'KOLABORASI GLOBAL',
        title: 'Menjadi Merchandise MotoGP Mandalika',
        story: 'Produk inovasi UTBEX terpilih dan menjadi bagian dari merchandise resmi pada perhelatan akbar MotoGP Mandalika.',
        image: '/images/foto-bersama-arik-dwi-asmara-di-pammeran-utbex.avif',
        imageAlt: 'MotoGP Mandalika',
        evidence: [
            { label: 'Lihat Dokumentasi', href: '/images/foto-bersama-arik-dwi-asmara-di-pammeran-utbex.avif', type: 'documentation' },
        ],
    },
    {
        id: 'tl-5',
        year: '2022',
        tag: 'INOVASI',
        title: 'Juara III KRENOTEX Award Kabupaten Malang',
        story: 'Meraih penghargaan KRENOTEX Award dari Kabupaten Malang, membuktikan konsistensi dalam kreativitas teknologi.',
        image: '/images/awarding-inotek-award-ceremony-2023-utbex.avif',
        imageAlt: 'KRENOTEX Award',
    },
    {
        id: 'tl-6',
        year: '2023',
        tag: 'INOVASI JATIM',
        title: 'Juara II INOTEK Award Provinsi Jatim',
        story: 'Mendapatkan Juara II INOTEK Award tingkat Provinsi Jawa Timur, mempertegas peran UTBEX dalam inovasi produk.',
        image: '/images/postingan-utbex-news-kolase-foto-foto.avif',
        imageAlt: 'INOTEK Award Jatim',
    },
    {
        id: 'tl-7',
        year: '2023',
        tag: 'PEMUDA BERPRESTASI',
        title: 'Penghargaan Sumpah Pemuda Bupati Malang',
        story: 'Menerima penghargaan langsung dari Bupati Malang bertepatan dengan momen bersejarah Hari Sumpah Pemuda.',
        image: '/images/piagam-penghargaan-utbex-sebagai-media-pemerdaya-generasi-nusantara-terinovatif-utbex.avif',
        imageAlt: 'Penghargaan Sumpah Pemuda',
        evidence: [
            { label: 'Lihat Piagam', href: '/images/piagam-penghargaan-utbex-sebagai-media-pemerdaya-generasi-nusantara-terinovatif-utbex.avif', type: 'certificate' },
        ],
    },
    {
        id: 'tl-8',
        year: 'Berkelanjutan',
        tag: 'KONTRIBUSI',
        title: 'Narasumber di Kementerian, Universitas, BLK, hingga Lembaga Pemasyarakatan',
        story: 'Berbagi wawasan dan pengalaman secara berkelanjutan sebagai narasumber di berbagai instansi dan lembaga.',
        image: '/images/pemateri-arik-dwi-asmara-meyerahkan-gift-dengan-peserta-seminar-umkm.avif',
        imageAlt: 'Narasumber di berbagai instansi',
    },
];

export const timelineHeader = {
    label: 'PENGALAMAN & PRESTASI PENDUKUNG',
    headline: 'Rekam Jejak & Dedikasi.',
    description: 'Perjalanan Arik Dwi Asmara sebagai CEO dan Pemilik Utbex Indonesia adalah bukti dedikasi dan visinya. Latar belakangnya yang mengesankan dan gaya kepemimpinannya terus menginspirasi orang-orang di sekitarnya. Masa depan terlihat cerah di bawah bimbingannya saat ia berusaha untuk pertumbuhan dan inovasi yang berkelanjutan.',
};
