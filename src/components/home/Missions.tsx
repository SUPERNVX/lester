import { Quote } from "lucide-react";
import adarter from "../../assets/mission-adarter-home.webp";
import aerospace from "../../assets/mission-aerospace-case.webp";
import ieav from "../../assets/mission-ieav-home.webp";
import ipfacens from "../../assets/mission-ipfacens-home.webp";
import robot from "../../assets/robot.webp";
import optimization from "../../assets/mission-optimization-case.webp";
import { Eyebrow, GhostCta } from "../Apple";

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
      <section id="missions" className="border-t border-white/[0.07] bg-obsidian/60">
        <div className="mx-auto max-w-5xl px-5 py-20 md:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Selected Missions</Eyebrow>
              <h2 className="headline mt-4 text-[32px] md:text-[44px]">
                Experiência construída onde complexidade e responsabilidade são reais.
              </h2>
            </div>
            <GhostCta href="#/missions">Ver todas as missões</GhostCta>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MISSIONS.map((m) => (
              <article key={m.title} className="card-soft group overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    src={m.img}
                    alt={m.title}
                    loading="lazy"
                    className="img-apple aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[19px] font-semibold tracking-tight text-mist-100">
                    {m.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-mist-500">
                    {m.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 md:py-28">
        <Eyebrow>Institutional experience</Eyebrow>
        <h2 className="headline mt-4 max-w-2xl text-[30px] md:text-[40px]">
          Experiência em ciência, indústria, defesa, academia e inovação.
        </h2>
        <div className="mt-7 flex flex-wrap gap-2">
          {INSTITUTIONS.map((i) => (
            <span
              key={i}
              className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[13px] font-medium tracking-tight text-mist-100"
            >
              {i}
            </span>
          ))}
        </div>

        <div className="mt-16">
          <Eyebrow>Independent perspectives</Eyebrow>
          <h2 className="headline mt-4 max-w-2xl text-[26px] md:text-[34px]">
            O que profissionais que trabalharam comigo observaram.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="card-soft flex flex-col p-7">
                <Quote size={20} className="text-gold-500" />
                <blockquote className="mt-4 flex-1 text-[16px] leading-snug tracking-tight text-mist-100">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-white/10 pt-4">
                  <p className="text-[13px] font-semibold text-gold-300">{t.name}</p>
                  <p className="mt-0.5 text-[12px] text-mist-500">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <Eyebrow>Current Advisory Roles</Eyebrow>
          <div className="mt-4 flex flex-wrap gap-2">
            {ROLES.map((r) => (
              <span
                key={r}
                className="rounded-full border border-white/10 px-4 py-1.5 text-[12px] text-mist-300"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
