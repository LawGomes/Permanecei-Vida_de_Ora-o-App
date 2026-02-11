# 💖 Adaptação para Comunidade Servos do Ágape

## Personalização do PERMANECEI para a Comunidade

Este documento explica como adaptar o aplicativo **PERMANECEI** para a Comunidade Servos do Ágape, integrando o carisma específico da comunidade.

---

## 🎯 Carisma da Comunidade

**Base**: 1 Coríntios 13 (O Amor)

**Símbolo**: Coração imperfeito mergulhado na luz

**Missão**: Viver e propagar o amor incondicional de Deus

---

## 🔧 Mudanças a Implementar

### 1. Tela Inicial (Home)

**Adicionar**:

```typescript
// src/pages/Home.tsx
<div className="sacred-card bg-gradient-to-br from-sacred-red/20 to-sacred-gold/20 border-2 border-sacred-red">
  <h3 className="font-serif font-bold text-xl text-sacred-red mb-3 text-center">
    Servos do Ágape
  </h3>
  <p className="text-center text-gray-800 font-serif italic mb-3">
    "O amor é paciente, o amor é bondoso. Não inveja, não se vangloria, 
    não se orgulha..." (1 Cor 13,4)
  </p>
  <button className="sacred-button w-full">
    Reflexão Diária do Amor
  </button>
</div>
```

### 2. Nova Página: Viver o Amor

**Criar**: `src/pages/ViverAmorPage.tsx`

```typescript
import { Heart, Users, Home as HomeIcon, Music } from 'lucide-react';

export default function ViverAmorPage() {
  return (
    <div className="space-y-6">
      <div className="sacred-card">
        <Heart className="w-12 h-12 text-sacred-red mx-auto mb-3" />
        <h1 className="text-3xl font-serif font-bold text-sacred-red text-center mb-2">
          Viver o Amor no Cotidiano
        </h1>
        <p className="text-center text-gray-600 italic">
          "Agora, pois, permanecem a fé, a esperança e o amor. 
          Porém, o maior destes é o amor." (1 Cor 13,13)
        </p>
      </div>

      <div className="sacred-card">
        <h3 className="font-semibold text-lg text-sacred-red mb-3">
          Prática Diária do Amor
        </h3>
        <div className="space-y-4">
          <div className="bg-sacred-beige p-4 rounded-lg">
            <h4 className="font-semibold text-sacred-blue mb-2">1. Amar sem Condições</h4>
            <p className="text-gray-700">
              Hoje, escolha amar uma pessoa difícil em sua vida. 
              Ofereça um sorriso, uma palavra gentil ou uma oração silenciosa por ela.
            </p>
          </div>

          <div className="bg-sacred-beige p-4 rounded-lg">
            <h4 className="font-semibold text-sacred-blue mb-2">2. Paciência no Cotidiano</h4>
            <p className="text-gray-700">
              "O amor é paciente." Pratique a paciência hoje: no trânsito, 
              com os filhos, no trabalho. Respire fundo e ame.
            </p>
          </div>

          <div className="bg-sacred-beige p-4 rounded-lg">
            <h4 className="font-semibold text-sacred-blue mb-2">3. Bondade Concreta</h4>
            <p className="text-gray-700">
              "O amor é bondoso." Faça um ato concreto de bondade: 
              ajude alguém, elogie, doe algo, perdoe.
            </p>
          </div>
        </div>
      </div>

      <div className="sacred-card">
        <h3 className="font-semibold text-lg text-sacred-red mb-3">
          Exame do Amor Diário
        </h3>
        <div className="space-y-2">
          <p className="text-gray-800">• Fui paciente hoje?</p>
          <p className="text-gray-800">• Pratiquei a bondade?</p>
          <p className="text-gray-800">• Evitei a inveja e o orgulho?</p>
          <p className="text-gray-800">• Perdoei de coração?</p>
          <p className="text-gray-800">• Amei incondicionalmente?</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="sacred-card text-center">
          <Users className="w-10 h-10 text-sacred-gold mx-auto mb-2" />
          <h4 className="font-semibold text-sm">Casais</h4>
        </div>
        <div className="sacred-card text-center">
          <HomeIcon className="w-10 h-10 text-sacred-blue mx-auto mb-2" />
          <h4 className="font-semibold text-sm">Família</h4>
        </div>
        <div className="sacred-card text-center">
          <Music className="w-10 h-10 text-sacred-red mx-auto mb-2" />
          <h4 className="font-semibold text-sm">Música</h4>
        </div>
        <div className="sacred-card text-center">
          <Heart className="w-10 h-10 text-sacred-gold mx-auto mb-2" />
          <h4 className="font-semibold text-sm">Missão</h4>
        </div>
      </div>
    </div>
  );
}
```

**Adicionar rota** em `src/App.tsx`:

```typescript
import ViverAmorPage from './pages/ViverAmorPage';

// Dentro de <Routes>:
<Route path="/viver-amor" element={<ViverAmorPage />} />
```

**Adicionar ícone na navegação** (opcional - 6º ícone):

