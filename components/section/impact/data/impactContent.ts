// src/sections/impact/data/impactContent.ts

import { ImpactContentData } from '../types/impactTypes';

export const impactContent: ImpactContentData = {
    headline: "Perubahan Tidak Berhenti Saat Program Selesai.",
    stats: [
        {
            id: "stat-villages",
            value: 45,
            suffix: "+",
            label: "Desa yang Berkolaborasi"
        },
        {
            id: "stat-msmes",
            value: 120,
            suffix: "+",
            label: "Pelaku UMKM Didampingi"
        },
        {
            id: "stat-youth",
            value: 2500,
            suffix: "+",
            label: "Pemuda yang Terlatih"
        }
    ],
    story: "Bagi kami, dampak bukan hanya tentang berapa banyak program yang telah berjalan. Dampak adalah perubahan yang tetap dirasakan setelah kegiatan selesai, hubungan yang terus terjalin, dan peluang baru yang terus berkembang bersama masyarakat.",
    quote: {
        text: "Pendampingan ini memberi kami kepercayaan diri untuk mengubah produk lokal menjadi merek yang diakui.",
        author: "Mitra UMKM, Bantul"
    },
    image: {
        src: "/images/arik-dwi-asmara-utbex-menyampaikan-materi.avif",
        alt: "Dokumentasi lokakarya UTBEX bersama mitra UMKM"
    }
};