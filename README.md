# PERMANECEI - Vida de Oração

## 📿 Sobre o Projeto

**PERMANECEI** é um aplicativo católico completo de oração, desenvolvido para acompanhar o fiel em sua vida espiritual diária. Inspirado em 1 Coríntios 13, o app oferece uma experiência contemplativa, acessível e profunda, unindo:

- ✝️ **Orações tradicionais e contemporâneas**
- 📖 **Liturgia diária completa** (todo o ano litúrgico)
- 👼 **Vida dos santos** (diferentes épocas e carismas)
- 🙏 **Terço interativo** com mistérios
- 💖 **Novenas** organizadas por temas
- 📔 **Diário espiritual** com reflexões personalizadas por IA
- 🎯 **Gamificação** (níveis, conquistas, dias consecutivos)
- 🔍 **Busca avançada** em todo o conteúdo
- 🌙 **Modo offline** e notificações oracionais

---

## 🎨 Identidade Visual

### Paleta de Cores

- **Vermelho Profundo** (#8B1A1A) → Amor de Deus / Coração de Cristo
- **Dourado Suave** (#D4AF37) → Divindade, sagrado
- **Azul Escuro** (#1E3A5F) → Silêncio, oração, confiança
- **Bege Claro** (#F5F1E8) → Leveza e leitura
- **Creme** (#FAF7F2) → Acolhimento

### Elementos Gráficos

- Coração imperfeito (símbolo central)
- Cruz minimalista
- Luz suave ao fundo
- Tipografia serifada elegante

---

## 🚀 Tecnologias Utilizadas

- **React 18** com TypeScript
- **Vite** (build tool rápido)
- **Tailwind CSS** (estilização)
- **Zustand** (gerenciamento de estado)
- **React Router DOM** (navegação)
- **Lucide React** (ícones)
- **React Hot Toast** (notificações)
- **Date-fns** (manipulação de datas)
- **Framer Motion** (animações)

---

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ e npm

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/permanecei-app.git
cd permanecei-app
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse no navegador:
```
http://localhost:5173
```

---

## 🏗️ Estrutura do Projeto

```
src/
├── components/        # Componentes reutilizáveis
│   └── Layout.tsx    # Layout principal com navegação
├── pages/            # Páginas do aplicativo
│   ├── Home.tsx
│   ├── LiturgiaPage.tsx
│   ├── OracoesPage.tsx
│   ├── TercoPage.tsx
│   ├── NovenasPage.tsx
│   ├── SantosPage.tsx
│   ├── DiarioPage.tsx
│   ├── BuscaPage.tsx
│   └── PerfilPage.tsx
├── data/             # Dados estáticos
│   ├── santos.ts
│   ├── liturgia.ts
│   └── oracoes.ts
├── types/            # Definições TypeScript
│   └── index.ts
├── services/         # Serviços (IA, API)
│   └── ia.ts
├── utils/            # Utilitários
│   └── store.ts      # Zustand store
└── assets/           # Imagens e recursos
```

---

## 🌟 Funcionalidades Principais

### 1. Tela Inicial (Home)
- Saudação espiritual ("Permaneça no Amor hoje")
- Santo do dia
- Evangelho do dia em destaque
- Botões de acesso rápido

### 2. Liturgia Diária
- Leituras bíblicas completas
- Salmo responsorial
- Evangelho
- Comentários pastorais
- Reflexão do dia
- Oração final

### 3. Orações
- Orações tradicionais (Pai-Nosso, Ave-Maria, Terço)
- Orações temáticas (ansiedade, família, trabalho, cura)
- Ladainhas
- Terço interativo com mistérios do dia
- Novenas organizadas por temas

### 4. Santos
- Catálogo extenso de santos
- Biografias detalhadas
- Frases marcantes
- Virtudes e devoções
- Aplicação prática para o dia

### 5. Diário Espiritual com IA
- Registro diário de práticas espirituais
- Estado de espírito
- Conversas com Deus
- Intenções e propósitos
- **Reflexões personalizadas por IA**
- **Perguntas de aprofundamento**
- **Análise de padrões espirituais**

### 6. Gamificação
- Sistema de níveis espirituais
- Pontos de oração
- Dias consecutivos
- Conquistas desbloqueáveis
- Motivação para constância

### 7. Busca Avançada
- Busca em santos, liturgia e orações
- Filtros por categoria
- Resultados relevantes e rápidos

### 8. Perfil
- Estatísticas pessoais
- Conquistas
- Preferências de notificações
- Modo noturno
- Tamanho de fonte

---

## 🤖 Integração com IA

O aplicativo utiliza **Inteligência Artificial** para:

1. **Reflexões Personalizadas**: Baseadas no conteúdo do diário espiritual, liturgia do dia e vida dos santos
2. **Perguntas de Aprofundamento**: Sugestões de reflexão conforme o estado espiritual do usuário
3. **Insights Espirituais**: Identificação de padrões de crescimento
4. **Sugestões de Oração**: Recomendações conforme o estado de espírito
5. **Análise de Padrões**: Frequência de práticas, estados mais comuns, dias consecutivos

### Exemplo de Reflexão IA

```
"Que bênção perceber paz em sua alma! Este é um fruto precioso da vida de oração. 
Suas práticas de oração, leitura bíblica têm nutrido seu espírito. 
Deus se alegra ao ver seu coração aberto a Ele."

Perguntas para Aprofundamento:
- O que Deus está querendo te dizer através desta experiência?
- Como você pode viver hoje o que refletiu?

Insights:
- Você está vivendo uma rotina espiritual rica e equilibrada!
- Estabelecer propósitos concretos ajuda a crescer em santidade.
```

---

## 📱 Layout Responsivo

O aplicativo foi desenvolvido com **Mobile First**, oferecendo:

- Design contemplativo e minimalista
- Navegação intuitiva por tabs
- Otimizado para smartphones
- Funciona em tablets e desktops

---

## 🔔 Notificações (Futuro)

- Ângelus (6h, 12h, 18h)
- Terço diário
- Liturgia do dia
- Exame de consciência noturno

---

## 💾 Armazenamento Local

Todos os dados do usuário são salvos localmente usando:

- **Zustand Persist**: Diários, conquistas, pontos, preferências
- **Offline First**: Funciona sem internet
- Privacidade total: nada é enviado para servidores

---

## 🎯 Roadmap Futuro

- [ ] Áudio de orações e liturgia
- [ ] Modo retiro espiritual
- [ ] Planos de oração temáticos (ex: Retiro de 5 dias sobre Esperança)
- [ ] Comunidade: pedidos de oração compartilhados
- [ ] Integração com paróquias
- [ ] Bíblia Católica completa integrada
- [ ] Músicas católicas para oração
- [ ] Homilias em áudio
- [ ] Lectio Divina guiada

---

## 👨‍💻 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é open-source sob a licença MIT.

---

## 🙏 Inspiração Espiritual

> "Como o Pai me amou, também eu vos amei. Permanecei no meu amor."  
> — João 15,9

> "No coração da Igreja, minha Mãe, serei o amor."  
> — Santa Teresinha do Menino Jesus

---

## 📧 Contato

Para dúvidas, sugestões ou parcerias:

- **Email**: contato@permanecei.app
- **Instagram**: @permanecei.app

---

## ❤️ Agradecimentos

Este aplicativo é fruto de amor à Igreja Católica e desejo de ajudar os fiéis a viverem uma vida de oração constante e profunda.

**Equipe PERMANECEI - Vida de Oração**

---

*"Permanecei em mim, e eu permanecerei em vós." (Jo 15,4)*
