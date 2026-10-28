// Lote 4 — capas 1080x1920 no ESTILO CAMPEÃO (fundo marinho, 1 destaque, título grande). Conteúdo-chave no recorte do grid.
import fs from "node:fs";
import path from "node:path";
import { icon, logo } from "../lib/build.mjs";
import { KIT4_CSS, COMMON_CSS, L4ROOT, P4 } from "../lib/kit4.mjs";

const LIB = "/home/user/trindayy/REELS_IA_PRODUCAO_PREMIUM/_tooling/lib";
const css = fs.readFileSync(path.join(LIB, "base.css"), "utf8") + COMMON_CSS + KIT4_CSS;
const cc = (s) => `<div style="width:${s}px;height:${s}px;border-radius:${s * 0.27}px;background:linear-gradient(160deg,#2a1d18,#140e0c);border:2px solid rgba(217,119,87,.6);display:grid;place-items:center"><img src="${logo("claude-icon.svg")}" style="width:58%"/></div>`;
const C = {
  "01_AGENCIA_CLAUDE": `
    <div class="abs center-x row" style="top:300px;width:1000px;justify-content:center;gap:10px;flex-wrap:wrap">${Array.from({ length: 13 }, () => cc(112)).join("")}</div>
    <div class="abs center-x tc" style="top:640px;width:1040px"><div class="display" style="font-size:118px">13 CLAUDES</div><div class="display" style="font-size:96px">tocando seu <span style="color:#e1306c">Instagram</span></div></div>
    <div class="abs center-x tc" style="top:1000px;width:900px"><div class="badge" style="font-size:96px;background:#34d399;color:#04140c">R$ 0</div></div>`,
  "02_SAAS": `
    <div class="abs center-x tc" style="top:300px;width:1040px"><div class="kicker" style="color:#fbbf24">desmontando</div><div class="display" style="font-size:190px;color:#22d3ee;margin-top:10px">UM SaaS</div><div class="h2" style="margin-top:10px">as <span style="color:#fbbf24">13 peças</span> por trás do seu app</div></div>
    <div class="abs" style="left:60px;top:800px;width:960px;display:grid;grid-template-columns:repeat(7,1fr);gap:16px">${["server", "globe", "database", "key-round", "shield-check", "braces", "credit-card", "bell-ring", "calendar-sync", "mail", "vault", "siren", "archive-restore"].map((ic, i) => `<div style="height:120px;border-radius:30px;background:${["#38bdf8", "#60a5fa", "#fbbf24", "#a78bfa", "#34d399", "#22d3ee", "#f472b6", "#fb923c", "#4ade80", "#93c5fd", "#facc15", "#f87171", "#2dd4bf"][i]};display:grid;place-items:center"><div style="width:52%;height:52%">${icon(ic, "#06101c", 2)}</div></div>`).join("")}</div>`,
  "03_TOP3_GITHUB": `
    <div class="abs row" style="left:110px;top:300px;gap:26px;align-items:center"><div class="tile" style="width:200px;height:200px;border-radius:54px;background:linear-gradient(160deg,#1f2633,#0d1117)"><img src="${logo("github-white.svg")}"/></div><div class="display" style="font-size:220px;line-height:.85">TOP <span style="color:#3fb950">3</span></div></div>
    <div class="abs" style="left:110px;top:560px"><div class="kicker">mais baixados · últimos 30 dias</div></div>
    ${[["av_anomalyco.png", "opencode"], ["av_plandex-ai.png", "plandex"], ["av_aaif-goose.png", "goose"]].map(([a, n], i) => `<div class="mini" style="position:absolute;left:${130 + i * 30}px;top:${650 + i * 150}px;width:820px;display:flex;align-items:center;gap:22px;padding:22px 28px;border-radius:24px;background:#0d1117;border:1.5px solid #30363d;font:700 40px Inter;color:#e6edf3"><span style="font:700 50px 'Space Grotesk';color:#3fb950;width:50px">${i + 1}</span><img src="${P4(a)}" style="width:70px;height:70px;border-radius:16px"/>${n}</div>`).join("")}`,
};
for (const [dir, body] of Object.entries(C)) {
  const P = path.join(L4ROOT, dir, "projeto"), out = path.join(P, "capa");
  fs.mkdirSync(out, { recursive: true });
  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8"/><meta name="viewport" content="width=1080, height=1920"/>
<script src="assets/gsap.min.js"></script><style>${css}</style></head><body>
<div id="root" data-composition-id="main" data-start="0" data-duration="1" data-width="1080" data-height="1920">
<div class="bg"><div class="bg-grid"></div><div class="bg-glow a"></div><div class="bg-glow b"></div></div>
<div style="position:absolute;inset:0;transform:translateY(120px)">${body}</div>
<div class="vignette"></div></div>
<script>window.__timelines=window.__timelines||{};const tl=gsap.timeline({paused:true});tl.set({},{},1);window.__timelines["main"]=tl;</script></body></html>`;
  fs.writeFileSync(path.join(out, "index.html"), html);
  fs.cpSync(path.join(P, "assets"), path.join(out, "assets"), { recursive: true, filter: (f) => !/\.wav|stems|video/.test(f) });
  console.log("cover", dir);
}
