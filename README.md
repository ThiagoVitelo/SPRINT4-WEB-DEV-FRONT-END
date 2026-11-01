# JOVI Smart Assist — Sprint 4

Aplicação em **Next.js + Tailwind CSS** que reúne a **landing page** do projeto e o **simulador da câmera JOVI** com o **Smart Assist**: uma IA que analisa a cena e **sugere** o melhor modo de câmera. Quem decide ativar é sempre o usuário. No **Modo Estudo**, o assistente lê as anotações do caderno, gera um **resumo**, permite **baixar em PDF** e **salvar em "Meus Estudos"** (áreaprivada).

> Challenge JOVI · FIAP Engenharia de Software · Debug Team · 2026
> Entrega conjunta de **Front-End Design + Web Development** (Sprint 4).

## Links

| | |
|---|---|
| **Deploy (Vercel)** | https://sprint-4-web-dev-front-end-tau.vercel.app |
| **Repositório** | https://github.com/ThiagoVitelo/SPRINT4-WEB-DEV-FRONT-END |
| **API (MockAPI)** | https://6abc415cb2118ed7abb9a781.mockapi.io/cenas |

## Evolução em relação à Sprint 3

Este é o mesmo projeto da Sprint 3, agora reunido em uma única aplicação React (Next.js):

