"""Procedural sound design + music bed + mix for the reels.

Everything here is synthesized from scratch (no third-party samples), so the
result is free to publish. Usage:
    python3 audio.py <narration.mp3> <sfx_cues.json> <out_mix.wav> [--key A|D|E|C] [--bpm N] [--tail SECONDS] [--no-music]
"""
import json, subprocess, sys
import numpy as np
from scipy import signal
import soundfile as sf

SR = 48000
rng = np.random.default_rng(1234)


def t_(d):
    return np.arange(int(d * SR)) / SR


def env_ad(n, a, d, curve=4.0):
    """attack/decay envelope over n samples (a, d in seconds)"""
    na = max(1, int(a * SR)); nd = max(1, n - na)
    e = np.concatenate([np.linspace(0, 1, na) ** 2, np.exp(-curve * np.linspace(0, 1, nd))])
    return e[:n]


def bp(x, lo, hi, order=2):
    sos = signal.butter(order, [lo, hi], btype="band", fs=SR, output="sos")
    return signal.sosfilt(sos, x)


def lp(x, f, order=2):
    sos = signal.butter(order, f, btype="low", fs=SR, output="sos")
    return signal.sosfilt(sos, x)


def hp(x, f, order=2):
    sos = signal.butter(order, f, btype="high", fs=SR, output="sos")
    return signal.sosfilt(sos, x)


def norm(x, peak=0.9):
    m = np.max(np.abs(x)) + 1e-9
    return x / m * peak


def sweep_noise(d, f0, f1, q=3.0):
    """band-passed noise whose centre frequency glides f0->f1 (time-varying, block-wise)"""
    n = int(d * SR); x = rng.standard_normal(n); out = np.zeros(n); blk = 512
    zi = None
    for i in range(0, n, blk):
        fr = i / n; fc = f0 * (f1 / f0) ** fr
        lo, hi = max(40, fc / (1 + 1 / q)), min(SR / 2 - 100, fc * (1 + 1 / q))
        sos = signal.butter(2, [lo, hi], btype="band", fs=SR, output="sos")
        if zi is None:
            zi = signal.sosfilt_zi(sos) * 0
        seg, zi = signal.sosfilt(sos, x[i:i + blk], zi=zi)
        out[i:i + blk] = seg
    return out


# ---------------- SFX library ----------------
def sfx_whoosh(d=0.55, up=True):
    x = sweep_noise(d, 300 if up else 3500, 3500 if up else 300, q=2.2)
    n = len(x); e = np.sin(np.linspace(0, np.pi, n)) ** 1.6
    return norm(x * e, 0.8)


def sfx_whoosh_s():
    return sfx_whoosh(0.32, True) * 0.85


def sfx_pop():
    d = 0.16; t = t_(d); f = 900 * np.exp(-t * 28) + 260
    x = np.sin(2 * np.pi * np.cumsum(f) / SR) * env_ad(len(t), 0.002, d, 7)
    return norm(x, 0.8)


def sfx_pop_multi():
    out = np.zeros(int(0.5 * SR))
    for k, p in enumerate([1.0, 1.12, 1.26, 1.4]):
        d = 0.13; t = t_(d); f = (760 * p) * np.exp(-t * 26) + 240 * p
        x = np.sin(2 * np.pi * np.cumsum(f) / SR) * env_ad(len(t), 0.002, d, 7)
        s = int(k * 0.1 * SR); out[s:s + len(x)] += x
    return norm(out, 0.8)


def sfx_click():
    d = 0.05; n = int(d * SR)
    x = hp(rng.standard_normal(n), 2500) * env_ad(n, 0.0005, d, 18)
    x += np.sin(2 * np.pi * 1800 * t_(d)) * env_ad(n, 0.0005, d, 25) * 0.5
    return norm(x, 0.7)


def sfx_typing(d=0.9, rate=16):
    out = np.zeros(int(d * SR)); r = np.random.default_rng(7)
    for k in range(int(d * rate)):
        s = int((k / rate + r.uniform(0, 0.02)) * SR); c = sfx_click() * r.uniform(0.35, 0.7)
        out[s:s + len(c)] += c[: len(out) - s]
    return norm(out, 0.55)


