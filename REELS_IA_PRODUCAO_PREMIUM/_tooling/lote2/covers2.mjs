// Lote 2 — capas verticais 1080x1920 (conteúdo-chave dentro do recorte 4:5 e do 1:1 do grid do Instagram)
import fs from "node:fs";
import path from "node:path";
import { icon, logo } from "../lib/build.mjs";
import { KIT2_CSS, L2ROOT, P2 } from "../lib/kit2.mjs";

const LIB = "/home/user/trindayy/REELS_IA_PRODUCAO_PREMIUM/_tooling/lib";
const css = ["base.css", "base2.css"].map((f) => fs.readFileSync(path.join(LIB, f), "utf8")).join("\n") + KIT2_CSS + `
.tile2{display:grid;place-items:center;box-shadow:0 24px 60px rgba(0,0,0,.35)}
.tile2 img{width:62%;height:62%;object-fit:contain}
.cc{display:grid;place-items:center;background:linear-gradient(160deg,#2a1d18,#140e0c);box-shadow:0 30px 70px rgba(0,0,0,.4)}
.cc img{width:58%;height:58%}
`;
const tile = (src, s, bg = "#fff", r = 0.26) => `<div class="tile2" style="width:${s}px;height:${s}px;border-radius:${Math.round(s * r)}px;background:${bg}"><img src="${src}"/></div>`;
const cc = (s) => `<div class="cc" style="width:${s}px;height:${s}px;border-radius:${Math.round(s * 0.26)}px"><img src="${logo("claude-icon.svg")}"/></div>`;
const DIV = JSON.parse(fs.readFileSync("/root/repos/msitarzewski_agency-agents/divisions.json", "utf8")).divisions;
const kebab = (s) => s.replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();

