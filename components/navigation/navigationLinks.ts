// components/navigation/navigationLinks.ts

export interface NavigationItem {
    id: string;
    label: string;
    href: string;
}

export const navigationLinks: NavigationItem[] = [
    { id: 'hero', label: 'Beranda', href: '#hero' },
    { id: 'about', label: 'Tentang Kami', href: '#about' },
    { id: 'keunggulan', label: 'Keunggulan', href: '#keunggulan' },
    { id: 'timeline', label: 'Pengalaman & Prestasi', href: '#timeline' },
    { id: 'portfolio', label: 'Lingkup Program', href: '#portfolio' },
    { id: 'impact', label: 'Peluang Kemitraan', href: '#impact' },
    { id: 'contact', label: 'Kontak', href: '#contact' },
];
