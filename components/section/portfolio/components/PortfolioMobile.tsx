"use client";

import { m as motion } from "framer-motion";
import Image from "next/image";
import { portfolioData, categoryColor, CategoryTab, ProjectData } from "../data/portfolioData";

interface PortfolioMobileProps {
  activeTab: CategoryTab;
  setSelectedProject: (project: ProjectData) => void;
}

export function PortfolioMobile({ activeTab, setSelectedProject }: PortfolioMobileProps) {
  return (
    <div className="lg:hidden flex flex-col gap-6 px-5 sm:px-10 pb-16 mt-2">
      {portfolioData
        .filter((p) => p.tab === activeTab)
        .map((project, idx) => (
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="w-full relative rounded-[2rem] overflow-hidden group border border-white/[0.08] shadow-2xl cursor-pointer"
          >
            <figure className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden bg-white/5 m-0">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                quality={85}
              />
              {/* Subtle Top Gradient for badges */}
              <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />

              {/* Deep Bottom Gradient for content */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#060006] via-black/50 to-transparent pointer-events-none" />

              {/* Top Badges */}
              <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10 pointer-events-none">
                <span className="text-[12px] font-black text-white/50 tracking-[0.2em]">{`0${idx + 1}`}</span>
                <span className={`text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full border backdrop-blur-md ${categoryColor[project.categoryTag] || "bg-white/10 text-white/70 border-white/10"}`}>
                  {project.categoryTag}
                </span>
              </div>

              {/* Content Area */}
              <figcaption className="absolute bottom-0 inset-x-0 p-5 sm:p-8 z-10 flex flex-col justify-end">
                <h3 className="text-xl sm:text-3xl font-black text-white leading-tight mb-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4 line-clamp-3">
                  {project.story}
                </p>

                <div className="flex flex-col gap-1 pt-4 border-t border-white/15">
                  <p className="text-[10px] sm:text-[11px] font-bold text-white/40 tracking-widest uppercase">
                    {project.location} · {project.year}
                  </p>
                  <p className="text-[11px] sm:text-xs text-white/90 font-bold truncate">
                    {project.evidence}
                  </p>
                </div>
              </figcaption>
            </figure>
          </motion.article>
        ))}
    </div>
  );
}
