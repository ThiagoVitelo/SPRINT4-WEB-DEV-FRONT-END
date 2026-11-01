import SectionHeading from "../ui/SectionHeading";
import { GALERIA } from "../../data/landing";

const Galeria = () => {
  return (
    <section id="galeria" aria-labelledby="gallery-title" className="section bg-surface">
      <div className="container-site">
        <SectionHeading eyebrow="Galeria" titulo="Do contexto ao conteúdo organizado." id="gallery-title" />

        {/* 1 coluna no celular, 2 no tablet e 3 no desktop */}
        <div className="grid gap-7 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {GALERIA.map((item, i) => (
            <figure key={item.src} className="mx-auto w-full max-w-[410px] overflow-hidden rounded-[18px] border border-white/10 bg-raised transition hover:-translate-y-1 hover:border-primary-light/40 sm:max-w-none">
              <div className="mx-[18px] mt-[18px] grid aspect-[9/19] place-items-center overflow-hidden rounded-[13px] border border-white/5 bg-[#050508]">
                <img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full object-contain" />
              </div>
              <figcaption className="grid min-h-[92px] px-5 py-[22px] font-display text-[15px] leading-snug text-[#e2e2ea]">
                <span className="mb-1.5 font-sans text-xs font-bold tracking-[0.14em] text-primary-light">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.legenda}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Galeria;
