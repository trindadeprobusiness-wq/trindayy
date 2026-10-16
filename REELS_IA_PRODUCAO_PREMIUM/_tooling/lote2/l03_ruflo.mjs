// LOTE 2 · 03 — RUFLO (Mário 00:02) · ref b3d38d7d
import { Video, icon, logo } from "../lib/build.mjs";
import { KIT2_CSS, ctaHtml2, ctaJs2, P2, L2ROOT, TR } from "../lib/kit2.mjs";

const OUT = `${L2ROOT}/03_RUFLO`;
const PK = "#ff3d7f", CY = "#22d3ee", YE = "#ffd23f", GR = "#22c55e", VI = "#a855f7";
const V = new Video({
  id: "l03", title: "Ruflo Equipe de Agentes", kit2: true, theme: "dark", capMaxWords: 3, capMaxChars: 18,
  wordsPath: `${TR}/2026-10-16T00_02_17_M_rio_-_Excited_Constant_and_Cheerful.json`, audioDur: 106.19,
  accent: PK, capKey: CY, vars: { a1: PK, a2: CY, a3: YE, capbg: PK, capfg: "#fff" },
  fixes: {},
  keywords: ["equipe", "Ruflo.", "Ruflo", "agentes", "colaboração", "planejamento,", "desenvolvimento,", "análise", "verificação", "negócio.", "coordenar", "humana.", "digitais"],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
V.extraCss = KIT2_CSS + `
.bot{width:150px;height:150px;border-radius:40px;display:grid;place-items:center;background:linear-gradient(160deg,#2a1640,#120a20);border:3px solid rgba(255,61,127,.6);box-shadow:0 0 30px rgba(255,61,127,.35)}
.bot svg{width:58%;height:58%}
.neon{text-shadow:0 0 12px currentColor,0 0 40px currentColor}
.taskc{border-radius:24px;padding:20px 30px;font:900 40px Inter;color:#111;box-shadow:0 12px 0 rgba(0,0,0,.25)}
.bizc{border-radius:30px;background:rgba(255,255,255,.06);border:2px solid rgba(255,255,255,.14);padding:30px 28px;display:flex;flex-direction:column;gap:18px}
.bizc .ct{font:900 40px Inter;line-height:1.08;letter-spacing:-.02em}
.bizc .ci{width:104px;height:104px;border-radius:28px;display:grid;place-items:center}
.bizc .ci svg{width:58%;height:58%}
.bizc .ln{height:22px;border-radius:11px;background:rgba(255,255,255,.12)}
`;
const bot = (id, c = PK, ic = "bot", s = 150, extra = "") => `<div class="bot" id="${id}" style="width:${s}px;height:${s}px;border-color:${c};box-shadow:0 0 30px ${c}66;${extra}">${icon(ic, c, 1.8)}</div>`;
[at("É justamente"), at("Pensa"), at("Pode estruturar"), at("E a parte"), at("Isso permite"), at("Agora"), at("Em vez", 2), at("E é aqui"), at("é aprender"), at("Claro,"), at("Mas a possibilidade"), at("Quer")].forEach((t, i) => V.swipe(t - 0.05, [PK, CY, YE][i % 3]));

// S1 HOOK — 1 agente → equipe inteira
{
  const t = { ag: at("agente"), ar: at("artificial,"), vo: at("você"), eq: at("equipe"), in: at("inteira"), de: at("deles?") };
  const N = 12;
  V.scene({ id: "s1", t0: 0, t1: 7.9, in: "none", push: 0.04, html: `
    <div class="abs center-x tc" id="s1-h1" style="top:190px;width:1040px"><div class="kw" style="font-size:140px">1 AGENTE<span style="color:${PK}">?</span></div></div>
    <div class="abs" id="s1-one" style="left:345px;top:520px">${bot("s1-b", PK, "bot", 390)}</div>
    <div class="abs center-x tc" id="s1-lim" style="top:960px;width:900px"><div class="sticker dark" style="font-size:40px">${icon("battery-low", "#ff3d7f", 2.4)}faz uma coisa por vez</div></div>
    <div class="abs" id="s1-grid" style="left:80px;top:420px;width:920px;display:grid;grid-template-columns:repeat(4,1fr);row-gap:34px;justify-items:center">
      ${Array.from({ length: N }, (_, i) => bot(`s1-g${i}`, [PK, CY, YE, GR, VI][i % 5], ["bot", "brain", "code-2", "search", "shield-check", "rocket"][i % 6], 196)).join("")}
    </div>
    <div class="abs center-x tc" id="s1-h2" style="top:190px;width:1040px"><div class="kw neon" style="font-size:140px;color:${CY}">UMA EQUIPE</div></div>
  `, js: `
inn("#s1-h1",0,"slam",.4);${S("impact", 0.02, .7)}
fromTo("#s1-one",{scale:1.6,rotation:-12,opacity:0},{scale:1,rotation:0,opacity:1,duration:.7,ease:E.back},0.1);
pulse("#s1-one",${t.ag},1.08,.4);${S("pop", t.ag, .5)}
inn("#s1-lim",${t.ar - 0.1},"up",.4);
out("#s1-lim",${t.eq - 0.35},"fade",.2);
to("#s1-one",{scale:0,opacity:0,duration:.25,ease:"power2.in"},${t.eq - 0.2});out("#s1-h1",${t.eq - 0.2},"up",.25);
${Array.from({ length: N }, (_, i) => `fromTo("#s1-g${i}",{scale:0,opacity:0,x:${(1.5 - (i % 4)) * 230},y:${(1 - Math.floor(i / 4)) * 230}},{scale:1,opacity:1,x:0,y:0,duration:.5,ease:E.back},${(t.eq - 0.05 + i * 0.04).toFixed(2)});`).join("")}${S("pop_multi", t.eq, .8)}${S("impact", t.eq, .6)}
inn("#s1-h2",${t.in},"slam");${S("shimmer", t.in, .5)}
${Array.from({ length: N }, (_, i) => `pulse("#s1-g${i}",${(t.de + (i % 4) * 0.05).toFixed(2)},1.08,.3);`).join("")}
` });
}
// S2 — proposta do Ruflo
{
  const t = { e: at("É justamente"), ru: at("Ruflo."), or: at("organizar"), mu: at("múltiplos"), es: at("especializados"), co: at("colaborar"), cx: at("complexas.") };
  V.scene({ id: "s2", t0: 7.85, t1: 17.05, in: "zoom", push: 0.03, html: `
    <div class="abs shot" id="s2-logo" style="left:70px;top:220px;width:940px;height:524px;border-color:rgba(255,61,127,.6)"><img src="${P2("ruFlo.png")}"/></div>
    <div class="abs center-x tc mono" id="s2-k" style="top:775px;width:960px;font-size:32px;line-height:1.45;color:#dfe3f5">An agent meta-harness for<br/>Claude Code and Codex</div>
    <div class="abs center-x tc" id="s2-gh" style="top:880px;width:960px"><div class="sticker dark" style="font-size:30px">${icon("git-branch", "#fff", 2.4)}github.com/ruvnet/ruflo</div></div>
    <div class="abs row" style="left:40px;top:990px;width:1000px;justify-content:center;gap:16px;flex-wrap:wrap">
      <div class="sticker" id="s2-c0" style="background:${PK};color:#fff;font-size:38px">${icon("users", "#fff", 2.6)}múltiplos agentes</div>
      <div class="sticker" id="s2-c1" style="background:${CY};color:#111;font-size:38px">${icon("badge-check", "#111", 2.6)}especializados</div>
      <div class="sticker" id="s2-c2" style="background:${YE};color:#111;font-size:38px">${icon("handshake", "#111", 2.6)}colaborando</div>
    </div>
  `, js: `
fromTo("#s2-logo",{opacity:0,scale:.85},{keyframes:{opacity:[0,1,.3,1,.6,1]},scale:1,duration:.8,ease:"none"},${t.e});${S("power", t.e, .7)}${S("glitch", t.ru, .4)}
pulse("#s2-logo",${t.ru},1.05,.4);
inn("#s2-k",${t.ru + 0.3},"fade",.5);inn("#s2-gh",${t.ru + 0.5},"up",.4);
out("#s2-gh",${t.mu - 0.3},"fade",.25);
inn("#s2-c0",${t.mu - 0.1},"pop",.4);${S("pop", t.mu - 0.1, .65)}
inn("#s2-c1",${t.es - 0.1},"pop",.4);${S("pop", t.es - 0.1, .65)}
inn("#s2-c2",${t.co - 0.1},"pop",.4);${S("pop", t.co - 0.1, .65)}
pulse("#s2-logo",${t.cx},1.04,.4);
` });
}
// S3a — 1 agente tentando fazer tudo
{
  const t = { p: at("Pensa"), pr: at("projeto"), so: at("software"), un: at("único"), te: at("tentando"), tu: at("tudo.") };
  const tasks = [["planejar", PK], ["codar", CY], ["testar", YE], ["revisar", GR], ["documentar", VI], ["corrigir", "#fb923c"]];
  const pos = [[60, 440], [770, 420], [50, 930], [760, 950], [350, 330], [380, 1040]];
  V.scene({ id: "s3", t0: 17.0, t1: 23.3, in: "left", push: 0.04, html: `
    <div class="abs center-x tc" id="s3-h" style="top:170px;width:1040px"><div class="kw" style="font-size:96px">1 agente pra <span class="hlbox">TUDO?</span></div></div>
    <div class="abs" id="s3-one" style="left:360px;top:560px">${bot("s3-b", "#ef4444", "bot", 360)}</div>
    ${tasks.map(([n, c], i) => `<div class="abs taskc" id="s3-t${i}" style="left:${pos[i][0]}px;top:${pos[i][1]}px;background:${c}">${n}</div>`).join("")}
    <div class="abs" id="s3-x" style="left:600px;top:640px"><div class="sticker red" style="font-size:48px;transform:rotate(10deg)">${icon("flame", "#fff", 2.6)}sobrecarga</div></div>
  `, js: `
inn("#s3-h",${t.p},"up",.4);
inn("#s3-one",${t.pr},"pop",.45);
${tasks.map((_, i) => `inn("#s3-t${i}",${(t.so + i * 0.12).toFixed(2)},"pop",.35);floaty("#s3-t${i}",${(t.so + 0.4).toFixed(2)},1.6,14);`).join("")}${S("pop_multi", t.so, .6)}
shake("#s3-one",${t.te});inn("#s3-x",${t.te},"slam");${S("alert", t.te, .65)}
shake("#s3-one",${t.tu});
` });
}
// S3b — responsabilidades: planejamento, desenvolvimento, análise, verificação
{
  const t = { p: at("Pode estruturar"), re: at("responsabilidades"), de: at("dedicados"), pl: at("planejamento,"), dv: at("desenvolvimento,"), an: at("análise"), ve: at("verificação"), rs: at("resultados.") };
  const roles = [["planejamento", "map", PK, t.pl], ["desenvolvimento", "code-2", CY, t.dv], ["análise", "search", YE, t.an], ["verificação", "shield-check", GR, t.ve]];
  V.scene({ id: "s3b", t0: 23.2, t1: 32.0, in: "rise", push: 0.03, html: `
    <div class="abs center-x tc" id="s3b-h" style="top:170px;width:1040px"><div class="kw" style="font-size:84px">cada agente,<br/><span class="hlbox">um papel</span></div></div>
    <div class="abs" style="left:50px;top:440px;width:980px;display:grid;grid-template-columns:1fr 1fr;gap:28px">
      ${roles.map(([n, ic, c], i) => `<div class="card col" id="s3b-r${i}" style="align-items:center;gap:18px;padding:36px 16px;border-color:${c};background:rgba(20,14,34,.9)">${bot(`s3b-b${i}`, c, ic, 180)}<div style="font:900 40px Inter;letter-spacing:-.02em;color:${c}">${n}</div></div>`).join("")}
    </div>
  `, js: `
inn("#s3b-h",${t.p},"up",.45);${S("whoosh_s", t.re, .45)}
${roles.map(([, , , tt], i) => `inn("#s3b-r${i}",${(tt - 0.1).toFixed(2)},"pop",.45);${V.sfx("pop", tt - 0.1, 0.7)}`).join("\n")}
${roles.map((_, i) => `glow("#s3b-r${i}",${(t.rs + i * 0.08).toFixed(2)},"rgba(255,255,255,.25)");`).join("")}${S("confirm", t.rs, .5)}
` });
}
// S4 — colaboração: executa → analisa → identifica problema → próxima etapa
{
  const t = { e: at("E a parte"), ms: at("interessante"), co: at("colaboração"), en: at("Enquanto"), ex: at("executa"), ou: at("outro"), an: at("analisar"), id: at("identificar"), pb: at("problemas"), ct: at("contribuir"), pe: at("próxima"), et: at("etapa.") };
  V.scene({ id: "s4", t0: 32.0, t1: 44.4, in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc" id="s4-pre" style="top:330px;width:1000px"><div class="kw" style="font-size:96px">a parte mais<br/><span class="hlbox">interessante</span></div></div>
    <div class="abs" id="s4-sp" style="left:830px;top:290px;width:110px;height:110px">${icon("sparkles", YE, 2.2)}</div>
    <div class="abs center-x tc" id="s4-h" style="top:180px;width:1040px"><div class="kw neon" style="font-size:118px;color:${CY}">COLABORAÇÃO</div></div>
    <div class="abs col" id="s4-a" style="left:50px;top:420px;align-items:center;gap:14px">${bot("s4-ba", PK, "hammer", 230)}<div class="h3" style="font-size:38px">executa</div></div>
    <div class="abs col" id="s4-b" style="left:800px;top:420px;align-items:center;gap:14px">${bot("s4-bb", YE, "search", 230)}<div class="h3" style="font-size:38px">analisa</div></div>
    <div class="abs card" id="s4-task" style="left:320px;top:470px;width:440px;padding:26px"><div style="font:800 34px Inter;margin-bottom:14px">tarefa</div><div class="meter" style="width:388px;height:32px"><div class="fill" id="s4-f" style="background:${PK}"></div></div></div>
    <div class="abs" id="s4-ar" style="left:595px;top:640px;width:110px;height:110px">${icon("arrow-right", YE, 3)}</div>
    <div class="abs center-x tc" id="s4-bug" style="top:790px;width:700px"><div class="sticker red" style="font-size:44px">${icon("bug", "#fff", 2.6)}problema achado</div></div>
    <div class="abs center-x" id="s4-next" style="top:930px;width:680px"><div class="sticker green" style="font-size:48px;width:100%;justify-content:center">${icon("arrow-right", "#fff", 3)}próxima etapa</div></div>
  `, js: `
inn("#s4-pre",${t.e},"up",.45);inn("#s4-sp",${t.ms},"pop",.4);${S("shimmer", t.ms, .55)}
out("#s4-pre",${t.co - 0.25},"up",.25);out("#s4-sp",${t.co - 0.25},"fade",.2);
inn("#s4-h",${t.co - 0.1},"slam");${S("impact", t.co - 0.1, .6)}
inn("#s4-a",${t.en},"left",.4);${S("whoosh_s", t.en, .45)}
inn("#s4-task",${t.ex - 0.1},"pop",.4);
fromTo("#s4-f",{scaleX:0},{scaleX:1,duration:1.2,ease:"power1.inOut"},${t.ex});${S("counter", t.ex, .45)}
inn("#s4-b",${t.ou - 0.1},"right",.4);${S("whoosh_s", t.ou - 0.1, .5)}
inn("#s4-ar",${t.an - 0.1},"left",.35);glow("#s4-bb",${t.an},"rgba(255,210,63,.6)");${S("scan", t.an, .5)}
inn("#s4-bug",${t.pb - 0.1},"pop",.4);${S("alert", t.pb, .6)}shake("#s4-task",${t.pb});
inn("#s4-next",${t.pe - 0.2},"up",.4);${S("confirm", t.et, .6)}
` });
}
// S5 — fluxos organizados, menos decisões manuais
{
  const t = { i: at("Isso permite"), fl: at("fluxos"), or: at("organizados"), re: at("reduzir"), co: at("conduzir"), ma: at("manualmente"), de: at("decisão.") };
  V.scene({ id: "s5", t0: 44.35, t1: 52.0, in: "left", push: 0.03, html: `
    <div class="abs center-x tc" id="s5-h" style="top:180px;width:1040px"><div class="kw" style="font-size:100px">fluxo <span class="hlbox">organizado</span></div></div>
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s5-p" d="M120 470 L380 470 L380 690 L700 690 L700 470 L960 470" stroke="${CY}" stroke-width="12" fill="none" stroke-linecap="round" stroke-linejoin="round" style="filter:drop-shadow(0 0 10px ${CY})"/></svg>
    ${[[120, 470, PK], [380, 690, CY], [700, 690, YE], [960, 470, GR]].map(([x, y, c], i) => `<div class="abs" id="s5-n${i}" style="left:${x - 60}px;top:${y - 60}px;width:120px;height:120px;border-radius:50%;background:${c};box-shadow:0 0 34px ${c}"></div>`).join("")}
    <div class="abs row" id="s5-hands" style="left:70px;top:870px;width:940px;justify-content:space-between">${Array.from({ length: 7 }, (_, i) => `<div class="ic" id="s5-h${i}" style="width:118px;height:118px">${icon("hand", "#fca5a5", 2)}</div>`).join("")}</div>
    <div class="abs center-x tc" id="s5-k" style="top:1040px;width:900px"><div class="sticker" style="font-size:40px;background:${PK};color:#fff">${icon("trending-down", "#fff", 2.6)}menos decisão no manual</div></div>
  `, js: `
inn("#s5-h",${t.i},"up",.45);
draw("#s5-p",${t.fl - 0.1},1.0);${[0, 1, 2, 3].map((i) => `inn("#s5-n${i}",${(t.fl + i * 0.2).toFixed(2)},"pop",.35);`).join("")}${S("whoosh", t.fl, .5)}
${[0, 1, 2, 3].map((i) => `pulse("#s5-n${i}",${(t.or + i * 0.12).toFixed(2)},1.15,.3);`).join("")}
inn("#s5-hands",${t.re},"fade",.3);inn("#s5-k",${t.co},"pop",.4);${S("pop", t.co, .5)}
${Array.from({ length: 7 }, (_, i) => `to("#s5-h${i}",{opacity:${i < 2 ? 1 : 0.08},scale:${i < 2 ? 1 : 0.6},duration:.25},${(t.ma + i * 0.12).toFixed(2)});`).join("")}${S("tick_roll", t.ma, .5)}
` });
}
// S6a — aplicar a um negócio
{
  const t = { ag: at("Agora"), ne: at("negócio."), pe: at("pesquisar"), so: at("solução,"), or: at("organizar", 2), en: at("entregas"), re: at("reais.") };
  const cols = [["pesquisar mercado", "search", PK, t.pe], ["desenvolver solução", "lightbulb", CY, t.so], ["organizar processos", "workflow", YE, t.or], ["entregas reais", "package-check", GR, t.en]];
  V.scene({ id: "s6", t0: 51.95, t1: 62.75, in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc" id="s6-h" style="top:170px;width:1040px"><div class="kw" style="font-size:90px">agora no seu<br/><span class="hlbox">negócio</span></div></div>
    <div class="abs" style="left:50px;top:440px;width:980px;display:grid;grid-template-columns:1fr 1fr;gap:26px">
      ${cols.map(([n, ic, c], i) => `<div class="bizc" id="s6-c${i}" style="border-color:${c}66"><div class="ci" style="background:${c}">${icon(ic, "#111", 2.2)}</div><div class="ct">${n}</div><div class="ln" style="width:90%"></div><div class="ln" style="width:65%"></div></div>`).join("")}
    </div>
  `, js: `
inn("#s6-h",${t.ag},"up",.45);${S("impact", t.ne, .5)}pulse("#s6-h",${t.ne},1.05,.3);
${cols.map(([, , , tt], i) => `inn("#s6-c${i}",${(tt - 0.1).toFixed(2)},"drop",.5);${V.sfx("pop", tt - 0.1, 0.6)}`).join("\n")}
${cols.map((_, i) => `glow("#s6-c${i}",${(t.re + i * 0.07).toFixed(2)},"rgba(34,211,238,.35)");`).join("")}${S("confirm", t.re, .5)}
` });
}
// S6b — sozinho vs agentes de apoio
{
  const t = { ev: at("Em vez", 2), ex: at("executar"), et: at("etapas"), so: at("sozinho,"), po: at("Pode utilizar"), ag: at("utilizar agentes"), ap: at("apoio.") };
  const cs = [PK, CY, YE, GR];
  V.scene({ id: "s6b", t0: 62.7, t1: 69.5, in: "left", push: 0.03, html: `
    <div class="abs center-x tc" id="s6b-solo" style="top:190px;width:420px"><div class="ic" style="width:250px;height:250px;margin:0 auto">${icon("user-round", "#fca5a5", 1.6)}</div><div class="h3" style="font-size:46px">sozinho</div></div>
    <div class="abs" id="s6b-x" style="left:640px;top:300px"><div class="sticker red" style="font-size:60px;transform:rotate(8deg)">${icon("x", "#fff", 3)}</div></div>
    <div class="abs center-x tc" id="s6b-h" style="top:640px;width:1040px"><div class="kw" style="font-size:88px">com <span class="hlbox">agentes de apoio</span></div></div>
    <div class="abs row" style="left:60px;top:860px;width:960px;justify-content:space-between">${cs.map((c, i) => bot(`s6b-b${i}`, c, ["search", "lightbulb", "workflow", "package-check"][i], 200)).join("")}</div>
    <div class="abs burst" id="s6b-burst" style="left:540px;top:720px;width:0;height:0"></div>
  `, js: `
inn("#s6b-solo",${t.ev},"pop",.45);${S("pop", t.ev, .5)}
shake("#s6b-solo",${t.et});
inn("#s6b-x",${t.so - 0.1},"slam");${S("glitch", t.so, .5)}
to("#s6b-solo",{opacity:.35,scale:.85,duration:.4},${t.so + 0.2});
inn("#s6b-h",${t.po},"up",.45);
${cs.map((_, i) => `inn("#s6b-b${i}",${(t.ag - 0.1 + i * 0.1).toFixed(2)},"pop",.4);`).join("")}${S("pop_multi", t.ag - 0.1, .7)}
burst("#s6b-burst",${t.ap},22);${S("confirm", t.ap, .5)}
` });
}
// S7a — potencial: não é só conversar com IA mais poderosa
{
  const t = { e: at("E é aqui"), gn: at("gente"), po: at("potencial"), di: at("diferencial"), si: at("simplesmente"), cv: at("conversar"), pw: at("poderosa,") };
  V.scene({ id: "s7", t0: 69.45, t1: 79.45, in: "zoom", push: 0.04, html: `
    <div class="abs center-x tc" id="s7-h" style="top:180px;width:1040px"><div class="kw" style="font-size:96px">o potencial que<br/><span class="hlbox">pouca gente viu</span></div></div>
    <div class="abs" id="s7-eye" style="left:470px;top:470px;width:140px;height:140px">${icon("eye-off", YE, 2)}</div>
    <div class="abs card row gap24" id="s7-chat" style="left:70px;top:680px;width:940px;padding:36px 40px">
      <div class="ic" style="width:100px;height:100px;flex:none">${icon("message-circle", "#c7cbe0", 2)}</div>
      <div><div style="font:900 46px Inter;letter-spacing:-.02em">só conversar com uma IA</div><div class="mono" style="font-size:30px;opacity:.65;margin-top:8px">“mais poderosa”</div></div>
      <div id="s7-x" style="position:absolute;left:24px;right:24px;top:50%;height:12px;margin-top:-6px;background:#ef4444;border-radius:6px"></div>
    </div>
    <div class="abs center-x tc" id="s7-no" style="top:930px;width:700px"><div class="sticker red" style="font-size:52px;transform:rotate(-3deg)">não é isso</div></div>
  `, js: `
inn("#s7-h",${t.e},"up",.45);${S("riser", t.gn - 0.4, .5)}
inn("#s7-eye",${t.gn},"pop",.4);
pulse("#s7-h",${t.po},1.06,.4);${S("impact", t.po, .5)}
out("#s7-eye",${t.di - 0.2},"fade",.25);
inn("#s7-chat",${t.di},"rise",.5);${S("whoosh_s", t.di, .45)}
strike("#s7-x",${t.cv},.4);${S("glitch", t.cv, .55)}
inn("#s7-no",${t.pw - 0.1},"slam");${S("impact", t.pw - 0.1, .55)}
` });
}
// S7b — coordenar capacidades de ponta a ponta
{
  const t = { ap: at("é aprender"), co: at("coordenar"), di: at("diferentes capacidades"), ca: at("capacidades"), re: at("resolver"), pr: at("problema"), pt: at("ponta", 1), pa: at("a ponta.") };
  const nodes = [[230, 700, PK, "search"], [430, 560, CY, "code-2"], [650, 700, YE, "shield-check"], [850, 560, GR, "rocket"]];
  V.scene({ id: "s7b", t0: 79.4, t1: 85.2, in: "rise", push: 0.04, html: `
    <div class="abs center-x tc" id="s7b-h" style="top:170px;width:1040px"><div class="kw" style="font-size:132px">COORDENAR</div><div class="kw neon" style="font-size:78px;color:${CY}">de ponta a ponta</div></div>
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s7b-p" d="M90 860 L${nodes[0][0]} ${nodes[0][1]} ${nodes.slice(1).map(([x, y]) => `L${x} ${y}`).join(" ")} L990 860" stroke="${YE}" stroke-width="10" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
    ${nodes.map(([x, y, c, ic], i) => `<div class="abs" id="s7b-n${i}" style="left:${x - 85}px;top:${y - 85}px">${bot(`s7b-b${i}`, c, ic, 170)}</div>`).join("")}
    <div class="abs" id="s7b-st" style="left:40px;top:880px;width:110px;height:110px">${icon("circle-play", PK, 2.4)}</div>
    <div class="abs" id="s7b-fl" style="left:930px;top:880px;width:110px;height:110px">${icon("flag", GR, 2.6)}</div>
    <div class="abs center-x tc" id="s7b-ok" style="top:1040px;width:800px"><div class="sticker green" style="font-size:42px">${icon("check", "#fff", 3)}problema resolvido</div></div>
  `, js: `
inn("#s7b-h",${t.ap},"slam");${S("impact", t.co, .6)}
inn("#s7b-st",${t.di - 0.2},"pop",.35);
${nodes.map((_, i) => `inn("#s7b-n${i}",${(t.ca + i * 0.12).toFixed(2)},"pop",.4);`).join("")}${S("pop_multi", t.ca, .65)}
draw("#s7b-p",${t.re - 0.1},1.0);${S("whoosh", t.re, .5)}
inn("#s7b-fl",${t.pa - 0.2},"pop",.4);inn("#s7b-ok",${t.pa},"up",.4);${S("ding", t.pa, .55)}
` });
}
// S8 — depende: instruções, ferramentas, verificação humana → equipes digitais
{
  const t = { cl: at("Claro,"), dp: at("depende."), bi: at("instruções,"), fe: at("ferramentas"), vh: at("humana."), m: at("Mas a possibilidade"), cr: at("criar"), eq: at("equipes"), dg: at("digitais"), mu: at("muda"), tr: at("podemos trabalhar") };
  const items = [["boas instruções", "file-text", t.bi], ["ferramentas adequadas", "wrench", t.fe], ["verificação humana", "user-check", t.vh]];
  V.scene({ id: "s8", t0: 85.15, t1: 97.05, in: "left", push: 0.03, html: `
    <div class="abs center-x tc" id="s8-dep" style="top:190px;width:1000px"><div class="sticker" style="font-size:62px;transform:rotate(-3deg)">${icon("triangle-alert", "#111", 2.6)}ainda depende de…</div></div>
    <div class="abs col gap24" id="s8-list" style="left:60px;top:400px;width:960px">
      ${items.map(([l, ic], i) => `<div class="card row gap24" id="s8-i${i}" style="padding:32px 36px"><div class="ic" style="width:76px;height:76px">${icon(ic, YE, 2.4)}</div><div style="font:900 46px Inter;letter-spacing:-.02em">${l}</div><div class="ic" id="s8-c${i}" style="width:66px;height:66px;margin-left:auto">${icon("check", GR, 3.4)}</div></div>`).join("")}
    </div>
    <div class="abs center-x tc" id="s8-h" style="top:420px;width:1040px"><div class="kw" style="font-size:150px">EQUIPES</div><div class="kw neon" style="font-size:170px;color:${PK}">DIGITAIS</div></div>
    <div class="abs center-x tc" id="s8-mu" style="top:850px;width:900px"><div class="sticker dark" style="font-size:44px">${icon("refresh-cw", CY, 2.6)}muda o jeito de trabalhar</div></div>
    <div class="abs burst" id="s8-burst" style="left:540px;top:620px;width:0;height:0"></div>
  `, js: `
inn("#s8-dep",${t.cl},"slam");${S("impact", t.dp, .55)}
${items.map(([, , tt], i) => `inn("#s8-i${i}",${(tt - 0.15).toFixed(2)},"left",.4);set("#s8-c${i}",{opacity:0},${t.cl});inn("#s8-c${i}",${(tt + 0.2).toFixed(2)},"pop",.3);${V.sfx("confirm", tt + 0.2, 0.5)}`).join("\n")}
out("#s8-list",${t.m},"down",.35);out("#s8-dep",${t.m},"up",.3);
inn("#s8-h",${t.eq - 0.1},"slam");${S("impact", t.dg, .7)}
burst("#s8-burst",${t.dg},30);
inn("#s8-mu",${t.mu},"up",.4);${S("whoosh_s", t.mu, .45)}
pulse("#s8-h",${t.tr},1.06,.4);
` });
}
// S9 — CTA RUFLO
{
  const t = { q: at("Quer"), con: at("conhecer"), mo: at("montar"), ag: at("agentes?"), co: at("Comenta"), w: at("Ruflo", 3), seg: at("segue") };
  V.scene({ id: "s9", t0: 97.0, t1: 106.19, last: true, in: "zoom", push: 0.03,
    html: ctaHtml2("s9", { pre: `monte sua <span class="hlbox">equipe</span>`, word: "RUFLO", color: PK, sub: `<span class="mono" style="font-size:30px">/plugin marketplace add ruvnet/ruflo</span>` }) + `
    <div class="abs" id="s9-team" style="left:90px;top:420px;width:900px;display:flex;justify-content:space-between">${[PK, CY, YE, GR, VI].map((c, i) => bot(`s9-b${i}`, c, ["map", "code-2", "search", "shield-check", "rocket"][i], 150)).join("")}</div>`,
    js: `
${[0, 1, 2, 3, 4].map((i) => `inn("#s9-b${i}",${(t.mo + i * 0.1).toFixed(2)},"pop",.35);`).join("")}${S("pop_multi", t.mo, .6)}
out("#s9-team",${t.co - 0.25},"down",.25);
` + ctaJs2(V, "s9", { q: t.q, co: t.co, word: t.w, seg: t.seg, sub: t.seg + 0.6 }) });
}
V.write(`${OUT}/projeto`);
