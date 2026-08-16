/**
 * components/navigation/navigationLinks.ts
 * ----------------------------------------------------------------------
 * Daftar tautan navigasi utama website UTBEX.
 * 
 * Setiap item memiliki:
 * - id    : Harus cocok dengan atribut `id` pada elemen <section> di page.tsx.
 *           Ini digunakan oleh useActiveSection untuk mendeteksi seksi mana yang sedang aktif.
 * - label : Teks yang ditampilkan di menu navigasi.
 * - href  : Anchor link (#id) yang mengarah ke seksi terkait.
 * 
 * Urutan array ini menentukan urutan tampilan menu di sidebar.
 */
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
