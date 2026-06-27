"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface FloatAccentProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
}

export function FloatAccent({
  children,
  className,
  amplitude = 12,
  duration = 4,
  delay = 0,
}: FloatAccentProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude / 2, amplitude / 2, -amplitude / 2],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
