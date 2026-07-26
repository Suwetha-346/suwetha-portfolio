"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TECH_STACK } from "@/lib/data";

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterCategories = [
    { id: "all", label: "All" },
    { id: "languages", label: "Languages" },
    { id: "backend", label: "AI / ML & Analytics" },
    { id: "databases", label: "Databases" },
    { id: "tools", label: "Tools & Hardware" },
  ];

  const filteredSkills =
    activeFilter === "all"
      ? TECH_STACK
      : TECH_STACK.filter((skill) => skill.category === activeFilter);

  return (
    <section className="skills-section py-16 md:py-24" id="skills">
      <div className="w-full max-w-5xl mx-auto px-4">
        <h2 className="section-title text-3xl sm:text-4xl font-bold font-display text-white text-center mb-8">
          Technical Skills - <span className="purple-text">Core Expertise!</span>
        </h2>

        {/* Filter Buttons */}
        <div className="skill-filters flex flex-wrap items-center justify-center gap-3 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`filter-btn px-5 py-2.5 rounded-full text-xs font-mono transition-all duration-300 ${
                activeFilter === cat.id
                  ? "active bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-lg shadow-purple-500/25 border-transparent"
                  : "bg-white/5 text-white/70 hover:text-white border border-white/10 hover:border-purple-500/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <motion.div layout className="skill-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="skill-card glass-card p-4 rounded-2xl flex flex-col items-center justify-center text-center gap-3 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 group cursor-default"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </span>
                <span className="text-xs font-mono font-medium text-white/90 group-hover:text-purple-300 transition-colors">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
