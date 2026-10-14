import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
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
  const timelineRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  // O efeito pinado (sticky + deslocamento horizontal pelo scroll vertical)
  // só existe no layout lg. Abaixo disso a timeline é um carrossel nativo,
  // então o transform precisa ficar desligado para não brigar com o gesto.
  const [pinEnabled, setPinEnabled] = useState(
    () => window.matchMedia("(min-width: 1024px)").matches,
  );

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const onChange = () => setPinEnabled(query.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-56%"]);
  const timelineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const trackMotion = reduceMotion || !pinEnabled;

  return (
    <>
      <section id="atuacao" className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <SectionHead
          eyebrow="Strategic services & proprietary initiatives"
          title="Quatro formas de transformar complexidade em valor."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {SERVICES.map((service) => (
            <a key={service.n} href={service.href} className="card-soft group block p-7 transition">
              <div className="flex items-start justify-between">
                <span className="font-mono2 text-[12px] font-semibold text-gold-600">{service.n}</span>
                <ArrowUpRight size={18} className="text-mist-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-300" />
              </div>
              <p className="mt-4 font-mono2 text-[10px] tracking-[0.22em] text-gold-500 uppercase">{service.kicker}</p>
              <p className="mt-2 text-[24px] leading-[1.15] font-semibold tracking-tight text-mist-100">{service.title}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-mist-500">{service.desc}</p>
              <p className="mt-5 border-t border-white/10 pt-4 text-[13px] text-mist-300">
                <span className="text-mist-500">Entrega central — </span>{service.outcome}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section id="metodo" ref={timelineRef} className="method-timeline border-t border-white/[0.07] bg-obsidian/60 lg:h-[250vh]">
        <div className="mx-auto max-w-5xl px-5 py-20 md:py-28 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:overflow-hidden lg:py-16">
          <SectionHead
            eyebrow="Complex Decision Architecture"
            title="Meu trabalho não começa pela tecnologia. Começa pelo problema."
          />
          <div className="mt-12 snap-x snap-mandatory overflow-x-auto pb-5 lg:snap-none lg:overflow-visible" tabIndex={0} aria-label="Timeline horizontal do método">
            <p className="sr-only">Quatro etapas do método, da leitura do sistema à governança do resultado.</p>
            <motion.ol
              style={trackMotion ? undefined : { x }}
              className="method-timeline-track relative grid min-w-max grid-cols-4 gap-4 pb-4 lg:gap-6"
            >
              <div aria-hidden="true" className="pointer-events-none absolute left-0 right-0 top-[13px] h-px bg-gold-600/25">
                <motion.div className="h-full origin-left bg-gold-400" style={trackMotion ? { scaleX: 1 } : { scaleX: timelineProgress }} />
              </div>
              {STEPS.map((step, index) => (
                <motion.li
                  key={step.n}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: reduceMotion ? 0 : index * 0.08 }}
                  className="relative w-[min(76vw,320px)] snap-start border-t border-white/10 pt-7 lg:w-[min(29vw,340px)]"
                >
                  <span aria-hidden="true" className="absolute -top-[6px] left-0 h-3 w-3 rounded-full border-2 border-obsidian bg-gold-400 shadow-[0_0_20px_rgba(212,175,55,.55)]" />
                  <p className="font-mono2 text-[12px] font-semibold text-gold-400">{step.n}<span className="ml-2 text-mist-500">/ 04</span></p>
                  <h3 className="mt-2 text-[18px] font-semibold tracking-tight text-mist-100">{step.t}</h3>
                  <p className="mt-2 min-h-[72px] text-[13px] leading-relaxed text-mist-500">{step.d}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {step.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-mist-300">{tag}</span>
                    ))}
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </div>
          <p className="card-soft mt-6 px-6 py-5 text-center text-[14px] tracking-tight text-gold-200">
            A incerteza não é eliminada. Ela é estruturada, reduzida e gerenciada.
          </p>
        </div>
      </section>
    </>
  );
}
