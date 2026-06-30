// src/sections/hero/types/hero.ts

export type ButtonVariant = 'primary' | 'secondary';

// FIX: Removed the generic `| string` to enforce strict literal typing and preserve IDE autocomplete.
export type IconType = 'arrow-right' | 'play';

export interface HeroButtonData {
    id: string;
    label: string;
    href: string;
    variant: ButtonVariant;
    icon?: IconType;
}

export interface HeroContentData {
    badge: string;
    headlineStart: string;
    headlineHighlight: string;
    description: string;
    buttons: HeroButtonData[];
}

export interface EvidenceCardData {
    id: string;
    title: string;
    subtitle: string;
    iconName: string;
    positionClass: string;
}