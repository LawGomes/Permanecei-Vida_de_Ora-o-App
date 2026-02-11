# 🚀 Guia de Instalação - PERMANECEI

## Instruções Detalhadas para Rodar o Aplicativo

### 1️⃣ Pré-requisitos

Certifique-se de ter instalado em seu computador:

- **Node.js 18 ou superior**
  - Download: https://nodejs.org/
  - Verifique a instalação: abra o terminal/prompt e digite:
    ```bash
    node --version
    npm --version
    ```

### 2️⃣ Instalação das Dependências

1. Abra o terminal/prompt de comando

2. Navegue até a pasta do projeto:
   ```bash
   cd C:\Users\wallace.gomes\OneDrive - AFYA PARTICIPACOES S.A\Área de Trabalho\Wallace\Particular\PERMANECEI
   ```

3. Instale todas as dependências:
   ```bash
   npm install
   ```
   
   Aguarde alguns minutos enquanto o npm baixa todos os pacotes necessários.

### 3️⃣ Executar o Aplicativo

Após a instalação, execute:

```bash
npm run dev
```

Você verá uma mensagem semelhante a:

```
VITE v5.0.8  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### 4️⃣ Acessar no Navegador

Abra seu navegador e acesse:

```
http://localhost:5173
```

O aplicativo **PERMANECEI** estará rodando! 🎉

---

## 🔧 Comandos Úteis

### Desenvolvimento
```bash
npm run dev          # Inicia servidor de desenvolvimento
```

### Build para Produção
```bash
npm run build        # Cria versão otimizada para produção
npm run preview      # Visualiza a versão de produção localmente
```

### Verificação de Código
```bash
npm run lint         # Verifica erros de código
```

---

## ⚠️ Solução de Problemas

### Erro: "npm não é reconhecido"
- Instale o Node.js: https://nodejs.org/
- Reinicie o terminal após a instalação

### Erro: "Cannot find module"
- Execute novamente: `npm install`

### Erro: Porta 5173 já em uso
- Feche outros processos usando a porta
- Ou o Vite automaticamente usará outra porta disponível

### Erro de permissão no Windows
- Execute o terminal como Administrador
- Ou use o PowerShell com permissões elevadas

---

## 📱 Testar em Dispositivo Móvel

Para testar no celular na mesma rede Wi-Fi:

1. Execute com exposição de rede:
   ```bash
   npm run dev -- --host
   ```

2. Anote o endereço Network exibido, exemplo:
   ```
   ➜  Network: http://192.168.1.100:5173/
   ```

3. Acesse esse endereço no navegador do seu celular

---

## 🌐 Deploy (Hospedagem Online)

### Opção 1: Vercel (Recomendado)

1. Instale a CLI da Vercel:
   ```bash
   npm i -g vercel
   ```

2. Faça deploy:
   ```bash
   vercel
   ```

### Opção 2: Netlify

1. Crie conta em https://netlify.com
2. Arraste a pasta `dist` (após `npm run build`) para o Netlify

### Opção 3: GitHub Pages

1. Instale gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Adicione no `package.json`:
   ```json
   "homepage": "https://seu-usuario.github.io/permanecei-app",
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. Execute:
   ```bash
   npm run deploy
   ```

---

## 💡 Dicas

- **Modo de desenvolvimento** recarrega automaticamente ao salvar arquivos
- Use **React DevTools** para debug: https://react.dev/learn/react-developer-tools
- Todos os dados são salvos localmente no navegador
- Não há necessidade de banco de dados ou backend

---

## 📚 Estrutura de Arquivos Importantes

```
PERMANECEI/
├── src/
│   ├── pages/          ← Telas do app
│   ├── components/     ← Componentes reutilizáveis
│   ├── data/           ← Santos, liturgia, orações
│   ├── services/       ← Lógica de IA
│   └── utils/          ← Store (estado global)
├── public/             ← Arquivos públicos
├── index.html          ← HTML principal
└── package.json        ← Dependências
```

---

## 🙏 Suporte

Se tiver dúvidas ou problemas:

1. Consulte o README.md
2. Verifique as issues no GitHub
3. Entre em contato: contato@permanecei.app

---

**Que Deus abençoe seu uso do PERMANECEI! 🙏✝️**

*"Permanecei no meu amor." (Jo 15,9)*
