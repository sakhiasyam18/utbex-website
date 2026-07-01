//app/sections/about/components/AboutVisual.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { imageHover, primaryImageReveal, staggerContainer, supportingImage } from "../motion/aboutMotion";
import AboutGallery from "./AboutGallery";
import { AboutGalleryData } from "../types/about";

interface AboutVisualProps {
  gallery: AboutGalleryData;
  /** Marks this as an above-the-fold image so next/image can prioritize it */
  priority?: boolean;
}

/**
 * Layout only — one large documentary primary image plus a supporting
 * collage. No business logic, no copy. Order flips on mobile so photography
 * leads per the responsive philosophy ("Photography first. Story second.").
 */
export default function AboutVisual({ gallery, priority = true }: AboutVisualProps) {
  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="flex flex-col relative"
    >
      <div className="relative z-10 w-[95%] lg:w-[90%]">
        <motion.div
          variants={primaryImageReveal}
          whileHover={imageHover}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-sm bg-neutral-100"
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

        {gallery.primary.annotation && (
          <motion.div 
            variants={supportingImage} 
            className="mt-3 ml-2 flex flex-col gap-0 text-[11px] uppercase tracking-wider text-neutral-400"
          >
            <span className="font-semibold text-neutral-800">{gallery.primary.annotation.title}</span>
            <span>{gallery.primary.annotation.location} — {gallery.primary.annotation.detail}</span>
          </motion.div>
        )}
      </div>

      <div className="-mt-16 sm:-mt-24 z-20 w-full relative">
        <AboutGallery images={gallery.supporting} />
      </div>
    </motion.div>
  );
}
