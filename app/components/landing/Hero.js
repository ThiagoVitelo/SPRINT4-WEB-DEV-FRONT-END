import { Play } from "lucide-react";

// Primeira seção da landing: título, frase de impacto e o visual da lente com IA
const Hero = ({ onVerDemo }) => {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="overflow-hidden pt-[150px] pb-20 lg:grid lg:min-h-screen lg:items-center">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[1.05fr_0.75fr] lg:gap-20">
        <div className="relative z-10">
          <p className="eyebrow">Debug Team</p>
          <h1 className="text-gradient text-6xl md:text-7xl xl:text-8xl">JOVI Smart Assist</h1>
          <p className="mt-6 max-w-[760px] text-xl leading-normal font-medium text-[#dddde7] md:mt-8 md:text-2xl">
            Uma câmera inteligente que entende o contexto e ajuda você a tomar a melhor decisão.
          </p>
          <p className="mt-5 mb-9 max-w-[65ch] text-muted">
            Da fotografia ao estudo, o JOVI Smart Assist utiliza inteligência artificial para sugerir modos de captura e
            transformar conteúdos visuais em informação organizada.
          </p>
          <button type="button" onClick={onVerDemo} className="btn">
            <Play size={18} aria-hidden="true" /> Ver demonstração
          </button>
        </div>

        {/* Visual conceitual: lente com órbitas (mesmo desenho da Sprint 3) */}
        <figure className="relative isolate mx-auto grid aspect-[0.92] w-full max-w-[560px] place-items-center" aria-label="Representação conceitual de uma lente com inteligência artificial">
          <div className="absolute -z-10 aspect-square w-[78%] rounded-full bg-[radial-gradient(circle,rgba(95,27,255,0.16),rgba(22,141,255,0.04)_48%,transparent_70%)]" aria-hidden="true" />
          <div className="absolute aspect-square w-[79%] rotate-[28deg] rounded-full border border-[rgba(139,80,255,0.36)] border-r-transparent" aria-hidden="true">
            <span className="absolute top-[49%] -left-1 h-2 w-2 rounded-full bg-primary-light shadow-[0_0_16px_#6a00ff]" />
          </div>
          <div className="absolute aspect-square w-[62%] -rotate-[34deg] rounded-full border border-[rgba(139,80,255,0.36)] border-t-[rgba(22,141,255,0.5)] border-l-transparent" aria-hidden="true">
            <span className="absolute top-[49%] -left-1 h-2 w-2 rounded-full bg-primary-light shadow-[0_0_16px_#6a00ff]" />
          </div>
          <div
            className="grid aspect-square w-[49%] place-items-center rounded-full border border-[rgba(185,132,255,0.55)] bg-[radial-gradient(circle,#05060d_14%,#191134_28%,#101226_42%,#05050b_65%)] shadow-[0_0_0_12px_rgba(106,0,255,0.05),0_0_50px_rgba(106,0,255,0.2)]"
            aria-hidden="true"
          >
            <span className="grid aspect-square w-[34%] place-items-center rounded-full border border-white/20 font-display text-xl tracking-[0.12em] text-white/80">AI</span>
          </div>
          <figcaption className="absolute right-0 bottom-[2%] grid w-[min(300px,74%)] rounded-[14px] border border-white/10 bg-surface/80 p-4 backdrop-blur-md md:right-[2%] md:bottom-[8%] md:px-[22px] md:py-5">
            <span className="text-xs font-bold tracking-[0.12em] text-primary-light uppercase">JOVI Smart Assist</span>
            <strong className="mt-1 font-display text-[15px] leading-snug">IA Fotográfica + Modo Estudo</strong>
            <small className="mt-2.5 flex items-center gap-1.5 text-sm text-muted">
              <i className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_10px_#73e4ad]" aria-hidden="true" /> Protótipo interativo
            </small>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Hero;
