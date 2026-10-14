import { useEffect, useRef, useState } from "react";
import { TegakiRenderer, type TegakiRendererHandle } from "tegaki/react";
import caveat from "tegaki/fonts/caveat";
import { motion, useReducedMotion } from "motion/react";
import portrait from "../assets/hero-lester.webp";
import GradualBlur from "./GradualBlur";
import { DitherStrip, GhostCta, PrimaryCta } from "./Apple";

const TICKS = [
  { value: "30+", label: "anos de carreira" },
  { value: "40+", label: "projetos estratégicos e de P&D" },
  { value: "10+", label: "empresas e startups como fundador, sócio ou investidor" },
  { value: "Board", label: "organizações nacionais e internacionais" },
  { value: "20+", label: "mestres e doutores formados" },
];

export default function HomeHero({ loaded = true }: { loaded?: boolean }) {
  const reduceMotion = useReducedMotion();
  const [firstTitleComplete, setFirstTitleComplete] = useState(false);
  const firstTitleRef = useRef<TegakiRendererHandle>(null);
  const secondTitleRef = useRef<TegakiRendererHandle>(null);
  const secondLineStarted = useRef(false);

  useEffect(() => {
    if (!loaded || reduceMotion || !firstTitleComplete) return;
    secondTitleRef.current?.engine?.play();
  }, [firstTitleComplete, loaded, reduceMotion]);
  return (
    <div className="bg-void text-mist-100">
      <main>
        {/* Hero Apple: centrado, tipografia gigante, CTAs em pílula */}
        <section className="dither-panel relative overflow-hidden">
          <div className="relative mx-auto max-w-4xl px-5 pt-16 pb-10 text-center md:pt-24">
            <motion.a
              href="#trajetoria"
              initial={false}
              animate={loaded ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: reduceMotion ? 0 : 1, ease: [0.23, 1, 0.32, 1], delay: reduceMotion ? 0 : 0.55 }}
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
            </motion.a>

            <h1 className="headline mx-auto mt-7 max-w-3xl text-[44px] leading-[1.02] md:text-[76px]">
              <span className="hero-title-line block" aria-label="Building clarity for">
                {loaded && <TegakiRenderer
                  font={caveat}
                  ref={firstTitleRef}
                  time={reduceMotion ? "100%" : {
                    mode: "uncontrolled",
                    duration: 1.75,
                    playing: true,
                    onTimeChange: (time) => {
                      const engine = firstTitleRef.current?.engine;
                      if (secondLineStarted.current || !engine?.duration || time / engine.duration < 0.82) return;
                      secondLineStarted.current = true;
                      setFirstTitleComplete(true);
                    },
                  }}
                  reducedMotion="user"
                  onComplete={() => {
                    secondLineStarted.current = true;
                    setFirstTitleComplete(true);
                  }}
                  className="hero-handdraw block"
                >
                  Building clarity for
                </TegakiRenderer>}
              </span>
              <span className="hero-title-line hero-title-accent block" aria-label="complex decisions.">
                {loaded && <TegakiRenderer
                  ref={secondTitleRef}
                  font={caveat}
                  time={reduceMotion ? "100%" : { mode: "uncontrolled", duration: 1.75, playing: false }}
                  reducedMotion="user"
                  className="hero-handdraw mt-1 block text-gold-300"
                >
                  complex decisions.
                </TegakiRenderer>}
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
          <div className="dither-frame relative isolate overflow-hidden rounded-[28px]">
            <img
              src={portrait}
              alt="Retrato de Lester Faria"
              className="img-apple aspect-[16/11] w-full object-cover object-top md:aspect-[21/12]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <GradualBlur strength={1.75} height="clamp(3.5rem, 9vw, 7rem)" divCount={5} />
          </div>
          <DitherStrip className="mx-auto mt-6 max-w-2xl" />
        </section>

        {/* Prova social em marquee, com conteúdo estático acessível e pausa por teclado. */}
        <section aria-label="Experiência e resultados" className="overflow-hidden border-y border-white/[0.07] py-8">
          <div className="sr-only">
            {TICKS.map((item) => <p key={item.label}>{item.value} {item.label}</p>)}
          </div>
          <div className="stats-marquee-track flex w-max gap-4 px-4" aria-hidden="true">
            {[...TICKS, ...TICKS].map((item, index) => (
              <div key={`${item.label}-${index}`} className="flex min-h-20 min-w-[240px] items-center gap-4 rounded-full border border-white/10 bg-white/[0.025] px-6 py-4">
                <span className="headline text-[30px] text-gold-200">{item.value}</span>
                <span className="max-w-[170px] text-[13px] leading-snug text-mist-300">{item.label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
