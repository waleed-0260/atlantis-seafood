"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useUIStore } from "@/lib/store";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/entertainment", label: "Entertainment" },
  { href: "/private-rooms", label: "Private Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const { mobileNavOpen, setMobileNavOpen } = useUIStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.45, 0, 0.55, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled
          ? "rgba(10, 15, 18, 0.97)"
          : "rgba(10, 15, 18, 0.75)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled
          ? "1px solid rgba(14, 124, 134, 0.25)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-none group">
            <span
              className="font-display font-bold text-lg lg:text-xl tracking-wide transition-colors"
              style={{ color: "var(--atlantis-gold)" }}
            >
              ATLANTIS
            </span>
            <span
              className="text-[9px] tracking-[0.3em] uppercase font-light transition-colors"
              style={{ color: "var(--atlantis-teal)" }}
            >
              Seafood & Bar
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-sm font-medium tracking-wide transition-colors duration-300 group"
                  style={{
                    color: active
                      ? "var(--atlantis-gold)"
                      : "var(--atlantis-pearl)",
                  }}
                >
                  {link.label}
                  <span
                    className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                    style={{
                      backgroundColor: "var(--atlantis-gold)",
                      width: active ? "100%" : "0%",
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+60321100888"
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: "var(--atlantis-teal)" }}
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+60 3-2110 0888</span>
            </a>
            <Button
              asChild
              className="font-semibold text-sm px-5 h-9 rounded-full"
              style={{
                backgroundColor: "var(--atlantis-gold)",
                color: "var(--atlantis-ink)",
              }}
            >
              <Link href="/reservations">Reserve a Table</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 rounded-md transition-colors"
                style={{ color: "var(--atlantis-pearl)" }}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-72 border-l flex flex-col gap-0 p-0"
              style={{
                backgroundColor: "var(--atlantis-ink)",
                borderColor: "rgba(14, 124, 134, 0.3)",
              }}
            >
              <div className="flex items-center justify-between p-6 border-b" style={{ borderColor: "rgba(14, 124, 134, 0.2)" }}>
                <div className="flex flex-col leading-none">
                  <span className="font-display font-bold text-lg" style={{ color: "var(--atlantis-gold)" }}>
                    ATLANTIS
                  </span>
                  <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: "var(--atlantis-teal)" }}>
                    Seafood & Bar
                  </span>
                </div>
                <button
                  onClick={() => setMobileNavOpen(false)}
                  style={{ color: "var(--atlantis-pearl)" }}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col px-6 py-8 gap-1">
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileNavOpen(false)}
                      className="py-3 px-4 rounded-lg text-base font-medium transition-all"
                      style={{
                        color: active ? "var(--atlantis-gold)" : "var(--atlantis-pearl)",
                        backgroundColor: active
                          ? "rgba(201, 162, 75, 0.1)"
                          : "transparent",
                      }}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto p-6 border-t flex flex-col gap-3" style={{ borderColor: "rgba(14, 124, 134, 0.2)" }}>
                <a
                  href="tel:+60321100888"
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "var(--atlantis-teal)" }}
                >
                  <Phone className="w-4 h-4" />
                  +60 3-2110 0888
                </a>
                <Button
                  asChild
                  className="w-full font-semibold rounded-full"
                  style={{
                    backgroundColor: "var(--atlantis-gold)",
                    color: "var(--atlantis-ink)",
                  }}
                >
                  <Link href="/reservations" onClick={() => setMobileNavOpen(false)}>
                    Reserve a Table
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
