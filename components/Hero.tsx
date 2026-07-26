"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Code, Brain, Trophy, Lightbulb } from "lucide-react";
import { SOCIALS } from "@/lib/data";
import ResumeModal from "./ResumeModal";

export default function Hero() {
  const [roleText, setRoleText] = useState("");
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const roles = [
      "AI & Data Science Student",
      "1st Rank Academic Achiever",
      "Machine Learning Specialist",
      "Data Analytics Practitioner",
    ];

    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentRole = roles[currentRoleIndex];

      if (isDeleting) {
        setRoleText(currentRole.substring(0, currentCharIndex - 1));
        currentCharIndex--;
      } else {
        setRoleText(currentRole.substring(0, currentCharIndex + 1));
        currentCharIndex++;
      }

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentCharIndex === currentRole.length) {
        typeSpeed = 2200;
        isDeleting = true;
      } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        typeSpeed = 400;
      }

      timeout = setTimeout(type, typeSpeed);
    };

    timeout = setTimeout(type, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <main className="hero relative min-h-screen flex items-center justify-center pt-24 pb-16" id="home">
        {/* Floating Corner Icons */}
        <div className="floating-icon icon-top-left">
          <Code size={22} />
        </div>
        <div className="floating-icon icon-top-right">
          <Brain size={22} />
        </div>
        <div className="floating-icon icon-bottom-left">
          <Trophy size={22} />
        </div>
        <div className="floating-icon icon-bottom-right">
          <Lightbulb size={22} />
        </div>

        <div className="content-wrapper text-center z-10 max-w-4xl px-4 flex flex-col items-center">
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-500/80 shadow-[0_0_60px_rgba(168,85,247,0.5)] mb-8 mx-auto hover:scale-105 transition-transform duration-500">
            <Image
              src="/images/suwetha-portrait-new.jpg"
              alt="Suwetha S T Profile"
              fill
              className="object-cover"
              priority
            />
          </div>

          <h2 className="sub-title text-lg md:text-xl text-text-muted font-normal">
            Woah! You Landed on the Portfolio Website of The
          </h2>

          <h1 className="main-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display my-6 tracking-tight">
            <span className="purple-text" id="typing-text">
              {roleText}
            </span>
            <span className="animate-pulse text-purple-400">|</span>
          </h1>

          <h5 className="year text-base md:text-lg font-medium text-white/80 tracking-wide mb-8">
            Suwetha S T | B.Tech AI & DS Undergrad (1st Rank Secured)
          </h5>

          <div className="hero-buttons flex flex-wrap items-center justify-center gap-4">
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resume"
            >
              Let&apos;s Connect
            </a>
            <button
              type="button"
              onClick={() => setIsResumeModalOpen(true)}
              className="btn-resume cursor-pointer"
            >
              View Resume
            </button>
          </div>
        </div>
      </main>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </>
  );
}
