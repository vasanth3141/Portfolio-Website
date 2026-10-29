"use client";

import { motion } from "framer-motion";
import { Code2, Shield, Leaf, BookOpen } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/projects";
import SectionHeading from "./ui/SectionHeading";
import { staggerContainer, fadeInUp, VIEWPORT_ONCE } from "@/lib/animations";

const ICON_MAP: Record<string, React.ElementType> = {
  Code2, Shield, Leaf, BookOpen,
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="section"
      style={{ background: "linear-gradient(180deg, transparent 0%, rgba(6,182,212,0.03) 50%, transparent 100%)" }}
      aria-label="Certifications and achievements"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Achievements"
          title="Certifications &"
          highlight="Recognition"
          subtitle="Professional certifications and academic achievements that reflect my commitment to continuous learning."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {CERTIFICATIONS.map((cert) => {
            const Icon = ICON_MAP[cert.icon] || BookOpen;
            return (
              <motion.div
                key={cert.id}
                variants={fadeInUp}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-5 cert-card flex flex-col"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}25` }}
                >
                  <Icon size={22} style={{ color: cert.color }} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-[#94A3B8] text-xs font-medium mb-1">{cert.issuer}</p>
                  <h3 className="text-white font-bold text-sm leading-snug mb-2">
                    {cert.title}
                  </h3>
                  {cert.score && (
                    <div
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold"
                      style={{ background: `${cert.color}15`, color: cert.color }}
                    >
                      🏆 {cert.score}
                    </div>
                  )}
                </div>

                {/* Bottom line */}
                <div
                  className="mt-4 h-0.5 w-full rounded-full"
                  style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
                />

                {/* Verify link placeholder */}
                {cert.verifyUrl ? (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 text-xs transition-colors"
                    style={{ color: cert.color }}
                  >
                    Verify Certificate →
                  </a>
                ) : (
                  <p className="mt-3 text-xs text-[#94A3B8] opacity-50">
                    Credential on file
                  </p>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
