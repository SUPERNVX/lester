import profile from "../../assets/lester-profile-2.webp";
import engineering from "../../assets/trajectory-engineering.webp";
import international from "../../assets/trajectory-international.webp";
import executive from "../../assets/trajectory-executive.webp";

const MOSAIC = [
  { img: engineering, label: "Engineering & Operations" },
  { img: international, label: "International Programs" },
  { img: executive, label: "Executive Leadership" },
];

const LINE = [
  {
    n: "01",
    t: "Engineering & Operations",
    d: "Aprender o sistema no nível onde falhas têm consequências reais.",
  },
  {
    n: "02",
    t: "International Programs",
    d: "Integrar tecnologia, negociação, cultura, risco e execução multinacional.",
  },
  {
    n: "03",
    t: "Executive Leadership",
    d: "Governar portfólios, pessoas, pesquisa e transformação institucional.",
  },
  {
    n: "04",
    t: "Strategic Architecture",
    d: "Conectar ciência, tecnologia e negócio para decisões de alto impacto.",
  },
];

export default function Trajectory() {
  return (
    <section id="trajetoria" className="border-y border-white/10 bg-obsidian">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        <div className="order-2 md:order-1">
          <div className="gold-border overflow-hidden rounded-2xl">
            <img
              src={profile}
              alt="Lester Faria em retrato profissional"
              loading="lazy"
              className="aspect-[16/10] w-full object-cover object-top"
            />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {MOSAIC.map((m) => (
              <figure key={m.label} className="gold-border overflow-hidden rounded-2xl bg-void">
                <img
                  src={m.img}
                  alt={m.label}
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
                <figcaption className="px-2 py-1.5 font-mono text-[9px] leading-tight text-mist-500">
                  {m.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2">
          <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
            From engineering to strategic architecture
          </p>
          <h2 className="font-display mt-4 text-3xl leading-tight font-extrabold md:text-4xl">
            Minha formação começou na engenharia. Minha carreira foi
            construída entre diferentes mundos.
          </h2>
          <div className="mt-4 space-y-3 font-mono text-sm leading-relaxed text-mist-300">
            <p>
              Engenharia, manutenção aeronáutica, logística, contratos,
              cooperação internacional, sistemas de defesa, pesquisa aplicada,
              liderança executiva, indústria, empreendedorismo e conselhos.
            </p>
            <p>
              Em 2005, percebi que os problemas mais relevantes raramente eram
              resolvidos por um único especialista. Essa percepção tornou-se
              método: estruturar problemas, encontrar conexões não evidentes e
              transformar tecnologia em direção empresarial e resultados.
            </p>
          </div>
          <a
            className="mt-5 inline-block font-mono text-xs font-semibold tracking-widest text-gold-300 uppercase transition hover:text-gold-200"
            href="#missions"
          >
            Conheça as missões que formaram essa visão ↗
          </a>
        </div>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 border-t border-white/10 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {LINE.map((l) => (
          <div key={l.n}>
            <p className="font-display text-lg font-extrabold text-gold-300">
              {l.n}
            </p>
            <p className="mt-1 font-mono text-xs font-semibold text-mist-100">
              {l.t}
            </p>
            <p className="mt-1 font-mono text-[11px] leading-relaxed text-mist-500">
              {l.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
