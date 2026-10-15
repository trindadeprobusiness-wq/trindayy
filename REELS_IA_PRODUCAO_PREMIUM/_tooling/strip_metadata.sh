#!/usr/bin/env bash
# Remove all metadata from a finished video. The video stream is copied untouched
# (lossless); only metadata is dropped.
# Removes: container tags (encoder, hyperframes_version/renderer, creation_time…),
# stream encoder tags, chapters, the x264 SEI block (encoder name/settings inside
# the H.264 bitstream) and the "Lavc…" signature the AAC encoder writes inside the
# audio stream (audio is re-encoded in bitexact mode, ideally from the lossless mix).
# Usage: strip_metadata.sh <in.mp4> <out.mp4> [lossless_audio.wav]
set -euo pipefail
in="$1"; out="$2"; wav="${3:-}"
tmp="$(mktemp --suffix=.mp4)"
if [ -n "$wav" ]; then
  # duration of the rendered video, so the new audio never runs past it
  dur="$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$in")"
  ffmpeg -v error -y -i "$in" -i "$wav" -map 0:v:0 -map 1:a:0 -t "$dur" \
    -c:v copy -c:a aac -b:a 256k -ar 48000 -ac 2 \
    -map_metadata -1 -map_metadata:s -1 -map_chapters -1 \
    -bsf:v filter_units=remove_types=6 \
    -fflags +bitexact -flags:v +bitexact -flags:a +bitexact \
    -movflags +faststart "$tmp"
else
  ffmpeg -v error -y -i "$in" -map 0 -c:v copy -c:a aac -b:a 256k \
    -map_metadata -1 -map_metadata:s -1 -map_chapters -1 \
    -bsf:v filter_units=remove_types=6 \
    -fflags +bitexact -flags:v +bitexact -flags:a +bitexact \
    -movflags +faststart "$tmp"
fi
mv "$tmp" "$out"
