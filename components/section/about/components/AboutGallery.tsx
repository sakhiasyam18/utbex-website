//app/sections/about/components/AboutGallery.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { imageHover, supportingImage } from "../motion/aboutMotion";
import { GalleryImage, GalleryImageAnnotation } from "../types/about";

interface AboutGalleryProps {
  images: GalleryImage[];
}

/**
 * Editorial composition implementing 08_ABOUT_DOCUMENTARY_DIRECTION.md.
 * No grid. Slight asymmetry. Slight overlap. Large whitespace.
 * 
 * Hierarchy:
 * 0: Supporting Story (Medium)
 * 1: Supporting Detail (Small)
 * 2: Human Moment (Small)
 * 3: Evidence (Tiny)
 */
export default function AboutGallery({ images }: AboutGalleryProps) {
  if (!images || images.length < 4) return null;

  return (
    <div className="flex flex-col relative w-full pb-12 sm:pb-24">
      {/* 0: Medium */}
      <motion.div variants={supportingImage} className="w-[85%] sm:w-[75%] ml-auto z-10 relative">
        <motion.div whileHover={imageHover} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm bg-neutral-100">
          <Image src={images[0].src} alt={images[0].alt} fill sizes="(max-width: 768px) 85vw, 40vw" className="object-cover" loading="lazy" />
        </motion.div>
        <Caption annotation={images[0].annotation} />
      </motion.div>

      {/* 1: Small */}
      <motion.div variants={supportingImage} className="w-[75%] sm:w-[55%] -mt-12 sm:-mt-24 z-20 relative mr-auto">
        <motion.div whileHover={imageHover} className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-md bg-neutral-100 border border-white/20">
          <Image src={images[1].src} alt={images[1].alt} fill sizes="(max-width: 768px) 75vw, 30vw" className="object-cover" loading="lazy" />
        </motion.div>
        <Caption annotation={images[1].annotation} />
      </motion.div>

      {/* 2: Small */}
      <motion.div variants={supportingImage} className="w-[65%] sm:w-[45%] -mt-10 sm:-mt-20 ml-auto z-10 relative">
        <motion.div whileHover={imageHover} className="relative aspect-square rounded-xl overflow-hidden shadow-sm bg-neutral-100">
          <Image src={images[2].src} alt={images[2].alt} fill sizes="(max-width: 768px) 65vw, 25vw" className="object-cover" loading="lazy" />
        </motion.div>
        <Caption annotation={images[2].annotation} align="right" />
      </motion.div>

      {/* 3: Tiny */}
      <motion.div variants={supportingImage} className="w-[50%] sm:w-[35%] -mt-8 sm:-mt-16 ml-[10%] sm:ml-[15%] z-30 relative">
        <motion.div whileHover={imageHover} className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-sm bg-neutral-100 border border-black/5">
          <Image src={images[3].src} alt={images[3].alt} fill sizes="(max-width: 768px) 50vw, 20vw" className="object-cover" loading="lazy" />
        </motion.div>
        <Caption annotation={images[3].annotation} />
      </motion.div>
    </div>
  );
}

function Caption({ annotation, align = "left" }: { annotation?: GalleryImageAnnotation, align?: "left" | "right" }) {
  if (!annotation) return null;
  return (
    <div className={`mt-2 flex flex-col gap-0 text-[10px] sm:text-[11px] uppercase tracking-wider text-neutral-400 ${align === "right" ? "text-right mr-2" : "text-left ml-2"}`}>
      <span className="font-semibold text-neutral-800">{annotation.title}</span>
      <span>{annotation.location} — {annotation.detail}</span>
    </div>
  );
}
