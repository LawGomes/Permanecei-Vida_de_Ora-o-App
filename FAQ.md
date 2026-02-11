# ❓ FAQ - Perguntas Frequentes

Respostas para as dúvidas mais comuns sobre o **PERMANECEI**.

---

## 🚀 Instalação e Uso

### ❓ Preciso de internet para usar o app?

**Não!** Após a primeira visita, o app funciona 100% offline graças ao armazenamento local. Todos os seus dados ficam salvos no navegador.

---

### ❓ O app funciona no celular?

**Sim!** O design é mobile-first e responsivo. Funciona perfeitamente em smartphones, tablets e desktops.

---

### ❓ Preciso criar conta ou fazer login?

**Não!** Não há sistema de login. Tudo é local e privado. Seus dados ficam apenas no seu dispositivo.

---

### ❓ Como instalar o Node.js?

1. Acesse: https://nodejs.org/
2. Baixe a versão **LTS** (recomendada)
3. Execute o instalador
4. Reinicie o terminal
5. Verifique: `node --version`

---

### ❓ O que significa "npm run dev"?

É o comando para iniciar o servidor de desenvolvimento. O app fica disponível em `http://localhost:5173` para você testar localmente.

---

## 📱 Funcionalidades

### ❓ Quantos santos estão incluídos?

**20 santos completos** com biografias, frases, virtudes, devoções e aplicações práticas. Você pode adicionar quantos quiser seguindo o guia `COMO_EXPANDIR_CONTEUDO.md`.

---

### ❓ A liturgia cobre o ano inteiro?

Atualmente temos **3 dias completos** como exemplo. O template está pronto para você adicionar os 365 dias do ano litúrgico.

---

### ❓ Como funciona a IA?

A IA analisa seus registros no diário espiritual e gera:
- Reflexões personalizadas
- Perguntas de aprofundamento
- Insights sobre padrões
- Sugestões de oração

**Importante**: É uma IA local, não substitui direção espiritual humana.

---

### ❓ As reflexões da IA são confiáveis?

As reflexões seguem princípios da doutrina católica e linguagem pastoral. Porém, são geradas por algoritmo. **Sempre** consulte um sacerdote ou diretor espiritual para questões importantes.

---

### ❓ Meus dados são enviados para algum servidor?

**NÃO!** Todos os dados ficam salvos localmente no seu navegador. Nada é enviado para servidores externos. Privacidade total.

---

## 🎮 Gamificação

### ❓ Como funciona o sistema de níveis?

Cada registro no diário vale **10 pontos**.  
Seu nível é calculado assim: `nível = pontos ÷ 100`

Exemplo:
- 0-99 pontos → Nível 1
- 100-199 pontos → Nível 2
- 200-299 pontos → Nível 3

---

### ❓ Quantas conquistas existem?

**4 conquistas**:
- 🌱 **Primeiro Passo** - Registre seu 1º dia
- 🔥 **Perseverança Semanal** - 7 dias consecutivos
- ⭐ **Fiel Discípulo** - 30 dias consecutivos
- 👑 **Mestre da Oração** - 100 dias consecutivos

---

### ❓ O que acontece se eu perder um dia?

O contador de dias consecutivos reseta para zero. Mas você não perde seus pontos e nível acumulados!

---

## 🔧 Técnico

### ❓ Posso personalizar as cores do app?

**Sim!** Edite o arquivo `tailwind.config.js` e altere as cores na seção `colors`.

---

### ❓ Como adicionar mais santos?

Siga o guia completo em `COMO_EXPANDIR_CONTEUDO.md`. Resumo:
1. Abra `src/data/santos.ts`
2. Copie o template de um santo existente
3. Preencha com novos dados
4. Salve

Pronto!

---

### ❓ Posso usar este app comercialmente?

**Sim!** O app está sob licença MIT. Você pode usar, modificar e até vender, desde que mantenha a atribuição.

---

### ❓ Preciso de backend para publicar?

**Não!** É um app 100% frontend. Pode hospedar em serviços gratuitos como Vercel, Netlify ou GitHub Pages.

---

