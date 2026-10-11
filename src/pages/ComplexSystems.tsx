import { useLayoutEffect, useState, useRef } from "react";
import lab from "../assets/robot.webp";
import { DitherStrip, Eyebrow, PrimaryCta } from "../components/Apple";

const EMAIL = "lesteraf@gmail.com";

const STEPS = [
  { n: "01", t: "Diagnóstico", d: "Problema, contexto, restrições, riscos e resultado desejado." },
  { n: "02", t: "Arquitetura", d: "Tecnologias, processos, competências, interfaces e decisões." },
  { n: "03", t: "Ecossistema", d: "Organizações e especialistas adequados à missão." },
  { n: "04", t: "Piloto", d: "Validação limitada com métricas e critérios de interrupção." },
  { n: "05", t: "Governança", d: "Responsabilidades, fóruns, documentação e acompanhamento." },
  { n: "06", t: "Escala", d: "Ampliação após comprovação técnica, operacional e empresarial." },
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
const CATEGORIES = {
  computing: { label: "Computação inteligente", color: "#d4af37" },
  physical: { label: "Sistemas físicos autônomos", color: "#79c7c5" },
  critical: { label: "Indústria e missão crítica", color: "#b89aff" },
} as const;
type Category = keyof typeof CATEGORIES;

const CONNECTIONS: Array<{ from: string; to: string; category: Category }> = [
  { from: "Cloud e edge computing", to: "Inteligência artificial", category: "computing" },
  { from: "Cloud e edge computing", to: "Algoritmos quânticos e otimização", category: "computing" },
  { from: "Cloud e edge computing", to: "Sensores e instrumentação", category: "computing" },
  { from: "Cloud e edge computing", to: "Sistemas críticos", category: "computing" },
  { from: "Hardware e sistemas embarcados", to: "Sensores e instrumentação", category: "physical" },
  { from: "Hardware e sistemas embarcados", to: "Robótica e sistemas autônomos", category: "physical" },
  { from: "Hardware e sistemas embarcados", to: "Manufatura avançada", category: "physical" },
  { from: "Hardware e sistemas embarcados", to: "Sistemas críticos", category: "physical" },
  { from: "Semicondutores e microeletrônica", to: "Inteligência artificial", category: "computing" },
  { from: "Semicondutores e microeletrônica", to: "Algoritmos quânticos e otimização", category: "computing" },
  { from: "Semicondutores e microeletrônica", to: "Sensores e instrumentação", category: "critical" },
  { from: "Semicondutores e microeletrônica", to: "Sistemas críticos", category: "critical" },
  { from: "Inteligência artificial", to: "Gêmeos digitais", category: "computing" },
  { from: "Algoritmos quânticos e otimização", to: "Gêmeos digitais", category: "computing" },
  { from: "Sensores e instrumentação", to: "Gêmeos digitais", category: "physical" },
  { from: "Robótica e sistemas autônomos", to: "Conectividade e telecomunicações", category: "physical" },
  { from: "Manufatura avançada", to: "Conectividade e telecomunicações", category: "physical" },
  { from: "Sensores e instrumentação", to: "Conectividade e telecomunicações", category: "physical" },
  { from: "Sistemas críticos", to: "Gêmeos digitais", category: "critical" },
  { from: "Sistemas críticos", to: "Conectividade e telecomunicações", category: "critical" },
  { from: "Sistemas críticos", to: "Governança de projetos", category: "critical" },
  { from: "Robótica e sistemas autônomos", to: "Governança de projetos", category: "physical" },
  { from: "Inteligência artificial", to: "Governança de projetos", category: "computing" },
];

const GRAPH_LAYOUT: Record<string, { column: number; center: number; side: "left" | "middle" | "right" }> = {
  "Cloud e edge computing": { column: 0, center: 0.25, side: "left" },
  "Hardware e sistemas embarcados": { column: 0, center: 0.58, side: "left" },
  "Semicondutores e microeletrônica": { column: 0, center: 0.92, side: "left" },
  "Inteligência artificial": { column: 1, center: 0.12, side: "middle" },
  "Algoritmos quânticos e otimização": { column: 1, center: 0.29, side: "middle" },
  "Sensores e instrumentação": { column: 1, center: 0.46, side: "middle" },
  "Robótica e sistemas autônomos": { column: 1, center: 0.63, side: "middle" },
  "Manufatura avançada": { column: 1, center: 0.80, side: "middle" },
  "Sistemas críticos": { column: 1, center: 0.97, side: "middle" },
  "Gêmeos digitais": { column: 2, center: 0.25, side: "right" },
  "Conectividade e telecomunicações": { column: 2, center: 0.58, side: "right" },
  "Governança de projetos": { column: 2, center: 0.92, side: "right" },
};

function categoriesFor(domain: string): Category[] {
  return [...new Set(CONNECTIONS.filter(({ from, to }) => from === domain || to === domain).map(({ category }) => category))];
}

function getNodeCenter(element: HTMLElement, graphRect: DOMRect, endpoint: "source" | "target", offset = 0) {
  const rect = element.getBoundingClientRect();
  const side = GRAPH_LAYOUT[element.dataset.domain ?? ""]?.side ?? "middle";
  const useRightEdge = endpoint === "source" ? side !== "right" : side === "left";
  return {
    x: (useRightEdge ? rect.right : rect.left) - graphRect.left,
    y: rect.top + rect.height / 2 - graphRect.top + offset,
  };
}

function edgeOffset(index: number, count: number) {
  return count < 2 ? 0 : ((index / (count - 1)) - 0.5) * 24;
}

function edgePath(start: ReturnType<typeof getNodeCenter>, end: ReturnType<typeof getNodeCenter>) {
  const gap = Math.max(0, end.x - start.x);
  const handle = Math.min(54, gap * 0.38);
  return `M ${start.x} ${start.y} C ${start.x + handle} ${start.y}, ${end.x - handle} ${end.y}, ${end.x} ${end.y}`;
}
const DELIVERABLES = [
  "diagnóstico estruturado e definição precisa do problema;", "arquitetura conceitual e mapa de interfaces;", "mapa de riscos e dependências;", "roadmap tecnológico e executivo;", "definição do piloto e critérios de validação;", "composição do ecossistema e seleção de parceiros;", "governança do programa;", "acompanhamento estratégico da execução.",
];


export default function ComplexSystems() {
  const graphRef = useRef<HTMLDivElement>(null);
  const [edgePaths, setEdgePaths] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  useLayoutEffect(() => {
    const graph = graphRef.current;
    if (!graph) return;

    const updatePaths = () => {
      const graphRect = graph.getBoundingClientRect();
      setEdgePaths(CONNECTIONS.map((connection) => {
        const { from, to } = connection;
        const startNode = graph.querySelector<HTMLElement>(`[data-domain="${from}"]`);
        const endNode = graph.querySelector<HTMLElement>(`[data-domain="${to}"]`);
        if (!startNode || !endNode) return "";

        const outgoing = CONNECTIONS.filter((item) => item.from === from)
          .sort((a, b) => GRAPH_LAYOUT[a.to].center - GRAPH_LAYOUT[b.to].center);
        const incoming = CONNECTIONS.filter((item) => item.to === to)
          .sort((a, b) => GRAPH_LAYOUT[a.from].center - GRAPH_LAYOUT[b.from].center);
        const sourceIndex = outgoing.indexOf(connection);
        const targetIndex = incoming.indexOf(connection);
        const start = getNodeCenter(startNode, graphRect, "source", edgeOffset(sourceIndex, outgoing.length));
        const end = getNodeCenter(endNode, graphRect, "target", edgeOffset(targetIndex, incoming.length));
        return edgePath(start, end);
      }));
    };

    updatePaths();
    const observer = new ResizeObserver(updatePaths);
    observer.observe(graph);
    graph.querySelectorAll<HTMLElement>("[data-domain]").forEach((node) => observer.observe(node));
    window.addEventListener("resize", updatePaths);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePaths);
    };
  }, []);

  return (
    <div className="min-h-screen bg-void text-mist-100">
      <section className="dither-panel relative overflow-hidden">
        <img src={lab} alt="" aria-hidden="true" className="systems-bg img-apple pointer-events-none absolute inset-y-0 right-0 h-full w-1/2 object-cover opacity-30" />
        <div aria-hidden="true" className="systems-dither-frame pointer-events-none absolute inset-y-5 right-5 w-[calc(50%-2rem)] rounded-[28px] border border-gold-300/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/85 to-void/35" />
        <div className="relative mx-auto max-w-5xl px-5 py-16 md:py-24">
          <Eyebrow>Complex Systems Lab</Eyebrow>
          <h1 className="headline mt-4 max-w-3xl text-[40px] md:text-[64px]">Problemas relevantes raramente cabem em{" "}<span className="bg-gradient-to-b from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">uma única disciplina.</span></h1>
          <p className="subhead mt-5 max-w-xl">Estruturo desafios de engenharia, tecnologia e inovação que exigem integração entre múltiplas competências, organizações e formas de conhecimento.</p>
          <div className="mt-8"><PrimaryCta href={`mailto:${EMAIL}?subject=Me%20desafie%20—%20Complex%20Systems%20Lab`}>Me desafie ↗</PrimaryCta></div>
        </div>
      </section>

      <DitherStrip className="mx-auto max-w-2xl" />

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5"><Eyebrow>O tipo de problema</Eyebrow><h2 className="headline mt-4 text-[30px] md:text-[40px]">Não existe fornecedor único para problemas sistêmicos.</h2></div>
        <div className="space-y-4 text-[15px] leading-relaxed text-mist-300 md:col-span-7">
          <p>Alguns desafios envolvem simultaneamente componentes técnicos, empresariais, institucionais e humanos. Podem exigir hardware, software, sensores, robótica, conectividade, inteligência artificial, algoritmos, cloud, edge computing, materiais, processos, regulação, parcerias e governança.</p>
          <p>Nesses casos, contratar especialistas isolados frequentemente cria novas interfaces, riscos e fragmentação. O problema precisa primeiro de uma arquitetura.</p>
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-obsidian/60"><div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:py-24"><div className="md:col-span-6"><Eyebrow>Lead architect &amp; ecosystem orchestrator</Eyebrow><h2 className="headline mt-4 text-[30px] md:text-[40px]">Não preciso executar todas as disciplinas. Preciso <span className="text-gold-300">conectar as disciplinas certas.</span></h2></div><div className="space-y-4 text-[15px] leading-relaxed text-mist-300 md:col-span-6"><p>Meu papel é compreender o desafio, decompor a complexidade, desenhar a arquitetura da solução e identificar quais competências precisam participar da solução.</p><p>A partir disso, mobilizo empresas parceiras, universidades, institutos de pesquisa, especialistas e fornecedores — estabelecendo linguagem comum, responsabilidades e governança.</p></div></div></section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:py-24"><div className="grid grid-cols-1 gap-6 md:grid-cols-2"><div><Eyebrow>Processo</Eyebrow><h2 className="headline mt-4 text-[30px] md:text-[40px]">Da ambiguidade ao piloto validado.</h2></div><p className="text-[15px] leading-relaxed text-mist-300 md:self-end">A arquitetura precede a execução. O piloto precede a escala.</p></div>          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">{STEPS.map((step) => <div key={step.n} className="card-soft p-6"><p className="font-mono2 text-[12px] font-semibold text-gold-500">{step.n}</p><p className="mt-1.5 font-mono2 text-[12px] font-bold tracking-[0.14em] text-gold-200 uppercase">{step.t}</p><p className="mt-1.5 text-[13px] leading-relaxed text-mist-500">{step.d}</p></div>)}</div></section>

      <section className="border-y border-white/[0.07] bg-obsidian/60"><div className="mx-auto max-w-5xl px-5 py-16 md:py-24"><Eyebrow>Domínios de integração</Eyebrow><h2 className="headline mt-4 max-w-2xl text-[30px] md:text-[40px]">Tecnologia conectada a contexto e execução.</h2>          <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filtrar conexões por categoria">
            {(Object.keys(CATEGORIES) as Category[]).map((category) => {
              const active = activeCategory === category;
              return <button key={category} type="button" aria-pressed={active} onClick={() => setActiveCategory((current) => current === category ? null : category)} className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[12px] transition ${active ? "border-white/25 bg-white/[0.08] text-mist-100" : "border-white/10 text-mist-500 hover:text-mist-300"}`}><i className="h-2 w-2 rounded-full" style={{ backgroundColor: CATEGORIES[category].color, opacity: !activeCategory || active ? 1 : 0.35 }} />{CATEGORIES[category].label}</button>;
            })}
          </div>
          <div ref={graphRef} className="systems-graph relative mt-10 h-[min(76vw,500px)] min-h-[400px]">
            <div className="pointer-events-none absolute inset-x-0 top-[-28px] grid grid-cols-3 text-center font-mono2 text-[10px] tracking-[0.1em] text-mist-500 uppercase">
              <span>Tópicos primários</span><span>Sistemas secundários</span><span>Capacidades conectadas</span>
            </div>
            <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
              {CONNECTIONS.map((connection, index) => (
                <path
                  key={`${connection.from}-${connection.to}`}
                  d={edgePaths[index] ?? ""}
                  fill="none"
                  stroke={CATEGORIES[connection.category].color}
                  strokeWidth="1"
                  strokeOpacity={activeCategory === connection.category ? 0.8 : activeCategory ? 0.1 : 0.48}
                  opacity={1}
                />
              ))}
            </svg>
            {DOMAINS.map((domain) => {
              const layout = GRAPH_LAYOUT[domain];
              const left = layout.column === 0 ? "0%" : layout.column === 1 ? "29%" : "74%";
              const width = layout.column === 0 || layout.column === 2 ? "26%" : "42%";
              const categories = categoriesFor(domain);
              const nodeColor = categories.reduce((strongest, category) => {
                const priority: Category[] = ["computing", "physical", "critical"];
                return priority.indexOf(category) > priority.indexOf(strongest) ? category : strongest;
              }, categories[0] ?? "computing");
              const participatesInSelection = !activeCategory || categories.includes(activeCategory);
              const position = { top: `${layout.center * 100}%`, transform: "translateY(-50%)" };
              return <div key={domain} data-domain={domain} className="absolute z-10 flex h-[38px] items-center justify-center gap-2 rounded-xl border bg-[#090a0b] px-2 text-center text-[11px] font-semibold tracking-tight text-mist-100 transition-[opacity,border-color] duration-300 sm:text-[12px]" style={{ left, width, ...position, opacity: participatesInSelection ? 1 : 0.35, borderColor: participatesInSelection ? `${CATEGORIES[nodeColor].color}88` : "rgba(255,255,255,0.12)" }}><span className="flex shrink-0 gap-0.5">{categories.map((category) => <i key={category} className="h-1.5 w-1.5 rounded-full transition-opacity duration-300" style={{ backgroundColor: CATEGORIES[category].color, opacity: !activeCategory || category === activeCategory ? 1 : 0.2 }} />)}</span>{domain}</div>;
            })}
          </div></div></section>

      <section className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:py-24"><div className="md:col-span-4"><Eyebrow>Entregas</Eyebrow><h2 className="headline mt-4 text-[30px] md:text-[40px]">O que pode sair de uma missão.</h2></div><div className="md:col-span-8"><ul>{DELIVERABLES.map((item) => <li key={item} className="flex gap-3 border-b border-white/10 py-3 text-[14px] text-mist-300"><span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />{item}</li>)}</ul><figure className="mt-8 border-l-2 border-gold-500 pl-5"><blockquote className="text-[22px] leading-snug tracking-tight text-gold-200">“Sua clareza de raciocínio e articulação de ideias foram determinantes para transformar conceitos em resultados concretos.”</blockquote><figcaption className="mt-3 text-[12px] text-mist-500"><span className="font-semibold text-mist-300">João Paulo Felix</span><br />AI &amp; Deep Tech Strategist · Board Advisor</figcaption></figure></div></section>

      <section className="mx-auto max-w-5xl px-5 pb-16 md:pb-24"><div className="card-soft grid grid-cols-1 items-center gap-6 p-8 md:grid-cols-[1fr_auto] md:p-10"><div><Eyebrow>Complex Systems Lab</Eyebrow><p className="headline mt-3 max-w-xl text-[28px] md:text-[36px]">O problema parece grande demais para uma única equipe?</p><p className="mt-2 text-[13px] text-mist-500">Esse é exatamente o momento em que uma arquitetura sistêmica se torna necessária.</p></div><PrimaryCta href={`mailto:${EMAIL}?subject=Enviar%20o%20desafio%20—%20Complex%20Systems%20Lab`}>Enviar o desafio ↗</PrimaryCta></div></section>
    </div>
  );
}
