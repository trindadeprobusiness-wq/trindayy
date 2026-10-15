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
  `.hyperframes/` e `referencia/` — e impede finalizar enquanto algum ainda tiver metadados.
- Formato padrão dos Reels: 1080×1920, 30 fps, H.264 + AAC 48 kHz, −14 LUFS.
