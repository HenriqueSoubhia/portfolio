import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh flex-col w-full">
      <Hero />

      <SectionDivider text="Continue Lendo" side="left" />

      <About />
      <SectionDivider text="Continue Lendo" side="right" />
    </main>
  );
}
