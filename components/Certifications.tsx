"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { CERTIFICATIONS, ACHIEVEMENTS } from "@/lib/data";
import { Award, Medal } from "lucide-react";

export default function Certifications() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section
      id="certifications"
      className="section-space"
      aria-labelledby="certifications-heading"
    >
      <div className="container-edit" ref={ref}>
        <div className="mb-16 max-w-2xl">
          <p data-reveal className="eyebrow mb-4">
            Recognition
          </p>
          <h2
            data-reveal
            id="certifications-heading"
            className="heading-serif font-display text-[clamp(2rem,4vw,3.5rem)]"
          >
            Certifications &amp; Achievements
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div data-reveal className="card-surface p-8">
            <h3 className="font-display text-xl mb-6 flex items-center gap-3 text-paper">
              <Award size={20} strokeWidth={1.5} className="text-gold" />
              Certifications
            </h3>
            <ul className="flex flex-col gap-6">
              {CERTIFICATIONS.map((cert) => (
                <li
                  key={cert.title}
                  className="pb-6 border-b border-line last:border-0 last:pb-0"
                >
                  <p className="text-paper mb-1">{cert.title}</p>
                  <p className="text-gold text-sm mb-1">{cert.issuer}</p>
                  <p className="text-xs uppercase tracking-widest2 text-paper-muted">
                    Completion Date: {cert.date}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal className="card-surface p-8">
            <h3 className="font-display text-xl mb-6 flex items-center gap-3 text-paper">
              <Medal size={20} strokeWidth={1.5} className="text-gold" />
              Achievements
            </h3>
            <ul className="flex flex-col gap-6">
              {ACHIEVEMENTS.map((ach) => (
                <li
                  key={ach.title}
                  className="pb-6 border-b border-line last:border-0 last:pb-0"
                >
                  <p className="text-paper mb-1">{ach.title}</p>
                  <p className="text-paper-muted text-sm">{ach.meta}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
