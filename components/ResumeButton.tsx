"use client";

import { ArrowDown } from "lucide-react";

export default function ResumeButton() {
  return (
    <a
      href="/Suwetha_S_T_Resume.pdf"
      download="Suwetha_S_T_Resume.pdf"
      className="fixed bottom-8 right-8 z-40 hidden lg:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-paper-muted hover:text-accent-soft transition-colors duration-300"
    >
      RESUME
      <span className="w-5 h-5 border border-paper-muted/40 rounded-sm flex items-center justify-center hover:border-accent-soft transition-colors">
        <ArrowDown size={10} strokeWidth={2} />
      </span>
    </a>
  );
}
