"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Brand from "./Brand";
import { NAV_LINKS } from "../../data/landing";

// Cabeçalho da landing: menu com as seções (vira menu "sanduíche" em telas menores)
const SiteHeader = ({ onVerDemo }) => {
  const [menuAberto, setMenuAberto] = useState(false);

  // fecha o menu se a tela crescer (ex.: girar o tablet)
  useEffect(() => {
    const aoRedimensionar = () => {
      if (window.innerWidth >= 1024) setMenuAberto(false);
    };
    window.addEventListener("resize", aoRedimensionar);
    return () => window.removeEventListener("resize", aoRedimensionar);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[70px] border-b border-white/10 bg-base/80 backdrop-blur-xl lg:h-[78px]">
      <div className="container-site flex h-full items-center justify-between gap-4">
        <Brand />

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-[9px] border border-white/10 lg:hidden"
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
          aria-controls="menu-principal"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? <X size={20} /> : <Menu size={20} />}
        </button>

        <nav
          id="menu-principal"
          aria-label="Navegação principal"
          className={`${menuAberto ? "grid" : "hidden"} absolute inset-x-0 top-full gap-4 border-b border-white/10 bg-[#09090e] px-6 py-7 lg:static lg:flex lg:items-center lg:gap-6 lg:border-0 lg:bg-transparent lg:p-0`}
        >
          <ul className="grid lg:flex lg:items-center lg:gap-5">
            {NAV_LINKS.map((link) => (
              <li key={link.id} className="border-b border-white/10 lg:border-0">
                <a
                  href={`/#${link.id}`}
                  onClick={() => setMenuAberto(false)}
                  className="block py-3 text-[15px] font-medium text-muted transition hover:text-ink lg:py-0 lg:text-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={() => {
              setMenuAberto(false);
              onVerDemo();
            }}
            className="btn min-h-11 px-4 text-sm"
          >
            Ver demonstração
          </button>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
