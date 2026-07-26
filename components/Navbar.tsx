"use client";

import { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  Code,
  Layers,
  Award,
  Globe,
  Mail,
  Download
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import Magnetic from "./Magnetic";

const NAV_ITEMS = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "projects", label: "Projects", icon: Code },
  { id: "skills", label: "Skills", icon: Layers },
  { id: "certifications", label: "Certs", icon: Award },
  { id: "profiles", label: "Profiles", icon: Globe },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(NAV_ITEMS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="site-nav" id="siteNav">
      <div className="nav-pill">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.id);
              }}
              className={`nav-link ${isActive ? "active" : ""}`}
              data-section={item.id}
            >
              <Icon size={14} className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </a>
          );
        })}
        <div className="w-[1px] h-6 bg-white/20 dark:bg-black/20 mx-1 hidden md:block"></div>
        <div className="hidden md:block">
          <Magnetic>
            <ThemeToggle />
          </Magnetic>
        </div>
        <Magnetic>
          <a
            href="/Suwetha_S_T_Resume.pdf"
            download="Suwetha_S_T_Resume.pdf"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-purple-600/20 text-purple-400 hover:bg-purple-600 hover:text-white rounded-full transition-colors ml-1 text-xs font-mono font-bold tracking-widest border border-purple-500/30"
          >
            <Download size={14} />
            RESUME
          </a>
        </Magnetic>
      </div>
    </nav>
  );
}
