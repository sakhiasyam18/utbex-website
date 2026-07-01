//app/sections/about/components/AboutContent.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer } from "../motion/aboutMotion";
import SectionLabel from "./SectionLabel";
import QuoteBlock from "./QuoteBlock";
import { AboutContentData } from "../types/about";

interface AboutContentProps {
  content: AboutContentData;
}

/**
 * Headline, story, quote, and CTA. Sequenced, never simultaneous, per
 * 04_ABOUT_MOTION_SYSTEM.md typography animation rules.
 */
export default function AboutContent({ content }: AboutContentProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="flex max-w-xl flex-col gap-6"
    >
      <SectionLabel>{content.label}</SectionLabel>

      <motion.h2
        id="about-headline"
        variants={fadeUp}
        className="text-4xl font-semibold leading-[1.15] tracking-tight text-neutral-900 sm:text-5xl"
      >
        {content.headline}
      </motion.h2>

      <motion.div variants={fadeUp} className="flex flex-col gap-4">
        {content.story.map((paragraph, index) => (
          <p
            key={index}
            className="max-w-[65ch] text-base leading-relaxed text-neutral-600 sm:text-lg"
          >
            {paragraph}
          </p>
        ))}
      </motion.div>

      <QuoteBlock quote={content.quote} />

      <motion.a
        variants={fadeUp}
        href={content.cta.href}
        className="group inline-flex w-fit items-center gap-2 text-sm font-medium text-neutral-900 transition-colors hover:text-utbex-maroon"
      >
        {content.cta.label}
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        />
      </motion.a>
    </motion.div>
  );
}
