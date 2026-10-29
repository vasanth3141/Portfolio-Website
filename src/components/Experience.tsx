"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { EXPERIENCES } from "@/lib/projects";
import SectionHeading from "./ui/SectionHeading";
import { staggerContainer, fadeInUp, VIEWPORT_ONCE } from "@/lib/animations";

export default function Experience() {
  return (
    <section id="experience" className="section" aria-label="Internship experience">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Experience"
          title="Internship"
          highlight="Journey"
          subtitle="Hands-on experience applying machine learning and data science to real-world problems."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-6 top-8 bottom-8 w-0.5 hidden sm:block"
            style={{ background: "linear-gradient(180deg, #6366F1, #8B5CF6, transparent)" }}
            aria-hidden="true"
          />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <motion.div
                key={exp.id}
                variants={fadeInUp}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-3.5 top-6 w-5 h-5 rounded-full hidden sm:flex items-center justify-center z-10"
                  style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}60` }}
                  aria-hidden="true"
                >
                  <div className="w-2 h-2 rounded-full bg-white" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="glass rounded-2xl p-6 relative overflow-hidden"
                >
                  {/* Gradient accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl"
                    style={{ background: `linear-gradient(90deg, ${exp.color}, transparent)` }}
                    aria-hidden="true"
                  />

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center"
                          style={{ background: `${exp.color}18` }}
                        >
                          <Briefcase size={15} style={{ color: exp.color }} />
                        </div>
                        <h3 className="text-white font-bold text-lg">{exp.role}</h3>
                      </div>
                      <p className="text-[#94A3B8] text-sm ml-10">{exp.company}</p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: `${exp.color}18`, color: exp.color, border: `1px solid ${exp.color}30` }}
                      >
                        {exp.duration}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2.5 mb-5" aria-label="Responsibilities">
                    {exp.responsibilities.map((resp, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={VIEWPORT_ONCE}
                        transition={{ delay: i * 0.1 + j * 0.06 }}
                        className="flex items-start gap-2.5 text-[#94A3B8] text-sm leading-relaxed"
                      >
                        <CheckCircle2
                          size={15}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: exp.color }}
                        />
                        {resp}
                      </motion.li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  {exp.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-medium"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#94A3B8",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
