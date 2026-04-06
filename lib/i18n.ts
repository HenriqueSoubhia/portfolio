export type Lang = "pt" | "en";

export const dictionary = {
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      readMore: "Continue lendo",
      seeWork: "tem mais coisa por aqui!",
    },
    hero: {
      tagline: "フロントエンド開発者",
      title: "Desenvolvedor",
      titleHighlight: "Frontend.",
      description:
        "Criando interfaces fluidas, interativas e focadas na experiência do usuário. Desenhando soluções digitais que se adaptam perfeitamente.",
      scroll: "Scroll",
      scrollAriaLabel: "Rolar para Sobre Mim",
    },
    about: {
      sectionLabel: "01. PROFILE",
      title: "Sobre",
      titleSuffix: "Mim.",
      role: "DESENVOLVEDOR WEB",
      bio1: "Sou apaixonado por converter problemas complexos em soluções visuais minimalistas e altamente eficientes. Meu foco é o desenvolvimento Front-end, onde acredito que a estética aliada à performance dita o sucesso da experiência do usuário moderno.",
      bio2: "Atualmente atuo como Desenvolvedor Web na FIAP, uma das instituições de tecnologia e inovação mais renomadas, local onde desempenho um papel tático no ambiente imersivo, lapidando minhas habilidades para entregar ecossistemas sustentáveis através de código limpo.",
      photoAlt: "Henrique Soubhia",
    },
    projects: {
      sectionLabel: "02. SELECTED WORK",
      title: "Projetos.",
      filterAll: "Todos",
      viewCode: "Ver Código",
      viewLive: "Ver Projeto",
    },
    contact: {
      sectionLabel: "03. PRÓXIMOS PASSOS",
      title: "VAMOS",
      titleSuffix: "CONVERSAR.",
      description: "Tenha um projeto em mente ou apenas queira bater um papo sobre tecnologia? Adoraria ouvir de você.",
      cta: "Mandar Olá",
      socials: "SOCIAIS",
    },
    footer: {
      rights: "TODOS OS DIREITOS RESERVADOS",
      credit: "DESIGNED & DEVELOPED BY HENRIQUE SOUBHIA",
      backToTop: "BACK TO TOP ↑",
    },
  },
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      readMore: "Keep Reading",
      seeWork: "there's more down here!",
    },
    hero: {
      tagline: "フロントエンド開発者",
      title: "Frontend",
      titleHighlight: "Developer.",
      description:
        "Building fluid, interactive interfaces focused on the user experience. Crafting digital solutions that adapt perfectly to any context.",
      scroll: "Scroll",
      scrollAriaLabel: "Scroll to About Me",
    },
    about: {
      sectionLabel: "01. PROFILE",
      title: "About",
      titleSuffix: "Me.",
      role: "WEB DEVELOPER",
      bio1: "I'm passionate about turning complex problems into minimalist, highly efficient visual solutions. My focus is Front-end development, where I believe that aesthetics combined with performance dictates the success of the modern user experience.",
      bio2: "I currently work as a Web Developer at FIAP, one of the most renowned technology and innovation institutions, where I play a tactical role in an immersive environment, honing my skills to deliver sustainable ecosystems through clean code.",
      photoAlt: "Henrique Soubhia",
    },
    projects: {
      sectionLabel: "02. SELECTED WORK",
      title: "Projects.",
      filterAll: "All",
      viewCode: "View Code",
      viewLive: "View Project",
    },
    contact: {
      sectionLabel: "03. NEXT STEPS",
      title: "LET'S",
      titleSuffix: "TALK.",
      description: "Have a project in mind or just want to chat about tech? I'd love to hear from you.",
      cta: "Say Hello",
      socials: "SOCIALS",
    },
    footer: {
      rights: "ALL RIGHTS RESERVED",
      credit: "DESIGNED & DEVELOPED BY HENRIQUE SOUBHIA",
      backToTop: "BACK TO TOP ↑",
    },
  },
};

export type Dictionary = typeof dictionary.pt;
