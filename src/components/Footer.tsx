const EMAIL = "lesteraf@gmail.com";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-extrabold text-gold-300">LF</p>
          <p className="mt-1 font-mono text-xs font-semibold text-mist-100">
            Lester Faria
          </p>
          <p className="font-mono text-[11px] text-mist-500">
            Where Technology Becomes Business.
          </p>
        </div>
        <nav aria-label="Atuação" className="flex flex-col gap-2 font-mono text-xs text-mist-300">
          <span className="text-[10px] tracking-widest text-mist-500 uppercase">
            Atuação
          </span>
          {["Executive Advisory", "Complex Systems Lab", "Deep Tech Ventures", "Alpha Finder", "Selected Missions"].map((a) => (
            <a key={a} className="transition hover:text-gold-300" href={a === "Selected Missions" ? "#/missions" : "#/advisory"}>
              {a}
            </a>
          ))}
        </nav>
        <nav aria-label="Conexões" className="flex flex-col gap-2 font-mono text-xs text-mist-300">
          <span className="text-[10px] tracking-widest text-mist-500 uppercase">
            Conexões
          </span>
          <a className="transition hover:text-gold-300" href="#/missions">Selected Missions</a>
          <a className="transition hover:text-gold-300" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a className="transition hover:text-gold-300" href="https://www.linkedin.com/in/lesterfaria/">LinkedIn</a>
          <a className="transition hover:text-gold-300" href="https://www.instagram.com/prof_dr_lester/">Instagram</a>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2 px-6 py-4 font-mono text-[10px] tracking-widest text-mist-500 uppercase">
          <span>© 2026 Lester Faria. Todos os direitos reservados.</span>
          <span>Strategic clarity for complex decisions.</span>
        </div>
      </div>
    </footer>
  );
}
