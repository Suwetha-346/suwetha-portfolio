"use client";

import { useScrollReveal } from "@/lib/useScrollReveal";
import { SOCIALS } from "@/lib/data";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      form.subject || `Portfolio inquiry from ${form.name || "a visitor"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${SOCIALS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-space" aria-labelledby="contact-heading">
      <div className="container-edit" ref={ref}>
        <div className="mb-16 max-w-3xl">
          <p data-reveal className="eyebrow mb-4">
            Get in Touch
          </p>
          <h2
            data-reveal
            id="contact-heading"
            className="heading-serif font-display text-[clamp(2.25rem,5vw,4.5rem)]"
          >
            Let&apos;s Build Something Meaningful Together.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[60fr_40fr] gap-12">
          <form
            data-reveal
            onSubmit={handleSubmit}
            className="card-surface p-8 sm:p-10 flex flex-col gap-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs uppercase tracking-widest2 text-paper-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="bg-transparent border border-line rounded-xl2 px-4 py-3 text-paper placeholder:text-paper-muted/50 focus:border-gold outline-none transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs uppercase tracking-widest2 text-paper-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="bg-transparent border border-line rounded-xl2 px-4 py-3 text-paper placeholder:text-paper-muted/50 focus:border-gold outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs uppercase tracking-widest2 text-paper-muted">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                className="bg-transparent border border-line rounded-xl2 px-4 py-3 text-paper placeholder:text-paper-muted/50 focus:border-gold outline-none transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs uppercase tracking-widest2 text-paper-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="bg-transparent border border-line rounded-xl2 px-4 py-3 text-paper placeholder:text-paper-muted/50 focus:border-gold outline-none transition-colors resize-none"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              className="self-start inline-flex items-center gap-2 rounded-full bg-gold text-ink px-8 py-3.5 text-sm font-medium tracking-wide hover:bg-gold-soft transition-colors"
            >
              Send Message
              <Send size={16} strokeWidth={1.75} />
            </button>
            <p className="text-xs text-paper-muted">
              Submitting opens your email client with this message pre-filled.
            </p>
          </form>

          <div data-reveal className="flex flex-col gap-6">
            <a
              href={`mailto:${SOCIALS.email}`}
              className="card-surface p-6 flex items-center gap-4 hover:-translate-y-1 transition-transform"
            >
              <span className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0">
                <Mail size={18} strokeWidth={1.5} className="text-gold" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest2 text-paper-muted mb-1">
                  Email
                </span>
                <span className="text-paper text-sm break-all">{SOCIALS.email}</span>
              </span>
            </a>

            <a
              href={`tel:${SOCIALS.phone.replace(/\s/g, "")}`}
              className="card-surface p-6 flex items-center gap-4 hover:-translate-y-1 transition-transform"
            >
              <span className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0">
                <Phone size={18} strokeWidth={1.5} className="text-gold" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest2 text-paper-muted mb-1">
                  Phone
                </span>
                <span className="text-paper text-sm">{SOCIALS.phone}</span>
              </span>
            </a>

            <div className="card-surface p-6 flex items-center gap-4">
              <span className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center flex-shrink-0">
                <MapPin size={18} strokeWidth={1.5} className="text-gold" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-widest2 text-paper-muted mb-1">
                  Location
                </span>
                <span className="text-paper text-sm">Coimbatore, Tamil Nadu</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
