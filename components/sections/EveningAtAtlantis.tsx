import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

const evening = [
  { time: "11:30 AM", label: "Doors Open", desc: "Lunch service begins — fresh live seafood selections, Cantonese classics, and the full menu." },
  { time: "6:00 PM", label: "Evening Service", desc: "Dinner service with the full menu and the finest live seafood selections, beautifully presented." },
  { time: "8:00 PM", label: "Live Band", desc: "The band takes the stage. Music fills the grand hall — romantic, energetic, and entirely alive." },
  { time: "3:00 AM", label: "Last Orders", desc: "Atlantis is a true late-night destination. The kitchen and bar stay open until 3AM daily." },
];

export function EveningAtAtlantis() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, var(--atlantis-ink) 0%, #031d2e 100%)",
      }}
    >
      {/* Ambient glows */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: "var(--atlantis-gold)" }}
      />
      <div
        className="absolute top-1/2 left-0 w-[300px] h-[300px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: "var(--atlantis-teal)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <FadeReveal direction="right">
            <div className="relative order-2 lg:order-1">
              <div
                className="relative rounded-2xl overflow-hidden aspect-[3/4]"
                style={{
                  boxShadow:
                    "0 0 60px rgba(201, 162, 75, 0.2), 0 25px 50px rgba(0,0,0,0.5)",
                }}
              >
                <Image
                  src="/images/entertainment/live-band.jpg"
                  alt="Live band performance at Atlantis Seafood Restaurant"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(10,15,18,0.7) 100%)",
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: "rgba(201, 162, 75, 0.15)",
                      borderColor: "rgba(201, 162, 75, 0.5)",
                      color: "var(--atlantis-gold)",
                      border: "1px solid rgba(201, 162, 75, 0.4)",
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                    Live Music Nightly from 8PM
                  </div>
                </div>
              </div>
            </div>
          </FadeReveal>

          {/* Text */}
          <div className="flex flex-col gap-8 order-1 lg:order-2">
            <FadeReveal direction="left">
              <SectionHeading
                label="An Evening at Atlantis"
                title={
                  <>
                    Dinner, Live Music,{" "}
                    <span style={{ color: "var(--atlantis-gold)" }}>
                      & Late Nights
                    </span>
                  </>
                }
                align="left"
                subtitle="Atlantis isn't just a restaurant — it's the evening. From a leisurely lunch to a lively late-night supper with a live band playing, this is where Kuala Lumpur's most memorable nights unfold."
              />
            </FadeReveal>

            {/* Timeline */}
            <div className="flex flex-col gap-0 relative">
              <div
                className="absolute left-[19px] top-2 bottom-2 w-px"
                style={{ backgroundColor: "rgba(14, 124, 134, 0.25)" }}
              />
              {evening.map((item, i) => (
                <FadeReveal key={item.time} direction="left" delay={0.1 + i * 0.1}>
                  <div className="flex gap-5 pb-6">
                    <div
                      className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center text-[10px] font-bold mt-0.5"
                      style={{
                        backgroundColor: "var(--atlantis-ink)",
                        borderColor: "var(--atlantis-teal)",
                        color: "var(--atlantis-teal)",
                      }}
                    >
                      {i + 1}
                    </div>
                    <div className="flex flex-col gap-1 pt-1.5">
                      <div className="flex items-baseline gap-3">
                        <span
                          className="font-display font-semibold text-sm"
                          style={{ color: "var(--atlantis-gold)" }}
                        >
                          {item.time}
                        </span>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: "var(--atlantis-pearl)" }}
                        >
                          {item.label}
                        </span>
                      </div>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: "rgba(242, 237, 227, 0.6)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </FadeReveal>
              ))}
            </div>

            <FadeReveal direction="left" delay={0.5}>
              <Button
                asChild
                className="w-fit font-semibold px-6 h-11 rounded-full"
                style={{
                  backgroundColor: "var(--atlantis-teal)",
                  color: "white",
                }}
              >
                <Link href="/entertainment">Discover Live Entertainment</Link>
              </Button>
            </FadeReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
