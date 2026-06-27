import Link from "next/link";
import { MapPin, Phone, Clock, Mail, } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function VisitUs() {
  return (
    <section
      className="relative py-24 lg:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--atlantis-ink) 0%, var(--atlantis-deep) 100%)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ backgroundColor: "var(--atlantis-teal)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeReveal className="text-center mb-16 flex flex-col items-center">
          <SectionHeading
            label="Visit Us"
            title={
              <>
                Find Us in{" "}
                <span style={{ color: "var(--atlantis-teal)" }}>Kuala Lumpur</span>
              </>
            }
            subtitle="We're in the heart of KL, on the Ground Floor of Life Centre — easy parking, close to KLCC, and open until 3AM every single day."
          />
        </FadeReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Info cards */}
          <FadeReveal direction="right">
            <div className="flex flex-col gap-5 h-full">
              {/* Address */}
              <div
                className="flex items-start gap-5 p-6 rounded-2xl border"
                style={{
                  backgroundColor: "rgba(7, 61, 92, 0.35)",
                  borderColor: "rgba(14, 124, 134, 0.2)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(14, 124, 134, 0.15)" }}
                >
                  <MapPin className="w-5 h-5" style={{ color: "var(--atlantis-teal)" }} />
                </div>
                <div>
                  <div
                    className="font-display font-semibold text-sm mb-2"
                    style={{ color: "var(--atlantis-gold)" }}
                  >
                    Address
                  </div>
                  <address
                    className="not-italic text-sm leading-relaxed"
                    style={{ color: "rgba(242, 237, 227, 0.75)" }}
                  >
                    Ground Floor, Life Centre<br />
                    20 Jalan Sultan Ismail<br />
                    50250 Kuala Lumpur, Malaysia
                  </address>
                </div>
              </div>

              {/* Hours */}
              <div
                className="flex items-start gap-5 p-6 rounded-2xl border"
                style={{
                  backgroundColor: "rgba(7, 61, 92, 0.35)",
                  borderColor: "rgba(14, 124, 134, 0.2)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(14, 124, 134, 0.15)" }}
                >
                  <Clock className="w-5 h-5" style={{ color: "var(--atlantis-teal)" }} />
                </div>
                <div className="flex-1">
                  <div
                    className="font-display font-semibold text-sm mb-2"
                    style={{ color: "var(--atlantis-gold)" }}
                  >
                    Opening Hours
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: "rgba(242, 237, 227, 0.75)" }}>Daily (Mon – Sun)</span>
                    <span
                      className="font-semibold"
                      style={{ color: "var(--atlantis-pearl)" }}
                    >
                      11:30 AM – 3:00 AM
                    </span>
                  </div>
                  <div
                    className="text-xs mt-3 px-3 py-2 rounded-lg"
                    style={{
                      backgroundColor: "rgba(201, 162, 75, 0.08)",
                      color: "rgba(242, 237, 227, 0.6)",
                      borderLeft: "2px solid var(--atlantis-gold)",
                    }}
                  >
                    Live band performances nightly from 8PM. Kitchen open until last orders.
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div
                className="flex items-start gap-5 p-6 rounded-2xl border"
                style={{
                  backgroundColor: "rgba(7, 61, 92, 0.35)",
                  borderColor: "rgba(14, 124, 134, 0.2)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(14, 124, 134, 0.15)" }}
                >
                  <Phone className="w-5 h-5" style={{ color: "var(--atlantis-teal)" }} />
                </div>
                <div className="flex flex-col gap-2">
                  <div
                    className="font-display font-semibold text-sm mb-1"
                    style={{ color: "var(--atlantis-gold)" }}
                  >
                    Contact Us
                  </div>
                  <a
                    href="tel:+60321100888"
                    className="flex items-center gap-2 text-sm hover:underline"
                    style={{ color: "rgba(242, 237, 227, 0.75)" }}
                  >
                    <Phone className="w-3.5 h-3.5" />
                    +60 3-2110 0888
                  </a>
                  <a
                    href="mailto:hello@atlantisseafood.my"
                    className="flex items-center gap-2 text-sm hover:underline"
                    style={{ color: "rgba(242, 237, 227, 0.75)" }}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    hello@atlantisseafood.my
                  </a>
                  <div className="flex gap-3 mt-2">
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border"
                      style={{
                        borderColor: "rgba(14, 124, 134, 0.4)",
                        color: "var(--atlantis-teal)",
                      }}
                      aria-label="Instagram"
                    >
                      {/* <Instagram className="w-4 h-4" /> */}
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border"
                      style={{
                        borderColor: "rgba(14, 124, 134, 0.4)",
                        color: "var(--atlantis-teal)",
                      }}
                      aria-label="Facebook"
                    >
                      {/* <Facebook className="w-4 h-4" /> */}
                    </a>
                  </div>
                </div>
              </div>

              <Button
                asChild
                className="font-semibold h-12 rounded-full"
                style={{
                  backgroundColor: "var(--atlantis-gold)",
                  color: "var(--atlantis-ink)",
                }}
              >
                <Link href="/reservations">Reserve Your Table Now</Link>
              </Button>
            </div>
          </FadeReveal>

          {/* Map placeholder */}
          <FadeReveal direction="left" delay={0.15}>
            <div
              className="relative rounded-2xl overflow-hidden h-full min-h-[400px] border flex items-center justify-center"
              style={{
                backgroundColor: "rgba(7, 61, 92, 0.3)",
                borderColor: "rgba(14, 124, 134, 0.25)",
              }}
            >
              {/* Placeholder map — replace with real embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.769049052567!2d101.70540667412065!3d3.150847696804668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49b39e4c6d9b%3A0xd7ec3e7ce2e11c42!2sLife%20Centre%2C%20Jalan%20Sultan%20Ismail%2C%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1700000000000"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atlantis Seafood Restaurant location — Life Centre, Kuala Lumpur"
              />
            </div>
          </FadeReveal>
        </div>
      </div>
    </section>
  );
}
