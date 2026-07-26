"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoaded(true), 400);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!isLoaded && (
        <motion.div
          id="preloader"
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="preloader-particles">
            <div className="absolute w-2 h-2 rounded-full bg-purple-500/40 top-1/4 left-1/5 animate-ping" />
            <div className="absolute w-3 h-3 rounded-full bg-indigo-500/30 bottom-1/3 right-1/4 animate-pulse" />
            <div className="absolute w-1.5 h-1.5 rounded-full bg-pink-500/50 top-1/2 right-1/3 animate-ping" />
          </div>

          {/* Branding */}
          <div className="preloader-brand">
            <div className="preloader-brand-main">
              <span className="preloader-brand-name">SUWETHA</span>
              <span className="preloader-brand-accent">S T</span>
            </div>
            <div className="preloader-brand-subtitle">
              <span className="subtitle-line" />
              <span>B.Tech AI & Data Science</span>
              <span className="subtitle-line" />
            </div>
          </div>

          {/* Sleek Loading Bar */}
          <div className="preloader-sleek-track">
            <div
              className="preloader-sleek-fill"
              id="preloaderSleekFill"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>

          {/* Cycling Tagline */}
          <div className="preloader-tagline">
            <span className="tagline-word" style={{ animationDelay: "0s" }}>
              Data.
            </span>
            <span className="tagline-word" style={{ animationDelay: "0.2s" }}>
              Analytics.
            </span>
            <span className="tagline-word" style={{ animationDelay: "0.4s" }}>
              Machine Learning.
            </span>
            <span className="tagline-word" style={{ animationDelay: "0.6s" }}>
              AI.
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
