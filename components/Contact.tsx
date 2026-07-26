"use client";

import { useState } from "react";
import { User, Mail, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  return (
    <section className="contact-section py-16 md:py-24" id="contact">
      <div className="contact-container w-full max-w-3xl mx-auto px-4">
        <h2 className="section-title text-3xl sm:text-4xl font-bold font-display text-white text-center mb-4">
          Get In Touch - <span className="purple-text">Ask Me Anything!</span>
        </h2>
        <h4 className="contact-note text-center text-sm md:text-base text-white/70 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Ready to collaborate or have an opportunity in mind?<br />
          I&apos;m always open to new opportunities, research projects, and technical conversations.
        </h4>

        <motion.div
          className="contact-card glass-card p-8 md:p-10 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle2 size={48} className="text-emerald-400 mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-white font-display mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-white/70">
                Thank you for reaching out, Suwetha will get back to you shortly.
              </p>
            </div>
          ) : (
            <form id="contactForm" className="contact-form flex flex-col gap-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="form-group relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder=" "
                  autoComplete="off"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all peer"
                />
                <label
                  htmlFor="name"
                  className="absolute left-11 top-3.5 text-xs text-white/50 pointer-events-none transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[10px] peer-focus:bg-slate-900 peer-focus:px-2 peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:bg-slate-900 peer-[:not(:placeholder-shown)]:px-2"
                >
                  Your Name
                </label>
                <User size={18} className="input-icon absolute left-3.5 top-4 text-white/40 peer-focus:text-purple-400 transition-colors" />
              </div>

              {/* Email */}
              <div className="form-group relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder=" "
                  autoComplete="off"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all peer"
                />
                <label
                  htmlFor="email"
                  className="absolute left-11 top-3.5 text-xs text-white/50 pointer-events-none transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[10px] peer-focus:bg-slate-900 peer-focus:px-2 peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:bg-slate-900 peer-[:not(:placeholder-shown)]:px-2"
                >
                  Email Address
                </label>
                <Mail size={18} className="input-icon absolute left-3.5 top-4 text-white/40 peer-focus:text-purple-400 transition-colors" />
              </div>

              {/* Message */}
              <div className="form-group relative">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder=" "
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 pl-11 text-white text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none peer"
                />
                <label
                  htmlFor="message"
                  className="absolute left-11 top-3.5 text-xs text-white/50 pointer-events-none transition-all duration-200 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[10px] peer-focus:bg-slate-900 peer-focus:px-2 peer-focus:text-purple-400 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:bg-slate-900 peer-[:not(:placeholder-shown)]:px-2"
                >
                  Your Message
                </label>
                <MessageSquare size={18} className="input-icon absolute left-3.5 top-4 text-white/40 peer-focus:text-purple-400 transition-colors" />
              </div>

              <button type="submit" className="btn-resume btn-submit flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto self-end px-8 py-3.5">
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
