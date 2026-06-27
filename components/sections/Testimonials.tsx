import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TestimonialCard } from "@/components/shared/TestimonialCard";

const testimonials = [
  {
    name: "Sarah L.",
    quote: "Absolutely mesmerising — I've never seen anything like the aquarium and the fish hanging from the ceiling. And the steamed grouper was the freshest I've ever had in KL. We'll be back for a private room next time.",
    rating: 5,
    occasion: "Anniversary Dinner",
  },
  {
    name: "Kevin T.",
    quote: "A great evening venue to dine, have drinks and relax. The live band really elevates the whole experience — it felt like we were at a supper club, not just a seafood restaurant. The salted egg crab was phenomenal.",
    rating: 5,
    occasion: "Birthday Celebration",
  },
  {
    name: "Michelle C.",
    quote: "We booked the large private room for a team dinner and it was perfect. Pool table, karaoke, and the food kept coming until midnight. Attentive staff throughout. Highly recommend for corporate events.",
    rating: 5,
    occasion: "Corporate Dinner",
  },
  {
    name: "David W.",
    quote: "The abalone from the POPO menu was extraordinary — melt-in-your-mouth tender. The atmosphere is theatrical in the best possible way. You can feel how much care has gone into every detail of this place.",
    rating: 5,
    occasion: "Family Gathering",
  },
  {
    name: "Priya M.",
    quote: "I loved that it's pork-free — finally a venue where everyone in our group can eat freely and celebrate together. The décor is stunning, the seafood is impeccably fresh, and the staff remembered our preferences.",
    rating: 5,
    occasion: "Dinner with Friends",
  },
  {
    name: "Jason H.",
    quote: "Came for a late-night supper after a show and stayed until 2AM. The kitchen was still producing beautiful dishes at midnight. This city needed a place like Atlantis — I can't believe it didn't exist before 2025.",
    rating: 5,
    occasion: "Late-Night Dining",
  },
];

export function Testimonials() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--atlantis-deep) 0%, var(--atlantis-ink) 100%)",
      }}
    >
      {/* Decorative glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full blur-3xl opacity-8 pointer-events-none"
        style={{ backgroundColor: "var(--atlantis-gold)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeReveal className="text-center mb-16 flex flex-col items-center gap-2">
          <SectionHeading
            label="What Our Guests Say"
            title={
              <>
                4.9 Stars{" "}
                <span style={{ color: "var(--atlantis-gold)" }}>★</span>
              </>
            }
            subtitle="Our guests call it the most memorable evening they've had in Kuala Lumpur. We call it Tuesday."
          />
        </FadeReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeReveal key={t.name} delay={0.07 * i}>
              <TestimonialCard {...t} />
            </FadeReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
