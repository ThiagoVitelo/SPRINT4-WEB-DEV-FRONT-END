"use client";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import Hero from "./components/landing/Hero";
import Solucao from "./components/landing/Solucao";
import PublicoAlvo from "./components/landing/PublicoAlvo";
import Galeria from "./components/landing/Galeria";
import Equipe from "./components/landing/Equipe";
import Contato from "./components/landing/Contato";
import VideoModal from "./components/landing/VideoModal";
import useModal from "./hooks/useModal";

// Página inicial (rota pública "/"): a landing page da Sprint 3, agora em componentes React + Tailwind
const Home = () => {
  const video = useModal();

  return (
    <>
      <SiteHeader onVerDemo={video.abrir} />
      <main>
        <Hero onVerDemo={video.abrir} />
        <Solucao />
        <PublicoAlvo />
        <Galeria />
        <Equipe />
        <Contato />
      </main>
      <SiteFooter />
      <VideoModal {...video} />
    </>
  );
};

export default Home;
