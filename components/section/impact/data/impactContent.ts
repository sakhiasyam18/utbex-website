// src/sections/impact/data/impactContent.ts

import { ImpactContentData } from '../types/impactTypes';

export const impactContent: ImpactContentData = {
    headline: "Real Stories. Real Progress. Real Impact.",
    stats: [
        {
            id: "stat-villages",
            value: 45,
            suffix: "+",
            label: "Villages Empowered"
        },
        {
            id: "stat-msmes",
            value: 120,
            suffix: "+",
            label: "MSMEs Assisted"
        },
        {
            id: "stat-youth",
            value: 2500,
            suffix: "+",
            label: "Youth Trained"
        }
    ],
    story: "Behind every number is a community that learned to build, a local business that successfully scaled, and a young innovator who found their path to sustainable success.",
    quote: {
        text: "The mentorship gave us the confidence to turn our local craft into a recognized brand.",
        author: "MSME Partner, Bantul"
    },
    image: {
        src: "/images/arik-dwi-asmara-utbex-menyampaikan-materi.avif",
        alt: "UTBEX workshop documentation with MSME partners"
    }
};