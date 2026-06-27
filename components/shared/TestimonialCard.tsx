import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  quote: string;
  rating?: number;
  occasion?: string;
}

export function TestimonialCard({
  name,
  quote,
  rating = 5,
  occasion,
}: TestimonialCardProps) {
  return (
    <div
      className="flex flex-col gap-5 p-6 rounded-2xl border h-full"
      style={{
        backgroundColor: "rgba(7, 61, 92, 0.35)",
        borderColor: "rgba(14, 124, 134, 0.2)",
      }}
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-current"
            style={{ color: "var(--atlantis-gold)" }}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote
        className="text-base leading-relaxed flex-1"
        style={{ color: "rgba(242, 237, 227, 0.8)" }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t" style={{ borderColor: "rgba(14, 124, 134, 0.15)" }}>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
          style={{
            backgroundColor: "rgba(14, 124, 134, 0.2)",
            color: "var(--atlantis-teal)",
          }}
        >
          {name[0]}
        </div>
        <div>
          <div
            className="text-sm font-semibold"
            style={{ color: "var(--atlantis-pearl)" }}
          >
            {name}
          </div>
          {occasion && (
            <div
              className="text-xs"
              style={{ color: "rgba(242, 237, 227, 0.45)" }}
            >
              {occasion}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
