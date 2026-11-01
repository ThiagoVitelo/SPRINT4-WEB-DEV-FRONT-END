import { Bot, Check, Loader2, Sparkles } from "lucide-react";

// Rótulo padrão dos cartões do assistente
function Rotulo() {
  return (
    <p className="flex items-center gap-1.5 text-[11px] font-semibold text-assist">
      <Bot size={13} /> JOVI Smart Assist
    </p>
  );
}

const cartao = "animate-fade-up rounded-2xl border border-white/10 bg-[#1c1c22]/90 p-3.5 shadow-2xl backdrop-blur-md";

// Etiqueta no topo do visor enquanto a IA analisa
export function AssistPill({ texto }) {
  return (
    <div className="absolute left-1/2 top-3 z-20 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-black/60 px-3 py-1 text-[11px] font-semibold backdrop-blur" role="status">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-assist" /> {texto}
    </div>
  );
}

// Balão com a sugestão da IA (o usuário decide se aceita)
export function SuggestionCard({ cena, modoAtual, onAceitar, onIgnorar }) {
  const confianca = Math.round(cena.confianca * 100);
  const jaIdeal = cena.modo.nome === modoAtual;
  const estudo = cena.tipo === "estudo";

  return (
    <div className={cartao} role="dialog" aria-label="Sugestão do JOVI Smart Assist">
      <Rotulo />
      <p className="mt-1.5 text-sm font-bold leading-snug">
        {estudo ? "Conteúdo de estudo detectado" : jaIdeal ? `Modo ${cena.modo.nome} já é o ideal` : `Sugestão: Modo ${cena.modo.nome}`}
      </p>
      <p className="mt-1 text-xs leading-snug text-white/70">
        {estudo ? "O Modo Estudo pode organizar, interpretar e resumir suas anotações." : cena.modo.descricao}
      </p>
      <p className="mt-2 flex flex-wrap gap-1">
        {cena.deteccoes.map((d) => (
          <span key={d} className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-white/80">
            {d}
          </span>
        ))}
        <span className="rounded-full bg-assist/15 px-2 py-0.5 text-[10px] text-assist">{confianca}% de confiança</span>
      </p>
      <div className="mt-3 flex justify-end gap-2">
        {jaIdeal ? (
          <button type="button" onClick={onIgnorar} className="rounded-full bg-assist px-4 py-1.5 text-xs font-bold text-black">
            Entendi
          </button>
        ) : (
          <>
            <button type="button" onClick={onIgnorar} className="rounded-full px-3 py-1.5 text-xs font-semibold text-white/80 hover:bg-white/10">
              Ignorar
            </button>
            <button type="button" onClick={onAceitar} className="rounded-full bg-assist px-4 py-1.5 text-xs font-bold text-black">
              {estudo ? "Abrir" : "Ativar"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// Progresso do Modo Estudo (lendo -> organizando -> resumindo)
export function StudyProgress({ etapas, etapa, paginas }) {
  return (
    <div className={cartao} role="status" aria-live="polite">
      <Rotulo />
      <ul className="mt-2 grid gap-1.5 text-xs">
        {etapas.map((nome, i) => {
          const feito = etapa > i;
          const atual = etapa === i;
          const texto = i === 0 ? `${paginas} ${nome.toLowerCase()}` : nome;
          return (
            <li key={nome} className={`flex items-center gap-2 ${feito || atual ? "text-white" : "text-white/40"}`}>
              {feito ? <Check size={14} className="text-assist" /> : atual ? <Loader2 size={14} className="animate-spin text-assist" /> : <Sparkles size={14} />}
              {texto}
              {atual && "..."}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
