import { ArrowUpRight } from "lucide-react";

const SERVICES = [
  {
    n: "01",
    kicker: "Executive Advisory",
    title: "Decisões melhores quando errar custa caro.",
    desc: "Atuação recorrente junto a CEOs, donos de empresas, conselhos e investidores para avaliar cenários, desafiar premissas e acompanhar decisões críticas.",
    outcome: "Clareza executiva e governança da decisão.",
  },
  {
    n: "02",
    kicker: "Complex Systems Lab",
    title: "Problemas que nenhuma disciplina resolve isoladamente.",
    desc: "Diagnóstico, arquitetura e orquestração de soluções envolvendo tecnologias, empresas, universidades, especialistas e instituições.",
    outcome: "Arquitetura do sistema, parceiros e rota de validação.",
  },
  {
    n: "03",
    kicker: "Deep Tech Ventures",
    title: "Tecnologia promissora ainda não é um negócio.",
    desc: "Advisory para transformar conhecimento avançado em proposta de valor, modelo de negócio, estratégia de validação e rota para mercado.",
    outcome: "Tese tecnológica, empresarial e de crescimento.",
  },
  {
    n: "04",
    kicker: "Proprietary Initiative · In Development",
    title: "Alpha Finder: dispersão transformada em foco.",
    desc: "Inteligência de portfólios para identificar padrões, comparar oportunidades e priorizar decisões por meio de IA e algoritmos avançados.",
    outcome: "Priorização explicável e orientada a valor.",
  },
];

const STEPS = [
  {
    n: "01",
    t: "Read the system",
    d: "Dados, restrições, histórico, interesses, pessoas, riscos e sinais fracos.",
    tags: ["Evidence", "Stakeholder intelligence"],
  },
  {
    n: "02",
    t: "Frame the decision",
    d: "Separação entre sintomas, causas, dependências, alternativas e consequências.",
    tags: ["Decomposition", "Scenario architecture"],
  },
  {
    n: "03",
    t: "Build the route",
    d: "Escolha da direção, desenho da arquitetura e validação controlada da hipótese.",
    tags: ["Strategic decision", "Pilot & validation"],
  },
  {
    n: "04",
    t: "Govern the outcome",
    d: "Responsabilidades, indicadores, ciclos de revisão e condições para escala.",
    tags: ["Execution", "Scale & governance"],
  },
];

export default function Services() {
  return (
    <>
      <section id="atuacao" className="border-y border-white/10 bg-obsidian">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
            Strategic services &amp; proprietary initiatives
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight font-extrabold md:text-4xl">
            Quatro formas de transformar complexidade em valor.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
            {SERVICES.map((s) => (
              <a
                key={s.n}
                href="#contato"
                className="gold-border group rounded-2xl bg-void p-6 transition hover:border-gold-500/60"
              >
                <div className="flex items-start justify-between">
                  <span className="font-display text-lg font-extrabold text-gold-600">
                    {s.n}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-gold-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
                <p className="mt-3 font-mono text-[10px] tracking-widest text-gold-500 uppercase">
                  {s.kicker}
                </p>
                <p className="font-display mt-1 text-2xl leading-snug font-bold">
                  {s.title}
                </p>
                <p className="mt-2 font-mono text-[12px] leading-relaxed text-mist-500">
                  {s.desc}
                </p>
                <p className="mt-3 border-t border-white/10 pt-3 font-mono text-[11px] text-mist-300">
                  <span className="text-mist-500">Entrega central — </span>
                  {s.outcome}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
          Complex Decision Architecture
        </p>
        <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight font-extrabold md:text-4xl">
          Meu trabalho não começa pela tecnologia. Começa pelo problema.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s) => (
            <article key={s.n} className="gold-border rounded-2xl bg-obsidian p-5">
              <p className="font-display text-lg font-extrabold text-gold-300">
                {s.n}
              </p>
              <h3 className="font-display mt-1 text-lg font-bold">{s.t}</h3>
              <p className="mt-2 font-mono text-[11px] leading-relaxed text-mist-500">
                {s.d}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 px-2.5 py-0.5 font-mono text-[10px] text-mist-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 rounded-2xl border border-gold-500/25 bg-gold-900/20 px-5 py-4 text-center font-mono text-xs leading-relaxed text-gold-200">
          A incerteza não é eliminada. Ela é estruturada, reduzida e gerenciada.
        </p>
      </section>
    </>
  );
}
