"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Code2 } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative"
      style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
      aria-label="Site footer"
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #6366F1, #06B6D4, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg,#6366F1,#8B5CF6)" }}
              >
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-bold text-lg text-white">
                Vasanth <span className="gradient-text">B</span>
              </span>
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs mb-5">
              AI/ML Engineer & Data Science Graduate passionate about building intelligent solutions for real-world problems.
            </p>
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                aria-label="GitHub"
              >
                <Github size={16} className="text-[#94A3B8] hover:text-white transition-colors" />
              </a>
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                aria-label="LinkedIn"
              >
                <Linkedin size={16} className="text-[#94A3B8] hover:text-white transition-colors" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                aria-label="Email"
              >
                <Mail size={16} className="text-[#94A3B8] hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-[#94A3B8] text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Contact</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-[#94A3B8] text-sm hover:text-white transition-colors break-all"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="text-[#94A3B8] text-sm">{SITE_CONFIG.location}</li>
              <li>
                <a
                  href={SITE_CONFIG.resumeUrl}
                  download="Vasanth_B_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-1 text-sm font-medium transition-colors"
                  style={{ color: "#6366F1" }}
                >
                  Download Resume →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-[#94A3B8] text-xs">
            © 2026 Vasanth B. All rights reserved.
          </p>
          <p className="text-[#94A3B8] text-xs">
            Built with{" "}
            <span className="gradient-text font-semibold">Next.js · Framer Motion · Tailwind CSS</span>
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-9 h-9 rounded-lg flex items-center justify-center transition-all"
            style={{
              background: "linear-gradient(135deg,#6366F1,#8B5CF6)",
              boxShadow: "0 0 20px rgba(99,102,241,0.3)",
            }}
            aria-label="Back to top"
          >
            <ArrowUp size={16} className="text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
