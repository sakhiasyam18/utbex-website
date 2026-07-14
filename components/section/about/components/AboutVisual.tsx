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
          {gallery.primary.annotation && (
            <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20">
              <div className="flex flex-col gap-0 text-[10px] sm:text-[11px] uppercase tracking-wider bg-white/85 backdrop-blur-md px-4 py-2 rounded-lg shadow-sm border border-black/5">
                <span className="font-semibold text-neutral-900">{gallery.primary.annotation.title}</span>
                <span className="text-neutral-600">{gallery.primary.annotation.location} — {gallery.primary.annotation.detail}</span>
              </div>
            </div>
          )}
        </motion.div>
      </div>

      <div className="-mt-16 sm:-mt-24 z-20 w-full relative">
        <AboutGallery images={gallery.supporting} />
      </div>
    </motion.div>
  );
}
