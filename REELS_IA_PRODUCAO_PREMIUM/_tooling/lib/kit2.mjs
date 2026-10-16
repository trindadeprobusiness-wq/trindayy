// Lote 2 — reusable energetic components
import { icon, logo, esc } from "./build.mjs";

export const L2ROOT = "/home/user/trindayy/REELS_IA_LOTE2";
export const TR = "/home/user/trindayy/REELS_IA_PRODUCAO_PREMIUM/_entrada_lote2/transcricoes";
export const P2 = (f) => `assets/photos2/${f}`;

export const KIT2_CSS = `
.igbox{width:900px;height:132px;border-radius:66px;background:#fff;display:flex;align-items:center;gap:24px;padding:0 26px;box-shadow:0 30px 90px rgba(0,0,0,.35);border:2px solid rgba(0,0,0,.06)}
.igbox .av{width:84px;height:84px;border-radius:50%;background:conic-gradient(from 210deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5,#feda75);padding:5px}
.igbox .av div{width:100%;height:100%;border-radius:50%;background:#1b2747}
.igbox .tx{font:900 64px "Space Grotesk";color:#0b1222;letter-spacing:-.01em}
.igbox .send{margin-left:auto;font:800 30px Inter;color:#0095f6}
.follow{display:inline-flex;align-items:center;gap:16px;padding:24px 46px;border-radius:24px;background:#0095f6;color:#fff;font:800 40px Inter;box-shadow:0 24px 60px rgba(0,149,246,.35)}
.follow svg{width:44px;height:44px}
.meter{width:760px;height:64px;border-radius:32px;background:rgba(127,127,127,.18);border:3px solid rgba(127,127,127,.35);overflow:hidden;position:relative}
.meter .fill{position:absolute;left:0;top:0;bottom:0;width:100%;transform-origin:left center;border-radius:32px}
.blk{height:118px;border-radius:26px;display:flex;align-items:center;gap:22px;padding:0 30px;font:900 44px Inter;letter-spacing:-.02em;box-shadow:0 14px 0 rgba(0,0,0,.18),0 26px 50px rgba(0,0,0,.2)}
.blk img,.blk .bi{width:70px;height:70px;object-fit:contain}
.blk .bi svg{width:100%;height:100%}
.step3{display:flex;flex-direction:column;align-items:center;gap:14px;width:290px}
.step3 .sn{width:150px;height:150px;border-radius:50%;display:grid;place-items:center;font:700 80px "Space Grotesk";box-shadow:0 18px 40px rgba(0,0,0,.25)}
.step3 .sl{font:900 38px Inter;letter-spacing:-.02em;text-align:center}
.prov{width:150px;height:150px;border-radius:40px;background:#fff;display:grid;place-items:center;box-shadow:0 18px 40px rgba(0,0,0,.25)}
.prov img{width:62%;height:62%;object-fit:contain}
`;

export function ctaHtml2(id, { pre, word, color = "var(--a1)", sub = "", follow = true }) {
  return `
    <div class="abs center-x tc" id="${id}-pre" style="top:200px;width:1000px"><div class="kw" style="font-size:96px">${pre}</div></div>
    <div class="abs center-x tc" id="${id}-k" style="top:400px;width:940px"><div class="sticker dark" style="font-size:34px">${icon("message-circle", "#fff", 2.4)}COMENTA A PALAVRA</div></div>
    <div class="abs burst" id="${id}-burst" style="left:540px;top:640px;width:0;height:0"></div>
    <div class="abs center-x tc" id="${id}-word" style="top:520px;width:1060px"><div class="kw" style="font-size:${word.length > 9 ? 150 : 200}px;color:${color};text-shadow:0 12px 0 rgba(0,0,0,.18)">${esc(word)}</div></div>
    <div class="abs igbox" id="${id}-box" style="left:90px;top:780px"><div class="av"><div></div></div><div class="tx" id="${id}-tx" data-text="${esc(word)}"></div><div class="send">Publicar</div></div>
    ${follow ? `<div class="abs center-x tc" style="top:975px;width:600px"><div class="follow" id="${id}-fol">${icon("user-plus", "#fff", 2.4)}Seguir</div></div>`
    : `<div class="abs" id="${id}-dn" style="left:470px;top:960px;width:140px;height:140px;color:${color}">${icon("chevrons-down", "currentColor", 2.6)}</div>`}
    ${sub ? `<div class="abs center-x tc h3" id="${id}-sub" style="top:1120px;width:940px;font-size:34px;opacity:.75">${sub}</div>` : ""}`;
}
export function ctaJs2(V, id, { q, co, word, seg, sub, follow = true }) {
  const S = (a, b, c) => V.sfx(a, b, c);
  return `
inn("#${id}-pre",${q - 0.05},"slam");${S("impact", q - 0.05, .7)}
inn("#${id}-k",${co - 0.1},"pop",.35);${S("pop", co - 0.1, .6)}
inn("#${id}-word",${word - 0.02},"slam");${S("impact", word, .85)}${S("shimmer", word + 0.1, .7)}
burst("#${id}-burst",${word + 0.05},34);
fromTo("#${id}-word",{rotation:0},{keyframes:{rotation:[0,-3,3,-2,0]},duration:.5,ease:"none"},${word + 0.4});
inn("#${id}-box",${word + 0.1},"up",.4);type("#${id}-tx",${word + 0.25},.4);${S("typing", word + 0.25, .5)}
${follow ? `inn("#${id}-fol",${seg - 0.05},"pop",.45);${S("click", seg - 0.05, .8)}
pulse("#${id}-fol",${seg + 0.5},1.08,.4);` : `inn("#${id}-dn",${seg - 0.05},"drop",.4);${S("pop", seg - 0.05, .5)}
fromTo("#${id}-dn",{y:0},{y:26,duration:.32,yoyo:true,repeat:9,ease:"sine.inOut",immediateRender:false},${seg + 0.4});`}
${sub ? `inn("#${id}-sub",${sub},"up",.4);` : ""}`;
}
export const tileImg = (src, size = 200, bg = "#fff", r = 52, pad = "62%") =>
  `<div class="tile" style="width:${size}px;height:${size}px;border-radius:${r}px;background:${bg}"><img src="${src}" style="width:${pad};height:${pad};object-fit:contain"/></div>`;
export const tileIcon = (name, color, size = 200, bg = "#fff", r = 52, sw = 2) =>
  `<div class="tile" style="width:${size}px;height:${size}px;border-radius:${r}px;background:${bg}"><div style="width:56%;height:56%">${icon(name, color, sw)}</div></div>`;
