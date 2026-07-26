"use client";

import { motion } from "framer-motion";
import { ABOUT_TEXT } from "@/lib/data";
import GithubCalendarWidget from "./GithubCalendarWidget";

export default function About() {
  return (
    <section className="about-section py-16 md:py-24" id="about">
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
              1st Rank Academic Achiever
            </span>
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
        
        <GithubCalendarWidget />
      </div>
    </section>
  );
}
