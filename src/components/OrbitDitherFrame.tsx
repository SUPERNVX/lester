import { useReducedMotion } from "motion/react";

type OrbitDitherFrameProps = {
  className?: string;
  duration?: number;
};

export default function OrbitDitherFrame({ className = "", duration = 16 }: OrbitDitherFrameProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={`orbit-dither-frame pointer-events-none absolute rounded-[28px] ${className}`}
    >
      <svg className="orbit-dither-svg absolute inset-0 h-full w-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
        <rect
          className="orbit-dither-trace"
          x="4"
          y="4"
          width="992"
          height="592"
          rx="28"
          pathLength="1000"
          fill="none"
          stroke="rgba(235,195,72,.95)"
          strokeWidth="2.5"
          strokeDasharray="1 2.5"
          style={{ animationDuration: reduceMotion ? "0.01ms" : `${duration}s` }}
        />
      </svg>
    </div>
  );
}
