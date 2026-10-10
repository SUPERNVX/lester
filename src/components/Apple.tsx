import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: ReactNode;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="headline mt-4 text-[32px] md:text-[44px]">{title}</h2>
      {sub ? <p className="subhead mt-4">{sub}</p> : null}
    </div>
  );
}

export function DitherStrip({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`dither-strip ${className}`} />;
}

export function PrimaryCta({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-1.5 rounded-full bg-gold-500 px-6 py-3 text-[13px] font-semibold tracking-tight text-black transition hover:bg-gold-400"
    >
      {children}
    </a>
  );
}

export function GhostCta({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/15 px-6 py-3 text-[13px] font-semibold tracking-tight text-mist-100 transition hover:border-gold-500/50 hover:text-gold-300"
    >
      {children}
    </a>
  );
}
