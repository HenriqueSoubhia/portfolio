"use client";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { useLanguage } from "@/contexts/LanguageContext";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="relative flex min-h-dvh flex-col w-full">
      <Hero />

      <SectionDivider text={t.nav.readMore} side="left" />

      <About />

      <SectionDivider text={t.nav.seeWork} side="right" />

      <Projects />

      <SectionDivider text={t.nav.contact} side="left" />

      <Contact />

      <Footer />
    </main>
  );
}
