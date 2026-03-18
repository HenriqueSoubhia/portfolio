import AboutSection from "@/components/about-section";
import Banner from "@/components/banner";
import BlankSection from "@/components/blank-section";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <AboutSection />
        <BlankSection />
      </main>
    </>
  );
}
