"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Tag, Star } from "lucide-react";
import { PROJECTS } from "@/lib/projects";
import SectionHeading from "./ui/SectionHeading";
import { staggerContainer, fadeInUp, VIEWPORT_ONCE } from "@/lib/animations";

const TAG_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Research: { bg: "rgba(245,158,11,0.12)", text: "#F59E0B", border: "rgba(245,158,11,0.3)" },
  "Computer Vision": { bg: "rgba(6,182,212,0.12)", text: "#06B6D4", border: "rgba(6,182,212,0.3)" },
  "Data Science": { bg: "rgba(16,185,129,0.12)", text: "#10B981", border: "rgba(16,185,129,0.3)" },
  "Machine Learning": { bg: "rgba(99,102,241,0.12)", text: "#6366F1", border: "rgba(99,102,241,0.3)" },
};

// AI-generated SVG illustrations for each project
const PROJECT_VISUALS: Record<string, React.ReactNode> = {
  "ar-vr-plant-anatomy": (
    <svg viewBox="0 0 280 160" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="g1a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="g1b" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      {/* Background */}
      <rect width="280" height="160" fill="#0B1120" rx="12" />
      {/* AR Frame */}
      <rect x="20" y="20" width="240" height="120" rx="8" fill="none" stroke="url(#g1b)" strokeWidth="1.5" strokeDasharray="6,3" />
      {/* Plant stem */}
      <line x1="140" y1="130" x2="140" y2="70" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
      {/* Leaves */}
      <ellipse cx="125" cy="95" rx="20" ry="10" fill="url(#g1a)" transform="rotate(-30,125,95)" opacity="0.8" />
      <ellipse cx="155" cy="85" rx="20" ry="10" fill="url(#g1a)" transform="rotate(30,155,85)" opacity="0.8" />
      <ellipse cx="120" cy="75" rx="15" ry="8" fill="#10B981" transform="rotate(-45,120,75)" opacity="0.6" />
      {/* Flower */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => (
        <ellipse key={i} cx={140 + 14 * Math.cos((deg * Math.PI) / 180)} cy={60 + 14 * Math.sin((deg * Math.PI) / 180)} rx="7" ry="5" fill="#F59E0B" opacity="0.7" transform={`rotate(${deg},${140 + 14 * Math.cos((deg * Math.PI) / 180)},${60 + 14 * Math.sin((deg * Math.PI) / 180)})`} />
      ))}
      <circle cx="140" cy="60" r="7" fill="#EF4444" opacity="0.85" />
      {/* Data overlays */}
      <rect x="25" y="25" width="60" height="16" rx="4" fill="rgba(6,182,212,0.15)" stroke="rgba(6,182,212,0.4)" strokeWidth="0.5" />
      <text x="55" y="36" textAnchor="middle" fill="#06B6D4" fontSize="8" fontFamily="monospace">AR/VR Mode</text>
      <rect x="195" y="110" width="60" height="16" rx="4" fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.4)" strokeWidth="0.5" />
      <text x="225" y="121" textAnchor="middle" fill="#10B981" fontSize="8" fontFamily="monospace">3D Model</text>
    </svg>
  ),
  "indian-sign-language": (
    <svg viewBox="0 0 280 160" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="g2a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect width="280" height="160" fill="#0B1120" rx="12" />
      {/* Camera frame */}
      <rect x="30" y="20" width="140" height="120" rx="6" fill="rgba(99,102,241,0.08)" stroke="rgba(99,102,241,0.3)" strokeWidth="1" />
      {/* Hand shape */}
      <path d="M90,110 L85,70 L88,68 L91,95 L91,55 L95,53 L96,90 L96,45 L100,43 L101,85 L101,48 L105,46 L106,85 L112,90 L115,110 Z" fill="url(#g2a)" opacity="0.8" />
      {/* Detection box */}
      <rect x="65" y="40" width="90" height="80" rx="4" fill="none" stroke="#06B6D4" strokeWidth="1.5" strokeDasharray="4,2" />
      <text x="110" y="37" textAnchor="middle" fill="#06B6D4" fontSize="7" fontFamily="monospace">DETECTED</text>
      {/* Confidence bars */}
      <rect x="185" y="30" width="70" height="100" rx="6" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
      <text x="220" y="45" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="monospace">CONFIDENCE</text>
      {[
        { label: "A", val: 93, color: "#10B981" },
        { label: "B", val: 4, color: "#94A3B8" },
        { label: "C", val: 2, color: "#94A3B8" },
        { label: "D", val: 1, color: "#94A3B8" },
      ].map(({ label, val, color }, i) => (
        <g key={label}>
          <text x="192" y={62 + i * 20} fill={color} fontSize="8" fontFamily="monospace">{label}</text>
          <rect x="202" y={55 + i * 20} width={(val / 100) * 45} height="8" rx="2" fill={color} opacity="0.7" />
          <text x="252" y={62 + i * 20} fill={color} fontSize="7" fontFamily="monospace">{val}%</text>
        </g>
      ))}
      <text x="110" y="140" textAnchor="middle" fill="#6366F1" fontSize="8" fontFamily="monospace">93% Accuracy · &lt;150ms</text>
    </svg>
  ),
  "academic-performance": (
    <svg viewBox="0 0 280 160" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="g3a" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <linearGradient id="g3b" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#a5b4fc" />
        </linearGradient>
      </defs>
      <rect width="280" height="160" fill="#0B1120" rx="12" />
      <text x="20" y="30" fill="#94A3B8" fontSize="9" fontFamily="monospace">Academic Performance Dashboard</text>
      {/* Bar chart */}
      {[
        { x: 30, h: 60, label: "Math", c: "url(#g3a)" },
        { x: 60, h: 80, label: "Sci", c: "url(#g3a)" },
        { x: 90, h: 50, label: "Eng", c: "url(#g3b)" },
        { x: 120, h: 90, label: "CS", c: "url(#g3a)" },
        { x: 150, h: 65, label: "Data", c: "url(#g3b)" },
        { x: 180, h: 75, label: "AI", c: "url(#g3a)" },
      ].map(({ x, h, label, c }) => (
        <g key={label}>
          <rect x={x} y={120 - h} width="22" height={h} rx="3" fill={c} opacity="0.8" />
          <text x={x + 11} y="132" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="monospace">{label}</text>
        </g>
      ))}
      {/* KPI cards */}
      <rect x="220" y="40" width="50" height="35" rx="5" fill="rgba(99,102,241,0.12)" stroke="rgba(99,102,241,0.3)" strokeWidth="0.5" />
      <text x="245" y="55" textAnchor="middle" fill="#a5b4fc" fontSize="14" fontWeight="bold" fontFamily="monospace">82%</text>
      <text x="245" y="68" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="monospace">Precision</text>
      <rect x="220" y="85" width="50" height="35" rx="5" fill="rgba(16,185,129,0.12)" stroke="rgba(16,185,129,0.3)" strokeWidth="0.5" />
      <text x="245" y="100" textAnchor="middle" fill="#10B981" fontSize="12" fontWeight="bold" fontFamily="monospace">500+</text>
      <text x="245" y="113" textAnchor="middle" fill="#94A3B8" fontSize="7" fontFamily="monospace">Students</text>
    </svg>
  ),
  "ml-model-development": (
    <svg viewBox="0 0 280 160" className="w-full h-full" aria-hidden="true">
      <defs>
        <linearGradient id="g4a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <rect width="280" height="160" fill="#0B1120" rx="12" />
      {/* Neural network nodes */}
      {[
        { cx: 40, cy: 50 }, { cx: 40, cy: 80 }, { cx: 40, cy: 110 },
        { cx: 110, cy: 40 }, { cx: 110, cy: 65 }, { cx: 110, cy: 90 }, { cx: 110, cy: 115 },
        { cx: 180, cy: 55 }, { cx: 180, cy: 85 }, { cx: 180, cy: 115 },
        { cx: 240, cy: 70 }, { cx: 240, cy: 100 },
      ].map((node, i) => (
        <circle key={i} cx={node.cx} cy={node.cy} r="8" fill="url(#g4a)" opacity="0.7" />
      ))}
      {/* Connections */}
      {[
        [40,50,110,40],[40,50,110,65],[40,50,110,90],
        [40,80,110,65],[40,80,110,90],[40,80,110,115],
        [40,110,110,90],[40,110,110,115],
        [110,40,180,55],[110,65,180,55],[110,65,180,85],
        [110,90,180,85],[110,90,180,115],[110,115,180,115],
        [180,55,240,70],[180,85,240,70],[180,85,240,100],[180,115,240,100],
      ].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(99,102,241,0.25)" strokeWidth="0.8" />
      ))}
      {/* Metrics */}
      <rect x="25" y="135" width="230" height="18" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="0.5" />
      {[
        { label: "Accuracy", val: "+15%", color: "#10B981" },
        { label: "Data Quality", val: "+25%", color: "#06B6D4" },
        { label: "Precision", val: "High", color: "#6366F1" },
      ].map(({ label, val, color }, i) => (
        <g key={label}>
          <text x={45 + i * 78} y="148" fill="#94A3B8" fontSize="7" fontFamily="monospace">{label}:</text>
          <text x={85 + i * 78} y="148" fill={color} fontSize="7" fontFamily="monospace" fontWeight="bold">{val}</text>
        </g>
      ))}
    </svg>
  ),
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="section"
      style={{ background: "linear-gradient(180deg, transparent 0%, rgba(139,92,246,0.03) 50%, transparent 100%)" }}
      aria-label="Featured projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Projects"
          title="Featured"
          highlight="Work"
          subtitle="A selection of AI/ML and data science projects showcasing practical applications."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="grid sm:grid-cols-2 gap-6"
        >
          {PROJECTS.map((project) => {
            const tagStyle = TAG_COLORS[project.tag || ""] || TAG_COLORS["Machine Learning"];
            return (
              <motion.article
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="glass rounded-2xl overflow-hidden project-card flex flex-col"
                aria-label={project.title}
              >
                {/* Visual */}
                <div className="relative h-44 overflow-hidden"
                  style={{ background: "rgba(99,102,241,0.05)" }}>
                  {PROJECT_VISUALS[project.id]}

                  {/* Tag */}
                  <div className="absolute top-3 right-3">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
                      style={{ background: tagStyle.bg, color: tagStyle.text, border: `1px solid ${tagStyle.border}` }}
                    >
                      <Tag size={10} />
                      {project.tag}
                    </span>
                  </div>

                  {/* Highlight badge */}
                  {project.highlight && (
                    <div className="absolute bottom-3 left-3">
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{ background: "rgba(245,158,11,0.15)", color: "#F59E0B", border: "1px solid rgba(245,158,11,0.3)" }}>
                        <Star size={10} fill="currentColor" />
                        {project.highlight}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-white font-bold text-lg mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[#94A3B8] text-sm leading-relaxed mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 mb-5">
                    {project.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-[#94A3B8] text-xs">
                        <span className="w-1 h-1 rounded-full bg-[#6366F1] mt-1.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 mt-auto">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium transition-all"
                        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#94A3B8" }}
                      >
                        <Github size={15} />
                        GitHub
                      </a>
                    ) : (
                      <div
                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium opacity-40 cursor-not-allowed"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", color: "#94A3B8" }}
                        title="Repository coming soon"
                      >
                        <Github size={15} />
                        Coming Soon
                      </div>
                    )}
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 btn-primary py-2 text-sm justify-center"
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </a>
                    ) : null}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
