import { Zap, ZapOff, ChevronDown, SlidersHorizontal } from "lucide-react";

// CABEÇALHO da câmera: flash, proporção e ajustes
export default function CameraHeader({ flash, onFlash, proporcao }) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between px-4">
      <button
        type="button"
        onClick={onFlash}
        aria-pressed={flash}
        aria-label={flash ? "Desligar flash" : "Ligar flash"}
        className={`grid h-9 w-9 place-items-center rounded-full transition ${flash ? "bg-shot text-black" : "bg-white/10 text-shot"}`}
      >
        {flash ? <Zap size={17} fill="currentColor" /> : <ZapOff size={17} />}
      </button>

      <div className="flex items-center gap-2">
        <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold">{proporcao}</span>
        <span className="grid h-7 w-7 place-items-center rounded-full bg-white/10" aria-hidden="true">
          <ChevronDown size={15} />
        </span>
      </div>

      <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10" aria-hidden="true">
        <SlidersHorizontal size={16} />
      </span>
    </header>
  );
}
