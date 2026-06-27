import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PrivateRoomCard } from "@/components/shared/PrivateRoomCard";

const rooms = [
  {
    size: "Small" as const,
    capacity: 25,
    tvSize: '75"',
    imageSrc: "/images/rooms/small-room.jpg",
    highlight: "Intimate celebrations, birthday dinners, and small corporate gatherings.",
    useCases: ["Birthday Dinner", "Corporate Lunch", "Family Gathering", "Karaoke Night"],
  },
  {
    size: "Medium" as const,
    capacity: 35,
    tvSize: '86"',
    imageSrc: "/images/rooms/medium-room.jpg",
    highlight: "The perfect balance of space and intimacy for a memorable evening.",
    useCases: ["Team Celebrations", "Anniversary Dinner", "Presentations", "Private Karaoke"],
  },
  {
    size: "Large" as const,
    capacity: 50,
    tvSize: '100"',
    imageSrc: "/images/rooms/large-room.jpg",
    highlight: "Grand celebrations, product launches, and large family feasts.",
    useCases: ["Grand Celebrations", "Product Launch", "Company Dinner", "Wedding Banquet"],
  },
];

export function PrivateRooms() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, var(--atlantis-ink) 0%, #031d2e 100%)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: "var(--atlantis-gold)" }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: "var(--atlantis-teal)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeReveal className="text-center mb-6 flex flex-col items-center gap-4">
          <SectionHeading
            label="Private Rooms & Events"
            title={
              <>
                Nine Rooms,{" "}
                <span style={{ color: "var(--atlantis-gold)" }}>
                  Infinite Occasions
                </span>
              </>
            }
            subtitle="Each of our 9 elegantly appointed private rooms comes fully equipped for dining, entertainment, and celebration — with a private pool table, plush lounge sofas, your own restroom, and a large smart TV."
          />
        </FadeReveal>

        {/* Amenities banner */}
        <FadeReveal delay={0.1} className="mb-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { icon: "🛋️", label: "Plush Lounge Sofas" },
              { icon: "🎱", label: "Private Pool Table" },
              { icon: "🚽", label: "En-Suite Restroom" },
              { icon: "📺", label: "100 Smart TV" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 py-4 px-3 rounded-xl border text-center"
                style={{
                  backgroundColor: "rgba(14, 124, 134, 0.06)",
                  borderColor: "rgba(14, 124, 134, 0.2)",
                }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span
                  className="text-xs font-medium leading-tight"
                  style={{ color: "rgba(242, 237, 227, 0.7)" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </FadeReveal>

        {/* Room cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <FadeReveal key={room.size} delay={0.1 * i}>
              <PrivateRoomCard {...room} />
            </FadeReveal>
          ))}
        </div>

        <FadeReveal delay={0.4} className="text-center mt-12">
          <p
            className="text-sm mb-6"
            style={{ color: "rgba(242, 237, 227, 0.55)" }}
          >
            Planning a large event? Our team can help you customise the perfect private dining experience.
          </p>
          <Button
            asChild
            className="font-semibold px-8 h-12 rounded-full text-base"
            style={{
              backgroundColor: "var(--atlantis-gold)",
              color: "var(--atlantis-ink)",
            }}
          >
            <Link href="/private-rooms">Explore All Private Rooms</Link>
          </Button>
        </FadeReveal>
      </div>
    </section>
  );
}
