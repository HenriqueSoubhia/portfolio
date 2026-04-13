"use client";

import {
  ArrowSquareOutIcon,
  HashIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import { fadeUp, defaultTransition, defaultViewport } from "@/lib/animations";

interface Project {
  id: string;
  title: string;
  category: string;
  techs: string[];
  github?: string;
  live?: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
  isStaggered?: boolean;
}

export function ProjectCard({ project, isStaggered }: ProjectCardProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className={cn(
        "group relative flex flex-col gap-8 w-full",
        isStaggered && "md:mt-32",
      )}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={defaultViewport}
      variants={fadeUp}
      transition={defaultTransition}
    >
      <figure className="relative w-full aspect-video overflow-hidden bg-white/5 border border-white/5 transition-all duration-500 rounded-sm">
        <div className="absolute inset-0 bg-[#00000030] z-10" />

        <div className="absolute inset-0 flex items-center justify-center text-white/10 font-experimental text-9xl select-none">
          {project.id}
        </div>

        <div className="absolute top-4 right-4 z-20 flex gap-2">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/60 backdrop-blur-xl rounded-full text-white"
              aria-label="Ver código no Github"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <GithubLogoIcon size={20} />
            </motion.a>
          )}
          {project.live && (
            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/60 backdrop-blur-xl rounded-full text-white"
              aria-label="Ver projeto ao vivo"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowSquareOutIcon size={20} />
            </motion.a>
          )}
        </div>
      </figure>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1 text-left">
          <span className="text-[10px] font-mono text-white/30 tracking-[0.3em] uppercase">
            {project.category}
          </span>
          <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            {project.title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techs.map((t) => (
            <span
              key={t}
              className="flex items-center gap-1 text-[10px] font-mono text-white/50 uppercase tracking-tighter"
            >
              <HashIcon className="w-3 h-3 opacity-30" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
