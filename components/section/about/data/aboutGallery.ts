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
    src: "/images/about/gallery-1.avif",
    alt: "A UTBEX mentor sitting with a small group of village entrepreneurs, reviewing notes together in natural light.",
    width: 1200,
    height: 1500,
    isPrimary: true,
  },
  supporting: [
    {
      id: "support-discussion-circle",
      src: "/images/about/gallery-1.avif",
      alt: "A discussion circle with community members during a village empowerment session.",
      width: 800,
      height: 1000,
    },
    {
      id: "support-umkm-training",
      src: "/images/about/gallery-1.avif",
      alt: "A local MSME owner practicing a new skill during a hands-on training session.",
      width: 800,
      height: 1000,
    },
    {
      id: "support-youth-innovation",
      src: "/images/about/gallery-1.avif",
      alt: "Students collaborating during a youth innovation workshop.",
      width: 800,
      height: 600,
    },
    {
      id: "support-government-collab",
      src: "/images/about/gallery-1.avif",
      alt: "UTBEX team members in discussion with local government partners.",
      width: 800,
      height: 600,
    },
  ],
};
