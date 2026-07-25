"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown, ArrowRight } from "lucide-react";
import NeuralVisualization from "./NeuralVisualization";

export default function Hero() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const targets = rootRef.current!.querySelectorAll("[data-hero-reveal]");
      if (prefersReducedMotion) {
        gsap.set(targets, { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        targets,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.15,
        }
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={rootRef}
      className="relative min-h-screen flex items-center pt-32 pb-24"
    >
      <div className="container-edit grid lg:grid-cols-[45fr_55fr] gap-16 items-center w-full">
        <div>
          <p data-hero-reveal className="eyebrow mb-6">
            AI • DATA SCIENCE • SOFTWARE DEVELOPMENT
          </p>
          <h1
            data-hero-reveal
            className="heading-serif font-display text-[clamp(2.75rem,6.5vw,6.5rem)] text-paper mb-8"
          >
            Building intelligent software and data&#8209;driven solutions
            that solve real&#8209;world problems.
          </h1>
          <p
            data-hero-reveal
            className="text-paper-muted text-[clamp(1.05rem,1.3vw,1.25rem)] leading-[1.7] max-w-xl mb-10"
          >
            I&apos;m an AI &amp; Data Science student passionate about
            combining software engineering, machine learning, and analytics
            to create practical, scalable applications. From predictive
            models to IoT systems and backend development, I enjoy
            transforming ideas into meaningful digital solutions.
          </p>

          <div
            data-hero-reveal
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-gold text-ink px-7 py-3.5 text-sm font-medium tracking-wide hover:bg-gold-soft transition-colors"
            >
              View Projects
              <ArrowRight size={16} strokeWidth={1.75} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-7 py-3.5 text-sm font-medium tracking-wide text-paper hover:border-gold hover:text-gold transition-colors"
            >
              Contact Me
            </a>
          </div>

          <a
            data-hero-reveal
            href="/Suwetha_S_T_Resume.pdf"
            download="Suwetha_S_T_Resume.pdf"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-paper-muted hover:text-gold transition-colors"
          >
            <ArrowDown size={14} strokeWidth={1.75} />
            Download Resume
          </a>
        </div>

        <div data-hero-reveal className="h-[380px] lg:h-[520px]">
          <NeuralVisualization />
        </div>
      </div>
    </section>
  );
}
