"use client";

import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { NAV_LINKS, SOCIALS } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href)
    ).filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-line shadow-lg shadow-black/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className={`container-edit flex items-center justify-between transition-all duration-500 relative ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        {/* Left Links (Desktop) */}
        <div className="hidden lg:flex items-center gap-8 w-[30%] justify-start">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.slice(0, 4).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`text-xs uppercase tracking-widest2 transition-colors duration-200 ${
                    active === link.href
                      ? "text-gold"
                      : "text-paper-muted hover:text-paper"
                  }`}
                  aria-current={active === link.href ? "page" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Centered Name / Logo + Interests */}
        <div className="flex flex-col items-center justify-center w-full lg:w-[40%] text-center">
          {/* Mobile Spacer to center logo */}
          <div className="lg:hidden h-1" />

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
            className="group font-display text-2xl md:text-3xl lg:text-[2rem] font-semibold tracking-wider text-paper hover:text-gold transition-all duration-300 flex flex-col items-center gap-1"
          >
            <span>Suwetha S T</span>
            <span className="text-[8px] md:text-[9px] lg:text-[10px] uppercase tracking-[0.2em] font-body font-normal text-paper-muted group-hover:text-gold-soft transition-colors duration-300 whitespace-nowrap">
              Software &bull; Backend &bull; Data Analytics
            </span>
          </a>
        </div>

        {/* Right Links & Socials (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 w-[30%] justify-end">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.slice(4).map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`text-xs uppercase tracking-widest2 transition-colors duration-200 ${
                    active === link.href
                      ? "text-gold"
                      : "text-paper-muted hover:text-paper"
                  }`}
                  aria-current={active === link.href ? "page" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 pl-4 border-l border-line">
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
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="lg:hidden text-paper p-2 absolute right-4 top-1/2 -translate-y-1/2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-soft ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="container-edit flex flex-col gap-1 pb-8 pt-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className={`block py-3 text-sm uppercase tracking-widest2 border-b border-line ${
                  active === link.href ? "text-gold" : "text-paper-muted"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-5 pt-5">
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-paper-muted hover:text-gold transition-colors"
            >
              <Github size={20} strokeWidth={1.5} />
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-paper-muted hover:text-gold transition-colors"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
