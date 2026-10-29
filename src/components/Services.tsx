"use client";

import { motion } from "framer-motion";
import { Brain, BarChart3, Eye, Cpu, Sparkles, TrendingUp } from "lucide-react";
import { SERVICES } from "@/lib/projects";
import SectionHeading from "./ui/SectionHeading";
import { staggerContainer, fadeInUp, VIEWPORT_ONCE } from "@/lib/animations";

const ICON_MAP: Record<string, React.ElementType> = {
  Brain, BarChart3, Eye, Cpu, Sparkles, TrendingUp,
};

export default function Services() {
  return (
    <section id="services" className="section" aria-label="What I work on">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="What I Work On"
          title="Technical"
          highlight="Interests"
          subtitle="Areas where I apply my skills to build intelligent, data-driven solutions."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] || Brain;
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="glass rounded-2xl p-6 group cursor-default relative overflow-hidden"
              >
                {/* Background hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${service.color}10, transparent 60%)` }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 relative z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}
                >
                  <Icon size={22} style={{ color: service.color }} />
                </div>

                {/* Content */}
                <h3 className="text-white font-bold text-base mb-3 relative z-10">
                  {service.title}
                </h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed relative z-10">
                  {service.description}
                </p>

                {/* Bottom accent */}
                <div
                  className="mt-5 h-0.5 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
