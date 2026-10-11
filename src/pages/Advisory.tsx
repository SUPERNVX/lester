import { motion, useReducedMotion } from "motion/react";
import portrait from "../assets/hero-lester.webp";
import { DitherStrip, Eyebrow, PrimaryCta } from "../components/Apple";

const EMAIL = "lesteraf@gmail.com";

const SIGNALS = [
  {
    n: "01",
    t: "Decisão relevante",
    d: "Crescer, investir, mudar de mercado, adquirir uma tecnologia, reorganizar um portfólio ou revisar a direção.",
  },
  {
    n: "02",
    t: "Planejamento sem aderência",
    d: "As metas continuam existindo, mas o ambiente, o mercado ou a capacidade de execução mudaram.",
  },
  {
    n: "03",
    t: "Contraponto independente",
    d: "O CEO precisa de alguém sem agenda política interna, capaz de testar premissas e expor pontos cegos.",
  },
  {
    n: "04",
    t: "OKRs e KPIs desalinhados",
    d: "A empresa acompanha atividade, mas não sabe se está realmente avançando em direção ao resultado.",
  },
  {
    n: "05",
    t: "Tecnologia tornou-se estratégica",
    d: "A decisão já não pode permanecer restrita ao departamento técnico.",
  },
];

const MECHANICS = [
  {
    n: "01",
    t: "Agenda mensal",
    d: "Decisões prioritárias, evolução dos projetos críticos, riscos e mudanças de cenário.",
  },
  {
    n: "02",
    t: "Reuniões estratégicas",
    d: "Participação em momentos que exigem discussão estruturada ou leitura tecnológica.",
  },
  {
    n: "03",
    t: "Revisão de estratégia",
    d: "Aderência entre tese, execução, OKRs, KPIs e resultados reais.",
  },
  {
    n: "04",
    t: "Roadmaps",
    d: "Prioridades, etapas, responsáveis, dependências e critérios de acompanhamento.",
  },
  {
    n: "05",
    t: "Governança",
    d: "Fóruns, responsabilidades, direitos de decisão e cadência de revisão.",
  },
  {
    n: "06",
    t: "Strategic sparring",
    d: "Questionamento independente para ampliar a qualidade das escolhas executivas.",
  },
];

const OUTCOMES = [
  "onde quer chegar e quais decisões precisa tomar;",
  "o que não deve fazer e quais riscos precisa mitigar;",
  "quais capacidades precisa construir;",
  "quem responde por cada etapa;",
  "como o progresso será medido;",
  "em que condições a estratégia deverá ser revisada.",
];

