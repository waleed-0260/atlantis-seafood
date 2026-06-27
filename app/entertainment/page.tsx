import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FloatAccent } from "@/components/shared/FloatAccent";
import { GlowPulse } from "@/components/shared/GlowPulse";

export const metadata: Metadata = {
  title: "Live Entertainment | Atlantis Seafood Restaurant & Bar",
  description:
    "Live band performances nightly from 8PM at Atlantis Seafood, KL. A romantic, energetic atmosphere for the perfect evening out — open until 3AM daily.",
};

const schedule = [
  { day: "Monday – Thursday", time: "8:00 PM – 12:00 AM", notes: "Resident band sets" },
  { day: "Friday & Saturday", time: "8:00 PM – 2:00 AM", notes: "Extended live sets + special guests" },
  { day: "Sunday", time: "7:30 PM – 11:30 PM", notes: "Jazz & classics evening" },
];

const highlights = [
  {
    title: "Live Band Nightly",
    desc: "Our resident band performs every evening, filling the grand hall with live music — from romantic ballads to upbeat contemporary sets that keep the energy alive through the night.",
    icon: "🎶",
  },
  {
    title: "The Grand Hall Atmosphere",
    desc: "Dine surrounded by the glow of the aquarium centrepiece, ceiling fish sculptures casting ethereal light, and the energy of a live performance. Every table has a front-row feeling.",
    icon: "🐠",
  },
  {
    title: "Karaoke in Private Rooms",
    desc: "Prefer your own stage? Each private room is equipped with a 75\"–100\" smart TV and sound system, perfect for karaoke nights with family, friends, or your team.",
    icon: "🎤",
  },
  {
    title: "Open Until 3AM",
    desc: "The night is long at Atlantis. With kitchen service until late and entertainment running through the small hours, we're Kuala Lumpur's premier late-night dining destination.",
    icon: "🌙",
  },
];

