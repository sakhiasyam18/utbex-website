//app/sections/about/components/AboutGallery.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { imageHover, supportingImage } from "../motion/aboutMotion";
import { GalleryImage } from "../types/about";

interface AboutGalleryProps {
  images: GalleryImage[];
}

/**
 * Three to five smaller documentary images, staggered in. No rotation,
 * no bounce, no exaggerated scale — only a gentle 1.02 hover per the
 * motion system.
 */
export default function AboutGallery({ images }: AboutGalleryProps) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:gap-4">
      {images.map((image) => (
        <motion.li
          key={image.id}
          variants={supportingImage}
          className="overflow-hidden rounded-2xl border border-black/5 shadow-sm"
        >
          <motion.div whileHover={imageHover} className="relative aspect-[4/5]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 45vw, 20vw"
              className="object-cover"
              loading="lazy"
            />
          </motion.div>
        </motion.li>
      ))}
    </ul>
  );
}
