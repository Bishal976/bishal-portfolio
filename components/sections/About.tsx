"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import SectionLabel from "@/components/ui/SectionLabel";
import { STATS } from "@/lib/constants";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <span aria-hidden="true" data-num="01" className="section-number left-[-2vw] top-[-4%]" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: avatar + badge */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="flex flex-col items-center md:items-start gap-5"
          >
            {/* Avatar */}
            <div
              className="w-56 h-56 rounded-2xl p-[2px] flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #6C63FF, #00D4AA)" }}
            >
              <div className="w-full h-full rounded-[14px] overflow-hidden">
                <Image
                  src="/assets/bishal-photo.png"
                  alt="Bishal Kumar"
                  width={224}
                  height={224}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* Badge */}
            <div className="glass rounded-full px-4 py-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4AA] pulse-dot" />
              <span className="text-xs text-[#6B6B7B]">Currently at Josh Technology Group</span>
            </div>
          </motion.div>

          {/* Right: text + stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel number="01" label="About" />
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#F0F0F5] leading-tight">
                Engineer.{" "}
                <span className="gradient-text">Builder.</span>
                <br />
                Problem Solver.
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} className="text-[#6B6B7B] leading-[1.8] text-base md:text-[17px]">
              Senior Frontend Engineer with 3+ years building production-grade systems at scale —
              React, Next.js, TypeScript. I lead teams, own delivery, and care about the gap
              between good code and great product.
            </motion.p>

            <motion.p variants={fadeUp} className="text-[#6B6B7B] leading-[1.8] text-base md:text-[17px]">
              I hold 4 patents, 2 research papers, and a book chapter. I&apos;ve mentored 2,000+ students
              and led a 35-member technical club. I believe engineers who can write, think, and lead
              are rarer — and more valuable — than those who can only code.
            </motion.p>

            {/* Stats grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 mt-2">
              {STATS.map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-5 hover:-translate-y-1 transition-transform duration-300">
                  <div className="text-3xl font-black gradient-text mb-1">{stat.number}</div>
                  <div className="text-xs uppercase tracking-[0.15em] text-[#6B6B7B]">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
