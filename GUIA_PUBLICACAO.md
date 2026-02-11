# 🚀 Guia de Publicação do PERMANECEI

Como publicar o aplicativo PERMANECEI na web para que outras pessoas possam acessar.

---

## 🌐 Opções de Hospedagem

### 1. **Vercel** (Recomendado - Mais Fácil)

✅ **Vantagens**:
- Deploy automático a cada commit
- HTTPS grátis
- Domínio grátis (.vercel.app)
- Extremamente rápido
- CDN global

#### Passo a Passo - Vercel

1. **Criar conta** em https://vercel.com (pode usar GitHub)

2. **Instalar Vercel CLI** (opcional):
```bash
npm install -g vercel
```

3. **Fazer deploy**:

   **Opção A - Via CLI**:
   ```bash
   cd PERMANECEI
   vercel
   ```
   Siga as instruções no terminal.

   **Opção B - Via Interface Web**:
   - Acesse https://vercel.com/new
   - Conecte sua conta GitHub
   - Selecione o repositório PERMANECEI
   - Configure:
     - Framework Preset: Vite
     - Build Command: `npm run build`
     - Output Directory: `dist`
   - Clique em "Deploy"

4. **Pronto!** Seu app estará em:
   ```
   https://permanecei.vercel.app
   ```

5. **Deploy automático**:
   - Toda vez que você fizer push no GitHub, o Vercel faz deploy automaticamente!

---

### 2. **Netlify** (Alternativa Excelente)

✅ **Vantagens**:
- Interface muito amigável
- Formulários integrados
- Functions serverless

#### Passo a Passo - Netlify

1. **Criar conta** em https://netlify.com

2. **Build local**:
```bash
npm run build
```

3. **Deploy**:

   **Opção A - Drag & Drop**:
   - Acesse https://app.netlify.com/drop
   - Arraste a pasta `dist` para a área de upload
   - Pronto!

   **Opção B - Via Git**:
   - Clique em "New site from Git"
   - Conecte GitHub
   - Selecione repositório PERMANECEI
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Deploy site

4. **URL final**:
   ```
   https://permanecei.netlify.app
   ```

---

### 3. **GitHub Pages** (Grátis)

✅ **Vantagens**:
- 100% grátis
- Integrado com GitHub

#### Passo a Passo - GitHub Pages

1. **Instalar gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Configurar vite.config.ts**:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/PERMANECEI/',  // Nome do seu repositório
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

3. **Adicionar scripts no package.json**:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

4. **Fazer deploy**:
```bash
npm run deploy
```

5. **Configurar GitHub**:
   - Vá no repositório GitHub
   - Settings → Pages
   - Source: Deploy from branch `gh-pages`
   - Save

6. **URL final**:
   ```
   https://seu-usuario.github.io/PERMANECEI/
   ```

---

### 4. **Firebase Hosting** (Google)

✅ **Vantagens**:
- Infraestrutura Google
- Fácil integrar com outros serviços Firebase

#### Passo a Passo - Firebase

1. **Instalar Firebase CLI**:
```bash
npm install -g firebase-tools
```

2. **Login**:
```bash
firebase login
```

3. **Inicializar**:
```bash
firebase init hosting
```
Escolha:
- Use existing project (ou crie novo)
- Public directory: `dist`
- Single page app: `Yes`
- Automatic builds: `No`

4. **Build e Deploy**:
```bash
npm run build
firebase deploy
```

5. **URL final**:
   ```
   https://permanecei-XXXXX.web.app
   ```

---

## 🔗 Domínio Personalizado

Para ter um domínio tipo **permanecei.app**:

### 1. Comprar Domínio

**Recomendações**:
- **Registro.br** (Brasil): ~R$ 40/ano
- **GoDaddy**: ~$12/ano
- **Namecheap**: ~$10/ano

### 2. Configurar DNS

**Vercel**:
1. Settings → Domains
2. Add domain: `permanecei.app`
3. Siga as instruções de DNS

**Netlify**:
1. Domain settings → Add custom domain
2. Configure DNS conforme instruções

**DNS Básico**:
```
Type: CNAME
Name: www
Value: seu-app.vercel.app
```

---

## 📱 PWA (Progressive Web App)

Para transformar em app instalável:

### 1. Criar manifest.json

