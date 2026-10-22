# Reels IA — Lote 3 (7 vídeos)

Cada pasta tem:

| Arquivo | O que é |
|---|---|
| `FINAL_NN_*.mp4` | Vídeo final 1080×1920, 30 fps, H.264 + AAC 48 kHz, −14 LUFS, com trilha. **Sem metadados** |
| `FINAL_NN_*_sem_musica.mp4` | O mesmo vídeo **sem música de fundo** (voz + efeitos), −14 LUFS, também sem metadados |
| `capa_instagram.png` | Capa 1080×1920 (conteúdo no centro, para o recorte do grid), sem metadados |
| `TIMELINE.md` | Cena a cena com tempos e lista de efeitos sonoros |
| `legendas/legendas.srt` | Legendas PT-BR sincronizadas palavra a palavra |
| `narracao/` | Narração original (intacta) + alinhamento palavra a palavra |
| `referencia/` | Vídeo de referência enviado |
| `projeto/` | Projeto HyperFrames editável |

| # | Vídeo | Narração | Duração | CTA |
|---|---|---|---|---|
| 01 | OPEN HIGGSFIELD — alternativa aberta para gerar vídeos | Lendário 17:35 | 0:24 | VÍDEO |
| 02 | XTOOL + CLAUDE CODE — apps de iPhone sem Mac | Mário 17:38 | 1:29 | APP |
| 03 | HIGGSFIELD — o que o repositório realmente é | Mário 17:39 | 0:49 | HIGGSFIELD |
| 04 | PS5 NO PC — AnyPS5 (experimental) | Lendário 18:00 | 1:00 | PS5 |
| 05 | INSTINCT — o modelo de negócio | Mário 18:05 | 2:04 | enquete (opinião) |
| 06 | CLAUDE NO WHATSAPP — Kapso em 3 passos | Lendário 18:12 | 0:59 | WHATSAPP |
| 07 | WA-AKG — WhatsApp + seus sistemas | Lucas 18:20 | 0:52 | API |

## Regras seguidas

- Narração nunca reescrita, cortada ou acelerada. Sincronia conferida por correlação: 0 ms em todos.
- Imagens reais sempre que existem:
  - Repositórios: avatares, descrições e diagramas dos READMEs.
  - Open-Higgsfield: banner e demo do app.
  - xtool: telas reais do tutorial, código e saída do `xtool dev`.
  - Higgsfield: diagrama de arquitetura.
  - WA-AKG: estrutura de pastas e pacote n8n.
- O que é ilustrativo está marcado como "exemplo" na tela. Nenhum número inventado: só aparecem os que a voz fala.
- Sem logos de terceiros que não foram fornecidos (Kapso, WhatsApp, PlayStation) e sem arte do GTA VI: tipografia e ícones neutros.
- Legendas corrigidas onde a pronúncia ou a transcrição não bate com o nome real:
  - Claude, xtool, Xcode e SwiftUI.
  - AnyPS5 (a voz diz "NPS 5").
  - Kapso (a voz diz "Capsu").
  - WA-AKG, n8n e Higgsfield.
  - A gagueira "não é a É apenas" aparece limpa na legenda; o áudio não foi mexido.
- Trilha de retenção própria em cada vídeo (`_tooling/music3.py`, plano em `projeto/music_plan.json`), sintetizada do zero, sem samples de terceiros:
  - Energia desde o 1º segundo e um tema melódico curto que volta nos picos.
  - A música muda junto com cada corte de cena: subida antes, impacto na entrada.
  - Quebra (só o pad) nas viradas da fala e pausa seca antes do CTA.
  - Abaixa sozinha sob a voz (ducking).
  - Estilos: 01 future bass lima · 02 pop eletrônico com marimba · 03 trap cinematográfico · 04 synthwave arcade · 05 groove house com acordes jazz · 06 tropical quente · 07 tech house minimal.
- Metadados removidos de todos os MP4 e PNG (`_tooling/strip_metadata.sh`, conferido com `ffprobe` e pelo hook do repositório).

## Refazer / editar

```bash
cd REELS_IA_PRODUCAO_PREMIUM/_tooling/lote3
node l02_xtool.mjs                       # regenera o projeto do vídeo 02
cd ../../../REELS_IA_LOTE3/02_XTOOL/projeto
python3 -I ../../../REELS_IA_PRODUCAO_PREMIUM/_tooling/audio.py ../narracao/narracao_mario.mp3 sfx_cues.json assets/mix.wav --plan music_plan.json --tail 1.27
python3 -I ../../../REELS_IA_PRODUCAO_PREMIUM/_tooling/audio.py ../narracao/narracao_mario.mp3 sfx_cues.json assets/mix_sem_musica.wav --no-music --tail 1.27
npx hyperframes render -o renders/render.mp4 -q delivery --fps 30
cd ../../../REELS_IA_PRODUCAO_PREMIUM/_tooling/lote3 && node finalize3.mjs 02_XTOOL   # FINAL com e sem música, sem metadados
```

Descrições prontas para postar: `DESCRICOES_INSTAGRAM.md`.
