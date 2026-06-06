"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Mail, Copy, Check, ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import SectionLabel from "@/components/ui/SectionLabel";
import { SOCIAL_LINKS } from "@/lib/constants";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    await navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Hi Bishal,\n\n${formData.message}\n\nBest,\n${formData.name}\n${formData.email}`);
    window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <span aria-hidden="true" data-num="06" className="section-number right-[-2vw] top-[-4%]" />

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(108,99,255,0.3)] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel number="06" label="Contact" />
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#F0F0F5] mb-3">
              Let&apos;s Build{" "}
              <span className="gradient-text">Something.</span>
            </h2>
            <p className="text-[#6B6B7B] text-base md:text-lg mb-14 max-w-xl leading-[1.7]">
              Interested in collaborating on interesting problems in React, Next.js, or
              AI-integrated products? I&apos;m always open to a good conversation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: contact details */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <button
                onClick={copyEmail}
                className="flex items-center gap-4 glass rounded-xl p-5 hover:border-[rgba(108,99,255,0.35)] hover:-translate-y-0.5 transition-all duration-300 text-left group"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(108,99,255,0.12)] flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[#6C63FF]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs uppercase tracking-[0.15em] text-[#6B6B7B] mb-0.5">Email</div>
                  <div className="text-[#F0F0F5] text-sm truncate">{SOCIAL_LINKS.email}</div>
                </div>
                {copied ? (
                  <Check size={16} className="text-[#00D4AA] flex-shrink-0" />
                ) : (
                  <Copy size={16} className="text-[#6B6B7B] group-hover:text-[#6C63FF] flex-shrink-0 transition-colors" />
                )}
              </button>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-xl p-5 hover:border-[rgba(108,99,255,0.35)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(108,99,255,0.12)] flex items-center justify-center flex-shrink-0">
                  <LinkedInIcon className="w-[18px] h-[18px] text-[#6C63FF]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.15em] text-[#6B6B7B] mb-0.5">LinkedIn</div>
                  <div className="text-[#F0F0F5] text-sm">bishal-kumar-054b30192</div>
                </div>
              </a>

              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-xl p-5 hover:border-[rgba(108,99,255,0.35)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[rgba(108,99,255,0.12)] flex items-center justify-center flex-shrink-0">
                  <GitHubIcon className="w-[18px] h-[18px] text-[#6C63FF]" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.15em] text-[#6B6B7B] mb-0.5">GitHub</div>
                  <div className="text-[#F0F0F5] text-sm">Bishal976</div>
                </div>
              </a>
            </motion.div>

            {/* Right: contact form */}
            <motion.form variants={fadeUp} onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="contact-name" className="text-xs uppercase tracking-[0.15em] text-[#6B6B7B] mb-2 block">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  autoComplete="name"
                  value={formData.name}
                  onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                  className="w-full glass rounded-lg px-4 py-3 text-sm text-[#F0F0F5] placeholder-[#6B6B7B] focus:outline-none focus:border-[rgba(108,99,255,0.5)] transition-colors border border-[rgba(255,255,255,0.06)]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="text-xs uppercase tracking-[0.15em] text-[#6B6B7B] mb-2 block">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                  className="w-full glass rounded-lg px-4 py-3 text-sm text-[#F0F0F5] placeholder-[#6B6B7B] focus:outline-none focus:border-[rgba(108,99,255,0.5)] transition-colors border border-[rgba(255,255,255,0.06)]"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="text-xs uppercase tracking-[0.15em] text-[#6B6B7B] mb-2 block">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                  className="w-full glass rounded-lg px-4 py-3 text-sm text-[#F0F0F5] placeholder-[#6B6B7B] focus:outline-none focus:border-[rgba(108,99,255,0.5)] transition-colors resize-none border border-[rgba(255,255,255,0.06)]"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="relative self-end inline-flex items-center gap-2 px-7 py-3 rounded-lg font-semibold text-sm text-white bg-[#6C63FF] shadow-[0_0_28px_rgba(108,99,255,0.35)] hover:shadow-[0_0_44px_rgba(108,99,255,0.55)] hover:bg-[#7a73ff] transition-all duration-300 overflow-hidden shimmer-btn"
              >
                Send Message <ArrowRight size={15} />
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>

      {/* CTA strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-24 mx-6 rounded-2xl glass border border-[rgba(108,99,255,0.2)] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#F0F0F5] font-medium text-base md:text-lg">
            Have an interesting problem to solve? —
          </p>
          <a
            href="mailto:singhbishalkumarsingh@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#6C63FF] hover:bg-[#7a73ff] shadow-[0_0_24px_rgba(108,99,255,0.35)] hover:shadow-[0_0_40px_rgba(108,99,255,0.55)] transition-all duration-300 whitespace-nowrap"
          >
            Get in touch <ArrowRight size={14} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
