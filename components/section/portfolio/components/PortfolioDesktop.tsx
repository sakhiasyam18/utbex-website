"use client";

import { m as motion, MotionValue } from "framer-motion";
import Image from "next/image";
import { portfolioData, categoryColor, ProjectData } from "../data/portfolioData";

interface PortfolioDesktopProps {
  transformX: string | MotionValue<string>;
  setSelectedProject: (project: ProjectData) => void;
}

export function PortfolioDesktop({ transformX, setSelectedProject }: PortfolioDesktopProps) {
  return (
    <div className="hidden lg:flex flex-1 w-full relative items-start overflow-visible pb-10">
      <motion.div
        style={{ x: transformX }}
        className="relative z-10 flex flex-row items-center gap-10 px-[10vw] h-[65vh] max-h-[500px] w-[max-content]"
      >
        {/* Cards Track */}
        {portfolioData.map((project, idx) => (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="w-[450px] flex-shrink-0 h-full relative rounded-3xl overflow-hidden group cursor-pointer border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500"
          >
            <figure className={`relative h-full w-full overflow-hidden bg-white/5 m-0`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="33vw"
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                quality={80}
              />

              {/* Dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              {/* Top badge row */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10 pointer-events-none">
                <span className="text-[10px] font-black text-white/50 tracking-[0.2em]">{`0${idx + 1}`}</span>
                <span className={`text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full border backdrop-blur-md ${categoryColor[project.categoryTag] || "bg-white/10 text-white/70 border-white/10"}`}>
                  {project.categoryTag}
                </span>
              </div>

              {/* Bottom content */}
              <figcaption className="absolute bottom-0 inset-x-0 p-5 z-10">
                <div className="bg-white/[0.07] backdrop-blur-xl rounded-2xl p-5 border border-white/[0.08] transition-all duration-500 group-hover:bg-white/[0.12] group-hover:border-white/[0.15]">
                  <h3 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-white transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed mb-4 line-clamp-3">
                    {project.story}
                  </p>

                  {/* Meta row */}
                  <div className="flex flex-col gap-1 pt-3">
                    <p className="text-[10px] font-medium text-white/30 truncate">{project.location} · {project.year}</p>
                    <p className="text-[11px] text-white/90 font-bold truncate">{project.evidence}</p>
                  </div>
                </div>
              </figcaption>

              {/* Maroon glow overlay on hover */}
              <div className="absolute inset-0 bg-utbex-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </figure>
          </motion.article>
        ))}

        {/* Right buffer for scrolling */}
        <div className="w-[10vw] flex-shrink-0" />
      </motion.div>
    </div>
  );
}
