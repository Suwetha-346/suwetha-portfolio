import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIALS } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-edit py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-center sm:text-left">
          <p className="font-display text-lg text-paper">Suwetha S T</p>
          <p className="text-xs uppercase tracking-widest2 text-paper-muted mt-1">
            AI &amp; Data Science
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={SOCIALS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-paper-muted hover:text-gold transition-colors"
          >
            <Github size={18} strokeWidth={1.5} />
          </a>
          <a
            href={SOCIALS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-paper-muted hover:text-gold transition-colors"
          >
            <Linkedin size={18} strokeWidth={1.5} />
          </a>
          <a
            href={`mailto:${SOCIALS.email}`}
            aria-label="Send an email"
            className="text-paper-muted hover:text-gold transition-colors"
          >
            <Mail size={18} strokeWidth={1.5} />
          </a>
        </div>

        <p className="text-xs text-paper-muted">
          &copy; {year} Suwetha S T. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
