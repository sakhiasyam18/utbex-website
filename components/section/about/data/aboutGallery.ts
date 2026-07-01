// src/sections/about/data/aboutGallery.ts
// Gallery data using authentic documentation moments, no stock photography[cite: 2, 4].

import { AboutGalleryImage } from '../types/about';

export const aboutGallery: AboutGalleryImage[] = [
    {
        id: 'primary-mentoring',
        src: '/images/about/mentoring-session.jpg',
        alt: 'Sesi pendampingan komunitas lokal di ruang terbuka',
        width: 800,
        height: 1000,
        isPrimary: true,
    },
    {
        id: 'support-1',
        src: '/images/about/village-discussion.jpg',
        alt: 'Diskusi pemberdayaan desa bersama warga',
        width: 600,
        height: 400,
    },
    {
        id: 'support-2',
        src: '/images/about/umkm-workshop.jpg',
        alt: 'Workshop pengembangan UMKM dan inovasi',
        width: 600,
        height: 400,
    }
];