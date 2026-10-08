import heroBg from "../assets/fab.webp";

const EMAIL = "lesteraf@gmail.com";

const CRITERIA = [
  {
    n: "01",
    t: "Problema e mercado",
    d: "Existe uma dor relevante, urgente e economicamente justificável?",
  },
  {
    n: "02",
    t: "Diferenciação tecnológica",
    d: "A solução cria vantagem real ou apenas adiciona complexidade?",
  },
  {
    n: "03",
    t: "Maturidade",
    d: "Qual é o nível de prontidão tecnológica, operacional e comercial?",
  },
  {
    n: "04",
    t: "Propriedade intelectual",
    d: "Há conhecimento, proteção ou barreiras capazes de sustentar a diferenciação?",
  },
  {
    n: "05",
    t: "Modelo de negócio",
    d: "Quem paga, por que paga, como compra e como a empresa captura valor?",
  },
  {
    n: "06",
    t: "Risco e capital",
    d: "Quanto precisa ser investido e quais hipóteses devem ser validadas primeiro?",
  },
  {
    n: "07",
    t: "Ecossistema",
    d: "Quais parceiros, ICTs, investidores e competências precisam participar?",
  },
  {
    n: "08",
    t: "Governança",
    d: "Quem decide, quem executa e como os avanços serão avaliados?",
  },
];

const OUTCOMES = [
  "proposta de valor clara;",
  "tese tecnológica e empresarial;",
  "mapa de riscos e hipóteses críticas;",
  "modelo de negócio;",
  "roadmap de validação;",
  "estratégia de ecossistema;",
  "hipóteses de funding e go-to-market;",
  "governança para crescimento.",
];

export default function DeepTech() {
  return (
    <div className="min-h-screen bg-void text-mist-100">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/80 to-void/40" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-void to-transparent" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
            Deep Tech Ventures
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-tight font-extrabold md:text-6xl">
            Tecnologia promissora não é negócio até que exista{" "}
            <em className="gold-glow text-gold-300">
              uma tese e uma arquitetura de execução.
            </em>
          </h1>
          <p className="mt-5 max-w-xl font-mono text-sm leading-relaxed text-mist-300">
            Apoio empreendedores, empresas e investidores na avaliação e
            estruturação de novos negócios de base científica e tecnológica.
          </p>
          <a
            className="mt-7 inline-block rounded-full bg-gold-500 px-6 py-3 font-mono text-[11px] font-bold tracking-widest text-black uppercase transition hover:bg-gold-400"
            href={`mailto:${EMAIL}?subject=Avaliar%20oportunidade%20deep%20tech`}
          >
            Avaliar oportunidade ↗
          </a>
        </div>
      </section>

      {/* Vale */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
            O vale entre tecnologia e negócio
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold md:text-4xl">
            Boas tecnologias também fracassam.
          </h2>
        </div>
        <div className="space-y-3 font-mono text-sm leading-relaxed text-mist-300 md:col-span-7">
          <p>
            Muitas iniciativas deep tech possuem pesquisadores competentes,
            protótipos promissores e conhecimento diferenciado — mas não
            possuem uma tese empresarial suficientemente clara.
          </p>
          <p>
            Falta compreender quem compra, qual dor é resolvida, qual risco
            é reduzido, como a solução será validada, quem financia a
            jornada e quais barreiras protegem o negócio.
          </p>
          <p>
            O problema raramente é apenas técnico. É de arquitetura
            empresarial.
          </p>
        </div>
      </section>

      {/* O que avalio */}
      <section className="border-y border-white/10 bg-obsidian">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
            O que avalio
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight font-extrabold md:text-4xl">
            A tecnologia é apenas uma das variáveis.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CRITERIA.map((c) => (
              <div key={c.n} className="gold-border rounded-2xl bg-void p-5">
                <p className="font-display text-sm font-extrabold text-gold-600">
                  {c.n}
                </p>
                <p className="font-display mt-1 text-lg leading-snug font-bold">
                  {c.t}
                </p>
                <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-mist-500">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meu papel */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-6">
          <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
            Meu papel
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold md:text-4xl">
            Advisor estratégico.{" "}
            <em className="gold-glow text-gold-300">Não operador diário.</em>
          </h2>
        </div>
        <div className="space-y-3 font-mono text-sm leading-relaxed text-mist-300 md:col-span-6">
          <p>
            Atuo na estruturação da tese, avaliação de riscos,
            posicionamento, arquitetura tecnológica e empresarial e decisões
            críticas de crescimento.
          </p>
          <p>
            Não substituo os fundadores nem assumo a operação cotidiana. Meu
            trabalho é aumentar a qualidade das decisões e reduzir erros que
            podem consumir anos, capital e credibilidade.
          </p>
        </div>
      </section>

      {/* Resultado esperado */}
      <section className="border-t border-white/10 bg-obsidian">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
              Resultado esperado
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold md:text-4xl">
              Uma tese que possa ser testada e defendida.
            </h2>
          </div>
          <ul className="md:col-span-8">
            {OUTCOMES.map((o) => (
              <li
                key={o}
                className="flex gap-3 border-b border-white/10 py-2.5 font-mono text-[13px] text-mist-300"
              >
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="gold-border grid grid-cols-1 items-center gap-6 rounded-3xl bg-obsidian p-8 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] text-gold-500 uppercase">
              Deep Tech Ventures
            </p>
            <p className="font-display mt-2 max-w-xl text-3xl leading-tight font-extrabold md:text-4xl">
              A tecnologia é relevante. Mas o negócio é defensável?
            </p>
            <p className="mt-2 max-w-xl font-mono text-xs leading-relaxed text-mist-500">
              Uma avaliação estratégica deve acontecer antes que anos e
              capital sejam consumidos pela hipótese errada.
            </p>
          </div>
          <a
            className="rounded-full bg-gold-500 px-6 py-3 text-center font-mono text-[11px] font-bold tracking-widest text-black uppercase transition hover:bg-gold-400"
            href={`mailto:${EMAIL}?subject=Solicitar%20avaliação%20deep%20tech`}
          >
            Solicitar avaliação ↗
          </a>
        </div>
      </section>
    </div>
  );
}
