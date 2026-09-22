import { LanguageProvider } from "@/components/LanguageProvider";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import EducationLanguages from "@/components/EducationLanguages";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <LanguageProvider>
      <main className="flex min-h-screen flex-col bg-[#FAFAF9]">
        <Nav />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <EducationLanguages />
        <Contact />
      </main>
    </LanguageProvider>
  );
}
