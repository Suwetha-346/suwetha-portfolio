"use client";

import { motion } from "framer-motion";
import { ABOUT_TEXT } from "@/lib/data";

export default function About() {
  return (
    <section className="about-section pt-16 pb-8 md:pt-24 md:pb-12" id="about">
      <div className="w-full max-w-5xl mx-auto px-4">
        <motion.div
          className="glass-card scroll-reveal p-8 md:p-12 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white mb-6">
            About Me - <span className="purple-text">Behind The Code!</span>
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed font-normal">
            {ABOUT_TEXT}
          </p>
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3">

            <span className="px-4 py-2 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
              Machine Learning & AI
            </span>
            <span className="px-4 py-2 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
              Data Analytics & SQL
            </span>
            <span className="px-4 py-2 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
              IoT & Embedded Systems
            </span>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { value: "8.94", label: "Academic CGPA" },
            { value: "6+", label: "Projects Built" },
            { value: "1", label: "Internship" },
            { value: "3+", label: "Certifications" },
            { value: "2+", label: "Achievements" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="glass-card flex flex-col items-center justify-center p-6 rounded-2xl hover:border-purple-500/30 transition-colors group"
            >
              <h3 className="text-3xl sm:text-4xl font-black font-display text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-white/60 text-center uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
