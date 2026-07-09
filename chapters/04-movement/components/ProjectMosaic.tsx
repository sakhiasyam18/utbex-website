// components/section/portfolio/components/ProjectMosaic.tsx
// REVISION 03: Documentary wall — different widths, heights, vertical offsets.
//              Cards may slightly overlap. Not a CSS grid. Not Pinterest.
// REVISION 08: Reduced bottom spacing from mb-48 to mb-24.
"use client";

import { motion } from "framer-motion";
import { PortfolioProject } from "../types/portfolio";
import ProjectCard from "./ProjectCard";
import { mosaicStagger } from "../motion/portfolioMotion";

interface ProjectMosaicProps {
  projects: PortfolioProject[];
}

/**
 * Layout map for 5 projects (index 0–4).
 * Each slot defines: col-span, col-start, vertical offset, image aspect.
 */
const MOSAIC_SLOTS = [
  // Slot 0 — large left anchor
  {
    col: "lg:col-span-7 lg:col-start-1",
    offset: "lg:mt-0",
    aspect: "aspect-[4/3]",
    sizes: "(max-width: 768px) 100vw, 58vw",
  },
  // Slot 1 — tall right, offset down — slight overlap with slot 0
  {
    col: "lg:col-span-5 lg:col-start-8",
    offset: "lg:mt-20",
    aspect: "aspect-[3/4]",
    sizes: "(max-width: 768px) 100vw, 40vw",
  },
  // Slot 2 — wide center
  {
    col: "lg:col-span-8 lg:col-start-3",
    offset: "lg:mt-16",
    aspect: "aspect-[16/9]",
    sizes: "(max-width: 768px) 100vw, 66vw",
  },
  // Slot 3 — narrow left
  {
    col: "lg:col-span-4 lg:col-start-1",
    offset: "lg:mt-12",
    aspect: "aspect-[3/4]",
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  // Slot 4 — medium right, offset up to create overlap with slot 3
  {
    col: "lg:col-span-7 lg:col-start-6",
    offset: "lg:mt-0",
    aspect: "aspect-[4/3]",
    sizes: "(max-width: 768px) 100vw, 58vw",
  },
] as const;

export default function ProjectMosaic({ projects }: ProjectMosaicProps) {
  if (!projects || projects.length === 0) return null;

  return (
    <motion.div
      variants={mosaicStagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-28"
    >
      {/* Mobile: single column. Desktop: documentary wall via 12-col grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-y-16 gap-x-8 lg:gap-x-10">
        {projects.map((project, index) => {
          const slot = MOSAIC_SLOTS[index % MOSAIC_SLOTS.length];
          return (
            <div key={project.id} className={`${slot.col} ${slot.offset}`}>
              <ProjectCard
                project={project}
                aspectClass={slot.aspect}
                imageSizes={slot.sizes}
              />
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
