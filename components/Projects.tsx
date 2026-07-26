"use client";

import Link from "next/link";
import { Eye, Github, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section className="projects-section py-16 md:py-24" id="projects">
      <div className="w-full max-w-7xl mx-auto px-4">
        <h2 className="section-title text-3xl sm:text-4xl font-bold font-display text-white text-center mb-12">
          Projects Showcase - <span className="purple-text">What I&apos;ve Built!</span>
        </h2>

        <div className="experience-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              className="experience-card glass-card p-6 md:p-8 rounded-3xl flex flex-col justify-between hover:border-purple-500/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="experience-date font-mono text-xs text-purple-400 font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
                    {project.year}
                  </div>
                  <div className="project-tag px-3 py-1 rounded-md bg-white/5 text-purple-300 text-xs font-mono border border-white/10">
                    {project.tag}
                  </div>
                </div>
                <div className="mb-6"></div>

                <h3 className="text-2xl font-bold text-white font-display mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono text-white/60 bg-white/5 px-2.5 py-1 rounded-md border border-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links-wrapper flex flex-wrap items-center justify-start gap-2 lg:gap-3 pt-4 border-t border-white/10">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn primary-btn text-xs px-4 py-2 rounded-full flex items-center gap-2 hover:bg-purple-600/20 hover:text-purple-300 transition-colors border border-white/10 hover:border-purple-500/50"
                  >
                    <Github size={14} /> View on GitHub
                  </a>
                ) : (
                  <span className="project-btn primary-btn text-xs px-4 py-2 rounded-full flex items-center gap-2 opacity-50 cursor-not-allowed border border-white/10 bg-white/5">
                    <Github size={14} /> In Process
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
