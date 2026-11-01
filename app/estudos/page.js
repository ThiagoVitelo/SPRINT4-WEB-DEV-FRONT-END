"use client";
import Link from "next/link";
import { BookOpen, Camera } from "lucide-react";
import AppBar from "../components/layout/AppBar";
import ProtectedRoute from "../components/ProtectedRoute";
import EstudoCard from "../components/estudos/EstudoCard";
import StatCard from "../components/estudos/StatCard";
import useAuth from "../hooks/useAuth";
import useEstudos from "../hooks/useEstudos";
import usePhotoCounter from "../hooks/usePhotoCounter";

// Conteúdo da área privada (só aparece para quem está logado)
const MeusEstudos = () => {
  const { user } = useAuth();
  const { estudos, remover } = useEstudos();
  const { total } = usePhotoCounter();
  const totalTopicos = estudos.reduce((soma, e) => soma + e.topicos.length, 0);

  return (
    <main className="mx-auto max-w-[960px] px-4 py-10 sm:px-6 sm:py-14">
      <p className="eyebrow">Área privada</p>
      <h1 className="text-4xl md:text-5xl">Meus Estudos</h1>
      <p className="mt-2 text-muted">Olá, {user?.name}. Aqui ficam os resumos gerados pelo Modo Estudo.</p>

      <dl className="mt-8 grid gap-3 sm:grid-cols-3">
        <StatCard label="Resumos salvos" value={estudos.length} />
        <StatCard label="Tópicos organizados" value={totalTopicos} />
        <StatCard label="Fotos tiradas" value={total} />
      </dl>

      <section className="mt-10 grid gap-4" aria-label="Lista de resumos">
        {estudos.length === 0 ? (
          <div className="card grid place-items-center gap-3 px-6 py-14 text-center">
            <BookOpen size={32} className="text-primary-light" />
            <h2 className="text-2xl">Nenhum resumo salvo ainda</h2>
            <p className="max-w-[46ch] text-sm text-muted">
              Abra a câmera, escolha a cena “Caderno de Biologia”, toque no botão da IA e salve o resumo gerado.
            </p>
            <Link href="/camera" className="btn mt-2">
              <Camera size={18} /> Abrir câmera
            </Link>
          </div>
        ) : (
          estudos.map((estudo) => <EstudoCard key={estudo.id} estudo={estudo} onRemover={remover} />)
        )}
      </section>
    </main>
  );
};

// Rota PRIVADA /estudos
const EstudosPage = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen">
        <AppBar />
        <MeusEstudos />
      </div>
    </ProtectedRoute>
  );
};

export default EstudosPage;
