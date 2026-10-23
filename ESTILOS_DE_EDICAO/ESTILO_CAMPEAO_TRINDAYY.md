# ESTILO CAMPEÃO — @trindayy (padrão oficial dos Reels)

> Origem: os 3 Reels que **mais performaram no perfil** (enviados pelo usuário em `referencias/`):
> `trindayy_6.mp4` (Cloudflare · AUDITORIA), `trindayy_5.mp4` (Reverse Engineer · DECODE), `trindayy_4.mp4` (5 projetos do GitHub · GITHUB).
> São os vídeos do **Lote 1** (`REELS_IA_PRODUCAO_PREMIUM/`, código em `_tooling/v1_cloudflare.mjs`, `v2_reverse.mjs`, `v3_github.mjs`,
> motor `lib/build.mjs` + `lib/base.css` + `lib/fx.js` + `lib/common.mjs`, **sem** o kit2/kit3).
> **Todo vídeo novo parte deste estilo**, a menos que o usuário peça outro. Combina com o `ESQUELETO_UNIVERSAL_DE_EDICAO.md`.

## 1. Identidade visual

| Item | Padrão |
|---|---|
| Fundo | Azul-marinho quase preto `#060a13`, com brilhos radiais suaves (azul `#2f7bff` no topo, ciano/teal embaixo) que derivam devagar. Grade quase invisível. Vinheta escura nas bordas. |
| Sensação | Escuro, premium, "produto de tecnologia". Nada de fundo claro, papel ou cores chapadas de adesivo. |
| Cor de destaque | **1 cor por vídeo**, combinada com a marca do assunto: ciano `#22d3ee`/azul `#38bdf8` (Cloudflare, GitHub), âmbar/amarelo `#fbbf24` (DECODE, #1), laranja da marca, roxo `#a78bfa` para "processo". Vermelho/rosa `#ff4d5e` **só** para negação ("NÃO", "falhas", "não é prova"). |
| Tipografia | Títulos em **Space Grotesk 700**, apertados (−0,035em), às vezes em CAIXA-ALTA ("A CLOUDFLARE LIBEROU", "QUER O LINK?"). Apoio em **Inter** 600–800. **Kickers em JetBrains Mono**, CAIXA-ALTA, espaçados (`DA HEYGEN · EDITOR DE VÍDEO`, `ESTRELAS NO GITHUB`, `COMENTA A PALAVRA`). |
| Área útil | O conteúdo vive no **terço/metade superior** (y ≈ 150–1150). Muito espaço negativo. A legenda fica sozinha na faixa central-inferior. |

## 2. Legenda (o que mais segura)

- **Uma linha curta** (2–4 palavras), centralizada em **y ≈ 1270**, Inter 800 ~60 px, **caixa normal** (não CAIXA-ALTA, não pílula colorida).
- **Karaokê por opacidade:** a palavra falada fica branca e as próximas aparecem apagadas (~38% de opacidade).
- **Palavras-chave na cor de destaque** (marca, número, verbo de impacto): "**Cloudflare**", "**88.900 estrelas**", "**HyperFrames da HeyGen**".
- Nomes próprios sempre com a grafia correta (Claude, HeyGen etc.).

## 3. Estrutura narrativa e ritmo

- **Cena nova a cada ~5–7 s** (média medida: 5,5–7,1 s; mínimo ~3 s). Dentro da cena, **algo muda a cada 1–2 s**: um elemento entra, um contador sobe, um item é marcado.
- Fala em ~2,7 palavras/s. Cada elemento entra **na palavra exata** em que é dito.
- **Gancho no quadro 0** com um elemento gráfico forte:
  - selo `#1` + "EM ALTA NO GITHUB · ESTA SEMANA";
  - logo da marca + "A CLOUDFLARE LIBEROU **GRÁTIS**";
  - comparação lado a lado ("o mesmo Claude": chatbot × operação inteira).
- **Listas numeradas** quando há vários itens. Cabeçalho fixo:
  - número dentro de um quadrado com borda colorida;
  - título + kicker mono embaixo;
  - **bolinhas de progresso** (●●○○○) à direita.
- **Viradas com tipografia gigante:**
  - "NÃO" em vermelho + texto riscado ("roubar código-fonte");
  - "MILHARES DE FALHAS";
  - "A PARTE MAIS INTERESSANTE ↓";
  - "narração não é **prova**".
- **Números heróis com contador:** ☆ 0 → 88.872 / 5 mil → 28 mil, com o kicker mono "ESTRELAS NO GITHUB". Só números falados.
- **Prova real na tela:**
  - card de repositório do GitHub fiel (owner/repo, descrição, tópicos, Star/Fork);
  - terminal com o comando real;
  - prints/demos oficiais;
  - recriação de interface (Gmail, checkout, relatório) quando não há print, marcada como ilustrativa se traz dados.
- **Diagramas simples:** nós com ícone + rótulo ligados por linhas que se desenham (app → agente; time de agentes → verificador → só o confirmado).
- **Final em loop** (vídeo 4): termina voltando à cena de abertura ("o mesmo Claude"), o que incentiva rever.

## 4. Movimento

- Entradas curtas e limpas: sobe 70–140 px + fade (0,5–0,6 s, power3/expo out). Pop com leve "back" para ícones e selos. Slam (escala 1,9 → 1) só para palavras de impacto.
- Câmera viva: zoom lento de ~3,5% durante a cena.
- Transição: a cena sai subindo e encolhendo (0,32 s) e a próxima entra subindo. **Sem varredura colorida de tela cheia** e sem pílulas que pulam na legenda (isso é do lote 2/3).
- Brilho/realce (glow) para mostrar o item ativo, check animado em listas, linha riscando para negar algo.

## 5. CTA (sempre igual)

1. Pergunta curta em CAIXA-ALTA com 1 palavra colorida: "QUER O **LINK**?", "QUER VER **FUNCIONANDO**?".
2. Kicker mono `COMENTA A PALAVRA`.
3. **Palavra gigante** na cor de destaque (AUDITORIA, DECODE, GITHUB).
4. Caixa de comentário do Instagram (branca) **digitando** a palavra, com "Publicar".
5. Botão azul **Seguir** (quando a fala pede) + linha de logos/ícones das ferramentas citadas + chip "mais ferramentas de IA".

## 6. Áudio

- Narração intacta (sem corte, sem acelerar), sincronia verificada em 0 ms.
- Trilha eletrônica discreta sintetizada (pulso constante, ~100 bpm), com ducking sob a voz. Efeitos pontuais: whoosh na troca, pop em ícones, digitação no terminal, impacto no número/palavra herói, confirmação no check. Mix −14 LUFS.

## 7. Entrega

1080×1920, 30 fps, H.264 + AAC 48 kHz, −14 LUFS, **sem metadados** (regra do projeto), capa sem metadados, legendas .srt, TIMELINE.md.

## 8. O que NÃO fazer (diferenças em relação aos lotes 2 e 3)

- Fundo claro/bege, paletas diferentes por vídeo fugindo do azul-marinho.
- Legenda em CAIXA-ALTA com pílula colorida pulando em cada palavra.
- Varreduras diagonais coloridas de tela cheia entre cenas.
- Adesivos coloridos em excesso. No estilo campeão, os adesivos são raros e pequenos (chips discretos).

## 9. Como produzir neste estilo

Use o gerador `Video` **sem** `kit2: true` (base.css + fx.js), `ctaHtml/ctaJs` de `lib/common.mjs` e `ghRepo` de `lib/build.mjs`, como em `_tooling/v1_cloudflare.mjs` / `v2_reverse.mjs` / `v3_github.mjs`.
