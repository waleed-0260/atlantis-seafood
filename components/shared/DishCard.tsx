import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface DishCardProps {
  name: string;
  nameChinese?: string;
  description: string;
  price: string | "Market Price";
  imageSrc: string;
  isSignature?: boolean;
  isLimitedTime?: boolean;
}

export function DishCard({
  name,
  nameChinese,
  description,
  price,
  imageSrc,
  isSignature,
  isLimitedTime,
}: DishCardProps) {
  return (
    <div
      className="group rounded-2xl overflow-hidden border flex flex-col transition-all duration-500 hover:scale-[1.02]"
      style={{
        backgroundColor: "rgba(7, 61, 92, 0.4)",
        borderColor: "rgba(14, 124, 134, 0.25)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
      }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 50%, rgba(5,46,69,0.8) 100%)",
          }}
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
          {isSignature && (
            <Badge
              className="text-[10px] tracking-wider font-semibold px-2.5 py-0.5 rounded-full border-0"
              style={{
                backgroundColor: "rgba(201, 162, 75, 0.9)",
                color: "var(--atlantis-ink)",
              }}
            >
              Signature
            </Badge>
          )}
          {isLimitedTime && (
            <Badge
              className="text-[10px] tracking-wider font-semibold px-2.5 py-0.5 rounded-full border-0"
              style={{
                backgroundColor: "rgba(232, 105, 74, 0.9)",
                color: "white",
              }}
            >
              Limited Time
            </Badge>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5 flex-1">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3
              className="font-display font-semibold text-base leading-tight"
              style={{ color: "var(--atlantis-pearl)" }}
            >
              {name}
            </h3>
            {nameChinese && (
              <span
                className="text-sm"
                style={{ color: "rgba(242, 237, 227, 0.45)" }}
              >
                {nameChinese}
              </span>
            )}
          </div>
          <span
            className="text-sm font-semibold flex-shrink-0 mt-0.5"
            style={{
              color:
                price === "Market Price"
                  ? "var(--atlantis-teal)"
                  : "var(--atlantis-gold)",
            }}
          >
            {price}
          </span>
        </div>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "rgba(242, 237, 227, 0.6)" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
