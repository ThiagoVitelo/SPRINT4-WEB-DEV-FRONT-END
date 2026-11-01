"use client";
import { useAuthContext } from "../contexts/AuthContext";

// Hook customizado: atalho para os dados de autenticação
const useAuth = () => {
  return useAuthContext();
};

export default useAuth;