## 🌐 Publicação

### ❓ Quanto custa para hospedar online?

**Grátis!** Vercel e Netlify oferecem hospedagem gratuita ilimitada para projetos frontend.

Se quiser domínio personalizado (ex: `permanecei.app`):
- **Registro.br**: ~R$ 40/ano
- **GoDaddy**: ~$12/ano

---

### ❓ Como faço para publicar na web?

**Mais fácil**: Use Vercel
```bash
npm install -g vercel
vercel
```

Consulte o guia completo em `GUIA_PUBLICACAO.md`.

---

### ❓ Posso transformar em app mobile nativo?

**Sim!** Opções:
1. **PWA** (Progressive Web App) - Usuário instala do navegador
2. **Capacitor** - Gera APK/IPA do código web
3. **React Native** - Reescrever (mais trabalho)

---

## 📝 Conteúdo

### ❓ Posso adicionar orações de outras tradições?

O app foi projetado para **conteúdo católico oficial**. Mantenha fidelidade ao Magistério da Igreja.

---

### ❓ As orações são oficiais da Igreja?

**Sim!** As orações tradicionais são fiéis aos textos oficiais. As orações temáticas seguem a espiritualidade católica.

---

### ❓ Posso mudar textos das orações?

Tecnicamente sim, mas **não recomendado** para orações tradicionais. Para orações temáticas, sinta-se livre para adaptar.

---

## 🛠️ Problemas Comuns

### ❓ "npm não é reconhecido"

**Solução**: Node.js não está instalado ou não está no PATH.
1. Instale o Node.js: https://nodejs.org/
2. Reinicie o terminal
3. Tente novamente

---

### ❓ "Erro ao instalar dependências"

**Solução**:
```bash
npm cache clean --force
rm -rf node_modules
npm install
```

---

### ❓ "Porta 5173 já em uso"

**Solução**: Vite automaticamente usa outra porta (5174, 5175...). Veja a mensagem no terminal.

Ou mate o processo:
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID [número] /F

