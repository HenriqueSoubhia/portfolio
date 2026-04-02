"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/ui/ProjectCard";

const PROJECTS_DATA = [
  {
    id: "01",
    title: "Eco Sync",
    category: "Fullstack Platform",
    techs: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com",
    live: "https://google.com",
    image: "/project-placeholder.jpg",
  },
  {
    id: "02",
    title: "Nova Dashboard",
    category: "UI System",
    techs: ["React", "Node.js", "Framer"],
    github: "https://github.com",
    image: "/project-placeholder.jpg",
  },
  {
    id: "03",
    title: "Ark Mobile",
    category: "Mobile Design",
    techs: ["ReactNative", "TypeScript"],
    live: "https://google.com",
    image: "/project-placeholder.jpg",
  },
  {
    id: "04",
    title: "Zenith Store",
    category: "E-commerce",
    techs: ["Next.js", "Sanity", "Tailwind"],
    github: "https://github.com",
    image: "/project-placeholder.jpg",
  },
];

const ALL_TECHS = ["All", ...new Set(PROJECTS_DATA.flatMap((p) => p.techs))];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.techs.includes(activeFilter));

  return (
    <section
      id="projects"
      className="relative w-full min-h-dvh flex flex-col py-24 sm:py-32 px-6 sm:px-12 md:px-20 container mx-auto"
    >
      <header className="flex flex-col gap-8 mb-20 lg:mb-32">
        <div className="flex flex-col gap-2">
          <span className="text-white/40 font-mono text-xs sm:text-sm tracking-[0.2em] uppercase">
            02. SELECTED WORK
          </span>
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold font-experimental text-white tracking-tighter uppercase leading-[0.9]">
            Projetos.
          </h2>
        </div>

        <div className="flex flex-wrap gap-3">
          {ALL_TECHS.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveFilter(tech)}
              className={cn(
                "px-5 py-2 rounded-full border text-[10px] sm:text-xs font-mono tracking-widest uppercase transition-all duration-300",
                activeFilter === tech
                  ? "bg-white text-black border-white"
                  : "bg-transparent text-white/50 border-white/10 hover:border-white/30 hover:text-white cursor-pointer",
              )}
            >
              {tech}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isStaggered={index % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
}