export default function Advisory() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="min-h-screen bg-void text-mist-100">
      {/* Hero Apple */}
      <section className="dither-panel relative overflow-hidden">
        <img
          src={portrait}
          alt=""
          aria-hidden="true"
          className="advisory-bg img-apple pointer-events-none absolute inset-y-0 right-0 h-full w-1/2 object-cover object-top opacity-30"
        />
        <motion.div aria-hidden="true" className="advisory-dither-frame pointer-events-none absolute inset-y-5 right-5 w-[calc(50%-2rem)] rounded-[28px] border border-gold-300/20" animate={reduceMotion ? undefined : { opacity: [0.4, 0.85, 0.4] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/35" />
        <div className="relative mx-auto max-w-5xl px-5 py-16 md:py-24">
          <Eyebrow>Executive Advisory</Eyebrow>
          <h1 className="headline mt-4 max-w-3xl text-[40px] md:text-[64px]">
            Decisões melhores para ambientes em que{" "}
            <span className="bg-gradient-to-b from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              errar custa caro.
            </span>
          </h1>
          <p className="subhead mt-5 max-w-xl">
            Atuação independente ao lado de CEOs, donos de empresas,
            investidores e lideranças que precisam tomar decisões críticas
            com maior clareza, profundidade e segurança.
          </p>
          <div className="mt-8">
            <PrimaryCta href={`mailto:${EMAIL}?subject=Conversar%20sobre%20advisory`}>
              Conversar sobre advisory ↗
            </PrimaryCta>
          </div>
        </div>
      </section>

      <DitherStrip className="mx-auto max-w-2xl" />

      {/* Quando faz sentido */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <Eyebrow>Quando faz sentido</Eyebrow>
          <h2 className="headline mt-4 text-[30px] md:text-[40px]">
            A complexidade supera as respostas convencionais.
          </h2>
        </div>
        <div className="space-y-3 md:col-span-7">
          {SIGNALS.map((s, index) => (
            <motion.div key={s.n} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.09 }} className="card-soft flex gap-4 p-5">
              <span className="font-mono2 text-[12px] font-semibold text-gold-500">
                {s.n}
              </span>
              <div>
                <p className="text-[17px] font-semibold tracking-tight">{s.t}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-mist-500">
                  {s.d}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="border-y border-white/[0.07] bg-obsidian/60">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <Eyebrow>Como funciona</Eyebrow>
              <h2 className="headline mt-4 text-[30px] md:text-[40px]">
                Advisory recorrente. Não uma opinião eventual.
              </h2>
            </div>
            <p className="text-[15px] leading-relaxed text-mist-300 md:self-end">
              A relação é estruturada por reuniões mensais, participação em
              fóruns estratégicos e disponibilidade para situações críticas
              previamente acordadas.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {MECHANICS.map((m) => (
              <div key={m.n} className="card-soft p-6">
                <p className="font-mono2 text-[12px] font-semibold text-gold-500">
                  {m.n}
                </p>
                <p className="mt-1.5 text-[17px] font-semibold tracking-tight">{m.t}</p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-mist-500">
                  {m.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limites claros */}
      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <Eyebrow>Limites claros</Eyebrow>
          <h2 className="headline mt-4 text-[30px] md:text-[40px]">
            Advisory não é terceirização da liderança.
          </h2>
        </div>
        <div className="md:col-span-7">
          <div className="space-y-4 text-[15px] leading-relaxed text-mist-300">
            <p>
              Não substituo o CEO, a diretoria ou o conselho. Também não entro
              para validar uma decisão já tomada ou produzir apresentações
              que apenas confirmem a narrativa existente.
            </p>
            <p>
              Meu papel é aumentar a qualidade da decisão, desafiar
              premissas, estruturar alternativas e apoiar a organização na
              transformação da estratégia em execução mensurável.
            </p>
          </div>
          <div className="card-soft mt-6 p-6">
            <p className="text-[20px] font-semibold tracking-tight text-gold-200">
              Ao final, a organização deverá saber:
            </p>
            <ul className="mt-4 space-y-2.5">
              {OUTCOMES.map((o) => (
                <li key={o} className="flex gap-3 text-[14px] text-mist-300">
                  <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Experiência executiva */}
      <section className="border-t border-white/[0.07] bg-obsidian/60">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-6">
            <Eyebrow>Experiência executiva</Eyebrow>
            <h2 className="headline mt-4 text-[30px] md:text-[40px]">
              Conheço a diferença entre recomendar uma decisão e{" "}
              <span className="text-gold-300">responder por suas consequências.</span>
            </h2>
          </div>
          <div className="md:col-span-6">
            <p className="text-[15px] leading-relaxed text-mist-300">
              Minha atuação em advisory é sustentada por experiência C-Level
              em instituições públicas e privadas, gestão de projetos
              estratégicos, liderança de P&D, empreendedorismo e participação
              em empresas, startups e conselhos.
            </p>
            <figure className="mt-6 border-l-2 border-gold-500 pl-5">
              <blockquote className="text-[22px] leading-snug tracking-tight text-gold-200">
                “Possui rara visão estratégica e capacidade operacional.”
              </blockquote>
              <figcaption className="mt-3 text-[12px] text-mist-500">
                <span className="font-semibold text-mist-300">Sávio Júnior</span>
                <br />
                Senior Innovation &amp; Technology Leader
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="card-soft grid grid-cols-1 items-center gap-6 p-8 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <Eyebrow>Executive Advisory</Eyebrow>
            <p className="headline mt-3 max-w-xl text-[28px] md:text-[36px]">
              Sua próxima decisão merece uma análise mais profunda?
            </p>
            <p className="mt-2 text-[13px] text-mist-500">
              Vamos conversar sobre contexto, riscos e o tipo de relação mais adequado.
            </p>
          </div>
          <PrimaryCta href={`mailto:${EMAIL}?subject=Solicitar%20conversa%20sobre%20advisory`}>
            Solicitar conversa ↗
          </PrimaryCta>
        </div>
      </section>
    </div>
  );
}
