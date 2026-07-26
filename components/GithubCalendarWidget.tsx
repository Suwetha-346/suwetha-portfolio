"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function GithubCalendarWidget() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.div
      className="mt-12 glass-card p-6 md:p-8 rounded-3xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-6">
        Coding Activity - <span className="purple-text">Live Commits!</span>
      </h3>
      <div className="w-full overflow-x-auto pb-4">
        <div className="min-w-[700px] flex justify-center min-h-[150px]">
          {mounted ? (
            <GitHubCalendar
              username="Suwetha-346"
              colorScheme={resolvedTheme === "light" ? "light" : "dark"}
              theme={{
                light: ["#f1f5f9", "#ddd6fe", "#c4b5fd", "#8b5cf6", "#6d28d9"],
                dark: ["#120a16", "#4c1d95", "#6d28d9", "#8b5cf6", "#c4b5fd"],
              }}
              blockSize={14}
              blockMargin={5}
              fontSize={14}
            />
          ) : (
            <div className="flex items-center justify-center text-white/50 animate-pulse">Loading GitHub Activity...</div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
