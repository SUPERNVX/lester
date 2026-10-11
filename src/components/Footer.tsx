import { motion, useReducedMotion } from "motion/react";

const EMAIL = "lesteraf@gmail.com";

const PRACTICE = [
  { label: "Executive Advisory", href: "#/advisory" },
  { label: "Complex Systems Lab", href: "#/complex-systems" },
  { label: "Deep Tech Ventures", href: "#/deep-tech" },
  { label: "Alpha Finder", href: "#/alpha-finder" },
  { label: "Selected Missions", href: "#/missions" },
];

export default function Footer() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.footer
      className="border-t border-white/[0.07]"
      initial={reduceMotion ? false : { y: 12 }}
      animate={{ y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-10 px-5 py-12 md:grid-cols-4">
        <div className="col-span-2 md:col-span-2">
          <p className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-b from-gold-300 to-gold-600 font-accent text-[10px] font-bold text-black">
              LF
            </span>
            <span className="text-[14px] font-semibold tracking-tight">Lester Faria</span>
          </p>
          <p className="mt-2 text-[13px] text-mist-500">
            Where Technology Becomes Business.
          </p>
          <div aria-hidden="true" className="dither-dots mt-5 h-6 w-32 opacity-40" />
        </div>
        <nav aria-label="Atuação" className="flex flex-col gap-2.5 text-[13px]">
          <span className="font-mono2 text-[10px] tracking-[0.2em] text-mist-500 uppercase">
            Atuação
          </span>
          {PRACTICE.map((a) => (
            <a key={a.label} className="text-mist-300 transition hover:text-gold-300" href={a.href}>
              {a.label}
            </a>
          ))}
        </nav>
        <nav aria-label="Conexões" className="flex flex-col gap-2.5 text-[13px]">
          <span className="font-mono2 text-[10px] tracking-[0.2em] text-mist-500 uppercase">
            Conexões
          </span>
          <a className="text-mist-300 transition hover:text-gold-300" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a className="text-mist-300 transition hover:text-gold-300" href="https://www.linkedin.com/in/lesterfaria/">LinkedIn</a>
          <a className="text-mist-300 transition hover:text-gold-300" href="https://www.instagram.com/prof_dr_lester/">Instagram</a>
        </nav>
      </div>
      <div className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-between gap-2 px-5 py-5 font-mono2 text-[10px] tracking-[0.14em] text-mist-500 uppercase">
          <span>© 2026 Lester Faria. Todos os direitos reservados.</span>
          <span>Strategic clarity for complex decisions.</span>
        </div>
      </div>
    </motion.footer>
  );
}