# Mac/Linux
lsof -ti:5173 | xargs kill
```

---

### ❓ Meus dados sumiram!

**Possível causa**: Limpou cache do navegador.

**Prevenção**: Exporte seus dados regularmente (funcionalidade futura) ou não limpe dados de site específico.

---

### ❓ O app está lento

**Dicas**:
1. Feche outras abas do navegador
2. Use Chrome ou Firefox atualizados
3. Limpe cache do navegador
4. Verifique se não tem muitos registros no diário (milhares)

---

## 🙏 Espiritual

### ❓ O app substitui um diretor espiritual?

**NÃO!** O app é uma ferramenta de apoio à oração pessoal. Sempre busque orientação de um sacerdote ou diretor espiritual para questões importantes da vida espiritual.

---

### ❓ Posso confiar nas reflexões da IA?

As reflexões seguem princípios católicos, mas são geradas por algoritmo. Use como ponto de partida para reflexão, não como verdade absoluta.

---

### ❓ Como usar o app na Quaresma/Advento?

O app respeita o calendário litúrgico! Use:
- **Liturgia diária** para acompanhar as leituras
- **Diário** para registrar práticas (jejum, caridade)
- **Exame de consciência** para preparação sacramental

---

### ❓ Posso rezar o terço pelo app?

**Sim!** Há um **terço interativo** completo com:
- 4 tipos de mistérios
- Texto das orações
- Contador de contas
- Progressão visual

---

## 🤝 Comunidade

### ❓ Posso contribuir com código?

**Sim!** O projeto é open-source. Fork, faça melhorias e envie Pull Requests.

---

### ❓ Como reportar bugs?

Crie uma issue no GitHub (se estiver versionado) ou envie email para: contato@permanecei.app

---

### ❓ Posso sugerir novos santos/orações?

**Claro!** Envie sugestões com:
- Nome do santo
- Breve biografia
- Fonte confiável

Priorizamos santos oficialmente canonizados pela Igreja.

---

## 📚 Personalização

### ❓ Como adaptar para minha comunidade?

Consulte o guia completo: `PERSONALIZACAO_SERVOS_AGAPE.md`

Principais passos:
1. Adicionar orações exclusivas
2. Criar página de carisma
3. Personalizar cores
4. Adicionar logo da comunidade

---

### ❓ Posso remover funcionalidades?

**Sim!** O código é modular. Você pode:
- Remover páginas (ex: gamificação)
- Ocultar seções
- Desabilitar IA
- Simplificar navegação

---

### ❓ Quero mudar o nome do app

Edite:
1. `index.html` → `<title>`
2. `src/components/Layout.tsx` → Nome no header
3. `package.json` → `"name"`
4. Documentações (opcional)

---

## 🎓 Aprendizado

### ❓ Preciso saber programar para usar?

**Não!** Para usar o app, basta seguir `INICIO_RAPIDO.md`.

Para **modificar**, conhecimento básico de:
- HTML/CSS (alterar estilos)
- JavaScript/TypeScript (adicionar funcionalidades)
- React (modificar componentes)

---

### ❓ Onde aprendo React/TypeScript?

Recursos gratuitos:
- **React**: https://react.dev/learn
- **TypeScript**: https://www.typescriptlang.org/docs/
- **Tailwind CSS**: https://tailwindcss.com/docs

---

### ❓ O código está bem documentado?

**Sim!** Temos:
- 9 arquivos de documentação (MD)
- Comentários no código (onde necessário)
- TypeScript com tipos claros
- Estrutura modular e legível

---

## 💡 Dicas

### ❓ Como usar o app diariamente?

**Sugestão de rotina**:
1. 🌅 **Manhã**: Leia liturgia do dia
2. 🙏 **Dia**: Acesse orações temáticas conforme necessidade
3. 📿 **Tarde**: Reze o terço interativo
4. 📔 **Noite**: Faça exame de consciência e registre no diário

---

### ❓ Como motivar constância?

Use a **gamificação**:
- Mantenha streak de dias consecutivos
- Desbloqueie todas as conquistas
- Suba de nível espiritual
- Acompanhe análise de padrões

---

### ❓ Posso usar offline?

**Sim!** Após primeira visita:
1. O app salva todos os arquivos no dispositivo
2. Funciona sem internet
3. Dados sincronizam automaticamente quando online (futuro)

---

## 📧 Suporte

### ❓ Onde obter ajuda?

1. **Documentação**: 9 arquivos MD neste projeto
2. **GitHub Issues**: Reporte bugs (se versionado)
3. **Email**: contato@permanecei.app
4. **Comunidade**: Fóruns católicos de tecnologia

---

### ❓ O projeto terá atualizações?

Depende da comunidade! Como é open-source, qualquer um pode contribuir com:
- Novos santos
- Mais orações
- Melhorias de UI
- Correções de bugs

---

## 🎉 Outras Perguntas

### ❓ Por que o nome PERMANECEI?

Inspirado em **João 15,9**: *"Como o Pai me amou, também eu vos amei. Permanecei no meu amor."*

---

### ❓ Quem criou este app?

Desenvolvido por um católico apaixonado por tecnologia e espiritualidade, com o objetivo de ajudar fiéis a viverem uma vida de oração constante.

---

### ❓ O app é certificado pela Igreja?

Este é um projeto pessoal/comunitário. Não possui imprimatur ou nihil obstat oficial. Todo conteúdo segue a doutrina católica, mas consulte sempre o Magistério da Igreja.

---

### ❓ Posso usar em grupos de oração?

**Sim!** Ótimo para:
- Grupos de oração paroquiais
- Comunidades
- Famílias
- RCC (Renovação Carismática)
- Pastorais
- Movimentos eclesiais

---

### ❓ Há versão para iOS/Android?

Atualmente é **web app**. Funciona no navegador do celular.

**Futuro**: Pode ser transformado em:
- PWA (instalável do navegador)
- App nativo (React Native)

---

## 🙏 Oração Final

Não encontrou sua pergunta aqui?

Envie para: contato@permanecei.app

*"Buscai e achareis." (Mt 7,7)*

✝️ Que Deus abençoe sua jornada espiritual!
