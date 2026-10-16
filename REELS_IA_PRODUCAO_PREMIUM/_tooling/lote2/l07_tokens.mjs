// LOTE 2 · 07 — TOKENS (Mário 00:07) · ref 64b70d18 (mods / modelo mais barato)
// Sem números inventados: medidores são ilustrativos e não exibem valores. Famílias de modelo citadas: Haiku (narração), Sonnet e Opus.
import { Video, icon, logo } from "../lib/build.mjs";
import { KIT2_CSS, ctaHtml2, ctaJs2, L2ROOT, TR } from "../lib/kit2.mjs";

const OUT = `${L2ROOT}/07_TOKENS`;
const OR = "#ff7a1a", SK = "#0ea5e9", GR = "#16a34a", RD = "#ef4444", INK = "#0f1115", PU = "#7c3aed";
const V = new Video({
  id: "l07", title: "Tokens no Claude Code", kit2: true, theme: "light", capMaxWords: 3, capMaxChars: 18,
  wordsPath: `${TR}/2026-10-16T00_07_12_M_rio_-_Excited_Constant_and_Cheerful.json`, audioDur: 73.1, // 72.44 s narração + respiro
  accent: OR, capKey: OR, vars: { a1: OR, a2: SK, a3: GR, capbg: OR, capfg: "#fff" },
  fixes: { Cloud: "Claude" }, // ASR escreveu "Cloud"; a narração diz "Claude"
  keywords: ["tokens", "desperdiçando", "poderoso", "Haiku,", "suficiente.", "complexas", "contexto", "consumo.", "apropriado,", "qualidade", "diferença."],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
V.extraCss = KIT2_CSS + `
.cc{border-radius:60px;background:linear-gradient(160deg,#2a1d18,#140e0c);display:grid;place-items:center;box-shadow:0 30px 70px rgba(60,30,10,.35)}
.cc img{width:58%;height:58%}
.tank{position:relative;width:240px;height:620px;border-radius:40px;border:8px solid ${INK};background:#fffdf9;overflow:hidden}
.tank .lv{position:absolute;left:0;right:0;bottom:0;height:100%;transform-origin:50% 100%;background:linear-gradient(0deg,${OR},#ffb36b)}
.coin{position:absolute;width:70px;height:70px;border-radius:50%;background:#ffcf4d;border:6px solid #e0a412;display:grid;place-items:center;font:900 30px Inter;color:#8a5a00}
.mdl{border-radius:36px;padding:30px;display:flex;flex-direction:column;align-items:center;gap:12px;color:#fff;box-shadow:0 18px 0 rgba(0,0,0,.12),0 30px 60px rgba(60,40,10,.18)}
.mdl .mi{width:110px;height:110px}
.mdl .mn{font:700 64px "Space Grotesk";letter-spacing:-.03em;line-height:1}
.mdl .ms{font:700 26px "JetBrains Mono";opacity:.9}
.task{display:flex;align-items:center;gap:20px;padding:24px 30px;border-radius:26px;background:#fffdf9;border:3px solid rgba(15,17,21,.1);box-shadow:0 16px 36px rgba(60,40,10,.14);font:900 40px Inter;letter-spacing:-.02em}
.task .ti{width:64px;height:64px;flex:none}
.pz{width:290px;height:290px;border-radius:36px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;text-align:center;font:900 36px Inter;line-height:1.05}
.pz .pi{width:96px;height:96px}
.ctx{height:96px;border-radius:22px;display:flex;align-items:center;gap:18px;padding:0 26px;font:800 34px Inter;color:#fff;box-shadow:0 10px 0 rgba(0,0,0,.12)}
.ctx .ci{width:50px;height:50px}
`;
const cc = (s) => `<div class="cc" style="width:${s}px;height:${s}px;border-radius:${s * 0.26}px"><img src="${logo("claude-icon.svg")}"/></div>`;
[at("E o motivo"), at("Nem toda"), at("Pensa"), at("Em muitos"), at("E reservar"), at("Mas"), at("Também"), at("O ideal"), at("Porque"), at("Quer")].forEach((t, i) => V.swipe(t - 0.05, [OR, SK, GR][i % 3]));

// S1 HOOK — desperdiçando tokens sem perceber
{
  const t = { de: at("desperdiçando"), to: at("tokens"), cl: at("Cloud"), se: at("sem"), pe: at("perceber.") };
  V.scene({ id: "s1", t0: 0, t1: 4.95, in: "none", push: 0.04, html: `
    <div class="abs center-x tc" id="s1-h" style="top:170px;width:1040px"><div class="kw" style="font-size:104px">seus <span class="hlbox">TOKENS</span></div><div class="kw" style="font-size:84px;color:${RD};margin-top:10px">vazando</div></div>
    <div class="abs" id="s1-cc" style="left:110px;top:560px">${cc(300)}<div class="tc" style="font:900 44px Inter;margin-top:20px">Claude Code</div></div>
    <div class="abs" id="s1-tank" style="left:700px;top:470px"><div class="tank"><div class="lv" id="s1-lv"></div></div></div>
    ${[0, 1, 2, 3, 4].map((i) => `<div class="abs coin" id="s1-c${i}" style="left:${785 + (i % 2) * 30}px;top:1020px">T</div>`).join("")}
    <div class="abs" id="s1-drop" style="left:600px;top:980px;width:100px;height:100px">${icon("droplets", OR, 2.2)}</div>
  `, js: `
inn("#s1-h",0,"slam",.42);${S("impact", 0.02, .75)}
inn("#s1-cc",0.2,"left",.45);inn("#s1-tank",0.3,"right",.45);${S("whoosh_s", 0.2, .45)}
fromTo("#s1-lv",{scaleY:1},{scaleY:.18,duration:3.2,ease:"power1.in"},${t.de});${S("riser", t.de, .4)}
${[0, 1, 2, 3, 4].map((i) => `fromTo("#s1-c${i}",{opacity:0,y:-40,x:0,rotation:0},{opacity:1,y:${40 + i * 18},x:${(i - 2) * 80},rotation:${(i - 2) * 40},duration:.8,ease:"power2.in"},${(t.to + i * 0.35).toFixed(2)});`).join("")}${S("tick_roll", t.to, .45)}
inn("#s1-drop",${t.se},"pop",.3);shake("#s1-tank",${t.pe});${S("alert", t.pe, .5)}
` });
}
// S2 — o motivo é simples
{
  const t = { e: at("E o motivo"), si: at("simples"), pa: at("parece.") };
  V.scene({ id: "s2", t0: 4.95, t1: 7.65, in: "zoom", push: 0.05, html: `
    <div class="abs" id="s2-ic" style="left:390px;top:300px;width:300px;height:300px;border-radius:90px;background:#ffcf4d;display:grid;place-items:center;box-shadow:0 30px 70px rgba(200,140,0,.35)"><div style="width:60%;height:60%">${icon("lightbulb", INK, 2)}</div></div>
    <div class="abs center-x tc" id="s2-h" style="top:690px;width:1040px"><div class="kw" style="font-size:96px">o motivo é</div><div class="kw" style="font-size:170px;color:${OR}">SIMPLES</div></div>
  `, js: `
inn("#s2-ic",${t.e},"pop",.45);${S("pop", t.e, .6)}
inn("#s2-h",${t.si - 0.1},"slam");${S("impact", t.si - 0.1, .7)}pulse("#s2-ic",${t.pa},1.1,.35);${S("ding", t.pa, .5)}
` });
}
// S3 — nem toda tarefa precisa do modelo mais poderoso
{
  const t = { n: at("Nem toda"), ta: at("tarefa"), pr: at("precisa"), mo: at("modelo"), po: at("poderoso"), di: at("disponível.") };
  V.scene({ id: "s3", t0: 7.65, t1: 13.35, in: "left", push: 0.03, html: `
    <div class="abs center-x tc" id="s3-h" style="top:170px;width:1040px"><div class="kw" style="font-size:90px">nem toda tarefa<br/>precisa do</div></div>
    <div class="abs mdl" id="s3-big" style="left:190px;top:470px;width:700px;background:${PU}"><div class="mi">${icon("crown", "#fff", 2)}</div><div class="mn">Opus</div><div class="ms">o mais poderoso</div></div>
    <div class="abs task" id="s3-t" style="left:250px;top:960px;width:580px"><div class="ti">${icon("pencil", OR, 2.4)}</div>renomear 1 variável</div>
    <div class="abs" id="s3-x" style="left:800px;top:900px"><div class="sticker red" style="font-size:44px;transform:rotate(8deg)">exagero</div></div>
  `, js: `
inn("#s3-h",${t.n},"up",.45);
inn("#s3-t",${t.ta},"pop",.4);${S("pop", t.ta, .55)}
inn("#s3-big",${t.mo - 0.1},"drop",.5);${S("drop", t.mo - 0.1, .6)}
glow("#s3-big",${t.po},"rgba(124,58,237,.55)");${S("power", t.po, .55)}
inn("#s3-x",${t.di},"slam");${S("impact", t.di, .55)}
` });
}
// S4 — alteração pequena / organizar um arquivo
{
  const t = { p: at("Pensa"), re: at("realmente"), av: at("avançado"), ex: at("executar"), al: at("alteração"), pq: at("pequena"), or: at("organizar"), ar: at("arquivo?") };
  V.scene({ id: "s4", t0: 13.35, t1: 20.85, in: "rise", push: 0.03, html: `
    <div class="abs center-x tc" id="s4-h" style="top:170px;width:1040px"><div class="kw" style="font-size:96px">pensa <span class="hlbox">comigo</span></div></div>
    <div class="abs mdl" id="s4-big" style="left:300px;top:340px;width:480px;padding:24px;background:${PU}"><div class="mi" style="width:80px;height:80px">${icon("crown", "#fff", 2)}</div><div class="mn" style="font-size:48px">modelo avançado</div></div>
    <div class="abs" id="s4-q" style="left:740px;top:300px"><div class="sticker" style="font-size:90px;padding:4px 30px;background:${OR};color:#fff;transform:rotate(10deg)">?</div></div>
    <div class="abs col gap24" style="left:110px;top:700px;width:860px">
      <div class="task" id="s4-t0"><div class="ti">${icon("pencil", OR, 2.4)}</div>alteração pequena</div>
      <div class="task" id="s4-t1"><div class="ti">${icon("folder-tree", SK, 2.4)}</div>organizar um arquivo</div>
    </div>
  `, js: `
inn("#s4-h",${t.p},"up",.4);
inn("#s4-big",${t.av - 0.15},"pop",.45);${S("pop", t.av - 0.15, .6)}
inn("#s4-t0",${t.al - 0.1},"left",.4);${S("whoosh_s", t.al - 0.1, .45)}
inn("#s4-t1",${t.or - 0.1},"left",.4);${S("whoosh_s", t.or - 0.1, .45)}
inn("#s4-q",${t.ar - 0.05},"slam");${S("impact", t.ar, .6)}shake("#s4-big",${t.ar + 0.1});
` });
}
// S5 — um modelo mais leve, como o Haiku, pode ser suficiente
{
  const t = { e: at("Em muitos"), le: at("leve,"), ha: at("Haiku,"), po: at("Pode ser"), su: at("suficiente.") };
  V.scene({ id: "s5", t0: 20.85, t1: 25.55, in: "zoom", push: 0.04, html: `
    <div class="abs center-x tc" id="s5-h" style="top:170px;width:1040px"><div class="kw" style="font-size:96px">um modelo <span class="hlbox">mais leve</span></div></div>
    <div class="abs mdl" id="s5-hk" style="left:240px;top:380px;width:600px;background:${SK}"><div class="mi" style="width:150px;height:150px">${icon("feather", "#fff", 1.8)}</div><div class="mn" style="font-size:120px">Haiku</div><div class="ms">leve · rápido</div></div>
    <div class="abs center-x tc" id="s5-ok" style="top:960px;width:800px"><div class="sticker green" style="font-size:56px">${icon("check", "#fff", 3)}suficiente</div></div>
  `, js: `
inn("#s5-h",${t.e},"up",.45);
inn("#s5-hk",${t.ha - 0.15},"slam");${S("impact", t.ha - 0.1, .7)}${S("shimmer", t.ha + 0.1, .5)}
fromTo("#s5-hk",{y:0},{y:-18,duration:.9,yoyo:true,repeat:2,ease:"sine.inOut",immediateRender:false},${t.ha + 0.4});
inn("#s5-ok",${t.su - 0.05},"pop",.4);${S("confirm", t.su, .6)}
` });
}
// S6 — modelos capazes para tarefas complexas (roteamento)
{
  const t = { e: at("E reservar"), mo: at("modelos"), ca: at("capazes"), ta: at("tarefas"), co: at("complexas"), ma: at("maneira"), in: at("inteligente"), ad: at("administrar"), re: at("recursos.") };
  V.scene({ id: "s6", t0: 25.55, t1: 32.05, in: "left", push: 0.03, html: `
    <div class="abs center-x tc" id="s6-h" style="top:170px;width:1040px"><div class="kw" style="font-size:90px">cada tarefa,<br/><span class="hlbox">seu modelo</span></div></div>
    <div class="abs task" id="s6-ts" style="left:60px;top:470px;width:430px;font-size:34px"><div class="ti">${icon("pencil", OR, 2.4)}</div>tarefa simples</div>
    <div class="abs task" id="s6-tc" style="left:60px;top:800px;width:430px;font-size:34px"><div class="ti">${icon("network", PU, 2.4)}</div>tarefa complexa</div>
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s6-w0" d="M495 520 L640 520" stroke="${SK}" stroke-width="10" fill="none" stroke-linecap="round"/><path id="s6-w1" d="M495 850 L640 850" stroke="${PU}" stroke-width="10" fill="none" stroke-linecap="round"/></svg>
    <div class="abs mdl" id="s6-m0" style="left:650px;top:430px;width:370px;padding:22px;background:${SK}"><div class="mn" style="font-size:56px">Haiku</div></div>
    <div class="abs mdl" id="s6-m1" style="left:650px;top:760px;width:370px;padding:22px;background:${PU}"><div class="mn" style="font-size:56px">Opus</div></div>
    <div class="abs center-x tc" id="s6-ok" style="top:1050px;width:900px"><div class="sticker dark" style="font-size:40px">${icon("brain", "#fff", 2.4)}recursos bem administrados</div></div>
  `, js: `
inn("#s6-h",${t.e},"up",.45);
inn("#s6-tc",${t.ta - 0.1},"left",.4);draw("#s6-w1",${t.co - 0.1},.4);inn("#s6-m1",${t.co + 0.1},"pop",.4);${S("pop", t.co + 0.1, .65)}
inn("#s6-ts",${t.ma - 0.1},"left",.4);draw("#s6-w0",${t.in - 0.1},.4);inn("#s6-m0",${t.in + 0.1},"pop",.4);${S("pop", t.in + 0.1, .65)}
inn("#s6-ok",${t.ad},"up",.4);${S("confirm", t.re, .55)}
` });
}
// S7 — modelo é só uma parte da estratégia (peça 1 de 3)
{
  const t = { m: at("Mas"), es: at("escolha"), mo: at("modelo", 4), ap: at("apenas"), pa: at("parte"), et: at("estratégia.") };
  V.scene({ id: "s7", t0: 32.05, t1: 35.5, in: "zoom", push: 0.04, html: `
    <div class="abs center-x tc" id="s7-h" style="top:170px;width:1040px"><div class="kw" style="font-size:96px">só <span class="hlbox">uma parte</span></div></div>
    <div class="abs row" style="left:45px;top:450px;width:990px;justify-content:space-between">
      <div class="pz" id="s7-p0" style="background:${SK};color:#fff"><div class="pi">${icon("cpu", "#fff", 2)}</div>modelo</div>
      <div class="pz" id="s7-p1" style="border:5px dashed rgba(15,17,21,.25);color:rgba(15,17,21,.35)">?</div>
      <div class="pz" id="s7-p2" style="border:5px dashed rgba(15,17,21,.25);color:rgba(15,17,21,.35)">?</div>
    </div>
  `, js: `
inn("#s7-h",${t.ap - 0.1},"up",.4);
inn("#s7-p0",${t.es},"drop",.45);${S("drop", t.es, .55)}
inn("#s7-p1",${t.pa - 0.1},"fade",.3);inn("#s7-p2",${t.pa},"fade",.3);${S("pop", t.pa, .45)}
` });
}
// S8 — contexto: informações desnecessárias, instruções repetidas, históricos extensos
{
  const t = { ta: at("Também"), qu: at("quantidade"), co: at("contexto"), en: at("enviada"), ca: at("cada"), in: at("interação."), id: at("Informações"), ir: at("instruções"), hi: at("históricos"), au: at("aumentar"), cs: at("consumo.") };
  const blocks = [["conversa útil", SK, "message-square", t.co], ["informações desnecessárias", "#94a3b8", "file-x", t.id], ["instruções repetidas", "#f59e0b", "repeat", t.ir], ["histórico extenso", RD, "history", t.hi]];
  V.scene({ id: "s8", t0: 35.5, t1: 48.0, in: "left", push: 0.03, html: `
    <div class="abs center-x tc" id="s8-h" style="top:170px;width:1040px"><div class="kw" style="font-size:90px">olho no <span class="hlbox">contexto</span></div></div>
    <div class="abs" id="s8-win" style="left:60px;top:340px;width:660px;height:760px;border-radius:34px;border:5px solid ${INK};background:#fffdf9;padding:24px;display:flex;flex-direction:column-reverse;gap:16px">
      ${blocks.map(([n, c, ic], i) => `<div class="ctx" id="s8-b${i}" style="background:${c};${i === 3 ? "height:200px" : ""}"><div class="ci">${icon(ic, "#fff", 2.4)}</div>${n}</div>`).join("")}
    </div>
    <div class="abs kicker" id="s8-wl" style="left:70px;top:1110px;font-size:24px">a cada interação, tudo isso vai junto</div>
    <div class="abs" id="s8-g" style="left:780px;top:340px"><div class="tank" style="width:220px;height:760px"><div class="lv" id="s8-lv" style="background:linear-gradient(0deg,${RD},#fb923c)"></div></div><div class="tc" style="font:900 34px Inter;margin-top:14px">consumo</div></div>
    <div class="abs" id="s8-up" style="left:830px;top:240px;width:120px;height:120px">${icon("trending-up", RD, 2.6)}</div>
  `, js: `
inn("#s8-h",${t.ta},"up",.45);
inn("#s8-win",${t.qu - 0.1},"rise",.5);inn("#s8-g",${t.qu},"right",.45);${S("whoosh_s", t.qu - 0.1, .45)}
set("#s8-lv",{scaleY:.12},${t.ta});fromTo("#s8-lv",{scaleY:.12},{scaleY:.25,duration:.5},${t.co});
${blocks.map(([, , , tt], i) => `inn("#s8-b${i}",${(tt - 0.1).toFixed(2)},"drop",.45);${V.sfx(i ? "drop" : "pop", tt - 0.1, 0.6)}${i ? `to("#s8-lv",{scaleY:${(0.25 + i * 0.22).toFixed(2)},duration:.6,ease:E.o},${(tt + 0.1).toFixed(2)});` : ""}`).join("\n")}
inn("#s8-wl",${t.ca},"fade",.4);
inn("#s8-up",${t.au},"pop",.4);shake("#s8-g",${t.cs});${S("alert", t.cs, .6)}
` });
}
// S9 — o ideal: modelo apropriado + contexto organizado + qualidade verificada (peças completas)
{
  const t = { o: at("O ideal"), es: at("escolher"), ap: at("apropriado,"), or: at("organizar", 2), co: at("contexto", 2), ve: at("verificar"), ql: at("qualidade"), rs: at("resultados.") };
  const P = [["modelo apropriado", "cpu", SK, t.es], ["contexto organizado", "layers", OR, t.or], ["qualidade verificada", "badge-check", GR, t.ve]];
  V.scene({ id: "s9", t0: 48.0, t1: 54.7, in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc" id="s9-h" style="top:170px;width:1040px"><div class="kw" style="font-size:110px">o <span class="hlbox">ideal</span></div></div>
    <div class="abs row" style="left:45px;top:400px;width:990px;justify-content:space-between">
      ${P.map(([n, ic, c], i) => `<div class="pz" id="s9-p${i}" style="background:${c};color:#fff;font-size:34px"><div class="pi">${icon(ic, "#fff", 2)}</div>${n}</div>`).join("")}
    </div>
    <div class="abs center-x tc" id="s9-ok" style="top:800px;width:900px"><div class="sticker dark" style="font-size:48px">${icon("puzzle", "#fff", 2.4)}estratégia completa</div></div>
    <div class="abs burst" id="s9-burst" style="left:540px;top:560px;width:0;height:0"></div>
  `, js: `
inn("#s9-h",${t.o},"up",.4);
${P.map(([, , , tt], i) => `inn("#s9-p${i}",${(tt - 0.1).toFixed(2)},"drop",.45);${V.sfx("pop", tt - 0.1, 0.7)}`).join("\n")}
inn("#s9-ok",${t.rs - 0.1},"slam");${S("impact", t.rs - 0.1, .65)}burst("#s9-burst",${t.rs},26);
` });
}
// S10 — melhor ≠ mais tokens; cada recurso onde faz diferença
{
  const t = { p: at("Porque"), me: at("melhor"), ns: at("não significa"), ga: at("gastar"), tk: at("tokens.", 2), si: at("significa", 2), re: at("recurso"), on: at("onde"), fd: at("faz"), di: at("diferença.") };
  V.scene({ id: "s10", t0: 54.7, t1: 65.0, in: "rise", push: 0.03, html: `
    <div class="abs center-x tc" id="s10-a" style="top:190px;width:1040px"><div class="kw" style="font-size:130px;color:${GR}">MELHOR</div></div>
    <div class="abs center-x tc" id="s10-neq" style="top:380px;width:300px;font:700 180px 'Space Grotesk';color:${RD};line-height:1">≠</div>
    <div class="abs center-x tc" id="s10-b" style="top:590px;width:1040px"><div class="kw" style="font-size:110px">mais tokens</div></div>
    <div class="abs" id="s10-tg" style="left:340px;top:330px;width:400px;height:400px">${icon("target", OR, 1.6)}</div>
    <div class="abs center-x tc" id="s10-c" style="top:800px;width:1040px"><div class="kw" style="font-size:80px">cada recurso onde</div><div class="kw" style="font-size:100px;color:${OR}">faz diferença</div></div>
  `, js: `
inn("#s10-a",${t.me - 0.1},"slam");${S("impact", t.me - 0.1, .6)}
inn("#s10-neq",${t.ns},"pop",.35);${S("pop", t.ns, .55)}
inn("#s10-b",${t.ga - 0.1},"up",.4);${S("tick_roll", t.ga, .4)}
out("#s10-a, #s10-neq, #s10-b",${t.si - 0.25},"up",.25);
inn("#s10-tg",${t.re - 0.1},"zoom",.5);${S("whoosh", t.re - 0.1, .5)}
inn("#s10-c",${t.on},"up",.45);pulse("#s10-tg",${t.di},1.1,.35);${S("ding", t.di, .6)}
` });
}
// S11 — CTA TOKENS
{
  const t = { q: at("Quer"), co: at("Comenta"), w: at("tokens", 3), seg: at("segue") };
  V.scene({ id: "s11", t0: 65.0, t1: V.dur, last: true, in: "zoom", push: 0.03,
    html: ctaHtml2("s11", { pre: `quer <span class="hlbox">otimizar?</span>`, word: "TOKENS", color: OR }),
    js: ctaJs2(V, "s11", { q: t.q, co: t.co, word: t.w, seg: t.seg }) });
}
V.write(`${OUT}/projeto`);
