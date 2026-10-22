"""Trilhas de retenção (lote 3) — sintetizadas do zero, uma identidade por vídeo.

Princípios de retenção aplicados:
  * energia desde o 1º segundo (sem fade-in longo) e "hook" melódico curto que volta nos picos;
  * a música MUDA junto com cada corte de cena: riser antes da troca, impacto (sub-boom) na entrada;
  * curva de energia por cena (build → drop), com BREAKDOWN (só pad filtrado) nas viradas da fala
    ("mas atenção", "só que existe um detalhe"…) e retorno com tudo depois;
  * pausa seca de 1 tempo antes do CTA + acerto final;
  * bombeamento (sidechain) no kick para dar pulso sem brigar com a voz.
Uso: from music3 import track; m = track(style, dur, sections)  (sections = [(t0, energia, flags), ...])
"""
import numpy as np
from scipy import signal

SR = 48000
mid = lambda m: 440.0 * 2 ** ((m - 69) / 12)


def lp(x, f, o=2):
    return signal.sosfilt(signal.butter(o, min(f, SR / 2 - 200), "low", fs=SR, output="sos"), x)


def hp(x, f, o=2):
    return signal.sosfilt(signal.butter(o, f, "high", fs=SR, output="sos"), x)


def bp(x, lo, hi, o=2):
    return signal.sosfilt(signal.butter(o, [lo, hi], "band", fs=SR, output="sos"), x)


def env(n, a, d, c=5.0):
    na = max(1, int(a * SR)); nd = max(1, n - na)
    return np.concatenate([np.linspace(0, 1, na), np.exp(-c * np.linspace(0, 1, nd))])[:n]


# ---------------- estilos (uma identidade por vídeo) ----------------
MINOR = [[0, 3, 7, 10], [-4, 0, 3, 7], [3, 7, 10, 14], [-2, 2, 5, 9]]          # i VI III VII
MAJOR = [[0, 4, 7, 11], [7, 11, 14, 17], [9, 12, 16, 19], [5, 9, 12, 16]]      # I V vi IV
JAZZ = [[0, 4, 7, 11], [9, 12, 16, 19], [2, 5, 9, 12], [7, 11, 14, 17]]        # Imaj7 vi7 ii7 V7
DARK = [[0, 3, 7, 10], [0, 3, 7, 10], [-4, 0, 3, 7], [-5, -1, 2, 7]]           # i i VI V
STYLES = {
    # nome: bpm, tônica (midi), progressão, timbre do lead, bateria, baixo, hook (graus em semitons, 8 colcheias; None = pausa)
    "lime_future":  dict(bpm=124, root=54, prog=MINOR, lead="saw",     drums="four",  bass="offbeat", hook=[12, None, 10, 7, None, 7, 10, 15], bright=1.0),
    "apple_pop":    dict(bpm=116, root=50, prog=MAJOR, lead="marimba", drums="pop",   bass="root8",   hook=[7, 9, 12, None, 14, 12, 9, None], bright=0.9),
    "cine_trap":    dict(bpm=140, root=57, prog=DARK,  lead="bell",    drums="trap",  bass="808",     hook=[12, None, 15, None, 14, 12, None, 10], bright=0.7),
    "arcade_wave":  dict(bpm=118, root=52, prog=MINOR, lead="square",  drums="four",  bass="root8",   hook=[12, 15, 19, 15, 22, 19, 15, 12], bright=0.85),
    "biz_groove":   dict(bpm=108, root=48, prog=JAZZ,  lead="bell",    drums="house", bass="offbeat", hook=[16, None, 14, 12, None, 11, 12, None], bright=0.8),
    "warm_tropical": dict(bpm=112, root=55, prog=MAJOR, lead="marimba", drums="tropic", bass="root8",  hook=[12, 14, None, 16, 19, None, 16, 14], bright=0.85),
    "dash_tech":    dict(bpm=122, root=50, prog=MINOR, lead="square",  drums="house", bass="offbeat", hook=[12, None, 12, 15, None, 10, 12, None], bright=0.8),
}


