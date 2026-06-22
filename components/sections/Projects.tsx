"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink, Lock, Construction } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import SectionLabel from "@/components/ui/SectionLabel";
import { PROJECTS, SOCIAL_LINKS } from "@/lib/constants";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <span aria-hidden="true" data-num="04" className="section-number right-[-2vw] top-[-4%]" />

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
            <SectionLabel number="04" label="Projects" />
            <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text mb-16">
              Things I&apos;ve Built
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`glass rounded-2xl p-6 flex flex-col hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(108,99,255,0.18)] hover:border-[rgba(108,99,255,0.3)] transition-all duration-300 ${
                  project.status === "wip"
                    ? "border border-[rgba(255,165,0,0.2)]"
                    : project.status === "live"
                    ? "border border-[rgba(0,212,170,0.2)]"
                    : project.status === "placeholder"
                    ? "border border-dashed border-[rgba(255,255,255,0.1)] opacity-70"
                    : "border border-[rgba(255,255,255,0.06)]"
                }`}
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-[0.12em] px-2.5 py-1 rounded-full border border-[rgba(108,99,255,0.25)] text-[#6C63FF] bg-[rgba(108,99,255,0.07)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <div className="flex items-center gap-2 mb-2">
                  {project.status === "wip" && <Construction size={14} className="text-orange-400" />}
                  {project.status === "request" && <Lock size={14} className="text-[#6B6B7B]" />}
                  <h3 className="text-base font-semibold text-[#F0F0F5]">{project.title}</h3>
                </div>

                {/* Description */}
                <p className="text-[#6B6B7B] text-sm leading-[1.7] flex-1 mb-5">
                  {project.description}
                </p>

                {/* Footer links */}
                <div className="flex items-center gap-4 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[#6B6B7B] hover:text-[#6C63FF] transition-colors"
                      aria-label={`${project.title} GitHub`}
                    >
                      <GitHubIcon className="w-3.5 h-3.5" /> Source
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-[#6B6B7B] hover:text-[#00D4AA] transition-colors"
                      aria-label={`${project.title} Live`}
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                  )}
                  {project.status === "request" && (
                    <span className="text-xs text-[#6B6B7B]">Available on request</span>
                  )}
                  {project.status === "wip" && (
                    <span className="text-xs text-orange-400">Coming 2026</span>
                  )}
                  {project.status === "live" && (
                    <span className="text-xs text-[#00D4AA]">Live</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* All on GitHub link */}
          <motion.div variants={fadeUp} className="mt-10 text-center">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#6B6B7B] hover:text-[#6C63FF] transition-colors group"
            >
              View All on GitHub
              <ExternalLink size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
