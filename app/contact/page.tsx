import type { Metadata } from "next";
import { FadeReveal } from "@/components/shared/FadeReveal";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ContactForm } from "./ContactForm";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact | Atlantis Seafood Restaurant & Bar",
  description:
    "Contact Atlantis Seafood Restaurant & Bar — Ground Floor, Life Centre, 20 Jalan Sultan Ismail, Kuala Lumpur. Open daily 11:30AM–3AM.",
};

export default function ContactPage() {
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
            label="Contact Us"
            title={
              <>
                Get in{" "}
                <span style={{ color: "var(--atlantis-teal)" }}>Touch</span>
              </>
            }
            subtitle="Enquiries about reservations, private events, media, or partnerships — our team is ready to help."
          />
        </FadeReveal>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info — 2 columns */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {[
              {
                icon: MapPin,
                title: "Address",
                content: (
                  <address className="not-italic text-sm leading-relaxed" style={{ color: "rgba(242, 237, 227, 0.7)" }}>
                    Ground Floor, Life Centre<br />
                    20 Jalan Sultan Ismail<br />
                    50250 Kuala Lumpur, Malaysia
                  </address>
                ),
              },
              {
                icon: Phone,
                title: "Phone",
                content: (
                  <a href="tel:+60321100888" className="text-sm font-semibold" style={{ color: "var(--atlantis-pearl)" }}>
                    +60 3-2110 0888
                  </a>
                ),
              },
              {
                icon: Mail,
                title: "Email",
                content: (
                  <a href="mailto:hello@atlantisseafood.my" className="text-sm" style={{ color: "rgba(242, 237, 227, 0.7)" }}>
                    hello@atlantisseafood.my
                  </a>
                ),
              },
              {
                icon: Clock,
                title: "Hours",
                content: (
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--atlantis-pearl)" }}>Daily 11:30 AM – 3:00 AM</p>
                    <p className="text-xs mt-1" style={{ color: "rgba(242, 237, 227, 0.5)" }}>Live band from 8PM nightly</p>
                  </div>
                ),
              },
            ].map(({ icon: Icon, title, content }, i) => (
              <FadeReveal key={title} direction="right" delay={0.08 * i}>
                <div
                  className="flex items-start gap-4 p-5 rounded-2xl border"
                  style={{
                    backgroundColor: "rgba(7, 61, 92, 0.3)",
                    borderColor: "rgba(14, 124, 134, 0.2)",
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "rgba(14, 124, 134, 0.15)" }}
                  >
                    <Icon className="w-5 h-5" style={{ color: "var(--atlantis-teal)" }} />
                  </div>
                  <div>
                    <div
                      className="font-display font-semibold text-xs tracking-widest uppercase mb-2"
                      style={{ color: "var(--atlantis-gold)" }}
                    >
                      {title}
                    </div>
                    {content}
                  </div>
                </div>
              </FadeReveal>
            ))}

            {/* Social */}
            <FadeReveal direction="right" delay={0.35}>
              <div
                className="p-5 rounded-2xl border"
                style={{
                  backgroundColor: "rgba(7, 61, 92, 0.3)",
                  borderColor: "rgba(14, 124, 134, 0.2)",
                }}
              >
                <div
                  className="font-display font-semibold text-xs tracking-widest uppercase mb-3"
                  style={{ color: "var(--atlantis-gold)" }}
                >
                  Follow Us
                </div>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/atlantisseafoodkl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border transition-all"
                    style={{
                      borderColor: "rgba(14, 124, 134, 0.3)",
                      color: "var(--atlantis-teal)",
                    }}
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com/atlantisseafoodkl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-full border transition-all"
                    style={{
                      borderColor: "rgba(14, 124, 134, 0.3)",
                      color: "var(--atlantis-teal)",
                    }}
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </a>
                </div>
              </div>
            </FadeReveal>

            {/* Parking note */}
            <FadeReveal direction="right" delay={0.4}>
              <div
                className="p-5 rounded-2xl border text-sm leading-relaxed"
                style={{
                  backgroundColor: "rgba(201, 162, 75, 0.05)",
                  borderColor: "rgba(201, 162, 75, 0.2)",
                  color: "rgba(242, 237, 227, 0.6)",
                }}
              >
                <span className="font-semibold" style={{ color: "var(--atlantis-gold)" }}>Parking & Access: </span>
                Life Centre offers multi-storey parking at competitive rates. We are a short walk from the KLCC LRT/MRT station.
              </div>
            </FadeReveal>
          </div>

          {/* Contact form — 3 columns */}
          <div className="lg:col-span-3">
            <FadeReveal direction="left" delay={0.1}>
              <div
                className="rounded-2xl border p-8 md:p-10"
                style={{
                  backgroundColor: "rgba(7, 61, 92, 0.3)",
                  borderColor: "rgba(14, 124, 134, 0.22)",
                }}
              >
                <h2
                  className="font-display font-bold text-xl mb-6"
                  style={{ color: "var(--atlantis-pearl)" }}
                >
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </FadeReveal>

            {/* Map */}
            <FadeReveal direction="left" delay={0.2} className="mt-6">
              <div
                className="relative rounded-2xl overflow-hidden h-[300px] border"
                style={{ borderColor: "rgba(14, 124, 134, 0.2)" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.769049052567!2d101.70540667412065!3d3.150847696804668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc49b39e4c6d9b%3A0xd7ec3e7ce2e11c42!2sLife%20Centre%2C%20Jalan%20Sultan%20Ismail%2C%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1700000000000"
                  className="absolute inset-0 w-full h-full"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Atlantis Seafood Restaurant location"
                />
              </div>
            </FadeReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
