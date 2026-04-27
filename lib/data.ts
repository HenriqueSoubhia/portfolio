export interface Project {
  id: string;
  title: string;
  category: string;
  techs: string[];
  github?: string;
  live?: string;
  image?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "01",
    title: "Eco Sync",
    category: "Fullstack Platform",
    techs: ["Next.js", "TypeScript", "Tailwind"],
    github: "https://github.com/HenriqueSoubhia",
    live: "https://google.com",
    image: "/project-placeholder.jpg",
  },
  {
    id: "02",
    title: "Nova Dashboard",
    category: "UI System",
    techs: ["React", "Node.js", "Framer"],
    github: "https://github.com/HenriqueSoubhia",
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
    github: "https://github.com/HenriqueSoubhia",
    image: "/project-placeholder.jpg",
  },
];
