import type { Metadata } from "next";
import { MenuClient } from "./MenuClient";

export const metadata: Metadata = {
  title: "Menu | Atlantis Seafood Restaurant & Bar",
  description:
    "Explore our pork-free Cantonese menu featuring live seafood, premium abalone, Chef's specials, and seasonal delicacies. Open daily 11:30AM–3AM.",
};

export default function MenuPage() {
  return <MenuClient />;
}
