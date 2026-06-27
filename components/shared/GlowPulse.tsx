"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlowPulseProps {
  children: ReactNode;
  className?: string;
  color?: "teal" | "gold" | "coral";
}

const glowColors = {
  teal: "rgba(14, 124, 134, 0.35)",
  gold: "rgba(201, 162, 75, 0.35)",
  coral: "rgba(232, 105, 74, 0.35)",
};

const glowColorsFaint = {
  teal: "rgba(14, 124, 134, 0.0)",
  gold: "rgba(201, 162, 75, 0.0)",
  coral: "rgba(232, 105, 74, 0.0)",
};

export function GlowPulse({ children, className, color = "teal" }: GlowPulseProps) {
  return (
    <div className={`relative inline-flex ${className ?? ""}`}>
      <motion.div
        className="absolute inset-0 rounded-full blur-xl"
        animate={{
          boxShadow: [
            `0 0 20px 4px ${glowColorsFaint[color]}`,
            `0 0 50px 12px ${glowColors[color]}`,
            `0 0 20px 4px ${glowColorsFaint[color]}`,
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {children}
    </div>
  );
}
