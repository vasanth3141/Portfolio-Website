"use client";

import { motion } from "framer-motion";
import {
  Code2, Brain, Layers, BarChart3, Sparkles,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/lib/skills";
import SectionHeading from "./ui/SectionHeading";
import { staggerContainer, fadeInUp, VIEWPORT_ONCE } from "@/lib/animations";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2, Brain, Layers, BarChart3, Sparkles,
};

const COLOR_BG: Record<string, string> = {
  "#6366F1": "rgba(99,102,241,0.12)",
  "#8B5CF6": "rgba(139,92,246,0.12)",
  "#06B6D4": "rgba(6,182,212,0.12)",
  "#10B981": "rgba(16,185,129,0.12)",
  "#F59E0B": "rgba(245,158,11,0.12)",
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section"
      style={{ background: "linear-gradient(180deg, transparent 0%, rgba(99,102,241,0.03) 50%, transparent 100%)" }}
      aria-label="Skills and technologies"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Skills"
          title="Technologies &"
          highlight="Expertise"
          subtitle="A curated overview of the tools, frameworks, and techniques I work with."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SKILL_CATEGORIES.map((category) => {
            const Icon = ICON_MAP[category.icon] || Code2;
            const bgColor = COLOR_BG[category.color] || "rgba(99,102,241,0.12)";

            return (
              <motion.div
                key={category.id}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="glass rounded-2xl p-6 skill-card"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: bgColor }}
                  >
                    <Icon size={20} style={{ color: category.color }} />
                  </div>
                  <h3 className="text-white font-semibold text-sm leading-tight">
                    {category.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-default"
                      style={{
                        background: bgColor,
                        border: `1px solid ${category.color}30`,
                        color: category.color,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div
                  className="mt-5 h-0.5 rounded-full opacity-30"
                  style={{ background: `linear-gradient(90deg, ${category.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
