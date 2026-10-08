import portrait from "../assets/hero-lester.webp";

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
  return (
    <div className="min-h-screen bg-void text-mist-100">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={portrait}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-2/3 object-cover object-top opacity-25 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/30" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
            Executive Advisory
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-tight font-extrabold md:text-6xl">
            Decisões melhores para ambientes em que{" "}
            <em className="gold-glow text-gold-300">errar custa caro.</em>
          </h1>
          <p className="mt-5 max-w-xl font-mono text-sm leading-relaxed text-mist-300">
            Atuação independente ao lado de CEOs, donos de empresas,
            investidores e lideranças que precisam tomar decisões críticas
            com maior clareza, profundidade e segurança.
          </p>
          <a
            className="mt-7 inline-block rounded-full bg-gold-500 px-6 py-3 font-mono text-[11px] font-bold tracking-widest text-black uppercase transition hover:bg-gold-400"
            href={`mailto:${EMAIL}?subject=Conversar%20sobre%20advisory`}
          >
            Conversar sobre advisory ↗
          </a>
        </div>
      </section>

      {/* Quando faz sentido */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
            Quando faz sentido
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold md:text-4xl">
            A complexidade supera as respostas convencionais.
          </h2>
        </div>
        <div className="space-y-3 md:col-span-7">
          {SIGNALS.map((s) => (
            <div key={s.n} className="gold-border flex gap-4 rounded-2xl bg-obsidian p-5">
              <span className="font-display text-sm font-extrabold text-gold-600">
                {s.n}
              </span>
              <div>
                <p className="font-display text-lg font-bold">{s.t}</p>
                <p className="mt-1 font-mono text-[12px] leading-relaxed text-mist-500">
                  {s.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="border-y border-white/10 bg-obsidian">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
                Como funciona
              </p>
              <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold md:text-4xl">
                Advisory recorrente. Não uma opinião eventual.
              </h2>
            </div>
            <p className="font-mono text-sm leading-relaxed text-mist-300 md:self-end">
              A relação é estruturada por reuniões mensais, participação em
              fóruns estratégicos e disponibilidade para situações críticas
              previamente acordadas.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {MECHANICS.map((m) => (
              <div key={m.n} className="gold-border rounded-2xl bg-void p-5">
                <p className="font-display text-sm font-extrabold text-gold-600">
                  {m.n}
                </p>
                <p className="font-display mt-1 text-lg font-bold">{m.t}</p>
                <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-mist-500">
                  {m.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limites claros */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
            Limites claros
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold md:text-4xl">
            Advisory não é terceirização da liderança.
          </h2>
        </div>
        <div className="md:col-span-7">
          <div className="space-y-3 font-mono text-sm leading-relaxed text-mist-300">
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
          <div className="gold-border mt-6 rounded-2xl bg-obsidian p-6">
            <p className="font-display text-xl font-bold text-gold-200">
              Ao final, a organização deverá saber:
            </p>
            <ul className="mt-4 space-y-2.5">
              {OUTCOMES.map((o) => (
                <li key={o} className="flex gap-3 font-mono text-[13px] text-mist-300">
                  <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Experiência executiva */}
      <section className="border-t border-white/10 bg-obsidian">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-6">
            <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
              Experiência executiva
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold md:text-4xl">
              Conheço a diferença entre recomendar uma decisão e{" "}
              <em className="gold-glow text-gold-300">responder por suas consequências.</em>
            </h2>
          </div>
          <div className="md:col-span-6">
            <p className="font-mono text-sm leading-relaxed text-mist-300">
              Minha atuação em advisory é sustentada por experiência C-Level
              em instituições públicas e privadas, gestão de projetos
              estratégicos, liderança de P&D, empreendedorismo e participação
              em empresas, startups e conselhos.
            </p>
            <figure className="mt-6 border-l-2 border-gold-500 pl-5">
              <blockquote className="font-display text-2xl leading-snug text-gold-200">
                “Possui rara visão estratégica e capacidade operacional.”
              </blockquote>
              <figcaption className="mt-3 font-mono text-[11px] text-mist-500">
                <span className="font-semibold text-mist-300">Sávio Júnior</span>
                <br />
                Senior Innovation &amp; Technology Leader
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="gold-border grid grid-cols-1 items-center gap-6 rounded-3xl bg-obsidian p-8 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] text-gold-500 uppercase">
              Executive Advisory
            </p>
            <p className="font-display mt-2 max-w-xl text-3xl leading-tight font-extrabold md:text-4xl">
              Sua próxima decisão merece uma análise mais profunda?
            </p>
            <p className="mt-2 font-mono text-xs text-mist-500">
              Vamos conversar sobre contexto, riscos e o tipo de relação mais adequado.
            </p>
          </div>
          <a
            className="rounded-full bg-gold-500 px-6 py-3 text-center font-mono text-[11px] font-bold tracking-widest text-black uppercase transition hover:bg-gold-400"
            href={`mailto:${EMAIL}?subject=Solicitar%20conversa%20sobre%20advisory`}
          >
            Solicitar conversa ↗
          </a>
        </div>
      </section>
    </div>
  );
}
