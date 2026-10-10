import heroBg from "../assets/facens.webp";
import { DitherStrip, Eyebrow, PrimaryCta } from "../components/Apple";

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
      <section className="dither-panel relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="img-apple pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/40" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-void to-transparent" />
        <div className="relative mx-auto max-w-5xl px-5 py-16 text-center md:py-24">
          <p className="font-mono2 text-[11px] font-semibold tracking-[0.22em] text-gold-500 uppercase">
            Proprietary initiative — in development
          </p>
          <h1 className="headline mx-auto mt-4 text-[48px] md:text-[84px]">
            Alpha Finder
          </h1>
          <p className="subhead mx-auto mt-4 max-w-xl">
            Transformar dispersão em foco, priorização e decisão.
          </p>
          <p className="mt-5 inline-block rounded-full border border-gold-600/60 bg-gold-900/30 px-4 py-1.5 font-mono2 text-[10px] tracking-[0.18em] text-gold-300 uppercase">
            Iniciativa proprietária em desenvolvimento
          </p>
          <div className="mt-7">
            <PrimaryCta href={`mailto:${EMAIL}?subject=Manifestar%20interesse%20—%20Alpha%20Finder`}>
              Manifestar interesse ↗
            </PrimaryCta>
          </div>
        </div>
      </section>

      <DitherStrip className="mx-auto max-w-2xl" />

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
        <h2 className="headline text-[30px] md:col-span-5 md:text-[40px]">
          Mais oportunidades não significam melhores decisões.
        </h2>
        <div className="space-y-4 text-[15px] leading-relaxed text-mist-300 md:col-span-7">
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

      <section className="border-y border-white/[0.07] bg-obsidian/60">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-6">
            <Eyebrow>A hipótese</Eyebrow>
            <h2 className="headline mt-4 text-[30px] md:text-[40px]">
              Portfólios complexos podem ser tratados{" "}
              <span className="text-gold-300">como sistemas de decisão.</span>
            </h2>
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-mist-300 md:col-span-6">
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

      <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <Eyebrow>Capacidades em estudo</Eyebrow>
        <h2 className="headline mt-4 max-w-2xl text-[30px] md:text-[40px]">
          Uma camada de inteligência para priorização.
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-3">
          {CAPABILITIES.map((c) => (
            <div key={c.t} className="card-soft p-7">
              <p className="text-[18px] font-semibold tracking-tight">{c.t}</p>
              <p className="mt-2 text-[13px] leading-relaxed text-mist-500">
                {c.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-obsidian/60">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
          <Eyebrow>Aplicações potenciais</Eyebrow>
          <h2 className="headline mt-4 max-w-3xl text-[30px] md:text-[40px]">
            Múltiplos portfólios. Uma mesma questão: onde concentrar
            recursos?
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {APPLICATIONS.map((a) => (
              <div
                key={a}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-[13px] tracking-tight text-mist-300"
              >
                {a}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pt-16 md:pt-24">
        <div className="card-soft p-7 md:p-9">
          <p className="text-[20px] font-semibold tracking-tight text-gold-200">
            Confidencialidade e propriedade intelectual
          </p>
          <p className="mt-2 max-w-4xl text-[13px] leading-relaxed text-mist-500">
            Modelos proprietários, códigos, critérios específicos, parcerias
            confidenciais, casos de uso autorizados e lógica operacional
            permanecerão protegidos. O Alpha Finder será apresentado
            publicamente somente no nível necessário para demonstrar sua
            proposta e permitir validações estratégicas.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="card-soft grid grid-cols-1 items-center gap-6 p-8 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <Eyebrow>Alpha Finder</Eyebrow>
            <p className="headline mt-3 max-w-xl text-[28px] md:text-[36px]">
              Interesse em acompanhar o desenvolvimento?
            </p>
            <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-mist-500">
              Empresas, investidores e parceiros estratégicos podem registrar
              interesse para futuras conversas e validações.
            </p>
          </div>
          <PrimaryCta href={`mailto:${EMAIL}?subject=Registrar%20interesse%20—%20Alpha%20Finder`}>
            Registrar interesse ↗
          </PrimaryCta>
        </div>
      </section>
    </div>
  );
}
