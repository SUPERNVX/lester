import { Quote } from "lucide-react";
import adarter from "../../assets/mission-adarter-home.webp";
import aerospace from "../../assets/mission-aerospace-case.webp";
import ieav from "../../assets/mission-ieav-home.webp";
import ipfacens from "../../assets/mission-ipfacens-home.webp";
import robot from "../../assets/robot.webp";
import optimization from "../../assets/mission-optimization-case.webp";

const MISSIONS = [
  { img: ipfacens, title: "IPFacens", desc: "Liderança executiva, crescimento e pesquisa aplicada." },
  { img: ieav, title: "IEAv", desc: "C-Level, governança, portfólio e tecnologias críticas." },
  { img: adarter, title: "A-Darter", desc: "Deep tech, cooperação internacional e sistemas críticos." },
  { img: aerospace, title: "Aeroespacial", desc: "Integração multinacional e programas estratégicos." },
  { img: robot, title: "IA Industrial", desc: "IA, sensores e manufatura avançada." },
  { img: optimization, title: "Otimização", desc: "Algoritmos avançados para portfólios complexos." },
];

const INSTITUTIONS = ["FAB", "ITA", "IEAv", "DCTA", "SENAI-SP", "FACENS", "IPFacens", "IME"];

const TESTIMONIALS = [
  {
    quote:
      "Sua visão ampla e sistêmica permite transformar projetos de alta criticidade em oportunidades de crescimento.",
    name: "Alexandre Giuliani",
    role: "CEO da ENG PRESS · Conselheiro e Advisor",
  },
  {
    quote:
      "Sua habilidade em traduzir complexidades em soluções simples e eficientes é um diferencial.",
    name: "João Paulo Felix",
    role: "AI & Deep Tech Strategist · Board Advisor",
  },
  {
    quote:
      "Reúne sólido conhecimento em engenharia e inovação a uma rara capacidade de articular visão estratégica com execução prática.",
    name: "Marcel de Abreu Machado",
    role: "COO · E-MOB Center",
  },
];

const ROLES = ["OpenVQA Hub Foundation", "Navollo", "Instituto Foton", "QNQ", "Q-BRA", "Liconic"];

export default function Missions() {
  return (
    <>
      <section id="missions" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
              Selected Missions
            </p>
            <h2 className="font-display mt-4 max-w-xl text-3xl leading-tight font-extrabold md:text-4xl">
              Experiência construída onde complexidade e responsabilidade são reais.
            </h2>
          </div>
          <a
            className="gold-border rounded-full px-5 py-2.5 font-mono text-[11px] font-bold tracking-widest text-gold-300 uppercase transition hover:bg-gold-900/40"
            href="#contato"
          >
            Ver todas as missões
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {MISSIONS.map((m) => (
            <article key={m.title} className="gold-border group relative overflow-hidden rounded-2xl bg-obsidian">
              <img
                src={m.img}
                alt={m.title}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover grayscale-[40%] transition group-hover:grayscale-0"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-4 pt-10">
                <h3 className="font-display text-xl font-extrabold text-gold-200">
                  {m.title}
                </h3>
                <p className="mt-0.5 font-mono text-[11px] leading-relaxed text-mist-300">
                  {m.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-obsidian">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
            Institutional experience
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-3xl leading-tight font-extrabold md:text-4xl">
            Experiência em ciência, indústria, defesa, academia e inovação.
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {INSTITUTIONS.map((i) => (
              <span
                key={i}
                className="gold-border rounded-full bg-void px-4 py-1.5 font-mono text-xs font-semibold text-gold-200"
              >
                {i}
              </span>
            ))}
          </div>

          <p className="mt-12 font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
            Independent perspectives
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-2xl leading-tight font-extrabold md:text-3xl">
            O que profissionais que trabalharam comigo observaram.
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-3 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="gold-border rounded-2xl bg-void p-6">
                <Quote size={20} className="text-gold-500" />
                <blockquote className="font-display mt-3 text-lg leading-snug text-mist-100">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-4">
                  <p className="font-mono text-xs font-semibold text-gold-300">{t.name}</p>
                  <p className="mt-0.5 font-mono text-[11px] text-mist-500">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12">
            <p className="font-mono text-[11px] tracking-[0.25em] text-gold-500 uppercase">
              Current Advisory Roles
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {ROLES.map((r) => (
                <span
                  key={r}
                  className="rounded-full border border-white/10 bg-void px-4 py-1.5 font-mono text-xs text-mist-300"
                >
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
