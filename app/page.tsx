import { Hero } from "@/components/sections/Hero";
import { Welcome } from "@/components/sections/Welcome";
import { EveningAtAtlantis } from "@/components/sections/EveningAtAtlantis";
import { SignatureDishes } from "@/components/sections/SignatureDishes";
import { PrivateRooms } from "@/components/sections/PrivateRooms";
import { Testimonials } from "@/components/sections/Testimonials";
import { VisitUs } from "@/components/sections/VisitUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <EveningAtAtlantis />
      <SignatureDishes />
      <PrivateRooms />
      <Testimonials />
      <VisitUs />
    </>
  );
}