const C = {
  "01_STACK": { theme: "dark", vars: { a1: "#ff6a3d", a2: "#ffd23f", a3: "#2f7bff" }, body: `
    <div class="abs center-x tc" style="top:300px;width:400px">${cc(260)}</div>
    <div class="abs center-x tc" style="top:610px;width:1040px"><div class="kw" style="font-size:118px">A STACK QUE</div><div class="kw" style="font-size:150px;color:#ffd23f">TURBINA</div><div class="kw" style="font-size:100px">o Claude Code</div></div>
    <div class="abs row" style="left:60px;right:60px;top:1110px;justify-content:center;gap:14px;flex-wrap:wrap">${["OmniRoute", "Headroom", "hooks", "subagentes", "skills", "MCP"].map((n, i) => `<div class="sticker" style="font-size:34px;background:${["#ff6a3d", "#ffd23f", "#fff", "#7dd3fc", "#86efac", "#fda4af"][i]};color:#111">${n}</div>`).join("")}</div>` },
  "02_INTERFACE": { theme: "light", vars: { a1: "#2f7bff", a2: "#ff6a3d", a3: "#ffd23f" }, body: `
    <div class="abs center-x tc" style="top:300px;width:1040px"><div class="kw" style="font-size:120px">INTERFACES</div><div class="kw" style="font-size:96px">com <span class="hlbox">referência</span></div></div>
    <div class="abs shot" style="left:110px;top:620px;width:860px;height:499px;border-color:#fff;transform:rotate(-2deg)"><img src="${P2("taste-coffee-storefront.jpg")}"/></div>
    <div class="abs" style="left:560px;top:1060px"><div class="sticker" style="font-size:42px;background:#0f1115;color:#fff;transform:rotate(3deg)">${icon("code-2", "#fff", 2.6)}da imagem ao código</div></div>` },
  "03_RUFLO": { theme: "dark", vars: { a1: "#ff3d7f", a2: "#22d3ee", a3: "#ffd23f" }, body: `
    <div class="abs shot" style="left:90px;top:300px;width:900px;height:502px;border-color:rgba(255,61,127,.6)"><img src="${P2("ruFlo.png")}"/></div>
    <div class="abs center-x tc" style="top:870px;width:1040px"><div class="kw" style="font-size:110px">SUA EQUIPE DE</div><div class="kw neon" style="font-size:170px;color:#22d3ee;text-shadow:0 0 12px currentColor,0 0 40px currentColor">AGENTES</div></div>` },
  "04_AGENTES": { theme: "light", vars: { a1: "#7c3aed", a2: "#ec4899", a3: "#10b981" }, body: `
    <div class="abs" style="left:120px;top:300px;width:840px;display:grid;grid-template-columns:repeat(6,1fr);row-gap:20px;justify-items:center">${Object.values(DIV).map((d) => `<div style="width:118px;height:118px;border-radius:32px;background:${d.color};display:grid;place-items:center;box-shadow:0 10px 24px rgba(0,0,0,.2)"><div style="width:56%;height:56%">${icon(kebab(d.icon), "#fff", 2.2)}</div></div>`).join("")}</div>
    <div class="abs center-x tc" style="top:760px;width:1040px"><div class="kw" style="font-size:160px;color:#7c3aed">AGENCY</div><div class="kw" style="font-size:160px">AGENTS</div></div>
    <div class="abs center-x tc" style="top:1110px;width:900px"><div class="sticker" style="font-size:44px;background:#7c3aed;color:#fff">${icon("users", "#fff", 2.6)}sua equipe de IA</div></div>` },
  "05_DESIGN": { theme: "dark", vars: { a1: "#ff6b4a", a2: "#b4f461", a3: "#ffd23f" }, body: `
    <div class="abs center-x tc" style="top:290px;width:1040px"><div class="kw" style="font-size:100px">seu site parece</div><div class="kw" style="font-size:130px;color:#ff6b4a">PROFISSIONAL?</div></div>
    <div class="abs shot" style="left:110px;top:600px;width:860px;height:499px;border-color:rgba(255,255,255,.7);transform:rotate(2deg)"><img src="${P2("taste-night-dates.jpg")}"/></div>
    <div class="abs" style="left:90px;top:1060px"><div class="sticker" style="font-size:42px;background:#b4f461;color:#111;transform:rotate(-3deg)">${icon("palette", "#111", 2.6)}design com referência</div></div>` },
  "06_CODIGO": { theme: "dark", vars: { a1: "#22c55e", a2: "#38bdf8", a3: "#facc15" }, body: `
    <div class="abs" style="left:110px;top:300px;width:860px;border-radius:26px;background:#0a0f0c;border:2px solid rgba(34,197,94,.4);overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.5)">
      <div style="height:54px;display:flex;align-items:center;gap:12px;padding:0 22px;background:#111814">${["#ff5f57", "#febc2e", "#28c840"].map((c) => `<i style="display:block;width:16px;height:16px;border-radius:50%;background:${c}"></i>`).join("")}</div>
      <div style="padding:24px 30px;font:500 34px 'JetBrains Mono';color:#d6f5e0;line-height:1.6"><span style="color:#22c55e">$</span> pip install scrapegraphai<br/><span style="color:#22c55e">$</span> playwright install</div></div>
    <div class="abs center-x tc" style="top:690px;width:1040px"><div class="kw" style="font-size:120px">GERAR CÓDIGO</div><div class="kw" style="font-size:170px;color:#ef4444">≠</div><div class="kw" style="font-size:120px;color:#22c55e">FUNCIONAR</div></div>` },
  "07_TOKENS": { theme: "light", vars: { a1: "#ff7a1a", a2: "#0ea5e9", a3: "#16a34a" }, body: `
    <div class="abs center-x tc" style="top:300px;width:400px">${cc(240)}</div>
    <div class="abs center-x tc" style="top:600px;width:1040px"><div class="kw" style="font-size:110px">PARE DE</div><div class="kw" style="font-size:118px;color:#ef4444">DESPERDIÇAR</div><div class="kw" style="font-size:160px"><span class="hlbox">TOKENS</span></div></div>
    <div class="abs center-x tc" style="top:1120px;width:900px"><div class="sticker" style="font-size:42px;background:#0ea5e9;color:#fff">${icon("feather", "#fff", 2.6)}modelo certo pra cada tarefa</div></div>` },
  "08_DESIGN_GRATIS": { theme: "light", vars: { a1: "#e11d74", a2: "#0891b2", a3: "#facc15" }, body: `
    <div class="abs row" style="left:70px;right:70px;top:310px;justify-content:space-between">${["oss-penpot.svg", "oss-krita.svg", "oss-gimp.svg", "oss-blender.svg", "oss-excalidraw.svg"].map((f) => tile(logo(f), 170)).join("")}</div>
    <div class="abs center-x tc" style="top:600px;width:1040px"><div class="kw" style="font-size:170px">DESIGN</div><div class="kw" style="font-size:170px;color:#e11d74">GRÁTIS</div></div>
    <div class="abs center-x tc" style="top:1060px;width:900px"><div class="sticker" style="font-size:46px;background:#0f1115;color:#fff">${icon("heart-handshake", "#fff", 2.6)}código aberto</div></div>` },
  "09_MODELOS": { theme: "dark", vars: { a1: "#8b5cf6", a2: "#22d3ee", a3: "#f59e0b" }, body: `
    <div class="abs row" style="left:110px;right:110px;top:310px;justify-content:space-between">${["prov-openai.svg", "prov-claude.svg", "prov-grok.svg", "prov-kimi.svg"].map((f) => tile(logo(f), 190)).join("")}</div>
    <div class="abs center-x tc" style="top:600px;width:1040px"><div class="kw" style="font-size:170px;color:#22d3ee">VÁRIOS</div><div class="kw" style="font-size:150px">MODELOS</div><div class="kw" style="font-size:96px;margin-top:10px">em <span class="hlbox">1 fluxo</span></div></div>` },
};

for (const [dir, c] of Object.entries(C)) {
  const P = path.join(L2ROOT, dir, "projeto"), out = path.join(P, "capa");
  fs.mkdirSync(out, { recursive: true });
  const vars = Object.entries(c.vars).map(([k, v]) => `--${k}:${v};`).join("");
  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8"/><meta name="viewport" content="width=1080, height=1920"/>
<script src="assets/gsap.min.js"></script><style>${css}
:root{${vars}}</style></head><body class="theme-${c.theme}">
<div id="root" data-composition-id="main" data-start="0" data-duration="1" data-width="1080" data-height="1920">
<div class="bg"><div class="bg-grid"></div><div class="bg-glow a"></div><div class="bg-glow b"></div><div class="bg-glow c"></div></div>
<div style="position:absolute;inset:0;transform:translateY(200px)">${c.body}</div>
<div class="vignette"></div></div>
<script>window.__timelines=window.__timelines||{};const tl=gsap.timeline({paused:true});tl.set({},{},1);window.__timelines["main"]=tl;</script></body></html>`;
  fs.writeFileSync(path.join(out, "index.html"), html);
  fs.cpSync(path.join(P, "assets"), path.join(out, "assets"), { recursive: true, filter: (f) => !/mix\.wav|stems|video/.test(f) });
  console.log("cover", dir);
}
