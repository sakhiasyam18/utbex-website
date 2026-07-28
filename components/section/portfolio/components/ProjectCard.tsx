// components/section/portfolio/components/ProjectCard.tsx
// REVISION 05: Simplified card hierarchy — Category → Title → Story → Location · Year → Read Story →
// REVISION 04: Removed redundant metadata, quieter interface.
"use client";

import { useState } from "react";
import {  m as motion  } from "framer-motion";
import Image from "next/image";
import { PortfolioProject } from "../types/portfolio";
import EvidenceAnnotation from "./EvidenceAnnotation";
import { storyReveal } from "../motion/portfolioMotion";
import { Lightbox } from "@/components/ui/Lightbox";

interface ProjectCardProps {
  project: PortfolioProject;
  className?: string;
  /**
   * Tailwind aspect-ratio class applied to the image wrapper.
   * Allows the mosaic to create different heights per slot.
   */
  aspectClass?: string;
  imageSizes?: string;
}

export default function ProjectCard({
  project,
  className = "",
  aspectClass = "aspect-[4/3]",
  imageSizes = "(max-width: 768px) 100vw, 50vw",
}: ProjectCardProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <motion.div variants={storyReveal} className={className}>
        <div
          onClick={() => setLightboxOpen(true)}
          className="group cursor-pointer flex flex-col gap-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-utbex-maroon focus-visible:ring-offset-4 rounded-xl p-2 -m-2 hover:bg-white hover:shadow-lg transition-all duration-300"
        >
          {/* Image with evidence overlapping bottom edge */}
          <div className={`relative overflow-hidden rounded-xl shadow-[0_6px_24px_rgb(0,0,0,0.06)] ${aspectClass} w-full`}>
            <Image
              src={project.primaryImage.src}
              alt={project.primaryImage.alt}
              fill
              sizes={imageSizes}
              className="object-cover transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:scale-[1.025]"
              quality={80}
            />
            {/* Evidence annotation — attached to photo, not to card body */}
            <div className="absolute bottom-4 right-4 z-10">
              <EvidenceAnnotation evidence={project.evidence} />
            </div>
          </div>

          {/* Card body — minimal, typography-led */}
          <div className="flex flex-col gap-2 px-1">
            {/* Category */}
            <span className="text-[10px] uppercase tracking-[0.18em] font-medium text-utbex-accent">
              {project.category}
            </span>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-medium text-utbex-text-primary leading-snug line-clamp-2 group-hover:text-utbex-maroon transition-colors duration-300">
              {project.title}
            </h3>

            {/* Short story */}
            <p className="text-sm text-utbex-text-secondary leading-relaxed line-clamp-2">
              {project.story}
            </p>

            {/* Location · Year */}
            <p className="text-[10px] uppercase tracking-widest text-utbex-text-secondary/50 mt-1">
              {project.location}&nbsp;·&nbsp;{project.year}
            </p>

            {/* Read Story CTA */}
            <div className="mt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-utbex-text-primary/60 group-hover:text-utbex-accent transition-colors duration-300">
                Lihat Foto Dokumentasi
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      <Lightbox
        isOpen={lightboxOpen}
        src={project.primaryImage.src}
        alt={project.primaryImage.alt}
        caption={`${project.title} — ${project.location} (${project.year})`}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
