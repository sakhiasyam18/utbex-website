// src/sections/impact/types/impact.ts

export interface ImpactStatData {
    id: string;
    value: number;
    suffix: string;
    label: string;
}

export interface ImpactContentData {
    headline: string;
    stats: ImpactStatData[];
    story: string;
    quote: {
        text: string;
        author: string;
    };
    image: {
        src: string;
        alt: string;
    };
}