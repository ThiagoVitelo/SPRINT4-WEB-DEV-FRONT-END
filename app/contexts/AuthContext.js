"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

// Usuários válidos para teste (autenticação simulada, sem back-end)
const USUARIOS_TESTE = [
  { email: "aluno@fiap.com.br", password: "jovi2026", name: "Aluno FIAP" },
  { email: "professor@fiap.com.br", password: "jovi2026", name: "Professor" },
];

// 1. Criar o Context
const AuthContext = createContext();

// 2. Hook para usar o Context
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext deve ser usado dentro de AuthProvider");
  }
  return context;
};

// 3. Provider: guarda o usuário logado e disponibiliza login/logout para o app inteiro
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Ao abrir o site, verifica se já existe uma sessão salva
  useEffect(() => {
    try {
      const token = localStorage.getItem("authToken");
      const userData = localStorage.getItem("userData");
      if (token && userData) {
        setUser(JSON.parse(userData));
      }
    } catch (err) {
      console.error("Erro ao verificar autenticação:", err);
      localStorage.removeItem("authToken");
      localStorage.removeItem("userData");
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback(async (email, password) => {
    try {
      setLoading(true);
      setError(null);

      // Simular delay de API
      await new Promise((resolve) => setTimeout(resolve, 800));

      const encontrado = USUARIOS_TESTE.find(
        (u) => u.email === email.trim().toLowerCase() && u.password === password
      );

      if (!encontrado) {
        throw new Error("E-mail ou senha incorretos");
      }

      // Token fictício
      const token = `token_${Date.now()}_${Math.random().toString(36).slice(2, 11)}`;
      const dadosUsuario = { name: encontrado.name, email: encontrado.email };

      localStorage.setItem("authToken", token);
      localStorage.setItem("userData", JSON.stringify(dadosUsuario));
      setUser(dadosUsuario);

      return { success: true };
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    setUser(null);
    setError(null);
  }, []);

  const value = {
    user,
    loading,
    error,
    setError,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
