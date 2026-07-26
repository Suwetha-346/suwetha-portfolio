"use client";

import { Github, Linkedin } from "lucide-react";
import { SOCIALS } from "@/lib/data";

export default function SocialSidebar() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-6">
      <a
        href={SOCIALS.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        className="text-paper-muted hover:text-accent-soft hover:scale-110 transition-all duration-300"
      >
        <Github size={22} strokeWidth={1.5} />
      </a>
      <a
        href={SOCIALS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        className="text-paper-muted hover:text-accent-soft hover:scale-110 transition-all duration-300"
      >
        <Linkedin size={22} strokeWidth={1.5} />
      </a>
    </div>
  );
}
