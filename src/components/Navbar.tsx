import { useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { Check, Copy, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Advisory", href: "#/advisory" },
  { label: "Systems", href: "#/complex-systems" },
  { label: "Deep Tech", href: "#/deep-tech" },
  { label: "Alpha Finder", href: "#/alpha-finder" },
  { label: "Missions", href: "#/missions" },
];

export default function Navbar({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const next = latest > 44;
    setIsScrolled((current) => (current === next ? current : next));
  });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("lesteraf@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  const spring = reduceMotion ? { duration: 0 } : { type: "spring" as const, stiffness: 180, damping: 28, mass: 1.2 };

  return (
    <>
      <div aria-hidden="true" className="h-14" />
      <motion.header
        layout
        layoutRoot
        className="fixed inset-x-0 top-0 z-50 flex justify-center"
        animate={{ paddingTop: isScrolled ? 12 : 0, paddingInline: isScrolled ? 12 : 0 }}
        transition={spring}
      >
        <motion.div
          layout
          className={`border backdrop-blur-xl backdrop-saturate-150 ${isScrolled ? "border-white/10 bg-black/85 shadow-[0_16px_60px_rgba(0,0,0,.45)]" : "border-white/[0.07] bg-black/60"}`}
          animate={{
            width: isScrolled ? "min(100%, 900px)" : "min(100%, 1024px)",
            borderRadius: isScrolled ? 30 : 0,
          }}
          transition={spring}
        >
          <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
            <div className="flex items-center gap-3">
              <a href="#/" className="flex items-center gap-2.5" aria-label="Lester Faria — Página inicial">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-b from-gold-300 to-gold-600 font-accent text-[10px] font-bold text-black">
                  LF
                </span>
                <span className="text-[14px] font-semibold tracking-tight text-mist-100">Lester Faria</span>
              </a>
              <span className="hidden items-center gap-1.5 border-l border-white/10 pl-3 xl:flex">
                <a href="mailto:lesteraf@gmail.com" className="font-mono2 text-[11px] text-mist-500 transition hover:text-gold-300">
                  lesteraf@gmail.com
                </a>
                <button onClick={copyEmail} aria-label="Copiar e-mail" className="p-1 text-mist-500 transition hover:text-gold-300">
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                </button>
              </span>
            </div>

            <nav className="hidden items-center gap-5 xl:gap-7 lg:flex" aria-label="Navegação principal">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={active === link.href ? "page" : undefined}
                  className={`text-[12px] font-normal tracking-tight transition hover:text-mist-100 ${active === link.href ? "font-semibold text-gold-300" : "text-mist-300"}`}
                >
                  {link.label}
                </a>
              ))}
              <a href="mailto:lesteraf@gmail.com?subject=Conversa%20estrat%C3%A9gica%20pelo%20site" className="rounded-full bg-mist-100 px-4 py-1.5 text-[12px] font-semibold tracking-tight text-black transition hover:bg-gold-300">
                Contato
              </a>
            </nav>

            <div className="flex items-center gap-2 lg:hidden">
              <a href="mailto:lesteraf@gmail.com?subject=Conversa%20estrat%C3%A9gica%20pelo%20site" className="rounded-full bg-mist-100 px-4 py-1.5 text-[12px] font-semibold text-black">
                Contato
              </a>
              <button
                className="rounded-full border border-white/10 p-2 text-mist-300"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                aria-expanded={open}
                aria-controls="mobile-navigation"
                onClick={() => setOpen(!open)}
              >
                {open ? <X size={15} /> : <Menu size={15} />}
              </button>
            </div>
          </div>

          {open && (
            <nav id="mobile-navigation" className="mx-3 mb-3 rounded-2xl border border-white/10 bg-obsidian/95 p-2 backdrop-blur-xl lg:hidden" aria-label="Menu móvel">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={active === link.href ? "page" : undefined}
                  className={`block rounded-xl px-4 py-3 text-[14px] tracking-tight transition hover:bg-white/5 ${active === link.href ? "font-semibold text-gold-300" : "text-mist-100"}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}
        </motion.div>
      </motion.header>
    </>
  );
}
