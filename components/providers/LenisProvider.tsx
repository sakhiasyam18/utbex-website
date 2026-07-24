"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { cancelFrame, sync } from "framer-motion";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      syncTouch: true,
    });

    function update(data: any) {
      const time = typeof data === "number" ? data : data.timestamp;
      lenis.raf(time);
    }

    sync.update(update, true);

    return () => {
      cancelFrame(update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
