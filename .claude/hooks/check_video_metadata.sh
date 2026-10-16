#!/usr/bin/env bash
# Stop hook: no delivered video may keep metadata.
# Scans every .mp4/.mov in the repo except intermediate renders, HyperFrames work
# dirs and the user's original reference footage. If any still carries encoder /
# HyperFrames / creation tags or encoder signatures, blocks the stop and tells
# Claude to run strip_metadata.sh.
input="$(cat)"
root="${CLAUDE_PROJECT_DIR:-$(git rev-parse --show-toplevel 2>/dev/null || pwd)}"
cd "$root" || exit 0
command -v ffprobe >/dev/null || exit 0

bad=()
while IFS= read -r -d '' f; do
  tags="$(ffprobe -v error -show_entries format_tags=encoder,creation_time,hyperframes_version,hyperframes_renderer,comment,title,artist:stream_tags=encoder,creation_time -of default=nw=1 "$f" 2>/dev/null)"
  sig="$(strings -n 8 "$f" 2>/dev/null | grep -cE 'x264 - core|Lavf[0-9]|Lavc[0-9]|hyperframes')"
  if [ -n "$tags" ] || [ "${sig:-0}" -gt 0 ]; then bad+=("$f"); fi
done < <(find . \( -path ./node_modules -o -path '*/node_modules' -o -path '*/renders' -o -path '*/.hyperframes' -o -path '*/referencia' -o -path '*/referencias' -o -path ./.git \) -prune -o \( -iname '*.mp4' -o -iname '*.mov' \) -type f -print0)

[ ${#bad[@]} -eq 0 ] && exit 0

list="$(printf '%s, ' "${bad[@]}")"; list="${list%, }"
msg="Vídeos entregues ainda com metadados: ${list}. Regra do projeto (CLAUDE.md): todo vídeo sai SEM metadados. Rode REELS_IA_PRODUCAO_PREMIUM/_tooling/strip_metadata.sh <entrada> <saida> [mix.wav] em cada um (ou node REELS_IA_PRODUCAO_PREMIUM/_tooling/finalize.mjs) e confirme com ffprobe."
# avoid an endless stop loop: on a re-check after a block, warn instead of blocking again
if [ "$(printf '%s' "$input" | jq -r '.stop_hook_active // false' 2>/dev/null)" = "true" ]; then
  jq -n --arg m "$msg" '{systemMessage: $m}'
else
  jq -n --arg r "$msg" '{decision: "block", reason: $r}'
fi
exit 0