```typescript
// src/components/Layout.tsx
<Link
  to="/viver-amor"
  className={`flex flex-col items-center gap-1 py-2 px-3 rounded-lg transition-colors ${
    isActive('/viver-amor') ? 'text-sacred-red' : 'text-gray-600 hover:text-sacred-red'
  }`}
>
  <Heart className="w-6 h-6" />
  <span className="text-xs font-medium">Amor</span>
</Link>
```

---

### 3. Orações Exclusivas da Comunidade

**Adicionar** em `src/data/oracoes.ts`:

```typescript
{
  id: 'oracao-agape',
  titulo: 'Oração do Ágape',
  categoria: 'tradicional',
  origem: 'Comunidade Servos do Ágape',
  texto: `Senhor, ensina-me a amar como Tu amas:
com um coração puro e sem condições.

Que eu seja paciente com os que me ferem,
bondoso com os que me rejeitam,
humilde diante dos que se exaltam.

Purifica meu coração de todo egoísmo,
orgulho e ressentimento.

Faz de mim um servo do amor,
um instrumento da tua misericórdia,
uma testemunha viva do Ágape.

Que em meu coração imperfeito
brilhe a luz do teu amor perfeito.

Amém.`
},
{
  id: 'consagracao-agape',
  titulo: 'Consagração ao Amor (1 Cor 13)',
  categoria: 'tradicional',
  origem: 'Comunidade Servos do Ágape',
  texto: `Senhor Jesus, eu me consagro hoje ao teu Amor.

Quero ser paciente, mesmo quando tudo me irrita.
Quero ser bondoso, mesmo quando ninguém merece.
Não quero invejar os bens alheios.
Não quero me vangloriar das minhas conquistas.
Não quero ser orgulhoso ou arrogante.

Ensina-me a não procurar meus interesses,
mas os interesses do Reino.
Ajuda-me a não me irritar facilmente,
e a não guardar rancor.

Que eu não me alegre com a injustiça,
mas me alegre com a verdade.

Quero tudo desculpar, tudo crer,
tudo esperar, tudo suportar.

Que o amor nunca acabe em mim,
mas seja a marca da minha vida.

Consagro-me a Ti, Amor Eterno,
para ser teu servo do Ágape. Amém.`
}
```

---

### 4. Frases do Carisma

**Adicionar** em vários locais do app (rodapé de cards, mensagens):

```typescript
const frasesAgape = [
  "O amor é paciente, o amor é bondoso.",
  "O amor tudo desculpa, tudo crê, tudo espera, tudo suporta.",
  "Agora permanecem a fé, a esperança e o amor. O maior destes é o amor.",
  "Onde não há amor, ponha amor, e você colherá amor.",
  "No coração imperfeito, Deus faz brilhar Seu amor perfeito.",
  "Servos do amor incondicional de Deus."
];
```

**Usar na tela inicial**:

```typescript
const fraseAleatoria = frasesAgape[Math.floor(Math.random() * frasesAgape.length)];

<div className="sacred-card bg-sacred-red/10 text-center">
  <p className="text-gray-800 italic">"{fraseAleatoria}"</p>
</div>
```

---

### 5. Cores Opcionais da Comunidade

Se quiser adaptar as cores para refletir ainda mais o carisma:

```javascript
// tailwind.config.js
colors: {
  'agape-red': '#C41E3A',      // Vermelho mais vibrante
  'agape-gold': '#FFD700',     // Dourado mais brilhante
  'agape-heart': '#8B1A1A',    // Tom original
  ...
}
```

---

### 6. Logo da Comunidade

**Substituir** o ícone padrão:

1. Criar logo com coração imperfeito + nome da comunidade
2. Salvar em: `public/icon-agape.svg`
3. Atualizar em `index.html`:

```html
<link rel="icon" type="image/svg+xml" href="/icon-agape.svg" />
```

4. Atualizar no `Layout.tsx`:

```typescript
<div className="flex items-center gap-3">
  <img src="/icon-agape.svg" alt="Servos do Ágape" className="w-10 h-10" />
  <div>
    <h1 className="text-2xl font-serif font-bold">PERMANECEI</h1>
    <p className="text-xs text-white/80">Servos do Ágape</p>
  </div>
</div>
```

---

### 7. Novena Específica

**Criar**: Novena do Amor (1 Coríntios 13)

```typescript
// src/data/oracoes.ts - adicionar em novenas[]
{
  id: 'novena-amor-1cor13',
  titulo: 'Novena do Amor (1 Coríntios 13)',
  tema: 'Amor incondicional, Ágape, Carisma comunitário',
  descricao: 'Nove dias meditando os versículos de 1 Coríntios 13, carisma da Comunidade Servos do Ágape',
  dias: [
    {
      dia: 1,
      reflexao: 'O AMOR É PACIENTE. A paciência é a primeira virtude do amor. Sem ela, o amor se torna impulsivo, violento e egoísta. Deus é infinitamente paciente conosco. Quantas vezes Ele esperou por nossa conversão? Quantas vezes nos deu novas chances? Hoje, somos chamados a imitar essa paciência divina. Ser paciente com os defeitos do outro, com as demoras da vida, com nossos próprios limites.',
      oracao: `Senhor, ensina-me a paciência.
