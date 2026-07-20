// components/explore/experience/ExperiencePlaceholder.tsx
//
// Empty placeholder for a single Experience zone in the World Canvas.
// Source of truth: 01_CANVAS_DUNIA_UTBEX.md §5, §15, §16
//
// Each Experience zone:
//   - Is positioned at its world coordinates
//   - Has entry, focus, and exit points (for camera waypoints)
//   - Has a safe area (breathing room) around it
//   - Shows dev-only debug info in development mode
//
// Content is rendered by ExperienceZoneContent inside this shell.

"use client";

import type { ExperienceZone } from "@/types/explore";
import { ExperienceZoneContent } from "./ExperienceZoneContent";

interface ExperiencePlaceholderProps {
  zone: ExperienceZone;
  /** Whether this experience is currently in camera focus */
  isActive: boolean;
}

export function ExperiencePlaceholder({
  zone,
  isActive,
}: ExperiencePlaceholderProps) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <div
      className="absolute"
      style={{
        // Position in world space — centered on the waypoint coordinate
        left: `calc(50vw + ${zone.position.x}px - ${zone.size.width / 2}px)`,
        top: `calc(50vh + ${zone.position.y}px - ${zone.size.height / 2}px)`,
        width: zone.size.width,
        height: zone.size.height,
      }}
      data-experience-id={zone.id}
      data-experience-active={isActive}
    >
      {/* Dev-only debug visualization */}
      {isDev && (
        <div
          className={`
            absolute inset-0 rounded-2xl border transition-colors duration-500
            ${isActive
              ? "border-p2-primary/40 bg-p2-primary/5"
              : "border-white/10 bg-white/[0.02]"
            }
          `}
        >
          {/* Experience label */}
          <div className="absolute top-4 left-4 flex flex-col gap-1">
            <span
              className={`
                text-xs font-mono uppercase tracking-widest
                ${isActive ? "text-p2-primary" : "text-white/30"}
              `}
            >
              {zone.label}
            </span>
            <span className="text-[10px] font-mono text-white/20">
              {zone.focus}
            </span>
          </div>

          {/* Position debug info */}
          <div className="absolute bottom-4 right-4 text-[10px] font-mono text-white/15">
            x:{zone.position.x} y:{zone.position.y}
          </div>

          {/* Center crosshair (focus point) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className={`
                w-3 h-3 rounded-full border
                ${isActive ? "border-p2-primary/50" : "border-white/10"}
              `}
            />
          </div>
        </div>
      )}

      {/* ── Experience Content ───────────────────────────── */}
      {/* Museum room interior — evidence cards, editorial layout, drawer */}
      <ExperienceZoneContent zone={zone} isActive={isActive} />
    </div>
  );
}

