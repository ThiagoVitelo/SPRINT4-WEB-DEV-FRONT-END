import { ArrowUpRight } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { EQUIPE } from "../../data/landing";

// Card de um integrante (recebe os dados por props)
const MembroCard = ({ membro }) => {
  return (
    <article className="card grid h-full min-h-[275px] content-between bg-[linear-gradient(145deg,rgba(106,0,255,0.07),transparent_55%)] p-[30px]">
      <span className="mb-9 grid h-[58px] w-[58px] place-items-center rounded-[14px] border border-primary-light/40 bg-linear-to-br from-[#3a1768] to-[#111428] font-display text-sm font-bold" aria-hidden="true">
        {membro.iniciais}
      </span>
      <div>
        <h3 className="text-[1.375rem] leading-tight">{membro.nome}</h3>
        <p className="mt-2 text-[15px] text-[#c8c8d3]">{membro.funcao}</p>
        <small className="mt-1 block text-sm text-muted">Engenharia de Software</small>
      </div>
      <a
        href={membro.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`LinkedIn de ${membro.nome} (abre em nova aba)`}
        className="mt-8 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary-light hover:text-white"
      >
        LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
      </a>
    </article>
  );
};

const Equipe = () => {
  return (
    <section id="equipe" aria-labelledby="team-title" className="section">
      <div className="container-site">
        <SectionHeading eyebrow="Nossa Equipe" titulo="Debug Team" id="team-title" />

        {/* grid de 6 colunas: no desktop cada card ocupa 2 (3 em cima, 2 centralizados embaixo) */}
        <div className="grid gap-5 sm:grid-cols-6">
          {EQUIPE.map((membro, i) => (
            <div
              key={membro.nome}
              className={`sm:col-span-3 lg:col-span-2 ${i === 3 ? "lg:col-start-2" : ""} ${i === 4 ? "sm:col-start-2 sm:col-end-6 lg:col-auto" : ""}`}
            >
              <MembroCard membro={membro} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipe;
