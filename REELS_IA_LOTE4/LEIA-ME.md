# Reels IA — Lote 4 (3 vídeos · ESTILO CAMPEÃO)

Produzidos no estilo que mais performa no perfil (`ESTILOS_DE_EDICAO/ESTILO_CAMPEAO_TRINDAYY.md`), com a estrutura e o ritmo das referências (aighostlab, destravandosaas, lowcodepedro).

| # | Vídeo | Narração | Duração | CTA |
|---|---|---|---|---|
| 01 | AGÊNCIA DE 13 CLAUDES | Lendário 10:18 | 0:34 | SKILL + seguir |
| 02 | DESMONTANDO UM SaaS (13 peças) | Mário 10:20 | 2:20 | "qual peça você quer ver desmontada?" |
| 03 | TOP 3 DO GITHUB (OpenCode, Plandex, Goose) | Mário 10:22 | 1:27 | REPOSITÓRIO |

Cada pasta tem:

| Arquivo | O que é |
|---|---|
| `FINAL_*.mp4` | Com trilha de retenção, sem metadados |
| `FINAL_*_sem_musica.mp4` | Só voz e efeitos, sem metadados |
| `capa_instagram.png` | Capa, sem metadados |
| `TIMELINE.md` | Cenas e efeitos |
| `legendas/legendas.srt` | Legendas |
| `narracao/` | Narração original |
| `referencia/` | Vídeo de referência |
| `projeto/` | Projeto HyperFrames editável |

Formato: 1080×1920, 30 fps, H.264 + AAC 48 kHz, −14 LUFS.

## Regras seguidas

- Narração intacta: sem cortes, sem aceleração. Sincronia conferida por correlação.
- Legendas corrigidas: Claude/Claudes, SaaS, OpenCode, OpenClaw, "tokens" (a voz diz "Tolkien"), "proibido".
- Material real:
  - Cards dos repositórios `anomalyco/opencode`, `plandex-ai/plandex` e `aaif-goose/goose` (avatares, descrições e logos dos READMEs).
  - Comando real de instalação do OpenCode.
  - Logos oficiais (Claude, OpenAI, Gemini, GitHub).
- Sem números que a voz não fala (nenhuma estrela ou download inventado).
- O que é ilustrativo está marcado como "exemplo" na tela:
  - pedidos ao Claude, painéis da agência e checklist do Plandex;
  - comparação de peso entre Hermes, OpenClaw e Goose;
  - IP e chave fictícios (mascarados).
- Vídeo 01: a narração não diz o nome da skill, então não há card de repositório inventado.
- Trilha de retenção sintetizada do zero, que muda junto com os cortes e faz uma pausa seca antes do CTA.
- Metadados removidos de todos os MP4 e PNG.

## Refazer

```bash
cd REELS_IA_PRODUCAO_PREMIUM/_tooling/lote4
node l02_saas.mjs && python3 -I plans4.py 02_SAAS
cd ../../../REELS_IA_LOTE4/02_SAAS/projeto
python3 -I ../../../REELS_IA_PRODUCAO_PREMIUM/_tooling/audio.py ../narracao/narracao_mario.mp3 sfx_cues.json assets/mix.wav --plan music_plan.json --tail 1.3
npx hyperframes render -o renders/render.mp4 -q delivery --fps 30
cd ../../../REELS_IA_PRODUCAO_PREMIUM/_tooling/lote4 && node finalize4.mjs 02_SAAS
```

Descrições prontas: `DESCRICOES_INSTAGRAM.md`.
