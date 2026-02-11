# 🏗️ Arquitetura do PERMANECEI

Documentação visual da arquitetura do aplicativo.

---

## 📐 Diagrama de Arquitetura

```
┌─────────────────────────────────────────────────────────────────────┐
│                          PERMANECEI APP                              │
│                      Aplicativo Católico de Oração                   │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
            ┌───────▼────────┐             ┌────────▼────────┐
            │   FRONTEND     │             │   DATA LAYER    │
            │  (React + TS)  │             │  (Static JSON)  │
            └───────┬────────┘             └────────┬────────┘
                    │                               │
        ┌───────────┼───────────┬───────────────────┤
        │           │           │                   │
    ┌───▼───┐   ┌───▼───┐   ┌───▼───┐         ┌────▼────┐
    │ Pages │   │ Comp. │   │ Utils │         │  Data   │
    └───┬───┘   └───────┘   └───┬───┘         └────┬────┘
        │                       │                   │
        │                       │                   │
    ┌───▼───────────────────────▼───┐           ┌──▼────────────┐
    │  State Management (Zustand)   │           │  santos.ts    │
    │  - Diários                    │           │  liturgia.ts  │
    │  - Usuário                    │           │  oracoes.ts   │
    │  - Conquistas                 │           └───────────────┘
    │  - Persistência Local         │
    └───────────────────────────────┘
                    │
                    │
            ┌───────▼────────┐
            │  Local Storage │
            │  (Browser API) │
            └────────────────┘
```

---

## 🗂️ Estrutura de Pastas Detalhada

```
PERMANECEI/
│
├── 📁 public/                      # Arquivos estáticos públicos
│   └── icon.svg                    # Ícone do app (coração + cruz)
│
├── 📁 src/                         # Código-fonte principal
│   │
│   ├── 📁 components/              # Componentes reutilizáveis
│   │   └── Layout.tsx              # Layout com header + nav + footer
│   │
│   ├── 📁 pages/                   # Páginas do aplicativo (9)
│   │   ├── Home.tsx                # 🏠 Tela inicial
│   │   ├── LiturgiaPage.tsx        # 📖 Liturgia diária
│   │   ├── OracoesPage.tsx         # 🙏 Orações
│   │   ├── TercoPage.tsx           # 📿 Terço interativo
│   │   ├── NovenasPage.tsx         # ⛪ Novenas
│   │   ├── SantosPage.tsx          # 👼 Santos
│   │   ├── DiarioPage.tsx          # 📔 Diário espiritual
│   │   ├── BuscaPage.tsx           # 🔍 Busca avançada
│   │   └── PerfilPage.tsx          # 👤 Perfil e configurações
│   │
│   ├── 📁 data/                    # Dados estáticos
│   │   ├── santos.ts               # 20 santos completos
│   │   ├── liturgia.ts             # 3 liturgias diárias
│   │   └── oracoes.ts              # 15+ orações + novenas
│   │
│   ├── 📁 services/                # Lógica de negócio
│   │   └── ia.ts                   # 🤖 Sistema de IA
│   │                               #    - Reflexões personalizadas
│   │                               #    - Análise de padrões
│   │                               #    - Sugestões de oração
│   │
│   ├── 📁 utils/                   # Utilitários
│   │   └── store.ts                # 💾 Zustand store
│   │                               #    - Estado global
│   │                               #    - Persistência local
│   │                               #    - Gamificação
│   │
│   ├── 📁 types/                   # Definições TypeScript
│   │   └── index.ts                # Interfaces e tipos
│   │
│   ├── App.tsx                     # Componente raiz + rotas
│   ├── main.tsx                    # Entry point React
│   └── index.css                   # Estilos globais Tailwind
│
├── 📄 index.html                   # HTML raiz
├── 📄 package.json                 # Dependências npm
├── 📄 vite.config.ts               # Configuração Vite
├── 📄 tsconfig.json                # Configuração TypeScript
├── 📄 tailwind.config.js           # Configuração Tailwind
├── 📄 postcss.config.js            # PostCSS
└── 📄 .gitignore                   # Arquivos ignorados Git
```

---

## 🔄 Fluxo de Dados

### 1. Leitura de Dados (READ)

```
┌─────────────┐
│   Usuário   │
│  clica em   │
│  "Santos"   │
└──────┬──────┘
       │
       ▼
┌──────────────┐
│ SantosPage   │ ← Importa dados
│ (Component)  │   de santos.ts
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  santos.ts   │ ← Array estático
│  (20 santos) │   de objetos
└──────┬───────┘
       │
       ▼
┌──────────────┐
│   Renderiza  │
│   na tela    │
└──────────────┘
```

