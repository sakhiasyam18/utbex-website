"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { imageHover, primaryImageReveal, staggerContainer } from "../motion/aboutMotion";
import AboutGallery from "./AboutGallery";
import { AboutGalleryData } from "../types/about";

interface AboutVisualProps {
  gallery: AboutGalleryData;
  /** Marks this as an above-the-fold image so next/image can prioritize it */
  priority?: boolean;
}

/**
 * Layout only — one large documentary primary image plus a supporting
 * grid. No business logic, no copy. Order flips on mobile so photography
 * leads per the responsive philosophy ("Photography first. Story second.").
 */
export default function AboutVisual({ gallery, priority = true }: AboutVisualProps) {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col gap-4 sm:gap-5"
    >
      <motion.div
        variants={primaryImageReveal}
        whileHover={imageHover}
        className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-md"
      >
        <Image
          src={gallery.primary.src}
          alt={gallery.primary.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority={priority}
        />
      </motion.div>

      <AboutGallery images={gallery.supporting} />
    </motion.div>
  );
}
