"use client";

import {
  ArrowSquareOutIcon,
  HashIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

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
  return (
    <article
      className={cn(
        "group relative flex flex-col gap-8 w-full",
        isStaggered && "md:mt-32",
      )}
    >
      <figure className="relative w-full aspect-video overflow-hidden bg-white/5 border border-white/5 group-hover:border-white/20 transition-all duration-500 rounded-sm">
        <div className="absolute inset-0 bg-[#00000030] z-10 transition-opacity group-hover:opacity-0" />

        <div className="absolute inset-0 flex items-center justify-center text-white/10 font-experimental text-9xl select-none">
          {project.id}
        </div>

        <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/60 backdrop-blur-xl rounded-full text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Ver código no Github"
            >
              <GithubLogoIcon size={20} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/60 backdrop-blur-xl rounded-full text-white hover:bg-white hover:text-black transition-colors"
              aria-label="Ver projeto ao vivo"
            >
              <ArrowSquareOutIcon size={20} />
            </a>
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
    </article>
  );
}
