import { Mail, MessageCircle } from "lucide-react";
import Footer from "../Footer";

const EMAIL = "lesteraf@gmail.com";

export default function Closing() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <p className="font-display max-w-3xl text-3xl leading-tight font-extrabold md:text-4xl">
          Não formo seguidores. Formo pessoas capazes de liderar a próxima missão.
        </p>
        <div className="mt-5 grid max-w-4xl gap-4 font-mono text-sm leading-relaxed text-mist-300 md:grid-cols-2">
          <p>
            Liderança não consiste em concentrar conhecimento, poder ou
            protagonismo. Consiste em compreender o que move cada pessoa e
            colocá-la em um ambiente no qual possa assumir responsabilidade e
            crescer.
          </p>
          <p>
            Ao longo da carreira, formei pesquisadores, engenheiros, mestres,
            doutores e líderes — ampliando a capacidade das pessoas de
            conduzir os próximos projetos.
          </p>
        </div>
      </section>

      <section id="contato" className="bg-gold-500 text-black">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 py-14 md:grid-cols-2 md:py-16">
          <div>
            <p className="font-mono text-[11px] font-bold tracking-[0.25em] uppercase opacity-70">
              Bring me your hardest decision
            </p>
            <h2 className="font-display mt-3 text-3xl leading-tight font-extrabold md:text-4xl">
              Traga o problema que ninguém conseguiu estruturar.
            </h2>
            <p className="mt-3 max-w-md font-mono text-[13px] leading-relaxed opacity-80">
              Engenharia, tecnologia, estratégia, governança ou novos
              negócios. Traga o problema, a decisão ou a oportunidade que
              precisa ser estruturada.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-3 font-mono text-xs font-bold md:items-end">
            <a
              className="flex items-center gap-2 rounded-full bg-black px-6 py-3 tracking-widest text-gold-300 uppercase transition hover:bg-coal"
              href={`mailto:${EMAIL}?subject=Tenho%20uma%20decis%C3%A3o%20complexa%20para%20avaliar`}
            >
              <Mail size={14} /> Iniciar conversa estratégica
            </a>
            <a
              className="flex items-center gap-2 rounded-full border-2 border-black/70 px-6 py-2.5 tracking-widest uppercase transition hover:bg-black hover:text-gold-300"
              href="https://www.linkedin.com/in/lesterfaria/"
            >
              Conectar no LinkedIn ↗
            </a>
            <a
              className="flex items-center gap-2 font-bold tracking-widest uppercase opacity-80 transition hover:opacity-100"
              href="https://www.instagram.com/prof_dr_lester/"
            >
              <MessageCircle size={14} /> Acompanhar no Instagram ↗
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
