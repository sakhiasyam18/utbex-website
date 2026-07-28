// components/section/timeline/types/timeline.ts

export interface TimelineEvidence {
    label: string;
    href?: string;
    type: 'certificate' | 'documentation' | 'media';
}

export interface TimelineMilestone {
    id: string;
    year: string;
    tag: string;
    title: string;
    story: string;
    image?: string;
    imageAlt?: string;
    evidence?: TimelineEvidence[];
}
