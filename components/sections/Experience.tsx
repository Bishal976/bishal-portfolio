"use client";

import { motion, type Variants } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { EXPERIENCE } from "@/lib/constants";

const slideRight: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65 } },
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden">
      <span aria-hidden="true" data-num="03" className="section-number left-[-2vw] top-[-4%]" />

      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(108,99,255,0.3)] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div variants={slideRight}>
            <SectionLabel number="03" label="Experience" />
            <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text mb-16">
              Where I&apos;ve Worked
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative pl-8 md:pl-16">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-4 top-2 bottom-2 w-px timeline-line" />

            <div className="flex flex-col gap-12">
              {EXPERIENCE.map((item, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: 40 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.65, delay: i * 0.1 },
                    },
                  }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-[37px] md:-left-[53px] top-1 w-3 h-3 rounded-full border-2 border-[#6C63FF] bg-[#0A0A0F] hover:shadow-[0_0_12px_rgba(108,99,255,0.7)] transition-shadow duration-300" />

                  <div className="glass rounded-2xl p-7 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(108,99,255,0.12)] transition-all duration-300">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-[#F0F0F5]">{item.role}</h3>
                        <p className="text-[#6C63FF] text-sm font-medium">{item.company}</p>
                      </div>
                      <span className="text-xs font-mono text-[#6B6B7B] bg-[rgba(108,99,255,0.08)] px-3 py-1.5 rounded-full border border-[rgba(108,99,255,0.15)]">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-[#6B6B7B] leading-[1.75] text-sm md:text-base mb-4">
                      {item.description}
                    </p>
                    {item.metrics && (
                      <div className="flex flex-wrap gap-2">
                        {item.metrics.map((m) => (
                          <span
                            key={m}
                            className="text-xs font-mono text-[#00D4AA] bg-[rgba(0,212,170,0.07)] border border-[rgba(0,212,170,0.2)] px-3 py-1 rounded-full"
                          >
                            ↑ {m}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
