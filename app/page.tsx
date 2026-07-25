import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container-edit">
        <div className="divider" />
      </div>
      <About />
      <div className="container-edit">
        <div className="divider" />
      </div>
      <Skills />
      <div className="container-edit">
        <div className="divider" />
      </div>
      <Projects />
      <div className="container-edit">
        <div className="divider" />
      </div>
      <Experience />
      <div className="container-edit">
        <div className="divider" />
      </div>
      <Education />
      <div className="container-edit">
        <div className="divider" />
      </div>
      <Certifications />
      <div className="container-edit">
        <div className="divider" />
      </div>
      <Contact />
    </>
  );
}
