# 📚 Como Expandir o Conteúdo do PERMANECEI

Este guia explica como adicionar mais santos, liturgias, orações e novenas ao aplicativo.

---

## 🎯 Estrutura dos Dados

Todos os dados estão em arquivos TypeScript na pasta `src/data/`:

```
src/data/
├── santos.ts      # Array de santos
├── liturgia.ts    # Array de liturgias diárias
└── oracoes.ts     # Arrays de orações e novenas
```

---

## 👼 Como Adicionar Mais Santos

### Passo 1: Abrir o arquivo

Abra: `src/data/santos.ts`

### Passo 2: Adicionar novo santo

Copie o template abaixo e preencha com as informações:

```typescript
{
  id: 'santo-nome-unico',  // Sempre em minúsculas, sem espaços (use hífen)
  nome: 'Nome Completo do Santo',
  data: 'DD de mês',  // Ex: '1º de janeiro'
  biografia: `
    Texto completo da biografia do santo.
    Pode ter vários parágrafos.
    Fale sobre nascimento, conversão, missão, morte e legado.
  `,
  frases: [
    'Primeira frase marcante do santo',
    'Segunda frase',
    'Terceira frase'
  ],
  virtudes: ['Virtude 1', 'Virtude 2', 'Virtude 3', 'Virtude 4'],
  devocoes: [
    'Novena deste santo',
    'Oração específica',
    'Prática devocional'
  ],
  aplicacaoPratica: 'Sugestão concreta de como viver hoje a espiritualidade deste santo.',
  epoca: 'Período histórico (século)',
  carisma: 'Principal dom/missão',
  vocacao: 'Estado de vida (padre, religioso, leigo, mártir, etc.)'
}
```

### Passo 3: Adicionar no array

Adicione a vírgula no santo anterior e cole o novo:

```typescript
export const santos: Santo[] = [
  { /* santo existente */ },
  { /* santo existente */ },
  { /* NOVO SANTO AQUI */ },
];
```

### Exemplo Completo

```typescript
{
  id: 'santa-teresinha',
  nome: 'Santa Teresinha do Menino Jesus',
  data: '1º de outubro',
  biografia: 'Marie-Françoise-Thérèse Martin nasceu em Alençon, França, em 1873. Aos 15 anos entrou no Carmelo de Lisieux. Desenvolveu o "pequeno caminho" da infância espiritual, fazendo das pequenas coisas do cotidiano atos de amor a Deus. Faleceu de tuberculose aos 24 anos, em 1897. Doutora da Igreja.',
  frases: [
    'No coração da Igreja, minha Mãe, serei o amor',
    'Tudo é graça',
    'Quero passar meu céu fazendo o bem sobre a terra'
  ],
  virtudes: ['Confiança', 'Abandono', 'Amor', 'Simplicidade'],
  devocoes: ['Novena das Rosas', 'Pequeno Caminho', 'Oferta ao Amor Misericordioso'],
  aplicacaoPratica: 'Ofereça a Deus as pequenas ações de hoje com grande amor: um sorriso, uma palavra gentil, um gesto de serviço.',
  epoca: 'Idade Moderna (século XIX)',
  carisma: 'Infância espiritual',
  vocacao: 'Religiosa carmelita'
}
```

---

## 📖 Como Adicionar Mais Liturgias

### Passo 1: Abrir o arquivo

Abra: `src/data/liturgia.ts`

### Passo 2: Template de liturgia

```typescript
{
  id: 'liturgia-YYYY-MM-DD',  // Ex: liturgia-2026-03-15
  data: 'YYYY-MM-DD',
  tempo: 'Tempo Comum' | 'Advento' | 'Natal' | 'Quaresma' | 'Páscoa',
  cor: 'verde' | 'roxo' | 'branco' | 'vermelho',
  primeiraLeitura: {
    referencia: 'Livro Capítulo,Versículos',  // Ex: 'Gn 1,1-5'
    texto: `
      Leitura do Livro...
      
      [Texto completo da leitura]
      
      Palavra do Senhor.
    `,
    comentario: 'Explicação pastoral da leitura, contexto histórico e aplicação prática.'
  },
  salmo: {
    referencia: 'Sl XX,YY',
    texto: `
      — Refrão do salmo
      
      — Refrão do salmo
      
      Estrofes do salmo...
    `,
    refrao: 'Refrão do salmo',
    audio: '' // Opcional: link para áudio
  },
  segundaLeitura: {  // OPCIONAL (só domingos e solenidades)
    referencia: '',
    texto: '',
    comentario: ''
  },
  evangelho: {
    referencia: 'Mt/Mc/Lc/Jo X,Y-Z',
    texto: `
      Proclamação do Evangelho de Jesus Cristo segundo [Evangelista].
      
      [Texto completo do Evangelho]
      
      Palavra da Salvação.
    `,
    comentario: 'Explicação do Evangelho, contexto, mensagem central e aplicação.'
  },
  reflexao: 'Reflexão geral unindo todas as leituras do dia, mostrando o fio condutor litúrgico.',
  oracaoFinal: 'Oração conclusiva inspirada nas leituras do dia.'
}
```

