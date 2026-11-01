"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import Brand from "./Brand";
import useAuth from "../../hooks/useAuth";

// Links da barra superior das telas do app
const LINKS = [
  { href: "/", label: "Site" },
  { href: "/camera", label: "Câmera" },
  { href: "/estudos", label: "Meus Estudos" },
];

// Barra superior compacta usada nas telas do app (fora da landing)
const AppBar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAuthenticated, logout } = useAuth();

  const sair = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-40 h-14 border-b border-white/10 bg-base/85 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1200px] items-center justify-between gap-3 px-4">
        <span className="hidden sm:block">
          <Brand />
        </span>
        <nav aria-label="Navegação do app" className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-2.5 py-1.5 text-sm font-medium transition ${pathname === link.href ? "bg-white/10 text-ink" : "text-muted hover:text-ink"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        {isAuthenticated ? (
          <button type="button" onClick={sair} className="flex items-center gap-1.5 text-sm text-muted hover:text-ink" title="Sair">
            <span className="hidden md:inline">{user.name}</span> <LogOut size={16} aria-label="Sair" />
          </button>
        ) : (
          <Link href="/login" className="rounded-lg px-2.5 py-1.5 text-sm font-medium text-muted hover:text-ink">
            Entrar
          </Link>
        )}
      </div>
    </header>
  );
};

export default AppBar;
