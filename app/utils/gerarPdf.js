// A fonte padrão do PDF não tem subscritos (CO₂) nem setas: trocamos por equivalentes.
const SUBSTITUICOES = { "₀": "0", "₁": "1", "₂": "2", "₃": "3", "₆": "6", "→": "->" };
const limpar = (texto) => texto.replace(/[₀₁₂₃₆→]/g, (c) => SUBSTITUICOES[c]);

// Gera e baixa um PDF com o resumo de estudo.
// A biblioteca jsPDF só é carregada quando o usuário clica em "Baixar PDF".
export const baixarResumoPdf = async (resumo) => {
  const { jsPDF } = await import("jspdf");
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const margem = 20;
  const largura = 210 - margem * 2;
  let y = 24;

  const escrever = (texto, { tamanho = 11, estilo = "normal", cor = [40, 40, 50], espaco = 6 } = {}) => {
    doc.setFont("helvetica", estilo);
    doc.setFontSize(tamanho);
    doc.setTextColor(...cor);
    const linhas = doc.splitTextToSize(limpar(texto), largura);
    linhas.forEach((linha) => {
      if (y > 275) {
        doc.addPage();
        y = 24;
      }
      doc.text(linha, margem, y);
      y += tamanho * 0.45;
    });
    y += espaco;
  };

  escrever("RESUMO JOVI", { tamanho: 9, estilo: "bold", cor: [106, 0, 255], espaco: 2 });
  escrever(resumo.titulo, { tamanho: 22, estilo: "bold", cor: [10, 10, 20], espaco: 2 });
  escrever(`${resumo.materia} · ${resumo.paginas} páginas analisadas`, { tamanho: 10, cor: [120, 120, 135], espaco: 8 });

  escrever("VISÃO GERAL", { tamanho: 9, estilo: "bold", cor: [106, 0, 255], espaco: 2 });
  escrever(resumo.visaoGeral, { espaco: 8 });

  escrever("CONTEÚDO IDENTIFICADO", { tamanho: 9, estilo: "bold", cor: [106, 0, 255], espaco: 3 });
  resumo.topicos.forEach((topico) => {
    escrever(topico.titulo, { estilo: "bold", espaco: 1 });
    escrever(topico.texto, { espaco: 5 });
  });

  doc.setFontSize(8);
  doc.setTextColor(150, 150, 160);
  doc.text("Gerado pelo JOVI Smart Assist — protótipo acadêmico (resumo simulado).", margem, 287);

  const nomeArquivo = resumo.titulo
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\s+/g, "-");
  doc.save(`resumo-${nomeArquivo}.pdf`);
};
