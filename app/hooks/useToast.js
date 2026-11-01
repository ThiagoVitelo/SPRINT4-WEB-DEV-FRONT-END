"use client";
import { useEffect, useRef, useState } from "react";

// Hook customizado: aviso curto que some sozinho depois de alguns segundos
const useToast = (duracao = 2000) => {
  const [mensagem, setMensagem] = useState("");
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const mostrar = (texto) => {
    setMensagem(texto);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMensagem(""), duracao);
  };

  return { mensagem, mostrar };
};

export default useToast;
