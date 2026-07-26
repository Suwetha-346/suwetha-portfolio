"use client";

import Image from "next/image";
import { Trophy, Award, ExternalLink, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { SPECIAL_ACADEMIC_HIGHLIGHT } from "@/lib/data";

export default function AcademicHighlight() {
  return (
    <section className="py-16 relative overflow-hidden" id="academic-highlight">
      <div className="w-full max-w-5xl mx-auto px-4">
        <motion.div
          className="relative rounded-3xl p-8 md:p-12 border border-amber-500/30 bg-gradient-to-br from-purple-950/60 via-slate-900/90 to-amber-950/40 backdrop-blur-xl shadow-[0_0_50px_rgba(245,158,11,0.15)] group"
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-purple-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono mb-6 uppercase tracking-wider">
            <Sparkles size={14} className="text-amber-400 animate-spin" style={{ animationDuration: "6s" }} />
            Special Academic Spotlight
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Info & Stats */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
                  <Trophy size={26} />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white tracking-tight">
                    {SPECIAL_ACADEMIC_HIGHLIGHT.title}
                  </h2>
                  <p className="text-xs text-amber-400/90 font-mono mt-0.5">
                    {SPECIAL_ACADEMIC_HIGHLIGHT.honors}
                  </p>
                </div>
              </div>

              <p className="text-white/80 text-sm sm:text-base leading-relaxed my-6">
                {SPECIAL_ACADEMIC_HIGHLIGHT.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="block text-2xl font-bold font-display text-amber-400">
                    1st Rank
                  </span>
                  <span className="text-xs text-white/60">Department Topper</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="block text-2xl font-bold font-display text-purple-400">
                    {SPECIAL_ACADEMIC_HIGHLIGHT.cgpa}
                  </span>
                  <span className="text-xs text-white/60">Cumulative CGPA</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 col-span-2 sm:col-span-1">
                  <span className="block text-2xl font-bold font-display text-emerald-400">
                    2025-26
                  </span>
                  <span className="text-xs text-white/60">Academic Year</span>
                </div>
              </div>

              <a
                href={SPECIAL_ACADEMIC_HIGHLIGHT.linkedinPostLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-resume text-xs px-6 py-3 inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-purple-600/30 border-amber-500/40 text-amber-200 hover:text-white"
              >
                <Award size={16} /> View Award Post on LinkedIn <ExternalLink size={14} />
              </a>
            </div>

            {/* Right: Authentic Jury Award Receiving Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl group-hover:scale-[1.01] transition-transform duration-500">
              <Image
                src={SPECIAL_ACADEMIC_HIGHLIGHT.juryAwardImage}
                alt="Suwetha Receiving 1st Rank Award from Jury"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <p className="text-xs font-mono text-amber-200/90 bg-black/60 px-3 py-1.5 rounded-lg backdrop-blur-md border border-white/10">
                  🏆 Jury Award Ceremony — First Rank Proficiency Distinction
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
