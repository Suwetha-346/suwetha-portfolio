"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { EXPERIENCE } from "@/lib/data";
import { MapPin, Calendar } from "lucide-react";

export default function Experience() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="experience" className="section-space" aria-labelledby="experience-heading">
      <div className="container-edit" ref={ref}>
        <div className="mb-16 max-w-2xl">
          <p data-reveal className="eyebrow mb-4">
            Journey
          </p>
          <h2
            data-reveal
            id="experience-heading"
            className="heading-serif font-display text-[clamp(2rem,4vw,3.5rem)]"
          >
            Experience
          </h2>
        </div>

        <ol className="relative max-w-3xl border-l border-line pl-10">
          {EXPERIENCE.map((exp) => (
            <li key={exp.role} data-reveal className="relative pb-4">
              <span
                className="absolute -left-[45px] top-1.5 w-3 h-3 rounded-full bg-gold ring-4 ring-ink"
                aria-hidden="true"
              />
              <h3 className="font-display text-2xl text-paper mb-1">
                {exp.role}
              </h3>
              <p className="text-gold text-sm mb-4">{exp.org}</p>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-wide text-paper-muted mb-6">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={14} strokeWidth={1.75} />
                  {exp.location}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Calendar size={14} strokeWidth={1.75} />
                  {exp.period}
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                {exp.responsibilities.map((r) => (
                  <li
                    key={r}
                    className="flex gap-3 text-paper-muted text-sm leading-[1.7]"
                  >
                    <span className="text-gold mt-1.5 flex-shrink-0" aria-hidden="true">
                      &bull;
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