| Sprint 3 | Sprint 4 |
|---|---|
| Landing page em HTML, CSS Grid e JS ([repositório](https://github.com/ferrazmattheuuss/jovi-smart-assist-landing-page)) | Landing dividida em componentes React e estilizada com Tailwind CSS |
| Câmera em React com CSS puro ([repositório](https://github.com/ThiagoVitelo/SPRINT-3-WEBDEV)) | Câmera refeita com Tailwind, fiel ao protótipo do Figma |
| Troca de telas com `useState` | Rotas do Next.js (App Router), com rotas públicas e privada |
| Lógica toda no `App.js` | Lógica separada em hooks customizados |
| Fotos fixas no código | Cenas consumidas da MockAPI com axios |
| Sugestão da IA em tela cheia | Sugestão em balão sobre a câmera + Modo Estudo com resumo e PDF |
| Sem autenticação | Login simulado com `AuthContext` + área privada "Meus Estudos" |

## Tecnologias utilizadas

- **Next.js 16** (App Router) e **React 19**
- **Tailwind CSS 4** (estilização e responsividade)
- **axios** (consumo da API)
- **MockAPI** (API mockada)
- **jsPDF** (geração do PDF do resumo)
- **lucide-react** (ícones)
- **localStorage** (sessão do usuário, contador de fotos e resumos salvos)

## Como instalar as dependências

Requer **Node.js 20 ou superior**. Na pasta do projeto:

```bash
npm install
```

## Como executar o projeto

```bash
npm run dev
```

Acesse **http://localhost:3000**.

Para gerar e rodar a versão de produção:

```bash
npm run build
npm start
```

## Back-end

O projeto **não tem back-end próprio**: não há servidor para executar. Os dados vêm de uma API
mockada e externa (MockAPI), que já está online. Basta ter conexão com a internet.

## API (MockAPI)

As cenas que a câmera "vê" vêm da MockAPI, consumida com axios em `app/services/cenasApi.js`.

| | |
|---|---|
| **URL base** | `https://6abc415cb2118ed7abb9a781.mockapi.io/` |
| **Endpoint** | `GET /cenas` |
| **Autenticação / chave** | não precisa: a API é pública e não usa chave |
| **Configuração** | nenhuma: a URL já está no código (`cenasApi.js`), sem variável de ambiente |

Cada cena retorna:

| Campo | Descrição |
|---|---|
| `slug`, `nome`, `imagem` | identificação e foto da cena |
| `tipo` | `estudo` (ativa o Modo Estudo) ou `foto` |
| `confianca` | confiança da sugestão (ex.: `0.96` → 96%) |
| `deteccoes` | o que a "IA" identificou (ex.: "Pouca luz") |
| `modo` | modo sugerido: `nome`, `descricao` e `filtro` (efeito visual) |
| `resumo` | só nas cenas de estudo: `titulo`, `materia`, `paginas`, `visaoGeral` e `topicos` |

## Usuários e senhas para teste

| E-mail | Senha |
|---|---|
| aluno@fiap.com.br | jovi2026 |
| professor@fiap.com.br | jovi2026 |

A autenticação é **simulada** no front-end (`app/contexts/AuthContext.js`), sem servidor. A tela
de login tem o botão **"Preencher automaticamente"**.

## Rotas

| Rota | Acesso | Conteúdo |
|---|---|---|
| `/` | pública | Landing page: Solução, Público-Alvo, Galeria, Equipe e Contato |
| `/camera` | pública | Simulador da câmera com o JOVI Smart Assist |
| `/login` | pública | Login |
| `/estudos` | **privada** | Meus Estudos: resumos salvos, ver resumo, baixar PDF e excluir |

A câmera é pública de propósito: uma câmera não deve exigir login. O que é pessoal (os resumos
salvos) fica na rota privada, protegida pelo componente `ProtectedRoute`. Sem login, `/estudos`
redireciona para `/login`.

## Como testar

1. Abra **Câmera**. A cena "Caderno de Biologia" já vem selecionada no painel de demonstração.
2. Toque no **botão do robô** (canto inferior direito do visor): a IA analisa a cena.
3. No balão **"Conteúdo de estudo detectado"**, toque em **Abrir**.
4. O Modo Estudo lê as páginas, organiza o conteúdo e mostra o **resumo**.
5. **Baixar PDF** gera o arquivo. **Salvar em Meus Estudos** pede login (use o usuário de teste).
6. Toque na **miniatura da galeria** (canto inferior esquerdo) para abrir **Meus Estudos**.
7. Teste as outras cenas (Comida, Pessoa, Céu noturno...): a IA sugere Food, Retrato, Noite etc.
   Ao tocar em **Ativar**, a aba de modo muda e o efeito é aplicado. Na cena "Praia", a IA informa
   que o modo Foto já é o ideal.

## Estrutura

```
app/
├── page.js                 → landing page (/)
├── camera/page.js          → câmera (/camera)
├── login/page.js           → login (/login)
├── estudos/page.js         → Meus Estudos (/estudos, privada)
├── layout.js               → layout com fontes e AuthProvider
├── components/
│   ├── landing/            → Hero, Solucao, PublicoAlvo, Galeria, Equipe, Contato, VideoModal
│   ├── camera/             → CameraHeader, CameraBody, CameraFooter, AssistCards, SummarySheet, PhoneFrame, DemoPanel
│   ├── estudos/            → EstudoCard, StatCard
│   ├── layout/             → SiteHeader, SiteFooter, AppBar, Brand
│   ├── ui/                 → SectionHeading
│   ├── LoginForm.js
│   └── ProtectedRoute.js
├── contexts/AuthContext.js → usuário logado, login e logout
├── hooks/                  → hooks customizados
├── services/cenasApi.js    → axios + MockAPI
├── data/                   → conteúdo da landing e modos da câmera
└── utils/gerarPdf.js       → geração do PDF
public/
├── img/galeria/            → telas do protótipo (Figma)
├── cenas/                  → imagem do caderno
└── video/                  → vídeo de demonstração
```

## Hooks

**Nativos:** `useState`, `useEffect`, `useRef`, `useCallback`, `useContext`.

**Customizados** (`app/hooks`), separando a lógica da parte visual:

| Hook | Responsabilidade |
|---|---|
| `useAuth` | usuário logado, login e logout (lê o `AuthContext`) |
| `useCenas` | busca as cenas na API e controla `loading` e `error` |
| `useCameraAI` | fluxo do Smart Assist: analisar → sugerir → aceitar/ignorar → resumo |
| `useCameraControls` | flash, zoom, modo selecionado e efeito de captura |
| `usePhotoCounter` | contador de fotos salvo no localStorage |
| `useEstudos` | resumos salvos do usuário (salvar, listar, excluir) |
| `useContactForm` | validação e envio simulado do formulário de contato |
| `useModal` | modal do vídeo (abrir, fechar com Esc, foco) |
| `useToast` | avisos rápidos que somem sozinhos |

## Responsividade

- **Mobile:** a câmera ocupa a tela inteira; o painel de demonstração fica embaixo. A landing usa
  uma coluna e menu "sanduíche".
- **Tablet:** a câmera aparece dentro de uma moldura de celular; galeria e equipe em 2 colunas.
- **Desktop:** câmera e painel lado a lado; galeria e equipe em 3 colunas.

Os breakpoints usam os prefixos do Tailwind (`sm:`, `md:`, `lg:`, `xl:`), seguindo a abordagem
mobile-first.

## Uso de IA no projeto

Usamos o assistente de IA como apoio para analisar os requisitos em comparação com as entregas da Sprint 3,
propor a estrutura do projeto seguindo o padrão das aulas, converter os estilos da landing para
Tailwind CSS e ajuda na criação de alguns hooks personalizados.

## Integrantes

Veja o arquivo [`INTEGRANTES.TXT`](./INTEGRANTES.TXT).

| Nome | RM |
|---|---|
| Thiago Vitelo do Nascimento | 569726 |
| Kaik de Sales Amorim | 571558 |
| Matheus Augusto da Silva | 572976 |
| Matheus Ferraz Stenzl | 572238 |
| Daniel Silva | 569617 |
