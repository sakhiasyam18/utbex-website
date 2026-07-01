// components/section/portfolio/components/ProjectImage.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { imageReveal } from "../motion/portfolioMotion";

interface ProjectImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}

/**
 * Handles image presentation. Cropping. Aspect ratio. Optimization.
 * Does not implement generic "UI depth" shadows, but rather soft natural depth.
 */
export default function ProjectImage({
  src,
  alt,
  priority = false,
  className = "",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: ProjectImageProps) {
  return (
    <motion.div
      variants={imageReveal}
      className={`relative overflow-hidden rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-[700ms] ease-[0.22,1,0.36,1] group-hover:scale-[1.02]"
        sizes={sizes}
        priority={priority}
        quality={priority ? 90 : 80} // slight enhancement for featured
      />
    </motion.div>
  );
}
