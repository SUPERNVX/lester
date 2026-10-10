import { ArrowUpRight } from "lucide-react";
import { SectionHead } from "../Apple";

const SERVICES = [
  {
    n: "01",
    kicker: "Executive Advisory",
    href: "#/advisory",
    title: "Decisões melhores quando errar custa caro.",
    desc: "Atuação recorrente junto a CEOs, donos de empresas, conselhos e investidores para avaliar cenários, desafiar premissas e acompanhar decisões críticas.",
    outcome: "Clareza executiva e governança da decisão.",
  },
  {
    n: "02",
    kicker: "Complex Systems Lab",
    href: "#/complex-systems",
    title: "Problemas que nenhuma disciplina resolve isoladamente.",
    desc: "Diagnóstico, arquitetura e orquestração de soluções envolvendo tecnologias, empresas, universidades, especialistas e instituições.",
    outcome: "Arquitetura do sistema, parceiros e rota de validação.",
  },
  {
    n: "03",
    kicker: "Deep Tech Ventures",
    href: "#/deep-tech",
    title: "Tecnologia promissora ainda não é um negócio.",
    desc: "Advisory para transformar conhecimento avançado em proposta de valor, modelo de negócio, estratégia de validação e rota para mercado.",
    outcome: "Tese tecnológica, empresarial e de crescimento.",
  },
  {
    n: "04",
    kicker: "Proprietary Initiative · In Development",
    href: "#/alpha-finder",
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
      <section id="atuacao" className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <SectionHead
          eyebrow="Strategic services & proprietary initiatives"
          title="Quatro formas de transformar complexidade em valor."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {SERVICES.map((s) => (
            <a
              key={s.n}
              href={s.href}
              className="card-soft group block p-7 transition"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono2 text-[12px] font-semibold text-gold-600">
                  {s.n}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-mist-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-300"
                />
              </div>
              <p className="mt-4 font-mono2 text-[10px] tracking-[0.22em] text-gold-500 uppercase">
                {s.kicker}
              </p>
              <p className="mt-2 text-[24px] leading-[1.15] font-semibold tracking-tight text-mist-100">
                {s.title}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-mist-500">
                {s.desc}
              </p>
              <p className="mt-5 border-t border-white/10 pt-4 text-[13px] text-mist-300">
                <span className="text-mist-500">Entrega central — </span>
                {s.outcome}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section id="metodo" className="border-t border-white/[0.07] bg-obsidian/60">
        <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
          <SectionHead
            eyebrow="Complex Decision Architecture"
            title="Meu trabalho não começa pela tecnologia. Começa pelo problema."
          />
          <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s) => (
              <li key={s.n} className="border-t border-gold-600/40 pt-5">
                <p className="font-mono2 text-[12px] font-semibold text-gold-400">
                  {s.n}
                </p>
                <h3 className="mt-2 text-[18px] font-semibold tracking-tight">
                  {s.t}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-mist-500">
                  {s.d}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-mist-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>
          <p className="card-soft mt-10 px-6 py-5 text-center text-[14px] tracking-tight text-gold-200">
            A incerteza não é eliminada. Ela é estruturada, reduzida e gerenciada.
          </p>
        </div>
      </section>
    </>
  );
}