### Fonte dos Textos Litúrgicos

**Oficial**:
- CNBB: https://www.cnbb.org.br/liturgia-diaria/
- Vaticano: https://www.vatican.va/news_services/liturgy/

**Dica**: Copie as leituras oficiais e adicione comentários pastorais próprios.

---

## 🙏 Como Adicionar Mais Orações

### Passo 1: Abrir o arquivo

Abra: `src/data/oracoes.ts`

### Passo 2: Template de oração

```typescript
{
  id: 'oracao-nome-unico',
  titulo: 'Nome da Oração',
  categoria: 'tradicional' | 'contemporanea' | 'tematica' | 'novena' | 'ladainha',
  texto: `Texto completo da oração.
  
Pode ter várias linhas e parágrafos.

Amém.`,
  audio: 'URL_DO_AUDIO',  // Opcional
  tema: ['palavra-chave1', 'palavra-chave2'],  // Opcional
  origem: 'Autor ou origem da oração'  // Opcional
}
```

### Exemplos por Categoria

**Oração Tradicional**:
```typescript
{
  id: 'magnificat',
  titulo: 'Magnificat - Cântico de Maria',
  categoria: 'tradicional',
  texto: `Minha alma glorifica o Senhor,
meu espírito exulta em Deus, meu Salvador,
porque olhou para a humildade de sua serva.
Doravante todas as gerações me chamarão bem-aventurada,
porque o Todo-Poderoso fez grandes coisas em meu favor.
Santo é o seu nome!
Amém.`
}
```

**Oração Temática**:
```typescript
{
  id: 'oracao-estudante',
  titulo: 'Oração do Estudante',
  categoria: 'tematica',
  tema: ['estudo', 'sabedoria', 'inteligência'],
  texto: `Senhor, iluminai minha mente para estudar com aproveitamento.
Dai-me memória, concentração e sabedoria.
Que eu use o conhecimento para servir e não para me exaltar.
São Tomás de Aquino, rogai por mim.
Amém.`
}
```

**Ladainha**:
```typescript
{
  id: 'ladainha-sagrado-coracao',
  titulo: 'Ladainha do Sagrado Coração de Jesus',
  categoria: 'ladainha',
  texto: `Senhor, tende piedade de nós...
Cristo, tende piedade de nós...
[etc]`
}
```

---

## 📿 Como Adicionar Mais Novenas

### Passo 1: Abrir o arquivo

Abra: `src/data/oracoes.ts` (seção `novenas`)

### Passo 2: Template de novena

```typescript
{
  id: 'novena-nome',
  titulo: 'Novena de [Santo/Devoção]',
  santo: 'Nome do Santo',  // Opcional
  tema: 'Palavras-chave do tema',
  descricao: 'Breve descrição da novena e quando rezá-la',
  dias: [
    {
      dia: 1,
      reflexao: 'Reflexão do primeiro dia (2-3 parágrafos)',
      oracao: `Oração completa do dia 1.
      
Pode incluir:
- Invocação inicial
- Corpo da oração
- Pedido específico
- Fórmula de encerramento (Pai-Nosso, Ave-Maria, Glória)

Amém.`
    },
    {
      dia: 2,
      reflexao: '...',
      oracao: '...'
    },
    // ... até dia 9
  ]
}
```

### Exemplo Completo de Um Dia

```typescript
{
  dia: 1,
  reflexao: `Santo Antônio era um homem de profunda humildade. Apesar de sua sabedoria e eloquência, permaneceu simples e próximo dos pobres. 
  
  Ele entendia que a verdadeira grandeza está em servir, não em ser servido. Sua vida nos ensina que Deus exalta os humildes e resiste aos soberbos.
  
  Peçamos hoje a graça da humildade, para reconhecermos que tudo o que temos vem de Deus e deve ser usado para Sua glória.`,
  oracao: `Glorioso Santo Antônio, modelo de virtudes e tesouro de milagres,
vós que obtivestes de Deus o dom singular de encontrar as coisas perdidas,
ajudai-me a recuperar a graça divina, se porventura a tenho perdido pelo pecado.

