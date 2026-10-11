import heroBg from "../assets/fab.webp";
import ipfacens from "../assets/mission-ipfacens-case.webp";
import ieav from "../assets/mission-aerospace-case.webp";
import adarter from "../assets/mission-adarter-case.webp";
import aerospace from "../assets/mission-aerospace-case.webp";
import robot from "../assets/robot.webp";
import optimization from "../assets/mission-optimization-case.webp";
import OrbitDitherFrame from "../components/OrbitDitherFrame";
import { Eyebrow, PrimaryCta } from "../components/Apple";

const EMAIL = "lesteraf@gmail.com";

const CASES = [
  {
    img: ipfacens,
    alt: "Instituto de Pesquisas da Facens — liderança e pesquisa aplicada",
    kicker: "Research Institute Scale-Up",
    title: "Instituto de Pesquisas da Facens",
    rows: [
      ["Contexto", "Construção de uma estrutura capaz de desenvolver pesquisa aplicada e soluções para empresas privadas."],
      ["Papel", "COO do Instituto de Pesquisas da Facens."],
      ["Atuação", "Estruturação operacional e estratégica, portfólio, relacionamento empresarial, equipes e parcerias."],
      ["Contribuição", "Ampliação expressiva da capacidade de atuação, dos projetos e da conexão com o ecossistema industrial ao longo de quatro anos."],
    ],
    tags: ["Liderança executiva", "Crescimento", "Pesquisa aplicada", "Mercado"],
  },
  {
    img: ieav,
    alt: "Programas aeronáuticos estratégicos e tecnologias críticas",
    kicker: "Strategic Technology Leadership",
    title: "Instituto de Estudos Avançados — IEAv",
    rows: [
      ["Contexto", "Condução de projetos críticos em áreas de elevada complexidade e relevância nacional."],
      ["Papel", "Diretor do Instituto de Estudos Avançados da Força Aérea Brasileira."],
      ["Atuação", "Direção institucional, priorização de portfólio, articulação governamental e acompanhamento de projetos em hipersônica, tecnologias nucleares, sensoriamento, fotônica e sistemas críticos."],
      ["Contribuição", "Fortalecimento da visibilidade institucional, da capacidade de articulação e do impacto dos projetos estratégicos."],
    ],
    tags: ["C-Level", "Defesa", "Governança", "Portfólio tecnológico"],
  },
  {
    img: adarter,
    alt: "Programa A-Darter — cooperação tecnológica Brasil e África do Sul",
    kicker: "Brazil–South Africa Missile Program",
    title: "A-Darter",
    rows: [
      ["Contexto", "Desenvolvimento de sistema de defesa de alta complexidade em ambiente internacional, com pressão técnica, institucional, política e cultural."],
      ["Papel", "Especialista em microeletrônica e infravermelho, atuando na cooperação técnica da Força Aérea Brasileira."],
      ["Atuação", "Participação no desenvolvimento do sensor infravermelho e da infraestrutura de testes do sistema em cooperação com organizações sul-africanas."],
      ["Contribuição", "Apoio à operacionalização do sistema e à cooperação tecnológica entre Brasil e África do Sul."],
    ],
    tags: ["Deep tech", "Sensores", "Microeletrônica", "Cooperação internacional"],
  },
  {
    img: aerospace,
    alt: "Programas aeronáuticos estratégicos e integração multinacional",
    kicker: "Multinational Aerospace Integration",
    title: "Programas aeronáuticos estratégicos",
    rows: [
      ["Contexto", "Integração entre plataformas, fornecedores, contratos, tecnologias, países e requisitos operacionais."],
      ["Papel", "Gerente técnico de projetos estratégicos da Força Aérea Brasileira."],
      ["Atuação", "Coordenação técnica, negociações e integração entre órgãos públicos, empresas nacionais e fornecedores internacionais em programas de aquisição e modernização."],
      ["Contribuição", "Apoio à entrega, modernização e incorporação de capacidades aeronáuticas complexas."],
    ],
    tags: ["Integração de sistemas", "Contratos", "Negociação", "Execução"],
  },
  {
    img: robot,
    alt: "Inteligência artificial aplicada à indústria",
    kicker: "Industrial Artificial Intelligence",
    title: "IA, sensores e manufatura avançada",
    rows: [
      ["Contexto", "Transformação de IA, sensores, conectividade e automação em ganhos de eficiência, segurança e competitividade."],
      ["Papel", "Pesquisador-líder, coordenador e articulador de iniciativas de P&D aplicado."],
      ["Atuação", "Projetos envolvendo IA industrial, sensores, radares, manufatura inteligente, gêmeos digitais e tecnologias digitais avançadas."],
      ["Contribuição", "Estruturação de projetos de alto risco tecnológico e integração entre instituições públicas, privadas e academia."],
    ],
    tags: ["IA aplicada", "Indústria", "Ecossistemas", "P&D"],
  },
  {
    img: optimization,
    alt: "Otimização de portfólios complexos com algoritmos avançados",
    kicker: "Quantum Decision Systems",
    title: "Otimização de portfólios complexos",
    rows: [
      ["Contexto", "Problemas de seleção com enorme espaço de busca, múltiplos critérios e limitações computacionais."],
      ["Papel", "Pesquisador, orientador e arquiteto da solução."],
      ["Atuação", "Desenvolvimento de algoritmos híbridos e abordagens inspiradas em computação quântica para seleção e otimização."],
      ["Contribuição", "Base tecnológica aplicável inicialmente a bibliotecas de biodiversidade e potencialmente expansível a outros domínios de decisão."],
    ],
    tags: ["Tecnologias quânticas", "Otimização", "Algoritmos", "Portfólios"],
  },
];

