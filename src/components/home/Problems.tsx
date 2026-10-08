const PROBLEMS = [
  {
    t: "Decisões críticas sob incerteza",
    d: "Cenários múltiplos, dados incompletos, sem resposta óbvia.",
  },
  {
    t: "Sistemas que ninguém integra",
    d: "Tecnologias, áreas e instituições operando desconectadas.",
  },
  {
    t: "Tecnologia sem rota de mercado",
    d: "Pesquisa forte, proposta de valor e negócio indefinidos.",
  },
  {
    t: "Portfólios dispersos",
    d: "Muitas frentes abertas, pouca priorização explicável.",
  },
  {
    t: "Governança frágil da decisão",
    d: "Papéis, ritos de revisão e critérios pouco definidos.",
  },
  {
    t: "Risco técnico e regulatório",
    d: "Exposição relevante ainda não mapeada nem tratada.",
  },
  {
    t: "Liderança técnica em transição",
    d: "Sucessão, formação de quadros e continuidade do conhecimento.",
  },
  {
    t: "Cooperação entre instituições",
    d: "Interesses distintos precisando convergir num objetivo comum.",
  },
];

export default function Problems() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
      <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
        Diagnóstico de entrada
      </p>
      <h2 className="font-display mt-4 max-w-xl text-3xl leading-tight font-extrabold md:text-4xl">
        Problemas que normalmente chegam até mim.
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {PROBLEMS.map((p, i) => (
          <div key={p.t} className="gold-border rounded-2xl bg-obsidian p-5">
            <p className="font-mono text-[11px] text-gold-600">
              {String(i + 1).padStart(2, "0")}
            </p>
            <p className="font-display mt-1 text-lg leading-snug font-bold">
              {p.t}
            </p>
            <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-mist-500">
              {p.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
