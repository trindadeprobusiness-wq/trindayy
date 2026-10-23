# Instruções do projeto

## Vídeos (Reels / qualquer vídeo produzido)

- **Todo vídeo entregue deve sair SEM metadados.** Antes de entregar qualquer MP4, rode
  `REELS_IA_PRODUCAO_PREMIUM/_tooling/strip_metadata.sh <render.mp4> <final.mp4> [mix_sem_perdas.wav]`
  (ou `node REELS_IA_PRODUCAO_PREMIUM/_tooling/finalize.mjs`, que já faz isso).
  O script remove tags do container (encoder, hyperframes_version/renderer, creation_time),
  capítulos, o bloco SEI do x264 e a assinatura "Lavc" do encoder AAC — copiando o stream
  de vídeo sem recompressão. Confirme depois com `ffprobe -show_entries format_tags:stream_tags`.
- Capas/imagens entregues também saem sem metadados (PNG regravado sem chunks de texto/EXIF).
- Isso é **verificado automaticamente**: o hook `.claude/hooks/check_video_metadata.sh` (configurado em
  `.claude/settings.json`, evento Stop) varre todos os .mp4/.mov do repositório — exceto `renders/`,
  `.hyperframes/`, `referencia/` e `referencias/` (material de entrada enviado pelo usuário, que nunca é alterado) — e impede finalizar enquanto algum ainda tiver metadados.
- Formato padrão dos Reels: 1080×1920, 30 fps, H.264 + AAC 48 kHz, −14 LUFS.

## Estilo de edição padrão (o que mais performa no perfil)

- **Todo vídeo novo usa o ESTILO CAMPEÃO** descrito em `ESTILOS_DE_EDICAO/ESTILO_CAMPEAO_TRINDAYY.md`.
  - Ele vem dos 3 Reels que mais deram resultado: `ESTILOS_DE_EDICAO/referencias/trindayy_4|5|6.mp4`, que são os vídeos do lote 1.
  - Em resumo: fundo azul-marinho escuro, 1 cor de destaque por vídeo, legenda karaokê em caixa normal (palavra atual branca, próximas apagadas, palavras-chave coloridas), listas numeradas com bolinhas de progresso, números com contador, prova real (card do GitHub, terminal, prints) e CTA "COMENTA A PALAVRA" com a caixa do Instagram digitando.
  - Gere com o motor do lote 1 (`lib/build.mjs` sem `kit2`, `lib/common.mjs`), como em `_tooling/v1_cloudflare.mjs`.
- Combine com o `ESQUELETO_UNIVERSAL_DE_EDICAO.md`. Só fuja desse estilo se o usuário pedir.