Fazei também que eu encontre os bens temporais de que necessito,
especialmente... (fazer o pedido silenciosamente).

Mas, acima de tudo, obtende-me do Senhor a graça de viver
em contínuo estado de conversão, crescendo sempre na caridade
e na humildade, à imitação de Cristo, nosso Salvador.

Santo Antônio de Pádua, rogai por nós.

(Rezar: 1 Pai-Nosso, 3 Ave-Marias, 1 Glória ao Pai)`
}
```

---

## 🔄 Processo de Adição em Lote

### Para adicionar muitos santos/liturgias/orações:

1. **Prepare em planilha** (Excel/Google Sheets):
   - Coluna A: ID
   - Coluna B: Nome
   - Coluna C: Data
   - etc.

2. **Use conversor online** (JSON/TypeScript):
   - https://www.convertcsv.com/csv-to-json.htm
   - Cole os dados da planilha
   - Converta para JSON
   - Ajuste manualmente para TypeScript

3. **Ou use script Python**:

```python
import json

# Ler CSV e converter
# Gerar TypeScript automaticamente
```

---

## 📅 Completar o Ano Litúrgico

Para ter liturgia completa do ano:

1. **Fonte oficial**: CNBB ou Vaticano
2. **Quantidade**: ~365 liturgias
3. **Tempo estimado**: 2-3 semanas de trabalho
4. **Estratégia**:
   - Começar pelos domingos
   - Depois tempos fortes (Advento, Natal, Quaresma, Páscoa)
   - Por fim, Tempo Comum

---

## ✅ Checklist de Qualidade

Ao adicionar conteúdo, verificar:

- [ ] IDs únicos (sem duplicatas)
- [ ] Datas no formato correto
- [ ] Textos sem erros de digitação
- [ ] Referências bíblicas corretas
- [ ] Comentários pastorais (não copiar de outros sites)
- [ ] Linguagem acessível e acolhedora
- [ ] Fidelidade ao Magistério da Igreja

---

## 🚫 O Que NÃO Fazer

❌ Copiar textos de sites protegidos por direitos autorais  
❌ Inventar biografias ou frases de santos  
❌ Adicionar devoções não aprovadas pela Igreja  
❌ Usar linguagem muito acadêmica ou rebuscada  
❌ Incluir opiniões pessoais controversas  

---

## 📚 Fontes Confiáveis

### Santos
- **Martirológio Romano**: https://www.vatican.va/roman_curia/pontifical_academies/cultmem-martyrum/martiri/index_po.html
- **Santos do Dia (Paulinas)**: Livro físico recomendado
- **Vaticano**: https://www.vatican.va/news_services/liturgy/saints/index_po.html

### Liturgia
- **CNBB**: https://www.cnbb.org.br/liturgia-diaria/
- **Vaticano**: https://www.vatican.va/news_services/liturgy/

### Orações
- **Compêndio do Catecismo**: Orações oficiais
- **Livros de oração aprovados**: Editoras católicas (Paulinas, Loyola, etc.)

---

## 💡 Dica Extra: Usar IA para Auxiliar

Você pode usar ChatGPT/Claude para:

✅ **Escrever comentários pastorais** (sempre revisar teologicamente)  
✅ **Gerar reflexões** a partir de textos bíblicos  
✅ **Sugestões de aplicações práticas**  

❌ **NÃO use IA para**:
- Criar biografias falsas
- Inventar orações de santos
- Alterar textos litúrgicos oficiais

**Prompt exemplo**:

```
Escreva um comentário pastoral de 150 palavras sobre a parábola do Bom Samaritano (Lc 10,25-37), 
focando em aplicação prática para a vida diária, com linguagem acolhedora e fiel à doutrina católica.
```

---

## 🎯 Meta de Conteúdo Completo

Para ter um aplicativo **robusto**:

- [ ] **100 santos** (diferentes épocas e vocações)
- [ ] **365 liturgias diárias** (ano completo)
- [ ] **50 orações** (tradicionais + temáticas)
- [ ] **20 novenas** (santos populares + devoções)
- [ ] **10 ladainhas** oficiais da Igreja

**Tempo estimado**: 2-3 meses de trabalho dedicado

---

## 🙏 Oração do Escritor de Conteúdo

*"Espírito Santo, inspirai minhas palavras  
para que sejam fiéis à Verdade  
e úteis para a edificação dos fiéis.  
Que meu trabalho seja instrumento  
de vossa graça e sabedoria.  
Amém."*

---

**Bom trabalho na expansão do conteúdo do PERMANECEI!**  
*"A seara é grande, mas os operários são poucos." (Mt 9,37)*
