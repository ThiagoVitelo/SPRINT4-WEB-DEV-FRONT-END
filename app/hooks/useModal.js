"use client";
import { useCallback, useEffect, useRef, useState } from "react";

// Hook customizado: abre/fecha um modal de forma acessível
// (fecha com Esc, prende o foco dentro dele e trava a rolagem do fundo).
const useModal = () => {
  const [aberto, setAberto] = useState(false);
  const refModal = useRef(null);
  const ultimoFoco = useRef(null);

  const abrir = useCallback(() => {
    ultimoFoco.current = document.activeElement;
    setAberto(true);
  }, []);

  const fechar = useCallback(() => {
    setAberto(false);
    ultimoFoco.current?.focus?.();
  }, []);

  useEffect(() => {
    if (!aberto) return;

    document.body.style.overflow = "hidden";
    const modal = refModal.current;
    const focaveis = () => [...modal.querySelectorAll("button, video, [href], input, textarea")];
    focaveis()[0]?.focus();

    const aoTeclar = (e) => {
      if (e.key === "Escape") fechar();
      if (e.key !== "Tab") return;
      const lista = focaveis();
      const primeiro = lista[0];
      const ultimo = lista[lista.length - 1];
      if (e.shiftKey && document.activeElement === primeiro) {
        e.preventDefault();
        ultimo.focus();
      } else if (!e.shiftKey && document.activeElement === ultimo) {
        e.preventDefault();
        primeiro.focus();
      }
    };

    document.addEventListener("keydown", aoTeclar);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", aoTeclar);
    };
  }, [aberto, fechar]);

  return { aberto, abrir, fechar, refModal };
};

export default useModal;
