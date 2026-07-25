"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { EDUCATION } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="education" className="section-space" aria-labelledby="education-heading">
      <div className="container-edit" ref={ref}>
        <div className="mb-16 max-w-2xl">
          <p data-reveal className="eyebrow mb-4">
            Academics
          </p>
          <h2
            data-reveal
            id="education-heading"
            className="heading-serif font-display text-[clamp(2rem,4vw,3.5rem)]"
          >
            Education
          </h2>
        </div>

        <ol className="relative max-w-3xl border-l border-line pl-10 flex flex-col gap-14">
          {EDUCATION.map((edu) => (
            <li key={edu.degree + edu.institution} data-reveal className="relative">
              <span
                className="absolute -left-[45px] top-1.5 w-9 h-9 -translate-x-[3px] rounded-full bg-ink-soft border border-gold/40 flex items-center justify-center"
                aria-hidden="true"
              >
                <GraduationCap size={16} strokeWidth={1.75} className="text-gold" />
              </span>
              <h3 className="font-display text-2xl text-paper mb-1">
                {edu.degree}
              </h3>
              <p className="text-paper-muted text-sm mb-1">{edu.field}</p>
              <p className="text-gold text-sm mb-4">
                {edu.institution}
                {edu.affiliation && edu.affiliation.match(/university/i)
                  ? ` — ${edu.affiliation}`
                  : ""}
              </p>
              {!edu.affiliation.match(/university/i) && (
                <p className="text-xs uppercase tracking-widest2 text-paper-muted mb-4">
                  {edu.affiliation}
                </p>
              )}

              {edu.meta.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {edu.meta.map((m) => (
                    <span
                      key={m.label}
                      className="chip text-xs"
                    >
                      {m.label}: <span className="text-paper">{m.value}</span>
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
