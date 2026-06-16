"use client";

import { useEffect, useState, useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { Download, ArrowRight, ChevronDown } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/Icons";
import dynamic from "next/dynamic";
import { SOCIAL_LINKS, TYPEWRITER_PHRASES } from "@/lib/constants";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), { ssr: false });

function Typewriter({ phrases }: { phrases: string[] }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const current = phrases[phraseIndex];
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayed, deleting, phraseIndex, phrases]);

  return (
    <span>
      {displayed}
      <span className="typewriter-cursor" />
    </span>
  );
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

// Animate-in elements: fade + slide up
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Bio element: opacity only, no transform — Framer Motion sets no transform on LCP element
const bioVariants: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden dot-grid">
      <span aria-hidden="true" data-num="00" className="section-number right-[-2vw] top-[10%]" />

      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[55%] opacity-70 md:opacity-100">
        <HeroCanvas />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0F] via-[#0A0A0F]/80 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#00D4AA] pulse-dot" />
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#6B6B7B]">
              Open to Select Collaborations
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="font-display font-black leading-[0.92] tracking-tight mb-4"
            style={{ fontSize: "clamp(56px, 9vw, 116px)" }}
          >
            <span className="gradient-text">Bishal</span>
            <br />
            <span className="text-[#F0F0F5]">Kumar</span>
          </motion.h1>

          {/* Typewriter subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-medium text-[#6B6B7B] mb-6 h-8"
          >
            <Typewriter phrases={TYPEWRITER_PHRASES} />
          </motion.h2>

          {/* Bio — no y-transform variant: Framer Motion won't set translateY on this element */}
          <motion.p
            variants={bioVariants}
            className="text-[#6B6B7B] text-base md:text-lg leading-[1.75] mb-10 max-w-lg"
          >
            I build high-performance web products at the intersection of clean code and sharp
            design. Senior engineer, team lead, and occasional patent author.
            Passionate about AI-native engineering and products that matter.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-white bg-[#6C63FF] shadow-[0_0_28px_rgba(108,99,255,0.4)] hover:shadow-[0_0_44px_rgba(108,99,255,0.6)] hover:bg-[#7a73ff] transition-all duration-300 overflow-hidden shimmer-btn"
            >
              View My Work <ArrowRight size={15} />
            </a>
            {/* <a
              href="/assets/Bishal_Kumar_Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm text-[#F0F0F5] border border-[rgba(108,99,255,0.45)] hover:border-[#6C63FF] hover:shadow-[0_0_24px_rgba(108,99,255,0.2)] transition-all duration-300"
            >
              <Download size={15} /> Download Resume
            </a> */}
          </motion.div>

          {/* Social links */}
          <motion.div variants={itemVariants} className="flex items-center gap-5">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GitHubIcon className="w-5 h-5 text-[#6B6B7B] hover:text-[#6C63FF] transition-colors" />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon className="w-5 h-5 text-[#6B6B7B] hover:text-[#6C63FF] transition-colors" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#6B6B7B]"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
}
