"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AppBar from "../components/layout/AppBar";
import LoginForm from "../components/LoginForm";
import useAuth from "../hooks/useAuth";

// Rota pública /login
const LoginPage = () => {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  // se já estiver logado, não faz sentido ver o login: vai direto para Meus Estudos
  useEffect(() => {
    if (!loading && isAuthenticated) router.push("/estudos");
  }, [isAuthenticated, loading, router]);

  return (
    <div className="min-h-screen">
      <AppBar />
      <main className="grid place-items-center px-4 py-14 sm:py-20">
        <LoginForm />
      </main>
    </div>
  );
};

export default LoginPage;
