// components/section/portfolio/components/PartnerEcosystem.tsx
// REVISION 06: Premium partner ecosystem. Logo placeholders with typographic treatment.
//              Minimal, elegant. No plain text lists.
// REVISION 08: Reduced vertical spacing.
"use client";

import { motion } from "framer-motion";
import { PortfolioPartner } from "../types/portfolio";
import { partnerReveal } from "../motion/portfolioReveal";
import { mosaicStagger } from "../motion/portfolioMotion";

interface PartnerEcosystemProps {
  partners: PortfolioPartner[];
}

export default function PartnerEcosystem({ partners }: PartnerEcosystemProps) {
  if (!partners || partners.length === 0) return null;

  return (
    <motion.div
      variants={partnerReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-28"
    >
      {/* Hairline separator */}
      <div className="w-full h-px bg-utbex-text-primary/8 mb-14" />

      {/* Label */}
      <p className="text-[10px] uppercase tracking-[0.22em] text-utbex-text-secondary/60 text-center mb-10">
        In Collaboration With
      </p>

      {/* Partner logo placeholders — premium typographic treatment */}
      <motion.div
        variants={mosaicStagger}
        className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8"
      >
        {partners.map((partner) => (
          <motion.div
            key={partner.id}
            variants={partnerReveal}
            className="group relative flex items-center justify-center"
          >
            {/* Typographic logo placeholder */}
            <div className="px-6 py-3 border border-utbex-text-primary/10 rounded-lg bg-white/60 backdrop-blur-sm transition-all duration-500 group-hover:border-utbex-text-primary/20 group-hover:shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-utbex-text-primary/40 group-hover:text-utbex-text-primary/70 transition-colors duration-500">
                {partner.name}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Hairline separator bottom */}
      <div className="w-full h-px bg-utbex-text-primary/8 mt-14" />
    </motion.div>
  );
}
