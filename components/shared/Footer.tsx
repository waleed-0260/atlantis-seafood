import Link from "next/link";
import { MapPin, Phone, Clock, Mail} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/entertainment", label: "Entertainment" },
  { href: "/private-rooms", label: "Private Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--atlantis-ink)",
        borderColor: "rgba(14, 124, 134, 0.2)",
      }}
    >
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div>
              <div className="font-display font-bold text-2xl" style={{ color: "var(--atlantis-gold)" }}>
                ATLANTIS
              </div>
              <div className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--atlantis-teal)" }}>
                Seafood Restaurant & Bar
              </div>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(242, 237, 227, 0.6)" }}>
              Malaysia&apos;s first ocean-themed live seafood entertainment venue. Pork-free Cantonese cuisine, live entertainment, and 9 luxury private rooms in the heart of Kuala Lumpur.
            </p>
            <div className="flex items-center gap-2">
              <span
                className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border font-semibold"
                style={{
                  color: "var(--atlantis-teal)",
                  borderColor: "var(--atlantis-teal)",
                }}
              >
                Pork-Free
              </span>
            </div>
            <div className="flex gap-3 mt-2">
              <a
                href="https://instagram.com/atlantisseafoodkl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border transition-all hover:scale-110"
                style={{ borderColor: "rgba(14, 124, 134, 0.4)", color: "var(--atlantis-teal)" }}
                aria-label="Instagram"
              >
                {/* <Instagram className="w-4 h-4" /> */}
              </a>
              <a
                href="https://facebook.com/atlantisseafoodkl"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border transition-all hover:scale-110"
                style={{ borderColor: "rgba(14, 124, 134, 0.4)", color: "var(--atlantis-teal)" }}
                aria-label="Facebook"
              >
                {/* <Facebook className="w-4 h-4" /> */}
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-widest uppercase mb-5" style={{ color: "var(--atlantis-gold)" }}>
              Explore
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-gold"
                    style={{ color: "rgba(242, 237, 227, 0.65)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-widest uppercase mb-5" style={{ color: "var(--atlantis-gold)" }}>
              Hours
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--atlantis-teal)" }} />
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--atlantis-pearl)" }}>Daily</p>
                  <p className="text-sm" style={{ color: "rgba(242, 237, 227, 0.65)" }}>11:30 AM – 3:00 AM</p>
                  <p className="text-xs mt-1" style={{ color: "rgba(242, 237, 227, 0.4)" }}>
                    Kitchen open until late
                  </p>
                </div>
              </div>
              <div
                className="text-xs px-3 py-2 rounded-lg mt-1"
                style={{
                  backgroundColor: "rgba(201, 162, 75, 0.08)",
                  borderLeft: "2px solid var(--atlantis-gold)",
                  color: "rgba(242, 237, 227, 0.7)",
                }}
              >
                Live band performances nightly from 8PM
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-sm tracking-widest uppercase mb-5" style={{ color: "var(--atlantis-gold)" }}>
              Visit Us
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--atlantis-teal)" }} />
                <address className="not-italic text-sm leading-relaxed" style={{ color: "rgba(242, 237, 227, 0.65)" }}>
                  Ground Floor, Life Centre<br />
                  20 Jalan Sultan Ismail<br />
                  50250 Kuala Lumpur, Malaysia
                </address>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 flex-shrink-0" style={{ color: "var(--atlantis-teal)" }} />
                <a
                  href="tel:+60321100888"
                  className="text-sm transition-colors hover:text-gold"
                  style={{ color: "rgba(242, 237, 227, 0.65)" }}
                >
                  +60 3-2110 0888
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "var(--atlantis-teal)" }} />
                <a
                  href="mailto:hello@atlantisseafood.my"
                  className="text-sm transition-colors hover:text-gold"
                  style={{ color: "rgba(242, 237, 227, 0.65)" }}
                >
                  hello@atlantisseafood.my
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(14, 124, 134, 0.15)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-center" style={{ color: "rgba(242, 237, 227, 0.35)" }}>
            © {new Date().getFullYear()} Atlantis Seafood Restaurant & Bar. Operated by The Golden Years Restaurant and Bar.
          </p>
          <p className="text-xs" style={{ color: "rgba(242, 237, 227, 0.35)" }}>
            Kitchen by Unique Seafood Group of Restaurants
          </p>
        </div>
      </div>
    </footer>
  );
}
