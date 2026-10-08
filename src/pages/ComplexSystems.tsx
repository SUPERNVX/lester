import lab from "../assets/robot.webp";

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
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={lab}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-2/3 object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/30" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24">
          <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
            Complex Systems Lab
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-tight font-extrabold md:text-6xl">
            Problemas relevantes raramente cabem em{" "}
            <em className="gold-glow text-gold-300">uma única disciplina.</em>
          </h1>
          <p className="mt-5 max-w-xl font-mono text-sm leading-relaxed text-mist-300">
            Estruturo desafios de engenharia, tecnologia e inovação que
            exigem integração entre múltiplas competências, organizações e
            formas de conhecimento.
          </p>
          <a
            className="mt-7 inline-block rounded-full bg-gold-500 px-6 py-3 font-mono text-[11px] font-bold tracking-widest text-black uppercase transition hover:bg-gold-400"
            href={`mailto:${EMAIL}?subject=Me%20desafie%20—%20Complex%20Systems%20Lab`}
          >
            Me desafie ↗
          </a>
        </div>
      </section>

      {/* Tipo de problema */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
            O tipo de problema
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold md:text-4xl">
            Não existe fornecedor único para problemas sistêmicos.
          </h2>
        </div>
        <div className="space-y-3 font-mono text-sm leading-relaxed text-mist-300 md:col-span-7">
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

      {/* Papel */}
      <section className="border-y border-white/10 bg-obsidian">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:py-20">
          <div className="md:col-span-6">
            <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
              Lead architect &amp; ecosystem orchestrator
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold md:text-4xl">
              Não preciso executar todas as disciplinas. Preciso{" "}
              <em className="gold-glow text-gold-300">conectar as disciplinas certas.</em>
            </h2>
          </div>
          <div className="space-y-3 font-mono text-sm leading-relaxed text-mist-300 md:col-span-6">
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

      {/* Processo */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
              Processo
            </p>
            <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold md:text-4xl">
              Da ambiguidade ao piloto validado.
            </h2>
          </div>
          <p className="font-mono text-sm leading-relaxed text-mist-300 md:self-end">
            A arquitetura precede a execução. O piloto precede a escala.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((s) => (
            <div key={s.n} className="gold-border rounded-2xl bg-obsidian p-5">
              <p className="font-display text-sm font-extrabold text-gold-600">
                {s.n}
              </p>
              <p className="font-mono mt-1 text-xs font-bold tracking-widest text-gold-200 uppercase">
                {s.t}
              </p>
              <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-mist-500">
                {s.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Domínios */}
      <section className="border-y border-white/10 bg-obsidian">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
            Domínios de integração
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight font-extrabold md:text-4xl">
            Tecnologia conectada a contexto e execução.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {DOMAINS.map((d) => (
              <div
                key={d}
                className="rounded-xl border border-white/10 bg-void px-4 py-3 font-mono text-[12px] text-mist-300"
              >
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Entregas */}
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-4">
          <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
            Entregas
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold md:text-4xl">
            O que pode sair de uma missão.
          </h2>
        </div>
        <div className="md:col-span-8">
          <ul>
            {DELIVERABLES.map((d) => (
              <li
                key={d}
                className="flex gap-3 border-b border-white/10 py-2.5 font-mono text-[13px] text-mist-300"
              >
                <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                {d}
              </li>
            ))}
          </ul>
          <figure className="mt-8 border-l-2 border-gold-500 pl-5">
            <blockquote className="font-display text-2xl leading-snug text-gold-200">
              “Sua clareza de raciocínio e articulação de ideias foram
              determinantes para transformar conceitos em resultados
              concretos.”
            </blockquote>
            <figcaption className="mt-3 font-mono text-[11px] text-mist-500">
              <span className="font-semibold text-mist-300">João Paulo Felix</span>
              <br />
              AI &amp; Deep Tech Strategist · Board Advisor
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
        <div className="gold-border grid grid-cols-1 items-center gap-6 rounded-3xl bg-obsidian p-8 md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <p className="font-mono text-[10px] tracking-[0.25em] text-gold-500 uppercase">
              Complex Systems Lab
            </p>
            <p className="font-display mt-2 max-w-xl text-3xl leading-tight font-extrabold md:text-4xl">
              O problema parece grande demais para uma única equipe?
            </p>
            <p className="mt-2 font-mono text-xs text-mist-500">
              Esse é exatamente o momento em que uma arquitetura sistêmica se torna necessária.
            </p>
          </div>
          <a
            className="rounded-full bg-gold-500 px-6 py-3 text-center font-mono text-[11px] font-bold tracking-widest text-black uppercase transition hover:bg-gold-400"
            href={`mailto:${EMAIL}?subject=Enviar%20o%20desafio%20—%20Complex%20Systems%20Lab`}
          >
            Enviar o desafio ↗
          </a>
        </div>
      </section>
    </div>
  );
}
