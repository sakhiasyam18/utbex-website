// src/sections/hero/data/heroContent.ts

import { HeroContentData } from '../types/hero';

export const heroContent: HeroContentData = {
    badge: "PT. UTBEX INOVASI INDONESIA",
    headlineStart: "From Ideas To",
    headlineHighlight: "Impact",
    description: "Pusat Pengembangan Ekonomi Kreatif Desa & Social Enterprise. Mengubah ide kreatif menjadi dampak nyata untuk memberdayakan pemuda desa.",
    buttons: [
        {
            id: "btn-explore",
            label: "Jelajahi Ekosistem",
            href: "/layanan",
            variant: "primary",
            icon: "arrow-right"
        },
        {
            id: "btn-story",
            label: "Kisah Kami",
            href: "/tentang-kami",
            variant: "secondary",
            icon: "play"
        }
    ]
};