// Conteúdo da landing page (o mesmo da Sprint 3 de Front-End).
// Separar os dados dos componentes deixa o JSX mais limpo.

export const NAV_LINKS = [
  { id: "inicio", label: "Início" },
  { id: "solucao", label: "A Solução" },
  { id: "publico", label: "Público-Alvo" },
  { id: "galeria", label: "Galeria" },
  { id: "equipe", label: "Nossa Equipe" },
  { id: "contato", label: "Contato" },
];

export const FLUXO_ESTUDO = ["Captura", "Identificação", "Organização", "Resumo", "PDF"];

export const PERFIL = [
  "Jovens universitários entre 18 e 24 anos;",
  "Usuários intensivos de smartphone;",
  "Uso diário para estudo e atividades pessoais.",
];

export const NECESSIDADES = [
  "Praticidade;",
  "Rapidez;",
  "Qualidade;",
  "Produtividade;",
  "Menos decisões técnicas durante o uso da câmera.",
];

export const GALERIA = [
  { src: "/img/galeria/interface_camera.jpeg", alt: "Interface principal da câmera do protótipo JOVI Smart Assist", legenda: "Interface principal da câmera" },
  { src: "/img/galeria/jovi_smart_assist.jpeg", alt: "Smart Assist identificando conteúdo de estudo na câmera", legenda: "Smart Assist ativado" },
  { src: "/img/galeria/recomendacao_estudo.jpeg", alt: "Recomendação do Modo Estudo no protótipo", legenda: "Recomendação do Modo Estudo" },
  { src: "/img/galeria/analise_conteudo.jpeg", alt: "Análise de conteúdo capturado pelo JOVI Smart Assist", legenda: "Análise do conteúdo" },
  { src: "/img/galeria/resumo_gerado.jpeg", alt: "Resumo gerado a partir do conteúdo fotografado", legenda: "Resumo gerado" },
  { src: "/img/galeria/exportacao_pdf.jpeg", alt: "Tela de exportação do resumo em PDF", legenda: "Exportação do PDF" },
];

export const EQUIPE = [
  { iniciais: "MF", nome: "Matheus Ferraz", funcao: "Desenvolvedor Full-Stack", linkedin: "https://www.linkedin.com/in/matheus-ferraz-b202b73b6/" },
  { iniciais: "TV", nome: "Thiago Vitelo", funcao: "Desenvolvedor Full-Stack", linkedin: "https://www.linkedin.com/in/thiago-vitelo-do-nascimento-a7830a333/" },
  { iniciais: "KS", nome: "Kaik Sales", funcao: "Desenvolvedor Back-End", linkedin: "https://www.linkedin.com/in/kaik-sales-de-amorim-620532288" },
  { iniciais: "DS", nome: "Daniel Silva", funcao: "Pesquisador & Desenvolvedor Web", linkedin: "https://www.linkedin.com/in/daniel-silva-boccia-790148314/" },
  { iniciais: "MA", nome: "Matheus Augusto", funcao: "Analista de Sistemas", linkedin: "https://www.linkedin.com/in/matheus-augusto-da-silva-3704033b5/" },
];
