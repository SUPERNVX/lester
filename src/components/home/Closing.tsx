import { motion, useReducedMotion } from "motion/react";
import { Mail } from "lucide-react";
import Footer from "../Footer";
import { DitherStrip, Eyebrow } from "../Apple";

const EMAIL = "lesteraf@gmail.com";

export default function Closing() {
  const reduceMotion = useReducedMotion();
  return (
    <>
      <section className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <Eyebrow>Mentorship & leadership</Eyebrow>
        <p className="headline mt-4 text-[30px] md:text-[42px]">
          Não formo seguidores. Formo pessoas capazes de liderar a próxima missão.
        </p>
        <div className="mx-auto mt-6 grid max-w-2xl gap-4 text-left text-[15px] leading-relaxed text-mist-300 md:grid-cols-2">
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
        <DitherStrip className="mx-auto mt-10 max-w-xl" />
      </section>

      <section id="contato" className="mx-auto max-w-5xl px-5 pb-20 md:pb-28">
        <motion.div
          className="dither-panel relative overflow-hidden rounded-[32px] bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 px-6 py-14 text-center text-black md:py-20"
          initial={reduceMotion ? false : { y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="relative font-mono2 text-[11px] font-bold tracking-[0.22em] uppercase opacity-70">
            Bring me your hardest decision
          </p>
          <h2 className="relative mx-auto mt-3 max-w-2xl text-[32px] leading-[1.05] font-bold tracking-[-0.03em] md:text-[52px]">
            Traga o problema que ninguém conseguiu estruturar.
          </h2>
          <p className="relative mx-auto mt-4 max-w-md text-[15px] leading-relaxed opacity-75">
            Engenharia, tecnologia, estratégia, governança ou novos negócios.
            Traga a decisão ou a oportunidade que precisa ser estruturada.
          </p>
          <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-[13px] font-semibold tracking-tight text-gold-300 transition hover:bg-coal"
              href={`mailto:${EMAIL}?subject=Tenho%20uma%20decis%C3%A3o%20complexa%20para%20avaliar`}
            >
              <Mail size={15} /> Iniciar conversa estratégica
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border-2 border-black/25 px-7 py-3 text-[13px] font-semibold tracking-tight transition hover:bg-black hover:text-gold-300"
              href="https://www.linkedin.com/in/lesterfaria/"
            >
              Conectar no LinkedIn ↗
            </a>
          </div>
          <a
            className="relative mt-5 inline-block text-[12px] font-semibold tracking-tight opacity-70 transition hover:opacity-100"
            href="https://www.instagram.com/prof_dr_lester/"
          >
            Acompanhar no Instagram ↗
          </a>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
