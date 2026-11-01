"use client";
import { useEffect, useState } from "react";
import AppBar from "../components/layout/AppBar";
import PhoneFrame from "../components/camera/PhoneFrame";
import CameraHeader from "../components/camera/CameraHeader";
import CameraBody from "../components/camera/CameraBody";
import CameraFooter from "../components/camera/CameraFooter";
import { SuggestionCard, StudyProgress } from "../components/camera/AssistCards";
import SummarySheet from "../components/camera/SummarySheet";
import DemoPanel from "../components/camera/DemoPanel";
import useCenas from "../hooks/useCenas";
import useCameraControls from "../hooks/useCameraControls";
import useCameraAI from "../hooks/useCameraAI";
import usePhotoCounter from "../hooks/usePhotoCounter";
import useToast from "../hooks/useToast";
import { baixarResumoPdf } from "../utils/gerarPdf";

// Página pública /camera: simulador da câmera JOVI com o Smart Assist.
// Esta página só junta as peças: a lógica fica nos hooks customizados.
const CameraPage = () => {
  const { cenas, loading, error } = useCenas();
  const controles = useCameraControls();
  const { total, registrarFoto } = usePhotoCounter();
  const toast = useToast();
  const [cena, setCena] = useState(null);
  const [miniatura, setMiniatura] = useState(null);

  const ia = useCameraAI({
    onAceitarModo: (nomeModo) => {
      controles.setModo(nomeModo);
      if (nomeModo !== "Estudo") toast.mostrar(`Modo ${nomeModo} ativado`);
    },
  });

  // quando as cenas chegam da API, começa pela primeira
  useEffect(() => {
    if (!cena && cenas.length > 0) setCena(cenas[0]);
  }, [cenas, cena]);

  const trocarCena = (novaCena) => {
    ia.ignorar();
    controles.setModo("Foto");
    setCena(novaCena);
  };

  const capturar = () => {
    controles.animarCaptura();
    registrarFoto();
    setMiniatura(cena?.imagem ?? null);
    toast.mostrar("Foto capturada");
  };

  const modoDocumento = ["Estudo", "Documento"].includes(controles.modo);

  return (
    <div className="min-h-screen">
      <AppBar />
      <main className="flex flex-col items-center gap-8 sm:px-6 sm:py-7 lg:flex-row lg:items-center lg:justify-center lg:gap-14">
        <h1 className="sr-only">Câmera JOVI Smart Assist</h1>

        <PhoneFrame>
          <CameraHeader
            flash={controles.flash}
            onFlash={controles.alternarFlash}
            proporcao={modoDocumento ? "A4 · automático" : "4:3"}
          />

          <CameraBody
            cena={cena}
            filtro={controles.filtro}
            escala={controles.escala}
            zoom={controles.zoom}
            onZoom={controles.setZoom}
            onIA={() => ia.analisar(cena)}
            analisando={ia.fase === "analisando"}
            iaOcupada={ia.ocupado}
            flashAtivo={controles.capturando && controles.flash}
            toast={toast.mensagem}
          >
            {ia.fase === "sugestao" && (
              <SuggestionCard cena={ia.cena} modoAtual={controles.modo} onAceitar={ia.aceitar} onIgnorar={ia.ignorar} />
            )}
            {ia.fase === "processando" && (
              <StudyProgress etapas={ia.etapas} etapa={ia.etapa} paginas={ia.cena.resumo.paginas} />
            )}
          </CameraBody>

          <CameraFooter
            modo={controles.modo}
            onModo={controles.setModo}
            onCapturar={capturar}
            onGaleria={() => toast.mostrar("Galeria disponível em breve")}
            onVirar={() => toast.mostrar("Câmera frontal indisponível na demonstração")}
            miniatura={miniatura}
          />

          {ia.fase === "resumo" && (
            <SummarySheet
              resumo={ia.cena.resumo}
              onFechar={ia.ignorar}
              onBaixarPdf={() => baixarResumoPdf(ia.cena.resumo)}
            />
          )}
        </PhoneFrame>

        <div className="flex w-full justify-center px-4 pb-10 sm:px-0 lg:w-[420px] lg:pb-0">
          <DemoPanel
            cenas={cenas}
            carregando={loading}
            erro={error}
            cenaAtual={cena}
            onEscolher={trocarCena}
            fotos={total}
          />
        </div>
      </main>
    </div>
  );
};

export default CameraPage;
