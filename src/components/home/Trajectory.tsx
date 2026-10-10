import profile from "../../assets/lester-profile-2.webp";
import engineering from "../../assets/trajectory-engineering.webp";
import international from "../../assets/trajectory-international.webp";
import executive from "../../assets/trajectory-executive.webp";
import { Eyebrow } from "../Apple";

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
    <section id="trajetoria" className="mx-auto max-w-5xl px-5 py-20 md:py-28">
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12">
        <div className="md:col-span-6">
          <Eyebrow>From engineering to strategic architecture</Eyebrow>
          <h2 className="headline mt-4 text-[32px] md:text-[44px]">
            Minha formação começou na engenharia. Minha carreira foi construída
            entre diferentes mundos.
          </h2>
          <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-mist-300">
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
            className="mt-6 inline-block text-[14px] font-semibold tracking-tight text-gold-300 transition hover:text-gold-200"
            href="#missions"
          >
            Conheça as missões que formaram essa visão ↗
          </a>

          <ol className="mt-10">
            {LINE.map((l) => (
              <li
                key={l.n}
                className="grid grid-cols-[44px_1fr] gap-3 border-t border-white/10 py-4"
              >
                <span className="font-mono2 text-[12px] font-semibold text-gold-500">
                  {l.n}
                </span>
                <span>
                  <span className="block text-[15px] font-semibold tracking-tight text-mist-100">
                    {l.t}
                  </span>
                  <span className="mt-0.5 block text-[13px] leading-relaxed text-mist-500">
                    {l.d}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="md:col-span-6">
          <div className="dither-frame overflow-hidden rounded-[28px]">
            <img
              src={profile}
              alt="Lester Faria em retrato profissional"
              loading="lazy"
              className="img-apple aspect-[4/4.4] w-full object-cover object-top"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {MOSAIC.map((m) => (
              <figure
                key={m.label}
                className="overflow-hidden rounded-2xl border border-white/10 bg-obsidian"
              >
                <img
                  src={m.img}
                  alt={m.label}
                  loading="lazy"
                  className="img-apple aspect-square w-full object-cover"
                />
                <figcaption className="px-2.5 py-2 text-[11px] leading-tight text-mist-500">
                  {m.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