export default function EntertainmentPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, var(--atlantis-ink) 0%, var(--atlantis-deep) 50%, var(--atlantis-ink) 100%)",
      }}
    >
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-3xl opacity-12 pointer-events-none"
          style={{ backgroundColor: "var(--atlantis-gold)" }}
        />

        {/* Floating accents */}
        <FloatAccent className="absolute top-32 right-12 opacity-15 pointer-events-none hidden lg:block" amplitude={14} duration={5}>
          <div className="w-16 h-16 rounded-full border-2" style={{ borderColor: "var(--atlantis-gold)" }} />
        </FloatAccent>
        <FloatAccent className="absolute bottom-16 left-16 opacity-10 pointer-events-none hidden lg:block" amplitude={10} duration={6} delay={1}>
          <div className="w-10 h-10 rounded-full border-2" style={{ borderColor: "var(--atlantis-teal)" }} />
        </FloatAccent>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeReveal>
            <SectionHeading
              label="Live Entertainment"
              title={
                <>
                  Where the Music{" "}
                  <span style={{ color: "var(--atlantis-gold)" }}>Never Stops</span>
                </>
              }
              subtitle="Atlantis is as much a live entertainment venue as it is a restaurant. Every evening, our resident band transforms dinner into a full night out — romantic, energetic, and impossible to leave early."
            />
          </FadeReveal>

          <FadeReveal delay={0.2} className="mt-10">
            <GlowPulse color="gold" className="inline-flex">
              <Button
                asChild
                size="lg"
                className="font-semibold px-8 h-12 rounded-full"
                style={{
                  backgroundColor: "var(--atlantis-gold)",
                  color: "var(--atlantis-ink)",
                }}
              >
                <Link href="/reservations">Book for Tonight</Link>
              </Button>
            </GlowPulse>
          </FadeReveal>
        </div>
      </section>

      {/* Main image */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <FadeReveal>
          <div
            className="relative rounded-3xl overflow-hidden aspect-video"
            style={{
              boxShadow: "0 0 80px rgba(201, 162, 75, 0.2), 0 30px 60px rgba(0,0,0,0.5)",
            }}
          >
            <Image
              src="/images/entertainment/live-band.jpg"
              alt="Live band performance at Atlantis Seafood Restaurant & Bar"
              fill
              sizes="(max-width: 1280px) 100vw, 1152px"
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(180deg, transparent 50%, rgba(10,15,18,0.6) 100%)",
              }}
            />
            <div className="absolute bottom-6 left-6">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: "rgba(201, 162, 75, 0.15)",
                  border: "1px solid rgba(201, 162, 75, 0.4)",
                  color: "var(--atlantis-gold)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                Live Music Nightly from 8PM
              </div>
            </div>
          </div>
        </FadeReveal>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((h, i) => (
            <FadeReveal key={h.title} delay={0.08 * i}>
              <div
                className="p-7 rounded-2xl border flex gap-5"
                style={{
                  backgroundColor: "rgba(7, 61, 92, 0.35)",
                  borderColor: "rgba(14, 124, 134, 0.2)",
                }}
              >
                <span className="text-3xl flex-shrink-0 mt-0.5">{h.icon}</span>
                <div>
                  <h3
                    className="font-display font-bold text-lg mb-2"
                    style={{ color: "var(--atlantis-pearl)" }}
                  >
                    {h.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(242, 237, 227, 0.65)" }}
                  >
                    {h.desc}
                  </p>
                </div>
              </div>
            </FadeReveal>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section
        className="py-20 border-y"
        style={{ borderColor: "rgba(14, 124, 134, 0.15)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeReveal className="text-center mb-12">
            <SectionHeading
              label="Performance Schedule"
              title="Live Music Schedule"
              subtitle="Schedule is subject to change — follow us on Instagram for updates and special event announcements."
            />
          </FadeReveal>

          <div className="flex flex-col gap-4">
            {schedule.map((s, i) => (
              <FadeReveal key={s.day} delay={0.1 * i}>
                <div
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl border"
                  style={{
                    backgroundColor: "rgba(7, 61, 92, 0.3)",
                    borderColor: "rgba(14, 124, 134, 0.18)",
                  }}
                >
                  <div>
                    <div
                      className="font-display font-semibold text-base"
                      style={{ color: "var(--atlantis-pearl)" }}
                    >
                      {s.day}
                    </div>
                    <div
                      className="text-sm mt-1"
                      style={{ color: "rgba(242, 237, 227, 0.55)" }}
                    >
                      {s.notes}
                    </div>
                  </div>
                  <div
                    className="font-display font-bold text-lg flex-shrink-0"
                    style={{ color: "var(--atlantis-gold)" }}
                  >
                    {s.time}
                  </div>
                </div>
              </FadeReveal>
            ))}
          </div>

          <FadeReveal delay={0.35} className="mt-8 text-center">
            <p
              className="text-xs"
              style={{ color: "rgba(242, 237, 227, 0.38)" }}
            >
              * All times indicative. Schedule subject to change for special events. Contact us to enquire about private entertainment bookings.
            </p>
          </FadeReveal>
        </div>
      </section>

      {/* Karaoke CTA */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <FadeReveal>
          <div
            className="rounded-3xl border p-10 md:p-16 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(7,61,92,0.6) 0%, rgba(5,46,69,0.8) 100%)",
              borderColor: "rgba(201, 162, 75, 0.3)",
            }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full blur-3xl opacity-15 pointer-events-none"
              style={{ backgroundColor: "var(--atlantis-gold)" }}
            />
            <div className="relative z-10">
              <span
                className="text-4xl block mb-4"
                aria-hidden
              >
                🎤
              </span>
              <h2
                className="font-display font-bold text-3xl md:text-4xl mb-4"
                style={{ color: "var(--atlantis-pearl)" }}
              >
                Your Own Private Stage
              </h2>
              <p
                className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
                style={{ color: "rgba(242, 237, 227, 0.7)" }}
              >
                Want to be the performer? Each private room features a large smart TV
                and sound system ready for karaoke — your own mini-stage within
                our underwater world. Reserve a room for an unforgettable night
                with friends, family, or your team.
              </p>
              <Button
                asChild
                className="font-semibold px-8 h-12 rounded-full"
                style={{
                  backgroundColor: "var(--atlantis-gold)",
                  color: "var(--atlantis-ink)",
                }}
              >
                <Link href="/private-rooms">View Private Rooms</Link>
              </Button>
            </div>
          </div>
        </FadeReveal>
      </section>
    </div>
  );
}
