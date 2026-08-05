"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  fadeUp,
  staggerContainer,
  defaultTransition,
  defaultViewport,
  getLangTransition,
} from "@/lib/animations";
import { useMounted } from "@/hooks/useMounted";

const ALL_TECHS_BASE = [...new Set(PROJECTS.flatMap((p) => p.techs))];

export function Projects() {
  const { t, isTransitioning } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { langAnimate, langTransition } = getLangTransition(isTransitioning);

  const ALL_LABEL = t.projects.filterAll;
  const techs = [ALL_LABEL, ...ALL_TECHS_BASE];

  const filteredProjects =
    activeFilter === null
      ? PROJECTS
      : PROJECTS.filter((p) => p.techs.includes(activeFilter));

  const mounted = useMounted();

  if (!mounted) {
    return <div className="min-h-screen" />; 
  }
    
  return (
    <section
      id="projects"
      className="relative w-full min-h-dvh flex flex-col py-24 sm:py-32 px-6 sm:px-12 md:px-20 container mx-auto"
    >
      <motion.header
        className="flex flex-col gap-8 mb-20 lg:mb-32"
        initial={prefersReducedMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={defaultViewport}
        variants={staggerContainer}
        animate={isTransitioning ? langAnimate : { opacity: 1, x: 0 }}
        transition={langTransition}
      >
        <motion.div
          className="flex flex-col gap-2"
          variants={fadeUp}
          transition={defaultTransition}
        >
          <span className="text-white/40 font-mono text-xs sm:text-sm tracking-[0.2em] uppercase">
            {t.projects.sectionLabel}
          </span>
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold font-experimental text-white tracking-tighter uppercase leading-[0.9]">
            {t.projects.title}
          </h2>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-3"
          variants={fadeUp}
          transition={defaultTransition}
        >
          {techs.map((tech) => (
            <motion.button
              key={tech}
              onClick={() => setActiveFilter(tech === ALL_LABEL ? null : tech)}
              className={cn(
                "px-5 py-2 rounded-full border text-[10px] sm:text-xs font-mono tracking-widest uppercase cursor-pointer",
                (tech === ALL_LABEL && activeFilter === null) ||
                  tech === activeFilter
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/50 border-white/10",
              )}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.15 }}
            >
              {tech}
            </motion.button>
          ))}
        </motion.div>
      </motion.header>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter ?? "all"}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
          initial={
            prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }
          }
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ ...defaultTransition, duration: 0.35 }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isStaggered={index % 2 !== 0}
            />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
