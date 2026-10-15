// Shared CTA + misc components used by all three reels
import { icon, logo } from "./build.mjs";

export const COMMON_CSS = `
.agent{width:170px;height:170px;border-radius:44px;display:grid;place-items:center;background:linear-gradient(160deg,#1d2b52,#0e1630);border:2px solid rgba(34,211,238,.45);box-shadow:0 22px 60px rgba(0,0,0,.55)}
.agent svg{width:58%;height:58%}
.igbox{width:900px;height:132px;border-radius:66px;background:#fff;display:flex;align-items:center;gap:24px;padding:0 26px;box-shadow:0 30px 90px rgba(0,0,0,.6)}
.igbox .av{width:84px;height:84px;border-radius:50%;background:conic-gradient(from 210deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5,#feda75);padding:5px}
.igbox .av div{width:100%;height:100%;border-radius:50%;background:#1b2747}
.igbox .tx{font:900 64px "Space Grotesk";color:#0b1222;letter-spacing:-.01em}
.igbox .send{margin-left:auto;font:800 30px Inter;color:#0095f6}
.follow{display:inline-flex;align-items:center;gap:16px;padding:24px 46px;border-radius:24px;background:#0095f6;color:#fff;font:800 40px Inter;box-shadow:0 24px 60px rgba(0,149,246,.35)}
.follow svg{width:44px;height:44px}
.step{width:290px;height:300px;border-radius:32px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:18px}
.step .si{width:120px;height:120px;border-radius:32px;display:grid;place-items:center;background:rgba(34,211,238,.12);border:1.5px solid rgba(34,211,238,.45)}
.step .si svg{width:56%;height:56%}
.step .st{font:800 34px Inter}
.polaroid{background:#f4f1ea;padding:16px 16px 54px;border-radius:8px;box-shadow:0 30px 80px rgba(0,0,0,.6)}
.polaroid img{display:block;object-fit:cover}
.polaroid .pl{font:500 24px "JetBrains Mono";color:#3a3a3a;margin-top:12px}
`;

// CTA block: headline + "comenta" word + IG comment box + follow
export function ctaHtml(id, { q, word, grad = "linear-gradient(90deg,#2f7bff,#22d3ee)", logos = [] }) {
  return `
    <div class="abs center-x tc" id="${id}-q" style="top:170px;width:1000px"><div class="display" style="font-size:104px">${q}</div></div>
    <div class="abs center-x tc kicker" id="${id}-k" style="top:330px;width:940px">comenta a palavra</div>
    <div class="abs center-x tc" id="${id}-word" style="top:390px;width:1040px"><div class="display" style="font-size:156px;background:${grad};-webkit-background-clip:text;color:transparent;padding:0 10px">${word}</div></div>
    <div class="abs igbox" id="${id}-box" style="left:90px;top:610px"><div class="av"><div></div></div><div class="tx" id="${id}-tx" data-text="${word}"></div><div class="send">Publicar</div></div>
    <div class="abs center-x tc" style="top:820px;width:600px"><div class="follow" id="${id}-fol">${icon("user-plus", "#fff", 2.4)}Seguir</div></div>
    <div class="abs center-x row gap24" id="${id}-logos" style="top:1000px;width:940px;justify-content:center">
      ${logos.map((l) => `<div class="tile ${l.white ? "white" : ""}" style="width:130px;height:130px;border-radius:34px"><img src="${logo(l.f)}"/></div>`).join("")}
      <div class="chip">${icon("sparkles", "#22d3ee")}mais ferramentas de IA</div>
    </div>`;
}
export function ctaJs(V, id, { q, co, word, seg, fe }) {
  const S = (a, b, c) => V.sfx(a, b, c);
  return `
inn("#${id}-q",${q - 0.05},"slam");${S("impact", q - 0.05, .7)}
inn("#${id}-k",${co - 0.05},"fade",.3);
inn("#${id}-box",${co},"up",.45);${S("pop", co, .6)}
type("#${id}-tx",${word},.45);${S("typing", word, .55)}
inn("#${id}-word",${word + 0.05},"pop",.5);${S("shimmer", word + 0.05, .7)}
pulse("#${id}-box",${word + 0.7},1.04,.4);
inn("#${id}-fol",${seg - 0.05},"pop",.45);${S("click", seg - 0.05, .8)}
pulse("#${id}-fol",${seg + 0.5},1.06,.4);
inn("#${id}-logos",${fe - 0.1},"up",.5);${S("whoosh_s", fe - 0.15, .45)}
`;
}
