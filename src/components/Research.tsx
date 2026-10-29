"use client";

import { motion } from "framer-motion";
import { BookOpen, Globe, Award, FlaskConical } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";
import { fadeInUp, slideInLeft, slideInRight, VIEWPORT_ONCE } from "@/lib/animations";

export default function Research() {
  return (
    <section id="research" className="section" aria-label="Research and publications">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Research"
          title="Publications &"
          highlight="Academic Contributions"
          subtitle="Translating academic research into real-world educational technology."
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Main publication card */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="lg:col-span-3"
          >
            <GlassCard gradient className="relative overflow-hidden">
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ background: "linear-gradient(90deg, #F59E0B, #6366F1, #06B6D4)" }}
                aria-hidden="true"
              />

              <div className="flex items-start gap-3 mb-6 pt-2">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.25)" }}
                >
                  <BookOpen size={22} className="text-[#F59E0B]" />
                </div>
                <div>
                  <span
                    className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2"
                    style={{ background: "rgba(245,158,11,0.12)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.3)" }}
                  >
                    Published Research
                  </span>
                  <h3 className="text-white font-bold text-xl leading-snug">
                    Learning Plant Anatomy Through AR/VR
                  </h3>
                </div>
              </div>

              {/* Conference badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-5"
                style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)" }}
              >
                <Award size={16} className="text-[#6366F1]" />
                <div>
                  <p className="text-white font-semibold text-sm">ICSTSDG 2024</p>
                  <p className="text-[#94A3B8] text-xs">International Conference on Sustainable Technology and Societal Development</p>
                </div>
              </div>

              <p className="text-[#94A3B8] text-sm leading-relaxed mb-5">
                This research explores the application of augmented reality and virtual reality
                technologies to enhance traditional biology education. The platform enables students
                to interact with immersive 3D plant models, observe internal structures, witness
                pollination processes, and receive explanations from AI-based virtual assistants.
              </p>

              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
                The work presents evidence that immersive, interactive learning environments
                significantly improve comprehension of complex biological structures compared to
                static textbook approaches. This research was presented as a conference paper at
                ICSTSDG 2024.
              </p>

              {/* Research topics */}
              <div className="flex flex-wrap gap-2">
                {["AR/VR Technology", "Educational AI", "3D Visualization", "Biology Education", "Immersive Learning"].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium"
                    style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.2)", color: "#F59E0B" }}
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* Note about DOI */}
              <p className="mt-5 text-xs text-[#94A3B8] opacity-60 italic">
                Publication DOI and conference proceedings link available upon request.
              </p>
            </GlassCard>
          </motion.div>

          {/* Side stats */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT_ONCE}
            className="lg:col-span-2 space-y-4"
          >
            {/* Research impact stats */}
            <GlassCard>
              <h4 className="text-white font-semibold text-sm mb-4">Research Highlights</h4>
              <div className="space-y-4">
                {[
                  { icon: FlaskConical, label: "Conference", value: "ICSTSDG 2024", color: "#6366F1" },
                  { icon: Globe, label: "Type", value: "Conference Paper", color: "#06B6D4" },
                  { icon: BookOpen, label: "Domain", value: "EdTech & AI", color: "#F59E0B" },
                  { icon: Award, label: "Status", value: "Published", color: "#10B981" },
                ].map(({ icon: Icon, label, value, color }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}15` }}>
                      <Icon size={15} style={{ color }} />
                    </div>
                    <div>
                      <p className="text-[#94A3B8] text-xs">{label}</p>
                      <p className="text-white font-semibold text-sm">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Key contributions */}
            <GlassCard>
              <h4 className="text-white font-semibold text-sm mb-4">Key Contributions</h4>
              <ul className="space-y-2.5">
                {[
                  "Interactive 3D botanical models",
                  "AR/VR learning environment design",
                  "AI virtual assistant integration",
                  "Pollination simulation system",
                  "Immersive biology education framework",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[#94A3B8] text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
