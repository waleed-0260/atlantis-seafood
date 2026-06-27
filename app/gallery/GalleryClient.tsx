"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  span?: "wide" | "tall" | "normal";
}

const images: GalleryImage[] = [
  { src: "/images/gallery/aquarium-interior.jpg", alt: "The grand aquarium centrepiece at Atlantis Seafood Restaurant", category: "Interior", span: "wide" },
  { src: "/images/gallery/octopus-sculpture.jpg", alt: "The lifelike octopus sculpture in the main hall", category: "Interior" },
  { src: "/images/gallery/ceiling-fish.jpg", alt: "Illuminated fish sculptures suspended from the ceiling", category: "Interior", span: "tall" },
  { src: "/images/gallery/main-hall.jpg", alt: "The grand dining hall at Atlantis Seafood Restaurant", category: "Interior", span: "wide" },
  { src: "/images/dishes/steamed-grouper.jpg", alt: "Live steamed grouper — Atlantis signature dish", category: "Dishes" },
  { src: "/images/dishes/salted-egg-crab.jpg", alt: "Salted egg mud crab — a Cantonese classic", category: "Dishes" },
  { src: "/images/dishes/garlic-oysters.jpg", alt: "Canadian oysters steamed with garlic sauce", category: "Dishes" },
  { src: "/images/dishes/abalone.jpg", alt: "South African abalone — the POPO seasonal special", category: "Dishes" },
  { src: "/images/dishes/butter-prawn.jpg", alt: "Butter prawn with egg floss and curry leaves", category: "Dishes" },
  { src: "/images/dishes/lobster.jpg", alt: "Live lobster — Atlantis house speciality", category: "Dishes" },
  { src: "/images/rooms/small-room.jpg", alt: "Small private room — up to 25 guests", category: "Private Rooms" },
  { src: "/images/rooms/medium-room.jpg", alt: "Medium private room — up to 35 guests", category: "Private Rooms" },
  { src: "/images/rooms/large-room.jpg", alt: "Large private room — up to 50 guests", category: "Private Rooms", span: "wide" },
  { src: "/images/entertainment/live-band.jpg", alt: "Live band performance at Atlantis Seafood", category: "Entertainment", span: "wide" },
  { src: "/images/entertainment/stage.jpg", alt: "The entertainment stage in the main hall", category: "Entertainment" },
  { src: "/images/gallery/aquarium-closeup.jpg", alt: "Marine life in the Atlantis aquarium centrepiece", category: "Interior" },
];

const categories = ["All", "Interior", "Dishes", "Private Rooms", "Entertainment"];

export function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const prev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filtered.length) % filtered.length);
  };

  const next = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filtered.length);
  };

  return (
    <div
      className="min-h-screen pt-32 pb-20"
      style={{
        background:
          "linear-gradient(180deg, var(--atlantis-ink) 0%, var(--atlantis-deep) 40%, var(--atlantis-ink) 100%)",
      }}
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center mb-14">
        <FadeReveal>
          <SectionHeading
            label="Gallery"
            title={
              <>
                See Atlantis{" "}
                <span style={{ color: "var(--atlantis-teal)" }}>Come Alive</span>
              </>
            }
            subtitle="The aquarium. The octopus. The fish that swim through the air. The private rooms. The food. The ambiance. A thousand words would not do justice — let the images speak."
          />
        </FadeReveal>
      </div>

      {/* Category filter */}
      <FadeReveal delay={0.15} className="flex flex-wrap justify-center gap-3 px-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
            style={{
              backgroundColor:
                activeCategory === cat
                  ? "var(--atlantis-teal)"
                  : "rgba(7, 61, 92, 0.4)",
              color:
                activeCategory === cat
                  ? "white"
                  : "rgba(242, 237, 227, 0.65)",
              border: "1px solid",
              borderColor:
                activeCategory === cat
                  ? "transparent"
                  : "rgba(14, 124, 134, 0.25)",
            }}
          >
            {cat}
          </button>
        ))}
      </FadeReveal>

      {/* Masonry-ish grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          >
            {filtered.map((img, i) => (
              <motion.button
                key={img.src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                onClick={() => openLightbox(i)}
                className="group relative w-full overflow-hidden rounded-xl cursor-pointer block"
                style={{
                  aspectRatio: img.span === "wide" ? "16/9" : img.span === "tall" ? "2/3" : "1/1",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                }}
                aria-label={`View: ${img.alt}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 30%, rgba(5,46,69,0.85) 100%)",
                  }}
                >
                  <span
                    className="text-xs font-semibold tracking-wider uppercase"
                    style={{ color: "var(--atlantis-pearl)" }}
                  >
                    {img.alt}
                  </span>
                </div>
              </motion.button>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(10, 15, 18, 0.95)" }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full"
              style={{
                backgroundColor: "rgba(7, 61, 92, 0.7)",
                color: "var(--atlantis-pearl)",
              }}
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full"
              style={{
                backgroundColor: "rgba(7, 61, 92, 0.7)",
                color: "var(--atlantis-pearl)",
              }}
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.45, 0, 0.55, 1] }}
              className="relative max-w-5xl max-h-[85vh] w-full h-full rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                fill
                sizes="(max-width: 1280px) 100vw, 80vw"
                className="object-contain"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <span
                  className="text-sm px-4 py-1.5 rounded-full"
                  style={{
                    backgroundColor: "rgba(10, 15, 18, 0.7)",
                    color: "var(--atlantis-pearl)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {filtered[lightboxIndex].alt}
                </span>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full"
              style={{
                backgroundColor: "rgba(7, 61, 92, 0.7)",
                color: "var(--atlantis-pearl)",
              }}
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <span
                className="text-sm"
                style={{ color: "rgba(242, 237, 227, 0.5)" }}
              >
                {lightboxIndex + 1} / {filtered.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
