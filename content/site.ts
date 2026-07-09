// content/site.ts
//
// Site-wide metadata and shared organizational data.
// Used by layout.tsx, footer components, and SEO metadata.
//
// Source of truth:
//   - 00_BRAND_STRATEGY_BIBLE.md (identity, positioning)
//   - 06_FOOTER_COPY.md (contact information)

export const siteMetadata = {
  name: 'UTBEX Indonesia',
  legalName: 'PT. UTBEX INOVASI INDONESIA',
  tagline: 'From Ideas To Impact',
  description:
    'Cerita seorang mentor yang komitmen seumur hidupnya untuk membantu sesama berkembang menjadi UTBEX — sebuah platform kolaboratif tempat ide menjadi dampak nyata.',
  url: 'https://utbex.id',
  locale: 'id_ID',
  language: 'id',
} as const;

export const siteContact = {
  email: {
    label: 'Alamat Email',
    value: 'hello@utbex.id',
    href: 'mailto:hello@utbex.id',
  },
  location: {
    label: 'Lokasi',
    value: 'Indonesia',
  },
} as const;

export const siteSocial = {
  instagram: {
    label: 'Instagram',
    href: 'https://instagram.com/utbex.id',
  },
  linkedin: {
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/utbex',
  },
  youtube: {
    label: 'YouTube',
    href: 'https://youtube.com/@utbex',
  },
} as const;

export const siteCopyright =
  '© 2026 UTBEX Indonesia. Hak cipta dilindungi undang-undang.' as const;
