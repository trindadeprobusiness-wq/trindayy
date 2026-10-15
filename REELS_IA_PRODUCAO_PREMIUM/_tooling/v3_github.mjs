// VÍDEO 03 — CINCO PROJETOS DO GITHUB (narração Elvis 20:12:47)
import { Video, icon, logo, ghRepo, esc } from "./lib/build.mjs";
import { COMMON_CSS, ctaHtml, ctaJs } from "./lib/common.mjs";

const ROOT = "/home/user/trindayy/REELS_IA_PRODUCAO_PREMIUM/03_GITHUB_TOOLS";
const V = new Video({
  id: "v3", title: "Cinco Projetos do GitHub",
  wordsPath: `${ROOT}/narracao/palavras_raw.json`, audioDur: 98.194,
  accent: "#22d3ee", capKey: "#38bdf8",
  fixes: { "Clod.": "Claude.", "Clod": "Claude", "Clod?": "Claude?", "Cloud": "Claude", "Hyperframes": "HyperFrames", "Reygen,": "HeyGen,", "WapFy,": "Apify,", "Adios": "Addy", "Mone": "Osmani", "Prova.": "prova." },
  keywords: ["mesmo", "Claude.", "Claude?", "chatbot,", "chatbot.", "operação", "operação.", "cinco", "projetos", "GitHub.", "HyperFrames", "HeyGen,", "editor", "vídeo.", "legenda,", "abertura", "renderiza", "Google", "Workspace", "CLI,", "open", "source", "resposta.", "Apify,", "scrapers", "100", "academias", "Instagram", "site.", "Agent", "Skills,", "Addy", "Osmani", "20", "processo.", "entende", "tarefas,", "verifica", "Playwright", "Microsoft,", "narração", "prova.", "navegador", "clicar,", "preencher", "resultado.", "modelo.", "GitHub", "inteira."],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
const C = { hf: "#f59e0b", gws: "#4285f4", ap: "#34d399", sk: "#a78bfa", pw: "#ff4d8d", claude: "#d97757" };
const TOOLS = [
  { k: "hf", n: "HyperFrames", img: "hyperframes-symbol.svg", bg: "#0b0b0d" },
  { k: "gws", n: "Workspace CLI", img: "gws-icon.png", bg: "#ffffff" },
  { k: "ap", n: "Apify", img: "apify.svg", bg: "#ffffff" },
  { k: "sk", n: "Agent Skills", ic: "list-checks", bg: "#1b1530" },
  { k: "pw", n: "Playwright CLI", img: "playwright.svg", bg: "#ffffff" },
];

V.extraCss = COMMON_CSS + `
#s6-st-btn{display:none}
.ph{position:absolute;left:70px;top:150px;width:940px;display:flex;align-items:center;gap:26px}
.ph .num{width:112px;height:112px;border-radius:30px;display:grid;place-items:center;font:700 64px "Space Grotesk";border:3px solid;background:rgba(10,15,28,.8)}
.ph .nm{font:700 66px "Space Grotesk";letter-spacing:-.03em;line-height:1}
.ph .sb{font:600 22px "JetBrains Mono";letter-spacing:.14em;text-transform:uppercase;margin-top:10px}
.ph .dots{margin-left:auto;display:flex;gap:10px}
.ph .dots i{width:18px;height:18px;border-radius:50%;background:rgba(160,190,255,.2);display:block}
.panel{width:450px;height:720px;border-radius:44px;background:linear-gradient(170deg,#121b31,#0a1020);border:2px solid rgba(160,190,255,.2);box-shadow:0 30px 90px rgba(0,0,0,.6);position:absolute;overflow:hidden}
.panel .plb{position:absolute;left:0;right:0;bottom:26px;text-align:center;font:800 36px Inter}
.bub{position:absolute;padding:18px 24px;border-radius:26px;font:600 25px Inter;line-height:1.3}
.bub.u{right:24px;background:#2f7bff;color:#fff;border-bottom-right-radius:8px}
.bub.a{left:24px;background:#1d2840;color:#dbe5ff;border-bottom-left-radius:8px}
.tnode{position:absolute;width:118px;height:118px;border-radius:32px;display:grid;place-items:center;box-shadow:0 16px 40px rgba(0,0,0,.5);border:2px solid rgba(255,255,255,.12)}
.tnode img{width:62%;height:62%;object-fit:contain}.tnode svg{width:56%;height:56%}
.prompt{border-radius:30px;padding:26px 30px;background:rgba(18,28,52,.85);border:2px solid rgba(160,190,255,.25)}
.prompt .pt{font:600 34px Inter;line-height:1.35;color:#eef3ff;min-height:46px}
.pv{width:940px;height:520px;border-radius:26px;overflow:hidden;position:relative;background:linear-gradient(135deg,#1e3a5f,#0f1f38 50%,#3b1f4a);border:2px solid rgba(160,190,255,.2)}
.mail{display:flex;align-items:center;gap:20px;padding:18px 24px;border-bottom:1.5px solid rgba(160,190,255,.1);font:600 27px Inter;color:#dbe5ff;background:rgba(14,21,38,.9)}
.mail .av{width:56px;height:56px;border-radius:50%;display:grid;place-items:center;font:800 24px Inter;color:#fff;flex:none}
.mail .sub{color:#8b97b3;font-weight:500;font-size:23px;margin-top:4px}
.mail .tag{margin-left:auto;font:800 19px Inter;padding:8px 14px;border-radius:10px;background:rgba(66,133,244,.2);color:#a9c7ff;border:1.5px solid rgba(66,133,244,.6);white-space:nowrap}
.tbl{width:940px;border-radius:24px;overflow:hidden;font:600 26px Inter;background:rgba(14,21,38,.92);border:1.5px solid rgba(160,190,255,.16)}
.tbl .tr{display:grid;grid-template-columns:1.4fr 1fr 1fr;padding:16px 26px;border-bottom:1.5px solid rgba(160,190,255,.08);align-items:center}
.tbl .th{font:700 20px "JetBrains Mono";letter-spacing:.12em;text-transform:uppercase;color:#7f8db0;background:rgba(52,211,153,.08)}
.chk{display:flex;align-items:center;gap:22px;padding:20px 28px;font:800 36px Inter;border-radius:24px}
.chk .bx{width:54px;height:54px;border-radius:14px;border:3px solid rgba(160,190,255,.35);display:grid;place-items:center;flex:none}
.chk .bx svg{width:40px;height:40px}
.form{background:#fff;color:#0b1222;padding:34px 40px;height:100%}
.form .lb{font:600 22px Inter;color:#5b6680;margin:18px 0 8px}
.form .in{height:66px;border-radius:14px;border:2px solid #d5dbe6;padding:0 20px;display:flex;align-items:center;font:600 28px Inter}
.form .btn{margin-top:30px;height:78px;border-radius:16px;background:#e5355f;color:#fff;font:800 30px Inter;display:grid;place-items:center}
`;

const dots = (n, col) => `<div class="dots">${[1, 2, 3, 4, 5].map((i) => `<i style="${i <= n ? `background:${col}` : ""}"></i>`).join("")}</div>`;
const header = (id, n, name, sub, col) => `<div class="ph" id="${id}-ph"><div class="num" style="border-color:${col};color:${col}">${n}</div><div><div class="nm">${name}</div><div class="sb" style="color:${col}">${sub}</div></div>${dots(n, col)}</div>`;
const headerJs = (id, t, sx = "whoosh") => `fromTo("#${id}-ph .num",{scale:.4,opacity:0,rotation:-20},{scale:1,opacity:1,rotation:0,duration:.5,ease:E.back},${t});fromTo("#${id}-ph .nm, #${id}-ph .sb",{x:-60,opacity:0},{x:0,opacity:1,duration:.5,ease:E.o,stagger:.08},${t + 0.1});${V.sfx(sx, t - 0.05, sx === "whoosh" ? 0.6 : 0.45)}`;
const toolNode = (tl, x, y, id, size = 118) => `<div class="tnode" id="${id}" style="${id.match(/^s[18]-t/) ? "opacity:0;" : ""}left:${x - size / 2}px;top:${y - size / 2}px;width:${size}px;height:${size}px;background:${tl.bg};border-color:${C[tl.k]}">${tl.img ? `<img src="${logo(tl.img)}"/>` : icon(tl.ic, C.sk, 2)}</div>`;

// split panel: chatbot vs operação (used in hook + recap)
function split(id) {
  const cx = 795, cy = 560, R = 165;
  const pos = TOOLS.map((_, i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / 5; return [cx + R * Math.cos(a), cy + R * Math.sin(a)]; });
  return { cx, cy, pos, html: `
    <div class="panel" id="${id}-L" style="left:70px;top:250px">
      <div class="row gap12" style="padding:26px 28px"><img src="${logo("claude-icon.svg")}" style="width:46px;height:46px"/><div style="font:700 26px Inter;color:#cfd6e4">Claude</div></div>
      <div class="bub u" style="top:130px;max-width:330px">me ajuda com uma ideia?</div>
      <div class="bub a" style="top:260px;max-width:350px">Claro! Aqui vão algumas sugestões…</div>
      <div class="bub u" style="top:400px;max-width:300px">e agora?</div>
      <div class="bub a" id="${id}-typ" style="top:500px">• • •</div>
      <div class="plb" id="${id}-Lt">chatbot</div>
    </div>
    <div class="panel" id="${id}-R" style="left:560px;top:250px;border-color:rgba(34,211,238,.35)">
      <div class="plb" id="${id}-Rt" style="color:#22d3ee">operação inteira</div>
    </div>
    <svg class="wires" viewBox="0 0 1080 1920">${pos.map(([x, y], i) => `<path id="${id}-w${i}" d="M${cx} ${cy} L${x.toFixed(1)} ${y.toFixed(1)}" stroke="${C[TOOLS[i].k]}" stroke-width="4" fill="none" opacity=".9"/>`).join("")}
      ${pos.map(([x, y], i) => `<circle id="${id}-pk${i}" cx="${cx}" cy="${cy}" r="9" fill="${C[TOOLS[i].k]}"/>`).join("")}</svg>
    <div class="tile" id="${id}-hub" style="position:absolute;left:${cx - 70}px;top:${cy - 70}px;width:140px;height:140px;border-radius:38px;background:linear-gradient(160deg,#2a1d18,#140e0c);border-color:rgba(217,119,87,.6)"><img src="${logo("claude-icon.svg")}"/></div>
    ${pos.map(([x, y], i) => toolNode(TOOLS[i], x, y, `${id}-t${i}`, 104)).join("")}
    <div class="abs tc" id="${id}-eq" style="left:500px;top:560px;width:80px;font:700 70px Inter;color:#5d6880;line-height:80px">=</div>
  ` };
}
function splitJs(id, sp, tL, tR, packetsFrom) {
  return `
glow("#${id}-L",${tL},"rgba(47,123,255,.55)");pulse("#${id}-L",${tL},1.03,.4);
fromTo("#${id}-typ",{opacity:.3},{opacity:1,duration:.3,yoyo:true,repeat:5,ease:E.soft},${tL});
unglow("#${id}-L",${tR});to("#${id}-L",{opacity:.45,duration:.4},${tR});
glow("#${id}-R",${tR},"rgba(34,211,238,.55)");
${sp.pos.map((_, i) => `draw("#${id}-w${i}",${(tR + i * 0.08).toFixed(2)},.4);fromTo("#${id}-t${i}",{scale:0,opacity:0},{scale:1,opacity:1,duration:.4,ease:E.back},${(tR + 0.1 + i * 0.08).toFixed(2)});`).join("")}
${sp.pos.map(([x, y], i) => `fromTo("#${id}-pk${i}",{attr:{cx:${sp.cx},cy:${sp.cy}},opacity:1},{attr:{cx:${x.toFixed(1)},cy:${y.toFixed(1)}},duration:.7,repeat:4,ease:"power1.inOut"},${(packetsFrom + i * 0.12).toFixed(2)});`).join("")}
`;
}

// ---------------- S1 — HOOK: mesmo Claude, chatbot vs operação (0 → 7.3) ----------------
{
  const t = { d: at("Duas"), me: at("mesmo"), cl: at("Clod."), u: at("Uma"), ch: at("chatbot,"), ou: at("outra"), op: at("operação"), in: at("inteira.") };
  const sp = split("s1");
  V.scene({ id: "s1", t0: 0, t1: 7.25, in: "none", push: 0.03, html: `
    <div class="abs center-x tc" id="s1-h" style="top:150px;width:1000px"><div class="h2">o <span style="color:${C.claude}">mesmo Claude</span></div></div>
    ${sp.html}
  `, js: `
fromTo("#s1-L",{x:-80,rotation:-4},{x:0,rotation:0,duration:.7,ease:E.o4},0);
fromTo("#s1-R",{x:80,rotation:4},{x:0,rotation:0,duration:.7,ease:E.o4},0);
fromTo("#s1-hub",{scale:1.3},{scale:1,duration:.7,ease:E.o4},0);
pulse("#s1-h",${t.me},1.08,.45);${S("pop", t.me - 0.05, .55)}
pulse("#s1-eq",${t.cl},1.4,.5);${S("click", t.cl, .6)}
${splitJs("s1", sp, t.ch - 0.1, t.op - 0.15, t.op)}
${S("lock", t.ch - 0.1, .6)}${S("power", t.op - 0.15, .7)}${S("pop_multi", t.op - 0.05, .6)}
` });
}

// ---------------- S2 — 5 PROJETOS DO GITHUB (7.3 → 10.5) ----------------
{
  const t = { d: at("diferença"), ci: at("cinco"), pr: at("projetos"), gh: at("GitHub.") };
  V.scene({ id: "s2", t0: 7.15, t1: 10.5, in: "zoom", html: `
    <div class="abs center-x row" style="top:200px;width:940px;justify-content:center;gap:30px">
      <div class="tile" id="s2-gh" style="width:210px;height:210px;border-radius:54px;background:linear-gradient(160deg,#1f2633,#0d1117)"><img src="${logo("github-white.svg")}"/></div>
      <div class="display" id="s2-5" style="font-size:260px;color:#22d3ee">5</div>
    </div>
    <div class="abs center-x tc" id="s2-t" style="top:500px;width:1000px"><div class="h1">PROJETOS</div><div class="kicker" style="margin-top:14px">open source no github</div></div>
    <div class="abs row" style="left:70px;top:760px;width:940px;justify-content:space-between">
      ${TOOLS.map((tl, i) => `<div class="col" id="s2-s${i}" style="align-items:center;gap:12px"><div class="tnode" style="position:relative;width:160px;height:160px;border-radius:42px;background:${tl.bg};border-color:${C[tl.k]}">${tl.img ? `<img src="${logo(tl.img)}"/>` : icon(tl.ic, C.sk, 2)}</div><div style="font:700 30px 'Space Grotesk';color:${C[tl.k]}">0${i + 1}</div></div>`).join("")}
    </div>
  `, js: `
inn("#s2-gh",${t.d},"pop",.45);${S("pop", t.d, .6)}
inn("#s2-5",${t.ci - 0.05},"slam");${S("impact", t.ci - 0.05, .7)}
inn("#s2-t",${t.pr - 0.1},"up",.4);
${TOOLS.map((_, i) => `inn("#s2-s${i}",${(t.pr + 0.1 + i * 0.1).toFixed(2)},"rise",.45);`).join("")}${S("pop_multi", t.pr + 0.1, .55)}
` });
}

// ---------------- S3a — HYPERFRAMES: Claude Code vira editor de vídeo (10.5 → 17.0) ----------------
{
  const t = { p: at("primeiro"), hf: at("Hyperframes"), hg: at("Reygen,"), tr: at("transforma"), cc: at("Clod Code"), ed: at("editor"), vi: at("vídeo.") };
  V.scene({ id: "s3", t0: 10.35, t1: 17.0, in: "left", html: `
    ${header("s3", 1, "HyperFrames", "da HeyGen · editor de vídeo", C.hf)}
    <div class="abs center-x tc" id="s3-logo" style="top:340px;width:760px;padding:40px 0;border-radius:36px;background:#0b0b0d;border:2px solid rgba(245,158,11,.4);box-shadow:0 30px 80px rgba(0,0,0,.6)"><img src="${logo("hyperframes-wordmark-dark.svg")}" style="width:520px"/><div class="mono" style="font-size:24px;color:#a1a1aa;margin-top:18px">Write HTML. Render video. Built for agents.</div></div>
    <div class="abs row" style="left:70px;top:720px;width:940px;justify-content:space-between">
      <div class="col" id="s3-a" style="align-items:center;gap:12px"><div class="tile" style="width:200px;height:200px;border-radius:52px;background:linear-gradient(160deg,#2a1d18,#140e0c);border-color:rgba(217,119,87,.5)"><img src="${logo("claude-icon.svg")}"/></div><div class="h3" style="font-size:30px">Claude Code</div></div>
      <svg width="120" height="40" id="s3-ar1"><path d="M5 20 L100 20 M84 6 L104 20 L84 34" stroke="${C.hf}" stroke-width="5" fill="none" stroke-linecap="round"/></svg>
      <div class="col" id="s3-b" style="align-items:center;gap:12px"><div class="tile" style="width:200px;height:200px;border-radius:52px"><div style="width:56%;height:56%">${icon("file-code-2", "#cfe0ff", 1.6)}</div></div><div class="h3 mono" style="font-size:28px">index.html</div></div>
      <svg width="120" height="40" id="s3-ar2"><path d="M5 20 L100 20 M84 6 L104 20 L84 34" stroke="${C.hf}" stroke-width="5" fill="none" stroke-linecap="round"/></svg>
      <div class="col" id="s3-c" style="align-items:center;gap:12px"><div class="tile" style="width:200px;height:200px;border-radius:52px;border-color:rgba(245,158,11,.6)"><div style="width:56%;height:56%">${icon("clapperboard", C.hf, 1.6)}</div></div><div class="h3 mono" style="font-size:28px">vídeo.mp4</div></div>
    </div>
  `, js: `
${headerJs("s3", t.p)}
inn("#s3-logo",${t.hf - 0.1},"zoom",.55);${S("shimmer", t.hf, .5)}
inn("#s3-a",${t.cc - 0.15},"pop",.45);${S("pop", t.cc - 0.15, .6)}
inn("#s3-ar1",${t.cc + 0.35},"wipe",.35);inn("#s3-b",${t.cc + 0.5},"pop",.45);
inn("#s3-ar2",${t.ed - 0.2},"wipe",.35);inn("#s3-c",${t.ed - 0.05},"pop",.45);${S("pop", t.ed - 0.05, .6)}
pulse("#s3-c",${t.vi},1.08,.45);
` });
}

// ---------------- S3b — HYPERFRAMES: linguagem natural → edição (17.0 → 24.0) ----------------
{
  const t = { de: at("descreve"), ln: at("linguagem"), pe: at("Pega"), co: at("coloque"), le: at("legenda,"), cr: at("crie"), ab: at("abertura"), re: at("renderiza"), mi: at("mim.") };
  const txt = "Pega esse vídeo, coloque uma legenda, crie uma abertura e renderiza pra mim.";
  V.scene({ id: "s3b", t0: 16.85, t1: 24.0, in: "rise", html: `
    ${header("s3b", 1, "HyperFrames", "linguagem natural", C.hf)}
    <div class="abs prompt" id="s3b-pr" style="left:70px;top:300px;width:940px">
      <div class="row gap12" style="margin-bottom:12px"><div class="ic" style="width:34px;height:34px">${icon("message-square-text", C.hf, 2)}</div><div class="mono" style="font-size:22px;color:#a6b0c6">você → Claude Code</div></div>
      <div class="pt" id="s3b-tx" data-text="${txt}"></div>
    </div>
    <div class="abs pv" id="s3b-pv" style="left:70px;top:545px">
      <div class="abs" style="inset:0;background:radial-gradient(500px 300px at 30% 30%,rgba(245,158,11,.35),transparent),radial-gradient(500px 360px at 80% 80%,rgba(47,123,255,.4),transparent)"></div>
      <div class="abs" style="left:380px;top:170px;width:180px;height:180px;border-radius:50%;background:rgba(255,255,255,.15);display:grid;place-items:center"><div style="width:44%;height:44%">${icon("play", "#fff", 2)}</div></div>
      <div class="abs center-x tc" id="s3b-cap" style="bottom:40px;width:700px;font:800 40px Inter;text-shadow:0 3px 10px rgba(0,0,0,.8)">legenda <span style="color:${C.hf}">sincronizada</span></div>
      <div class="abs" id="s3b-ttl" style="opacity:0;inset:0;background:rgba(6,10,19,.85);display:grid;place-items:center"><div class="tc"><div class="kicker" style="color:${C.hf}">abertura</div><div class="display" style="font-size:96px">MEU VÍDEO</div></div></div>
      <div class="abs mono" style="left:20px;top:16px;font-size:20px;color:rgba(255,255,255,.7)">preview</div>
    </div>
    <div class="abs win" id="s3b-term" style="left:70px;top:1090px;width:940px">
      <div class="term" style="padding:16px 26px;font-size:24px"><span class="p">$</span> npx hyperframes render   <span id="s3b-pct" class="y">0%</span>   <span id="s3b-ok" class="p" style="opacity:0;display:inline-block">◇ renders/video.mp4</span></div>
      <div style="height:8px;background:rgba(160,190,255,.12)"><div id="s3b-bar" style="height:8px;width:100%;background:${C.hf};transform-origin:left center"></div></div>
    </div>
  `, js: `
${headerJs("s3b", t.de - 0.1, "whoosh_s")}
inn("#s3b-pr",${t.de},"up",.45);
type("#s3b-tx",${t.pe - 0.05},${(t.mi - t.pe + 0.3).toFixed(2)});${S("typing", t.pe - 0.05, .35)}
glow("#s3b-pr",${t.ln},"rgba(245,158,11,.45)");unglow("#s3b-pr",${t.pe});
inn("#s3b-pv",${t.pe},"rise",.55);${S("whoosh_s", t.pe, .5)}
inn("#s3b-cap",${t.le},"up",.35);${S("pop", t.le, .65)}
fromTo("#s3b-ttl",{opacity:0,scale:1.1},{opacity:1,scale:1,duration:.4,ease:E.o},${t.ab - 0.1});${S("impact", t.ab - 0.1, .45)}
to("#s3b-ttl",{opacity:0,duration:.3},${t.re - 0.1});
inn("#s3b-term",${t.re - 0.2},"up",.35);
fromTo("#s3b-bar",{scaleX:0},{scaleX:1,duration:${(t.mi - t.re + 0.1).toFixed(2)},ease:"power1.inOut"},${t.re});
count("#s3b-pct",${t.re},${(t.mi - t.re + 0.1).toFixed(2)},0,100,"pct");${S("counter", t.re, .5)}
inn("#s3b-ok",${t.mi + 0.15},"left",.3);${S("confirm", t.mi + 0.15, .6)}
` });
}

// ---------------- S4a — GOOGLE WORKSPACE CLI (24.0 → 31.6) ----------------
{
  const t = { s: at("segundo"), go: at("Google"), cli: at("CLI,"), pj: at("projeto"), os: at("open"), cc: at("Cloud Code"), cv: at("conversar"), ec: at("ecossistema"), g2: at("Google", 2) };
  const gicons = ["google-gmail.svg", "google-drive.svg", "google-calendar.svg", "google-icon.svg"];
  V.overlayHtml += `<div id="s4-vw" style="position:absolute;left:70px;top:358px;width:470px;height:836px;opacity:0;overflow:hidden;border-radius:0 0 26px 26px"><video id="s4-vid" src="assets/video/gws_demo.mp4" muted playsinline data-start="${(t.go - 0.3).toFixed(2)}" data-duration="${(31.6 - t.go + 0.3).toFixed(2)}" data-track-index="5" data-media-start="0" style="display:block;width:470px;height:836px;object-fit:cover"></video></div>`;
  V.scene({ id: "s4", t0: 23.85, t1: 31.6, in: "left", push: 0, html: `
    ${header("s4", 2, "Workspace CLI", "google workspace · terminal", C.gws)}
    <div class="abs win" id="s4-demo" style="left:70px;top:310px;width:470px">
      <div class="win-bar" style="height:48px"><i></i><i></i><i></i><span class="t" style="font-size:18px">gws · demo oficial</span></div>
      <div style="width:470px;height:836px;background:#151515"></div>
    </div>
    <div class="abs col" style="left:590px;top:330px;width:420px;align-items:center;gap:22px">
      <div class="chip blue" id="s4-os" style="font-size:28px">${icon("git-branch", "#8ab4ff")}open source</div>
      <div class="tile" id="s4-cc" style="width:170px;height:170px;border-radius:44px;background:linear-gradient(160deg,#2a1d18,#140e0c);border-color:rgba(217,119,87,.5)"><img src="${logo("claude-icon.svg")}"/></div>
      <div class="ic" id="s4-ar" style="width:60px;height:60px">${icon("arrow-down-up", "#8ab4ff", 2.4)}</div>
      <div class="tile white" id="s4-gws" style="width:170px;height:170px;border-radius:44px"><img src="${logo("gws-icon.png")}" style="width:80%;height:80%"/></div>
      <div class="ic" id="s4-ar2" style="width:60px;height:60px">${icon("arrow-down-up", "#8ab4ff", 2.4)}</div>
      <div class="row gap12" id="s4-g">${gicons.map((g, i) => `<div class="tile white" id="s4-g${i}" style="width:92px;height:92px;border-radius:26px"><img src="${logo(g)}"/></div>`).join("")}</div>
      <div class="mono tc" id="s4-cmd" style="font-size:22px;color:#a9c7ff;margin-top:6px">Drive · Gmail · Calendar · Sheets…</div>
    </div>
  `, js: `
${headerJs("s4", t.s)}
inn("#s4-demo",${t.go - 0.2},"rise",.6);fromTo("#s4-vw",{opacity:0,y:70},{opacity:1,y:0,duration:.6,ease:E.o},${t.go - 0.2});to("#s4-vw",{opacity:0,y:-50,duration:.32,ease:"power2.in"},${(31.6 - 0.32).toFixed(2)});
inn("#s4-os",${t.os - 0.1},"pop",.4);${S("pop", t.os - 0.1, .6)}
inn("#s4-cc",${t.cc - 0.15},"pop",.4);${S("pop", t.cc - 0.15, .55)}
inn("#s4-ar",${t.cv - 0.1},"down",.35);inn("#s4-gws",${t.cv},"pop",.4);
inn("#s4-ar2",${t.ec - 0.25},"down",.35);
${gicons.map((_, i) => `inn("#s4-g${i}",${(t.ec + i * 0.09).toFixed(2)},"pop",.4);`).join("")}${S("pop_multi", t.ec, .6)}
inn("#s4-cmd",${t.g2 - 0.2},"fade",.4);
` });
}

// ---------------- S4b — CAIXA DE ENTRADA → SEPARAR O QUE PRECISA DE RESPOSTA (31.6 → 37.3) ----------------
{
  const t = { vp: at("Você pode pedir"), an: at("analisar"), cx: at("caixa"), ho: at("hoje"), se: at("separar"), tu: at("tudo"), pr: at("precisa"), re: at("resposta.") };
  const mails = [["C", "#4285f4", "Cliente", "Proposta: pode revisar até amanhã?", 1], ["N", "#64748b", "Newsletter", "As novidades da semana", 0], ["E", "#a142f4", "Equipe", "Dúvida sobre o cronograma", 1], ["P", "#64748b", "Promoções", "Oferta por tempo limitado", 0], ["F", "#e37400", "Fornecedor", "Confirmar entrega de sexta?", 1], ["S", "#64748b", "Sistema", "Seu relatório semanal", 0]];
  V.scene({ id: "s4b", t0: 31.45, t1: 37.3, in: "rise", html: `
    ${header("s4b", 2, "Workspace CLI", "gws gmail +triage", C.gws)}
    <div class="abs win" id="s4b-in" style="left:70px;top:300px;width:940px">
      <div class="win-bar"><img src="${logo("google-gmail.svg")}" style="width:34px;height:34px"/><span class="t" style="margin-left:8px">Caixa de entrada · hoje</span></div>
      ${mails.map(([a, c, f, s, need], i) => `<div class="mail" id="s4b-m${i}"><div class="av" style="background:${c}">${a}</div><div><div>${f}</div><div class="sub">${s}</div></div>${need ? `<div class="tag" id="s4b-tg${i}">precisa de resposta</div>` : ""}</div>`).join("")}
    </div>
    <div class="abs row gap16" id="s4b-res" style="left:70px;top:1090px;width:940px;justify-content:center">
      <div class="chip blue" style="font-size:32px">${icon("reply", "#8ab4ff")}3 precisam de resposta</div>
    </div>
  `, js: `
${headerJs("s4b", t.vp - 0.15, "whoosh_s")}
inn("#s4b-in",${t.an - 0.2},"rise",.55);
fromTo("#s4b-in .mail",{opacity:0,x:60},{opacity:1,x:0,duration:.35,stagger:.07,ease:E.o},${t.cx - 0.1});${S("tick_roll", t.cx - 0.1, .35)}
${mails.map((m, i) => (m[4] ? `inn("#s4b-tg${i}",${(t.pr - 0.1 + i * 0.06).toFixed(2)},"pop",.35);` : `to("#s4b-m${i}",{opacity:.35,duration:.35},${(t.se + 0.1).toFixed(2)});`)).join("")}
${S("confirm", t.pr - 0.1, .55)}
inn("#s4b-res",${t.re},"up",.4);${S("ding", t.re, .45)}
` });
}

// ---------------- S5a — APIFY: milhares de scrapers prontos (37.3 → 41.4) ----------------
{
  const t = { te: at("terceiro"), ap: at("WapFy,"), mi: at("milhares"), sc: at("scrapers"), pr: at("prontos.") };
  V.scene({ id: "s5", t0: 37.15, t1: 41.4, in: "left", html: `
    ${header("s5", 3, "Apify", "milhares de scrapers prontos", C.ap)}
    <div class="abs win" id="s5-img" style="left:70px;top:330px;width:940px">
      <div class="win-bar"><img src="${logo("apify.svg")}" style="width:32px;height:32px"/><span class="t" style="margin-left:8px">Apify MCP Server · Actors</span></div>
      <img src="assets/photos/apify-mcp-server.png" style="display:block;width:940px;height:529px;object-fit:cover"/>
    </div>
    <div class="abs row gap12" id="s5-ch" style="left:70px;top:960px;width:940px;justify-content:center;flex-wrap:wrap">
      ${["Instagram Scraper", "Google Maps", "TikTok", "+ milhares de Actors"].map((x, i) => `<div class="chip ${i === 3 ? "green" : ""}" id="s5-c${i}" style="font-size:28px">${x}</div>`).join("")}
    </div>
  `, js: `
${headerJs("s5", t.te)}
inn("#s5-img",${t.ap - 0.1},"rise",.6);
fromTo("#s5-img > img",{scale:1.25,transformOrigin:"70% 50%"},{scale:1,duration:2.6,ease:"power2.out"},${t.ap});
${[0, 1, 2, 3].map((i) => `inn("#s5-c${i}",${(t.mi + i * 0.15).toFixed(2)},"pop",.35);`).join("")}${S("pop_multi", t.mi, .6)}
glow("#s5-c3",${t.pr},"rgba(52,211,153,.5)");
` });
}

// ---------------- S5b — 100 ACADEMIAS NO INSTAGRAM SEM SITE (41.4 → 48.5) ----------------
{
  const t = { vp: at("Você pode pedir", 2), ex: at("exemplo,"), en: at("encontra"), n: at("100"), ac: at("academias"), ig: at("Instagram"), se: at("separa"), aq: at("aquelas"), ns: at("site.") };
  const txt = "“Encontra 100 academias no Instagram da minha cidade e separa aquelas que não têm site.”";
  const rows = [["@academia_01", "12,4 mil", 1], ["@academia_02", "8,1 mil", 0], ["@academia_03", "5,7 mil", 1], ["@academia_04", "3,9 mil", 0], ["@academia_05", "2,2 mil", 1]];
  V.scene({ id: "s5b", t0: 41.25, t1: 48.5, in: "rise", html: `
    ${header("s5b", 3, "Apify", "instagram scraper", C.ap)}
    <div class="abs prompt" id="s5b-pr" style="left:70px;top:300px;width:940px;border-color:rgba(52,211,153,.4)"><div class="pt" id="s5b-tx" data-text="${esc(txt)}" style="font-size:31px"></div></div>
    <div class="abs row gap16" id="s5b-ct" style="left:70px;top:530px;width:940px">
      <img src="${logo("instagram-icon.svg")}" style="width:58px;height:58px"/><div class="display" id="s5b-n" style="font-size:72px">0</div><div class="h3" style="font-size:34px;color:#a6b0c6">academias encontradas</div>
    </div>
    <div class="abs tbl" id="s5b-tb" style="left:70px;top:640px">
      <div class="tr th"><span>perfil</span><span>seguidores</span><span>site</span></div>
      ${rows.map(([p, f, sem], i) => `<div class="tr" id="s5b-r${i}"><span>${p}</span><span style="color:#a6b0c6">${f}</span><span id="s5b-s${i}" style="color:${sem ? "#ff7a88" : "#9be9a8"}">${sem ? "— sem site" : "✓ tem site"}</span></div>`).join("")}
    </div>
    <div class="abs mono" style="left:70px;top:1160px;font-size:19px;color:#6b7690">dados ilustrativos</div>
  `, js: `
${headerJs("s5b", t.vp - 0.15, "whoosh_s")}
inn("#s5b-pr",${t.vp},"up",.45);
type("#s5b-tx",${t.en - 0.1},${(t.ns - t.en + 0.2).toFixed(2)});${S("typing", t.en - 0.1, .3)}
inn("#s5b-ct",${t.n - 0.15},"left",.4);count("#s5b-n",${t.n - 0.1},.9,0,100,"int");${S("counter", t.n - 0.1, .55)}
inn("#s5b-tb",${t.ac},"rise",.5);
fromTo("#s5b-tb .tr:not(.th)",{opacity:0,x:50},{opacity:1,x:0,duration:.3,stagger:.08},${t.ig - 0.1});${S("tick_roll", t.ig - 0.1, .35)}
${rows.map((r, i) => (r[2] ? `bgc("#s5b-r${i}",${(t.ns - 0.4 + i * 0.05).toFixed(2)},"rgba(255,77,94,.16)");` : `to("#s5b-r${i}",{opacity:.35,duration:.3},${(t.aq).toFixed(2)});`)).join("")}
${S("alert", t.ns - 0.4, .5)}
` });
}

// ---------------- S6a — AGENT SKILLS (48.5 → 54.5) ----------------
{
  const t = { q: at("Quarto"), ag: at("Agent"), rp: at("repositório"), ad: at("Adios"), m20: at("20"), sk: at("skills", 2), age: at("agentes.") };
  const skills = ["spec-driven-development", "planning-and-task-breakdown", "test-driven-development", "code-review-and-quality", "security-and-hardening", "debugging-and-error-recovery", "incremental-implementation", "shipping-and-launch"];
  V.scene({ id: "s6", t0: 48.35, t1: 54.5, in: "left", html: `
    ${header("s6", 4, "Agent Skills", "repositório do addy osmani", C.sk)}
    <div class="abs" id="s6-repo" style="left:70px;top:300px">${ghRepo({ id: "s6-gh", owner: "addyosmani", repo: "agent-skills", avatar: logo("github-icon.svg"), desc: "Production-grade engineering skills for AI coding agents.", stars: "★", starId: "s6-st", tabs: false })}</div>
    <div class="abs row" id="s6-cnt" style="left:70px;top:640px;width:940px;justify-content:center;gap:20px"><div class="display" style="font-size:150px;color:${C.sk}" id="s6-n">+0</div><div class="h3" style="font-size:44px">skills para agentes</div></div>
    <div class="abs" style="left:70px;top:850px;width:940px;display:flex;flex-wrap:wrap;gap:12px;justify-content:center">${skills.map((s, i) => `<div class="chip mono" id="s6-c${i}" style="font-size:22px;padding:10px 18px;border-color:rgba(167,139,250,.5);color:#ddd2ff">${s}</div>`).join("")}</div>
  `, js: `
${headerJs("s6", t.q)}
inn("#s6-repo",${t.rp - 0.2},"rise",.55);
inn("#s6-cnt",${t.m20 - 0.4},"up",.4);
count("#s6-n",${t.m20 - 0.15},.6,0,20,"plus");${S("counter", t.m20 - 0.15, .5)}
${skills.map((_, i) => `inn("#s6-c${i}",${(t.sk + i * 0.07).toFixed(2)},"pop",.35);`).join("")}${S("pop_multi", t.sk, .5)}
` });
}

// ---------------- S6b — PROCESSO: entender → tarefas → executar → verificar (54.5 → 66.1) ----------------
{
  const t = { ev: at("Em vez"), cr: at("Cria"), es: at("estabelece"), pr: at("processo."), ag: at("agente"), en: at("entende"), di: at("divide"), ex: at("executa"), ve: at("verifica"), rs: at("resultados.") };
  const items = [["entende o que precisa ser feito", t.en], ["divide em tarefas", t.di], ["executa uma por vez", t.ex], ["verifica os resultados", t.ve]];
  const life = ["DEFINE", "PLAN", "BUILD", "VERIFY", "REVIEW", "SHIP"];
  V.scene({ id: "s6b", t0: 54.35, t1: 66.1, in: "rise", push: 0.02, html: `
    ${header("s6b", 4, "Agent Skills", "processo, não pedido solto", C.sk)}
    <div class="abs" id="s6b-ask" style="left:250px;top:300px;width:600px;height:110px;border-radius:30px;background:#2f7bff;display:grid;place-items:center;font:800 42px Inter">“Cria meu aplicativo”<div id="s6b-x" style="position:absolute;left:30px;right:30px;top:50%;height:8px;margin-top:-4px;background:#ff4d5e;border-radius:4px"></div></div>
    <div class="abs center-x tc" id="s6b-h" style="top:450px;width:1000px"><div class="h2">um <span style="color:${C.sk}">processo</span></div></div>
    <div class="abs col gap12" style="left:110px;top:560px;width:860px">
      ${items.map(([l], i) => `<div class="chk card" id="s6b-i${i}"><div class="bx" id="s6b-b${i}"><span id="s6b-k${i}" style="display:grid">${icon("check", "#0b1222", 3.4)}</span></div><span>${l}</span></div>`).join("")}
    </div>
    <div class="abs row" id="s6b-life" style="left:70px;top:1150px;width:940px;justify-content:space-between">${life.map((l, i) => `<div class="mono" id="s6b-l${i}" style="font-size:22px;font-weight:700;color:#7f8db0">${l}${i < 5 ? " ›" : ""}</div>`).join("")}</div>
  `, js: `
${headerJs("s6b", t.ev - 0.1, "whoosh_s")}
inn("#s6b-ask",${t.cr - 0.25},"pop",.45);${S("pop", t.cr - 0.25, .6)}
strike("#s6b-x",${t.es - 0.1},.35);to("#s6b-ask",{opacity:.4,scale:.9,duration:.4},${t.es + 0.2});${S("glitch", t.es - 0.1, .5)}
inn("#s6b-h",${t.pr - 0.25},"up",.4);
${items.map(([, tt], i) => `inn("#s6b-i${i}",${(t.ag - 0.1 + i * 0.1).toFixed(2)},"left",.4);set("#s6b-k${i}",{opacity:0},${t.ag - 0.1});`).join("")}
${items.map(([, tt], i) => `bgc("#s6b-b${i}",${tt.toFixed(2)},"${C.sk}");fromTo("#s6b-k${i}",{opacity:0,scale:.3},{opacity:1,scale:1,duration:.3,ease:E.back},${tt.toFixed(2)});glow("#s6b-i${i}",${tt.toFixed(2)},"rgba(167,139,250,.45)");${i > 0 ? `unglow("#s6b-i${i - 1}",${tt.toFixed(2)});` : ""}${V.sfx("confirm", tt, 0.5)}`).join("\n")}
inn("#s6b-life",${t.ve + 0.3},"fade",.5);
${life.map((_, i) => `color("#s6b-l${i}",${(t.rs - 0.3 + i * 0.1).toFixed(2)},"${C.sk}");`).join("")}
` });
}

// ---------------- S7a — PLAYWRIGHT CLI: narração não é prova (66.1 → 76.4) ----------------
{
  const t = { q: at("quinto"), pw: at("Playwright"), cli: at("CLI", 2), ms: at("Microsoft,"), po: at("porque"), na: at("narração"), pr: at("Prova."), af: at("agente", 2), fu: at("funcionou"), pe: at("perfeitamente"), ns: at("não significa"), rf: at("realmente") };
  V.scene({ id: "s7", t0: 65.95, t1: 76.4, in: "left", html: `
    ${header("s7", 5, "Playwright CLI", "da microsoft · testes no navegador", C.pw)}
    <div class="abs center-x row" id="s7-logos" style="top:310px;width:940px;justify-content:center;gap:30px">
      <div class="tile white" style="width:170px;height:170px;border-radius:44px"><img src="${logo("playwright.svg")}"/></div>
      <div class="tile white" style="width:170px;height:170px;border-radius:44px"><img src="${logo("microsoft-icon.svg")}"/></div>
    </div>
    <div class="abs center-x tc" id="s7-h" style="top:530px;width:1000px"><div class="display" style="font-size:96px">narração<br/>não é <span style="color:${C.pw}">prova</span></div></div>
    <div class="abs row gap20" id="s7-bub" style="left:110px;top:820px;width:860px">
      <div class="agent" style="width:120px;height:120px;border-radius:32px;flex:none">${icon("bot", "#22d3ee", 1.8)}</div>
      <div style="position:relative;padding:28px 34px;border-radius:30px;background:#1d2840;font:700 40px Inter" id="s7-say">“Funcionou perfeitamente ✅”<div id="s7-x" style="position:absolute;left:20px;right:20px;top:50%;height:8px;margin-top:-4px;background:#ff4d5e;border-radius:4px"></div></div>
    </div>
    <div class="abs center-x chip red" id="s7-np" style="top:1020px;font-size:32px;left:0;right:0;width:max-content">${icon("shield-x", "#ff4d5e")}sem teste, sem prova</div>
  `, js: `
${headerJs("s7", t.q)}
inn("#s7-logos",${t.pw - 0.1},"pop",.45);${S("pop", t.pw - 0.1, .6)}
pulse("#s7-logos",${t.ms},1.06,.4);
inn("#s7-h",${t.na - 0.15},"slam");${S("impact", t.na - 0.15, .7)}
inn("#s7-bub",${t.af - 0.1},"left",.45);${S("pop", t.fu, .6)}
strike("#s7-x",${t.ns},.35);${S("glitch", t.ns, .7)}
to("#s7-say",{backgroundColor:"rgba(255,77,94,.18)",color:"#ffb3bd",duration:.3},${t.ns + 0.1});shake("#s7-bub",${t.ns + 0.1});
inn("#s7-np",${t.rf - 0.1},"up",.4);${S("alert", t.rf, .6)}
` });
}

// ---------------- S7b — NAVEGADOR DE VERDADE: abrir, clicar, preencher, resultado (76.4 → 83.0) ----------------
{
  const t = { co: at("Com"), pw: at("Playwright", 2), ab: at("abrir"), na: at("navegador"), cl: at("clicar,"), pr: at("preencher"), fo: at("formulários"), mo: at("mostrar"), re: at("resultado.") };
  V.scene({ id: "s7b", t0: 76.25, t1: 83.0, in: "rise", html: `
    ${header("s7b", 5, "Playwright CLI", "navegador de verdade", C.pw)}
    <div class="abs win" id="s7b-br" style="left:110px;top:300px;width:860px;height:600px">
      <div class="win-bar"><i></i><i></i><i></i><div style="margin-left:16px;flex:1;height:38px;border-radius:10px;background:#0b1222;display:flex;align-items:center;padding:0 16px;font:500 21px 'JetBrains Mono';color:#9aa6bd">localhost:3000/checkout</div></div>
      <div class="form" style="height:538px">
        <div style="font:800 40px Inter">Checkout</div>
        <div class="lb">nome</div><div class="in" id="s7b-f1"><span id="s7b-v1" data-text="Ana Souza"></span></div>
        <div class="lb">e-mail</div><div class="in" id="s7b-f2"><span id="s7b-v2" data-text="ana@exemplo.com"></span></div>
        <div class="btn" id="s7b-btn">Finalizar compra</div>
      </div>
      <div class="abs" id="s7b-ok" style="opacity:0;left:0;right:0;top:62px;bottom:0;background:rgba(255,255,255,.96);display:grid;place-items:center"><div class="tc"><div style="width:130px;height:130px;margin:0 auto">${icon("circle-check-big", "#16a34a", 2)}</div><div style="font:800 46px Inter;color:#0b1222;margin-top:10px">Pedido confirmado</div></div></div>
      <div class="abs" id="s7b-cur" style="left:600px;top:560px;width:64px;height:64px">${icon("mouse-pointer-2", "#111", 2)}</div>
      <div class="abs" id="s7b-flash" style="opacity:0;inset:0;background:#fff"></div>
    </div>
    <div class="abs win" id="s7b-term" style="left:70px;top:940px;width:940px">
      <div class="term" style="font-size:22.5px;padding:16px 24px;line-height:1.5"><span id="s7b-c1" style="opacity:0"><span class="p">$</span> playwright-cli open localhost:3000/checkout</span>
<span id="s7b-c2" style="opacity:0"><span class="p">$</span> playwright-cli fill e5 "Ana Souza"</span>
<span id="s7b-c3" style="opacity:0"><span class="p">$</span> playwright-cli click e9</span>
<span id="s7b-c4" style="opacity:0"><span class="p">$</span> playwright-cli screenshot  <span class="p">✓</span></span></div>
    </div>
  `, js: `
${headerJs("s7b", t.co - 0.1, "whoosh_s")}
inn("#s7b-term",${t.co + 0.1},"up",.4);
inn("#s7b-c1",${t.ab - 0.1},"left",.3);${S("typing", t.ab - 0.1, .4)}
inn("#s7b-br",${t.ab + 0.1},"zoom",.5);${S("whoosh_s", t.ab + 0.1, .5)}
fromTo("#s7b-cur",{x:-380,y:-330},{x:-160,y:-245,duration:.5,ease:E.io},${t.cl - 0.45});
fromTo("#s7b-cur",{scale:1},{scale:.75,duration:.08,yoyo:true,repeat:1},${t.cl});${S("click", t.cl, .9)}
glow("#s7b-f1",${t.cl},"rgba(47,123,255,.5)");
inn("#s7b-c2",${t.pr - 0.1},"left",.3);
type("#s7b-v1",${t.pr},.5);type("#s7b-v2",${t.fo - 0.1},.55);${S("typing", t.pr, .45)}
unglow("#s7b-f1",${t.fo - 0.1});glow("#s7b-f2",${t.fo - 0.1},"rgba(47,123,255,.5)");unglow("#s7b-f2",${t.mo - 0.4});
inn("#s7b-c3",${t.fo + 0.4},"left",.3);
to("#s7b-cur",{x:0,y:0,duration:.35,ease:E.io},${t.mo - 0.6});
fromTo("#s7b-btn",{scale:1},{scale:.95,duration:.08,yoyo:true,repeat:1},${t.mo - 0.2});${S("click", t.mo - 0.2, .9)}
fromTo("#s7b-ok",{opacity:0},{opacity:1,duration:.25},${t.mo});${S("confirm", t.mo, .7)}
inn("#s7b-c4",${t.re - 0.3},"left",.3);
fromTo("#s7b-flash",{opacity:.0},{opacity:.9,duration:.06,yoyo:true,repeat:1},${t.re});${S("stamp", t.re, .35)}
` });
}

// ---------------- S8 — RECAP: mesmo Claude, chatbot vs operação (83.0 → 94.6) ----------------
{
  const t = { ag: at("agora"), me: at("mesmo", 2), ud: at("Uma delas"), ch: at("chatbot,", 2), en: at("enquanto"), op: at("operação", 2), ut: at("Utilizando"), mo: at("modelo.") };
  const sp = split("s8");
  V.scene({ id: "s8", t0: 82.85, t1: 94.6, in: "zoom", push: 0.025, html: `
    <div class="abs center-x tc" id="s8-h" style="top:150px;width:1000px"><div class="h2">o <span style="color:${C.claude}">mesmo Claude</span></div></div>
    ${sp.html}
    <div class="abs center-x tc" id="s8-mm" style="top:1010px;width:1000px"><div class="chip" style="font-size:34px;padding:18px 34px"><img src="${logo("claude-icon.svg")}" style="width:40px;height:40px"/>mesmo modelo · 5 projetos open source</div></div>
  `, js: `
inn("#s8-h",${t.me - 0.2},"up",.4);${S("whoosh", t.ag - 0.1, .55)}
pulse("#s8-eq",${t.me + 0.3},1.4,.5);
${splitJs("s8", sp, t.ch - 0.6, t.op - 0.6, t.op - 0.3)}
${S("lock", t.ch - 0.6, .55)}${S("power", t.op - 0.6, .7)}${S("pop_multi", t.op - 0.5, .55)}
inn("#s8-mm",${t.ut},"up",.45);${S("ding", t.mo, .5)}
glow("#s8-L",${t.mo},"rgba(217,119,87,.5)");
` });
}

// ---------------- S9 — CTA GITHUB (94.6 → end) ----------------
{
  const t = { co: at("Comenta"), gh: at("GitHub", 2), seg: at("conhecer"), fe: at("cinco", 2) };
  V.scene({ id: "s9", t0: 94.45, t1: 98.194, last: true, in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc kicker" id="s9-k" style="top:220px;width:940px">comenta a palavra</div>
    <div class="abs center-x tc" id="s9-word" style="top:290px;width:1040px"><div class="display" style="font-size:170px;background:linear-gradient(90deg,#2f7bff,#22d3ee);-webkit-background-clip:text;color:transparent">GITHUB</div></div>
    <div class="abs igbox" id="s9-box" style="left:90px;top:530px"><div class="av"><div></div></div><div class="tx" id="s9-tx" data-text="GITHUB"></div><div class="send">Publicar</div></div>
    <div class="abs row" id="s9-row" style="left:70px;top:760px;width:940px;justify-content:space-between">
      ${TOOLS.map((tl, i) => `<div class="tnode" id="s9-t${i}" style="position:relative;width:150px;height:150px;border-radius:40px;background:${tl.bg};border-color:${C[tl.k]}">${tl.img ? `<img src="${logo(tl.img)}"/>` : icon(tl.ic, C.sk, 2)}</div>`).join("")}
    </div>
    <div class="abs center-x tc h3" id="s9-sub" style="top:960px;width:940px;color:#cfd6e4">os <span class="hl">cinco projetos</span> no seu comentário</div>
  `, js: `
inn("#s9-k",${t.co - 0.1},"fade",.3);
inn("#s9-box",${t.co},"up",.4);${S("pop", t.co, .6)}
type("#s9-tx",${t.gh},.4);${S("typing", t.gh, .5)}
inn("#s9-word",${t.gh},"slam");${S("impact", t.gh, .6)}${S("shimmer", t.gh + 0.15, .6)}
${TOOLS.map((_, i) => `inn("#s9-t${i}",${(t.seg - 0.2 + i * 0.08).toFixed(2)},"pop",.4);`).join("")}${S("pop_multi", t.seg - 0.2, .5)}
inn("#s9-sub",${t.fe - 0.1},"up",.4);
` });
}

V.write(`${ROOT}/projeto`);
