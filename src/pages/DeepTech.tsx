import heroBg from "../assets/fab.webp";
import { DitherStrip, Eyebrow, PrimaryCta } from "../components/Apple";

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
      <section className="dither-panel relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="img-apple pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/40" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-void to-transparent" />
        <div className="relative mx-auto max-w-5xl px-5 py-16 md:py-24">
          <Eyebrow>Deep Tech Ventures</Eyebrow>
          <h1 className="headline mt-4 max-w-3xl text-[40px] md:text-[64px]">
            Tecnologia promissora não é negócio até que exista{" "}
            <span className="bg-gradient-to-b from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              uma tese e uma arquitetura de execução.
            </span>
          </h1>
          <p className="subhead mt-5 max-w-xl">
            Apoio empreendedores, empresas e investidores na avaliação e
            estruturação de novos negócios de base científica e tecnológica.
          </p>
          <div className="mt-8">
            <PrimaryCta href={`mailto:${EMAIL}?subject=Avaliar%20oportunidade%20deep%20tech`}>
              Avaliar oportunidade ↗
            </PrimaryCta>
          </div>
        </div>
      </section>

      <DitherStrip className="mx-auto max-w-2xl" />

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <Eyebrow>O vale entre tecnologia e negócio</Eyebrow>
          <h2 className="headline mt-4 text-[30px] md:text-[40px]">
            Boas tecnologias também fracassam.
          </h2>
        </div>
        <div className="space-y-4 text-[15px] leading-relaxed text-mist-300 md:col-span-7">
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

      <section className="border-y border-white/[0.07] bg-obsidian/60">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
          <Eyebrow>O que avalio</Eyebrow>
          <h2 className="headline mt-4 max-w-2xl text-[30px] md:text-[40px]">
            A tecnologia é apenas uma das variáveis.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CRITERIA.map((c) => (
              <div key={c.n} className="card-soft p-6">
                <p className="font-mono2 text-[12px] font-semibold text-gold-500">
                  {c.n}
                </p>
                <p className="mt-1.5 text-[17px] leading-snug font-semibold tracking-tight">
                  {c.t}
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-mist-500">
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-6">
          <Eyebrow>Meu papel</Eyebrow>
          <h2 className="headline mt-4 text-[30px] md:text-[40px]">
            Advisor estratégico.{" "}
            <span className="text-gold-300">Não operador diário.</span>
          </h2>
        </div>
        <div className="space-y-4 text-[15px] leading-relaxed text-mist-300 md:col-span-6">
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

      <section className="border-t border-white/[0.07] bg-obsidian/60">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-4">
            <Eyebrow>Resultado esperado</Eyebrow>
            <h2 className="headline mt-4 text-[30px] md:text-[40px]">
              Uma tese que possa ser testada e defendida.
            </h2>
          </div>
          <ul className="md:col-span-8">
            {OUTCOMES.map((o) => (
              <li
                key={o}
                className="flex gap-3 border-b border-white/10 py-3 text-[14px] text-mist-300"
              >
                <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {o}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="card-soft grid grid-cols-1 items-center gap-6 p-8 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <Eyebrow>Deep Tech Ventures</Eyebrow>
            <p className="headline mt-3 max-w-xl text-[28px] md:text-[36px]">
              A tecnologia é relevante. Mas o negócio é defensável?
            </p>
            <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-mist-500">
              Uma avaliação estratégica deve acontecer antes que anos e
              capital sejam consumidos pela hipótese errada.
            </p>
          </div>
          <PrimaryCta href={`mailto:${EMAIL}?subject=Solicitar%20avaliação%20deep%20tech`}>
            Solicitar avaliação ↗
          </PrimaryCta>
        </div>
      </section>
    </div>
  );
}
