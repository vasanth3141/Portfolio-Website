"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Award, BookOpen } from "lucide-react";
import { ABOUT_INFO } from "@/lib/constants";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, VIEWPORT_ONCE } from "@/lib/animations";

const HIGHLIGHTS = [
  { icon: "🤖", label: "Machine Learning", desc: "Model development & optimisation" },
  { icon: "👁️", label: "Computer Vision", desc: "Real-time image processing" },
  { icon: "📊", label: "Data Analytics", desc: "EDA, dashboards & insights" },
  { icon: "✨", label: "Generative AI", desc: "LLM APIs & AI prototypes" },
  { icon: "🧠", label: "Deep Learning", desc: "CNNs, LSTMs & beyond" },
  { icon: "📈", label: "Predictive Modeling", desc: "Classification & regression" },
];

const INFO_CARDS = [
  { icon: GraduationCap, label: "Degree", value: ABOUT_INFO.degree },
  { icon: BookOpen, label: "Institution", value: ABOUT_INFO.institution },
  { icon: Award, label: "CGPA", value: ABOUT_INFO.cgpa },
  { icon: MapPin, label: "Graduation", value: ABOUT_INFO.graduation },
];

export default function About() {
  return (
    <section id="about" className="section" aria-label="About me">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="About Me"
          title="Passionate About"
          highlight="Intelligent Systems"
          subtitle="A motivated AI/ML graduate with hands-on experience building real-world machine learning solutions."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
          >
            {ABOUT_INFO.description.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-[#94A3B8] leading-relaxed mb-5 text-base sm:text-lg">
                {paragraph}
              </p>
            ))}

            {/* Highlight tags */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT_ONCE}
              className="flex flex-wrap gap-3 mt-8"
            >
              {["Python", "Machine Learning", "Computer Vision", "Data Analysis", "Power BI", " SQL", "Generative AI", "Data Science"].map(
                (tag) => (
                  <motion.span
                    key={tag}
                    variants={fadeInUp}
                    className="tech-badge"
                  >
                    {tag}
                  </motion.span>
                )
              )}
            </motion.div>
          </motion.div>

          {/* Right: Cards */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="space-y-4"
          >
            {/* Info card */}
            <GlassCard gradient>
              <div className="grid grid-cols-2 gap-4">
                {INFO_CARDS.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: "rgba(99,102,241,0.15)" }}
                    >
                      <item.icon size={16} className="text-[#6366F1]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#94A3B8] mb-0.5">{item.label}</p>
                      <p className="text-white text-sm font-semibold leading-snug">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {HIGHLIGHTS.map((h, i) => (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEWPORT_ONCE}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass rounded-xl p-4 flex flex-col gap-2 cursor-default"
                >
                  <span className="text-2xl">{h.icon}</span>
                  <p className="text-white text-sm font-semibold">{h.label}</p>
                  <p className="text-[#94A3B8] text-xs leading-snug">{h.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
