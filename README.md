# Idosos contra golpes digitais

Projeto de extensão universitária do curso de **Ciência da Computação** da
Anhanguera de Indaiatuba — componente **Projeto de Extensão I**, Programa de
Contexto à Comunidade.

**Autor:** Diego Nahuel Gangl — RA 2025500599
**Ano:** 2026

**Site no ar:** <https://ganorg.github.io/projeto-extensao-golpes-idosos/>

## O que é

Uma oficina de **prevenção a golpes digitais para pessoas idosas** (3 a 4
encontros presenciais) acompanhada de uma **cartilha digital acessível** (site),
que fica disponível para consulta permanente pela comunidade.

O tema dá atenção especial aos golpes que usam **Inteligência Artificial** (voz
clonada, fotos e vídeos falsos), cada vez mais comuns.

## Objetivos de Desenvolvimento Sustentável (ONU)

- **ODS 4 – Educação de Qualidade** — metas 4.4 e 4.5
- **ODS 10 – Redução das Desigualdades** — meta 10.2

## Estrutura do repositório

```
.
├── docs/            → a cartilha digital (site). É o que vai ao ar no GitHub Pages.
│   ├── index.html   → página inicial, com o menu
│   ├── golpe-*.html → uma página por tipo de golpe
│   ├── golpes-ia.html, casos-reais.html, defesas-praticas.html
│   ├── quiz.html + quiz.js         → teste "isto é golpe?"
│   ├── resumo-impressao.html       → folha A4 para imprimir (Ctrl+P)
│   ├── sobre.html, telefones-uteis.html
│   ├── style.css                   → estilo acessível (fonte grande, alto contraste)
│   └── acessibilidade.js           → barra A+/A- e alto contraste
└── planejamento/    → documentos do trabalho (NÃO vão ao ar)
    ├── PDCA-preenchido.md          → planejamento (metodologia PDCA)
    ├── carta-apresentacao.md       → modelo da carta da universidade
    ├── contatos-instituicoes.md    → CRAS e outros parceiros em Indaiatuba
    └── exemplos-e-noticias.md      → casos reais e estatísticas (2026)
```

## Como ver o site no computador

Abra a pasta `docs` no Explorador de Arquivos, clique com o botão direito em
`index.html` → **Abrir com** → **Google Chrome** (ou Edge). Navegue pelos cartões.

## Como publicar no GitHub Pages

1. Criar uma conta em <https://github.com> (gratuita).
2. Criar um repositório novo (ex.: `cartilha-golpes-idosos`) e enviar estes
   arquivos (pelo GitHub Desktop ou pela linha de comando).
3. No repositório: **Settings → Pages**.
4. Em **Build and deployment → Source**, escolher **Deploy from a branch**.
5. Selecionar a branch `main` e a pasta **`/docs`**. Salvar.
6. Após alguns minutos, o site fica no ar em
   `https://SEU-USUARIO.github.io/cartilha-golpes-idosos/`.

## Tecnologias

HTML, CSS e JavaScript puro (sem frameworks). Foco em **acessibilidade** e
**Interação Homem-Computador**: fonte grande, alto contraste opcional, botões
grandes, textos curtos, navegação simples.

## Licença

Conteúdo educativo de livre uso para fins não comerciais, com atribuição.
