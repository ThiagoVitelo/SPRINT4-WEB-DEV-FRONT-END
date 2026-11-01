"use client";
import { useState } from "react";

const VAZIO = { nome: "", email: "", mensagem: "" };
const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validar = (valores) => {
  const erros = {};
  if (!valores.nome.trim()) erros.nome = "Preencha este campo.";
  if (!valores.email.trim()) erros.email = "Preencha este campo.";
  else if (!REGEX_EMAIL.test(valores.email.trim())) erros.email = "Informe um e-mail válido.";
  if (!valores.mensagem.trim()) erros.mensagem = "Preencha este campo.";
  return erros;
};

// Hook customizado: valores, validação e envio simulado do formulário de contato
// (a mesma validação que o script.js da Sprint 3 fazia, agora em React).
const useContactForm = () => {
  const [valores, setValores] = useState(VAZIO);
  const [erros, setErros] = useState({});
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValores((v) => ({ ...v, [name]: value }));
    if (erros[name] && value.trim()) setErros((er) => ({ ...er, [name]: "" }));
    setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const novosErros = validar(valores);
    setErros(novosErros);

    const primeiroErro = Object.keys(novosErros)[0];
    if (primeiroErro) {
      document.getElementById(`contato-${primeiroErro}`)?.focus();
      return;
    }

    // envio simulado: nenhum dado sai do navegador
    setValores(VAZIO);
    setStatus("Mensagem registrada com sucesso.");
  };

  return { valores, erros, status, handleChange, handleSubmit };
};

export default useContactForm;
