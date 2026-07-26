"use client";

import { motion } from "framer-motion";
import { TIMELINE } from "@/lib/data";

export default function Experience() {
  return (
    <section className="projects-section pt-8 pb-16 md:pt-12 md:pb-24" id="experience">
      <div className="w-full max-w-5xl mx-auto px-4">
        <h2 className="section-title text-3xl sm:text-4xl font-bold font-display text-white text-center mb-12">
          Work Experience & Journey - <span className="purple-text">Professional Path!</span>
        </h2>

        <div className="timeline relative">
          <div className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-500/20 -translate-x-1/2">
            <div className="timeline-progress w-full h-full bg-gradient-to-b from-purple-500 via-indigo-500 to-purple-800" />
          </div>

          <div className="flex flex-col gap-12">
            {TIMELINE.map((entry, index) => {
              const isEven = index % 2 === 0;
              const itemNumber = (index + 1).toString().padStart(2, "0");

              return (
                <motion.div
                  key={entry.year}
                  className={`timeline-item relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Content Box */}
                  <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"}`}>
                    <div className="timeline-content glass-card p-6 md:p-8 rounded-2xl relative hover:border-purple-500/50 transition-colors">
                      <div className="project-tag inline-block px-3 py-1 rounded-md bg-purple-500/20 text-purple-300 text-xs font-mono mb-3">
                        {entry.subtitle}
                      </div>
                      <h3 className="text-xl font-bold text-white font-display mb-2">
                        {entry.role}
                      </h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {entry.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Number & Center Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 mt-1 md:mt-0 md:top-1/2 md:-translate-y-1/2 flex items-center justify-center z-10">
                    <div className="timeline-number hidden lg:flex w-10 h-10 rounded-full bg-purple-950 border border-purple-500/50 text-xs font-mono font-bold text-purple-300 items-center justify-center shadow-lg absolute">
                      {itemNumber}
                    </div>
                    <div className="timeline-dot lg:hidden w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] border-2 border-slate-900 absolute" />
                  </div>

                  {/* Date Label */}
                  <div className={`w-full md:w-[45%] hidden md:flex items-center ${isEven ? "md:pl-10 lg:pl-16" : "md:pr-10 lg:pr-16 md:justify-end"}`}>
                    <div className="timeline-date font-mono text-sm md:text-base font-bold text-purple-400">
                      {entry.year}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
