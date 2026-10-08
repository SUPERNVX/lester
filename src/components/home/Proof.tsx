const PROOFS = [
  { value: "40+", label: "projetos estratégicos e de P&D" },
  { value: "Board & Advisory", label: "atuação nacional e internacional" },
  { value: "10+", label: "empresas e startups como fundador, sócio ou investidor" },
  { value: "20+", label: "mestres e doutores formados" },
];

export default function Proof() {
  return (
    <>
      <section aria-label="Indicadores de experiência" className="border-b border-white/10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-10 lg:grid-cols-4">
          {PROOFS.map((p) => (
            <div key={p.value}>
              <p className="font-mono text-2xl font-semibold text-gold-300">
                {p.value}
              </p>
              <p className="mt-1 font-mono text-[11px] leading-relaxed text-mist-500">
                {p.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-8">
          <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
            Quando os stakes são altos e o caminho não é claro
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold md:text-5xl">
            Organizações sofrem por falta de{" "}
            <em className="gold-glow text-gold-300">arquitetura.</em>
          </h2>
          <div className="mt-6 max-w-2xl space-y-3 font-mono text-sm leading-relaxed text-mist-300">
            <p>
              Problemas relevantes atravessam áreas, interesses, restrições e
              horizontes de tempo. Quando tecnologia, negócio, governança,
              capital e pessoas são tratados separadamente, a organização
              perde velocidade e aumenta sua exposição ao risco.
            </p>
            <p>
              Meu papel é ler o sistema completo, identificar o que está
              oculto e construir uma arquitetura de decisão que possa ser
              defendida, executada e governada.
            </p>
          </div>
        </div>
        <aside className="md:col-span-4">
          <div className="rounded-2xl border border-gold-500/25 bg-gold-900/20 p-6">
            <p className="font-mono text-[10px] tracking-widest text-gold-500 uppercase">
              Strategic principle
            </p>
            <p className="font-display mt-2 text-2xl leading-snug font-bold text-gold-200">
              “I connect what others are not seeing.”
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
