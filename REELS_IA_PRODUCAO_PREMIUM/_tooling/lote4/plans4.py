"""Gera music_plan.json de cada vídeo do lote 3: estilo + energia por cena (cenas lidas do index.html)."""
import json, re, sys
ROOT = "/home/user/trindayy/REELS_IA_LOTE4"
P = {
 "01_AGENCIA_CLAUDE": ("lime_future", [.8, (.9, "drop"), .75, .8, (.95, "drop"), .85, (1, "stop")]),
 "02_SAAS": ("dash_tech", [.7, (.85, "drop"), .7, .8, .7, .8, .75, (.9, "drop"), .75, .8, .7, .85, .75, (.9, "drop"), (1, "stop")]),
 "03_TOP3_GITHUB": ("arcade_wave", [.85, (.9, "drop"), .75, (.9, "drop"), .8, .7, (.95, "drop"), .8, .85, (1, "stop")]),
}
for d in (sys.argv[1:] or P):
    style, en = P[d]
    if en is None: continue
    html = open(f"{ROOT}/{d}/projeto/index.html").read()
    starts = [float(x) for x in re.findall(r'<section id="\w+" class="scene clip[^"]*" data-start="([\d.]+)"', html)]
    assert len(starts) == len(en), (d, len(starts), len(en))
    secs = [[t, e if isinstance(e, (int, float)) else e[0], [] if isinstance(e, (int, float)) else [e[1]]] for t, e in zip(starts, en)]
    json.dump({"style": style, "sections": secs, "db": -23, "duck": 0.55}, open(f"{ROOT}/{d}/projeto/music_plan.json", "w"), indent=1)
    print(d, style, len(secs), "cenas")

