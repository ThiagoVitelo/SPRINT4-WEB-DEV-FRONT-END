"use client";
import useContactForm from "../../hooks/useContactForm";

// Campo do formulário: label + input (children) + mensagem de erro
const Campo = ({ id, label, erro, children }) => {
  return (
    <div className="grid content-start">
      <label htmlFor={id} className="mb-2 text-sm font-semibold text-[#d9d9e2]">
        {label}
      </label>
      {children}
      <span id={`${id}-erro`} className="mt-1 min-h-5 text-sm text-danger" aria-live="polite">
        {erro}
      </span>
    </div>
  );
};

const Contato = () => {
  const { valores, erros, status, handleChange, handleSubmit } = useContactForm();

  // propriedades iguais para todos os campos
  const propsDoCampo = (nome) => ({
    id: `contato-${nome}`,
    name: nome,
    value: valores[nome],
    onChange: handleChange,
    "aria-invalid": Boolean(erros[nome]),
    "aria-describedby": `contato-${nome}-erro`,
  });

  return (
    <section id="contato" aria-labelledby="contact-title" className="section bg-surface">
      <div className="container-site grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-32">
        <div>
          <p className="eyebrow">Contato</p>
          <h2 id="contact-title" className="max-w-[460px] text-4xl md:text-6xl">
            Fale com a Debug Team
          </h2>
          <dl className="mt-12 grid gap-6">
            <div className="border-t border-white/10 pt-4">
              <dt className="text-xs tracking-[0.1em] text-muted uppercase">E-mail do projeto</dt>
              <dd className="mt-1.5 text-[15px] text-[#dedee7]">contato@jovismartassist.com</dd>
            </div>
            <div className="border-t border-white/10 pt-4">
              <dt className="text-xs tracking-[0.1em] text-muted uppercase">Projeto acadêmico</dt>
              <dd className="mt-1.5 text-[15px] text-[#dedee7]">Challenge JOVI · FIAP Engenharia de Software · 2026</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={handleSubmit} noValidate className="card grid gap-x-[18px] gap-y-4 p-7 sm:grid-cols-2 md:p-12">
          <Campo id="contato-nome" label="Nome" erro={erros.nome}>
            <input {...propsDoCampo("nome")} type="text" placeholder="Seu nome" autoComplete="name" className="field h-[50px]" />
          </Campo>
          <Campo id="contato-email" label="E-mail" erro={erros.email}>
            <input {...propsDoCampo("email")} type="email" placeholder="voce@email.com" autoComplete="email" className="field h-[50px]" />
          </Campo>
          <div className="sm:col-span-2">
            <Campo id="contato-mensagem" label="Mensagem" erro={erros.mensagem}>
              <textarea {...propsDoCampo("mensagem")} rows={5} placeholder="Como podemos ajudar?" className="field min-h-[145px] resize-y py-3" />
            </Campo>
          </div>
          <div className="flex flex-col items-start gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:gap-6">
            <button type="submit" className="btn w-full sm:w-auto">
              Enviar mensagem
            </button>
            <p className="text-sm text-success" role="status" aria-live="polite">
              {status}
            </p>
          </div>
          <p className="text-xs text-muted sm:col-span-2">Formulário de demonstração: nenhuma informação é enviada para um servidor.</p>
        </form>
      </div>
    </section>
  );
};

export default Contato;
