import { Info, Camera as CameraIcon, Database } from "lucide-react";

// Painel de demonstração (fica FORA do celular): escolhe a cena que a câmera "vê".
// Isso não é uma função do produto, é só um recurso para testar o protótipo.
export default function DemoPanel({ cenas, carregando, erro, cenaAtual, onEscolher, fotos }) {
  return (
    <aside className="card w-full max-w-[420px] p-6" aria-labelledby="demo-titulo">
      <p className="eyebrow mb-3">Painel de demonstração</p>
      <h2 id="demo-titulo" className="text-2xl">Escolha o que a câmera está vendo</h2>
      <p className="mt-2 text-sm text-muted">
        Selecione uma cena e toque no botão <strong className="text-assist">robô</strong> da câmera. A análise da IA é
        simulada: o resultado vem dos dados de cada cena na API.
      </p>

      {carregando && <p className="mt-6 text-sm text-muted">Carregando cenas da API...</p>}
      {erro && (
        <p className="mt-6 rounded-lg border border-danger/40 p-3 text-sm text-danger" role="alert">
          {erro} Verifique sua conexão com a internet.
        </p>
      )}

      <ul className="mt-5 grid grid-cols-3 gap-2.5">
        {cenas.map((cena) => {
          const ativa = cenaAtual?.slug === cena.slug;
          return (
            <li key={cena.slug}>
              <button
                type="button"
                onClick={() => onEscolher(cena)}
                aria-pressed={ativa}
                className={`group w-full overflow-hidden rounded-xl border text-left transition ${ativa ? "border-primary-light ring-2 ring-primary-light/40" : "border-white/10 hover:border-white/30"}`}
              >
                <img src={cena.imagem} alt="" className="aspect-square w-full object-cover" loading="lazy" />
                <span className="block truncate px-2 py-1.5 text-[11px] font-semibold">{cena.nome}</span>
              </button>
            </li>
          );
        })}
      </ul>

      <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-xl bg-white/5 p-3">
          <dt className="flex items-center gap-1.5 text-xs text-muted"><CameraIcon size={13} /> Fotos tiradas</dt>
          <dd className="mt-1 font-display text-2xl font-semibold">{fotos}</dd>
        </div>
        <div className="rounded-xl bg-white/5 p-3">
          <dt className="flex items-center gap-1.5 text-xs text-muted"><Database size={13} /> Fonte dos dados</dt>
          <dd className="mt-1 text-sm font-semibold">MockAPI</dd>
        </div>
      </dl>

      <p className="mt-5 flex gap-2 text-xs text-muted">
        <Info size={14} className="mt-0.5 shrink-0" />
        Dica: a cena “Caderno de Biologia” ativa o Modo Estudo, que gera um resumo e o PDF.
      </p>
    </aside>
  );
}
