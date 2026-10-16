// LOTE 2 · 09 — MODELOS (Lendário 00:10) · ref edd6efb3 (vários modelos: OpenAI, Claude, Grok, Kimi)
// Logos reais (ícones de provedores do repositório OmniRoute). Nenhuma afirmação sobre qual modelo é melhor em quê:
// o roteamento é ilustrativo e as tarefas não são atribuídas a provedores específicos.
import { Video, icon, logo } from "../lib/build.mjs";
import { KIT2_CSS, ctaHtml2, ctaJs2, L2ROOT, TR } from "../lib/kit2.mjs";

const OUT = `${L2ROOT}/09_MODELOS`;
const VI = "#8b5cf6", CY = "#22d3ee", AM = "#f59e0b", GR = "#22c55e", RD = "#ef4444";
const V = new Video({
  id: "l09", title: "Vários Modelos de IA", kit2: true, theme: "dark", capMaxWords: 3, capMaxChars: 18,
  wordsPath: `${TR}/2026-10-16T00_10_05_Lend_rio_-_Cheerful_Vibrant_and_Fun.json`, audioDur: 53.5, // 52.04 s narração + respiro no CTA
  accent: VI, capKey: CY, vars: { a1: VI, a2: CY, a3: AM, capbg: VI, capfg: "#fff" },
  // ASR: "Clod" = Claude; "E tapas" = "Etapas" (o "E" vira a palavra inteira para a legenda começar no tempo certo)
  fixes: { "Clod,": "Claude,", "E@56": "Etapas", "tapas": "" },
  keywords: ["vários?", "OpenAI,", "Claude,", "Grok", "Kimi.", "vantagens", "programação,", "análise,", "integrar", "adequado", "qualidade,", "custo", "desempenho.", "testar"],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
const PROV = [["OpenAI", "prov-openai.svg"], ["Claude", "prov-claude.svg"], ["Grok", "prov-grok.svg"], ["Kimi", "prov-kimi.svg"]];
V.extraCss = KIT2_CSS + `
.pv{border-radius:44px;background:#fff;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;box-shadow:0 24px 60px rgba(0,0,0,.45)}
.pv img{width:46%;height:46%;object-fit:contain}
.pv b{font:900 40px Inter;color:#111;letter-spacing:-.02em}
.tk{display:flex;align-items:center;gap:22px;padding:26px 30px;border-radius:28px;background:rgba(255,255,255,.06);border:2px solid rgba(255,255,255,.14);font:900 46px Inter;letter-spacing:-.02em}
.tk .ti{width:90px;height:90px;border-radius:26px;display:grid;place-items:center;flex:none}
.tk .ti svg{width:58%;height:58%}
.stp{width:210px;height:150px;border-radius:30px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;font:800 28px Inter;color:#111}
.stp .si{width:64px;height:64px}
.sl{display:flex;align-items:center;gap:22px;font:900 42px Inter}
.sl .tr{flex:1;height:20px;border-radius:10px;background:rgba(255,255,255,.12);position:relative}
.sl .kn{position:absolute;top:-16px;width:52px;height:52px;border-radius:50%;box-shadow:0 8px 20px rgba(0,0,0,.4)}
`;
const pv = (f, n, s) => `<div class="pv" style="width:${s}px;height:${s}px;border-radius:${Math.round(s * 0.24)}px"><img src="${logo(f)}"/>${n ? `<b style="font-size:${Math.round(s * 0.15)}px">${n}</b>` : ""}</div>`;
[at("Hoje"), at("E cada"), at("Alguns"), at("E de um fluxo"), at("E é"), at("Em vez"), at("A ideia"), at("Mas"), at("Quer")].forEach((t, i) => V.swipe(t - 0.05, [VI, CY, AM][i % 3]));

// S1 HOOK — por que depender de um único modelo?
{
  const t = { de: at("depender"), un: at("único"), mo: at("modelo"), vo: at("você"), tr: at("trabalhar"), va: at("vários?") };
  V.scene({ id: "s1", t0: 0, t1: 5.85, in: "none", push: 0.04, html: `
    <div class="abs center-x tc" id="s1-h" style="top:170px;width:1040px"><div class="kw" style="font-size:110px">só <span class="hlbox">1 modelo?</span></div></div>
    <div class="abs" id="s1-one" style="left:390px;top:480px;width:300px;height:300px;border-radius:80px;background:#1b1530;border:4px solid ${VI};display:grid;place-items:center;box-shadow:0 0 60px rgba(139,92,246,.45)"><div style="width:52%;height:52%">${icon("cpu", "#c4b5fd", 1.8)}</div></div>
    <div class="abs" id="s1-lock" style="left:620px;top:440px;width:120px;height:120px">${icon("lock", RD, 2.4)}</div>
    <div class="abs" style="left:60px;top:470px;width:960px;display:grid;grid-template-columns:1fr 1fr;gap:30px;justify-items:center">
      ${PROV.map(([n, f], i) => `<div id="s1-p${i}">${pv(f, "", 230)}</div>`).join("")}
    </div>
    <div class="abs center-x tc" id="s1-h2" style="top:170px;width:1040px"><div class="kw" style="font-size:150px;color:${CY}">VÁRIOS</div></div>
  `, js: `
inn("#s1-h",0,"slam",.42);${S("impact", 0.02, .75)}
fromTo("#s1-one",{opacity:0,scale:1.5},{opacity:1,scale:1,duration:.55,ease:E.back},0.15);
inn("#s1-lock",${t.un},"pop",.35);${S("lock", t.un, .6)}
pulse("#s1-one",${t.mo},1.08,.35);
to("#s1-one, #s1-lock",{scale:0,opacity:0,duration:.25,ease:"power2.in"},${t.va - 0.3});out("#s1-h",${t.va - 0.3},"up",.25);
${PROV.map((_, i) => `fromTo("#s1-p${i}",{opacity:0,scale:0,x:${i % 2 ? -240 : 240},y:${i < 2 ? 260 : -40}},{opacity:1,scale:1,x:0,y:0,duration:.5,ease:E.back},${(t.va - 0.15 + i * 0.07).toFixed(2)});`).join("")}${S("pop_multi", t.va - 0.15, .8)}
inn("#s1-h2",${t.va},"slam");${S("impact", t.va, .7)}
` });
}
// S2 — OpenAI, Claude, Grok e Kimi
{
  const t = { h: at("Hoje"), op: at("opções"), mo: at("modelos"), oa: at("OpenAI,"), cl: at("Clod,"), gk: at("Grok"), km: at("Kimi.") };
  const tt = [t.oa, t.cl, t.gk, t.km];
  V.scene({ id: "s2", t0: 5.85, t1: 11.7, in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc" id="s2-h" style="top:170px;width:1040px"><div class="kw" style="font-size:96px">opções <span class="hlbox">diferentes</span></div></div>
    <div class="abs" style="left:70px;top:360px;width:940px;display:grid;grid-template-columns:1fr 1fr;gap:34px;justify-items:center">
      ${PROV.map(([n, f], i) => `<div id="s2-p${i}">${pv(f, n, 400)}</div>`).join("")}
    </div>
  `, js: `
inn("#s2-h",${t.op - 0.1},"up",.45);
${PROV.map((_, i) => `inn("#s2-p${i}",${(tt[i] - 0.1).toFixed(2)},"pop",.4);${V.sfx("pop", tt[i] - 0.1, 0.75)}pulse("#s2-p${i}",${(tt[i] + 0.35).toFixed(2)},1.05,.25);`).join("\n")}
` });
}
// S3 — cada um tem vantagens dependendo da tarefa
{
  const t = { e: at("E cada"), va: at("vantagens"), de: at("dependendo"), ti: at("tipo"), ta: at("tarefa.") };
  V.scene({ id: "s3", t0: 11.7, t1: 15.95, in: "left", push: 0.04, html: `
    <div class="abs center-x tc" id="s3-h" style="top:170px;width:1040px"><div class="kw" style="font-size:100px">cada um com</div><div class="kw" style="font-size:140px;color:${AM}">VANTAGENS</div></div>
    <div class="abs row" id="s3-row" style="left:60px;top:560px;width:960px;justify-content:space-between">
      ${PROV.map(([n, f], i) => `<div id="s3-p${i}">${pv(f, "", 210)}</div>`).join("")}
    </div>
    <div class="abs center-x tc" id="s3-dep" style="top:860px;width:960px"><div class="sticker" style="font-size:52px;background:${VI};color:#fff">${icon("git-fork", "#fff", 2.6)}depende da tarefa</div></div>
  `, js: `
${PROV.map((_, i) => `inn("#s3-p${i}",${(t.e + i * 0.08).toFixed(2)},"up",.4);`).join("")}${S("whoosh_s", t.e, .45)}
inn("#s3-h",${t.va - 0.1},"slam");${S("impact", t.va - 0.1, .65)}
inn("#s3-dep",${t.de},"pop",.4);${S("pop", t.de, .6)}pulse("#s3-dep",${t.ta},1.08,.3);
` });
}
// S4 — programação, análise, pesquisa, etapas
{
  const t = { al: at("Alguns"), pr: at("programação,"), ou: at("outros"), an: at("análise,"), pe: at("pesquisa"), et: at("etapas.") };
  const T = [["programação", "code-2", CY, t.pr], ["análise", "chart-column", AM, t.an], ["pesquisa", "search", GR, t.pe], ["etapas específicas", "list-ordered", VI, t.et]];
  V.scene({ id: "s4", t0: 15.95, t1: 23.0, in: "rise", push: 0.03, html: `
    <div class="abs center-x tc" id="s4-h" style="top:170px;width:1040px"><div class="kw" style="font-size:96px">cada <span class="hlbox">tarefa</span></div></div>
    <div class="abs col gap24" style="left:80px;top:360px;width:920px">
      ${T.map(([n, ic, c], i) => `<div class="tk" id="s4-t${i}" style="border-color:${c}55"><div class="ti" style="background:${c}">${icon(ic, "#111", 2.2)}</div>${n}<div style="margin-left:auto;width:70px;height:70px">${icon("circle-help", "rgba(255,255,255,.4)", 2)}</div></div>`).join("")}
    </div>
    <div class="abs center-x tc" id="s4-k" style="top:1090px;width:900px"><div class="kicker" style="font-size:26px">o modelo ideal muda de uma pra outra</div></div>
  `, js: `
inn("#s4-h",${t.al},"up",.45);
${T.map(([, , , tt], i) => `inn("#s4-t${i}",${(tt - 0.12).toFixed(2)},"left",.4);${V.sfx("pop", tt - 0.12, 0.7)}`).join("\n")}
inn("#s4-k",${t.ou},"fade",.4);
` });
}
// S5 — etapas de um fluxo automatizado
{
  const t = { et: at("E de um fluxo"), fl: at("fluxo"), au: at("automatizado.") };
  const st = [["entrada", "inbox", CY], ["processa", "cpu", VI], ["revisa", "scan-search", AM], ["entrega", "send", GR]];
  V.scene({ id: "s5", t0: 23.0, t1: 24.95, in: "zoom", push: 0.05, html: `
    <div class="abs center-x tc" id="s5-h" style="top:300px;width:1040px"><div class="kw" style="font-size:100px">fluxo</div><div class="kw" style="font-size:120px;color:${CY}">AUTOMATIZADO</div></div>
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s5-w" d="M150 720 L930 720" stroke="${CY}" stroke-width="8" fill="none" stroke-dasharray="16 12"/></svg>
    <div class="abs row" style="left:30px;top:645px;width:1020px;justify-content:space-between">
      ${st.map(([n, ic, c], i) => `<div class="stp" id="s5-s${i}" style="background:${c};width:228px"><div class="si">${icon(ic, "#111", 2.2)}</div>${n}</div>`).join("")}
    </div>
  `, js: `
inn("#s5-h",${t.et - 0.05},"slam");${S("impact", t.et, .55)}
draw("#s5-w",${t.fl - 0.1},.5);
${st.map((_, i) => `inn("#s5-s${i}",${(t.fl - 0.1 + i * 0.1).toFixed(2)},"pop",.3);`).join("")}${S("pop_multi", t.fl - 0.1, .6)}
` });
}
// S6 — integrar diferentes modelos faz sentido
{
  const t = { e: at("E é"), ju: at("justamente"), in: at("integrar"), di: at("diferentes", 2), mo: at("modelos", 2), se: at("sentido.") };
  const cx = 540, cy = 760, R = 330;
  V.scene({ id: "s6", t0: 24.95, t1: 29.75, in: "left", push: 0.03, html: `
    <div class="abs center-x tc" id="s6-h" style="top:170px;width:1040px"><div class="kw" style="font-size:110px"><span class="hlbox">integrar</span></div></div>
    <svg class="wires" viewBox="0 0 1080 1920">${PROV.map((_, i) => { const a = -Math.PI / 4 + (i * Math.PI) / 2; return `<path id="s6-w${i}" d="M${cx} ${cy} L${(cx + R * Math.cos(a)).toFixed(0)} ${(cy + R * Math.sin(a)).toFixed(0)}" stroke="${[CY, AM, GR, VI][i]}" stroke-width="8" fill="none"/>`; }).join("")}</svg>
    <div class="abs" id="s6-hub" style="left:${cx - 140}px;top:${cy - 140}px;width:280px;height:280px;border-radius:50%;background:${VI};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:#fff;box-shadow:0 0 80px rgba(139,92,246,.6)"><div style="width:100px;height:100px">${icon("workflow", "#fff", 2)}</div><div style="font:900 36px Inter">seu fluxo</div></div>
    ${PROV.map(([n, f], i) => { const a = -Math.PI / 4 + (i * Math.PI) / 2; return `<div class="abs" id="s6-p${i}" style="left:${(cx + R * Math.cos(a) - 100).toFixed(0)}px;top:${(cy + R * Math.sin(a) - 100).toFixed(0)}px">${pv(f, "", 200)}</div>`; }).join("")}
    <div class="abs center-x tc" id="s6-ok" style="top:1150px;width:800px"><div class="sticker green" style="font-size:44px">${icon("check", "#fff", 3)}faz sentido</div></div>
  `, js: `
inn("#s6-hub",${t.e},"pop",.45);${S("pop", t.e, .55)}
inn("#s6-h",${t.in - 0.1},"slam");${S("impact", t.in - 0.1, .6)}
${PROV.map((_, i) => `draw("#s6-w${i}",${(t.di + i * 0.08).toFixed(2)},.35);inn("#s6-p${i}",${(t.di + 0.15 + i * 0.08).toFixed(2)},"pop",.35);`).join("")}${S("pop_multi", t.di, .65)}
inn("#s6-ok",${t.se - 0.1},"pop",.4);${S("confirm", t.se, .55)}
` });
}
// S7 — um processo que escolhe o modelo mais adequado para cada atividade (ilustrativo)
{
  const t = { ev: at("Em vez"), me: at("mesma"), co: at("configurar"), pr: at("processo"), es: at("escolha"), ad: at("adequado"), ca: at("cada", 2), at_: at("atividade.") };
  const jobs = [["tarefa A", t.es, 2], ["tarefa B", t.ad, 0], ["tarefa C", t.at_, 3]];
  V.scene({ id: "s7", t0: 29.75, t1: 37.35, in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc" id="s7-h" style="top:170px;width:1040px"><div class="kw" style="font-size:90px">o modelo <span class="hlbox">certo</span></div><div class="kw" style="font-size:70px;margin-top:10px">pra cada atividade</div></div>
    <div class="abs center-x tc" id="s7-same" style="top:520px;width:1000px"><div class="sticker" style="font-size:58px;background:#3a3550;color:#d6d3e8">${icon("repeat", "#d6d3e8", 2.4)}sempre a mesma opção</div></div>
    <div class="abs" id="s7-x" style="left:110px;top:556px;width:860px;height:16px;border-radius:8px;background:${RD}"></div>
    ${jobs.map(([n], i) => `<div class="abs" id="s7-j${i}" style="left:40px;top:790px"><div class="sticker" style="font-size:44px;background:#fff;color:#111">${icon("file", "#111", 2.4)}${n}</div></div>`).join("")}
    <div class="abs" id="s7-r" style="left:400px;top:720px;width:250px;height:250px;border-radius:50%;background:${VI};display:grid;place-items:center;box-shadow:0 0 60px rgba(139,92,246,.6)"><div style="width:56%;height:56%">${icon("route", "#fff", 2)}</div></div>
    <div class="abs col" style="left:770px;top:470px;gap:18px">${PROV.map(([n, f], i) => `<div id="s7-p${i}" style="opacity:.35">${pv(f, "", 150)}</div>`).join("")}</div>
    <div class="abs" id="s7-k" style="left:60px;top:1160px;width:960px"><div class="kicker" style="font-size:24px">exemplo ilustrativo de roteamento</div></div>
  `, js: `
inn("#s7-same",${t.ev},"pop",.35);strike("#s7-x",${t.me},.35);${S("glitch", t.me, .5)}
out("#s7-same, #s7-x",${t.co - 0.2},"up",.25);
inn("#s7-h",${t.co},"up",.45);
inn("#s7-r",${t.pr - 0.1},"pop",.4);${S("power", t.pr - 0.1, .55)}
${PROV.map((_, i) => `inn("#s7-p${i}",${(t.pr + i * 0.08).toFixed(2)},"right",.3);`).join("")}
${jobs.map(([, tt, k], i) => `fromTo("#s7-j${i}",{opacity:0,x:-200},{opacity:1,x:0,duration:.35,ease:E.o},${(tt - 0.5).toFixed(2)});to("#s7-j${i}",{x:380,scale:.3,opacity:0,duration:.35,ease:"power2.in"},${(tt - 0.1).toFixed(2)});${V.sfx("whoosh_s", tt - 0.5, 0.45)}to("#s7-p${k}",{opacity:1,scale:1.12,duration:.2},${(tt + 0.15).toFixed(2)});to("#s7-p${k}",{opacity:.35,scale:1,duration:.3},${(tt + 0.9).toFixed(2)});${V.sfx("ding", tt + 0.15, 0.45)}`).join("\n")}
inn("#s7-k",${t.ad},"fade",.4);
` });
}
// S8 — equilibrar qualidade, custo e desempenho
{
  const t = { a: at("A ideia"), eq: at("equilibrar"), ql: at("qualidade,"), cu: at("custo"), de: at("desempenho.") };
  const L = [["qualidade", "badge-check", CY, t.ql, 640], ["custo", "coins", AM, t.cu, 380], ["desempenho", "gauge", GR, t.de, 560]];
  V.scene({ id: "s8", t0: 37.35, t1: 41.15, in: "rise", push: 0.03, html: `
    <div class="abs center-x tc" id="s8-h" style="top:170px;width:1040px"><div class="kw" style="font-size:110px"><span class="hlbox">equilibrar</span></div></div>
    <div class="abs" id="s8-sc" style="left:440px;top:330px;width:200px;height:200px">${icon("scale", "#fff", 1.6)}</div>
    <div class="abs col" style="left:80px;top:600px;width:920px;gap:56px">
      ${L.map(([n, ic, c], i) => `<div class="sl" id="s8-l${i}"><div style="width:64px;height:64px">${icon(ic, c, 2.4)}</div><div style="width:300px">${n}</div><div class="tr"><div class="kn" id="s8-k${i}" style="left:0;background:${c}"></div></div></div>`).join("")}
    </div>
  `, js: `
inn("#s8-sc",${t.a},"pop",.4);fromTo("#s8-sc",{rotation:-12},{rotation:12,duration:.5,yoyo:true,repeat:5,ease:"sine.inOut",immediateRender:false},${t.eq});
inn("#s8-h",${t.eq - 0.1},"slam");${S("impact", t.eq - 0.1, .6)}
${L.map(([, , , tt, x], i) => `inn("#s8-l${i}",${(tt - 0.15).toFixed(2)},"left",.35);fromTo("#s8-k${i}",{x:0},{x:${(x * 0.62).toFixed(0)},duration:.6,ease:E.back},${(tt + 0.05).toFixed(2)});${V.sfx("click", tt + 0.05, 0.6)}`).join("\n")}
` });
}
// S9 — testar os resultados; nenhum é o melhor pra tudo
{
  const t = { m: at("Mas"), im: at("importante"), te: at("testar"), re: at("resultados,"), ne: at("nenhum"), au: at("automaticamente"), me: at("melhor", 2), tu: at("tudo.") };
  V.scene({ id: "s9", t0: 41.15, t1: 47.15, in: "left", push: 0.03, html: `
    <div class="abs center-x tc" id="s9-h" style="top:170px;width:1040px"><div class="kw" style="font-size:110px"><span class="hlbox">teste</span> sempre</div></div>
    <div class="abs" id="s9-fl" style="left:380px;top:330px;width:320px;height:320px;border-radius:90px;background:${CY};display:grid;place-items:center;box-shadow:0 0 70px rgba(34,211,238,.45)"><div style="width:56%;height:56%">${icon("flask-conical", "#111", 2)}</div></div>
    <div class="abs center-x tc" id="s9-cr" style="top:720px;width:900px"><div style="display:inline-flex;align-items:center;gap:20px;font:900 52px Inter"><span style="width:90px;height:90px;display:inline-block">${icon("crown", AM, 2.2)}</span>“o melhor pra tudo”</div></div>
    <div class="abs" id="s9-x" style="left:120px;top:775px;width:840px;height:14px;border-radius:7px;background:${RD}"></div>
    <div class="abs center-x tc" id="s9-no" style="top:900px;width:900px"><div class="sticker red" style="font-size:52px;transform:rotate(-3deg)">não existe</div></div>
  `, js: `
inn("#s9-h",${t.im - 0.1},"up",.45);
inn("#s9-fl",${t.te - 0.1},"pop",.45);${S("pop", t.te - 0.1, .6)}shake("#s9-fl",${t.re});${S("scan", t.re, .45)}
inn("#s9-cr",${t.ne - 0.1},"up",.4);
strike("#s9-x",${t.me},.4);${S("glitch", t.me, .55)}
inn("#s9-no",${t.tu - 0.1},"slam");${S("impact", t.tu - 0.1, .65)}
` });
}
// S10 — CTA MODELOS
{
  const t = { q: at("Quer"), co: at("Comenta"), w: at("modelos aqui"), seg: at("embaixo.") };
  V.scene({ id: "s10", t0: 47.15, t1: V.dur, last: true, in: "zoom", push: 0.03,
    html: ctaHtml2("s10", { pre: `múltiplos <span class="hlbox">modelos?</span>`, word: "MODELOS", color: VI, follow: false }),
    js: ctaJs2(V, "s10", { q: t.q, co: t.co, word: t.w, seg: t.seg, follow: false }) });
}
V.write(`${OUT}/projeto`);
