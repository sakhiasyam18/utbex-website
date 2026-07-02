//src/components/sections/about/data/aboutGallery.ts
import { AboutGalleryData } from "../types/about";

/**
 * IMPORTANT — Photography Rules (02_ABOUT_VISUAL_SYSTEM.md / 06_ABOUT_IMPLEMENTATION_GUIDE.md):
 * Use authentic documentary photography only. No stock photos. No AI-generated
 * people. No decorative images. Every image must strengthen trust.
 *
 * The paths below are placeholders pointing at /public/images/about/*.
 * Replace them with real, authorized documentation photography before
 * shipping — nothing here should be treated as final creative.
 */
export const aboutGallery: AboutGalleryData = {
  primary: {
    id: "primary-mentoring",
    src: "/images/foto-bersama-arif-dwi-asmara-utbex.avif",
    alt: "A UTBEX mentor sitting with a small group of village entrepreneurs, reviewing notes together in natural light.",
    width: 1200,
    height: 1500,
    isPrimary: true,
    annotation: {
      title: "Community Mentoring",
      location: "Banyuwangi",
      detail: "2024",
    },
  },
  supporting: [
    {
      id: "support-discussion-circle",
      src: "/images/pelatihan-digital-marketing-dan-packaging-utbex.avif",
      alt: "A discussion circle with community members during a village empowerment session.",
      width: 800,
      height: 1000,
      annotation: {
        title: "Discussion Circle",
        location: "Village Empowerment",
        detail: "12 Participants",
      },
    },
    {
      id: "support-umkm-training",
      src: "/images/pemateri-arik-dwi-asmara-meyerahkan-gift-dengan-peserta-seminar-umkm.avif",
      alt: "A local MSME owner practicing a new skill during a hands-on training session.",
      width: 800,
      height: 1000,
      annotation: {
        title: "MSME Mentoring",
        location: "Malang",
        detail: "27 Participants",
      },
    },
    {
      id: "support-youth-innovation",
      src: "/images/penyerahan-arik-dwi-asmara-dengan-pemerintahan.avif",
      alt: "Students collaborating during a youth innovation workshop.",
      width: 800,
      height: 600,
      annotation: {
        title: "Youth Innovation",
        location: "Surabaya",
        detail: "Creative Workshop",
      },
    },
    {
      id: "support-government-collab",
      src: "/images/utbex-foto-bersama-pemerintah-arif-dwi-asmara.avif",
      alt: "UTBEX team members in discussion with local government partners.",
      width: 800,
      height: 600,
      annotation: {
        title: "Government Collaboration",
        location: "East Java",
        detail: "Official Program",
      },
    },
  ],
};
