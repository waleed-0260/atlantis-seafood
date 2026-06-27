import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PrivateRoomCard } from "@/components/shared/PrivateRoomCard";
import { GlowPulse } from "@/components/shared/GlowPulse";

export const metadata: Metadata = {
  title: "Private Rooms | Atlantis Seafood Restaurant & Bar",
  description:
    "9 elegantly appointed private rooms at Atlantis Seafood KL — Small (25 pax), Medium (35 pax), and Large (50 pax). Each with a pool table, smart TV, lounge sofas, and private restroom. Perfect for birthdays, corporate events, and karaoke.",
};

const rooms = [
  {
    size: "Small" as const,
    capacity: 25,
    tvSize: '75"',
    imageSrc: "/images/rooms/small-room.jpg",
    highlight: "Intimate and elegantly appointed — the perfect setting for birthdays, anniversary dinners, and small family celebrations.",
    useCases: ["Birthday Dinner", "Anniversary", "Family Gathering", "Karaoke Night"],
  },
  {
    size: "Medium" as const,
    capacity: 35,
    tvSize: '86"',
    imageSrc: "/images/rooms/medium-room.jpg",
    highlight: "The most versatile room — equally suited for a lively corporate dinner or an intimate celebration with extended family.",
    useCases: ["Corporate Event", "Team Dinner", "Extended Family", "Private Karaoke"],
  },
  {
    size: "Large" as const,
    capacity: 50,
    tvSize: '100"',
    imageSrc: "/images/rooms/large-room.jpg",
    highlight: "Our grandest room — for grand occasions. The 100\" smart TV commands the space, perfect for presentations and performances.",
    useCases: ["Grand Celebration", "Product Launch", "Company Dinner", "Wedding Banquet"],
  },
];

const faqs = [
  {
    q: "Can I bring my own cake?",
    a: "Yes — outside cakes are welcome in our private rooms for celebrations. A RM 30 per person corkage fee applies. Please inform us in advance.",
  },
  {
    q: "Is there a minimum spend for private rooms?",
    a: "Yes, each room has a minimum food and beverage spend. Please contact us for current minimums as they vary by room size and date.",
  },
  {
    q: "Can I set up a karaoke system?",
    a: "All private rooms are equipped with a large smart TV and sound system. Our team can assist with karaoke apps and connections. Please enquire in advance.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend at least 3–7 days for weekend bookings. For large events (30+ guests) or special occasions, 2–4 weeks is advisable.",
  },
  {
    q: "Are private rooms suitable for corporate presentations?",
    a: "Absolutely. The smart TV in each room supports HDMI and wireless screen mirroring, making our rooms ideal for presentations, team briefings, and launch events.",
  },
  {
    q: "What is your deposit policy?",
    a: "A deposit is required to secure private room bookings. Our team will provide the deposit amount and payment details upon enquiry.",
  },
];

export default function PrivateRoomsPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(180deg, var(--atlantis-ink) 0%, var(--atlantis-deep) 40%, var(--atlantis-ink) 100%)",
      }}
    >
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ backgroundColor: "var(--atlantis-gold)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-3xl opacity-10 pointer-events-none"
          style={{ backgroundColor: "var(--atlantis-teal)" }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeReveal>
            <SectionHeading
              label="Private Rooms & Events"
              title={
                <>
                  Your Own Underwater{" "}
                  <span style={{ color: "var(--atlantis-gold)" }}>Palace</span>
                </>
              }
              subtitle="Nine elegantly appointed private rooms — each a luxurious, self-contained space designed for dining, celebration, and entertainment. Birthdays, corporate events, karaoke nights, wedding banquets: this is where your most memorable evenings happen."
            />
          </FadeReveal>
        </div>
      </section>

      {/* Room cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <FadeReveal key={room.size} delay={0.1 * i}>
              <PrivateRoomCard {...room} />
            </FadeReveal>
          ))}
        </div>
      </section>

      {/* Amenities full breakdown */}
      <section
        className="py-20 border-y"
        style={{ borderColor: "rgba(14, 124, 134, 0.15)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeReveal className="text-center mb-14">
            <SectionHeading
              label="Every Room Includes"
              title="The Complete Atlantis Experience"
              subtitle="No matter which room you choose, every Atlantis private room is a fully equipped entertainment suite."
            />
          </FadeReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🛋️",
                title: "Plush Lounge Sofas",
                desc: "Comfortable, luxurious seating for relaxed dining and conversation after the meal.",
              },
              {
                icon: "🎱",
                title: "Private Pool Table",
                desc: "Full-size pool table in every room — for friendly competition between courses.",
              },
              {
                icon: "🚿",
                title: "En-Suite Restroom",
                desc: "A private restroom for your exclusive use — no sharing with the main hall.",
              },
              {
                icon: "📺",
                title: "Smart TV (75\"–100\")",
                desc: "Large smart TV with HDMI and wireless connectivity — for presentations, streaming, or karaoke.",
              },
            ].map((item, i) => (
              <FadeReveal key={item.title} delay={0.1 * i}>
                <div
                  className="p-6 rounded-2xl border flex flex-col items-center text-center gap-4"
                  style={{
                    backgroundColor: "rgba(7, 61, 92, 0.3)",
                    borderColor: "rgba(14, 124, 134, 0.18)",
                  }}
                >
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3
                      className="font-display font-semibold text-base mb-2"
                      style={{ color: "var(--atlantis-gold)" }}
                    >
                      {item.title}
                    </h3>
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
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6">
        <FadeReveal className="text-center mb-12">
          <SectionHeading
            label="Private Room FAQs"
            title="Common Questions"
          />
        </FadeReveal>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <FadeReveal key={faq.q} delay={0.07 * i}>
              <div
                className="p-6 rounded-2xl border"
                style={{
                  backgroundColor: "rgba(7, 61, 92, 0.25)",
                  borderColor: "rgba(14, 124, 134, 0.18)",
                }}
              >
                <h3
                  className="font-display font-semibold text-base mb-2"
                  style={{ color: "var(--atlantis-pearl)" }}
                >
                  {faq.q}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(242, 237, 227, 0.62)" }}
                >
                  {faq.a}
                </p>
              </div>
            </FadeReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <FadeReveal>
          <div
            className="rounded-3xl border p-10 md:p-16 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(7,61,92,0.5) 0%, rgba(5,46,69,0.8) 100%)",
              borderColor: "rgba(201, 162, 75, 0.3)",
            }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] rounded-full blur-3xl opacity-15 pointer-events-none"
              style={{ backgroundColor: "var(--atlantis-teal)" }}
            />
            <div className="relative z-10">
              <h2
                className="font-display font-bold text-3xl md:text-4xl mb-4"
                style={{ color: "var(--atlantis-pearl)" }}
              >
                Reserve Your Private Room
              </h2>
              <p
                className="text-base leading-relaxed mb-8 max-w-xl mx-auto"
                style={{ color: "rgba(242, 237, 227, 0.7)" }}
              >
                Contact our events team to check availability, discuss your menu
                preferences, and ensure your evening at Atlantis is extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                    <Link href="/reservations">Make an Enquiry</Link>
                  </Button>
                </GlowPulse>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="font-semibold px-8 h-12 rounded-full"
                  style={{
                    borderColor: "rgba(242, 237, 227, 0.3)",
                    color: "var(--atlantis-pearl)",
                    backgroundColor: "transparent",
                  }}
                >
                  <a href="tel:+60321100888">Call Us Directly</a>
                </Button>
              </div>
            </div>
          </div>
        </FadeReveal>
      </section>
    </div>
  );
}
