// Lote 4 — ESTILO CAMPEÃO (lote 1): cabeçalho numerado com bolinhas, cards, CTA. Motor base (sem kit2).
import { icon, logo, esc } from "./build.mjs";
export { ctaHtml, ctaJs, COMMON_CSS } from "./common.mjs";

export const L4ROOT = "/home/user/trindayy/REELS_IA_LOTE4";
export const P4 = (f) => `assets/photos4/${f}`;
export const narr = (dir) => `${L4ROOT}/${dir}/narracao/palavras_raw.json`;

export const KIT4_CSS = `
.ph{position:absolute;left:70px;top:150px;width:940px;display:flex;align-items:center;gap:26px}
.ph .num{width:112px;height:112px;border-radius:30px;display:grid;place-items:center;font:700 64px "Space Grotesk";border:3px solid;background:rgba(10,15,28,.8)}
.ph .nm{font:700 66px "Space Grotesk";letter-spacing:-.03em;line-height:1}
.ph .sb{font:600 22px "JetBrains Mono";letter-spacing:.14em;text-transform:uppercase;margin-top:10px}
.ph .dots{margin-left:auto;display:flex;gap:10px}
.ph .dots i{width:18px;height:18px;border-radius:50%;background:rgba(160,190,255,.2);display:block}
.pnl{border-radius:30px;background:linear-gradient(165deg,rgba(24,35,62,.94),rgba(11,17,32,.96));border:2px solid rgba(160,190,255,.16);box-shadow:0 30px 80px rgba(0,0,0,.55),inset 0 1px 0 rgba(255,255,255,.06)}
.lbl4{font:600 22px "JetBrains Mono";letter-spacing:.16em;text-transform:uppercase;color:#7f8db0}
.cnt{position:absolute;right:60px;top:60px;display:flex;align-items:center;gap:12px;padding:12px 22px;border-radius:999px;background:rgba(14,21,38,.92);border:2px solid rgba(160,190,255,.22);font:700 26px "JetBrains Mono";color:#dbe5ff;z-index:6}
.cnt b{font-weight:700}
.chk{display:flex;align-items:center;gap:22px;padding:18px 26px;font:800 34px Inter;border-radius:22px}
.chk .bx{width:50px;height:50px;border-radius:14px;border:3px solid rgba(160,190,255,.35);display:grid;place-items:center;flex:none}
.chk .bx svg{width:36px;height:36px}
.big{font-family:"Space Grotesk";font-weight:700;letter-spacing:-.045em;line-height:.9}
.ex{position:absolute;padding:6px 14px;border-radius:10px;font:700 18px "JetBrains Mono";letter-spacing:.12em;text-transform:uppercase;color:#8b97b3;background:rgba(160,190,255,.08);border:1.5px solid rgba(160,190,255,.2)}
.iso{transform:perspective(1600px) rotateX(48deg) rotateZ(-30deg);transform-style:preserve-3d}
.blk{position:absolute;border-radius:22px;display:grid;place-items:center;font:800 30px Inter;color:#0b1222;box-shadow:0 18px 0 rgba(0,0,0,.35),0 34px 50px rgba(0,0,0,.45)}
`;
export const dots = (n, col, tot = 5) => `<div class="dots">${Array.from({ length: tot }, (_, i) => `<i style="${i < n ? `background:${col}` : ""}"></i>`).join("")}</div>`;
export const header = (id, n, name, sub, col, tot = 5) => `<div class="ph" id="${id}-ph"><div class="num" style="border-color:${col};color:${col}">${n}</div><div><div class="nm">${name}</div><div class="sb" style="color:${col}">${sub}</div></div>${dots(n, col, tot)}</div>`;
export const headerJs = (V, id, t, sx = "whoosh") => `fromTo("#${id}-ph .num",{scale:.4,opacity:0,rotation:-20},{scale:1,opacity:1,rotation:0,duration:.5,ease:E.back},${t.toFixed(2)});fromTo("#${id}-ph .nm, #${id}-ph .sb",{x:-60,opacity:0},{x:0,opacity:1,duration:.5,ease:E.o,stagger:.08},${(t + 0.1).toFixed(2)});${V.sfx(sx, t - 0.05, sx === "whoosh" ? 0.6 : 0.45)}`;
// GitHub card fiel (sem estrelas: a narração não cita números)
export function gh4({ id, owner, repo, avatar, desc = "", topics = [], logoImg, nameColor = "#e6edf3" }) {
  return `<div class="gh" id="${id}">
  <div class="gh-top"><img src="${logo("github-white.svg")}"/><div class="path">${esc(owner)} / <b>${esc(repo)}</b></div></div>
  <div class="gh-tabs"><span class="on">Code</span><span>Issues</span><span>Pull requests</span><span>Actions</span></div>
  <div class="gh-head"><div class="av" style="background:#fff"><img src="${avatar}" style="width:100%;height:100%;object-fit:cover"/></div><div class="name" style="color:${nameColor}">${esc(repo)}</div><div class="gh-pub">Public</div></div>
  ${desc ? `<div class="gh-desc">${desc}</div>` : ""}
  ${topics.length ? `<div class="gh-topics">${topics.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
  ${logoImg ? `<div style="padding:4px 30px 30px"><img src="${logoImg}" style="height:64px"/></div>` : ""}
</div>`;
}
export const term = (id, title, body, w = 940) => `<div class="win" id="${id}" style="width:${w}px"><div class="win-bar"><i></i><i></i><i></i><span class="t">${title}</span></div><div class="term" style="white-space:pre-wrap">${body}</div></div>`;
