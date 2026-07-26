"use client";

import { motion } from "framer-motion";
import { VOLUNTEERING } from "@/lib/data";
import { HeartHandshake, FileText, Users } from "lucide-react";

export default function Volunteering() {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartHandshake": return <HeartHandshake size={24} className="text-purple-400" />;
      case "FileText": return <FileText size={24} className="text-purple-400" />;
      default: return <Users size={24} className="text-purple-400" />;
    }
  };

  return (
    <section className="volunteering-section py-16 md:py-24 bg-[#0a0a0f]" id="volunteering">
      <div className="w-full max-w-5xl mx-auto px-4">
        <h2 className="section-title text-3xl sm:text-4xl font-bold font-display text-white text-center mb-12">
          Leadership & <span className="purple-text">Volunteering</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {VOLUNTEERING.map((role, idx) => (
            <motion.div
              key={role.id}
              className="glass-card p-6 md:p-8 rounded-3xl flex flex-col hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {renderIcon(role.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {role.role}
                  </h3>
                  <p className="text-sm font-mono text-purple-400/80">
                    {role.organization}
                  </p>
                </div>
              </div>
              <div className="w-full h-px bg-white/10 my-4" />
              <p className="text-sm text-white/70 leading-relaxed">
                {role.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
