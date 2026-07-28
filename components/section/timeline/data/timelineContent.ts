// components/section/timeline/data/timelineContent.ts

import { TimelineMilestone } from '../types/timeline';

export const timelineMilestones: TimelineMilestone[] = [
    {
        id: 'tl-2014',
        year: '2014',
        tag: 'PENDIRIAN',
        title: 'Titik Awal UTBEX',
        story: 'Didirikan di Kalimantan Tengah dengan keyakinan bahwa ide kecil bisa menjadi kekuatan besar. UTBEX lahir dari semangat seorang pemuda desa yang percaya bahwa kreativitas adalah senjata paling ampuh untuk mengubah kehidupan.',
        image: '/images/arik-dwi-asmara-penyampaian-materi-utbex.avif',
        imageAlt: 'Arik Dwi Asmara — Founder UTBEX Indonesia',
    },
    {
        id: 'tl-2016',
        year: '2016',
        tag: 'INOVASI',
        title: 'Inovasi Kaos Lukis',
        story: 'Lahirnya kaos lukis tanpa tinta — produk pertama di Indonesia yang menggunakan bahan kimia untuk menghilangkan warna dasar pada cotton bamboo. Sebuah terobosan yang membuktikan bahwa inovasi bisa lahir dari ide sederhana di desa.',
        image: '/images/kaos-lukis-tanpa-tinta-pertama-di-indonesia.avif',
        imageAlt: 'Kaos lukis tanpa tinta pertama di Indonesia oleh UTBEX',
        evidence: [
            { label: 'Lihat Sertifikat HAKI', href: '/images/sertifikat-haki-utbex.avif', type: 'certificate' },
        ],
    },
    {
        id: 'tl-2019',
        year: '2019',
        tag: 'TRANSFORMASI',
        title: 'Kembali ke Malang',
        story: 'Memulai lagi dari nol di Malang, berjualan di pinggir jalan, membangun kembali dari awal. Bukan kemunduran — melainkan keberanian untuk memulai kembali dengan fondasi yang lebih kuat.',
        image: '/images/orang-makai-kaos.avif',
        imageAlt: 'UTBEX memulai kembali dari Malang',
    },
    {
        id: 'tl-2021',
        year: '2021',
        tag: 'PENGAKUAN',
        title: 'Prestasi Nasional',
        story: 'Juara II UMKM Prestasi Provinsi Jawa Timur — pengakuan pertama di level provinsi. Bukti nyata bahwa kegigihan dan inovasi dari desa mampu bersaing dan diakui.',
        image: '/images/foto-dengan-sertif-arik-dwi-asmara.avif',
        imageAlt: 'Arik Dwi Asmara menerima penghargaan UMKM Prestasi Jatim',
        evidence: [
            { label: 'Lihat Sertifikat', href: '/images/foto-dengan-sertif-arik-dwi-asmara.avif', type: 'certificate' },
        ],
    },
    {
        id: 'tl-2022',
        year: '2022',
        tag: 'PANGGUNG NASIONAL',
        title: 'MotoGP Mandalika',
        story: 'Mewakili Jawa Timur di gelaran MotoGP Indonesia, membawa nama Malang Raya ke panggung internasional. Produk inovasi UTBEX terpilih sebagai merchandise resmi ajang bertaraf dunia.',
        image: '/images/foto-bersama-arik-dwi-asmara-di-pammeran-utbex.avif',
        imageAlt: 'UTBEX di MotoGP Mandalika mewakili Jawa Timur',
        evidence: [
            { label: 'Lihat Dokumentasi', href: '/images/foto-bersama-arik-dwi-asmara-di-pammeran-utbex.avif', type: 'documentation' },
        ],
    },
    {
        id: 'tl-2023',
        year: '2023',
        tag: 'DAMPAK',
        title: 'Dekade Pertama',
        story: 'INOTEK Award Jawa Timur, Penghargaan Sumpah Pemuda dari Bupati Malang — transformasi dari brand menjadi social enterprise. Satu dekade membuktikan bahwa dampak nyata dimulai dari keberanian.',
        image: '/images/awarding-inotek-award-ceremony-2023-utbex.avif',
        imageAlt: 'UTBEX menerima INOTEK Award 2023',
        evidence: [
            { label: 'Lihat Sertifikat', href: '/images/piagam-penghargaan-utbex-sebagai-media-pemerdaya-generasi-nusantara-terinovatif-utbex.avif', type: 'certificate' },
            { label: 'Lihat Dokumentasi', href: '/images/awarding-inotek-award-ceremony-2023-utbex.avif', type: 'documentation' },
        ],
    },
];

export const timelineHeader = {
    label: 'PERJALANAN',
    headline: 'Dari Nol, Menuju Dampak.',
    description: 'Setiap langkah adalah bukti bahwa perubahan dimulai dari keberanian untuk memulai.',
};
