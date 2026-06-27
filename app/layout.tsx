import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Atlantis Seafood Restaurant & Bar | Malaysia's First Ocean-Themed Live Seafood Entertainment Venue",
  description:
    "Dive into Atlantis — Malaysia's first ocean-themed live seafood entertainment venue at Life Centre, Kuala Lumpur. Pork-free Cantonese live seafood, live band performances nightly, and 9 luxury private rooms. Open daily 11:30AM–3AM.",
  openGraph: {
    title: "Atlantis Seafood Restaurant & Bar",
    description:
      "Malaysia's first ocean-themed live seafood entertainment venue. Pork-free Cantonese cuisine, live entertainment, and luxury private rooms in Kuala Lumpur.",
    type: "website",
    locale: "en_MY",
  },
  keywords: [
    "Atlantis Seafood",
    "seafood restaurant KL",
    "live seafood Kuala Lumpur",
    "ocean themed restaurant",
    "pork free restaurant KL",
    "Cantonese seafood",
    "private dining KL",
    "live music restaurant",
    "Life Centre restaurant",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased" style={{ backgroundColor: "var(--atlantis-ink)" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
