import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col w-full">
      <Hero />

      <SectionDivider text="Continue lendo" side="left" />

      <About />

      <SectionDivider text="tem mais coisa por aqui!" side="right" />

      <Projects />

      <SectionDivider text="e aí, curtiu?" side="left" />

      <Contact />

      <Footer />
    </main>
  );
}
