// Vertical Instagram covers (1080x1920; key content inside the centred 4:5 grid crop)
import fs from "node:fs";
import path from "node:path";
import { icon, logo } from "./lib/build.mjs";

const BASE = "/home/user/trindayy/REELS_IA_PRODUCAO_PREMIUM";
const css = fs.readFileSync(path.join(BASE, "_tooling/lib/base.css"), "utf8");
const T = (src, s = 200, bg = "linear-gradient(160deg,#1b2747,#0d1426)", r = 52) => `<div class="tile" style="width:${s}px;height:${s}px;border-radius:${r}px;background:${bg}"><img src="${src}"/></div>`;

const covers = {
  "01_CLOUDFLARE": `
    <div class="abs row" style="left:0;right:0;top:330px;justify-content:center;gap:34px">${T(logo("cloudflare-icon.svg"), 230, "linear-gradient(160deg,#fff,#eef1f6)")}<div style="font:700 90px Inter;color:#5d6880;align-self:center">+</div>${T(logo("claude-icon.svg"), 230, "linear-gradient(160deg,#2a1d18,#140e0c)")}</div>
    <div class="abs center-x tc" style="top:640px;width:1000px"><div class="display" style="font-size:112px"><span style="color:#f38020">CLOUDFLARE</span><br/>LIBEROU</div></div>
    <div class="abs center-x tc" style="top:900px;width:1000px"><div class="badge" style="font-size:120px;background:linear-gradient(135deg,#2f7bff,#22d3ee);color:#03111f;box-shadow:0 0 0 8px rgba(34,211,238,.25),0 30px 80px rgba(34,211,238,.35)">GRÁTIS</div></div>
    <div class="abs center-x tc" style="top:1120px;width:960px"><div class="chip red" style="font-size:40px;padding:20px 36px">${icon("bug", "#ff4d5e")}skill que acha brechas no seu código</div></div>`,
  "02_REVERSE_ENGINEER": `
    <div class="abs row" style="left:0;right:0;top:330px;justify-content:center;gap:30px">${T(logo("github-white.svg"), 230, "linear-gradient(160deg,#1f2633,#0d1117)")}<div class="badge" style="font-size:200px;padding:10px 40px;background:#fbbf24;color:#111;border-radius:42px">#1</div></div>
    <div class="abs center-x tc" style="top:640px;width:1040px"><div class="display" style="font-size:124px">REVERSE<br/><span style="color:#22d3ee">ENGINEER</span><br/>ANYTHING</div></div>
    <div class="abs center-x tc" style="top:1080px;width:960px"><div class="chip amber" style="font-size:46px;padding:20px 40px">${icon("star", "#fbbf24")}88.900 estrelas · código aberto</div></div>`,
  "03_GITHUB_TOOLS": `
    <div class="abs center-x tc" style="top:320px;width:1000px"><div class="row" style="justify-content:center;gap:30px">${T(logo("github-white.svg"), 200, "linear-gradient(160deg,#1f2633,#0d1117)")}<div class="display" style="font-size:250px;color:#22d3ee;line-height:.9">5</div></div></div>
    <div class="abs center-x tc" style="top:610px;width:1040px"><div class="display" style="font-size:118px">PROJETOS<br/>DO GITHUB</div></div>
    <div class="abs center-x tc" style="top:880px;width:1000px"><div class="h3" style="font-size:52px;color:#cfd6e4">de <span style="color:#7f8db0">chatbot</span> a <span class="hl">operação inteira</span></div></div>
    <div class="abs row" style="left:110px;right:110px;top:1030px;justify-content:space-between">
      ${[["hyperframes-symbol.svg", "#0b0b0d", "#f59e0b"], ["gws-icon.png", "#fff", "#4285f4"], ["apify.svg", "#fff", "#34d399"], [null, "#1b1530", "#a78bfa"], ["playwright.svg", "#fff", "#ff4d8d"]].map(([f, bg, c]) => `<div class="tile" style="width:150px;height:150px;border-radius:40px;background:${bg};border-color:${c}">${f ? `<img src="${logo(f)}"/>` : `<div style="width:56%;height:56%">${icon("list-checks", c, 2)}</div>`}</div>`).join("")}
    </div>`,
};

for (const [dir, body] of Object.entries(covers)) {
  const out = path.join(BASE, dir, "projeto", "capa");
  fs.mkdirSync(out, { recursive: true });
  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8"/><meta name="viewport" content="width=1080, height=1920"/>
<script src="assets/gsap.min.js"></script><style>${css}</style></head><body>
<div id="root" data-composition-id="main" data-start="0" data-duration="1" data-width="1080" data-height="1920">
<div class="bg"><div class="bg-grid"></div><div class="bg-glow a"></div><div class="bg-glow b"></div></div>
${body}
<div class="vignette"></div></div>
<script>const tl=gsap.timeline({paused:true});tl.set({},{},1);window.__timelines["main"]=tl;</script></body></html>`;
  fs.writeFileSync(path.join(out, "index.html"), html);
  fs.cpSync(path.join(BASE, dir, "projeto", "assets"), path.join(out, "assets"), { recursive: true, filter: (f) => !/mix\.wav|stems|video/.test(f) });
  console.log("cover", dir);
}
