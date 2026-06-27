import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Phone, MapPin } from "lucide-react";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ReservationForm } from "./ReservationForm";

export const metadata: Metadata = {
  title: "Reservations | Atlantis Seafood Restaurant & Bar",
  description:
    "Reserve a table at Atlantis Seafood Restaurant & Bar, Kuala Lumpur. Main hall or private room — birthdays, corporate events, karaoke nights, and family celebrations.",
};

export default function ReservationsPage() {
  return (
    <div
      className="min-h-screen pt-32 pb-20"
      style={{
        background:
          "linear-gradient(180deg, var(--atlantis-ink) 0%, var(--atlantis-deep) 40%, var(--atlantis-ink) 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeReveal className="text-center mb-16">
          <SectionHeading
            label="Reservations"
            title={
              <>
                Reserve Your Place{" "}
                <span style={{ color: "var(--atlantis-gold)" }}>in Atlantis</span>
              </>
            }
            subtitle="Whether you're joining us for a quiet dinner, a live music evening, or a private celebration — your experience begins the moment you book."
          />
        </FadeReveal>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Form — takes 3 columns */}
          <div className="lg:col-span-3">
            <FadeReveal direction="right">
              <div
                className="rounded-2xl border p-8 md:p-10"
                style={{
                  backgroundColor: "rgba(7, 61, 92, 0.3)",
                  borderColor: "rgba(14, 124, 134, 0.22)",
                }}
              >
                <ReservationForm />
              </div>
            </FadeReveal>
          </div>

          {/* Info sidebar — takes 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <FadeReveal direction="left" delay={0.1}>
              <div
                className="p-6 rounded-2xl border"
                style={{
                  backgroundColor: "rgba(7, 61, 92, 0.3)",
                  borderColor: "rgba(14, 124, 134, 0.2)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: "var(--atlantis-teal)" }}
                  />
                  <h3
                    className="font-display font-semibold text-sm"
                    style={{ color: "var(--atlantis-gold)" }}
                  >
                    Opening Hours
                  </h3>
                </div>
                <p
                  className="font-semibold"
                  style={{ color: "var(--atlantis-pearl)" }}
                >
                  Daily 11:30 AM – 3:00 AM
                </p>
                <p
                  className="text-sm mt-1"
                  style={{ color: "rgba(242, 237, 227, 0.55)" }}
                >
                  Live band from 8PM nightly
                </p>
              </div>
            </FadeReveal>

            <FadeReveal direction="left" delay={0.15}>
              <div
                className="p-6 rounded-2xl border"
                style={{
                  backgroundColor: "rgba(7, 61, 92, 0.3)",
                  borderColor: "rgba(14, 124, 134, 0.2)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Phone
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: "var(--atlantis-teal)" }}
                  />
                  <h3
                    className="font-display font-semibold text-sm"
                    style={{ color: "var(--atlantis-gold)" }}
                  >
                    Prefer to Call?
                  </h3>
                </div>
                <a
                  href="tel:+60321100888"
                  className="font-semibold text-lg block mb-1"
                  style={{ color: "var(--atlantis-pearl)" }}
                >
                  +60 3-2110 0888
                </a>
                <p
                  className="text-sm"
                  style={{ color: "rgba(242, 237, 227, 0.55)" }}
                >
                  For same-day bookings or large party enquiries, calling is fastest.
                </p>
              </div>
            </FadeReveal>

            <FadeReveal direction="left" delay={0.2}>
              <div
                className="p-6 rounded-2xl border"
                style={{
                  backgroundColor: "rgba(7, 61, 92, 0.3)",
                  borderColor: "rgba(14, 124, 134, 0.2)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin
                    className="w-5 h-5 flex-shrink-0"
                    style={{ color: "var(--atlantis-teal)" }}
                  />
                  <h3
                    className="font-display font-semibold text-sm"
                    style={{ color: "var(--atlantis-gold)" }}
                  >
                    Location
                  </h3>
                </div>
                <address
                  className="not-italic text-sm leading-relaxed"
                  style={{ color: "rgba(242, 237, 227, 0.7)" }}
                >
                  Ground Floor, Life Centre<br />
                  20 Jalan Sultan Ismail<br />
                  50250 Kuala Lumpur
                </address>
              </div>
            </FadeReveal>

            <FadeReveal direction="left" delay={0.25}>
              <div
                className="p-6 rounded-2xl border"
                style={{
                  backgroundColor: "rgba(201, 162, 75, 0.06)",
                  borderColor: "rgba(201, 162, 75, 0.25)",
                }}
              >
                <h3
                  className="font-display font-semibold text-sm mb-3"
                  style={{ color: "var(--atlantis-gold)" }}
                >
                  Private Room Bookings
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "rgba(242, 237, 227, 0.65)" }}
                >
                  Planning a celebration, corporate event, or karaoke night? Our private
                  rooms seat 25–50 guests and include a pool table, smart TV, and
                  en-suite restroom.
                </p>
                <Link
                  href="/private-rooms"
                  className="text-sm font-semibold underline"
                  style={{ color: "var(--atlantis-gold)" }}
                >
                  Learn about private rooms →
                </Link>
              </div>
            </FadeReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
