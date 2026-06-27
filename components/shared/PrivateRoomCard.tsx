import Link from "next/link";
import Image from "next/image";
import { Users, Tv, Trophy, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PrivateRoomCardProps {
  size: "Small" | "Medium" | "Large";
  capacity: number;
  tvSize: string;
  imageSrc: string;
  highlight?: string;
  useCases: string[];
}

const sizeColors = {
  Small: "var(--atlantis-teal)",
  Medium: "var(--atlantis-gold)",
  Large: "var(--atlantis-coral)",
};

const amenities = [
  { icon: Users, label: "Dining & Lounge Sofas" },
  { icon: Trophy, label: "Private Pool Table" },
  { icon: Bath, label: "En-Suite Restroom" },
  { icon: Tv, label: "Smart TV" },
];

export function PrivateRoomCard({
  size,
  capacity,
  tvSize,
  imageSrc,
  highlight,
  useCases,
}: PrivateRoomCardProps) {
  const color = sizeColors[size];

  return (
    <div
      className="group rounded-2xl overflow-hidden border flex flex-col transition-all duration-500 hover:scale-[1.02]"
      style={{
        backgroundColor: "rgba(7, 61, 92, 0.35)",
        borderColor: "rgba(14, 124, 134, 0.2)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
      }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${size} private room at Atlantis Seafood Restaurant`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 30%, rgba(5,46,69,0.85) 100%)",
          }}
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge
            className="text-xs font-bold px-3 py-1 rounded-full border-0"
            style={{ backgroundColor: color, color: "white" }}
          >
            {size}
          </Badge>
        </div>
        <div className="absolute bottom-4 left-4">
          <div
            className="font-display font-bold text-3xl"
            style={{ color: "white" }}
          >
            {capacity}
          </div>
          <div
            className="text-xs tracking-wider uppercase"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Guests
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 p-6 flex-1">
        <div>
          <h3
            className="font-display font-bold text-xl"
            style={{ color: "var(--atlantis-pearl)" }}
          >
            {size} Room
          </h3>
          {highlight && (
            <p
              className="text-sm mt-1"
              style={{ color: "rgba(242, 237, 227, 0.6)" }}
            >
              {highlight}
            </p>
          )}
        </div>

        {/* Amenities */}
        <div className="grid grid-cols-2 gap-2">
          {amenities.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-xs"
              style={{ color: "rgba(242, 237, 227, 0.65)" }}
            >
              <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color }} />
              <span>{label === "Smart TV" ? `${tvSize} Smart TV` : label}</span>
            </div>
          ))}
        </div>

        {/* Use cases */}
        <div className="flex flex-wrap gap-2">
          {useCases.map((uc) => (
            <span
              key={uc}
              className="text-[10px] tracking-wider font-medium px-2.5 py-1 rounded-full border"
              style={{
                color: "rgba(242, 237, 227, 0.65)",
                borderColor: "rgba(14, 124, 134, 0.25)",
                backgroundColor: "rgba(14, 124, 134, 0.06)",
              }}
            >
              {uc}
            </span>
          ))}
        </div>

        <Button
          asChild
          variant="outline"
          className="mt-auto rounded-full font-semibold h-10 border transition-all"
          style={{
            borderColor: color,
            color: color,
            backgroundColor: "transparent",
          }}
        >
          <Link href="/private-rooms">Enquire About This Room</Link>
        </Button>
      </div>
    </div>
  );
}
