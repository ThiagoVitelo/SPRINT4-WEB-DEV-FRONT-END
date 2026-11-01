// Abas de modo da câmera, na mesma ordem do protótipo do Figma.
// O filtro CSS é só uma simulação visual do efeito de cada modo.
export const MODOS = [
  { nome: "Pro", filtro: "contrast(1.08)" },
  { nome: "Vídeo", filtro: "none" },
  { nome: "Foto", filtro: "none" },
  { nome: "Retrato", filtro: "brightness(1.08) saturate(1.1) contrast(1.05)" },
  { nome: "Food", filtro: "saturate(1.5) contrast(1.05)" },
  { nome: "Noite", filtro: "brightness(1.35) contrast(1.15)" },
  { nome: "Estudo", filtro: "contrast(1.12) brightness(1.04)" },
  { nome: "Documento", filtro: "contrast(1.35) brightness(1.06) saturate(0.85)" },
];

// Zoom simulado com scale() na imagem
export const ZOOMS = [
  { label: "0,5x", escala: 1 },
  { label: "1x", escala: 1.1 },
  { label: "2x", escala: 1.45 },
  { label: "5x", escala: 2 },
  { label: "10x", escala: 2.6 },
];
