// components/section/portfolio/components/EvidenceAnnotation.tsx
// REVISION 04, 09: More minimal. Glassy, attached to photo.
"use client";

import { motion } from "framer-motion";
import { evidenceReveal } from "../motion/portfolioReveal";

interface EvidenceAnnotationProps {
  evidence: string;
  className?: string;
}

/**
 * Small documentary evidence. Attached to photography. Never a badge.
 */
export default function EvidenceAnnotation({ evidence, className = "" }: EvidenceAnnotationProps) {
  if (!evidence) return null;

  return (
    <motion.div
      variants={evidenceReveal}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-white/75 backdrop-blur-md rounded-md shadow-sm ${className}`}
    >
      <span className="w-1 h-1 rounded-full bg-utbex-accent shrink-0" aria-hidden="true" />
      <span className="text-[10px] font-medium uppercase tracking-wider text-utbex-text-primary/80">
        {evidence}
      </span>
    </motion.div>
  );
}
