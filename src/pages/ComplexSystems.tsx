import lab from "../assets/robot.webp";
import { DitherStrip, Eyebrow, PrimaryCta } from "../components/Apple";

const EMAIL = "lesteraf@gmail.com";

const STEPS = [
  {
    n: "01",
    t: "Diagnóstico",
    d: "Problema, contexto, restrições, riscos e resultado desejado.",
  },
  {
    n: "02",
    t: "Arquitetura",
    d: "Tecnologias, processos, competências, interfaces e decisões.",
  },
  {
    n: "03",
    t: "Ecossistema",
    d: "Organizações e especialistas adequados à missão.",
  },
  {
    n: "04",
    t: "Piloto",
    d: "Validação limitada com métricas e critérios de interrupção.",
  },
  {
    n: "05",
    t: "Governança",
    d: "Responsabilidades, fóruns, documentação e acompanhamento.",
  },
  {
    n: "06",
    t: "Escala",
    d: "Ampliação após comprovação técnica, operacional e empresarial.",
  },
];

const DOMAINS = [
  "Inteligência artificial",
  "Algoritmos quânticos e otimização",
  "Hardware e sistemas embarcados",
  "Sensores e instrumentação",
  "Robótica e sistemas autônomos",
  "Conectividade e telecomunicações",
  "Cloud e edge computing",
  "Gêmeos digitais",
  "Semicondutores e microeletrônica",
  "Manufatura avançada",
  "Sistemas críticos",
  "Governança de projetos",
];

const DELIVERABLES = [
  "diagnóstico estruturado e definição precisa do problema;",
  "arquitetura conceitual e mapa de interfaces;",
  "mapa de riscos e dependências;",
  "roadmap tecnológico e executivo;",
  "definição do piloto e critérios de validação;",
  "composição do ecossistema e seleção de parceiros;",
  "governança do programa;",
  "acompanhamento estratégico da execução.",
];

export default function ComplexSystems() {
  return (
    <div className="min-h-screen bg-void text-mist-100">
      <section className="dither-panel relative overflow-hidden">
        <img
          src={lab}
          alt=""
          aria-hidden="true"
          className="img-apple pointer-events-none absolute inset-y-0 right-0 h-full w-1/2 object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/90 to-void/40" />
        <div className="relative mx-auto max-w-5xl px-5 py-16 md:py-24">
          <Eyebrow>Complex Systems Lab</Eyebrow>
          <h1 className="headline mt-4 max-w-3xl text-[40px] md:text-[64px]">
            Problemas relevantes raramente cabem em{" "}
            <span className="bg-gradient-to-b from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
              uma única disciplina.
            </span>
          </h1>
          <p className="subhead mt-5 max-w-xl">
            Estruturo desafios de engenharia, tecnologia e inovação que
            exigem integração entre múltiplas competências, organizações e
            formas de conhecimento.
          </p>
          <div className="mt-8">
            <PrimaryCta href={`mailto:${EMAIL}?subject=Me%20desafie%20—%20Complex%20Systems%20Lab`}>
              Me desafie ↗
            </PrimaryCta>
          </div>
        </div>
      </section>

      <DitherStrip className="mx-auto max-w-2xl" />

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <Eyebrow>O tipo de problema</Eyebrow>
          <h2 className="headline mt-4 text-[30px] md:text-[40px]">
            Não existe fornecedor único para problemas sistêmicos.
          </h2>
        </div>
        <div className="space-y-4 text-[15px] leading-relaxed text-mist-300 md:col-span-7">
          <p>
            Alguns desafios envolvem simultaneamente componentes técnicos,
            empresariais, institucionais e humanos. Podem exigir hardware,
            software, sensores, robótica, conectividade, inteligência
            artificial, algoritmos, cloud, edge computing, materiais,
            processos, regulação, parcerias e governança.
          </p>
          <p>
            Nesses casos, contratar especialistas isolados frequentemente
            cria novas interfaces, riscos e fragmentação. O problema precisa
            primeiro de uma arquitetura.
          </p>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-obsidian/60">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-6">
            <Eyebrow>Lead architect &amp; ecosystem orchestrator</Eyebrow>
            <h2 className="headline mt-4 text-[30px] md:text-[40px]">
              Não preciso executar todas as disciplinas. Preciso{" "}
              <span className="text-gold-300">conectar as disciplinas certas.</span>
            </h2>
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-mist-300 md:col-span-6">
            <p>
              Meu papel é compreender o desafio, decompor a complexidade,
              desenhar a arquitetura da solução e identificar quais
              competências precisam participar da solução.
            </p>
            <p>
              A partir disso, mobilizo empresas parceiras, universidades,
              institutos de pesquisa, especialistas e fornecedores —
              estabelecendo linguagem comum, responsabilidades e governança.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <Eyebrow>Processo</Eyebrow>
            <h2 className="headline mt-4 text-[30px] md:text-[40px]">
              Da ambiguidade ao piloto validado.
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-mist-300 md:self-end">
            A arquitetura precede a execução. O piloto precede a escala.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="card-soft p-6">
              <p className="font-mono2 text-[12px] font-semibold text-gold-500">
                {s.n}
              </p>
              <p className="mt-1.5 font-mono2 text-[12px] font-bold tracking-[0.14em] text-gold-200 uppercase">
                {s.t}
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-mist-500">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-obsidian/60">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-24">
          <Eyebrow>Domínios de integração</Eyebrow>
          <h2 className="headline mt-4 max-w-2xl text-[30px] md:text-[40px]">
            Tecnologia conectada a contexto e execução.
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {DOMAINS.map((d) => (
              <div
                key={d}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-[13px] tracking-tight text-mist-300"
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-4">
          <Eyebrow>Entregas</Eyebrow>
          <h2 className="headline mt-4 text-[30px] md:text-[40px]">
            O que pode sair de uma missão.
          </h2>
        </div>
        <div className="md:col-span-8">
          <ul>
            {DELIVERABLES.map((d) => (
              <li
                key={d}
                className="flex gap-3 border-b border-white/10 py-3 text-[14px] text-mist-300"
              >
                <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {d}
              </li>
            ))}
          </ul>
          <figure className="mt-8 border-l-2 border-gold-500 pl-5">
            <blockquote className="text-[22px] leading-snug tracking-tight text-gold-200">
              “Sua clareza de raciocínio e articulação de ideias foram
              determinantes para transformar conceitos em resultados
              concretos.”
            </blockquote>
            <figcaption className="mt-3 text-[12px] text-mist-500">
              <span className="font-semibold text-mist-300">João Paulo Felix</span>
              <br />
              AI &amp; Deep Tech Strategist · Board Advisor
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-16 md:pb-24">
        <div className="card-soft grid grid-cols-1 items-center gap-6 p-8 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <Eyebrow>Complex Systems Lab</Eyebrow>
            <p className="headline mt-3 max-w-xl text-[28px] md:text-[36px]">
              O problema parece grande demais para uma única equipe?
            </p>
            <p className="mt-2 text-[13px] text-mist-500">
              Esse é exatamente o momento em que uma arquitetura sistêmica se torna necessária.
            </p>
          </div>
          <PrimaryCta href={`mailto:${EMAIL}?subject=Enviar%20o%20desafio%20—%20Complex%20Systems%20Lab`}>
            Enviar o desafio ↗
          </PrimaryCta>
        </div>
      </section>
    </div>
  );
}
