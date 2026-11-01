"use client";
import { useEffect, useRef, useState } from "react";

// Etapas mostradas enquanto o Modo Estudo "lê" o caderno
const ETAPAS_ESTUDO = ["Páginas lidas", "Conteúdo organizado", "Gerando resumo"];

// Hook customizado: toda a lógica do JOVI Smart Assist.
// Fluxo: ocioso -> analisando -> sugestao -> (processando -> resumo) ou volta para ocioso
// Importante: a análise é SIMULADA. O resultado vem dos dados da cena (API).
const useCameraAI = ({ onAceitarModo }) => {
  const [fase, setFase] = useState("ocioso");
  const [cena, setCena] = useState(null);
  const [etapa, setEtapa] = useState(0);
  const timers = useRef([]);

  const limparTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const agendar = (funcao, ms) => {
    timers.current.push(setTimeout(funcao, ms));
  };

  // cancela os timers se o usuário sair da página
  useEffect(() => limparTimers, []);

  // 1. usuário toca no botão da IA
  const analisar = (cenaAtual) => {
    if (!cenaAtual) return;
    limparTimers();
    setCena(cenaAtual);
    setFase("analisando");
    agendar(() => setFase("sugestao"), 1800);
  };

  // 2a. usuário aceita a sugestão
  const aceitar = () => {
    if (!cena) return;
    onAceitarModo(cena.modo.nome);

    if (cena.tipo !== "estudo") {
      setFase("ocioso");
      return;
    }

    // Modo Estudo: mostra as etapas uma a uma e depois o resumo
    setFase("processando");
    setEtapa(0);
    ETAPAS_ESTUDO.forEach((_, i) => agendar(() => setEtapa(i + 1), 700 * (i + 1)));
    agendar(() => setFase("resumo"), 700 * ETAPAS_ESTUDO.length + 400);
  };

  // 2b. usuário ignora (a IA só sugere, quem decide é o usuário)
  const ignorar = () => {
    limparTimers();
    setFase("ocioso");
  };

  return {
    fase,
    cena,
    etapa,
    etapas: ETAPAS_ESTUDO,
    ocupado: fase !== "ocioso",
    analisar,
    aceitar,
    ignorar,
  };
};

export default useCameraAI;
