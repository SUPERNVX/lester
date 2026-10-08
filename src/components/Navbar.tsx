import { useState } from "react";
import { Check, Copy, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Executive Advisory", href: "#/advisory" },
  { label: "Complex Systems", href: "#/complex-systems" },
  { label: "Deep Tech Ventures", href: "#/deep-tech" },
  { label: "Alpha Finder", href: "#/alpha-finder" },
  { label: "Selected Missions", href: "#/missions" },
];

export default function Navbar({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("lesteraf@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <a href="#/" className="flex items-center gap-2.5" aria-label="Lester Faria — Página inicial">
            <span className="gold-border flex h-8 w-8 items-center justify-center rounded-full bg-gold-900/50 font-display text-[11px] font-bold text-gold-300">
              LF
            </span>
            <span className="leading-tight">
              <span className="block font-mono text-[11px] font-bold tracking-[0.2em] text-mist-100 uppercase">
                Lester Faria
              </span>
              <span className="block font-mono text-[8px] tracking-[0.18em] text-mist-500 uppercase">
                Strategic Architect for Complex Decisions
              </span>
            </span>
          </a>
          <span className="hidden items-center gap-1.5 border-l border-white/10 pl-4 xl:flex">
            <a
              href="mailto:lesteraf@gmail.com"
              className="font-mono text-[11px] text-mist-500 transition hover:text-gold-300"
            >
              lesteraf@gmail.com
            </a>
            <button
              onClick={copyEmail}
              aria-label="Copiar e-mail"
              className="p-1 text-mist-500 transition hover:text-gold-300"
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
            </button>
          </span>
        </div>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navegação principal">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={active === l.href ? "page" : undefined}
              className={`font-mono text-[10px] tracking-[0.18em] uppercase transition hover:text-gold-300 ${
                active === l.href ? "text-gold-300" : "text-mist-300"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="mailto:lesteraf@gmail.com?subject=Conversa%20estrat%C3%A9gica%20pelo%20site"
            className="gold-border hidden rounded-full px-4 py-1.5 font-mono text-[10px] font-bold tracking-[0.18em] text-gold-300 uppercase transition hover:bg-gold-900/40 sm:inline-block"
          >
            Contato
          </a>
          <button
            className="rounded-lg border border-white/10 p-2 text-mist-300 lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-6 py-3 lg:hidden" aria-label="Menu móvel">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-2 font-mono text-xs tracking-[0.18em] uppercase ${
                active === l.href ? "text-gold-300" : "text-mist-300"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
