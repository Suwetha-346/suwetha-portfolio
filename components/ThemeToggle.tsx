"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-10 h-10" />; // placeholder
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-full overflow-hidden bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      <motion.div
        initial={false}
        animate={{
          y: theme === "dark" ? 0 : 30,
          opacity: theme === "dark" ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="absolute inset-0 flex items-center justify-center text-purple-300"
      >
        <Moon size={18} />
      </motion.div>

      <motion.div
        initial={false}
        animate={{
          y: theme === "light" ? 0 : -30,
          opacity: theme === "light" ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="flex items-center justify-center text-amber-500"
      >
        <Sun size={18} />
      </motion.div>
    </button>
  );
}
