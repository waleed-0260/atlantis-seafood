import type { Metadata } from "next";
import { GalleryClient } from "./GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Atlantis Seafood Restaurant & Bar",
  description:
    "Photo gallery of Atlantis Seafood Restaurant & Bar — the grand aquarium, octopus sculpture, ceiling fish sculptures, private rooms, live entertainment, and signature dishes.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
