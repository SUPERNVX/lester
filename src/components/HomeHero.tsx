import portrait from "../assets/hero-lester.webp";
import { DitherStrip, GhostCta, PrimaryCta } from "./Apple";

const TICKS = [
  { value: "30+", label: "anos de carreira" },
  { value: "40+", label: "projetos estratégicos e de P&D" },
  { value: "10+", label: "empresas e startups como fundador, sócio ou investidor" },
  { value: "Board", label: "organizações nacionais e internacionais" },
  { value: "20+", label: "mestres e doutores formados" },
];

export default function HomeHero() {
  return (
    <div className="bg-void text-mist-100">
      <main>
        {/* Hero Apple: centrado, tipografia gigante, CTAs em pílula */}
        <section className="dither-panel relative overflow-hidden">
          <div className="relative mx-auto max-w-4xl px-5 pt-16 pb-10 text-center md:pt-24">
            <a
              href="#trajetoria"
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pr-5 pl-1.5 backdrop-blur transition hover:border-gold-500/40"
            >
              <img
                src={portrait}
                alt="Lester Faria"
                className="img-apple h-8 w-8 rounded-full border border-white/15 object-cover object-top"
              />
              <span className="text-[13px] font-medium tracking-tight text-mist-300">
                Lester Faria <span className="text-gold-400">✦</span>{" "}
                <span className="text-mist-500">Strategic Architect</span>
              </span>
            </a>

            <h1 className="headline mx-auto mt-7 max-w-3xl text-[44px] leading-[1.02] md:text-[76px]">
              Building clarity for{" "}
              <span className="bg-gradient-to-b from-gold-200 via-gold-400 to-gold-600 bg-clip-text text-transparent">
                complex decisions.
              </span>
            </h1>
            <p className="subhead mx-auto mt-5 max-w-xl">
              Arquitetura estratégica para CEOs, boards, investidores e líderes
              de tecnologia — quando errar custa caro.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <PrimaryCta href="#atuacao">Latest missions ↗</PrimaryCta>
              <GhostCta href="#/advisory">Executive Advisory</GhostCta>
            </div>

            <p className="mt-6 font-mono2 text-[11px] tracking-[0.14em] text-mist-500 uppercase">
              Para CEOs · Boards · Investidores · Family Offices · Líderes de tecnologia
            </p>
          </div>
        </section>

        {/* Retrato em moldura Apple + faixa dither */}
        <section className="mx-auto max-w-5xl px-5">
          <div className="dither-frame overflow-hidden rounded-[28px]">
            <img
              src={portrait}
              alt="Retrato de Lester Faria"
              className="img-apple aspect-[16/8] w-full object-cover object-top md:aspect-[21/9]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          </div>
          <DitherStrip className="mx-auto mt-6 max-w-2xl" />
        </section>

        {/* Specs Apple: linha de indicadores, sem cards */}
        <div className="border-b border-white/[0.07]">
          <dl className="mx-auto grid max-w-5xl grid-cols-2 gap-x-6 gap-y-8 px-5 py-12 sm:grid-cols-3 lg:grid-cols-5">
            {TICKS.map((t) => (
              <div key={t.label} className="flex flex-col text-center lg:text-left">
                <dt className="order-2 mt-1 block text-[13px] leading-snug text-mist-500">
                  {t.label}
                </dt>
                <dd className="headline order-1 text-[30px] text-mist-100">
                  {t.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </main>
    </div>
  );
}
