// components/section/portfolio/components/ProjectStory.tsx
"use client";

import { motion } from "framer-motion";
import { storyReveal } from "../motion/portfolioMotion";

interface ProjectStoryProps {
  title: string;
  story: string;
  className?: string;
}

/**
 * Narrative project component. Human-first storytelling.
 * Title: Short. Strong. Max 2 lines.
 * Story: Max 3 lines. Focus on transformation.
 */
export default function ProjectStory({ title, story, className = "" }: ProjectStoryProps) {
  return (
    <motion.div variants={storyReveal} className={`flex flex-col space-y-3 ${className}`}>
      <h3 className="text-xl md:text-2xl font-semibold text-utbex-text-primary leading-tight line-clamp-2">
        {title}
      </h3>
      <p className="text-sm md:text-base text-utbex-text-secondary leading-relaxed line-clamp-3">
        {story}
      </p>
    </motion.div>
  );
}