# ---------------- instrumentos ----------------
def lead_note(f, d, kind, rng):
    n = int(d * SR); t = np.arange(n) / SR
    if kind == "saw":
        x = sum(signal.sawtooth(2 * np.pi * f * (1 + dt) * t) for dt in (-0.004, 0, 0.004)) / 3
        x = lp(x, 4200) * env(n, 0.004, d, 4.5)
    elif kind == "square":
        x = signal.square(2 * np.pi * f * t, 0.5) * 0.6 + signal.square(2 * np.pi * f * 1.003 * t, 0.25) * 0.4
        x = lp(x, 3600) * env(n, 0.003, d, 5)
    elif kind == "marimba":
        x = (np.sin(2 * np.pi * f * t) * np.exp(-t * 7) + 0.35 * np.sin(2 * np.pi * 4.0 * f * t) * np.exp(-t * 28)
             + 0.15 * np.sin(2 * np.pi * 9.2 * f * t) * np.exp(-t * 60))
        x *= env(n, 0.002, d, 1.0)
    else:  # bell (FM)
        I = 2.2 * np.exp(-t * 6)
        x = np.sin(2 * np.pi * f * t + I * np.sin(2 * np.pi * 3.5 * f * t)) * np.exp(-t * 4.5) * env(n, 0.002, d, 0.6)
    return x


def pad_chord(freqs, d, warm):
    n = int(d * SR); t = np.arange(n) / SR; x = np.zeros(n)
    for f in freqs:
        for dt in (-0.006, 0.006):
            x += (signal.sawtooth(2 * np.pi * f * (1 + dt) * t, 0.5 if warm else 1.0)) * 0.5
    a = np.minimum(1, t / 0.08) * np.minimum(1, (d - t) / 0.12)
    return x * a / len(freqs)


def kick(sub=False):
    d = 0.42 if not sub else 0.9; n = int(d * SR); t = np.arange(n) / SR
    f = 48 + 120 * np.exp(-t * 32)
    x = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-t * (8 if not sub else 2.6))
    click = hp(np.random.default_rng(1).standard_normal(n), 3000) * np.exp(-t * 400) * 0.25
    return np.tanh((x + click) * 1.6)


def clap(rng):
    n = int(0.22 * SR); t = np.arange(n) / SR; x = np.zeros(n)
    for k, off in enumerate((0, 0.011, 0.022)):
        i = int(off * SR); m = n - i
        x[i:] += rng.standard_normal(m) * np.exp(-np.arange(m) / SR * (60 if k < 2 else 18))
    return bp(x, 900, 5000) * 0.9


def hat(rng, open_=False):
    d = 0.22 if open_ else 0.045; n = int(d * SR)
    return hp(rng.standard_normal(n), 7500) * np.exp(-np.arange(n) / SR * (14 if open_ else 90))


def riser(d, rng):
    n = int(d * SR); t = np.arange(n) / SR
    x = rng.standard_normal(n); out = np.zeros(n); blk = 1024
    for i in range(0, n, blk):
        fc = 400 * (12000 / 400) ** (i / n)
        out[i:i + blk] = bp(x[i:i + blk], fc / 1.5, min(fc * 1.5, 20000), 1)
    tone = np.sin(2 * np.pi * np.cumsum(200 * 4 ** (t / d)) / SR) * 0.25
    return (out * 0.8 + tone) * (t / d) ** 2.2


def boom(rng):
    n = int(1.4 * SR); t = np.arange(n) / SR
    sub = np.sin(2 * np.pi * np.cumsum(38 + 70 * np.exp(-t * 9)) / SR) * np.exp(-t * 2.2)
    crash = hp(rng.standard_normal(n), 4000) * np.exp(-t * 3.5) * 0.35
    return np.tanh(sub * 1.5) + crash


