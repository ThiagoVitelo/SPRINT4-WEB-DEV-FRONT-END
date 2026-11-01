import { useEffect, useRef } from "react";
import { RefreshCw, Image as ImageIcon } from "lucide-react";
import { MODOS } from "../../data/modos";

// RODAPÉ da câmera: abas de modo e linha do disparador
export default function CameraFooter({ modo, onModo, onCapturar, onGaleria, onVirar, miniatura }) {
  const refAbas = useRef(null);

  // mantém a aba ativa centralizada (inclusive quando a IA troca o modo)
  useEffect(() => {
    const ativa = refAbas.current?.querySelector('[aria-pressed="true"]');
    ativa?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [modo]);

  return (
    <footer className="shrink-0 pb-5 pt-2">
      <div ref={refAbas} className="no-scrollbar flex gap-5 overflow-x-auto px-[40%] py-2" role="group" aria-label="Modos da câmera">
        {MODOS.map((m) => (
          <button
            key={m.nome}
            type="button"
            onClick={() => onModo(m.nome)}
            aria-pressed={modo === m.nome}
            className={`shrink-0 text-[13px] font-semibold transition ${modo === m.nome ? "text-shot" : "text-white/60 hover:text-white"}`}
          >
            {m.nome}
          </button>
        ))}
      </div>

      <div className="mt-3 flex items-center justify-between px-8">
        <button type="button" onClick={onGaleria} aria-label="Abrir Meus Estudos" title="Meus Estudos" className="grid h-11 w-11 place-items-center overflow-hidden rounded-full border-2 border-white/30 bg-white/10">
          {miniatura ? <img src={miniatura} alt="" className="h-full w-full object-cover" /> : <ImageIcon size={18} className="text-white/70" />}
        </button>

        <button type="button" onClick={onCapturar} aria-label="Tirar foto" className="grid h-[72px] w-[72px] place-items-center rounded-full border-4 border-white transition active:scale-95">
          <span className="h-[58px] w-[58px] rounded-full bg-white" />
        </button>

        <button type="button" onClick={onVirar} aria-label="Alternar câmera" className="grid h-11 w-11 place-items-center rounded-full bg-white/10">
          <RefreshCw size={18} />
        </button>
      </div>
    </footer>
  );
}