### 2. Gravação de Dados (WRITE)

```
┌─────────────┐
│   Usuário   │
│  preenche   │
│   diário    │
└──────┬──────┘
       │
       ▼
┌──────────────┐
│ DiarioPage   │ ← Chama função
│ (Component)  │   adicionarDiario()
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ useAppStore  │ ← Atualiza estado
│  (Zustand)   │   global
└──────┬───────┘
       │
       ▼
┌──────────────┐
│Zustand Persist│ ← Salva no
│  Middleware   │   localStorage
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Local Storage│ ← Persistência
│  (Browser)   │   no navegador
└──────────────┘
```

### 3. Reflexão por IA

```
┌──────────────┐
│ Usuário salva│
│   diário     │
└──────┬───────┘
       │
       ▼
┌──────────────────┐
│ DiarioPage       │
│ chama gerarReflexaoIA() │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│ ia.ts            │
│ - Analisa dados  │
│ - Gera reflexão  │
│ - Cria perguntas │
│ - Dá insights    │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│ Retorna objeto   │
│ ReflexaoIA       │
└──────┬───────────┘
       │
       ▼
┌──────────────────┐
│ Exibe na tela    │
│ para o usuário   │
└──────────────────┘
```

---

## 🎨 Camadas de Estilização

```
┌─────────────────────────────────────────────┐
│             Tailwind CSS                     │
│  Utility-first CSS framework                 │
│  - Cores personalizadas (sacred-red, etc)    │
│  - Classes responsivas                       │
│  - JIT compiler                              │
└─────────────┬───────────────────────────────┘
              │
       ┌──────┴──────┐
       │             │
┌──────▼──────┐  ┌───▼────────┐
│ index.css   │  │ Components │
│ - @layer    │  │ - CSS      │
│ - Custom    │  │   inline   │
│   classes   │  │ - className│
└─────────────┘  └────────────┘
       │             │
       └──────┬──────┘
              │
       ┌──────▼──────┐
       │    DOM      │
       │  (Browser)  │
       └─────────────┘
```

---

## 🔐 Segurança e Privacidade

```
┌─────────────────────────────────────────────┐
│              PERMANECEI APP                  │
│         (100% Frontend - No Backend)         │
└─────────────┬───────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────┐
│          Local Storage Only                  │
│  - Todos os dados ficam no navegador        │
│  - Nenhum dado enviado para servidor        │
│  - Privacidade total do usuário             │
└─────────────────────────────────────────────┘
              │
              ▼
┌─────────────────────────────────────────────┐
│          Dados Armazenados:                  │
│  ✅ Diários espirituais                     │
│  ✅ Conquistas desbloqueadas                │
│  ✅ Pontos e níveis                         │
│  ✅ Preferências de notificações            │
│  ✅ Configurações do app                    │
└─────────────────────────────────────────────┘
```

---

## 📱 Responsividade

```
┌─────────────────────────────────────────────┐
│              Breakpoints                     │
└─────────────────────────────────────────────┘

Mobile First Approach:

📱 < 640px  (sm)  → Mobile (padrão)
                    - Single column
                    - Nav bottom fixed
                    - Touch-friendly

💻 640px+  (md)   → Tablet
                    - Two columns where applicable
                    - Larger fonts

🖥️ 1024px+ (lg)   → Desktop
                    - Three columns
                    - Sidebar navigation
                    - Hover effects

🖥️ 1280px+ (xl)   → Large Desktop
                    - Max-width container
                    - Optimized spacing
```

---

## 🚀 Pipeline de Build

```
┌──────────────┐
│  npm install │  ← Instala dependências
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  npm run dev │  ← Desenvolvimento
└──────┬───────┘
       │
       ├─────────────────────────────┐
       │                             │
       ▼                             ▼
┌──────────────┐           ┌──────────────┐
│   Vite Dev   │           │ Hot Module   │
│   Server     │◄──────────┤ Replacement  │
│ (port 5173)  │           │    (HMR)     │
└──────────────┘           └──────────────┘
       │
       │ (Para produção)
       │
       ▼
┌──────────────┐
│ npm run build│  ← Build otimizado
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ TypeScript   │  ← Compilação TS → JS
│   Compiler   │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Vite Build  │  ← Bundle + minify
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ dist/ folder │  ← Arquivos otimizados
│  - index.html│     para produção
│  - assets/   │
│    - *.js    │
│    - *.css   │
└──────────────┘
       │
       ▼
┌──────────────┐
│    Deploy    │  ← Vercel / Netlify
│  (Produção)  │
└──────────────┘
```

