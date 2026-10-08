import heroBg from "../assets/facens.webp";

const EMAIL = "lesteraf@gmail.com";

const CAPABILITIES = [
  {
    t: "Critérios e comparação",
    d: "Estruturação de critérios, comparação multicritério e priorização de projetos.",
  },
  {
    t: "Padrões e risco",
    d: "Identificação de padrões, apoio à análise de risco e simulação de cenários.",
  },
  {
    t: "Otimização",
    d: "Apoio à alocação, acompanhamento de hipóteses e revisão dinâmica de prioridades.",
  },
];

const APPLICATIONS = [
  "Portfólios de inovação",
  "Projetos de P&D",
  "Investimentos tecnológicos",
  "Biodiversidade e ativos científicos",
  "Novos materiais",
  "Oportunidades empresariais",
  "Seleção de projetos",
  "Programas de inovação",
  "Ativos de alta complexidade",
];

export default function AlphaFinder() {
  return (
    <div className="min-h-screen bg-void text-mist-100">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/40" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-void to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
            Proprietary initiative — in development
          </p>
          <h1 className="font-display mt-4 text-5xl leading-tight font-extrabold md:text-7xl">
            Alpha Finder
          </h1>
          <p className="mt-4 max-w-xl font-mono text-sm leading-relaxed text-mist-300">
            Transformar dispersão em foco, priorização e decisão.
          </p>
          <p className="mt-4 inline-block rounded-full border border-gold-600/60 bg-gold-900/30 px-3 py-1 font-mono text-[10px] tracking-widest text-gold-300 uppercase">
            Iniciativa proprietária em desenvolvimento
          </p>
          <div>
            <a
              className="mt-5 inline-block rounded-full bg-gold-500 px-6 py-3 font-mono text-[11px] font-bold tracking-widest text-black uppercase transition hover:bg-gold-400"
              href={`mailto:${EMAIL}?subject=Manifestar%20interesse%20—%20Alpha%20Finder`}
            >
              Manifestar interesse ↗
            </a>
          </div>
        </div>
      </section>

      {/* Problema */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:py-20">
        <h2 className="font-display text-3xl leading-tight font-extrabold md:col-span-5 md:text-4xl">
          Mais oportunidades não significam melhores decisões.
        </h2>
        <div className="space-y-3 font-mono text-sm leading-relaxed text-mist-300 md:col-span-7">
          <p>
            A gestão de portfólios convive com informações incompletas,
            critérios conflitantes e mudanças rápidas de contexto.
          </p>
          <p>
            Decisões importantes acabam sendo influenciadas por excesso de
            dados, vieses, urgências artificiais e ausência de uma
            metodologia consistente de priorização.
          </p>
        </div>
      </section>

      {/* Hipótese */}
      <section className="border-y border-white/10 bg-obsidian">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-6">
            <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
              A hipótese
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold md:text-4xl">
              Portfólios complexos podem ser tratados{" "}
              <em className="gold-glow text-gold-300">como sistemas de decisão.</em>
            </h2>
          </div>
          <div className="space-y-3 font-mono text-sm leading-relaxed text-mist-300 md:col-span-6">
            <p>
              O Alpha Finder explora a combinação de inteligência
              artificial, otimização, algoritmos avançados e arquitetura
              estratégica para apoiar a análise de oportunidades.
            </p>
            <p>
              A proposta não é substituir julgamento executivo, mas ampliar
              a capacidade de comparar alternativas, testar critérios e
              identificar relações que não são evidentes por métodos
              convencionais.
            </p>
          </div>
        </div>
      </section>

      {/* Capacidades */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
          Capacidades em estudo
        </p>
        <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight font-extrabold md:text-4xl">
          Uma camada de inteligência para priorização.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
          {CAPABILITIES.map((c) => (
            <div key={c.t} className="gold-border rounded-2xl bg-obsidian p-6">
              <p className="font-display text-lg font-bold">{c.t}</p>
              <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-mist-500">
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Aplicações */}
      <section className="border-y border-white/10 bg-obsidian">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
            Aplicações potenciais
          </p>
          <h2 className="font-display mt-4 max-w-3xl text-3xl leading-tight font-extrabold md:text-4xl">
            Múltiplos portfólios. Uma mesma questão: onde concentrar
            recursos?
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {APPLICATIONS.map((a) => (
              <div
                key={a}
                className="rounded-xl border border-white/10 bg-void px-4 py-3 font-mono text-[12px] text-mist-300"
              >
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confidencialidade */}
      <section className="mx-auto max-w-6xl px-6 pt-16 md:pt-20">
        <div className="gold-border rounded-2xl bg-obsidian p-6 md:p-8">
          <p className="font-display text-xl font-bold text-gold-200">
            Confidencialidade e propriedade intelectual
          </p>
          <p className="mt-2 max-w-4xl font-mono text-[12px] leading-relaxed text-mist-500">
            Modelos proprietários, códigos, critérios específicos, parcerias
            confidenciais, casos de uso autorizados e lógica operacional
            permanecerão protegidos. O Alpha Finder será apresentado
            publicamente somente no nível necessário para demonstrar sua
            proposta e permitir validações estratégicas.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="gold-border grid grid-cols-1 items-center gap-6 rounded-3xl bg-obsidian p-8 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] text-gold-500 uppercase">
              Alpha Finder
            </p>
            <p className="font-display mt-2 max-w-xl text-3xl leading-tight font-extrabold md:text-4xl">
              Interesse em acompanhar o desenvolvimento?
            </p>
            <p className="mt-2 max-w-xl font-mono text-xs leading-relaxed text-mist-500">
              Empresas, investidores e parceiros estratégicos podem registrar
              interesse para futuras conversas e validações.
            </p>
          </div>
          <a
            className="rounded-full bg-gold-500 px-6 py-3 text-center font-mono text-[11px] font-bold tracking-widest text-black uppercase transition hover:bg-gold-400"
            href={`mailto:${EMAIL}?subject=Registrar%20interesse%20—%20Alpha%20Finder`}
          >
            Registrar interesse ↗
          </a>
        </div>
      </section>
    </div>
  );
}
