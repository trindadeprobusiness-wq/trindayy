// Lote 3 — capas 1080x1920 (conteúdo-chave dentro do recorte 4:5/1:1 do grid). Só imagens reais ou tipografia.
import fs from "node:fs";
import path from "node:path";
import { icon, logo } from "../lib/build.mjs";
import { KIT2_CSS } from "../lib/kit2.mjs";
import { KIT3_CSS, L3ROOT, P3 } from "../lib/kit3.mjs";

const LIB = "/home/user/trindayy/REELS_IA_PRODUCAO_PREMIUM/_tooling/lib";
const css = ["base.css", "base2.css"].map((f) => fs.readFileSync(path.join(LIB, f), "utf8")).join("\n") + KIT2_CSS + KIT3_CSS;
const C = {
  "01_OPEN_HIGGSFIELD": { theme: "dark", bg: "#07080b", vars: { a1: "#d4ff3a" }, body: `
    <div class="abs shot" style="left:290px;top:290px;width:500px;height:500px;border-color:rgba(139,92,246,.7)"><img src="${P3("oh_banner.jpg")}"/></div>
    <div class="abs center-x tc" style="top:840px;width:1040px"><div class="kw" style="font-size:110px">GERAR VÍDEOS</div><div class="kw" style="font-size:130px;color:#d4ff3a">DE GRAÇA</div></div>
    <div class="abs center-x tc" style="top:1120px;width:900px"><div class="sticker" style="font-size:40px;background:#d4ff3a;color:#0b0d05">${icon("code-xml", "#0b0d05", 2.6)}código aberto</div></div>` },
  "02_XTOOL": { theme: "light", bg: "#f5f5f7", vars: { a1: "#0a84ff" }, body: `
    <div class="abs" style="left:110px;top:300px;width:300px;height:300px"><img src="${P3("xt_icon.png")}" style="width:100%;border-radius:68px"/></div>
    <div class="iph" style="left:600px;top:250px;transform:scale(.62);transform-origin:top left"><div class="scr"><div class="isl"></div><img src="${P3("xt_hello.jpg")}"/></div></div>
    <div class="abs" style="left:90px;top:680px;width:620px"><div class="kw" style="font-size:120px;color:#1d1d1f">APPS DE</div><div class="kw" style="font-size:150px;color:#0a84ff">iPhone</div><div class="kw" style="font-size:120px;color:#1d1d1f">SEM MAC</div></div>
    <div class="abs" style="left:90px;top:1120px"><div class="sticker" style="font-size:40px;background:#1d1d1f;color:#fff"><img src="${logo("claude-icon.svg")}" style="width:44px;height:44px"/>xtool + Claude Code</div></div>` },
  "03_HIGGSFIELD": { theme: "dark", bg: "#05070d", vars: { a1: "#d4ff3a" }, body: `
    <div class="abs center-x tc" style="top:300px;width:1040px"><div class="kw" style="font-size:150px;color:#d4ff3a">HIGGSFIELD</div><div class="kw" style="font-size:96px">no GitHub?</div></div>
    <div class="abs" style="left:130px;top:620px;width:820px;height:590px;border-radius:30px;overflow:hidden;background:#fff;box-shadow:0 40px 100px rgba(0,0,0,.6)"><img src="${P3("hf_arch.jpg")}" style="width:100%;height:100%;object-fit:cover"/></div>
    <div class="abs" style="left:560px;top:1120px"><div class="sticker" style="font-size:40px;background:#ffb020;color:#1a1203">${icon("triangle-alert", "#1a1203", 2.6)}não é o que parece</div></div>` },
  "04_PS5": { theme: "dark", bg: "#050a1f", vars: { a1: "#2f6bff" }, body: `
    <div class="abs center-x tc" style="top:300px;width:1040px"><div class="kw" style="font-size:200px">PS5 <span style="color:#ff2e88">→</span> <span style="color:#2f6bff">PC</span></div></div>
    <div class="abs" style="left:340px;top:560px;width:400px;height:400px">${icon("gamepad-2", "#fff", 1.4)}</div>
    <div class="abs center-x tc" style="top:960px;width:1040px"><div class="kw" style="font-size:120px;color:#2f6bff">AnyPS5</div></div>
    <div class="abs" style="left:300px;top:1120px;transform:rotate(-4deg)"><div class="stamp" style="color:#ff3b47;font-size:56px">experimental</div></div>` },
  "05_INSTINCT": { theme: "light", bg: "#f3efe7", vars: { a1: "#ff5a36" }, body: `
    <div class="abs" style="left:80px;top:300px"><div class="lbl" style="color:#8a8478">startup · agentes de IA</div></div>
    <div class="abs" style="left:70px;top:350px;font:700 290px 'Space Grotesk';letter-spacing:-.05em;line-height:.9;color:#0b8a4c"><span style="font-size:120px;vertical-align:top">US$</span>10</div>
    <div class="abs" style="left:80px;top:640px;font:700 130px 'Space Grotesk';letter-spacing:-.045em;color:#111">bilhões</div>
    <div class="abs" style="left:80px;top:830px;width:920px;height:4px;background:#111"></div>
    <div class="abs" style="left:80px;top:870px;width:920px;font:700 92px 'Space Grotesk';letter-spacing:-.04em;line-height:1;color:#111">o modelo de negócio por trás de um <span style="background:#ff5a36;color:#fff;padding:0 .1em">assistente</span></div>` },
  "06_WHATSAPP": { theme: "light", bg: "#f6efe8", vars: { a1: "#d9774b" }, body: `
    <div class="abs row" style="left:200px;top:310px;gap:60px;align-items:center">
      <div style="width:260px;height:260px;border-radius:70px;background:#fff;display:grid;place-items:center;box-shadow:0 26px 70px rgba(60,40,10,.16)"><img src="${logo("claude-icon.svg")}" style="width:60%"/></div>
      <div style="width:120px;height:120px">${icon("plus", "#1b1b1b", 2.6)}</div></div>
    <div class="abs" style="left:720px;top:420px;width:240px;height:240px;border-radius:50%;background:#25d366;display:grid;place-items:center;box-shadow:0 26px 70px rgba(37,211,102,.4)"><div style="width:56%;height:56%">${icon("message-circle", "#fff", 2)}</div></div>
    <div class="abs" style="left:80px;top:700px;width:620px"><div class="kw" style="font-size:120px;color:#1b1b1b">CLAUDE NO</div><div class="kw" style="font-size:136px;color:#128c4a">WhatsApp</div></div>
    <div class="abs" style="left:80px;top:1010px"><div class="sticker" style="font-size:42px;background:#d9774b;color:#fff">${icon("list-ordered", "#fff", 2.6)}em 3 passos</div></div>` },
  "07_WA_AKG": { theme: "dark", bg: "#06110b", vars: { a1: "#22c55e" }, body: `
    <div class="abs center-x tc" style="top:300px;width:1040px"><div class="kw" style="font-size:180px;color:#22c55e">WA-AKG</div><div class="kw" style="font-size:90px">WhatsApp + seus sistemas</div></div>
    <div class="abs row" style="left:110px;right:110px;top:690px;justify-content:space-between">
      ${[["server", "#22c55e", "API"], ["layout-dashboard", "#22d3ee", "painel"], ["workflow", "#ea4b71", "n8n"]].map(([ic, c, n]) => `<div class="tc"><div style="width:220px;height:220px;border-radius:56px;background:${c};display:grid;place-items:center"><div style="width:52%;height:52%">${icon(ic, "#04120a", 2)}</div></div><div style="font:800 46px Inter;margin-top:16px">${n}</div></div>`).join("")}</div>
    <div class="abs center-x tc" style="top:1100px;width:900px"><div class="sticker" style="font-size:42px;background:#22c55e;color:#04120a">${icon("code-xml", "#04120a", 2.6)}grátis e open source</div></div>` },
};
for (const [dir, c] of Object.entries(C)) {
  const P = path.join(L3ROOT, dir, "projeto"), out = path.join(P, "capa");
  fs.mkdirSync(out, { recursive: true });
  const vars = Object.entries(c.vars).map(([k, v]) => `--${k}:${v};`).join("");
  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8"/><meta name="viewport" content="width=1080, height=1920"/>
<script src="assets/gsap.min.js"></script><style>${css}
:root{${vars}} #root{background:${c.bg}} body{background:${c.bg}}</style></head><body class="theme-${c.theme}">
<div id="root" data-composition-id="main" data-start="0" data-duration="1" data-width="1080" data-height="1920">
<div class="bg" style="background:${c.bg}"><div class="bg-grid"></div><div class="bg-glow a"></div><div class="bg-glow b"></div></div>
<div style="position:absolute;inset:0;transform:translateY(160px)">${c.body}</div>
<div class="vignette"></div></div>
<script>window.__timelines=window.__timelines||{};const tl=gsap.timeline({paused:true});tl.set({},{},1);window.__timelines["main"]=tl;</script></body></html>`;
  fs.writeFileSync(path.join(out, "index.html"), html);
  fs.cpSync(path.join(P, "assets"), path.join(out, "assets"), { recursive: true, filter: (f) => !/\.wav|stems|video/.test(f) });
  console.log("cover", dir);
}