Quando tudo me irrita, que eu respire fundo e lembre que Tu és paciente comigo.
Quando quero resultados imediatos, que eu confie no Teu tempo.
Quando as pessoas me decepcionam, que eu perdoe como Tu me perdoas.
Que eu seja paciente no trânsito, no trabalho, em casa.
Que eu espere com esperança, não com angústia.
Paciente como o agricultor que aguarda a colheita.
Paciente como Tu, Senhor, que esperas minha conversão.
Amém.

(Rezar 1 Pai-Nosso, 3 Ave-Marias, 1 Glória ao Pai)`
    },
    {
      dia: 2,
      reflexao: 'O AMOR É BONDOSO. Bondade é mais que não fazer mal; é fazer ativamente o bem. É o sorriso gratuito, a palavra de encorajamento, o gesto de ajuda. Jesus passou pela vida "fazendo o bem" (At 10,38). Sua bondade curava, libertava, consolava. Hoje somos chamados a ser instrumentos dessa bondade divina. Não basta não ser mau; é preciso ser ativamente bom.',
      oracao: `Senhor, torna-me bondoso.
Que eu seja bom não apenas com quem me trata bem,
mas especialmente com quem me fere.
Que minha bondade não seja estratégia,
mas reflexo do Teu coração.
Que eu pratique pequenos atos de bondade:
um elogio sincero, uma ajuda espontânea,
um perdão generoso, uma escuta atenta.
Que as pessoas sintam o amor de Deus através da minha bondade.
Faz-me instrumento da Tua bondade infinita.
Amém.

(Rezar 1 Pai-Nosso, 3 Ave-Marias, 1 Glória ao Pai)`
    }
    // ... completar os 9 dias
  ]
}
```

---

### 8. Seção de Formações

**Criar** área para formações específicas:

- Formação para casais
- Formação para ministros de música
- Formação sobre 1 Coríntios 13
- Testemunhos da comunidade

---

### 9. Integração com Eventos da Comunidade

**Adicionar** seção de eventos/encontros:

```typescript
<div className="sacred-card">
  <h3 className="font-semibold text-lg text-sacred-red mb-3">
    Próximos Encontros
  </h3>
  <div className="space-y-2">
    <div className="bg-sacred-beige p-3 rounded-lg">
      <p className="font-semibold text-sacred-blue">Grupo de Oração</p>
      <p className="text-sm text-gray-600">Todas as quintas, 20h</p>
    </div>
    <div className="bg-sacred-beige p-3 rounded-lg">
      <p className="font-semibold text-sacred-blue">Encontro de Casais</p>
      <p className="text-sm text-gray-600">Primeiro sábado do mês, 19h</p>
    </div>
  </div>
</div>
```

---

### 10. Configuração Rápida

Para ativar o "Modo Servos do Ágape":

1. **Criar variável de ambiente**:

```env
# .env
VITE_COMUNIDADE=servos-agape
```

2. **Condicional no código**:

```typescript
const isComunidadeAgape = import.meta.env.VITE_COMUNIDADE === 'servos-agape';

{isComunidadeAgape && (
  <div className="sacred-card">
    {/* Conteúdo exclusivo Servos do Ágape */}
  </div>
)}
```

---

## 📋 Checklist de Personalização

- [ ] Adicionar página "Viver o Amor no Cotidiano"
- [ ] Incluir Oração do Ágape
- [ ] Incluir Consagração ao Amor
- [ ] Adicionar frases de 1 Coríntios 13 em vários lugares
- [ ] Criar Novena do Amor (9 dias)
- [ ] Adicionar logo da comunidade
- [ ] Criar seção de formações
- [ ] Adicionar eventos/encontros
- [ ] Personalizar cores (opcional)
- [ ] Incluir testemunhos da comunidade

---

## 🎯 Resultado Final

O app **PERMANECEI** personalizado para os **Servos do Ágape** terá:

✅ Todo conteúdo católico original  
✅ Identidade visual da comunidade  
✅ Carisma do amor (1 Cor 13) integrado  
✅ Orações e novenas exclusivas  
✅ Formações específicas  
✅ Integração com eventos  
✅ Símbolo do coração imperfeito  

---

## 💡 Dica de Desenvolvimento

Para manter duas versões (geral e Servos do Ágape):

1. Use **branches do Git**:
   - `main`: Versão geral
   - `servos-agape`: Versão personalizada

2. Ou use **feature flags** (variáveis de ambiente)

---

## 🙏 Oração Final

*"Senhor, que este aplicativo seja instrumento do Teu amor.  
Que através dele, muitas almas sejam tocadas  
e aprendam a amar como Tu amas.  
Que os Servos do Ágape sejam luz do mundo  
e sal da terra, vivendo e propagando  
o amor incondicional que tudo transforma.  
Amém."*

---

**Desenvolvido com ❤️ para a Comunidade Servos do Ágape**  
*"O maior destes é o amor." (1 Cor 13,13)*
