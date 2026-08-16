/**
 * components/navigation/navigationContent.ts
 * ----------------------------------------------------------------------
 * Data statis yang mengisi elemen-elemen UI di dalam komponen navigasi,
 * seperti teks tombol CTA dan konfigurasi logo.
 * 
 * Jika ingin mengubah teks tombol "Mari Berdiskusi" atau nomor WhatsApp,
 * cukup edit file ini tanpa perlu menyentuh komponen visual Navigation.tsx.
 */
export const navigationContent = {
    cta: {
        label: "Mari Berdiskusi",
        href: "https://wa.me/6282252358901"
    },
    logo: {
        primary: "UTBEX",
        accent: ".",
        href: "/"
    }
};
