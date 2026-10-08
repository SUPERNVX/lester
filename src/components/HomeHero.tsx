import { ArrowUpRight } from "lucide-react";
import portrait from "../assets/hero-lester.webp";

const TICKS = [
  { value: "30+", label: "anos de carreira" },
  { value: "40+", label: "projetos estratégicos e de P&D" },
  { value: "10+", label: "empresas e startups como fundador, sócio ou investidor" },
  { value: "Board", label: "atuação em organizações nacionais e internacionais" },
  { value: "20+", label: "mestres e doutores formados" },
];

export default function HomeHero() {
  return (
    <div className="bg-void text-mist-100">
      <main>
        <section className="mx-auto max-w-6xl px-6 pt-14 pb-12 text-center md:pt-20">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-coal py-2 pr-6 pl-2">
            <img
              src={portrait}
              alt="Lester Faria"
              className="h-12 w-12 rounded-full border border-gold-700 object-cover object-top"
            />
            <span className="text-left leading-tight">
              <span className="block font-mono text-sm font-semibold text-mist-100">
                Lester Faria ✦
              </span>
              <span className="block font-mono text-[11px] text-mist-500">
                Strategic Architect
              </span>
            </span>
          </div>
          <h1 className="font-display mx-auto mt-6 max-w-3xl text-5xl leading-tight font-extrabold md:text-6xl">
            Building clarity for{" "}
            <span className="gold-glow text-gold-300">complex decisions.</span>
          </h1>
          <div>
            <a
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 font-mono text-xs font-bold tracking-widest text-black uppercase transition hover:bg-gold-400"
              href="#atuacao"
            >
              Latest missions <ArrowUpRight size={14} />
            </a>
          </div>
          <p className="mt-7 font-mono text-[11px] tracking-wider text-mist-500">
            Para CEOs · Boards · Investidores · Family Offices · Líderes de tecnologia
          </p>
        </section>

        <div className="border-y border-white/10">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-4">
            {TICKS.map((t) => (
              <span key={t.label} className="flex items-center gap-8">
                <span className="font-mono text-sm whitespace-nowrap">
                  <strong className="font-semibold text-gold-300">{t.value}</strong>{" "}
                  <span className="text-mist-300">{t.label}</span>
                </span>
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold-600" />
              </span>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
