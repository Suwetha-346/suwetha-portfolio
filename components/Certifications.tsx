"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Award, Eye, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATIONS, Certification } from "@/lib/data";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section className="certifications-section py-16 md:py-24" id="certifications">
      <div className="w-full max-w-5xl mx-auto px-4">
        <h2 className="section-title text-3xl sm:text-4xl font-bold font-display text-white text-center mb-12">
          Certifications & Honors - <span className="purple-text">Learning Milestones!</span>
        </h2>

        <div className="cert-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="cert-item glass-card rounded-3xl overflow-hidden flex flex-col justify-between hover:border-purple-500/50 transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.1 }}
            >
              <div>
                {/* Certificate Image Wrapper */}
                <div className="cert-img-wrapper relative aspect-[16/10] w-full bg-slate-900 border-b border-white/10 overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="cert-overlay absolute inset-0 bg-gradient-to-t from-black/90 via-purple-950/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCert(cert);
                      }}
                      className="cert-overlay-link btn-resume text-xs px-4 py-2.5 rounded-full flex items-center gap-2"
                    >
                      <Eye size={14} />
                      <span>View Certificate</span>
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="cert-info p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={14} className="text-purple-400" />
                    <span className="text-xs font-mono text-purple-300">
                      {cert.issuer} • {cert.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white font-display mb-2 group-hover:text-purple-300 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-white/70 leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between">
                <span className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[10px] font-mono">
                  {cert.category}
                </span>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 font-medium hover:underline"
                >
                  <span>LinkedIn</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="cert-modal-box relative z-10 w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-purple-500/30 rounded-3xl overflow-hidden flex flex-col shadow-2xl shadow-purple-950/50"
            >
              {/* Header */}
              <div className="cert-modal-header flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-slate-900/80 backdrop-blur-sm">
                <div>
                  <span className="text-xs font-mono text-purple-400 block mb-1">
                    {selectedCert.issuer} • {selectedCert.date}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                    {selectedCert.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors ml-4"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Body: Image Container */}
              <div className="cert-modal-body relative flex-1 overflow-auto p-4 sm:p-6 flex items-center justify-center bg-black/40 min-h-[300px] max-h-[65vh]">
                <div className="relative w-full h-full min-h-[300px] max-h-[60vh] flex items-center justify-center">
                  <Image
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    width={1200}
                    height={800}
                    unoptimized
                    priority
                    className="max-h-full max-w-full w-auto h-auto object-contain rounded-xl shadow-lg border border-white/10"
                  />
                </div>
              </div>

              {/* Footer / Actions */}
              <div className="cert-modal-footer p-4 sm:p-6 border-t border-white/10 bg-slate-900/90 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-white/70 max-w-xl">
                  {selectedCert.description}
                </p>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-resume text-xs px-5 py-2.5 rounded-full flex items-center justify-center gap-2 w-full sm:w-auto font-medium"
                  >
                    <span>View in LinkedIn</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

