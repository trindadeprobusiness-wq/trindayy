#!/usr/bin/env bash
# prep3.sh NN_NAME <narration-basename-without-ext> <reference-id> <voice-slug>
set -euo pipefail
ROOT=/home/user/trindayy/REELS_IA_LOTE4
IN=/home/user/trindayy/REELS_IA_PRODUCAO_PREMIUM/_entrada_lote4
d="$ROOT/$1"; mkdir -p "$d/narracao" "$d/referencia" "$d/legendas"
if [ ! -f "$d/projeto/hyperframes.json" ]; then
  (cd "$ROOT" && npx --yes hyperframes init "$1/projeto" --non-interactive --example=blank --skill=general-video >/dev/null 2>&1 || true)
fi
cp --update=none "$IN/narracoes/$2.mp3" "$d/narracao/narracao_$4.mp3"
cp --update=none "$IN/transcricoes/$2.json" "$d/narracao/palavras_raw.json"
cp --update=none "$IN/referencias/$3"*.mp4 "$d/referencia/"
