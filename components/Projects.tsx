"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { PROJECTS } from "@/lib/data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const ref = useScrollReveal<HTMLDivElement>({ stagger: 0.15 });

  return (
    <section id="projects" className="section-space" aria-labelledby="projects-heading">
      <div className="container-edit" ref={ref}>
        <div className="mb-16 max-w-2xl">
          <p data-reveal className="eyebrow mb-4">
            Selected Work
          </p>
          <h2
            data-reveal
            id="projects-heading"
            className="heading-serif font-display text-[clamp(2rem,4vw,3.5rem)]"
          >
            Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
