"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, KeyRound, Loader2 } from "lucide-react";
import useAuth from "../hooks/useAuth";

const LoginForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const { login, loading, error, setError } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (error) setError(null);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.email.trim()) newErrors.email = "E-mail é obrigatório";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "E-mail inválido";

    if (!form.password.trim()) newErrors.password = "Senha é obrigatória";
    else if (form.password.length < 6) newErrors.password = "Senha deve ter pelo menos 6 caracteres";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await login(form.email, form.password);
      router.push("/estudos"); // depois do login vai para a área privada
    } catch (err) {
      // o erro já aparece na tela (vem do AuthContext)
      console.error("Erro no login:", err);
    }
  };

  const preencherTeste = () => {
    setForm({ email: "aluno@fiap.com.br", password: "jovi2026" });
    setErrors({});
    setError(null);
  };

  return (
    <div className="card w-full max-w-[440px] p-7 sm:p-10">
      <p className="eyebrow">Área do estudante</p>
      <h1 className="text-4xl">Entrar</h1>
      <p className="mt-2 text-sm text-muted">
        Acesse para salvar seus resumos em <strong className="text-ink">Meus Estudos</strong>.
      </p>

      <form onSubmit={handleSubmit} noValidate className="mt-8 grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-semibold">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="seu@email.com"
            value={form.email}
            onChange={handleChange}
            disabled={loading}
            aria-invalid={Boolean(errors.email)}
            className="field h-[50px]"
          />
          {errors.email && <p className="text-sm text-danger">{errors.email}</p>}
        </div>

        <div className="grid gap-2">
          <label htmlFor="password" className="text-sm font-semibold">Senha</label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={mostrarSenha ? "text" : "password"}
              autoComplete="current-password"
              placeholder="Sua senha"
              value={form.password}
              onChange={handleChange}
              disabled={loading}
              aria-invalid={Boolean(errors.password)}
              className="field h-[50px] pr-12"
            />
            <button
              type="button"
              onClick={() => setMostrarSenha(!mostrarSenha)}
              aria-label={mostrarSenha ? "Ocultar senha" : "Mostrar senha"}
              className="absolute top-1/2 right-2 grid h-9 w-9 -translate-y-1/2 place-items-center text-muted hover:text-ink"
            >
              {mostrarSenha ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && <p className="text-sm text-danger">{errors.password}</p>}
        </div>

        {/* erro geral (usuário ou senha incorretos) */}
        {error && (
          <p className="rounded-lg border border-danger/40 bg-danger/10 p-3 text-sm text-danger" role="alert">
            {error}
          </p>
        )}

        <button type="submit" disabled={loading} className="btn disabled:opacity-60">
          {loading ? <><Loader2 size={18} className="animate-spin" /> Entrando...</> : "Entrar"}
        </button>
      </form>

      <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm">
        <p className="flex items-center gap-2 font-semibold">
          <KeyRound size={15} className="text-primary-light" /> Usuário de teste
        </p>
        <p className="mt-1 text-muted">aluno@fiap.com.br · senha jovi2026</p>
        <button type="button" onClick={preencherTeste} className="mt-2 text-xs font-semibold text-primary-light hover:text-white">
          Preencher automaticamente
        </button>
      </div>

      <p className="mt-6 text-center text-sm text-muted">
        Só quer testar a câmera?{" "}
        <Link href="/camera" className="font-semibold text-primary-light">
          Abrir sem login
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
