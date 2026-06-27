import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DishCard } from "@/components/shared/DishCard";

const dishes = [
  {
    name: "Live Steamed Grouper",
    nameChinese: "清蒸东星斑",
    description: "Freshly caught grouper steamed to perfection with ginger, spring onion, and premium light soy sauce — the soul of Cantonese seafood.",
    price: "Market Price",
    imageSrc: "/images/dishes/steamed-grouper.jpg",
    isSignature: true,
  },
  {
    name: "Salted Egg Crab",
    nameChinese: "咸蛋螃蟹",
    description: "Mud crab wok-tossed in a golden salted egg yolk sauce, fragrant with curry leaves and fresh chilli. A crowd favourite.",
    price: "Market Price",
    imageSrc: "/images/dishes/salted-egg-crab.jpg",
    isSignature: true,
  },
  {
    name: "Canadian Oysters with Garlic",
    nameChinese: "蒜蓉烤生蚝",
    description: "Canadian oysters steamed open and blanketed with aromatic garlic sauce, the star of our POPO seasonal menu.",
    price: "RM 38 / 3 pcs",
    imageSrc: "/images/dishes/garlic-oysters.jpg",
    isSignature: true,
    isLimitedTime: true,
  },
  {
    name: "South African Abalone",
    nameChinese: "南非鲍鱼",
    description: "Prized South African abalone braised in premium oyster sauce — a luxury delicacy reserved for connoisseurs.",
    price: "Market Price",
    imageSrc: "/images/dishes/abalone.jpg",
    isLimitedTime: true,
  },
  {
    name: "Butter Prawn",
    nameChinese: "牛油虾",
    description: "Tiger prawns fried in a luscious butter and egg floss sauce with oats and curry leaves — indulgent and aromatic.",
    price: "RM 58",
    imageSrc: "/images/dishes/butter-prawn.jpg",
    isSignature: true,
  },
  {
    name: "Atlantis House Lobster",
    nameChinese: "焗龙虾",
    description: "Whole live lobster prepared your way — thermidor, garlic butter, or black pepper — a theatrical showstopper.",
    price: "Market Price",
    imageSrc: "/images/dishes/lobster.jpg",
    isSignature: true,
  },
];

export function SignatureDishes() {
  return (
    <section
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #031d2e 0%, var(--atlantis-deep) 50%, #031d2e 100%)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: "var(--atlantis-teal)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeReveal className="text-center mb-16 flex flex-col items-center gap-4">
          <SectionHeading
            label="Signature & Live Seafood"
            title={
              <>
                Luxury Seafood,{" "}
                <span style={{ color: "var(--atlantis-gold)" }}>
                  Every Visit
                </span>
              </>
            }
            subtitle="Our live tanks hold the freshest catch — purchased live and prepared to order. Alongside the classics, our kitchen creates seasonal specials that celebrate the finest ingredients from around the world."
          />
        </FadeReveal>

        {/* Chef's specials callout */}
        <FadeReveal delay={0.1} className="mb-12">
          <div
            className="rounded-2xl border p-6 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between"
            style={{
              backgroundColor: "rgba(232, 105, 74, 0.06)",
              borderColor: "rgba(232, 105, 74, 0.3)",
            }}
          >
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
                <span
                  className="text-xs font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full"
                  style={{
                    backgroundColor: "rgba(232, 105, 74, 0.15)",
                    color: "var(--atlantis-coral)",
                  }}
                >
                  Chef&apos;s Specials
                </span>
                <span
                  className="text-xs"
                  style={{ color: "rgba(242, 237, 227, 0.4)" }}
                >
                  Seasonal · Rotating
                </span>
              </div>
              <h3
                className="font-display font-bold text-lg md:text-xl mt-1"
                style={{ color: "var(--atlantis-pearl)" }}
              >
                The POPO Seasonal Menu
              </h3>
              <p
                className="text-sm leading-relaxed max-w-xl"
                style={{ color: "rgba(242, 237, 227, 0.65)" }}
              >
                Our signature rotating promotion features rare ingredients sourced from
                across the globe. Current season highlights South African Abalone and
                Canadian Oysters — available for a limited time only.
              </p>
            </div>
            <Button
              asChild
              className="flex-shrink-0 rounded-full font-semibold px-6 h-10"
              style={{
                backgroundColor: "var(--atlantis-coral)",
                color: "white",
              }}
            >
              <Link href="/menu">View Full Menu</Link>
            </Button>
          </div>
        </FadeReveal>

        {/* Dish grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish, i) => (
            <FadeReveal key={dish.name} delay={0.05 * i}>
              <DishCard {...dish} />
            </FadeReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
