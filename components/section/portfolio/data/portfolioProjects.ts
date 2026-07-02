// components/section/portfolio/data/portfolioProjects.ts
import { PortfolioProject } from "../types/portfolio";

/**
 * REVISION 01: All images now use local /public/images/portofolio/ assets.
 * Only gallery-1.avif is currently available — all images temporarily reuse it.
 * Replace src values with real assets once photography is provided.
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: "proj-1",
    category: "COMMUNITY",
    title: "Helping Local Coffee Farmers Reach Digital Markets",
    story: "Working alongside farmers in Malang, we introduced cooperative digital tools that connected their harvest directly to urban roasters.",
    location: "Malang, East Java",
    year: "2024",
    partner: "Local Agriculture Ministry",
    evidence: "120 Farmers Participated",
    isFeatured: true,
    primaryImage: {
      src: "/images/pelatihan-utbex-digital-marketing-di-umkm.avif",
      alt: "Coffee farmers discussing their harvest around a wooden table",
    },
    secondaryImages: [
      {
        src: "/images/foto-bersama-arik-dwi-asmara-di-pammeran-utbex.avif",
        alt: "Close up of hands sorting coffee beans",
      },
    ],
  },
  {
    id: "proj-2",
    category: "MSME",
    title: "Revitalizing Traditional Batik Production",
    story: "Together with local artisans, we refined production techniques, opening doors to ethical international fashion markets.",
    location: "Yogyakarta",
    year: "2023",
    evidence: "3 Artisan Villages Reached",
    isFeatured: false,
    primaryImage: {
      src: "/images/pelatihan-digital-marketing-dan-packaging-utbex-dengan-arif-dwi-asmara.avif",
      alt: "An artisan carefully drawing batik patterns on fabric",
    },
  },
  {
    id: "proj-3",
    category: "EDUCATION",
    title: "Building Digital Literacy for Rural Students",
    story: "In partnership with local schools, we built a curriculum that empowered students to navigate the digital world safely.",
    location: "Banyuwangi, East Java",
    year: "2024",
    partner: "Educational Board",
    evidence: "500+ Students Mentored",
    isFeatured: false,
    primaryImage: {
      src: "/images/arik-dwi-asmara-penyampaian-materi-utbex.avif",
      alt: "Students collaborating around a laptop in a classroom",
    },
  },
  {
    id: "proj-4",
    category: "INNOVATION",
    title: "Eco-Friendly Packaging for Street Vendors",
    story: "Working alongside urban vendors, we designed biodegradable packaging that reduced daily plastic waste by nearly half.",
    location: "Surabaya",
    year: "2023",
    evidence: "Reduced Daily Plastic by 40%",
    isFeatured: false,
    primaryImage: {
      src: "/images/foto-bersama-arif-dwi-asmara-utbex.avif",
      alt: "A vendor discussing packaging alternatives with community leaders",
    },
  },
  {
    id: "proj-5",
    category: "TRAINING",
    title: "Empowering Women Entrepreneurs",
    story: "A six-month mentoring program on financial literacy and brand building for women leading small businesses.",
    location: "Bandung, West Java",
    year: "2025",
    evidence: "Six Months Mentoring",
    isFeatured: false,
    primaryImage: {
      src: "/images/utbex-pelatihan-manajemen-umkm-dengan-arik-dwi-asmara.avif",
      alt: "Women entrepreneurs during a workshop discussion",
    },
  },
  {
    id: "proj-6",
    category: "BRANDING",
    title: "Elevating Local Seafood Markets",
    story: "Collaborating with fishermen to establish a cooperative brand — ensuring fair prices and sustainable practices.",
    location: "Bali",
    year: "2024",
    evidence: "Government Partnership",
    isFeatured: false,
    primaryImage: {
      src: "/images/awarding-inotek-award-ceremony-2023-utbex.avif",
      alt: "Fishermen examining their morning catch at the market",
    },
  },
];