export default function MissionsPage() {
  return (
    <div className="min-h-screen bg-void text-mist-100">
      <section className="dither-panel relative overflow-hidden">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="missions-bg img-apple pointer-events-none absolute inset-0 h-full w-full object-cover object-top opacity-45"
        />
        <OrbitDitherFrame className="inset-5 md:inset-8 rounded-[28px]" duration={13} />
        <div className="absolute inset-0 bg-gradient-to-r from-void/90 via-void/72 to-void/25" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-void to-transparent" />
        <div className="relative mx-auto max-w-5xl px-5 py-16 md:py-24">
          <Eyebrow>Selected Missions</Eyebrow>
          <h1 className="headline mt-4 max-w-3xl text-[40px] md:text-[64px]">
            Autoridade não se declara.{" "}
            <span className="bg-gradient-to-b from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              Demonstra-se nas missões assumidas.
            </span>
          </h1>
          <p className="subhead mt-5 max-w-xl">
            Uma seleção de ambientes em que tecnologia, estratégia, risco,
            instituições e execução precisaram operar juntos.
          </p>
        </div>
      </section>

      {/* Cases — layout Apple: imagem à esquerda, spec-list à direita */}
      <section className="mx-auto max-w-5xl space-y-5 px-5 py-16 md:py-24">
        {CASES.map((c, i) => (
          <article
            key={c.title}
            className="card-soft grid grid-cols-1 gap-0 overflow-hidden md:grid-cols-12"
          >
            <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}>
              <img
                src={c.img}
                alt={c.alt}
                loading="lazy"
                className="img-apple h-full max-h-[420px] w-full object-cover"
              />
            </div>
            <div className={`p-7 md:col-span-7 md:p-9 ${i % 2 === 1 ? "md:order-1" : ""}`}>
              <p className="font-mono2 text-[10px] tracking-[0.22em] text-gold-500 uppercase">
                {c.kicker}
              </p>
              <h2 className="mt-2 text-[26px] font-semibold tracking-tight md:text-[30px]">
                {c.title}
              </h2>
              <dl className="mt-5">
                {c.rows.map(([term, desc]) => (
                  <div key={term} className="grid grid-cols-[96px_1fr] gap-3 border-b border-white/10 py-3">
                    <dt className="font-mono2 text-[10px] font-semibold tracking-[0.14em] text-gold-500 uppercase">
                      {term}
                    </dt>
                    <dd className="text-[13px] leading-relaxed text-mist-300">
                      {desc}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-gold-600/40 bg-gold-900/25 px-3 py-1 font-mono2 text-[10px] tracking-[0.08em] text-gold-300 uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="border-y border-white/[0.07] bg-obsidian/60">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-5 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-6">
            <Eyebrow>O sentido das missões</Eyebrow>
            <p className="headline mt-4 text-[30px] md:text-[40px]">
              Essas missões não são o produto.{" "}
              <span className="text-gold-300">São a prova.</span>
            </p>
          </div>
          <p className="text-[15px] leading-relaxed text-mist-300 md:col-span-6 md:self-center">
            Elas demonstram uma capacidade construída ao longo de décadas:
            entrar em ambientes complexos, compreender a técnica, dialogar
            com decisores, conectar competências e transformar problemas em
            arquiteturas executáveis.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="card-soft grid grid-cols-1 items-center gap-6 p-8 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <Eyebrow>Your next mission</Eyebrow>
            <p className="headline mt-3 max-w-xl text-[28px] md:text-[36px]">
              Qual é a próxima missão que precisa ser estruturada?
            </p>
            <p className="mt-2 max-w-xl text-[13px] leading-relaxed text-mist-500">
              Quando o desafio exige profundidade técnica, julgamento
              estratégico e integração de competências, há uma conversa a ser
              iniciada.
            </p>
          </div>
          <PrimaryCta href={`mailto:${EMAIL}?subject=Quero%20conversar%20sobre%20uma%20missão%20estratégica`}>
            Iniciar conversa ↗
          </PrimaryCta>
        </div>
      </section>
    </div>
  );
}