```json
{
  "name": "PERMANECEI - Vida de Oração",
  "short_name": "PERMANECEI",
  "description": "Aplicativo católico de oração",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#FAF7F2",
  "theme_color": "#8B1A1A",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### 2. Adicionar no index.html

```html
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#8B1A1A">
```

### 3. Service Worker (opcional)

Para funcionar offline:

```typescript
// vite.config.ts
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg'],
      manifest: {
        name: 'PERMANECEI',
        short_name: 'PERMANECEI',
        theme_color: '#8B1A1A'
      }
    })
  ]
})
```

Instalar plugin:
```bash
npm install vite-plugin-pwa -D
```

---

## 📊 Analytics (Opcional)

Para ver quantas pessoas usam:

### Google Analytics

1. Criar conta em https://analytics.google.com
2. Obter ID de medição (G-XXXXXXXXXX)
3. Adicionar no index.html:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔒 HTTPS

Todas as plataformas mencionadas fornecem HTTPS grátis automaticamente via Let's Encrypt.

Não precisa fazer nada! 🎉

---

## 📱 App Mobile Nativo (Futuro)

Para criar apps Android/iOS:

### Opção 1: React Native
- Reescrever com React Native
- Publicar na Google Play e App Store

### Opção 2: Capacitor
- Transforma o app web em nativo
- Mantém o mesmo código

```bash
npm install @capacitor/core @capacitor/cli
npx cap init
npx cap add android
npx cap add ios
```

---

## 🧪 Testar Antes de Publicar

### 1. Build Local
```bash
npm run build
npm run preview
```

### 2. Testar em Dispositivos
- Abra em diferentes navegadores
- Teste no celular
- Verifique responsividade

### 3. Lighthouse (Performance)
- Abra DevTools (F12)
- Aba "Lighthouse"
- Run audit
- Objetivo: 90+ em todas categorias

---

## 📋 Checklist Pré-Publicação

- [ ] Testar todas as páginas
- [ ] Verificar responsividade mobile
- [ ] Confirmar que não há erros no console
- [ ] Testar offline (se implementou PWA)
- [ ] Meta tags para SEO configuradas
- [ ] Ícones e imagens otimizados
- [ ] Build de produção sem warnings
- [ ] Lighthouse score > 90

---

## 🔄 Atualizar App Publicado

### Vercel/Netlify (com Git):
1. Faça alterações localmente
2. Commit: `git commit -am "Descrição"`
3. Push: `git push`
4. Deploy automático! ✅

### Manual (GitHub Pages, etc):
1. Faça alterações
2. `npm run build`
3. `npm run deploy` (ou upload manual)

---

## 💰 Custos Estimados

| Item | Custo |
|------|-------|
| **Hospedagem Vercel/Netlify** | Grátis para sempre |
| **GitHub Pages** | Grátis |
| **Domínio .com/.app** | $10-15/ano |
| **Domínio .com.br** | R$ 40/ano |
| **SSL/HTTPS** | Grátis (Let's Encrypt) |
| **Analytics** | Grátis (Google Analytics) |

**Total**: Pode ser R$ 0 com subdomínio grátis!

---

## 🎯 Recomendação Final

**Para iniciantes**: Use **Vercel**
- Deploy em 5 minutos
- Interface simples
- HTTPS automático
- Deploy automático

**Comando único**:
```bash
npm install -g vercel && vercel
```

Pronto! App no ar! 🚀

---

## 📧 Divulgação

Depois de publicar:

1. **Redes Sociais**:
   - Instagram da comunidade
   - Grupos de WhatsApp
   - Facebook

2. **Diretórios**:
   - Submeter para agregadores católicos
   - Listar em sites de apps católicos

3. **QR Code**:
   - Gerar QR Code do link
   - Imprimir e distribuir na paróquia

---

## 🙏 Oração Antes de Publicar

*"Senhor, que este aplicativo chegue a muitas almas  
e seja instrumento da Tua graça.  
Que cada pessoa que o usar sinta-se  
mais próxima de Ti e cresça no amor.  
Abençoa este trabalho e multiplica seus frutos.  
Amém."* ✝️

---

**Que Deus abençoe a publicação do PERMANECEI!**  
*"Ide por todo o mundo e pregai o Evangelho." (Mc 16,15)*
