"""Gera music_plan.json de cada vídeo do lote 3: estilo + energia por cena (cenas lidas do index.html)."""
import json, re, sys
ROOT = "/home/user/trindayy/REELS_IA_LOTE3"
P = {  # energia por cena, na ordem; flags: drop (impacto), break (só pad: virada da fala), stop (corte seco antes do CTA)
 "01_OPEN_HIGGSFIELD": ("lime_future",  [.8, (.9, "drop"), .7, (1, "stop")]),
 "02_XTOOL":          ("apple_pop",    [.6, .75, (.9, "drop"), .6, .8, (.9, "drop"), .85, (1, "drop"), .7, .8, (1, "stop")]),
 "03_HIGGSFIELD":     ("cine_trap",    [.7, .45, (.9, "drop"), .8, (.3, "break"), (.9, "drop"), (1, "stop")]),
 "04_PS5":            ("arcade_wave",  [.8, (.9, "drop"), .5, (.9, "drop"), .7, .8, .7, (.3, "break"), (.85, "drop"), (1, "stop")]),
 "05_INSTINCT":       ("biz_groove",   [.7, .5, (.8, "drop"), .6, .7, .6, (.3, "break"), (.85, "drop"), .7, .9, .5, .7, (.95, "drop"), .8, (1, "stop")]),
 "06_WHATSAPP":       ("warm_tropical", [.75, .45, (.9, "drop"), .65, .7, .85, (.9, "drop"), (.4, "break"), (1, "stop")]),
 "07_WA_AKG":         ("dash_tech",    [.7, (.85, "drop"), .65, .75, (.95, "drop"), .7, .8, (1, "stop")]),
}
for d in (sys.argv[1:] or P):
    style, en = P[d]
    html = open(f"{ROOT}/{d}/projeto/index.html").read()
    starts = [float(x) for x in re.findall(r'<section id="\w+" class="scene clip[^"]*" data-start="([\d.]+)"', html)]
    assert len(starts) == len(en), (d, len(starts), len(en))
    secs = [[t, e if isinstance(e, (int, float)) else e[0], [] if isinstance(e, (int, float)) else [e[1]]] for t, e in zip(starts, en)]
    json.dump({"style": style, "sections": secs, "db": -23, "duck": 0.55}, open(f"{ROOT}/{d}/projeto/music_plan.json", "w"), indent=1)
    print(d, style, len(secs), "cenas")
