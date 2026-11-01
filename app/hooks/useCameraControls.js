"use client";
import { useEffect, useRef, useState } from "react";
import { MODOS, ZOOMS } from "../data/modos";

// Hook customizado: estado dos controles da câmera (flash, zoom, modo e efeito de captura)
const useCameraControls = () => {
  const [flash, setFlash] = useState(false);
  const [zoom, setZoom] = useState("1x");
  const [modo, setModo] = useState("Foto");
  const [capturando, setCapturando] = useState(false);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const modoAtual = MODOS.find((m) => m.nome === modo) ?? MODOS[2];
  const escala = ZOOMS.find((z) => z.label === zoom)?.escala ?? 1;

  // dispara a animação de captura (e o clarão, se o flash estiver ligado)
  const animarCaptura = () => {
    setCapturando(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCapturando(false), 450);
  };

  return {
    flash,
    alternarFlash: () => setFlash(!flash),
    zoom,
    setZoom,
    escala,
    modo,
    setModo,
    filtro: modoAtual.filtro,
    capturando,
    animarCaptura,
  };
};

export default useCameraControls;
