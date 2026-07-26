import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, Globe, CheckCircle2, Cpu, Layers } from "lucide-react";
import { PROJECTS } from "@/lib/data";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    id: p.id,
  }));
}

export default function ProjectCaseStudyPage({ params }: ProjectPageProps) {
  const project = PROJECTS.find((p) => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-32 pb-24 px-4 max-w-4xl mx-auto">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-sm font-mono text-purple-400 hover:text-purple-300 transition-colors mb-8"
      >
        <ArrowLeft size={16} /> Back to Projects
      </Link>

      <div className="glass-card p-8 md:p-12 rounded-3xl overflow-hidden border border-white/10">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
            {project.tag}
          </span>
          <span className="text-xs font-mono text-white/50">Project ID: {project.index}</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold font-display text-white mb-6">
          {project.title}
        </h1>

        <p className="text-lg text-white/80 leading-relaxed mb-8">
          {project.description}
        </p>

        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-12 border border-white/10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Highlights / Features */}
        <div className="mb-12">
          <h2 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="text-purple-400" size={20} /> Key Highlights & Outcomes
          </h2>
          <ul className="space-y-3">
            {project.highlights.map((h, i) => (
              <li key={i} className="text-white/70 text-sm md:text-base flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-xl font-bold font-display text-white mb-4 flex items-center gap-2">
            <Cpu className="text-purple-400" size={20} /> Technologies & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 text-purple-200 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-bold tracking-wider flex items-center gap-2 transition-colors"
            >
              <Github size={16} /> View Source Code
            </a>
          )}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-bold tracking-wider flex items-center gap-2 transition-colors border border-white/10"
            >
              <Globe size={16} /> Live Application
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
