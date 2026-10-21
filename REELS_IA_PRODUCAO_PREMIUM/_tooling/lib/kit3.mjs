// Lote 3 — componentes premium (sobre o kit2): card GitHub sem números, navegador, iPhone, chat, carimbo, título palavra a palavra.
import { icon, logo, esc } from "./build.mjs";

export const L3ROOT = "/home/user/trindayy/REELS_IA_LOTE3";
export const P3 = (f) => `assets/photos3/${f}`;
export const narr = (dir) => `${L3ROOT}/${dir}/narracao/palavras_raw.json`;

export const KIT3_CSS = `
.gh3{width:940px;border-radius:30px;background:#0d1117;border:1.5px solid #30363d;overflow:hidden;box-shadow:0 50px 120px rgba(0,0,0,.5);font-family:Inter;color:#e6edf3}
.gh3 .top{display:flex;align-items:center;gap:18px;padding:24px 32px;background:#010409;border-bottom:1px solid #30363d}
.gh3 .top img{width:44px;height:44px}
.gh3 .top .path{font-size:29px;color:#e6edf3}.gh3 .top .path b{font-weight:700}
.gh3 .head{display:flex;align-items:center;gap:20px;padding:30px 32px 8px}
.gh3 .head .av{width:84px;height:84px;border-radius:18px;overflow:hidden;background:#fff;flex:none}
.gh3 .head .av img{width:100%;height:100%;object-fit:cover}
.gh3 .head .nm{font:700 44px "Space Grotesk";letter-spacing:-.02em;white-space:nowrap}
.gh3 .pub{font-size:21px;color:#9198a1;border:1.5px solid #3d444d;border-radius:999px;padding:3px 14px;margin-left:auto}
.gh3 .desc{padding:14px 32px 30px;font-size:30px;line-height:1.4;color:#c9d1d9}
.gh3 .tags{display:flex;flex-wrap:wrap;gap:10px;padding:0 32px 30px}
.gh3 .tags span{font:600 22px Inter;color:#4493f8;background:rgba(56,139,253,.12);padding:7px 18px;border-radius:999px}
.brw{position:absolute;border-radius:28px;overflow:hidden;background:#111;box-shadow:0 50px 120px rgba(0,0,0,.5);border:1.5px solid rgba(255,255,255,.12)}
.brw .bb{height:74px;display:flex;align-items:center;gap:12px;padding:0 24px;background:#1c1c1f}
.brw .bb i{display:block;width:18px;height:18px;border-radius:50%}
.brw .url{margin-left:18px;flex:1;height:46px;border-radius:23px;background:#2a2a2e;display:flex;align-items:center;gap:12px;padding:0 20px;font:500 24px Inter;color:#d4d4d8;white-space:nowrap;overflow:hidden}
.brw .url svg{width:24px;height:24px;flex:none}
.iph{position:absolute;width:430px;height:900px;border-radius:72px;background:#111;padding:16px;box-shadow:0 60px 140px rgba(0,0,0,.45),inset 0 0 0 3px #3a3a3c}
.iph .scr{position:relative;width:100%;height:100%;border-radius:58px;overflow:hidden;background:#fff}
.iph .isl{position:absolute;left:50%;top:22px;width:130px;height:38px;margin-left:-65px;border-radius:20px;background:#000;z-index:5}
.iph .scr img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.bub{display:inline-block;max-width:600px;padding:22px 30px;border-radius:34px;font:600 34px Inter;line-height:1.3}
.bub.me{background:#0a84ff;color:#fff;border-bottom-right-radius:10px}
.bub.ai{background:#e9e9eb;color:#111;border-bottom-left-radius:10px}
.bub.wa{background:#d9fdd3;color:#111;border-bottom-right-radius:10px}
.bub.wb{background:#fff;color:#111;border-bottom-left-radius:10px}
.stamp{display:inline-block;padding:14px 34px;border:8px solid currentColor;border-radius:22px;font:900 80px "Space Grotesk";letter-spacing:.02em;text-transform:uppercase;line-height:1}
.wd{display:inline-block;white-space:pre}
.lbl{font:600 24px "JetBrains Mono";letter-spacing:.14em;text-transform:uppercase;opacity:.7}
.exm{position:absolute;padding:8px 18px;border-radius:12px;font:700 22px "JetBrains Mono";letter-spacing:.1em;text-transform:uppercase;background:rgba(127,127,127,.18);border:1.5px solid rgba(127,127,127,.4)}
.chipx{display:inline-flex;align-items:center;gap:14px;padding:18px 30px;border-radius:999px;font:800 36px Inter;white-space:nowrap}
.chipx svg,.chipx img{width:40px;height:40px;object-fit:contain}
.pane{border-radius:30px;padding:30px}
.mono{font-family:"JetBrains Mono"}
`;

// GitHub repo card (sem estrelas/números: a narração não cita)
export function gh3({ id, owner, repo, avatar, desc = "", tags = [], nameId }) {
  return `<div class="gh3" id="${id}">
  <div class="top"><img src="${logo("github-white.svg")}"/><div class="path">${esc(owner)} / <b>${esc(repo)}</b></div></div>
  <div class="head"><div class="av"><img src="${avatar}"/></div><div class="nm" ${nameId ? `id="${nameId}" data-text="${esc(repo)}"` : ""}>${nameId ? "" : esc(repo)}</div><div class="pub">Public</div></div>
  ${desc ? `<div class="desc">${desc}</div>` : ""}
  ${tags.length ? `<div class="tags">${tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>` : ""}
</div>`;
}
export const browser = ({ id, x, y, w, h, url = "", urlId, body = "" }) =>
  `<div class="brw" id="${id}" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px"><div class="bb"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><div class="url">${icon("lock", "#a1a1aa", 2.2)}<span ${urlId ? `id="${urlId}" data-text="${esc(url)}"` : ""}>${urlId ? "" : esc(url)}</span></div></div><div style="position:relative;height:${h - 74}px">${body}</div></div>`;
export const iphone = ({ id, x, y, scale = 1, screen = "", bg = "#fff" }) =>
  `<div class="iph" id="${id}" style="left:${x}px;top:${y}px;transform:scale(${scale});transform-origin:center center"><div class="scr" style="background:${bg}"><div class="isl"></div>${screen}</div></div>`;
// título palavra a palavra: cada palavra vira .wd (anime com inn("#id .wd", t, "blur", .5, {stagger:.07}))
export const words = (txt, cls = "") => txt.split(" ").map((w) => `<span class="wd ${cls}">${w} </span>`).join("");
export const ico = (name, color, sw = 2, size = 64) => `<span style="display:inline-block;width:${size}px;height:${size}px;vertical-align:middle">${icon(name, color, sw)}</span>`;
