"use client";

import { X, ExternalLink, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="resume-modal active" onClick={onClose}>
        <motion.div
          className="resume-modal-content glass-card relative"
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={onClose}
            className="close-modal absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pr-10">
            <div>
              <h2 className="text-2xl font-bold font-display text-white">
                My Resume - <span className="purple-text">On Paper!</span>
              </h2>
              <p className="text-xs text-text-muted mt-1 font-mono">
                Suwetha_S_T_Resume.pdf
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="/Suwetha_S_T_Resume.pdf"
                download="Suwetha_S_T_Resume.pdf"
                className="btn-resume text-xs px-4 py-2 flex items-center gap-2"
              >
                <Download size={14} /> Download PDF
              </a>
              <a
                href="/Suwetha_S_T_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-resume text-xs px-4 py-2 flex items-center gap-2"
              >
                <ExternalLink size={14} /> Open Full
              </a>
            </div>
          </div>

          <div className="resume-iframe-container">
            <iframe
              src="/Suwetha_S_T_Resume.pdf"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="Suwetha S T Resume"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
