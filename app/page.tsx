import Hero from "@/components/Hero";
import About from "@/components/About";
import AcademicHighlight from "@/components/AcademicHighlight";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Profiles from "@/components/Profiles";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <AcademicHighlight />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Profiles />
      <Contact />
    </>
  );
}
