// LOTE 2 · 06 — CÓDIGO (Lendário 00:05) · ref a9c2c8a5 (ScrapeGraphAI)
// Comandos, trecho de código, nomes dos nós (FetchNode/ParseNode/GenerateAnswerNode) e saída vêm do README/código
// do repositório ScrapeGraphAI/Scrapegraph-ai. Nada de log inventado.
import { Video, icon } from "../lib/build.mjs";
import { KIT2_CSS, ctaHtml2, ctaJs2, P2, L2ROOT, TR } from "../lib/kit2.mjs";

const OUT = `${L2ROOT}/06_CODIGO`;
const GR = "#22c55e", SK = "#38bdf8", YE = "#facc15", PU = "#ad75ff", RD = "#ef4444";
const V = new Video({
  id: "l06", title: "Código no Terminal", kit2: true, theme: "dark", capMaxWords: 3, capMaxChars: 18,
  wordsPath: `${TR}/2026-10-16T00_05_57_Lend_rio_-_Cheerful_Vibrant_and_Fun.json`, audioDur: 42.0, // 40.59 s narração + respiro no CTA
  accent: GR, capKey: GR, vars: { a1: GR, a2: SK, a3: YE, capbg: GR, capfg: "#04120a" },
  fixes: {},
  keywords: ["manualmente", "agente", "terminal.", "instala", "instruções", "comandos,", "arquivos", "verificações", "funcionando.", "executar,", "testar", "corrigir"],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
V.extraCss = KIT2_CSS + `
.term{position:absolute;border-radius:26px;background:#0a0f0c;border:2px solid rgba(34,197,94,.35);box-shadow:0 40px 100px rgba(0,0,0,.55),0 0 60px rgba(34,197,94,.12);overflow:hidden}
.term .bar{height:58px;display:flex;align-items:center;gap:12px;padding:0 24px;background:#111814;border-bottom:1px solid rgba(255,255,255,.06)}
.term .bar i{display:block;width:18px;height:18px;border-radius:50%}
.term .bar span{margin-left:16px;font:600 24px "JetBrains Mono";color:#7d8b83}
.term .body{padding:26px 30px;font:500 31px "JetBrains Mono";line-height:1.6;color:#d6f5e0;white-space:pre-wrap}
.term .p{color:${GR}}.term .c{color:#5f7268}.term .k{color:${SK}}.term .s{color:${YE}}
.cur{display:inline-block;width:18px;height:34px;background:${GR};vertical-align:-6px}
.task{display:flex;align-items:center;gap:20px;padding:22px 28px;border-radius:24px;background:rgba(255,255,255,.05);border:2px solid rgba(255,255,255,.12);font:800 40px Inter}
.task .ti{width:64px;height:64px}
.gnode{display:flex;align-items:center;gap:16px;padding:20px 24px;border-radius:22px;background:#0f1a14;border:2px solid rgba(34,197,94,.4);font:700 30px "JetBrains Mono";color:#d6f5e0}
.gnode .nk{width:46px;height:46px}
.big3{width:280px;height:280px;border-radius:50px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;font:900 38px Inter;color:#04120a}
.big3 .bi{width:110px;height:110px}
.loopn{position:absolute;width:250px;height:250px;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;font:900 38px Inter;color:#04120a;box-shadow:0 20px 50px rgba(0,0,0,.45)}
.loopn .li{width:96px;height:96px}
`;
const bar = (title) => `<div class="bar"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><span>${title}</span></div>`;
[at("Algumas"), at("Você instala"), at("A grande"), at("Mas"), at("Por isso,"), at("Quer")].forEach((t, i) => V.swipe(t - 0.05, [GR, SK, YE][i % 3]));

// S1 HOOK — ainda no manual?
{
  const t = { ai: at("ainda"), fa: at("fazendo"), ma: at("manualmente"), ta: at("tarefas"), po: at("poderia"), ex: at("executar"), ag: at("agente"), ia: at("artificial?") };
  const tasks = [["copiar", "copy"], ["colar", "clipboard-paste"], ["conferir", "list-checks"], ["repetir", "repeat"]];
  V.scene({ id: "s1", t0: 0, t1: 6.35, in: "none", push: 0.04, html: `
    <div class="abs center-x tc" id="s1-h" style="top:170px;width:1040px"><div class="kw" style="font-size:118px">ainda no</div><div class="kw" style="font-size:170px;color:${RD}">MANUAL?</div></div>
    <div class="abs col gap20" id="s1-list" style="left:150px;top:560px;width:780px">
      ${tasks.map(([n, ic], i) => `<div class="task" id="s1-t${i}"><div class="ti">${icon(ic, "#9aa6a0", 2.2)}</div>${n}<div style="margin-left:auto;width:52px;height:52px">${icon("hand", "#fca5a5", 2)}</div></div>`).join("")}
    </div>
    <div class="abs" id="s1-bot" style="left:390px;top:540px;width:300px;height:300px;border-radius:80px;background:${GR};display:grid;place-items:center;box-shadow:0 0 80px rgba(34,197,94,.55)"><div style="width:58%;height:58%">${icon("bot", "#04120a", 2)}</div></div>
    <div class="abs center-x tc" id="s1-h2" style="top:900px;width:1000px"><div class="kw" style="font-size:96px;color:${GR}">com um AGENTE</div></div>
  `, js: `
inn("#s1-h",0,"slam",.42);${S("impact", 0.02, .75)}
${tasks.map((_, i) => `inn("#s1-t${i}",${(0.35 + i * 0.22).toFixed(2)},"left",.35);`).join("")}${S("pop_multi", 0.35, .55)}
${tasks.map((_, i) => `pulse("#s1-t${i}",${(t.ma + i * 0.12).toFixed(2)},1.05,.25);`).join("")}${S("click", t.ma, .6)}${S("click", t.ma + 0.25, .5)}${S("click", t.ma + 0.5, .5)}
shake("#s1-list",${t.po});
to("#s1-list",{scale:.2,opacity:0,y:-40,duration:.4,ease:"power2.in"},${t.ag - 0.35});
fromTo("#s1-bot",{scale:0,opacity:0,rotation:-20},{scale:1,opacity:1,rotation:0,duration:.55,ease:E.back},${t.ag - 0.1});${S("power", t.ag - 0.1, .7)}
inn("#s1-h2",${t.ia - 0.2},"slam");${S("impact", t.ia - 0.2, .6)}
` });
}
// S2 — iniciar processos direto pelo terminal
{
  const t = { al: at("Algumas"), fe: at("ferramentas"), pe: at("permitem"), in: at("iniciar"), pr: at("processos"), te: at("terminal.") };
  V.scene({ id: "s2", t0: 6.35, t1: 11.95, in: "zoom", push: 0.04, html: `
    <div class="term" id="s2-term" style="left:70px;top:420px;width:940px;height:520px">${bar("terminal")}<div class="body"><span class="p">~ $</span> <span class="cur" id="s2-cur"></span></div></div>
    <div class="abs center-x tc" id="s2-h" style="top:170px;width:1040px"><div class="kw" style="font-size:96px">direto pelo</div><div class="kw" style="font-size:150px;color:${GR}">TERMINAL</div></div>
    <div class="abs" id="s2-ic" style="left:820px;top:880px;width:150px;height:150px;border-radius:40px;background:${GR};display:grid;place-items:center"><div style="width:60%;height:60%">${icon("square-terminal", "#04120a", 2)}</div></div>
  `, js: `
fromTo("#s2-term",{opacity:0,y:180,rotationX:-20,transformPerspective:1400},{opacity:1,y:0,rotationX:0,duration:.6,ease:E.o4},${t.fe - 0.1});${S("whoosh", t.fe - 0.1, .5)}
fromTo("#s2-cur",{opacity:1},{opacity:0,duration:.01,repeat:9,yoyo:true,repeatDelay:.38,immediateRender:false},${t.fe + 0.3});
inn("#s2-h",${t.te - 0.15},"slam");${S("impact", t.te - 0.15, .7)}
inn("#s2-ic",${t.te + 0.05},"pop",.35);
` });
}
// S3 — instala, fornece instruções, acompanha a execução (exemplo real: ScrapeGraphAI)
{
  const t = { vo: at("Você instala"), is: at("instala"), fe: at("ferramenta,"), fo: at("fornece"), ins: at("instruções"), ac: at("acompanha"), ex: at("execução"), ta: at("tarefas", 2) };
  V.scene({ id: "s3", t0: 11.95, t1: 17.1, in: "left", push: 0.03, html: `
    <div class="abs shot" id="s3-ban" style="left:70px;top:150px;width:940px;height:313px;border-color:rgba(173,117,255,.7)"><img src="${P2("banner.png")}"/></div>
    <div class="term" id="s3-term" style="left:70px;top:500px;width:940px;height:420px">${bar("exemplo real · README do ScrapeGraphAI")}<div class="body"><span id="s3-l1"><span class="p">$</span> <span id="s3-c1" data-text="pip install scrapegraphai"></span></span>
<span id="s3-l2"><span class="p">$</span> <span id="s3-c2" data-text="playwright install"></span></span>
<span id="s3-l3"><span class="k">prompt</span>=<span class="s">"Extract useful information</span>
<span class="s">from the webpage…"</span></span></div></div>
    <div class="abs row" id="s3-nodes" style="left:70px;top:960px;width:940px;justify-content:space-between">
      ${["FetchNode", "ParseNode", "GenerateAnswerNode"].map((n, i) => `<div class="gnode" id="s3-n${i}" style="${i === 2 ? "font-size:26px" : ""}"><div class="nk" id="s3-k${i}">${icon("circle-check-big", GR, 2.4)}</div>${n}</div>`).join("")}
    </div>
  `, js: `
inn("#s3-ban",${t.vo - 0.05},"down",.45);
inn("#s3-term",${t.vo + 0.05},"rise",.45);
type("#s3-c1",${t.is},.6);${S("typing", t.is, .5)}
type("#s3-c2",${t.fe},.45);${S("typing", t.fe, .4)}
inn("#s3-l3",${t.ins - 0.1},"fade",.35);${S("pop", t.ins - 0.1, .5)}
${[0, 1, 2].map((i) => `inn("#s3-n${i}",${(t.ac + i * 0.18).toFixed(2)},"pop",.35);set("#s3-k${i}",{opacity:0},${t.vo});inn("#s3-k${i}",${(t.ex + i * 0.2).toFixed(2)},"pop",.3);`).join("")}${S("pop_multi", t.ac, .55)}${S("confirm", t.ta, .55)}
` });
}
// S4 — comandos + arquivos + verificações no mesmo fluxo
{
  const t = { a: at("A grande"), va: at("vantagem"), cb: at("combinar"), co: at("comandos,"), ar: at("arquivos"), ve: at("verificações"), me: at("mesmo"), fl: at("fluxo"), tr: at("trabalho.") };
  const it = [["comandos", "square-terminal", GR, t.co], ["arquivos", "file-json", SK, t.ar], ["verificações", "shield-check", YE, t.ve]];
  V.scene({ id: "s4", t0: 17.1, t1: 23.15, in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc" id="s4-h" style="top:170px;width:1040px"><div class="kw" style="font-size:100px">a grande <span class="hlbox">vantagem</span></div></div>
    ${it.map(([n, ic, c], i) => `<div class="abs big3" id="s4-i${i}" style="left:${45 + i * 345}px;top:400px;background:${c}"><div class="bi">${icon(ic, "#04120a", 2)}</div>${n}</div>`).join("")}
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s4-w" d="M185 690 C 185 820, 540 780, 540 880 M540 690 L540 880 M885 690 C 885 820, 540 780, 540 880" stroke="${GR}" stroke-width="8" fill="none" stroke-linecap="round"/></svg>
    <div class="abs center-x tc" id="s4-fl" style="top:890px;width:900px"><div class="sticker" style="font-size:56px;background:${GR};color:#04120a">${icon("workflow", "#04120a", 2.6)}1 fluxo de trabalho</div></div>
  `, js: `
inn("#s4-h",${t.a},"up",.45);
${it.map(([, , , tt], i) => `inn("#s4-i${i}",${(tt - 0.1).toFixed(2)},"drop",.45);${V.sfx("pop", tt - 0.1, 0.7)}`).join("\n")}
draw("#s4-w",${t.me - 0.1},.7);${S("whoosh_s", t.me - 0.1, .5)}
inn("#s4-fl",${t.fl - 0.05},"slam");${S("impact", t.fl, .65)}
` });
}
// S5 — gerar código ≠ estar funcionando
{
  const t = { m: at("Mas"), di: at("diferença"), im: at("importante."), ge: at("Gerar"), co: at("código"), si: at("significa"), tu: at("tudo"), fu: at("funcionando.") };
  V.scene({ id: "s5", t0: 23.15, t1: 29.25, in: "left", push: 0.04, html: `
    <div class="abs center-x tc" id="s5-w" style="top:170px;width:1000px"><div class="sticker" style="font-size:52px;background:${YE};color:#111;transform:rotate(-2deg)">${icon("triangle-alert", "#111", 2.6)}diferença importante</div></div>
    <div class="term" id="s5-term" style="left:70px;top:330px;width:940px;height:470px">${bar("gerado.py")}<div class="body"><span class="k">from</span> scrapegraphai.graphs <span class="k">import</span> SmartScraperGraph

smart_scraper_graph = SmartScraperGraph(
    prompt=<span class="s">"…"</span>,
    source=<span class="s">"https://…"</span>,
    config=graph_config
)</div></div>
    <div class="abs row" style="left:40px;top:850px;width:1000px;justify-content:center;align-items:center;gap:22px">
      <div id="s5-ok"><div class="sticker green" style="font-size:42px">${icon("check", "#fff", 3)}código gerado</div></div>
      <div id="s5-neq" style="font:700 110px 'Space Grotesk';color:${RD};line-height:1">≠</div>
      <div id="s5-no"><div class="sticker red" style="font-size:42px">${icon("bug", "#fff", 2.6)}funcionando?</div></div>
    </div>
  `, js: `
inn("#s5-w",${t.di - 0.1},"slam");${S("alert", t.di, .55)}
inn("#s5-term",${t.ge - 0.15},"rise",.45);${S("whoosh_s", t.ge - 0.15, .45)}
inn("#s5-ok",${t.co},"pop",.35);${S("confirm", t.co, .5)}
inn("#s5-neq",${t.si},"slam");${S("impact", t.si, .6)}
inn("#s5-no",${t.tu},"pop",.4);${S("glitch", t.fu, .6)}shake("#s5-term",${t.fu});
` });
}
// S6 — executar, testar e corrigir
{
  const t = { p: at("Por isso,"), id: at("ideal"), ut: at("utilizar"), pe: at("permitam"), ex: at("executar", 2), te: at("testar"), co: at("corrigir"), re: at("resultado.") };
  const L = [["executar", "play", GR, t.ex, 540, 470], ["testar", "flask-conical", SK, t.te, 820, 860], ["corrigir", "wrench", YE, t.co, 260, 860]];
  V.scene({ id: "s6", t0: 29.25, t1: 35.35, in: "rise", push: 0.03, html: `
    <div class="abs center-x tc" id="s6-h" style="top:170px;width:1040px"><div class="kw" style="font-size:100px">o <span class="hlbox">ideal</span></div></div>
    <svg class="wires" viewBox="0 0 1080 1920"><circle id="s6-ring" cx="540" cy="740" r="300" stroke="rgba(34,197,94,.55)" stroke-width="8" fill="none" stroke-dasharray="28 22"/></svg>
    ${L.map(([n, ic, c, , x, y], i) => `<div class="loopn" id="s6-n${i}" style="left:${x - 125}px;top:${y - 125}px;background:${c}"><div class="li">${icon(ic, "#04120a", 2.2)}</div>${n}</div>`).join("")}
    <div class="abs" id="s6-ok" style="left:430px;top:690px;width:220px;height:100px;text-align:center"><div class="sticker green" style="font-size:36px">${icon("check", "#fff", 3)}ok</div></div>
  `, js: `
inn("#s6-h",${t.p},"up",.4);
fromTo("#s6-ring",{opacity:0,scale:.7,svgOrigin:"540 740"},{opacity:1,scale:1,duration:.5,ease:E.o},${t.ut - 0.1});
fromTo("#s6-ring",{rotation:0,svgOrigin:"540 740"},{rotation:360,duration:6,ease:"none"},${t.ut});
${L.map(([, , , tt], i) => `inn("#s6-n${i}",${(tt - 0.1).toFixed(2)},"pop",.4);${V.sfx("pop", tt - 0.1, 0.75)}pulse("#s6-n${i}",${(tt + 0.35).toFixed(2)},1.08,.3);`).join("\n")}
inn("#s6-ok",${t.re - 0.05},"slam");${S("confirm", t.re, .6)}
` });
}
// S7 — CTA CÓDIGO
{
  const t = { q: at("Quer"), co: at("Comenta"), w: at("código", 2), seg: at("embaixo.") };
  V.scene({ id: "s7", t0: 35.35, t1: V.dur, last: true, in: "zoom", push: 0.03,
    html: ctaHtml2("s7", { pre: `mais <span class="hlbox">ferramentas?</span>`, word: "CÓDIGO", color: GR, follow: false }),
    js: ctaJs2(V, "s7", { q: t.q, co: t.co, word: t.w, seg: t.seg, follow: false }) });
}
V.write(`${OUT}/projeto`);
