// src/sections/hero/data/heroContent.ts

import { HeroContentData } from '../types/hero';

export const heroContent: HeroContentData = {
    badge: "PT. UTBEX INOVASI INDONESIA",
    headlineStart: "Mengubah Ide Menjadi",
    headlineHighlight: "Dampak Nyata.",
    description: "Bersama desa, UMKM, dan komunitas, kami menghadirkan inovasi yang tumbuh dari kebutuhan nyata. Setiap program dirancang untuk menciptakan perubahan yang dapat dirasakan dan terus berkembang bersama masyarakat.",
    buttons: [
        {
            id: "btn-explore",
            label: "Lihat Perjalanan Kami",
            href: "/layanan",
            variant: "primary",
            icon: "arrow-right"
        },
        {
            id: "btn-story",
            label: "Mulai Kolaborasi",
            href: "/tentang-kami",
            variant: "secondary",
            icon: "play"
        }
    ]
};