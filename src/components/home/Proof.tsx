import { SectionHead } from "../Apple";

export default function Proof() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 md:py-28">
      <SectionHead
        eyebrow="Quando os stakes são altos e o caminho não é claro"
        title={
          <>
            Organizações sofrem por falta de{" "}
            <span className="text-gold-300">arquitetura.</span>
          </>
        }
      />
      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-12">
        <div className="space-y-4 text-[16px] leading-relaxed text-mist-300 md:col-span-7">
          <p>
            Problemas relevantes atravessam áreas, interesses, restrições e
            horizontes de tempo. Quando tecnologia, negócio, governança,
            capital e pessoas são tratados separadamente, a organização perde
            velocidade e aumenta sua exposição ao risco.
          </p>
          <p>
            Meu papel é ler o sistema completo, identificar o que está oculto
            e construir uma arquitetura de decisão que possa ser defendida,
            executada e governada.
          </p>
        </div>
        <aside className="md:col-span-5">
          <div className="dither-panel card-soft relative overflow-hidden p-7">
            <p className="font-mono2 text-[10px] tracking-[0.22em] text-gold-500 uppercase">
              Strategic principle
            </p>
            <p className="font-accent mt-3 text-[26px] leading-snug font-bold text-gold-200">
              “I connect what others are not seeing.”
            </p>
            <div aria-hidden="true" className="dither-loading mt-6 h-8 opacity-70" />
          </div>
        </aside>
      </div>
    </section>
  );
}
