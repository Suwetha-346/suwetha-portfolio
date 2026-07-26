import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a070d",
          soft: "#120a16",
        },
        card: {
          DEFAULT: "#17101c",
          hover: "#1e1424",
        },
        border: {
          DEFAULT: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.16)",
        },
        violet: {
          DEFAULT: "#8b5cf6",
        },
        magenta: {
          DEFAULT: "#d946ef",
        },
        ember: {
          DEFAULT: "#f97316",
          soft: "#fb923c",
        },
        text: {
          DEFAULT: "#f3eef7",
          muted: "#a99bb5",
          faint: "#6f6478",
        },
      },
      backgroundImage: {
        'grad-brand': 'linear-gradient(135deg, var(--violet) 0%, var(--magenta) 100%)',
        'grad-ember': 'linear-gradient(135deg, var(--ember) 0%, var(--ember-soft) 100%)',
        'grad-glow': 'radial-gradient(circle at 30% 20%, rgba(139,92,246,0.35), transparent 60%), radial-gradient(circle at 80% 70%, rgba(217,70,239,0.25), transparent 55%)',
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        'card': '0 10px 30px -12px rgba(0,0,0,0.6)',
        'glow': '0 0 40px rgba(139,92,246,0.25)',
      },
      transitionTimingFunction: {
        ease: "cubic-bezier(.65,0,.35,1)",
        'ease-out-back': "cubic-bezier(.34,1.56,.64,1)",
      },
      height: {
        nav: "76px",
      },
      keyframes: {
        orbCore: {
          "0%, 100%": { transform: "translate(-50%, -50%) scale(1)", opacity: "1" },
          "50%": { transform: "translate(-50%, -50%) scale(1.1)", opacity: "0.8" },
        },
        spinSlow: {
          "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
        spinReverse: {
          "100%": { transform: "translate(-50%, -50%) rotate(-360deg)" },
        },
      },
      animation: {
        orbCore: "orbCore 4s ease-in-out infinite",
        spinSlow: "spinSlow 20s linear infinite",
        spinReverse: "spinReverse 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
