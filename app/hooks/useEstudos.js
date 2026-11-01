"use client";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";

// Hook customizado: resumos salvos ("Meus Estudos") do usuário logado.
// Cada usuário tem a sua própria lista no localStorage.
const useEstudos = () => {
  const { user } = useAuth();
  const chave = user ? `jovi_estudos_${user.email}` : null;
  const [estudos, setEstudos] = useState([]);

  // carrega a lista sempre que o usuário muda (login/logout)
  useEffect(() => {
    if (!chave) {
      setEstudos([]);
      return;
    }
    const salvos = localStorage.getItem(chave);
    setEstudos(salvos ? JSON.parse(salvos) : []);
  }, [chave]);

  const atualizar = (novaLista) => {
    setEstudos(novaLista);
    if (chave) localStorage.setItem(chave, JSON.stringify(novaLista));
  };

  const jaSalvo = (slug) => estudos.some((e) => e.slug === slug);

  const salvar = (cena) => {
    if (!chave || jaSalvo(cena.slug)) return false;
    const novo = {
      id: `${cena.slug}-${Date.now()}`,
      slug: cena.slug,
      imagem: cena.imagem,
      salvoEm: new Date().toISOString(),
      ...cena.resumo,
    };
    atualizar([novo, ...estudos]);
    return true;
  };

  const remover = (id) => atualizar(estudos.filter((e) => e.id !== id));

  return { estudos, salvar, remover, jaSalvo };
};

export default useEstudos;
