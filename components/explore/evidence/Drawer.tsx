// components/explore/evidence/Drawer.tsx
//
// In-context detail panel for deep-dive evidence exploration.
// Source of truth: 08_COMPONENT_SYSTEM.md §22, 09A §16, 10_ANIMATION_SYSTEM.md §14–§15
//
// Critical behavior:
//   - Slides in from the right (~40% viewport width)
//   - Experience ALWAYS remains visible behind (left ~60%)
//   - Semi-transparent overlay — user never loses spatial context
//   - Content reveals progressively: title → year → description → metadata → related
//   - Close via button / click-outside / Escape
//   - Camera position NEVER changes during drawer lifecycle
//   - z-index 70 (above overlay layer at z-60)
//
// This is NOT a page navigation. It feels like opening a document
// inside the museum room.

"use client";

import { useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import {
  drawerOverlay,
  drawerPanel,
  drawerContentStagger,
  drawerContentChild,
} from "@/motion/explore/variants";
import type { EvidenceItem } from "@/data/explore/types";
import { getRelatedEvidence } from "@/data/explore/groups";

interface DrawerProps {
  /** Whether the drawer is open */
  isOpen: boolean;
  /** The evidence item to display */
  item: EvidenceItem | null;
  /** Close handler */
  onClose: () => void;
}

export function Drawer({ isOpen, item, onClose }: DrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  // ── Escape key handler ──────────────────────────────────
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  // ── Click outside handler ───────────────────────────────
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    },
    [onClose],
  );

  const relatedItems = item ? getRelatedEvidence(item.id) : [];

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          className="fixed inset-0 z-[70] flex justify-end"
          onClick={handleOverlayClick}
          role="dialog"
          aria-modal="true"
          aria-label={`Detail: ${item.title}`}
        >
          {/* ── Semi-transparent overlay ───────────────────── */}
          {/* Experience remains visible through this */}
          <motion.div
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
            variants={drawerOverlay}
            initial="hidden"
            animate="visible"
            exit="exit"
          />

          {/* ── Drawer Panel ──────────────────────────────── */}
          {/* Takes ~40% of viewport. Experience visible on left ~60%. */}
          <motion.div
            ref={panelRef}
            className="
              relative w-full max-w-[480px]
              bg-black/90 backdrop-blur-xl
              border-l border-white/10
              overflow-y-auto
              shadow-[-20px_0_60px_rgba(0,0,0,0.5)]
            "
            variants={drawerPanel}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="
                absolute top-4 right-4 z-10
                w-8 h-8 rounded-full
                bg-white/5 border border-white/10
                flex items-center justify-center
                text-white/50 hover:text-white hover:bg-white/10
                transition-colors duration-150
              "
              aria-label="Close drawer"
            >
              <X size={16} />
            </button>

            {/* ── Progressive content reveal ────────────── */}
            <motion.div
              className="p-6 pt-14 flex flex-col gap-5"
              variants={drawerContentStagger}
              initial="hidden"
              animate="visible"
            >
              {/* Category badge */}
              <motion.div variants={drawerContentChild}>
                <span className="text-[10px] font-mono uppercase tracking-widest text-p2-primary/60">
                  {item.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                className="text-xl font-semibold text-white leading-tight"
                variants={drawerContentChild}
              >
                {item.title}
              </motion.h2>

              {/* Year + Type row */}
              <motion.div
                className="flex items-center gap-3"
                variants={drawerContentChild}
              >
                <span className="text-xs font-mono text-p2-primary/80 px-2 py-0.5 rounded bg-p2-primary/10">
                  {item.year}
                </span>
                <span className="text-xs font-mono text-white/30 uppercase">
                  {item.type}
                </span>
              </motion.div>

              {/* Subtitle */}
              <motion.p
                className="text-sm text-white/60 leading-relaxed"
                variants={drawerContentChild}
              >
                {item.subtitle}
              </motion.p>

              {/* Description */}
              {item.description && (
                <motion.div variants={drawerContentChild}>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-white/30 mb-2">
                    Description
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              )}

              {/* Placeholder evidence area */}
              <motion.div
                className="
                  rounded-lg border border-white/[0.06]
                  bg-white/[0.02] p-6
                  flex items-center justify-center
                  min-h-[200px]
                "
                variants={drawerContentChild}
              >
                <span className="text-xs font-mono text-white/15 uppercase tracking-widest">
                  {item.type} Preview
                </span>
              </motion.div>

              {/* Metadata section */}
              <motion.div variants={drawerContentChild}>
                <h3 className="text-xs font-mono uppercase tracking-wider text-white/30 mb-3">
                  Metadata
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-white/30">Type</span>
                    <span className="text-white/50 capitalize">{item.type}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-white/30">Year</span>
                    <span className="text-white/50">{item.year}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-white/30">Category</span>
                    <span className="text-white/50 capitalize">{item.category}</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-white/30">Priority</span>
                    <span className="text-white/50 capitalize">{item.priority}</span>
                  </div>
                </div>
              </motion.div>

              {/* Related evidence */}
              {relatedItems.length > 0 && (
                <motion.div variants={drawerContentChild}>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-white/30 mb-3">
                    Related Evidence
                  </h3>
                  <div className="space-y-2">
                    {relatedItems.map((related) => (
                      <div
                        key={related.id}
                        className="
                          flex items-center gap-3 p-3 rounded-lg
                          bg-white/[0.03] border border-white/[0.06]
                        "
                      >
                        <span className="text-[10px] font-mono text-p2-primary/50 uppercase">
                          {related.type}
                        </span>
                        <span className="text-xs text-white/50">
                          {related.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Bottom spacer for scroll comfort */}
              <div className="h-8" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
