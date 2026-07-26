"use client";

import Image from "next/image";
import { Linkedin, Github, ExternalLink, Activity, Award } from "lucide-react";
import { motion } from "framer-motion";
import { SOCIALS } from "@/lib/data";

export default function Profiles() {
  const profileCards = [
    {
      name: "LinkedIn Profile",
      action: "Connect & Network",
      url: SOCIALS.linkedin,
      icon: Linkedin,
      color: "#0077b5",
    },
    {
      name: "LinkedIn Activity Feed",
      action: "View Posts & Updates",
      url: SOCIALS.linkedinActivity,
      icon: Activity,
      color: "#a855f7",
    },
    {
      name: "GitHub Profile",
      action: "Explore Repositories",
      url: SOCIALS.github,
      icon: Github,
      color: "#ffffff",
    },
    {
      name: "Academic Credentials",
      action: "Verify 1st Rank Honors",
      url: SOCIALS.linkedinActivity,
      icon: Award,
      color: "#f59e0b",
    },
  ];

  return (
    <section className="profiles-section py-16 md:py-24" id="profiles">
      <div className="w-full max-w-5xl mx-auto px-4">
        <h2 className="section-title text-3xl sm:text-4xl font-bold font-display text-white text-center mb-8">
          Web Presence - <span className="purple-text">Dev Network!</span>
        </h2>

        {/* Profile Header */}
        <div className="profile-header flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 text-center sm:text-left">
          <div className="profile-img-main relative w-20 h-20 rounded-full overflow-hidden border-2 border-purple-500/50 shadow-xl shadow-purple-500/20">
            <Image
              src="/images/suwetha-portrait-new.jpg"
              alt="Suwetha S T"
              fill
              className="object-cover"
            />
          </div>
          <div className="profile-text">
            <h3 className="text-xl font-bold text-white font-display">
              Suwetha S T
            </h3>
            <p className="purple-text font-mono text-sm">@Suwetha-346</p>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="profiles-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {profileCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.a
                key={card.name}
                href={card.url}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-card glass-card p-6 rounded-2xl flex items-center gap-4 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="profile-icon w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Icon size={22} style={{ color: card.color }} />
                </div>
                <div className="profile-info min-w-0 flex-1">
                  <h4 className="text-base font-bold text-white font-display truncate group-hover:text-purple-300 transition-colors">
                    {card.name}
                  </h4>
                  <p className="text-xs text-white/60 flex items-center gap-1 font-mono mt-0.5">
                    {card.action} <ExternalLink size={10} />
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>

        <p className="profile-note text-center text-xs font-mono text-white/50">
          Click any card to explore Suwetha&apos;s active LinkedIn posts, certificates, and code repositories!
        </p>
      </div>
    </section>
  );
}
