// LOTE 2 · 01 — STACK (Lendário 23:58) · ref 0a7bd5f6
import { Video, icon, logo } from "../lib/build.mjs";
import { KIT2_CSS, ctaHtml2, ctaJs2, tileImg, tileIcon, P2, L2ROOT, TR } from "../lib/kit2.mjs";

const OUT = `${L2ROOT}/01_STACK`;
const V = new Video({
  id: "l01", title: "Claude Code Stack", kit2: true, theme: "dark", capMaxWords: 3, capMaxChars: 18,
  wordsPath: `${TR}/2026-10-15T23_58_36_Lend_rio_-_Cheerful_Vibrant_and_Fun.json`, audioDur: 77.48,
  accent: "#ff6a3d", capKey: "#ffd23f", vars: { a1: "#ff6a3d", a2: "#2f7bff", a3: "#ffd23f", capbg: "#ffd23f", capfg: "#111" },
  fixes: { "Clod": "Claude", "Cloud": "Claude", "stack": "STACK" },
  keywords: ["Claude", "Code", "poder", "OmniRoute,", "Headroom.", "tokens", "hooks,", "subagentes", "plugins,", "skills", "MCP.", "STACK", "mais!"],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
const O = "#ff6a3d", Y = "#ffd23f", B = "#2f7bff", G = "#22c55e";
V.extraCss = KIT2_CSS + `
.cc{width:300px;height:300px;border-radius:76px;display:grid;place-items:center;background:linear-gradient(160deg,#2a1d18,#140e0c);border:3px solid rgba(255,106,61,.6);box-shadow:0 0 0 10px rgba(255,106,61,.12),0 40px 90px rgba(0,0,0,.6)}
.cc img{width:60%}
.orb{position:absolute;padding:16px 26px;border-radius:999px;font:900 30px Inter;color:#111;box-shadow:0 12px 0 rgba(0,0,0,.25),0 20px 40px rgba(0,0,0,.35);white-space:nowrap}
.ctx{height:70px;border-radius:16px;display:flex;align-items:center;gap:14px;padding:0 22px;font:700 28px "JetBrains Mono";color:#dbe5ff;background:#18213a;border:2px solid rgba(160,190,255,.2)}
.ctx svg{width:34px;height:34px}
`;
// swipes between major beats
[at("E algumas"), at("Uma delas"), at("Outra ferramenta"), at("E tem"), at("Você pode combinar"), at("O resultado"), at("E o mais"), at("Quer conhecer")].forEach((t, i) => V.swipe(t - 0.05, [O, Y, B, O, Y, B, O, Y][i]));

// S1 HOOK — Claude Code com pouco poder
{
  const t = { cl: at("Clod"), me: at("menos"), po: at("poder"), re: at("realmente"), of: at("oferece.") };
  V.scene({ id: "s1", t0: 0, t1: 5.4, in: "none", push: 0.05, html: `
    <div class="abs center-x tc" id="s1-cc" style="top:170px;width:300px"><div class="cc"><img src="${logo("claude-icon.svg")}"/></div></div>
    <div class="abs center-x tc" id="s1-h" style="top:520px;width:1040px"><div class="kw" style="font-size:96px">CLAUDE CODE</div></div>
    <div class="abs center-x tc kicker" id="s1-k" style="top:660px;width:900px;font-size:30px">poder que você está usando</div>
    <div class="abs center-x" id="s1-m" style="top:720px;width:760px"><div class="meter"><div class="fill" id="s1-f" style="background:linear-gradient(90deg,#ef4444,#ff6a3d)"></div></div></div>
    <div class="abs center-x tc" id="s1-p" style="top:810px;width:600px"><div class="num-big" id="s1-n" style="font-size:150px;color:#ef4444">12%</div></div>
    <div class="abs" id="s1-q" style="left:700px;top:820px"><div class="sticker" style="transform:rotate(8deg)">E O RESTO?</div></div>
  `, js: `
fromTo("#s1-cc",{scale:1.4,rotation:-12},{scale:1,rotation:0,duration:.7,ease:E.back},0);
fromTo("#s1-h",{y:40},{y:0,duration:.4,ease:E.o},0);
fromTo("#s1-f",{scaleX:1},{scaleX:.12,duration:.7,ease:"power3.inOut"},${t.me - 0.2});${S("drop", t.me - 0.2, .7)}
count("#s1-n",${t.me - 0.2},.7,100,12,"pct");
shake("#s1-m",${t.po});${S("alert", t.po, .6)}
inn("#s1-q",${t.re},"pop",.4);${S("pop", t.re, .7)}
pulse("#s1-cc",${t.of},1.08,.4);
` });
}
// S2 — ferramentas mudam a experiência
{
  const t = { e: at("E algumas"), fe: at("ferramentas"), mu: at("mudar"), co: at("completamente"), ex: at("experiência.") };
  const orbs = [["OmniRoute", O], ["Headroom", Y], ["Hooks", "#fff"], ["Subagentes", "#7dd3fc"], ["Plugins", "#c4b5fd"], ["Skills", "#86efac"], ["MCP", "#fda4af"]];
  const pos = [[90, 260], [690, 230], [60, 760], [700, 800], [380, 180], [120, 520], [760, 520]];
  V.scene({ id: "s2", t0: 5.35, t1: 9.4, in: "zoom", push: 0.04, html: `
    <div class="abs center-x" style="top:400px;width:300px"><div class="cc" id="s2-cc"><img src="${logo("claude-icon.svg")}"/></div></div>
    ${orbs.map(([n, c], i) => `<div class="orb" id="s2-o${i}" style="left:${pos[i][0]}px;top:${pos[i][1]}px;background:${c}">${n}</div>`).join("")}
    <div class="abs center-x" id="s2-m" style="top:1000px;width:760px"><div class="meter"><div class="fill" id="s2-f" style="background:linear-gradient(90deg,#22c55e,#ffd23f)"></div></div></div>
    <div class="abs burst" id="s2-b" style="left:540px;top:550px"></div>
  `, js: `
fromTo("#s2-f",{scaleX:.12},{scaleX:.12,duration:.01},${t.e});
${orbs.map((_, i) => `inn("#s2-o${i}",${(t.fe + i * 0.11).toFixed(2)},"pop",.4);floaty("#s2-o${i}",${(t.fe + 0.5 + i * 0.05).toFixed(2)},1.4,10);`).join("")}${S("pop_multi", t.fe, .7)}
fromTo("#s2-f",{scaleX:.12},{scaleX:1,duration:.8,ease:"power3.out",immediateRender:false},${t.mu});${S("riser", t.mu - 0.3, .5)}
burst("#s2-b",${t.co + 0.2},30);${S("impact", t.co + 0.2, .7)}
pulse("#s2-cc",${t.co + 0.2},1.15,.5);
` });
}
// S3a — OmniRoute: diferentes provedores
{
  const t = { u: at("Uma delas"), om: at("OmniRoute,"), tr: at("trabalhar"), di: at("diferentes"), pr: at("provedores"), mo: at("modelos"), ia: at("artificial.") };
  const provs = ["openai", "claude", "gemini", "deepseek", "mistral", "kimi"];
  V.scene({ id: "s3", t0: 9.35, t1: 15.95, in: "left", push: 0.03, html: `
    <div class="abs" id="s3-st" style="left:70px;top:160px"><div class="sticker orange" style="font-size:60px;transform:rotate(-3deg)">${icon("route", "#fff", 2.6)}OmniRoute</div></div>
    <div class="abs kicker" id="s3-k" style="left:76px;top:290px;width:930px;font-size:24px;letter-spacing:.14em;line-height:1.55">The Free AI Gateway<br/>github.com/diegosouzapw</div>
    <div class="abs shot" id="s3-shot" style="left:70px;top:390px;width:940px;height:538px"><img src="${P2("01-providers.png")}"/></div>
    <div class="abs" style="left:70px;top:955px;width:940px;display:grid;grid-template-columns:repeat(6,1fr);gap:10px;justify-items:center">
      ${provs.map((p, i) => `<div class="prov" id="s3-p${i}" style="width:140px;height:140px"><img src="${logo(`prov-${p}.svg`)}"/></div>`).join("")}</div>
  `, js: `
inn("#s3-st",${t.om - 0.1},"slam");${S("impact", t.om - 0.1, .6)}
inn("#s3-k",${t.om + 0.3},"fade",.4);
fromTo("#s3-shot",{opacity:0,y:120,rotationX:-25,transformPerspective:1400},{opacity:1,y:0,rotationX:0,duration:.7,ease:E.o4},${t.tr - 0.2});
fromTo("#s3-shot img",{scale:1.25},{scale:1,duration:3,ease:"power2.out"},${t.tr});
${provs.map((_, i) => `inn("#s3-p${i}",${(t.di + i * 0.12).toFixed(2)},"pop",.4);`).join("")}${S("pop_multi", t.di, .7)}
pulse("#s3-p1",${t.ia},1.12,.4);
` });
}
// S3b — escolher modelo conforme a tarefa
{
  const t = { is: at("Isso"), es: at("escolher"), mo: at("modelos", 2), ta: at("tarefa,"), em: at("em"), un: at("única"), tu: at("tudo.") };
  const tasks = [["código", "code-2", "prov-claude.svg"], ["resumo", "file-text", "prov-gemini.svg"], ["pesquisa", "search", "prov-openai.svg"]];
  V.scene({ id: "s3b", t0: 15.9, t1: 22.25, in: "rise", html: `
    <div class="abs center-x tc" id="s3b-h" style="top:170px;width:1040px"><div class="kw" style="font-size:84px">o modelo <span class="hlbox">certo</span> pra cada tarefa</div></div>
    ${tasks.map(([n, ic, lg], i) => `
      <div class="abs chip" id="s3b-t${i}" style="left:70px;top:${430 + i * 190}px;font-size:36px;padding:22px 30px">${icon(ic, "#ffd23f")}${n}</div>
      <svg class="wires" viewBox="0 0 1080 1920"><path id="s3b-w${i}" d="M440 ${470 + i * 190} C 560 ${470 + i * 190}, 600 ${470 + i * 190}, 720 ${470 + i * 190}" stroke="#ffd23f" stroke-width="6" fill="none" stroke-linecap="round"/></svg>
      <div class="abs prov" id="s3b-m${i}" style="left:760px;top:${400 + i * 190}px;width:150px;height:150px"><img src="${logo(lg)}"/></div>`).join("")}
    <div class="abs center-x tc" id="s3b-x" style="top:1010px;width:900px"><div class="sticker red" style="font-size:40px">${icon("x", "#fff", 3)}1 modelo pra tudo</div></div>
  `, js: `
inn("#s3b-h",${t.is},"up",.45);
${tasks.map((_, i) => `inn("#s3b-t${i}",${(t.es + i * 0.15).toFixed(2)},"left",.4);draw("#s3b-w${i}",${(t.mo + i * 0.15).toFixed(2)},.45);inn("#s3b-m${i}",${(t.ta - 0.2 + i * 0.15).toFixed(2)},"pop",.4);`).join("")}${S("whoosh_s", t.mo, .5)}${S("pop_multi", t.ta - 0.2, .6)}
inn("#s3b-x",${t.un - 0.1},"slam");${S("glitch", t.un, .6)}
shake("#s3b-x",${t.tu});
` });
}
// S4 — Headroom: comprime o contexto
{
  const t = { o: at("Outra ferramenta"), hr: at("Headroom."), ot: at("otimizar"), ct: at("contexto"), red: at("reduzindo"), des: at("desnecessárias"), ap: at("aproveitando"), tk: at("tokens"), di: at("disponíveis.") };
  const blocks = [["terminal", "tool outputs"], ["scroll-text", "logs"], ["files", "arquivos"], ["history", "histórico"], ["database", "RAG chunks"]];
  V.scene({ id: "s4", t0: 22.2, t1: 33.05, in: "left", push: 0.03, html: `
    <div class="abs" id="s4-st" style="left:70px;top:160px"><div class="sticker" style="font-size:60px;transform:rotate(-3deg)">${icon("minimize-2", "#111", 2.6)}Headroom</div></div>
    <div class="abs kicker" id="s4-k" style="left:76px;top:268px;width:930px;font-size:22px;letter-spacing:.12em;line-height:1.5">comprime o que o agente lê<br/>github.com/chopratejas</div>
    <div class="abs col gap12" id="s4-stack" style="left:70px;top:372px;width:520px">${blocks.map(([ic, n], i) => `<div class="ctx" id="s4-b${i}">${icon(ic, "#7dd3fc")}${n}</div>`).join("")}</div>
    <div class="abs" id="s4-arrow" style="left:610px;top:520px;width:90px;height:90px">${icon("chevrons-right", "#ffd23f", 3)}</div>
    <div class="abs col" id="s4-out" style="left:720px;top:470px;width:290px;align-items:center;gap:12px"><div class="ctx" style="background:#ffd23f;color:#111;border:none;font-weight:800;font-size:22px;white-space:nowrap">${icon("sparkles", "#111")}contexto enxuto</div><div class="num-big" id="s4-n" style="font-size:90px;color:#22c55e">−0%</div><div class="kicker" style="font-size:20px">tokens</div></div>
    <div class="abs shot" id="s4-shot" style="left:120px;top:830px;width:840px;height:400px"><img src="${P2("headroom-savings.png")}" style="object-position:top"/></div>
  `, js: `
inn("#s4-st",${t.hr - 0.1},"slam");${S("impact", t.hr - 0.1, .6)}
inn("#s4-k",${t.hr + 0.3},"fade",.4);
${blocks.map((_, i) => `inn("#s4-b${i}",${(t.ot + i * 0.1).toFixed(2)},"left",.35);`).join("")}${S("pop_multi", t.ot, .55)}
glow("#s4-stack",${t.ct},"rgba(125,211,252,.35)");
${[1, 3].map((i) => `to("#s4-b${i}",{opacity:.15,x:-60,duration:.35},${(t.red + 0.2 + i * 0.1).toFixed(2)});`).join("")}
to("#s4-stack",{scaleY:.82,transformOrigin:"50% 0%",duration:.5,ease:"back.out(2)"},${t.des});${S("drop", t.des, .6)}
inn("#s4-arrow",${t.des - 0.2},"left",.35);inn("#s4-out",${t.des},"pop",.45);
count("#s4-n",${t.des + 0.1},1.2,0,-60,"pct");
inn("#s4-shot",${t.ap - 0.1},"rise",.6);${S("whoosh", t.ap - 0.15, .5)}
pulse("#s4-out",${t.tk},1.1,.45);${S("ding", t.tk, .5)}
` });
}
// S5 — E tem mais! hooks · subagentes · plugins
{
  const t = { e: at("E tem"), tm: at("mais!"), cl: at("Cloud"), ho: at("hooks,"), su: at("subagentes"), pl: at("plugins,"), es: at("estruturar"), fl: at("fluxos"), av: at("avançados.") };
  const cards = [["Hooks", "webhook", O, t.ho], ["Subagentes", "bot", B, t.su], ["Plugins", "puzzle", "#a855f7", t.pl]];
  V.scene({ id: "s5", t0: 33.0, t1: 42.95, in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc" id="s5-h" style="top:170px;width:1040px"><div class="kw" style="font-size:150px">E TEM <span style="color:${Y}">MAIS!</span></div></div>
    <div class="abs center-x row" id="s5-cc" style="top:400px;width:940px;justify-content:center;gap:20px"><img src="${logo("claude-icon.svg")}" style="width:70px"/><div class="h2" style="font-size:56px">Claude Code nativo</div></div>
    <div class="abs row" style="left:70px;top:540px;width:940px;justify-content:space-between">
      ${cards.map(([n, ic, c], i) => `<div class="card agentcard" id="s5-c${i}" style="border-color:${c}"><div class="ai" style="background:${c}">${icon(ic, "#fff", 2.2)}</div><div class="an">${n}</div></div>`).join("")}
    </div>
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s5-fl" d="M220 860 C 220 980, 540 980, 540 1060 M540 860 L540 1060 M860 860 C 860 980, 540 980, 540 1060" stroke="#ffd23f" stroke-width="6" fill="none" stroke-linecap="round"/></svg>
    <div class="abs center-x tc" id="s5-out" style="top:1070px;width:700px"><div class="sticker" style="font-size:38px">${icon("workflow", "#111", 2.6)}fluxos avançados</div></div>
  `, js: `
inn("#s5-h",${t.e},"slam");${S("impact", t.tm, .75)}
inn("#s5-cc",${t.cl - 0.1},"up",.4);
${cards.map(([, , , tt], i) => `inn("#s5-c${i}",${(tt - 0.08).toFixed(2)},"pop",.4);${V.sfx("pop", tt - 0.08, 0.7)}`).join("")}
draw("#s5-fl",${t.es},.8);${S("whoosh_s", t.es, .5)}
inn("#s5-out",${t.fl},"pop",.45);pulse("#s5-out",${t.av},1.1,.45);${S("confirm", t.av, .5)}
` });
}
// S6 — skills + MCP conectam ferramentas
{
  const t = { v: at("Você pode combinar"), co: at("combinar"), sk: at("skills"), mc: at("MCP."), pa: at("Para"), cn: at("conectar"), ex: at("executar"), es: at("especializados.") };
  const tools = [["database", "banco"], ["globe", "web"], ["git-branch", "GitHub"], ["mail", "e-mail"], ["calendar", "agenda"], ["file-spreadsheet", "planilhas"]];
  const cx = 540, cy = 760, R = 330;
  V.scene({ id: "s6", t0: 42.9, t1: 50.85, in: "rise", push: 0.04, html: `
    <div class="abs row" id="s6-top" style="left:70px;top:170px;width:940px;justify-content:center;gap:24px">
      <div class="sticker green" id="s6-sk" style="font-size:48px">${icon("sparkles", "#fff", 2.6)}Skills</div>
      <div id="s6-plus" style="font:900 60px Inter;opacity:.6">+</div>
      <div class="sticker blue" id="s6-mc" style="font-size:48px">${icon("plug", "#fff", 2.6)}MCP</div>
    </div>
    <svg class="wires" viewBox="0 0 1080 1920">${tools.map((_, i) => { const a = -Math.PI / 2 + i * Math.PI / 3; return `<path id="s6-w${i}" d="M${cx} ${cy} L${(cx + R * Math.cos(a)).toFixed(0)} ${(cy + R * Math.sin(a)).toFixed(0)}" stroke="rgba(255,210,63,.8)" stroke-width="5" fill="none" stroke-dasharray="10 10"/>`; }).join("")}</svg>
    <div class="abs" id="s6-hub" style="left:${cx - 120}px;top:${cy - 120}px"><div class="cc" style="width:240px;height:240px;border-radius:62px"><img src="${logo("claude-icon.svg")}"/></div></div>
    ${tools.map(([ic, n], i) => { const a = -Math.PI / 2 + i * Math.PI / 3; const x = cx + R * Math.cos(a), y = cy + R * Math.sin(a); return `<div class="node" id="s6-t${i}" style="left:${x - 75}px;top:${y - 75}px"><div class="dot">${icon(ic, "#ffd23f", 1.9)}</div><div class="lb">${n}</div></div>`; }).join("")}
  `, js: `
inn("#s6-hub",${t.v},"pop",.45);
inn("#s6-sk",${t.sk - 0.1},"slam");${S("impact", t.sk - 0.1, .55)}
inn("#s6-plus",${t.sk + 0.2},"pop",.3);inn("#s6-mc",${t.mc - 0.1},"slam");${S("impact", t.mc - 0.1, .55)}
${tools.map((_, i) => `draw("#s6-w${i}",${(t.cn + i * 0.08).toFixed(2)},.4);inn("#s6-t${i}",${(t.cn + 0.15 + i * 0.08).toFixed(2)},"pop",.4);`).join("")}${S("pop_multi", t.cn, .6)}
pulse("#s6-hub",${t.ex},1.12,.45);${S("power", t.ex, .5)}
` });
}
// S7 — muito além de conversar: a STACK se monta
{
  const t = { o: at("O resultado"), re: at("resultado"), am: at("ambiente"), al: at("além"), si: at("simplesmente"), cv: at("conversar"), ia: at("artificial.", 2) };
  const layers = [["MCP", "#fda4af"], ["Skills", "#86efac"], ["Plugins", "#c4b5fd"], ["Subagentes", "#7dd3fc"], ["Hooks", "#ffffff"], ["Headroom", Y], ["OmniRoute", O]];
  V.scene({ id: "s7", t0: 50.8, t1: 57.85, in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc" id="s7-h" style="top:160px;width:1040px"><div class="kw" style="font-size:80px">muito além de <span style="text-decoration:line-through;opacity:.55">conversar</span></div></div>
    <div class="abs center-x col" id="s7-tower" style="top:300px;width:720px;gap:10px">
      ${layers.map(([n, c], i) => `<div class="blk" id="s7-l${i}" style="background:${c};color:#111;height:96px;font-size:38px;justify-content:center">${n}</div>`).join("")}
      <div class="blk" id="s7-base" style="background:linear-gradient(160deg,#2a1d18,#140e0c);color:#fff;justify-content:center;border:3px solid rgba(255,106,61,.7)"><img src="${logo("claude-icon.svg")}" style="width:60px;height:60px"/>Claude Code</div>
    </div>
  `, js: `
inn("#s7-base",${t.o},"up",.4);
${layers.slice().reverse().map((_, k) => { const i = layers.length - 1 - k; return `fromTo("#s7-l${i}",{y:-500,opacity:0},{y:0,opacity:1,duration:.4,ease:"bounce.out"},${(t.re + k * 0.22).toFixed(2)});`; }).join("")}${S("tick_roll", t.re, .5)}
inn("#s7-h",${t.al - 0.2},"up",.4);
glow("#s7-tower",${t.al},"rgba(255,210,63,.4)");${S("ding", t.al, .5)}
` });
}
// S8 — comece com uma melhoria, teste, amplie
{
  const t = { e: at("E o mais"), na: at("não precisa"), tu: at("tudo"), po: at("Pode"), me: at("melhoria,"), te: at("testar"), am: at("ampliar"), cf: at("configuração") };
  const steps = [["1", "uma melhoria", O, t.me], ["2", "testar", B, t.te], ["3", "ampliar", G, t.am]];
  V.scene({ id: "s8", t0: 57.85, t1: 68.45, in: "left", push: 0.03, html: `
    <div class="abs center-x tc" id="s8-h" style="top:180px;width:1040px"><div class="kw" style="font-size:96px">não precisa<br/><span class="hlbox">tudo de uma vez</span></div></div>
    <div class="abs row" style="left:70px;top:560px;width:940px;justify-content:space-between">
      ${steps.map(([n, l, c], i) => `<div class="step3" id="s8-s${i}"><div class="sn" style="background:${c};color:#fff">${n}</div><div class="sl">${l}</div></div>`).join("")}
    </div>
    <div class="abs" style="left:150px;top:910px;width:780px"><div class="meter" style="width:780px"><div class="fill" id="s8-f" style="background:linear-gradient(90deg,#ff6a3d,#2f7bff,#22c55e)"></div></div></div>
    <div class="abs center-x tc kicker" id="s8-k" style="top:1010px;width:900px;font-size:28px">sua configuração cresce no seu ritmo</div>
  `, js: `
inn("#s8-h",${t.e},"slam");${S("impact", t.na, .55)}
fromTo("#s8-f",{scaleX:0},{scaleX:0,duration:.01},${t.e});
${steps.map(([, , , tt], i) => `inn("#s8-s${i}",${(tt - 0.1).toFixed(2)},"pop",.45);to("#s8-f",{scaleX:${((i + 1) / 3).toFixed(2)},duration:.5,ease:"power2.out"},${tt.toFixed(2)});${V.sfx("confirm", tt, 0.5)}`).join("\n")}
inn("#s8-k",${t.cf},"fade",.4);
` });
}
// S9 — CTA STACK
{
  const t = { q: at("Quer"), co: at("Comenta"), w: at("stack"), seg: at("segue") };
  V.scene({ id: "s9", t0: 68.4, t1: 77.48, last: true, in: "zoom", push: 0.03,
    html: ctaHtml2("s9", { pre: `quer a <span class="hlbox">lista completa?</span>`, word: "STACK", color: Y, sub: "OmniRoute · Headroom · hooks · subagentes · plugins · skills · MCP" }),
    js: ctaJs2(V, "s9", { q: t.q, co: t.co, word: t.w, seg: t.seg, sub: t.seg + 0.6 }) });
}
V.write(`${OUT}/projeto`);
