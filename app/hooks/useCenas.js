"use client";
import { useEffect, useState } from "react";
import { buscarCenas } from "../services/cenasApi";

// Hook customizado: busca as cenas na API e controla carregamento e erro
const useCenas = () => {
  const [cenas, setCenas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const carregar = async () => {
      try {
        const dados = await buscarCenas();
        setCenas(dados);
      } catch (err) {
        setError("Não foi possível carregar as cenas da API.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    carregar();
  }, []);

  return { cenas, loading, error };
};

export default useCenas;
