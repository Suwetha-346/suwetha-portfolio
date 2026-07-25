"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { SKILL_GROUPS } from "@/lib/data";

export default function Skills() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="section-space" aria-labelledby="skills-heading">
      <div className="container-edit" ref={ref}>
        <div className="mb-16 max-w-2xl">
          <p data-reveal className="eyebrow mb-4">
            Capabilities
          </p>
          <h2
            data-reveal
            id="skills-heading"
            className="heading-serif font-display text-[clamp(2rem,4vw,3.5rem)]"
          >
            Skills &amp; Tools
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              data-reveal
              className="card-surface p-8"
            >
              <h3 className="font-display text-xl mb-6 text-paper">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-paper-muted text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
