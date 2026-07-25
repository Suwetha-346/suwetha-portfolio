"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { ABOUT_CHIPS } from "@/lib/data";
import { UserRound } from "lucide-react";

export default function About() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="section-space" aria-labelledby="about-heading">
      <div className="container-edit grid lg:grid-cols-[40fr_60fr] gap-16 items-center" ref={ref}>
        <div
          data-reveal
          className="relative aspect-[4/5] rounded-xl3 border border-line bg-ink-soft flex flex-col items-center justify-center gap-3 overflow-hidden"
        >
          <UserRound
            size={64}
            strokeWidth={1}
            className="text-paper-muted"
            aria-hidden="true"
          />
          <span className="text-xs uppercase tracking-widest2 text-paper-muted px-6 text-center">
            Replace with professional portrait
          </span>
          <div className="absolute inset-0 border border-gold/0 hover:border-gold/30 transition-colors rounded-xl3 pointer-events-none" />
        </div>

        <div>
          <p data-reveal className="eyebrow mb-4">
            About
          </p>
          <h2
            data-reveal
            id="about-heading"
            className="heading-serif font-display text-[clamp(2rem,4vw,3.5rem)] mb-8"
          >
            About Me
          </h2>
          <p data-reveal className="text-paper-muted text-lg leading-[1.7] mb-10 max-w-2xl">
            I&apos;m an AI &amp; Data Science undergraduate who enjoys
            building software that turns data into meaningful insights and
            real-world applications. My interest lies at the intersection of
            software development, backend engineering, machine learning, and
            analytics, where I can solve practical problems through
            technology. Over the past few years, I&apos;ve worked on projects
            ranging from customer churn prediction and IoT-based health
            monitoring to database-driven management systems. Each project
            has strengthened my ability to learn new technologies quickly
            and apply them effectively. Right now, I&apos;m focused on
            improving my data analytics skills, building end-to-end
            projects, and preparing for a career where I can contribute to
            impactful, data-driven solutions.
          </p>

          <div data-reveal className="flex flex-wrap gap-3">
            {ABOUT_CHIPS.map((chip) => (
              <span key={chip} className="chip">
                {chip}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
