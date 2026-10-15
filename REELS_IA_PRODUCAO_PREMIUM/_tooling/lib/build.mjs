// Build-time generator: word-synced scenes + captions + SFX cue list -> HyperFrames index.html
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const TOOL = path.resolve(HERE, "..");
const LUCIDE = "/root/assets/node_modules/lucide-static/icons";

const norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]/g, "");

export class Video {
  constructor({ id, title, wordsPath, fixes = {}, keywords = [], audioDur, accent = "#22d3ee", capKey = "#22d3ee" }) {
    this.id = id; this.title = title; this.accent = accent; this.capKey = capKey;
    const raw = JSON.parse(fs.readFileSync(wordsPath, "utf8"));
    // fixes: { "rawText@index" | "rawText": "fixed" }  (display only; timing untouched)
    this.words = raw.map((w, i) => {
      const f = fixes[`${w.text}@${i}`] ?? fixes[w.text];
      return { ...w, i, disp: f === undefined ? w.text : f, n: norm(w.text) };
    }).filter((w) => w.disp !== "");
    this.dur = audioDur;
    this.kw = new Set(keywords.map(norm));
    this.scenes = []; this.cues = []; this.extraJs = []; this.overlayHtml = ""; this.extraCss = "";
  }
  // --- timing lookups (by raw transcript tokens) ---
  find(phrase, nth = 1) {
    const toks = phrase.split(/\s+/).map(norm).filter(Boolean);
    let hit = 0;
    for (let i = 0; i <= this.words.length - toks.length; i++) {
      if (toks.every((t, j) => this.words[i + j].n === t)) { hit++; if (hit === nth) return i; }
    }
    throw new Error(`[${this.id}] phrase not found: "${phrase}" (#${nth})`);
  }
  at(phrase, nth = 1) { return +this.words[this.find(phrase, nth)].start.toFixed(3); }
  end(phrase, nth = 1) { const i = this.find(phrase, nth) + phrase.split(/\s+/).filter(Boolean).length - 1; return +this.words[i].end.toFixed(3); }
  // --- sfx cue registry ---
  sfx(type, t, gain = 1) { this.cues.push({ type, t: +(+t).toFixed(3), gain }); return ""; }
  // --- scenes ---
  scene({ id, t0, t1, html, js = "", in: kin = "rise", push, last = false, cls = "" }) {
    this.scenes.push({ id, t0, t1, html, js, kin, push, last, cls });
  }
  // --- captions ---
  captionGroups() {
    const groups = []; let cur = [];
    const flush = () => { if (cur.length) groups.push(cur); cur = []; };
    for (let i = 0; i < this.words.length; i++) {
      const w = this.words[i];
      const chars = cur.reduce((a, x) => a + x.disp.length + 1, 0) + w.disp.length;
      const gap = cur.length ? w.start - cur[cur.length - 1].end : 0;
      if (cur.length && (chars > 24 || cur.length >= 4 || gap > 0.32)) flush();
      cur.push(w);
      if (/[.?!,;:]$/.test(w.text) && cur.length >= 1) {
        const nxt = this.words[i + 1];
        // keep tiny trailing fragments with the next phrase only if very short and fast
        if (!(cur.length === 1 && w.disp.length <= 3 && nxt && nxt.start - w.end < 0.15)) flush();
      }
    }
    flush();
    return groups;
  }
  captionsHtml() {
    const g = this.captionGroups();
    return g.map((ws, gi) => {
      const t0 = ws[0].start - 0.04;
      const nextStart = gi + 1 < g.length ? g[gi + 1][0].start - 0.04 : this.dur;
      const t1 = Math.min(nextStart, ws[ws.length - 1].end + 0.6);
      const spans = ws.map((w) => {
        const clean = w.disp.replace(/[,;:]$/, "");
        const k = this.kw.has(norm(w.disp)) ? " k" : "";
        return `<span class="w${k}" data-s="${w.start.toFixed(3)}">${esc(clean)}</span>`;
      }).join("");
      return `<div class="cap clip" data-start="${t0.toFixed(3)}" data-duration="${(t1 - t0).toFixed(3)}" data-track-index="9"><div class="capin" style="display:flex;flex-wrap:wrap;justify-content:center;gap:0 18px;width:100%">${spans}</div></div>`;
    }).join("\n");
  }
  transcriptSrt() {
    const g = this.captionGroups();
    const ts = (s) => { const ms = Math.round(s * 1000); const h = Math.floor(ms / 3600000), m = Math.floor(ms / 60000) % 60, sec = Math.floor(ms / 1000) % 60, r = ms % 1000; return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")},${String(r).padStart(3, "0")}`; };
    return g.map((ws, i) => `${i + 1}\n${ts(ws[0].start)} --> ${ts(ws[ws.length - 1].end)}\n${ws.map((w) => w.disp).join(" ")}\n`).join("\n");
  }
  // --- emit ---
  write(projectDir, { audioSrc = "assets/mix.wav" } = {}) {
    const css = fs.readFileSync(path.join(HERE, "base.css"), "utf8") + "\n" + this.extraCss;
    const fx = fs.readFileSync(path.join(HERE, "fx.js"), "utf8");
    const D = this.dur;
    const scenesHtml = this.scenes.map((s, i) => {
      const t0 = Math.max(0, s.t0), t1 = s.last ? D : s.t1;
      return `<section id="${s.id}" class="scene clip ${s.cls}" data-start="${t0.toFixed(3)}" data-duration="${(t1 - t0).toFixed(3)}" data-track-index="${1 + (i % 2)}"><div class="inner"><div class="cam" style="position:absolute;inset:0">${s.html}</div></div></section>`;
    }).join("\n");
    const scenesJs = this.scenes.map((s) => {
      const t0 = Math.max(0, s.t0), t1 = s.last ? D : s.t1;
      return `// ${s.id}\nscene(${JSON.stringify(s.id)}, ${t0.toFixed(3)}, ${t1.toFixed(3)}, ${JSON.stringify({ in: s.kin, push: s.push, last: s.last })});\n${s.js}`;
    }).join("\n");
    const html = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=1080, height=1920" />
<title>${esc(this.title)}</title>
<script src="assets/gsap.min.js"></script>
<style>
${css}
:root { --accent: ${this.accent}; --capk: ${this.capKey}; }
</style>
</head>
<body>
<div id="root" data-composition-id="main" data-start="0" data-duration="${D.toFixed(3)}" data-width="1080" data-height="1920">
  <div class="bg"><div class="bg-grid"></div><div class="bg-glow a"></div><div class="bg-glow b"></div><div class="bg-glow c"></div></div>
${scenesHtml}
  ${this.overlayHtml}
  <div class="vignette"></div>
  <div class="caps">
${this.captionsHtml()}
  </div>
  <audio id="mix" src="${audioSrc}" data-start="0" data-duration="${D.toFixed(3)}" data-track-index="10" data-volume="1"></audio>
</div>
<script>
${fx}
${scenesJs}
${this.extraJs.join("\n")}
captions();
bgDrift(${D.toFixed(3)});
tl.set({}, {}, ${D.toFixed(3)});
window.__timelines["main"] = tl;
</script>
</body>
</html>
`;
    fs.mkdirSync(projectDir, { recursive: true });
    fs.writeFileSync(path.join(projectDir, "index.html"), html);
    fs.writeFileSync(path.join(projectDir, "sfx_cues.json"), JSON.stringify(this.cues.sort((a, b) => a.t - b.t), null, 1));
    fs.writeFileSync(path.join(projectDir, "legendas.srt"), this.transcriptSrt());
    // stage shared assets
    const A = path.join(projectDir, "assets");
    for (const sub of ["fonts", "logos", "photos", "video"]) cpDir(path.join(TOOL, "shared", sub), path.join(A, sub));
    fs.copyFileSync(path.join(TOOL, "shared", "gsap.min.js"), path.join(A, "gsap.min.js"));
    console.log(`[${this.id}] wrote ${this.scenes.length} scenes, ${this.captionGroups().length} caption groups, ${this.cues.length} sfx cues`);
  }
}

function cpDir(src, dst) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dst, { recursive: true });
  for (const f of fs.readdirSync(src)) fs.copyFileSync(path.join(src, f), path.join(dst, f));
}
export const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

// lucide icon inline (stroke color + width)
export function icon(name, color = "currentColor", sw = 2) {
  const raw = fs.readFileSync(path.join(LUCIDE, `${name}.svg`), "utf8").replace(/<!--[\s\S]*?-->/g, "");
  return raw.replace(/stroke="currentColor"/, `stroke="${color}"`).replace(/stroke-width="2"/, `stroke-width="${sw}"`).replace(/class="[^"]*"/, "").replace(/width="24"/, 'width="100%"').replace(/height="24"/, 'height="100%"');
}
export const logo = (f) => `assets/logos/${f}`;

// GitHub repo replica (dark)
export function ghRepo({ id, owner, repo, avatar, avatarBg = "#fff", desc, topics = [], stars, forks, starId, extraBtn = "", tabs = true }) {
  const star = icon("star", "#e3b341");
  const fork = icon("git-fork", "#9198a1");
  return `<div class="gh" id="${id}">
  <div class="gh-top"><img src="${logo("github-white.svg")}"/><div class="path">${esc(owner)} / <b>${esc(repo)}</b></div></div>
  ${tabs ? `<div class="gh-tabs"><span class="on">Code</span><span>Issues</span><span>Pull requests</span><span>Actions</span><span>Security</span></div>` : ""}
  <div class="gh-head"><div class="av" style="background:${avatarBg}"><img src="${avatar}"/></div><div class="name">${esc(repo)}</div><div class="gh-pub">Public</div></div>
  <div class="gh-desc">${desc}</div>
  ${topics.length ? `<div class="gh-topics">${topics.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
  <div class="gh-stats">
    <div class="gh-btn star" id="${starId}-btn">${star}<span>Star</span><span class="n" id="${starId}">${esc(stars)}</span></div>
    ${forks ? `<div class="gh-btn">${fork}<span>Fork</span><span class="n">${esc(forks)}</span></div>` : ""}
    ${extraBtn}
  </div>
</div>`;
}
