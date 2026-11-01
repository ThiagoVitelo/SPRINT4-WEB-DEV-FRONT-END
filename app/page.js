// Página inicial provisória: só para conferir se o Next.js e o Tailwind estão funcionando.
// Na próxima etapa ela será substituída pela landing page.
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <span className="h-4 w-4 rounded-full border-4 border-primary-light bg-primary" />
      <h1 className="text-5xl font-bold">JOVI Smart Assist</h1>
      <p className="max-w-md text-muted">
        Projeto da Sprint 4 em construção: landing page + câmera inteligente em Next.js e Tailwind CSS.
      </p>
    </main>
  );
}
