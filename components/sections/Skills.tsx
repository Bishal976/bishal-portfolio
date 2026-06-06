"use client";

import { motion, type Variants } from "framer-motion";
import { Code, Server, Cpu, Layers } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { SKILL_GROUPS } from "@/lib/constants";

const ICONS: Record<string, React.ReactNode> = {
  code: <Code size={14} />,
  server: <Server size={14} />,
  cpu: <Cpu size={14} />,
  layers: <Layers size={14} />,
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <span aria-hidden="true" data-num="02" className="section-number right-[-2vw] top-[-4%]" />

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="h-px bg-gradient-to-r from-transparent via-[rgba(108,99,255,0.3)] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.div variants={fadeUp}>
            <SectionLabel number="02" label="Skills" />
            <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text mb-16">
              My Toolkit
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {SKILL_GROUPS.map((group) => (
              <motion.div key={group.category} variants={fadeUp} className="glass rounded-2xl p-7">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-[#6C63FF]">{ICONS[group.icon]}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#6B6B7B] font-medium">
                    {group.category}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-full text-sm text-[#F0F0F5] glass border border-[rgba(108,99,255,0.2)] hover:-translate-y-0.5 hover:border-[rgba(108,99,255,0.5)] hover:shadow-[0_0_12px_rgba(108,99,255,0.2)] transition-all duration-200 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
