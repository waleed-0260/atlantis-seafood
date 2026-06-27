import type { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className ?? ""}`}>
      {label && (
        <span
          className="text-xs font-semibold tracking-[0.25em] uppercase"
          style={{ color: "var(--atlantis-teal)" }}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${titleClassName ?? ""}`}
        style={{ color: "var(--atlantis-pearl)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="max-w-2xl text-base md:text-lg leading-relaxed"
          style={{ color: "rgba(242, 237, 227, 0.7)" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
