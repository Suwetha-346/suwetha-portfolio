"use client";

import { Linkedin, Github, Mail, ArrowUp, Activity } from "lucide-react";
import { SOCIALS, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer pt-16 pb-12 border-t border-white/10 relative">
      <div className="footer-container w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Brand */}
        <div className="footer-brand mb-8">
          <h2 className="footer-logo text-3xl font-extrabold font-display text-white tracking-tight">
            Suwetha <span className="purple-text">S T</span>
          </h2>
          <p className="footer-tagline text-xs font-mono text-white/60 mt-2">
            Innovation at the Intersection of Code, Data, and Intelligence!
          </p>
        </div>

        {/* Navigation Links */}
        <ul className="footer-nav-links flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8 text-xs font-mono">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/70 hover:text-purple-400 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="footer-socials flex items-center justify-center gap-4 mb-10">
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link linkedin w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={SOCIALS.linkedinActivity}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
            aria-label="LinkedIn Activity"
          >
            <Activity size={18} />
          </a>
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link github w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={`mailto:${SOCIALS.email}`}
            className="social-link email w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom w-full pt-8 border-t border-white/5 flex items-center justify-between">
          <p className="text-xs font-mono text-white/50 text-left">
            &copy; {new Date().getFullYear()} Suwetha S T. All rights reserved.
          </p>

          <button
            id="backToTop"
            onClick={scrollToTop}
            className="back-to-top w-10 h-10 rounded-full bg-purple-600/30 border border-purple-500/40 text-purple-300 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all shadow-lg cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
