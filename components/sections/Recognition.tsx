"use client";

import { motion, type Variants } from "framer-motion";
import SectionLabel from "@/components/ui/SectionLabel";
import { RECOGNITION } from "@/lib/constants";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Recognition() {
  return (
    <section id="recognition" className="relative py-28 overflow-hidden">
      <span aria-hidden="true" data-num="05" className="section-number left-[-2vw] top-[-4%]" />

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
            <SectionLabel number="05" label="Recognition" />
            <h2 className="text-3xl md:text-5xl font-display font-bold gradient-text mb-16">
              Credentials
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RECOGNITION.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="glass rounded-2xl p-6 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(108,99,255,0.12)] hover:border-[rgba(108,99,255,0.25)] transition-all duration-300"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-base font-semibold text-[#F0F0F5] mb-2">{item.title}</h3>
                <p className="text-[#6B6B7B] text-sm leading-[1.65]">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
