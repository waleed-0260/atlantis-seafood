import Image from "next/image";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FloatAccent } from "@/components/shared/FloatAccent";

const highlights = [
  {
    icon: "🐠",
    title: "Grand-Hall Aquarium",
    desc: "A breathtaking aquarium centrepiece at the heart of the dining hall, filled with vibrant marine life — the soul of Atlantis.",
  },
  {
    icon: "🐙",
    title: "Lifelike Octopus Sculpture",
    desc: "A majestic sculptural centrepiece that anchors the room's underwater narrative — unmistakable, theatrical, unforgettable.",
  },
  {
    icon: "✨",
    title: "Swimming Ceiling Fish",
    desc: "Illuminated fish sculptures hang from the ceiling, appearing to swim through the air and casting an ethereal bioluminescent glow across the entire hall.",
  },
];

export function Welcome() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--atlantis-ink) 0%, var(--atlantis-deep) 50%, var(--atlantis-ink) 100%)",
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: "var(--atlantis-teal)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text column */}
          <div className="flex flex-col gap-8">
            <FadeReveal direction="right">
              <SectionHeading
                label="Welcome to Atlantis"
                title={
                  <>
                    A Mythical World{" "}
                    <span style={{ color: "var(--atlantis-teal)" }}>
                      Beneath the Sea
                    </span>
                  </>
                }
                align="left"
              />
            </FadeReveal>

            <FadeReveal direction="right" delay={0.15}>
              <p
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "rgba(242, 237, 227, 0.7)" }}
              >
                Opened July 2025, Atlantis Seafood Restaurant & Bar is Malaysia&apos;s
                first — and only — ocean-themed live seafood entertainment venue.
                Located on the Ground Floor of Life Centre, Kuala Lumpur, we are
                operated by <strong style={{ color: "var(--atlantis-pearl)" }}>The Golden Years Restaurant and Bar</strong>,
                with our kitchen helmed by the celebrated{" "}
                <strong style={{ color: "var(--atlantis-pearl)" }}>Unique Seafood Group of Restaurants</strong>.
              </p>
            </FadeReveal>

            <FadeReveal direction="right" delay={0.25}>
              <p
                className="text-base leading-relaxed"
                style={{ color: "rgba(242, 237, 227, 0.65)" }}
              >
                Step through our doors and descend into a grand underwater world.
                The moment you enter, the boundary between above and below dissolves —
                the restaurant isn&apos;t inspired by the ocean, it <em>is</em> the ocean,
                brought to life with a commitment to spectacle that makes every
                visit feel like an occasion.
              </p>
            </FadeReveal>

            {/* Highlights */}
            <div className="flex flex-col gap-4 mt-2">
              {highlights.map((item, i) => (
                <FadeReveal key={item.title} direction="right" delay={0.3 + i * 0.1}>
                  <div
                    className="flex items-start gap-4 p-4 rounded-xl border"
                    style={{
                      backgroundColor: "rgba(14, 124, 134, 0.08)",
                      borderColor: "rgba(14, 124, 134, 0.2)",
                    }}
                  >
                    <span className="text-2xl mt-0.5 flex-shrink-0" aria-hidden>
                      {item.icon}
                    </span>
                    <div>
                      <h3
                        className="font-display font-semibold text-sm mb-1"
                        style={{ color: "var(--atlantis-gold)" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(242, 237, 227, 0.65)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeReveal>
              ))}
            </div>
          </div>

          {/* Image column */}
          <FadeReveal direction="left" delay={0.1}>
            <div className="relative">
              <div
                className="relative rounded-2xl overflow-hidden aspect-[4/5]"
                style={{
                  boxShadow:
                    "0 0 60px rgba(14, 124, 134, 0.25), 0 25px 50px rgba(0,0,0,0.5)",
                }}
              >
                <Image
                  src="/images/gallery/aquarium-interior.jpg"
                  alt="The grand aquarium centrepiece at Atlantis Seafood Restaurant"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 60%, rgba(10,15,18,0.6) 100%)",
                  }}
                />
              </div>

              {/* Floating badge */}
              <FloatAccent
                className="absolute -bottom-6 -left-6 hidden sm:block"
                amplitude={8}
                duration={4}
              >
                <div
                  className="px-5 py-4 rounded-2xl border"
                  style={{
                    backgroundColor: "rgba(10, 15, 18, 0.95)",
                    borderColor: "rgba(201, 162, 75, 0.4)",
                    boxShadow: "0 0 30px rgba(201, 162, 75, 0.15)",
                  }}
                >
                  <div
                    className="font-display font-bold text-2xl"
                    style={{ color: "var(--atlantis-gold)" }}
                  >
                    2025
                  </div>
                  <div
                    className="text-xs tracking-wider uppercase mt-0.5"
                    style={{ color: "rgba(242, 237, 227, 0.6)" }}
                  >
                    Est. July 2025
                  </div>
                </div>
              </FloatAccent>

              {/* Border glow */}
              <div
                className="absolute -inset-1 rounded-2xl -z-10 blur-sm opacity-30"
                style={{ backgroundColor: "var(--atlantis-teal)" }}
              />
            </div>
          </FadeReveal>
        </div>
      </div>
    </section>
  );
}
