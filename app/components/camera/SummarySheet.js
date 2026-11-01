import { BookOpen, Download, X } from "lucide-react";

// Painel com o resumo gerado pelo Modo Estudo
export default function SummarySheet({ resumo, onFechar, onBaixarPdf, children }) {
  return (
    <div className="absolute inset-x-0 bottom-0 z-30 flex max-h-[82%] flex-col rounded-t-[26px] border-t border-white/10 bg-[#1a1a20]/95 backdrop-blur-xl animate-slide-up" role="dialog" aria-labelledby="resumo-titulo">
      <div className="flex items-start justify-between px-5 pt-5">
        <div>
          <p className="flex items-center gap-1.5 text-xs font-semibold text-assist">
            <BookOpen size={13} /> Resumo JOVI
          </p>
          <h3 id="resumo-titulo" className="mt-1 text-xl">{resumo.titulo}</h3>
          <p className="text-[11px] text-white/50">
            {resumo.materia} · {resumo.paginas} páginas analisadas
          </p>
        </div>
        <button type="button" onClick={onFechar} aria-label="Fechar resumo" className="grid h-8 w-8 place-items-center rounded-full bg-white/10">
          <X size={16} />
        </button>
      </div>

      <div className="no-scrollbar mt-3 flex-1 overflow-y-auto px-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">Visão geral</p>
        <p className="mt-1 text-[13px] leading-relaxed text-white/85">{resumo.visaoGeral}</p>

        <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-assist">Conteúdo identificado</p>
        <ul className="mt-2 grid gap-2 pb-2">
          {resumo.topicos.map((t) => (
            <li key={t.titulo} className="rounded-xl bg-white/[0.06] px-3 py-2.5 text-[12px] leading-snug text-white/80">
              <strong className="block text-white">{t.titulo}</strong>
              {t.texto}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid gap-2 border-t border-white/10 px-5 pb-5 pt-3">
        <div className="grid grid-cols-2 gap-2">
          <button type="button" onClick={onFechar} className="rounded-full bg-white/10 py-2.5 text-sm font-semibold">
            Concluir
          </button>
          <button type="button" onClick={onBaixarPdf} className="flex items-center justify-center gap-1.5 rounded-full bg-assist py-2.5 text-sm font-bold text-black">
            <Download size={15} /> Baixar PDF
          </button>
        </div>
        {/* espaço para ações extras (ex.: salvar em Meus Estudos, na próxima etapa) */}
        {children}
      </div>
    </div>
  );
}
