export type Lang = "pt" | "en";

export const dictionary = {
  pt: {
    nav: {
      about: "Sobre",
      projects: "Projetos",
      contact: "Contato",
      readMore: "Ler mais (sem enrolação)",
      seeWork: "spoiler: tem uns projetos legais lá embaixo!",
      enterInContact: "Manda um e-mail (ou sinal de fumaça)",
    },
    hero: {
      tagline: "フロントエンド開発者",
      title: "Desenvolvedor",
      titleHighlight: "Frontend.",
      description:
        "Focado em solucionar problemas. Transformando ideias em interfaces que fazem sentido para o usuário.",
      scroll: "Scroll",
      scrollAriaLabel: "Rolar para Sobre Mim",
    },
    about: {
      sectionLabel: "01. PROFILE",
      title: "Sobre",
      titleSuffix: "Mim.",
      role: "DESENVOLVEDOR WEB",
      bio1: "Para mim, programação não é apenas escrever código, é encontrar um caminho eficiente para resolver nossos problemas do dia a dia. Como desenvolvedor, meu objetivo é garantir que a tecnologia seja a ponte, e não a barreira, trazendo mais facilidade para o usuário.",
      bio2: "Atualmente, na FIAP, enfrento o desafio de criar ecossistemas digitais que precisam rodar perfeitamente em qualquer cenário — desde monitores grandes até telas mobile. Minha rotina é lapidar a experiência do usuário através de um código limpo que mantém a essência do design, não importa o dispositivo.",
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
      description:
        "Tem uma grande ideia pela frente ou quer trocar um papo sobre como transformar seu projeto em realidade? Vamos conversar.",
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
      readMore: "Read more (no rambling)",
      seeWork: "spoiler: some cool projects down below!",
      enterInContact: "Send an email (or smoke signals)",
    },
    hero: {
      tagline: "フロントエンド開発者",
      title: "Frontend",
      titleHighlight: "Developer.",
      description:
        "Focused on solving problems. Turning ideas into interfaces that make sense for the user.",
      scroll: "Scroll",
      scrollAriaLabel: "Scroll to About Me",
    },
    about: {
      sectionLabel: "01. PROFILE",
      title: "About",
      titleSuffix: "Me.",
      role: "WEB DEVELOPER",
      bio1: "For me, programming isn't just about writing code; it's about finding an efficient way to solve our everyday problems. As a developer, my goal is to ensure that technology is the bridge, not the barrier, bringing more ease to the user.",
      bio2: "Currently at FIAP, I take on the challenge of creating digital ecosystems that need to run perfectly in any scenario — from large monitors to mobile screens. My routine is to polish the user experience through clean code that preserves the essence of the design, no matter the device.",
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
      description:
        "Got a great idea ahead or want to chat about turning your project into reality? Let's talk.",
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
