//app/sections/about/components/QuoteBlock.tsx
"use client";

import { motion } from "framer-motion";
import { fade } from "../motion/aboutMotion";
import { AboutQuote } from "../types/about";

interface QuoteBlockProps {
  quote: AboutQuote;
}

/**
 * A single, minimal quote. Per spec this must never dominate the layout —
 * it stays visually quiet: a thin left rule, restrained size, no ornamentation.
 */
export default function QuoteBlock({ quote }: QuoteBlockProps) {
  return (
    <motion.blockquote
      variants={fade}
      className="border-l-2 border-utbex-maroon/30 pl-5 py-1"
    >
      <p className="text-lg leading-relaxed text-neutral-700 italic">
        &ldquo;{quote.text}&rdquo;
      </p>
      <footer className="mt-2 text-sm text-neutral-500 not-italic">
        {quote.source}
        {quote.affiliation ? `, ${quote.affiliation}` : ""}
      </footer>
    </motion.blockquote>
  );
}
