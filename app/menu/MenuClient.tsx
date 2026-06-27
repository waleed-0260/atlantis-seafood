"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { menuCategories, type MenuItem } from "@/lib/menu-data";

function MenuItemRow({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04, ease: [0.45, 0, 0.55, 1] }}
      className="flex items-start gap-4 py-5 border-b last:border-b-0"
      style={{ borderColor: "rgba(14, 124, 134, 0.12)" }}
    >
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-baseline gap-2 mb-1">
          <span
            className="font-display font-semibold text-base"
            style={{ color: "var(--atlantis-pearl)" }}
          >
            {item.name}
          </span>
          {item.nameChinese && (
            <span
              className="text-sm"
              style={{ color: "rgba(242, 237, 227, 0.4)" }}
            >
              {item.nameChinese}
            </span>
          )}
          {item.isSignature && (
            <Badge
              className="text-[9px] tracking-wider font-bold px-2 py-0.5 rounded-full border-0"
              style={{
                backgroundColor: "rgba(201, 162, 75, 0.15)",
                color: "var(--atlantis-gold)",
              }}
            >
              Signature
            </Badge>
          )}
          {item.isLimitedTime && (
            <Badge
              className="text-[9px] tracking-wider font-bold px-2 py-0.5 rounded-full border-0"
              style={{
                backgroundColor: "rgba(232, 105, 74, 0.15)",
                color: "var(--atlantis-coral)",
              }}
            >
              Limited Time
            </Badge>
          )}
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(242, 237, 227, 0.58)" }}
        >
          {item.description}
        </p>
      </div>
      <div className="flex-shrink-0 text-right mt-0.5">
        <span
          className="text-sm font-semibold"
          style={{
            color: item.isMarketPrice
              ? "var(--atlantis-teal)"
              : "var(--atlantis-gold)",
          }}
        >
          {item.price}
        </span>
      </div>
    </motion.div>
  );
}

export function MenuClient() {
  return (
    <div
      className="min-h-screen pt-24 pb-20"
      style={{
        background:
          "linear-gradient(180deg, var(--atlantis-ink) 0%, var(--atlantis-deep) 30%, var(--atlantis-ink) 100%)",
      }}
    >
      {/* Hero */}
      <div className="relative overflow-hidden py-16">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-3xl opacity-12 pointer-events-none"
          style={{ backgroundColor: "var(--atlantis-teal)" }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <FadeReveal>
            <SectionHeading
              label="Our Menu"
              title={
                <>
                  Live Seafood &{" "}
                  <span style={{ color: "var(--atlantis-gold)" }}>
                    Cantonese Craft
                  </span>
                </>
              }
              subtitle="Pork-free Cantonese cuisine with a live seafood focus. Prices marked 'Market Price' are based on daily live tank selections — ask your server for today's offerings."
            />
          </FadeReveal>

          {/* Chef's specials banner */}
          <FadeReveal delay={0.2} className="mt-10">
            <div
              className="rounded-2xl border p-5 text-left"
              style={{
                backgroundColor: "rgba(232, 105, 74, 0.06)",
                borderColor: "rgba(232, 105, 74, 0.28)",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                <div
                  className="flex-shrink-0 text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full w-fit"
                  style={{
                    backgroundColor: "rgba(232, 105, 74, 0.15)",
                    color: "var(--atlantis-coral)",
                  }}
                >
                  Chef&apos;s Specials
                </div>
                <div>
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: "var(--atlantis-pearl)" }}
                  >
                    The POPO Seasonal Menu — Now Available
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "rgba(242, 237, 227, 0.6)" }}
                  >
                    Featuring South African Abalone and Canadian Oysters steamed with garlic sauce.
                    Seasonal availability — ask your server for current selections.
                  </p>
                </div>
              </div>
            </div>
          </FadeReveal>
        </div>
      </div>

      {/* Menu tabs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Tabs defaultValue="live-seafood" className="w-full">
          {/* Tab list */}
          <FadeReveal delay={0.15}>
            <TabsList
              className="flex flex-wrap gap-2 h-auto p-2 mb-10 rounded-2xl"
              style={{
                backgroundColor: "rgba(7, 61, 92, 0.4)",
                border: "1px solid rgba(14, 124, 134, 0.2)",
              }}
            >
              {menuCategories.map((cat) => (
                <TabsTrigger
                  key={cat.id}
                  value={cat.id}
                  className="text-xs font-semibold tracking-wide rounded-xl px-4 py-2 transition-all data-[state=active]:text-ink"
                  style={
                    {
                      color: "rgba(242, 237, 227, 0.65)",
                      "--tw-bg-opacity": "1",
                    } as React.CSSProperties
                  }
                >
                  {cat.label}
                  {cat.labelChinese && (
                    <span className="ml-1.5 opacity-50">{cat.labelChinese}</span>
                  )}
                </TabsTrigger>
              ))}
            </TabsList>
          </FadeReveal>

          {/* Tab content */}
          {menuCategories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.45, 0, 0.55, 1] }}
                >
                  <div
                    className="rounded-2xl border overflow-hidden"
                    style={{
                      backgroundColor: "rgba(7, 61, 92, 0.25)",
                      borderColor: "rgba(14, 124, 134, 0.18)",
                    }}
                  >
                    <div className="px-6 py-5 border-b" style={{ borderColor: "rgba(14, 124, 134, 0.15)" }}>
                      <div className="flex items-baseline gap-3">
                        <h2
                          className="font-display font-bold text-xl"
                          style={{ color: "var(--atlantis-pearl)" }}
                        >
                          {cat.label}
                        </h2>
                        {cat.labelChinese && (
                          <span
                            className="text-base"
                            style={{ color: "rgba(242, 237, 227, 0.4)" }}
                          >
                            {cat.labelChinese}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="px-6 divide-y" style={{ divideColor: "rgba(14, 124, 134, 0.1)" }}>
                      {cat.items.map((item, i) => (
                        <MenuItemRow key={item.name} item={item} index={i} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>

        {/* Footer note */}
        <FadeReveal delay={0.3} className="mt-10 text-center">
          <p
            className="text-xs leading-relaxed max-w-xl mx-auto"
            style={{ color: "rgba(242, 237, 227, 0.38)" }}
          >
            Prices are subject to change based on seasonal availability and market rates.
            All dishes are prepared in a pork-free kitchen. For allergy or dietary
            enquiries, please speak with our team.
          </p>
        </FadeReveal>
      </div>
    </div>
  );
}