def sfx_impact():
    d = 0.9; t = t_(d)
    body = np.sin(2 * np.pi * (48 + 60 * np.exp(-t * 18)) * t) * env_ad(len(t), 0.002, d, 4.5)
    crack = lp(rng.standard_normal(len(t)), 2500) * env_ad(len(t), 0.001, d, 22) * 0.6
    tail = lp(rng.standard_normal(len(t)), 900) * env_ad(len(t), 0.01, d, 6) * 0.2
    return norm(body + crack + tail, 0.95)


def sfx_scan(d=1.0):
    t = t_(d); f = 600 + 1400 * t / d
    x = signal.sawtooth(2 * np.pi * np.cumsum(f) / SR) * 0.3
    x = bp(x, 500, 4000) + sweep_noise(d, 800, 5000, 4) * 0.6
    e = np.sin(np.linspace(0, np.pi, len(t))) ** 1.2
    return norm(x * e, 0.55)


def sfx_alert():
    out = np.zeros(int(0.45 * SR))
    for k, f in enumerate([660, 494]):
        d = 0.2; t = t_(d)
        x = (np.sign(np.sin(2 * np.pi * f * t)) * 0.25 + np.sin(2 * np.pi * f * t)) * env_ad(len(t), 0.004, d, 6)
        x = lp(x, 3500); s = int(k * 0.15 * SR); out[s:s + len(x)] += x
    return norm(out, 0.7)


def sfx_ding():
    d = 1.2; t = t_(d)
    x = sum(a * np.sin(2 * np.pi * f * t) for f, a in [(1318.5, 1), (2637, 0.35), (1975.5, 0.25)])
    return norm(x * env_ad(len(t), 0.003, d, 5), 0.6)


def sfx_confirm():
    out = np.zeros(int(0.7 * SR))
    for k, f in enumerate([880, 1318.5]):
        d = 0.45; t = t_(d)
        x = (np.sin(2 * np.pi * f * t) + 0.3 * np.sin(2 * np.pi * 2 * f * t)) * env_ad(len(t), 0.003, d, 6)
        s = int(k * 0.09 * SR); out[s:s + len(x)] += x
    return norm(out, 0.6)


def sfx_lock():
    a = sfx_click(); b = sfx_pop() * 0.6
    out = np.zeros(int(0.25 * SR)); out[: len(a)] += a; s = int(0.05 * SR); out[s:s + len(b)] += b
    return norm(out, 0.7)


def sfx_counter(d=1.0):
    out = np.zeros(int((d + 0.2) * SR)); k = 0; tt = 0.0
    while tt < d:
        f = 1500 + 900 * tt / d; dd = 0.03; t = t_(dd)
        x = np.sin(2 * np.pi * f * t) * env_ad(len(t), 0.001, dd, 10)
        s = int(tt * SR); out[s:s + len(x)] += x * 0.6
        tt += 0.075 * (1 - 0.55 * tt / d); k += 1
    return norm(out, 0.5)


def sfx_tick_roll():
    return sfx_counter(1.5) * 0.9


def sfx_riser(d=1.0):
    x = sweep_noise(d, 200, 6000, 3)
    t = t_(d); tone = np.sin(2 * np.pi * np.cumsum(220 + 660 * (t / d) ** 2) / SR) * 0.25
    e = (np.linspace(0, 1, len(x)) ** 2.2)
    return norm((x + tone) * e, 0.6)


def sfx_power():
    d = 0.6; t = t_(d); f = 120 + 900 * (1 - np.exp(-t * 7))
    x = signal.sawtooth(2 * np.pi * np.cumsum(f) / SR) * env_ad(len(t), 0.01, d, 4)
    return norm(lp(x, 2200), 0.55)


def sfx_stamp():
    d = 0.4; t = t_(d)
    thud = np.sin(2 * np.pi * (90 + 80 * np.exp(-t * 30)) * t) * env_ad(len(t), 0.001, d, 9)
    slap = bp(rng.standard_normal(len(t)), 300, 3000) * env_ad(len(t), 0.0005, d, 30)
    return norm(thud + slap * 0.8, 0.85)


def sfx_drop():
    return sfx_whoosh(0.5, False) * 0.8


def sfx_shimmer():
    d = 1.4; t = t_(d); out = np.zeros(len(t))
    for k, f in enumerate([1760, 2217, 2637, 3520, 2960]):
        s = int(k * 0.06 * SR); tt = t_(d - k * 0.06)
        x = np.sin(2 * np.pi * f * tt) * env_ad(len(tt), 0.004, len(tt) / SR, 5)
        out[s:s + len(x)] += x
    return norm(out, 0.45)


