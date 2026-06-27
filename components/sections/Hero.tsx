"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowPulse } from "@/components/shared/GlowPulse";
import { FloatAccent } from "@/components/shared/FloatAccent";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Atlantis Seafood Restaurant — the grand aquarium centrepiece and illuminated interior"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          style={{ filter: "brightness(0.45)" }}
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,15,18,0.5) 0%, rgba(5,46,69,0.3) 50%, rgba(10,15,18,0.85) 100%)",
          }}
        />
      </div>

      {/* Bioluminescent ambient glows */}
      <div
        className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: "var(--atlantis-teal)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ backgroundColor: "var(--atlantis-gold)" }}
      />

      {/* Floating accent fish silhouettes */}
      <FloatAccent
        className="absolute top-28 right-16 opacity-20 pointer-events-none hidden lg:block"
        amplitude={16}
        duration={5}
        delay={0}
      >
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none">
          <path
            d="M60 20 C60 20 40 5 5 8 C10 14 10 26 5 32 C40 35 60 20 60 20Z M60 20 C65 15 75 12 80 20 C75 28 65 25 60 20Z"
            fill="var(--atlantis-teal)"
          />
        </svg>
      </FloatAccent>
      <FloatAccent
        className="absolute top-40 left-20 opacity-15 pointer-events-none hidden lg:block"
        amplitude={10}
        duration={6}
        delay={1.5}
      >
        <svg width="50" height="25" viewBox="0 0 80 40" fill="none">
          <path
            d="M60 20 C60 20 40 5 5 8 C10 14 10 26 5 32 C40 35 60 20 60 20Z M60 20 C65 15 75 12 80 20 C75 28 65 25 60 20Z"
            fill="var(--atlantis-gold)"
          />
        </svg>
      </FloatAccent>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-8 pt-24 pb-16">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.45, 0, 0.55, 1] }}
        >
          <span
            className="text-xs font-semibold tracking-[0.3em] uppercase px-4 py-1.5 rounded-full border inline-block"
            style={{
              color: "var(--atlantis-teal)",
              borderColor: "rgba(14, 124, 134, 0.5)",
              backgroundColor: "rgba(14, 124, 134, 0.08)",
            }}
          >
            Malaysia&apos;s First Ocean-Themed Live Seafood Entertainment Venue
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.45, 0, 0.55, 1] }}
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tight"
          style={{ color: "var(--atlantis-pearl)" }}
        >
          Dive Into{" "}
          <span
            className="block"
            style={{
              color: "var(--atlantis-gold)",
              textShadow: "0 0 60px rgba(201, 162, 75, 0.4)",
            }}
          >
            Atlantis
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.45, 0, 0.55, 1] }}
          className="max-w-2xl text-lg md:text-xl leading-relaxed"
          style={{ color: "rgba(242, 237, 227, 0.8)" }}
        >
          A grand-hall aquarium centrepiece. Illuminated fish sculpted to swim through the air.
          Pork-free Cantonese live seafood. Live band performances until 3AM.
          Welcome to the most theatrical dining experience in Kuala Lumpur.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.45, 0, 0.55, 1] }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <GlowPulse color="gold">
            <Button
              asChild
              size="lg"
              className="font-semibold px-8 h-12 rounded-full text-base"
              style={{
                backgroundColor: "var(--atlantis-gold)",
                color: "var(--atlantis-ink)",
              }}
            >
              <Link href="/reservations">Reserve a Table</Link>
            </Button>
          </GlowPulse>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="font-semibold px-8 h-12 rounded-full text-base"
            style={{
              borderColor: "rgba(242, 237, 227, 0.4)",
              color: "var(--atlantis-pearl)",
              backgroundColor: "transparent",
            }}
          >
            <Link href="/menu">Explore the Menu</Link>
          </Button>
        </motion.div>

        {/* Key stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-4 text-center"
        >
          {[
            { value: "4.9★", label: "Guest Rating" },
            { value: "9", label: "Private Rooms" },
            { value: "11:30AM–3AM", label: "Daily" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span
                className="font-display font-bold text-2xl"
                style={{ color: "var(--atlantis-gold)" }}
              >
                {stat.value}
              </span>
              <span
                className="text-xs tracking-widest uppercase"
                style={{ color: "rgba(242, 237, 227, 0.5)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown
            className="w-6 h-6"
            style={{ color: "rgba(242, 237, 227, 0.4)" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
