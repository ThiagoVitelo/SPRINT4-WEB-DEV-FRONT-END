import { X } from "lucide-react";

// Modal com o vídeo de demonstração.
// A lógica (abrir, fechar, Esc, foco) fica no hook useModal; aqui é só o visual.
const VideoModal = ({ aberto, fechar, refModal }) => {
  if (!aberto) return null;

  return (
    <div className="fixed inset-0 z-[500] grid place-items-center p-3 md:p-6" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className="absolute inset-0 bg-[rgba(2,2,5,0.86)] backdrop-blur-md" onClick={fechar} aria-hidden="true" />
      <div ref={refModal} className="card relative z-10 max-h-[calc(100vh-24px)] w-full max-w-[900px] animate-fade-up overflow-y-auto border-primary-light/25 p-6 md:p-10">
        <button type="button" onClick={fechar} aria-label="Fechar demonstração" className="absolute top-4 right-4 grid h-[42px] w-[42px] place-items-center rounded-full border border-white/10 bg-white/5">
          <X size={20} />
        </button>
        <p className="eyebrow">Demonstração</p>
        <h2 id="modal-title" className="pr-12 text-3xl md:text-5xl">
          JOVI Smart Assist em ação
        </h2>
        <p className="mt-4 max-w-[760px] text-muted">
          Veja o Smart Assist reconhecer o contexto, recomendar o Modo Estudo, analisar o conteúdo capturado, gerar um
          resumo e permitir sua exportação em PDF.
        </p>
        <video controls preload="metadata" className="mt-7 max-h-[55vh] w-full rounded-xl bg-black">
          <source src="/video/video-prototipo.mp4" type="video/mp4" />
          Seu navegador não oferece suporte à reprodução de vídeo.
        </video>
      </div>
    </div>
  );
};

export default VideoModal;
