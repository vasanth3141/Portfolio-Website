"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download, ChevronRight } from "lucide-react";
import { HERO_ROLES, HERO_DESCRIPTION, SITE_CONFIG } from "@/lib/constants";
import { heroTextVariants } from "@/lib/animations";

// Particle canvas
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      radius: number; opacity: number; color: string;
    }> = [];

    const colors = ["#6366F1", "#8B5CF6", "#06B6D4", "#a5b4fc"];
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Spawn particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(99,102,241,${0.15 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });

      animFrame = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

// Floating tech labels
const TECH_LABELS = [
  { label: "Python", x: "8%", y: "20%", color: "#6366F1", delay: 0 },
  { label: "OpenCV", x: "85%", y: "15%", color: "#a216b4ff", delay: 0.5 },
  { label: "Scikit-learn", x: "80%", y: "75%", color: "#a2ba1cff", delay: 1 },
  { label: "Power BI", x: "5%", y: "70%", color: "#F59E0B", delay: 1.5 },
  { label: "TensorFlow", x: "15%", y: "50%", color: "#10B981", delay: 0.8 },
  { label: "Pandas", x: "78%", y: "45%", color: "#a5b4fc", delay: 1.2 },
];

function FloatingTechLabels() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {TECH_LABELS.map((item, i) => (
        <motion.div
          key={item.label}
          className="absolute hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium"
          style={{
            left: item.x,
            top: item.y,
            background: `${item.color}18`,
            border: `1px solid ${item.color}40`,
            color: item.color,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: [0, 0.8, 0.6, 0.8],
            scale: 1,
            y: [0, -12, 0, -8, 0],
          }}
          transition={{
            opacity: { duration: 1.5, delay: item.delay },
            scale: { duration: 0.6, delay: item.delay },
            y: { duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay: item.delay },
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: item.color }} />
          {item.label}
        </motion.div>
      ))}
    </div>
  );
}

// Typing effect
function TypingRole() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = HERO_ROLES[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % HERO_ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span
      className="gradient-text typing-cursor font-bold"
      aria-label={HERO_ROLES[index]}
      aria-live="polite"
    >
      {displayed}
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 hero-glow" />
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #6366F1 0%, #8B5CF6 50%, transparent 70%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, #06B6D4 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <ParticleField />
      <FloatingTechLabels />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Badge */}
        <motion.div
          custom={0}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: "rgba(99,102,241,0.1)",
            border: "1px solid rgba(99,102,241,0.3)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[#a5b4fc]">
            Available for Opportunities
          </span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          custom={1}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="text-[#94A3B8] text-xl font-medium mb-2"
        >
          Hi, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1
          custom={2}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="text-5xl sm:text-7xl md:text-8xl font-black text-white mb-4 tracking-tight"
        >
          Vasanth{" "}
          <span className="gradient-text">B</span>
        </motion.h1>

        {/* Typing roles */}
        <motion.div
          custom={3}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 h-10 flex items-center justify-center gap-2"
        >
          <TypingRole />
        </motion.div>

        {/* Description */}
        <motion.p
          custom={4}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl mx-auto text-[#94A3B8] text-base sm:text-lg leading-relaxed mb-10"
        >
          {HERO_DESCRIPTION}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={5}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary group"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore My Projects
            <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href={SITE_CONFIG.resumeUrl}
            download="Vasanth_B_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Download size={16} className="group-hover:animate-bounce" />
            Download Resume
          </motion.a>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-secondary"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Mail size={16} />
            Contact Me
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          custom={6}
          variants={heroTextVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4 mt-10"
        >
          <a
            href={SITE_CONFIG.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            aria-label="GitHub profile"
          >
            <Github size={18} className="text-[#94A3B8] hover:text-white transition-colors" />
          </a>
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            aria-label="LinkedIn profile"
          >
            <Linkedin size={18} className="text-[#94A3B8] hover:text-white transition-colors" />
          </a>
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:scale-110"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
            aria-label="Send email"
          >
            <Mail size={18} className="text-[#94A3B8] hover:text-white transition-colors" />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-[#94A3B8]"
          >
            <span className="text-xs tracking-widest uppercase opacity-60">Scroll</span>
            <ArrowDown size={16} className="opacity-60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
