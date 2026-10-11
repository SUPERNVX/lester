import { useMemo } from "react";

type GradualBlurProps = {
  strength?: number;
  height?: string;
  divCount?: number;
  className?: string;
};

export default function GradualBlur({
  strength = 2,
  height = "7rem",
  divCount = 5,
  className = "",
}: GradualBlurProps) {
  const layers = useMemo(
    () =>
      Array.from({ length: divCount }, (_, index) => {
        const progress = (index + 1) / divCount;
        const blur = 2 ** (progress * 4) * 0.0625 * strength;
        const step = 100 / divCount;
        const p1 = Math.round(step * index * 10) / 10;
        const p2 = Math.round(step * (index + 1) * 10) / 10;
        const p3 = Math.round(step * (index + 2) * 10) / 10;
        const stops = [`transparent ${p1}%`, `black ${p2}%`];
        if (p3 <= 100) stops.push(`black ${p3}%`);
        if (p3 + step <= 100) stops.push(`transparent ${p3 + step}%`);
        const mask = `linear-gradient(to bottom, ${stops.join(", ")})`;

        return (
          <div
            key={index}
            className="absolute inset-0"
            style={{
              backdropFilter: `blur(${blur.toFixed(3)}rem)`,
              WebkitBackdropFilter: `blur(${blur.toFixed(3)}rem)`,
              maskImage: mask,
              WebkitMaskImage: mask,
            }}
          />
        );
      }),
    [divCount, strength],
  );

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-0 z-10 ${className}`}
      style={{ height }}
    >
      {layers}
    </div>
  );
}
