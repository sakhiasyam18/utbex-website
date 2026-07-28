// components/section/portfolio/components/FeaturedStory.tsx
// REVISION 02: 40% Story / 60% Photography. Image breaks the grid slightly.
// REVISION 04: Removed decorative wrapping divs. Quieter interface.
// REVISION 09: Secondary image overlaps slightly for documentary depth.
"use client";

import { useState } from "react";
import { m as motion } from "framer-motion";
import Image from "next/image";
import { PortfolioProject } from "../types/portfolio";
import EvidenceAnnotation from "./EvidenceAnnotation";
import { staggerContainer, fadeUp } from "../../about/motion/aboutMotion";
import { storyReveal, imageReveal } from "../motion/portfolioMotion";
import { Lightbox } from "@/components/ui/Lightbox";

interface FeaturedStoryProps {
  project?: PortfolioProject;
}

export default function FeaturedStory({ project }: FeaturedStoryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  if (!project) return null;

  const handleImageClick = (index: number) => {
    setActiveImage(index);
    setLightboxOpen(true);
  };

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-32"
    >
      <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-0">

        {/* Story column (40%) — appears first in DOM for accessibility */}
        <motion.div
          variants={storyReveal}
          className="w-full lg:w-[40%] lg:pr-12 lg:pt-16 flex flex-col space-y-5 order-2 lg:order-1"
        >
          {/* Category label */}
          <span className="text-xs uppercase tracking-[0.18em] text-utbex-accent font-medium">
            {project.category}
          </span>

          {/* Headline */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium leading-snug text-utbex-text-primary">
            {project.title}
          </h3>

          {/* Story */}
          <p className="text-base text-utbex-text-secondary leading-relaxed">
            {project.story}
          </p>

          {/* Location · Year — inline, minimal */}
          <p className="text-xs uppercase tracking-widest text-utbex-text-secondary/60">
            {project.location}&nbsp;·&nbsp;{project.year}
          </p>

          {/* CTA */}
          <div className="pt-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-utbex-text-primary border-b border-utbex-text-primary/25 pb-0.5 hover:border-utbex-accent hover:text-utbex-accent transition-colors"
            >
              Explore Journey
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>

        {/* Photography column (60%) — breaks grid on right side */}
        <div className="w-full lg:w-[60%] relative order-1 lg:order-2">
          {/* Primary image — large, dominant */}
          <motion.div
            variants={imageReveal}
            onClick={() => handleImageClick(0)}
            className="relative overflow-hidden rounded-xl shadow-[0_12px_48px_rgb(0,0,0,0.08)] aspect-[5/4] lg:aspect-[4/3] w-full lg:-mr-8 cursor-pointer group"
          >
            <Image
              src={project.primaryImage.src}
              alt={project.primaryImage.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              quality={90}
            />
            {/* Evidence annotation attached to photograph */}
            <div className="absolute bottom-5 right-5 z-10">
              <EvidenceAnnotation evidence={project.evidence} />
            </div>
          </motion.div>

          {/* Secondary image overlapping — REVISION 09 micro overlap */}
          {project.secondaryImages && project.secondaryImages.length > 0 && (
            <motion.div
              variants={imageReveal}
              onClick={() => handleImageClick(1)}
              className="hidden lg:block absolute -bottom-8 -left-10 w-[38%] aspect-[4/3] overflow-hidden rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.07)] border-[3px] border-white z-10 cursor-pointer group"
            >
              <Image
                src={project.secondaryImages[0].src}
                alt={project.secondaryImages[0].alt}
                fill
                sizes="25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                quality={75}
              />
            </motion.div>
          )}
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        src={activeImage === 0 ? project.primaryImage.src : (project.secondaryImages?.[0].src || project.primaryImage.src)}
        alt={activeImage === 0 ? project.primaryImage.alt : (project.secondaryImages?.[0].alt || project.primaryImage.alt)}
        caption={`${project.title} — ${project.location} (${project.year})`}
        onClose={() => setLightboxOpen(false)}
      />
    </motion.div>
  );
}
