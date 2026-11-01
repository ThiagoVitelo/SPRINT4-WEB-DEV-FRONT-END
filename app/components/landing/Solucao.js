import { FLUXO_ESTUDO } from "../../data/landing";

// Card de cada pilar da solução (recebe número, título e conteúdo por props)
const Pilar = ({ numero, titulo, children }) => {
  return (
    <article className="card grid gap-5 bg-[linear-gradient(145deg,rgba(106,0,255,0.08),transparent_45%)] p-7 md:grid-cols-[58px_1fr] md:p-12 lg:min-h-[360px]">
      <span className="font-display text-xs font-bold text-primary-light">{numero}</span>
      <div>
        <h3 className="mb-5 text-2xl md:text-3xl">{titulo}</h3>
        {children}
      </div>
    </article>
  );
};

const Solucao = () => {
  return (
    <section id="solucao" aria-labelledby="solution-title" className="section bg-surface">
      <div className="container-site">
        <div className="grid items-end gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-28">
          <div>
            <p className="eyebrow">A Solução</p>
            <h2 id="solution-title" className="text-4xl md:text-6xl">
              Inteligência que entende o contexto antes do clique.
            </h2>
          </div>
          <p className="max-w-[58ch] pb-2 text-muted">
            O JOVI Smart Assist reduz decisões técnicas e transforma a câmera em uma experiência orientada pelo contexto,
            ajudando o usuário tanto na captura de imagens quanto na organização de conteúdos de estudo.
          </p>
        </div>

        <article className="my-14 grid gap-3.5 border-y border-white/10 py-8 md:grid-cols-[150px_1fr] md:gap-8 lg:my-24">
          <p className="text-xs font-bold tracking-[0.13em] text-primary-light uppercase">O problema</p>
          <p className="max-w-[72ch] text-lg leading-relaxed text-[#ceced8]">
            As câmeras dos smartphones evoluíram, mas a experiência de uso ainda exige que o usuário tome decisões técnicas
            que nem sempre domina. Escolher entre modos como retrato, noturno, documento ou outros recursos pode gerar
            dúvida, perda de tempo e resultados abaixo do esperado. No ambiente acadêmico, esse problema se amplia:
            estudantes registram lousas, livros e anotações todos os dias, mas essas imagens acabam acumuladas na galeria
            sem organização, contexto ou aproveitamento real.
          </p>
        </article>

        <div className="grid gap-5 md:grid-cols-2">
          <Pilar numero="01" titulo="IA Fotográfica Inteligente">
            <p className="text-muted">
              A IA analisa iluminação, distância, ambiente e contexto da cena para recomendar o modo de captura mais adequado.
            </p>
            <p className="mt-9 border-t border-white/10 pt-4 text-sm text-[#d3d3dd]">A decisão final continua sendo do usuário.</p>
          </Pilar>
          <Pilar numero="02" titulo="Modo Estudo Inteligente">
            <p className="text-muted">
              No Modo Estudo, o JOVI Smart Assist identifica conteúdos de lousas, livros ou anotações, organiza as principais
              informações, gera um resumo e permite a exportação do material em PDF.
            </p>
            <ol className="mt-8 flex flex-wrap gap-y-2" aria-label="Fluxo do Modo Estudo">
              {FLUXO_ESTUDO.map((etapa, i) => (
                <li key={etapa} className="text-sm font-semibold text-[#d7d7e0]">
                  {etapa}
                  {i < FLUXO_ESTUDO.length - 1 && (
                    <span className="mx-2.5 text-primary-light" aria-hidden="true">→</span>
                  )}
                </li>
              ))}
            </ol>
          </Pilar>
        </div>
      </div>
    </section>
  );
};

export default Solucao;
