"use client";
import { useEffect, useState } from "react";

const CHAVE = "jovi_fotos_tiradas";

// Hook customizado: contador de fotos salvo no localStorage
// (mesma funcionalidade da Sprint 3, agora separada da parte visual)
const usePhotoCounter = () => {
  const [total, setTotal] = useState(0);

  // lê o valor salvo quando a página abre
  useEffect(() => {
    const salvo = localStorage.getItem(CHAVE);
    if (salvo !== null) setTotal(Number(salvo));
  }, []);

  const registrarFoto = () => {
    const novoTotal = total + 1;
    setTotal(novoTotal);
    localStorage.setItem(CHAVE, String(novoTotal));
  };

  return { total, registrarFoto };
};

export default usePhotoCounter;
