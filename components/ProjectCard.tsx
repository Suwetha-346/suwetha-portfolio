"use client";

import { ExternalLink, Github, ImageOff } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      data-reveal
      className="card-surface flex flex-col overflow-hidden group hover:-translate-y-2"
    >
      <div className="relative aspect-[16/10] bg-ink-soft border-b border-line flex flex-col items-center justify-center gap-2">
        <ImageOff size={32} strokeWidth={1} className="text-paper-muted" aria-hidden="true" />
        <span className="text-[11px] uppercase tracking-widest2 text-paper-muted">
          Project image placeholder
        </span>
        <span className="absolute top-4 left-4 font-display text-sm text-gold/80">
          {project.index}
        </span>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="font-display text-2xl mb-3 text-paper">
          {project.title}
        </h3>
        <p className="text-paper-muted text-sm leading-[1.7] mb-5">
          {project.description}
        </p>

        <ul className="flex flex-col gap-2 mb-6">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-paper-muted leading-[1.6]">
              <span className="text-gold mt-1.5 flex-shrink-0" aria-hidden="true">
                &bull;
              </span>
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] uppercase tracking-wide px-3 py-1 rounded-full border border-line text-paper-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-5 pt-6 border-t border-line">
          {project.liveDemo ? (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-paper hover:text-gold transition-colors"
            >
              <ExternalLink size={15} strokeWidth={1.75} />
              Live Demo
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-2 text-sm text-paper-muted/60 cursor-not-allowed"
              aria-disabled="true"
              title="Live demo link not yet available"
            >
              <ExternalLink size={15} strokeWidth={1.75} />
              Live Demo — Placeholder
            </span>
          )}

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-paper hover:text-gold transition-colors"
            >
              <Github size={15} strokeWidth={1.75} />
              GitHub
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-2 text-sm text-paper-muted/60 cursor-not-allowed"
              aria-disabled="true"
              title="Repository link not yet available"
            >
              <Github size={15} strokeWidth={1.75} />
              GitHub — Placeholder
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
