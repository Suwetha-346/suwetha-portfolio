"use client";

import { Github } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative bg-card border border-border hover:border-violet/50 rounded-2xl p-6 transition-colors duration-300 h-full flex flex-col">
      <div className="absolute inset-0 bg-grad-brand opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="text-xs font-mono text-text-faint px-2 py-1 rounded-sm bg-white/5 border border-white/5">
            {t}
          </span>
        ))}
      </div>
      
      <h3 className="font-display font-semibold text-xl md:text-2xl mb-2 text-white group-hover:text-violet transition-colors">
        {project.title}
      </h3>
      
      <p className="text-text-muted text-sm md:text-base mb-6 flex-grow">
        {project.description}
      </p>
      
      <div className="flex items-center gap-4 mt-auto">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-text hover:text-white font-medium"
          >
            GitHub <span className="text-violet">→</span>
          </a>
        )}
      </div>
    </article>
  );
}
