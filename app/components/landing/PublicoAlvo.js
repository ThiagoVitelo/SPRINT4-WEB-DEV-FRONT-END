import { PERFIL, NECESSIDADES } from "../../data/landing";

// Painel com título e lista de itens (usado para "Perfil" e "Necessidades")
const Painel = ({ titulo, itens }) => {
  return (
    <article className="card p-7 md:p-10">
      <h3 className="mb-7 text-2xl md:text-3xl">{titulo}</h3>
      <ul className="grid gap-4">
        {itens.map((item) => (
          <li key={item} className="relative pl-5 text-[15px] leading-relaxed text-muted before:absolute before:top-[0.72em] before:left-0 before:h-[5px] before:w-[5px] before:rounded-full before:bg-primary-light">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

const PublicoAlvo = () => {
  return (
    <section id="publico" aria-labelledby="audience-title" className="section">
      <div className="container-site grid gap-5 md:grid-cols-2 xl:grid-cols-[1.15fr_0.85fr_0.85fr]">
        <div className="mb-5 max-w-[740px] md:col-span-2 md:mb-9 xl:col-span-1 xl:mb-0 xl:pr-12">
          <p className="eyebrow">Público-Alvo</p>
          <h2 id="audience-title" className="text-4xl xl:text-[2.75rem]">
            Para uma geração que estuda, registra e resolve tudo pelo smartphone.
          </h2>
          <p className="mt-9 border-l-2 border-primary pl-5 text-lg text-[#d0d0db]">
            O JOVI Smart Assist foi pensado principalmente para jovens universitários que utilizam o smartphone como uma
            ferramenta constante de estudo, comunicação e registro do dia a dia.
          </p>
        </div>
        <Painel titulo="Perfil" itens={PERFIL} />
        <Painel titulo="Necessidades" itens={NECESSIDADES} />
      </div>
    </section>
  );
};

export default PublicoAlvo;
