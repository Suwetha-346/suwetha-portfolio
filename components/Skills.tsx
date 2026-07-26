"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TECH_STACK } from "@/lib/data";
import { FileCode2, Terminal, Code, Database, Layout, PieChart, Wrench, Brain, Zap, Users, Cpu, FileJson, Coffee } from "lucide-react";

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterCategories = [
    { id: "all", label: "All Skills" },
    { id: "Programming", label: "Programming" },
    { id: "Web Tech", label: "Web Tech" },
    { id: "Tools & DB", label: "Tools & DB" },
    { id: "Soft Skills", label: "Soft Skills" },
  ];

  const filteredSkills =
    activeFilter === "all"
      ? TECH_STACK
      : TECH_STACK.filter((skill) => skill.category === activeFilter);

  // Helper to get an icon from lucide-react if emoji isn't preferred, 
  // but we can also just use the icon text/emoji from the data.
  const renderIcon = (name: string) => {
    switch (name) {
      case "Python": return <Terminal size={28} className="text-white/80" />;
      case "Java": return <Coffee size={28} className="text-white/80" />;
      case "C Language": return <span className="text-2xl font-bold text-white/80 font-mono">C</span>;
      case "HTML5": return <FileCode2 size={28} className="text-white/80" />;
      case "CSS3 & Glassmorphism": return <Layout size={28} className="text-white/80" />;
      case "JavaScript (ES6+)": return <span className="text-xl font-bold text-white/80 font-mono bg-white/10 px-1 rounded">JS</span>;
      case "Microsoft Power BI": return <PieChart size={28} className="text-white/80" />;
      case "MySQL Database": return <Database size={28} className="text-white/80" />;
      case "IDE & Tools": return <Wrench size={28} className="text-white/80" />;
      case "Problem-Solving": return <Brain size={28} className="text-white/80" />;
      case "Quick Learner & Adaptability": return <Zap size={28} className="text-white/80" />;
      case "Teamwork & Time Management": return <Users size={28} className="text-white/80" />;
      default: return <Code size={28} className="text-white/80" />;
    }
  };

  return (
    <section className="skills-section py-16 md:py-24" id="skills">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white text-center">
            Technical & Professional Skills
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mt-4 rounded-full" />
        </div>

        {/* Filter Buttons */}
        <div className="skill-filters flex flex-wrap items-center justify-center gap-3 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`filter-btn px-5 py-2.5 rounded-md text-xs font-medium transition-all duration-300 border ${
                activeFilter === cat.id
                  ? "bg-white/20 text-white border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                  : "bg-[#161b22]/50 text-white/60 hover:text-white border-white/5 hover:border-white/20 hover:bg-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skill Grid */}
        <motion.div layout className="skill-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="skill-card bg-[#0d1117] border border-white/10 p-5 rounded-xl flex flex-col justify-between hover:border-cyan-500/50 hover:bg-[#161b22] transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {renderIcon(skill.name)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white mb-0.5">
                      {skill.name}
                    </span>
                    <span className="text-[11px] text-white/50 leading-tight">
                      {(skill as any).subtitle}
                    </span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(skill as any).progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
