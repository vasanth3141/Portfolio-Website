"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
  gradient?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = false,
  onClick,
  style,
  gradient = false,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 relative overflow-hidden ${hover ? "glass-hover cursor-pointer" : ""} ${className}`}
      style={style}
      onClick={onClick}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {gradient && (
        <div
          className="absolute inset-0 opacity-5 rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, #6366F1 0%, #8B5CF6 50%, #06B6D4 100%)",
          }}
        />
      )}
      {children}
    </motion.div>
  );
}