---

## 🎯 Tecnologias por Camada

```
┌─────────────────────────────────────────────────────────┐
│                    PRESENTATION                          │
│  • React 18 (UI Components)                             │
│  • React Router DOM (Navigation)                         │
│  • Lucide React (Icons)                                 │
│  • Framer Motion (Animations - opcional)                │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│                      STYLING                             │
│  • Tailwind CSS (Utility classes)                       │
│  • Custom CSS (@layer)                                   │
│  • Google Fonts (Crimson Text, Inter)                   │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│                   STATE MANAGEMENT                       │
│  • Zustand (Global state)                               │
│  • Zustand Persist (Local storage)                      │
│  • React useState (Local state)                         │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│                   BUSINESS LOGIC                         │
│  • ia.ts (IA reflexões)                                 │
│  • Funções de análise                                   │
│  • Cálculos de pontos/níveis                           │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│                      DATA LAYER                          │
│  • santos.ts (Static data)                              │
│  • liturgia.ts (Static data)                            │
│  • oracoes.ts (Static data)                             │
└─────────────────────────┬───────────────────────────────┘
                          │
┌─────────────────────────▼───────────────────────────────┐
│                     BUILD TOOLS                          │
│  • Vite (Dev server + bundler)                          │
│  • TypeScript (Type checking)                           │
│  • ESLint (Linting)                                     │
│  • PostCSS (CSS processing)                             │
└─────────────────────────────────────────────────────────┘
```

---

## 🔄 Ciclo de Vida Típico

```
1. USUÁRIO ABRE APP
   ↓
2. React renderiza <App />
   ↓
3. Router carrega página (ex: /liturgia)
   ↓
4. Página importa dados (ex: liturgia.ts)
   ↓
5. Zustand carrega estado do localStorage
   ↓
6. Componente renderiza com dados
   ↓
7. USUÁRIO INTERAGE (ex: registra diário)
   ↓
8. Estado atualizado via Zustand
   ↓
9. Persist salva no localStorage automaticamente
   ↓
10. IA gera reflexão (se aplicável)
    ↓
11. UI atualiza para refletir mudanças
    ↓
12. USUÁRIO VÊ FEEDBACK VISUAL
```

---

## 📊 Performance

```
Métricas Alvo (Lighthouse):

⚡ Performance:        95+
♿ Accessibility:      90+
✅ Best Practices:    100
🔍 SEO:               90+

Otimizações Implementadas:

✅ Code splitting (React.lazy)
✅ Tree shaking (Vite)
✅ Minificação automática
✅ CSS purge (Tailwind JIT)
✅ Imagens otimizadas (SVG)
✅ Lazy loading de rotas
✅ Memoização de componentes pesados (futuro)
```

---

## 🗄️ Modelo de Dados Simplificado

```typescript
// Principais entidades

Santo {
  id: string
  nome: string
  data: string
  biografia: string
  frases: string[]
  virtudes: string[]
  devocoes: string[]
  aplicacaoPratica: string
}

LiturgiaDiaria {
  id: string
  data: string
  tempo: string
  cor: string
  primeiraLeitura: Leitura
  salmo: Salmo
  evangelho: Evangelho
  reflexao: string
}

Oracao {
  id: string
  titulo: string
  categoria: string
  texto: string
  tema?: string[]
}

DiarioEspiritual {
  id: string
  data: string
  reflexao: string
  praticas: boolean[]
  estadoEspirito: string
  intencoes: string[]
  propositos: string[]
}

Usuario {
  id: string
  nome: string
  nivelEspiritual: number
  pontosOracao: number
  diasConsecutivos: number
  conquistas: Conquista[]
}
```

---

## 🎉 Conclusão

Esta arquitetura foi projetada para ser:

✅ **Simples** - Fácil de entender e manter  
✅ **Escalável** - Pode crescer facilmente  
✅ **Performática** - Build otimizado  
✅ **Offline-First** - Funciona sem internet  
✅ **Type-Safe** - TypeScript previne bugs  
✅ **Modular** - Componentes reutilizáveis  

---

*"Tudo coopera para o bem daqueles que amam a Deus." (Rm 8,28)*

🙏 Que esta arquitetura sirva para a glória de Deus! ✝️