def place(out, x, t, g=1.0):
    i = int(round(t * SR))
    if i >= len(out) or i + len(x) <= 0: return
    a = max(0, -i); i = max(0, i); e = min(len(out), i + len(x) - a)
    out[i:e] += x[a:a + e - i] * g


# ---------------- trilha ----------------
def track(style, dur, sections, seed=7):
    """sections: lista ordenada de (t0, energia 0..1, flags) — flags: 'break' (só pad), 'stop' (corte seco antes), 'drop' (impacto)."""
    S = STYLES[style]; rng = np.random.default_rng(seed)
    bpm = S["bpm"]; beat = 60 / bpm; bar = 4 * beat; e8 = beat / 2; e16 = beat / 4
    n = int(dur * SR)
    L = {k: np.zeros(n) for k in ("pad", "lead", "bass", "kick", "clap", "hat", "fx")}
    root = S["root"]
    sec_at = lambda t: max([s for s in sections if s[0] <= t + 1e-6], key=lambda s: s[0], default=sections[0])
    KICK, SUB, CLAP = kick(), kick(True), clap(rng)
    nbars = int(np.ceil(dur / bar)) + 1
    for b in range(nbars):
        t0 = b * bar
        if t0 >= dur: break
        ch = S["prog"][b % 4]
        # pad (sempre)
        freqs = [mid(root - 12 + iv) for iv in ch]
        p = pad_chord(freqs, bar + 0.02, S["drums"] in ("tropic", "pop"))
        place(L["pad"], p, t0)
        for k in range(16):  # 16 semicolcheias por compasso
            t = t0 + k * e16
            if t >= dur: break
            _, en, fl = sec_at(t)
            brk = "break" in fl
            d_ = S["drums"]
            # ---- bateria
            if not brk and en >= 0.55:
                if d_ in ("four", "house", "pop", "tropic"):
                    if k % 4 == 0 and not (d_ == "tropic" and k == 8): place(L["kick"], KICK, t)
                    if d_ == "tropic" and k in (6, 10): place(L["kick"], KICK, t, 0.6)
                    if k in (4, 12) and en >= 0.7: place(L["clap"], CLAP, t)
                elif d_ == "trap":
                    if k in (0, 11) or (k == 6 and b % 2): place(L["kick"], SUB, t, 0.9)
                    if k == 8 and en >= 0.7: place(L["clap"], CLAP, t)
            if not brk and en >= 0.35:
                if d_ in ("house", "four", "tropic"):
                    if k % 4 == 2: place(L["hat"], hat(rng, True), t, 0.5)
                    elif k % 2 == 1 and en >= 0.6: place(L["hat"], hat(rng), t, 0.35)
                elif d_ == "pop":
                    if k % 2 == 0: place(L["hat"], hat(rng), t, 0.45 if k % 4 else 0.25)
                elif d_ == "trap":
                    roll = (b % 4 == 3 and k >= 12)
                    if roll:
                        for r in range(3): place(L["hat"], hat(rng), t + r * e16 / 3, 0.35)
                    else: place(L["hat"], hat(rng), t, 0.4 if k % 2 == 0 else 0.22)
            # ---- baixo
            if not brk and en >= 0.35:
                fb = mid(root - 24 + ch[0])
                if S["bass"] == "offbeat" and k % 4 == 2:
                    x = np.sin(2 * np.pi * fb * np.arange(int(e8 * SR)) / SR); x = np.tanh(x * 2) * env(len(x), 0.004, e8, 3)
                    place(L["bass"], x, t)
                elif S["bass"] == "root8" and k % 2 == 0:
                    m_ = int(e8 * 0.9 * SR); tt = np.arange(m_) / SR
                    x = lp(signal.sawtooth(2 * np.pi * fb * tt), 420) * env(m_, 0.004, e8, 3)
                    place(L["bass"], x * (1.0 if k % 4 == 0 else 0.7), t)
                elif S["bass"] == "808" and k in (0, 11):
                    m_ = int(beat * 1.6 * SR); tt = np.arange(m_) / SR
                    x = np.tanh(np.sin(2 * np.pi * fb * tt) * 2.5) * np.exp(-tt * 1.6)
                    place(L["bass"], x, t)
            # ---- lead: hook nos picos, arpejo no resto (filtrado conforme energia)
            if k % 2 == 0:
                step = (k // 2) % 8
                if en >= 0.75 and not brk:
                    iv = S["hook"][step]
                    if iv is not None:
                        place(L["lead"], lead_note(mid(root + iv), e8 * 1.8, S["lead"], rng), t, 1.0)
                elif en >= 0.2:
                    iv = ch[[0, 2, 1, 3, 2, 1, 3, 2][step]] + 12
                    place(L["lead"], lead_note(mid(root + iv), e8 * 1.5, S["lead"], rng), t, 0.55 if not brk else 0.4)
    # ---- filtros por energia (abre o brilho nos picos), mudanças exatas nos cortes
    cut = np.zeros(n); pumpmask = np.zeros(n)
    for i, (s0, en, fl) in enumerate(sections):
        a = int(s0 * SR); e = int(sections[i + 1][0] * SR) if i + 1 < len(sections) else n
        cut[a:e] = 0.25 if "break" in fl else en
        pumpmask[a:e] = 0 if ("break" in fl or en < 0.55) else 1
    cut = signal.sosfilt(signal.butter(1, 4, fs=SR, output="sos"), cut)
    def dyn_lp(x, lo, hi):  # filtro que acompanha a energia (blocos)
        y = np.zeros_like(x); blk = 2048; zi = None
        for i in range(0, len(x), blk):
            fc = lo * (hi / lo) ** float(np.clip(cut[i], 0, 1))
            sos = signal.butter(2, min(fc, SR / 2 - 200), "low", fs=SR, output="sos")
            if zi is None: zi = np.zeros((sos.shape[0], 2))
            y[i:i + blk], zi = signal.sosfilt(sos, x[i:i + blk], zi=zi)
        return y
    br = S["bright"]
    L["pad"] = dyn_lp(L["pad"], 350, 2600 * br)
    L["lead"] = dyn_lp(L["lead"], 900, 9000 * br)
    # ---- transições: riser antes de cada cena, impacto na entrada, corte seco antes do CTA
    for i, (s0, en, fl) in enumerate(sections):
        if i == 0: continue
        prev_en = sections[i - 1][1]
        if "stop" in fl:
            a = int((s0 - beat) * SR); b_ = int(s0 * SR)
            for k in L: L[k][max(0, a):b_] *= np.linspace(1, 0, max(1, b_ - max(0, a))) ** 6
            place(L["fx"], boom(rng), s0, 1.0)
            continue
        rd = bar if en > prev_en + 0.15 or "drop" in fl else beat * 2
        place(L["fx"], riser(rd, rng), s0 - rd, 0.55 if rd == bar else 0.35)
        if "drop" in fl or en >= 0.8: place(L["fx"], boom(rng), s0, 0.9 if "drop" in fl else 0.6)
        else: place(L["fx"], boom(rng), s0, 0.3)
    # ---- sidechain do kick (pulso) em pad/baixo/lead
    pump = np.ones(n)
    shape = 1 - 0.55 * np.exp(-np.arange(int(beat * SR)) / SR * 9)
    for i in range(0, n, int(beat * SR)):
        e = min(n, i + len(shape)); pump[i:e] = shape[: e - i]
    pump = 1 - (1 - pump) * pumpmask
    mix = (L["pad"] * 0.55 + L["lead"] * 0.6 + L["bass"] * 0.75) * pump + L["kick"] * 0.95 + L["clap"] * 0.45 + L["hat"] * 0.35 + L["fx"] * 0.55
    mix = hp(mix, 30)
    fi = int(0.02 * SR); mix[:fi] *= np.linspace(0, 1, fi)
    fo = int(1.0 * SR); mix[-fo:] *= np.linspace(1, 0, fo)
    return np.tanh(mix * 0.9)