def sfx_glitch():
    d = 0.25; n = int(d * SR); x = rng.standard_normal(n)
    x = np.round(x * 3) / 3; x = bp(x, 800, 6000) * (np.arange(n) // 600 % 2)
    return norm(x * env_ad(n, 0.001, d, 5), 0.5)


LIB = {k[4:]: v for k, v in globals().items() if k.startswith("sfx_")}
CACHE = {}


def get_sfx(name):
    if name not in CACHE:
        CACHE[name] = LIB[name]()
    return CACHE[name]


# ---------------- Music bed ----------------
def music_bed(dur, bpm=100, key="A", seed=3):
    r = np.random.default_rng(seed)
    n = int(dur * SR); out = np.zeros(n); beat = 60 / bpm; bar = beat * 4
    root = {"A": 57, "D": 50, "E": 52, "C": 48}[key]
    # minor-ish progression i - VI - III - VII  (semitones from root)
    prog = [[0, 3, 7, 10], [-4, 0, 3, 7], [3, 7, 10, 14], [-2, 2, 5, 9]]
    mid = lambda m: 440 * 2 ** ((m - 69) / 12)
    nbars = int(np.ceil(dur / bar)) + 1
    for b in range(nbars):
        ch = prog[b % 4]; s = int(b * bar * SR); L = int(bar * SR * 1.05)
        if s >= n: break
        tt = np.arange(L) / SR; seg = np.zeros(L)
        for iv in ch:
            f = mid(root - 12 + iv)
            for det in (-0.12, 0.12):
                seg += signal.sawtooth(2 * np.pi * f * (1 + det / 100) * tt) * 0.08
        a = np.minimum(1, tt / 0.35) * np.minimum(1, (L / SR - tt) / 0.3)
        seg = lp(seg * a, 1100)
        e = min(n, s + L); out[s:e] += seg[: e - s]
        # sub
        fs = mid(root - 24 + ch[0])
        for k in range(4):
            ks = s + int(k * beat * SR); kd = 0.28; kt = t_(kd)
            kick = np.sin(2 * np.pi * (fs * 1.0 + 70 * np.exp(-kt * 30)) * kt) * env_ad(len(kt), 0.003, kd, 6) * (0.55 if k % 2 == 0 else 0.3)
            ke = min(n, ks + len(kick))
            if ks < n: out[ks:ke] += kick[: ke - ks]
        # arp (16ths)
        for k in range(16):
            ns = s + int(k * beat / 4 * SR)
            if ns >= n: break
            iv = ch[[0, 2, 1, 3, 2, 0, 3, 1][k % 8]] + (12 if k % 4 == 3 else 0)
            f = mid(root + iv); pd = 0.16; pt = t_(pd)
            pl = (np.sin(2 * np.pi * f * pt) + 0.25 * np.sin(2 * np.pi * 2 * f * pt)) * env_ad(len(pt), 0.002, pd, 9)
            pl *= 0.11 * (1.0 if k % 4 == 0 else 0.7) * r.uniform(0.85, 1.0)
            pe = min(n, ns + len(pl)); out[ns:pe] += pl[: pe - ns]
        # hats on 8ths
        for k in range(8):
            hs = s + int((k * beat / 2 + beat / 4) * SR)
            if hs >= n: break
            hd = 0.05; hn = int(hd * SR)
            h = hp(r.standard_normal(hn), 7000) * env_ad(hn, 0.0005, hd, 14) * (0.06 if k % 2 else 0.035)
            he = min(n, hs + hn); out[hs:he] += h[: he - hs]
    out = hp(out, 35)
    fade = np.ones(n); fo = int(1.2 * SR); fade[-fo:] = np.linspace(1, 0, fo)
    fi = int(0.05 * SR); fade[:fi] = np.linspace(0, 1, fi)
    return out * fade


def load_audio(path):
    raw = subprocess.run(["ffmpeg", "-v", "error", "-i", path, "-ac", "1", "-ar", str(SR), "-f", "f32le", "-"], capture_output=True, check=True).stdout
    return np.frombuffer(raw, np.float32).astype(np.float64)


def db(x):
    return 10 ** (x / 20)


def main():
    narr_p, cues_p, out_p = sys.argv[1:4]
    key = sys.argv[sys.argv.index("--key") + 1] if "--key" in sys.argv else "A"
    bpm = float(sys.argv[sys.argv.index("--bpm") + 1]) if "--bpm" in sys.argv else 100
    tail = float(sys.argv[sys.argv.index("--tail") + 1]) if "--tail" in sys.argv else 0.0
    no_music = "--no-music" in sys.argv
    voice = load_audio(narr_p)
    # optional silent tail after the narration (CTA hold); the narration itself is untouched
    voice = np.concatenate([voice, np.zeros(int(round(tail * SR)))])
    n = len(voice); dur = n / SR
    # voice: gentle presence lift, no timing/pitch change
    v = voice / (np.max(np.abs(voice)) + 1e-9) * db(-3)
    # music + ducking from voice envelope
    plan_p = sys.argv[sys.argv.index("--plan") + 1] if "--plan" in sys.argv else None
    if plan_p:  # lote 3: trilha de retenção que acompanha os cortes de cena (music3.py)
        import os; sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
        from music3 import track
        plan = json.load(open(plan_p))
        m = track(plan["style"], dur + 0.5, [tuple(s) for s in plan["sections"]])[:n]
        m = m / (np.sqrt(np.mean(m ** 2)) + 1e-9) * db(plan.get("db", -23))
        depth = plan.get("duck", 0.55)
    else:
        m = music_bed(dur + 0.5, bpm=bpm, key=key)[:n]
        m = m / (np.sqrt(np.mean(m ** 2)) + 1e-9) * db(-27)
        depth = 0.5
    env = np.sqrt(signal.sosfilt(signal.butter(2, 6, fs=SR, output="sos"), v ** 2).clip(0))
    env = env / (np.percentile(env, 95) + 1e-9)
    duck = 1 - depth * np.clip(env, 0, 1)
    duck = signal.sosfilt(signal.butter(1, 3, fs=SR, output="sos"), duck)
    m = m * duck
    if no_music:  # versão sem trilha: só voz + efeitos
        m = np.zeros(n)
    # sfx
    cues = json.load(open(cues_p))
    fx = np.zeros(n)
    for c in cues:
        s = get_sfx(c["type"]) * db(-13) * c.get("gain", 1)
        i = int(c["t"] * SR)
        if i >= n: continue
        e = min(n, i + len(s)); fx[i:e] += s[: e - i]
    # stereo: music slightly wide via short delay; voice/sfx centre
    mixL = v + m + fx * 0.95
    mR = np.concatenate([np.zeros(int(0.012 * SR)), m])[:n]
    mixR = v + mR + fx * 0.95
    st = np.stack([mixL, mixR], 1)
    st = st / (np.max(np.abs(st)) + 1e-9) * 0.89
    tmp = out_p + ".pre.wav"
    sf.write(tmp, st.astype(np.float32), SR)
    # loudness normalisation for Instagram (~ -14 LUFS, true peak -1.5)
    meas = subprocess.run(["ffmpeg", "-hide_banner", "-i", tmp, "-af", "loudnorm=I=-14:TP=-1.5:LRA=11:print_format=json", "-f", "null", "-"], capture_output=True, text=True).stderr
    js = json.loads(meas[meas.rindex("{"):meas.rindex("}") + 1])
    ln = (f"loudnorm=I=-14:TP=-1.5:LRA=11:linear=true:measured_I={js['input_i']}:measured_TP={js['input_tp']}"
          f":measured_LRA={js['input_lra']}:measured_thresh={js['input_thresh']}:offset={js['target_offset']}")
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", tmp, "-af", ln, "-ar", str(SR), out_p], check=True)
    import os; os.remove(tmp)
    # stems for the editable project
    if no_music:  # não sobrescreve os stems do mix completo
        print(f"mix ok (sem música): {dur:.2f}s, {len(cues)} sfx -> {out_p}"); return
    stem_dir = os.path.join(os.path.dirname(out_p), "stems"); os.makedirs(stem_dir, exist_ok=True)
    sf.write(os.path.join(stem_dir, "musica.wav"), (m / (np.max(np.abs(m)) + 1e-9) * 0.8).astype(np.float32), SR)
    sf.write(os.path.join(stem_dir, "efeitos.wav"), (fx / (np.max(np.abs(fx)) + 1e-9) * 0.8).astype(np.float32), SR)
    print(f"mix ok: {dur:.2f}s, {len(cues)} sfx -> {out_p}")


if __name__ == "__main__":
    main()
