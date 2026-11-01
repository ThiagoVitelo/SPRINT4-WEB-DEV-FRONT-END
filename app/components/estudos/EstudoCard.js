"use client";
import { useState } from "react";
import { ChevronDown, Download, Trash2 } from "lucide-react";
import { baixarResumoPdf } from "../../utils/gerarPdf";

const formatarData = (iso) =>
  new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

// Card de um resumo salvo (recebe os dados e a função de excluir por props)
const EstudoCard = ({ estudo, onRemover }) => {
  const [aberto, setAberto] = useState(false);

  return (
    <article className="card overflow-hidden">
      <div className="flex gap-4 p-4 sm:p-5">
        <img src={estudo.imagem} alt="" className="h-20 w-20 shrink-0 rounded-xl object-cover sm:h-24 sm:w-24" />
        <div className="min-w-0 flex-1">
          <p className="text-xs font-semibold tracking-[0.1em] text-primary-light uppercase">{estudo.materia}</p>
          <h2 className="mt-1 truncate text-xl">{estudo.titulo}</h2>
          <p className="mt-1 text-xs text-muted">
            {estudo.paginas} páginas · {estudo.topicos.length} tópicos · salvo em {formatarData(estudo.salvoEm)}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <button type="button" onClick={() => setAberto(!aberto)} aria-expanded={aberto} className="btn-ghost min-h-9 px-3 text-xs">
              <ChevronDown size={14} className={`transition ${aberto ? "rotate-180" : ""}`} /> {aberto ? "Fechar" : "Ver resumo"}
            </button>
            <button type="button" onClick={() => baixarResumoPdf(estudo)} className="btn-ghost min-h-9 px-3 text-xs">
              <Download size={14} /> PDF
            </button>
            <button type="button" onClick={() => onRemover(estudo.id)} className="btn-ghost min-h-9 px-3 text-xs text-danger hover:border-danger/50">
              <Trash2 size={14} /> Excluir
            </button>
          </div>
        </div>
      </div>

      {aberto && (
        <div className="animate-fade-up border-t border-white/10 p-5">
          <p className="text-sm text-[#d0d0db]">{estudo.visaoGeral}</p>
          <ul className="mt-4 grid gap-3 md:grid-cols-2">
            {estudo.topicos.map((t) => (
              <li key={t.titulo} className="rounded-xl bg-white/[0.04] p-3 text-sm text-muted">
                <strong className="block text-ink">{t.titulo}</strong>
                {t.texto}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
};

export default EstudoCard;
