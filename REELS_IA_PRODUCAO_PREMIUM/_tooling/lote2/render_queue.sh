#!/usr/bin/env bash
# render_queue.sh NN_NAME [NN_NAME...] — renders each project sequentially to projeto/renders/render.mp4
ROOT=/home/user/trindayy/REELS_IA_LOTE2
for p in "$@"; do
  cd "$ROOT/$p/projeto" || continue
  echo "[$(date +%T)] start $p"
  if npx --yes hyperframes render -o renders/render.mp4 -q delivery --fps 30 > renders.log 2>&1; then
    echo "[$(date +%T)] done $p $(ffprobe -v error -show_entries format=duration -of csv=p=0 renders/render.mp4)"
  else
    echo "[$(date +%T)] FAIL $p (see $p/projeto/renders.log)"
  fi
done
