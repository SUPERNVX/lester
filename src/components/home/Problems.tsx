import { SectionHead } from "../Apple";

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
    <section className="border-t border-white/[0.07] bg-obsidian/60">
      <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <SectionHead
          eyebrow="Diagnóstico de entrada"
          title="Problemas que normalmente chegam até mim."
          sub="Oito padrões recorrentes — se um deles descreve seu momento, vale uma conversa."
        />
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p, i) => (
            <div key={p.t} className="card-soft p-5 transition">
              <p className="font-mono2 text-[11px] font-semibold text-gold-600">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 text-[16px] leading-snug font-semibold tracking-tight text-mist-100">
                {p.t}
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-mist-500">
                {p.d}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
