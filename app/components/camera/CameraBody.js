import { Bot } from "lucide-react";
import { ZOOMS } from "../../data/modos";
import { AssistPill } from "./AssistCards";

// CORPO da câmera: visor com a cena, zoom, botão da IA e camadas sobrepostas
export default function CameraBody({ cena, filtro, escala, zoom, onZoom, onIA, analisando, iaOcupada, flashAtivo, toast, children }) {
  return (
    <div className="relative min-h-0 flex-1 overflow-hidden bg-neutral-900">
      {cena && (
        <img
          key={cena.slug}
          src={cena.imagem}
          alt={`Cena de demonstração: ${cena.nome}`}
          className="h-full w-full object-cover transition-[transform,filter] duration-500"
          style={{ filter: filtro, transform: `scale(${escala})` }}
        />
      )}

      {/* análise em andamento: etiqueta + linha de varredura */}
      {analisando && (
        <>
          <AssistPill texto="Analisando cena..." />
          <div className="pointer-events-none absolute inset-x-6 h-0.5 bg-assist shadow-[0_0_18px_4px_rgba(69,200,245,0.6)] animate-scan" />
        </>
      )}

      {/* aviso rápido (modo ativado, foto capturada...) */}
      {toast && (
        <div className="absolute left-1/2 top-3 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/70 px-3 py-1 text-[11px] font-semibold animate-fade-up" role="status">
          {toast}
        </div>
      )}

      {/* clarão da captura */}
      {flashAtivo && <div className="pointer-events-none absolute inset-0 z-40 bg-white animate-flash" />}

      {/* cartões do assistente (sugestão, progresso) */}
      <div className="absolute inset-x-3 bottom-[60px] z-20">{children}</div>

      {/* zoom + botão da IA */}
      <div className="absolute inset-x-0 bottom-3 z-10 flex items-center justify-center px-3">
        <div className="flex items-center gap-0.5 rounded-full bg-black/45 p-1 backdrop-blur">
          {ZOOMS.map((z) => (
            <button
              key={z.label}
              type="button"
              onClick={() => onZoom(z.label)}
              aria-pressed={zoom === z.label}
              className={`h-8 min-w-8 rounded-full px-1.5 text-[11px] font-semibold transition ${zoom === z.label ? "bg-white/15 text-shot" : "text-white/85"}`}
            >
              {z.label}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={onIA}
          disabled={iaOcupada}
          aria-label="Analisar cena com o JOVI Smart Assist"
          title="JOVI Smart Assist"
          className={`absolute right-3 grid h-11 w-11 place-items-center rounded-full border-2 border-assist bg-black/55 text-assist backdrop-blur transition hover:scale-105 disabled:opacity-60 ${iaOcupada ? "shadow-[0_0_0_6px_rgba(69,200,245,0.18)]" : ""}`}
        >
          <Bot size={20} />
        </button>
      </div>
    </div>
  );
}
