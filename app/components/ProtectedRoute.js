"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import useAuth from "../hooks/useAuth";

// Rota privada: só mostra o conteúdo (children) se o usuário estiver logado.
// Se não estiver, manda para /login.
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, loading, router]);

  // Enquanto verifica a sessão salva
  if (loading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 text-muted">
        <Loader2 size={28} className="animate-spin text-primary-light" />
        <p>Verificando autenticação...</p>
      </div>
    );
  }

  if (!isAuthenticated) return null;

  return children;
};

export default ProtectedRoute;
