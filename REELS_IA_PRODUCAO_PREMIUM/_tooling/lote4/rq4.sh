#!/usr/bin/env bash
# rq.sh NN_NAME [NN_NAME...] — serialized renders (waits for any other render, then takes a lock)
ROOT=/home/user/trindayy/REELS_IA_LOTE4
LOCK=/tmp/claude-0/-home-user-trindayy/1378b459-0312-52ab-8ea9-0245d7c13e68/scratchpad/render.lock
for p in "$@"; do
  exec 9>"$LOCK"; flock 9
  while pgrep -f "hyperframes(@[0-9.]+)? render" >/dev/null; do sleep 10; done
  cd "$ROOT/$p/projeto" || { flock -u 9; continue; }
  echo "[$(date +%T)] start $p"
  if npx --yes hyperframes render -o renders/render.mp4 -q delivery --fps 30 > renders.log 2>&1; then
    echo "[$(date +%T)] done $p $(ffprobe -v error -show_entries format=duration -of csv=p=0 renders/render.mp4)"
  else
    echo "[$(date +%T)] FAIL $p (see $p/projeto/renders.log)"
  fi
  flock -u 9
done
