# Reels IA — Lote 2 (9 vídeos)

Cada pasta tem:

| Arquivo | O que é |
|---|---|
| `FINAL_NN_*.mp4` | Vídeo final 1080×1920, 30 fps, H.264 + AAC 48 kHz, −14 LUFS — **sem metadados** |
| `FINAL_NN_*_sem_musica.mp4` | Mesmo vídeo **sem a música de fundo** (só narração + efeitos), −14 LUFS, também sem metadados |
| `capa_instagram.png` | Capa 1080×1920 (conteúdo centralizado para o recorte do grid), sem metadados |
| `TIMELINE.md` | Cena a cena com tempos e lista de efeitos sonoros |
| `legendas/legendas.srt` | Legendas PT-BR sincronizadas palavra a palavra |
| `narracao/` | Narração original (intacta) + alinhamento palavra a palavra |
| `referencia/` | Vídeo de referência enviado |
| `projeto/` | Projeto HyperFrames editável (`index.html`, `assets/`, `assets/stems/` com trilha e efeitos separados) |

| # | Vídeo | Narração | Duração | CTA |
|---|---|---|---|---|
| 01 | STACK — a stack que turbina o Claude Code | Lendário 23:58 | 1:17 | STACK + seguir |
| 02 | INTERFACE — interfaces a partir de referência | Lucas 23:59 | 0:49 | INTERFACE |
| 03 | RUFLO — equipe de agentes | Mário 00:02 | 1:46 | RUFLO + seguir |
| 04 | AGENTES — Agency Agents | Lendário 00:03 | 1:12 | AGENTES |
| 05 | DESIGN — design com referências | Mário 00:04 | 1:03 | DESIGN + seguir |
| 06 | CÓDIGO — do terminal ao resultado testado | Lendário 00:05 | 0:42 | CÓDIGO |
| 07 | TOKENS — pare de desperdiçar tokens | Mário 00:07 | 1:13 | TOKENS + seguir |
| 08 | DESIGN GRÁTIS — alternativas open source | Lendário 00:08 | 1:05 | DESIGN GRÁTIS + seguir |
| 09 | MODELOS — vários modelos de IA | Lendário 00:10 | 0:54 | MODELOS |

## Regras seguidas

- Narração nunca reescrita, cortada ou acelerada (sincronia verificada por correlação: 0 ms em todos).
  Alguns vídeos terminam com ~1 s a mais de trilha depois da última palavra, para o CTA respirar.
- Imagens reais das ferramentas: repositórios (OmniRoute, Headroom, Ruflo, Agency Agents, Taste Skill,
  Awesome DESIGN.md, ScrapeGraphAI, Penpot, Krita, GIMP, Blender, Excalidraw) e ícones oficiais de provedores.
  Nada de números ou resultados inventados; o que é ilustrativo está indicado na tela.
- Legendas corrigidas onde a transcrição automática errou ("Cloud" → "Claude", "Atender" → "entender", "E tapas" → "Etapas").
- Trilha e efeitos sintetizados do zero (sem samples de terceiros), com ducking sob a voz.
- Metadados removidos de todos os MP4 e PNG (`_tooling/strip_metadata.sh`; conferido com `ffprobe` e pelo hook do repositório).

## Refazer / editar

```bash
cd REELS_IA_PRODUCAO_PREMIUM/_tooling/lote2
node l03_ruflo.mjs                                   # regenera o projeto do vídeo 03
cd ../../../REELS_IA_LOTE2/03_RUFLO/projeto
python3 -I ../../../REELS_IA_PRODUCAO_PREMIUM/_tooling/audio.py ../narracao/narracao_mario.mp3 sfx_cues.json assets/mix.wav --key E --bpm 118
npx hyperframes render -o renders/render.mp4 -q delivery --fps 30
cd ../../../REELS_IA_PRODUCAO_PREMIUM/_tooling/lote2 && node finalize2.mjs 03_RUFLO   # gera o FINAL sem metadados
```

Versão sem música: `audio.py ... assets/mix_sem_musica.wav --no-music [--tail N]` e depois
`strip_metadata.sh projeto/renders/render.mp4 FINAL_..._sem_musica.mp4 projeto/assets/mix_sem_musica.wav`.

Descrições prontas para postar: `DESCRICOES_INSTAGRAM.md`.
