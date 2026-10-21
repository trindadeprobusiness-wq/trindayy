// LOTE 3 · 05 — INSTINCT: O MODELO DE NEGÓCIO (Mário 18:05) · ref llucaspaiva__
// Sem imagens reais da empresa: tipografia editorial + interfaces marcadas como "exemplo".
// Único número na tela é o falado (US$ 10 bilhões). Sem porcentagem de comissão (a fala não cita).
import fs from "node:fs";
import { Video, icon } from "../lib/build.mjs";
import { KIT2_CSS } from "../lib/kit2.mjs";
import { KIT3_CSS, L3ROOT, narr, words, iphone } from "../lib/kit3.mjs";

const DIR = "05_INSTINCT", OUT = `${L3ROOT}/${DIR}`;
const INK = "#111111", GN = "#0b8a4c", CO = "#ff5a36", PA = "#f3efe7", GY = "#8a8478";
// legenda: tira o traço solto, a gagueira "não é a É apenas" → "não é apenas", "Est" → "Está"
const raw = JSON.parse(fs.readFileSync(narr(DIR), "utf8")), fixes = {};
raw.forEach((w, i) => {
  if (w.text === "-") fixes[`-@${i}`] = "";
  if (w.text === "É" && raw[i - 1]?.text === "a" && raw[i - 2]?.text === "é") { fixes[`É@${i}`] = ""; fixes[`a@${i - 1}`] = ""; }
  if (w.text === "Est") fixes[`Est@${i}`] = "Está";
  if (w.text === "Também") fixes[`Também@${i}`] = "também";
});
const V = new Video({
  id: "l3-05", title: "Instinct — modelo de negócio", kit2: true, theme: "light", capMaxWords: 3, capMaxChars: 18,
  wordsPath: narr(DIR), audioDur: 123.7, fixes,
  accent: GN, capKey: GN, vars: { a1: CO, a2: GN, a3: "#ffd23f", capbg: INK, capfg: "#fff", ink: INK, paper: PA },
  keywords: ["10", "bilhões", "assistente", "Instinct,", "executar", "mensagem", "modelo", "negócio", "assinaturas", "intermediando", "comissão", "escala", "receita.", "conversa", "clientes", "vendas.", "chatbot.", "agentes", "interesse."],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
V.extraCss = KIT2_CSS + KIT3_CSS + `
#root{background:${PA}}
.ed{font-family:"Space Grotesk";font-weight:700;letter-spacing:-.045em;line-height:.92;color:${INK}}
.rule{position:absolute;height:4px;background:${INK}}
.tick{position:absolute;left:0;top:1150px;width:3000px;height:64px;background:${INK};color:${PA};display:flex;align-items:center;gap:50px;font:700 30px "JetBrains Mono";white-space:nowrap;padding-left:30px}
.tick b{color:#5ee59a}
.rol{display:inline-block;height:1em;overflow:hidden;vertical-align:top}
.paper{background:#fffdf8;border-radius:30px;box-shadow:0 24px 60px rgba(60,40,10,.14);border:1.5px solid rgba(17,17,17,.08)}
.task{display:flex;align-items:center;gap:26px;padding:28px 34px;font:800 46px Inter;color:${INK}}
.task .ti{width:96px;height:96px;border-radius:26px;display:grid;place-items:center}
.task .ti svg{width:56%;height:56%}
.app{width:150px;height:150px;border-radius:38px;display:grid;place-items:center;box-shadow:0 12px 30px rgba(60,40,10,.18)}
.app svg{width:54%;height:54%}
.coin{position:absolute;width:64px;height:64px;border-radius:50%;background:#f5c542;border:5px solid #c9971a;display:grid;place-items:center;font:900 30px Inter;color:#7a5800}
.dot{position:absolute;width:26px;height:26px;border-radius:50%;background:${INK}}
.rc{font:600 36px "JetBrains Mono";color:${INK};display:flex;justify-content:space-between;padding:14px 0;border-bottom:3px dashed rgba(17,17,17,.2)}
.dark .ed{color:#fff}
`;
const SW = [at("E o mais"), at("A empresa"), at("Imagina"), at("Em vez"), at("A inteligência"), at("Mas"), at("Porque"), at("Por exemplo,"), at("Pensa"), at("E existe"), at("Para as"), at("No final,"), at("E é por"), at("Agora")];
SW.forEach((t, i) => V.swipe(t - 0.05, [INK, CO, GN][i % 3]));
const T = SW.map((t) => t - 0.08);
const chatPhone = (id, x, y, sc, inner) => iphone({ id, x, y, scale: sc, bg: "#fff", screen: `<div style="position:absolute;left:0;right:0;top:70px;height:90px;border-bottom:1.5px solid #eee;display:flex;align-items:center;gap:14px;padding:0 26px"><div style="width:54px;height:54px;border-radius:50%;background:${INK};display:grid;place-items:center"><div style="width:58%;height:58%">${icon("sparkles", "#fff", 2.2)}</div></div><div style="font:800 28px Inter;color:${INK}">assistente</div></div><div style="position:absolute;left:22px;right:22px;top:190px;display:flex;flex-direction:column;gap:18px">${inner}</div>` });

// S1 — gancho: US$ 10 bilhões
{
  const t = { ch: at("chamou"), me: at("mercado"), av: at("avaliação"), dez: at("10"), bi: at("bilhões"), dl: at("dólares.") };
  V.scene({ id: "s1", t0: 0, t1: T[0], in: "none", push: 0.04, html: `
    <div class="abs" id="s1-k" style="left:70px;top:310px"><div class="lbl" style="color:${GY}">startup · agentes de IA</div></div>
    <div class="abs ed" id="s1-h" style="left:70px;top:360px;width:940px;font-size:96px">${words("uma startup de agentes de IA")}</div>
    <div class="rule" id="s1-r" style="left:70px;top:600px;width:940px"></div>
    <div class="abs" id="s1-av" style="left:70px;top:640px"><div class="lbl" style="color:${GY}">avaliação</div></div>
    <div class="abs ed" id="s1-n" style="left:60px;top:690px;font-size:330px;color:${GN}"><span style="font-size:130px;vertical-align:top;margin-right:10px">US$</span><span id="s1-c">0</span></div>
    <div class="abs ed" id="s1-b" style="left:70px;top:990px;font-size:130px">bilhões</div>
    <div class="tick" id="s1-t">${Array.from({ length: 6 }, () => `<span>AGENTES DE IA <b>▲</b></span><span>STARTUP</span><span>AVALIAÇÃO <b>US$ 10 BI</b></span>`).join("")}</div>
  `, js: `
inn("#s1-k",0,"fade",.3);inn("#s1-h .wd",0.02,"blur",.45,{stagger:.06});${S("whoosh_s", 0.02, .4)}
strike("#s1-r",${t.ch},.5);
fromTo("#s1-t",{x:0},{x:-1400,duration:9,ease:"none",immediateRender:true},0);
inn("#s1-av",${t.av - 0.1},"fade",.3);inn("#s1-n",${t.av - 0.1},"up",.4);
count("#s1-c",${t.av},${(t.dez - t.av + 0.15).toFixed(2)},0,10,"int");${S("counter", t.av, .55)}
pulse("#s1-n",${t.dez + 0.15},1.05,.3);
inn("#s1-b",${t.bi - 0.08},"slam");${S("impact", t.bi - 0.05, .85)}
` });
}
// S2 — algo que você usa todo dia: assistente pessoal
{
  const t = { cu: at("curioso"), al: at("algo"), td: at("todos"), as: at("assistente"), pe: at("pessoal") };
  V.scene({ id: "s2", t0: T[0], t1: T[1], in: "cut", push: 0.03, html: `
    <div class="abs ed" id="s2-h" style="left:70px;top:310px;width:940px;font-size:88px">${words("algo que você usa")}<span class="wd" style="color:${CO}">todo dia</span></div>
    ${chatPhone("s2-ph", 325, 400, 0.74, `<div id="s2-b1" class="bub ai" style="font-size:30px;align-self:flex-start">Oi! Como posso ajudar?</div>`)}
    <div class="abs" id="s2-lb" style="left:690px;top:930px"><div class="sticker" style="font-size:28px;background:${INK};color:#fff">${icon("user", "#fff", 2.4)}assistente pessoal</div></div>
    <div class="abs" id="s2-cal" style="left:60px;top:600px"><div class="sticker" style="font-size:30px;background:#fff;color:${INK}">${icon("calendar-days", CO, 2.4)}todos os dias</div></div>
  `, js: `
inn("#s2-h .wd",${T[0] + 0.05},"blur",.45,{stagger:.08});
fromTo("#s2-ph",{y:600,opacity:0},{y:0,opacity:1,duration:.7,ease:"expo.out"},${t.al - 0.1});${S("whoosh", t.al - 0.15, .45)}
inn("#s2-cal",${t.td - 0.1},"pop",.35);${S("pop", t.td - 0.1, .55)}
inn("#s2-b1",${t.as - 0.05},"pop",.35);${S("pop", t.as, .6)}
inn("#s2-lb",${t.pe - 0.08},"slam");${S("impact", t.pe - 0.05, .5)}
` });
}
// S3 — Instinct: conversa simples → executar tarefas
{
  const t = { em: at("empresa"), in: at("Instinct,"), tr: at("transformar"), cv: at("conversa"), cp: at("capaz."), ex: at("executar"), ta: at("tarefas"), us: at("usuário.") };
  V.scene({ id: "s3", t0: T[1], t1: T[2], in: "zoom", push: 0.035, html: `
    <div class="abs" id="s3-k" style="left:70px;top:330px"><div class="lbl" style="color:${GY}">a empresa</div></div>
    <div class="abs ed" id="s3-n" style="left:60px;top:380px;font-size:220px">${"Instinct".split("").map((c) => `<span class="wd">${c}</span>`).join("")}</div>
    <div class="rule" id="s3-r" style="left:70px;top:640px;width:940px"></div>
    <div class="abs" id="s3-bub" style="left:90px;top:720px"><div class="bub wb" style="font-size:44px;box-shadow:0 14px 40px rgba(60,40,10,.15)">reserva uma mesa pra mim?</div></div>
    <div class="abs" id="s3-ar" style="left:470px;top:860px;width:110px;height:110px">${icon("arrow-down", INK, 2.4)}</div>
    <div class="abs" id="s3-btn" style="left:250px;top:1000px;width:580px;height:140px;border-radius:70px;background:${GN};color:#fff;display:flex;align-items:center;justify-content:center;gap:20px;font:900 60px Inter;box-shadow:0 20px 50px rgba(11,138,76,.35)"><div style="width:62px;height:62px">${icon("play", "#fff", 2.6)}</div>executar</div>
    <div class="exm" id="s3-ex" style="left:840px;top:330px;color:${GY}">exemplo</div>
  `, js: `
inn("#s3-k",${t.em},"fade",.3);
inn("#s3-n .wd",${t.in - 0.1},"blur",.4,{stagger:.05});${S("typing", t.in - 0.1, .45)}
strike("#s3-r",${t.in + 0.4},.5);
inn("#s3-bub",${t.cv - 0.1},"pop",.4);${S("pop", t.cv - 0.1, .6)}inn("#s3-ex",${t.cv},"fade",.3);
inn("#s3-ar",${t.cp - 0.1},"down",.35);
inn("#s3-btn",${t.ex - 0.1},"slam");${S("click", t.ex - 0.05, .7)}${S("impact", t.ex, .5)}
pulse("#s3-btn",${t.ta + 0.2},1.06,.4);
` });
}
// S4 — três tarefas
{
  const t = { im: at("Imagina"), re: at("restaurante,"), co: at("compromisso"), ca: at("carro"), lu: at("lugar.") };
  const K = [["reservar um restaurante", "utensils", CO, t.re], ["marcar um compromisso", "calendar-check", GN, t.co], ["pedir um carro", "car", INK, t.ca]];
  V.scene({ id: "s4", t0: T[2], t1: T[3], in: "left", push: 0.03, html: `
    <div class="abs ed" id="s4-h" style="left:70px;top:310px;width:940px;font-size:90px">${words("imagina pedir pra IA:")}</div>
    <div class="abs col gap24" style="left:70px;top:540px;width:940px">
      ${K.map(([n, ic, c], i) => `<div class="paper task" id="s4-k${i}"><div class="ti" style="background:${c}">${icon(ic, "#fff", 2.2)}</div>${n}<div id="s4-ok${i}" style="margin-left:auto;width:64px;height:64px">${icon("circle-check", GN, 2.6)}</div></div>`).join("")}</div>
  `, js: `
inn("#s4-h .wd",${t.im},"blur",.45,{stagger:.08});
${K.map(([, , , tt], i) => `inn("#s4-k${i}",${(tt - 0.15).toFixed(2)},"rise",.45);${V.sfx("pop", tt - 0.15, 0.6)}set("#s4-ok${i}",{opacity:0},${T[2]});inn("#s4-ok${i}",${(tt + 0.5).toFixed(2)},"pop",.3);`).join("\n")}
${S("confirm", t.lu, .5)}
` });
}
// S5 — vários apps → uma mensagem
{
  const t = { ab: at("abrir"), va: at("vários"), ap: at("aplicativos,"), si: at("simplesmente"), ma: at("manda"), me: at("mensagem"), as: at("assistente.") };
  const A = [["utensils", CO], ["calendar", GN], ["car", INK], ["shopping-bag", "#7c5cff"], ["plane", "#0a84ff"], ["ticket", CO], ["map-pin", GN], ["credit-card", INK], ["hotel", "#c2410c"]];
  V.scene({ id: "s5", t0: T[3], t1: T[4], in: "zoom", push: 0.03, html: `
    <div class="abs ed" id="s5-h" style="left:70px;top:310px;width:940px;font-size:90px">${words("em vez de vários apps…")}</div>
    ${A.map(([ic, c], i) => `<div class="abs app" id="s5-a${i}" style="left:${210 + (i % 3) * 230}px;top:${520 + Math.floor(i / 3) * 210}px;background:${c}">${icon(ic, "#fff", 2.2)}</div>`).join("")}
    <div class="abs" id="s5-m" style="left:170px;top:700px"><div class="bub me" style="font-size:52px;padding:30px 44px;background:${INK}">uma mensagem</div></div>
  `, js: `
inn("#s5-h .wd",${T[3] + 0.05},"blur",.45,{stagger:.08});
${A.map((_, i) => `inn("#s5-a${i}",${(t.ab + i * 0.06).toFixed(2)},"pop",.3);`).join("")}${S("pop_multi", t.ab, .55)}
${A.map((_, i) => `to("#s5-a${i}",{x:${330 - (210 + (i % 3) * 230) + 0},y:${770 - (520 + Math.floor(i / 3) * 210)},scale:.2,opacity:0,duration:.45,ease:"power3.in"},${(t.ma - 0.35 + i * 0.02).toFixed(2)});`).join("")}${S("whoosh", t.ma - 0.35, .6)}
inn("#s5-m",${t.ma + 0.1},"pop",.45);${S("pop", t.ma + 0.12, .7)}
` });
}
// S6 — a IA entende e executa (exemplo)
{
  const t = { a: at("A inteligência"), en: at("entende"), pr: at("precisa", 2), aj: at("ajuda"), ex: at("executar", 2), tf: at("tarefa.") };
  V.scene({ id: "s6", t0: T[4], t1: T[5], in: "rise", push: 0.03, html: `
    <div class="abs ed" id="s6-h" style="left:70px;top:310px;width:600px;font-size:84px">${words("a IA entende e executa")}</div>
    ${chatPhone("s6-ph", 520, 400, 0.78, `<div id="s6-u" class="bub me" style="font-size:28px;align-self:flex-end">Mesa pra 2 hoje às 20h?</div><div id="s6-ty" class="bub ai" style="font-size:28px;align-self:flex-start">digitando…</div><div id="s6-r" class="bub ai" style="font-size:28px;align-self:flex-start;background:#d9f5e5">Reservado ✓</div>`)}
    <div class="exm" id="s6-ex" style="left:70px;top:620px;color:${GY}">exemplo ilustrativo</div>
  `, js: `
inn("#s6-h .wd",${t.a},"blur",.45,{stagger:.08});
inn("#s6-ph",${t.a + 0.1},"bscale",.5);inn("#s6-ex",${t.a + 0.4},"fade",.3);
inn("#s6-u",${t.a + 0.6},"pop",.35);${S("pop", t.a + 0.6, .55)}
set("#s6-ty",{opacity:0},${T[4]});inn("#s6-ty",${t.en - 0.05},"pop",.3);to("#s6-ty",{opacity:0,height:0,padding:0,duration:.2},${t.ex - 0.2});
set("#s6-r",{opacity:0},${T[4]});inn("#s6-r",${t.ex - 0.05},"pop",.35);${S("ding", t.ex, .7)}
` });
}
// S7 — a virada: o modelo de negócio (fundo escuro)
{
  const t = { ma: at("Mas"), te: at("tecnologia,"), mo: at("modelo"), ne: at("negócio", 2), tr: at("trás") };
  V.scene({ id: "s7", t0: T[5], t1: T[6], in: "cut", push: 0.04, cls: "dark", html: `
    <div class="abs" style="inset:-60px;background:${INK}"></div>
    <div class="abs ed" id="s7-a" style="left:70px;top:360px;font-size:110px;color:#fff">não é só a</div>
    <div class="abs ed" id="s7-t" style="left:70px;top:480px;font-size:150px;color:#fff">tecnologia</div>
    <div class="abs ed" id="s7-m" style="left:70px;top:740px;font-size:150px;color:${PA}">${words("O MODELO")}</div>
    <div class="abs ed" id="s7-n" style="left:70px;top:890px;font-size:150px;color:#5ee59a">${words("DE NEGÓCIO")}</div>
  `, js: `
inn("#s7-a",${t.ma},"blur",.45);${S("whoosh", t.ma - 0.1, .55)}
inn("#s7-t",${t.te - 0.1},"blur",.45);to("#s7-t",{opacity:.3,duration:.4},${t.te + 0.6});
inn("#s7-m .wd",${t.mo - 0.1},"slam",.4,{stagger:.08});${S("impact", t.mo - 0.05, .85)}
inn("#s7-n .wd",${t.ne - 0.1},"slam",.4,{stagger:.08});${S("impact", t.ne - 0.05, .5)}
` });
}
// S8 — assinatura mensal × intermediar transações
{
  const t = { po: at("Porque"), de: at("depender"), as: at("assinaturas"), ga: at("ganhar"), di: at("dinheiro"), in: at("intermediando"), tr: at("transações.") };
  V.scene({ id: "s8", t0: T[6], t1: T[7], in: "rise", push: 0.03, html: `
    <div class="abs paper" id="s8-s" style="left:70px;top:330px;width:940px;height:200px;display:flex;align-items:center;gap:28px;padding:0 40px">
      <div style="width:100px;height:100px">${icon("repeat", GY, 2)}</div><div><div class="lbl" style="color:${GY}">só isso?</div><div style="font:800 54px Inter;color:${INK}">assinatura mensal</div></div>
      <div id="s8-x" style="position:absolute;left:30px;right:30px;top:96px;height:10px;background:${CO};transform-origin:left center"></div></div>
    <div class="abs row" id="s8-fl" style="left:70px;top:700px;width:940px;justify-content:space-between">
      ${[["user", "usuário", INK], ["sparkles", "Instinct", GN], ["store", "empresa", CO]].map(([ic, n, c], i) => `<div class="tc" id="s8-n${i}"><div style="width:190px;height:190px;border-radius:50%;background:${c};display:grid;place-items:center;margin:0 auto"><div style="width:48%;height:48%">${icon(ic, "#fff", 2)}</div></div><div style="font:800 40px Inter;margin-top:14px;color:${INK}">${n}</div></div>`).join("")}</div>
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s8-w" d="M260 795 H 820" stroke="${INK}" stroke-width="6" stroke-dasharray="14 14" fill="none"/></svg>
    <div class="coin" id="s8-c" style="left:228px;top:763px">$</div>
    <div class="abs" id="s8-lb" style="left:250px;top:1030px"><div class="sticker" style="font-size:40px;background:${GN};color:#fff">${icon("arrow-left-right", "#fff", 2.4)}intermedia transações</div></div>
  `, js: `
inn("#s8-s",${t.po},"up",.45);
strike("#s8-x",${t.as - 0.05},.4);${S("whoosh_s", t.as - 0.05, .45)}to("#s8-s",{opacity:.5,duration:.3},${t.as + 0.5});
${[0, 1, 2].map((i) => `inn("#s8-n${i}",${(t.ga - 0.1 + i * 0.15).toFixed(2)},"pop",.4);`).join("")}${S("pop_multi", t.ga - 0.1, .5)}
set("#s8-w",{opacity:0},${T[6]});set("#s8-w",{opacity:1},${t.di});
set("#s8-c",{opacity:0},${T[6]});fromTo("#s8-c",{x:0,opacity:1},{x:560,duration:1.1,ease:"power2.inOut"},${t.in - 0.1});${S("whoosh_s", t.in - 0.1, .45)}
pulse("#s8-n1",${t.in + 0.4},1.1,.3);
inn("#s8-lb",${t.tr - 0.1},"slam");${S("impact", t.tr - 0.05, .55)}
` });
}
// S9 — a comissão (recibo, sem porcentagem)
{
  const t = { pe: at("Por exemplo,"), se: at("serviço,"), re: at("reserva"), co: at("compra"), ex: at("existe"), ge: at("gerar"), cm: at("comissão"), op: at("operação.") };
  const R = [["serviço", t.se], ["reserva", t.re], ["compra", t.co]];
  V.scene({ id: "s9", t0: T[7], t1: T[8], in: "zoom", push: 0.03, html: `
    <div class="abs paper" id="s9-r" style="left:190px;top:310px;width:700px;padding:40px 50px">
      <div class="lbl" style="color:${GY};text-align:center">recibo · via assistente</div>
      ${R.map(([n], i) => `<div class="rc" id="s9-l${i}"><span>${n}</span><span>✓</span></div>`).join("")}
      <div style="margin-top:34px"><div class="lbl" style="color:${GY}">valor da operação</div>
        <div style="position:relative;height:70px;border-radius:18px;background:#ebe6dc;margin-top:12px;overflow:hidden"><div id="s9-f" style="position:absolute;left:0;top:0;bottom:0;width:100%;background:${INK};transform-origin:left center"></div><div id="s9-cm" style="position:absolute;right:0;top:0;bottom:0;width:22%;background:${GN}"></div></div></div></div>
    <div class="abs" id="s9-lb" style="left:560px;top:1000px"><div class="sticker" style="font-size:46px;background:${GN};color:#fff">${icon("coins", "#fff", 2.4)}comissão</div></div>
    <div class="abs" id="s9-ar" style="left:820px;top:880px;width:90px;height:110px">${icon("arrow-up", GN, 2.6)}</div>
  `, js: `
inn("#s9-r",${t.pe},"down",.45);${S("whoosh_s", t.pe - 0.05, .4)}
${R.map(([, tt], i) => `inn("#s9-l${i}",${(tt - 0.1).toFixed(2)},"left",.3);${V.sfx("typing", tt - 0.1, 0.4)}`).join("")}
set("#s9-f",{scaleX:0},${T[7]});to("#s9-f",{scaleX:1,duration:.8,ease:"power2.out"},${t.ex});
set("#s9-cm",{opacity:0},${T[7]});fromTo("#s9-cm",{opacity:0,scaleY:.4},{opacity:1,scaleY:1,duration:.35,ease:"back.out(2)"},${t.cm - 0.1});
inn("#s9-lb",${t.cm - 0.05},"slam");inn("#s9-ar",${t.cm + 0.1},"up",.35);${S("impact", t.cm - 0.02, .7)}${S("shimmer", t.cm + 0.1, .5)}
` });
}
// S10 — escala: milhares de pessoas, cada operação = receita
{
  const t = { pe: at("Pensa"), es: at("escala"), mi: at("Milhares"), di: at("diariamente"), tr: at("transações.", 2), ca: at("Cada"), op: at("oportunidade", 1), rc: at("receita.") };
  let seed = 7; const r = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const D = Array.from({ length: 70 }, (_, i) => [80 + r() * 900, 470 + r() * 640, i]);
  V.scene({ id: "s10", t0: T[8], t1: T[9], in: "left", push: 0.04, html: `
    <div class="abs ed" id="s10-h" style="left:70px;top:310px;width:940px;font-size:96px">${words("pensa na")} <span class="wd" style="color:${GN}">escala</span></div>
    ${D.map(([x, y, i]) => `<div class="dot" id="s10-d${i}" style="left:${x.toFixed(0)}px;top:${y.toFixed(0)}px;background:${i % 5 ? INK : CO}"></div>`).join("")}
    <div class="abs" id="s10-c" style="left:440px;top:690px;width:200px;height:200px;border-radius:50%;background:${GN};display:grid;place-items:center;box-shadow:0 0 0 18px rgba(11,138,76,.18),0 0 0 40px rgba(11,138,76,.08)"><div style="font:900 44px Inter;color:#fff">receita</div></div>
  `, js: `
inn("#s10-h .wd",${t.pe},"blur",.45,{stagger:.1});
${D.map(([, , i]) => `inn("#s10-d${i}",${(t.mi - 0.1 + (i % 35) * 0.04).toFixed(2)},"pop",.25);`).join("")}${S("pop_multi", t.mi, .5)}${S("pop_multi", t.mi + 0.6, .4)}
${D.filter(([, , i]) => i % 4 === 0).map(([x, y, i], j) => `fromTo("#s10-d${i}",{x:0,y:0},{x:${(527 - x).toFixed(0)},y:${(777 - y).toFixed(0)},scale:.4,duration:.6,ease:"power2.in",repeat:1,repeatDelay:.6},${(t.tr - 0.2 + j * 0.07).toFixed(2)});`).join("")}${S("whoosh_s", t.tr - 0.2, .4)}
inn("#s10-c",${t.ca - 0.1},"pop",.4);pulse("#s10-c",${t.rc - 0.05},1.15,.4);${S("ding", t.rc, .7)}
` });
}
// S11 — outra vantagem: sem curva de aprendizado
{
  const t = { e: at("E existe"), va: at("vantagem"), np: at("não", 3), pl: at("plataforma"), co: at("conversa", 2), ia: at("artificial.", 2) };
  V.scene({ id: "s11", t0: T[9], t1: T[10], in: "zoom", push: 0.03, html: `
    <div class="abs ed" id="s11-h" style="left:70px;top:310px;width:940px;font-size:90px">${words("outra vantagem:")}</div>
    <div class="abs paper" id="s11-p" style="left:70px;top:460px;width:500px;height:520px;padding:24px">
      <div style="height:44px;border-radius:10px;background:#e3ddd1;margin-bottom:16px"></div>
      <div style="display:flex;gap:14px">${[0, 1].map(() => `<div style="flex:none;width:130px;display:flex;flex-direction:column;gap:12px">${[0, 1, 2, 3, 4, 5].map(() => `<div style="height:30px;border-radius:8px;background:#ebe6dc"></div>`).join("")}</div>`).join("")}<div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:10px">${Array.from({ length: 8 }, () => `<div style="height:70px;border-radius:10px;background:#ebe6dc"></div>`).join("")}</div></div>
      <div class="lbl" style="color:${GY};margin-top:20px">plataforma nova</div>
      <div id="s11-x" style="position:absolute;left:20px;right:20px;top:250px;height:12px;background:${CO};transform:rotate(-20deg)"></div></div>
    <div class="abs" id="s11-c" style="left:610px;top:560px;width:400px">
      <div class="bub wb" style="font-size:40px;box-shadow:0 14px 40px rgba(60,40,10,.15)">é só conversar</div>
      <div style="margin-top:22px;width:110px;height:110px">${icon("circle-check-big", GN, 2.4)}</div></div>
  `, js: `
inn("#s11-h .wd",${t.e},"blur",.45,{stagger:.1});
inn("#s11-p",${t.np - 0.6},"left",.45);${S("whoosh_s", t.np - 0.6, .4)}
set("#s11-x",{scaleX:0},${T[9]});to("#s11-x",{scaleX:1,duration:.35,ease:"power2.inOut"},${t.pl});${S("whoosh_s", t.pl, .4)}to("#s11-p",{opacity:.45,duration:.3},${t.pl + 0.5});
inn("#s11-c",${t.co - 0.15},"pop",.45);${S("ding", t.co, .6)}
` });
}
// S12 — para as empresas: adquirir clientes e facilitar vendas
{
  const t = { pa: at("Para as"), re: at("representar"), ad: at("adquirir"), cl: at("clientes"), fa: at("facilitar"), ve: at("vendas.") };
  V.scene({ id: "s12", t0: T[10], t1: T[11], in: "rise", push: 0.03, html: `
    <div class="abs ed" id="s12-h" style="left:70px;top:310px;width:940px;font-size:96px">${words("pras empresas")}</div>
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s12-f" d="M140 500 H 940 L 680 900 V 1120 H 400 V 900 Z" stroke="${INK}" stroke-width="6" fill="rgba(17,17,17,.04)" stroke-linejoin="round"/></svg>
    <div class="abs" id="s12-a" style="left:260px;top:560px"><div class="sticker" style="font-size:44px;background:${CO};color:#fff">${icon("user-plus", "#fff", 2.4)}adquirir clientes</div></div>
    <div class="abs" id="s12-b" style="left:380px;top:950px"><div class="sticker" style="font-size:44px;background:${GN};color:#fff">${icon("trending-up", "#fff", 2.4)}vendas</div></div>
  `, js: `
inn("#s12-h .wd",${t.pa},"blur",.45,{stagger:.1});
draw("#s12-f",${t.re - 0.2},.7);${S("whoosh_s", t.re - 0.2, .4)}
inn("#s12-a",${t.ad - 0.1},"pop",.4);${S("pop", t.ad - 0.1, .6)}
inn("#s12-b",${t.ve - 0.15},"slam");${S("impact", t.ve - 0.1, .6)}
` });
}
// S13 — não é mais um chatbot: agentes que resolvem e participam de transações
{
  const t = { nf: at("No final,"), op: at("oportunidade", 2), ch: at("chatbot."), co: at("construir"), ag: at("agentes", 2), re: at("resolver"), pr: at("problemas"), pa: at("participar"), tr: at("transações", 1) };
  const trc = V.words.find((w) => w.n === "transacoes" && w.start > t.pa).start;
  V.scene({ id: "s13", t0: T[11], t1: T[12], in: "zoom", push: 0.03, html: `
    <div class="abs" id="s13-k" style="left:70px;top:320px"><div class="lbl" style="color:${GY}">a grande oportunidade</div></div>
    <div class="abs ed" id="s13-c" style="left:70px;top:390px;font-size:112px;white-space:nowrap;color:${GY}">mais um chatbot<div id="s13-x" style="position:absolute;left:-10px;right:-10px;top:52px;height:14px;background:${CO};transform-origin:left center"></div></div>
    <div class="abs ed" id="s13-a" style="left:70px;top:560px;font-size:210px;color:${GN}">AGENTES</div>
    <div class="abs col gap20" style="left:70px;top:820px;width:940px">
      <div class="paper task" id="s13-r1" style="padding:22px 30px;font-size:42px"><div class="ti" style="background:${INK};width:80px;height:80px">${icon("wrench", "#fff", 2.2)}</div>resolvem problemas reais</div>
      <div class="paper task" id="s13-r2" style="padding:22px 30px;font-size:42px"><div class="ti" style="background:${GN};width:80px;height:80px">${icon("arrow-left-right", "#fff", 2.2)}</div>participam de transações</div></div>
  `, js: `
inn("#s13-k",${t.nf},"fade",.3);inn("#s13-c",${t.op - 0.1},"blur",.45);
strike("#s13-x",${t.ch},.35);${S("whoosh_s", t.ch, .45)}to("#s13-c",{opacity:.5,duration:.3},${t.ch + 0.4});
inn("#s13-a",${t.ag - 0.1},"slam");${S("impact", t.ag - 0.05, .85)}
inn("#s13-r1",${t.re - 0.1},"rise",.4);${S("pop", t.re - 0.1, .55)}
inn("#s13-r2",${trc - 0.6},"rise",.4);${S("pop", trc - 0.6, .55)}
` });
}
// S14 — mercado de agentes despertando interesse (curva sem eixos numéricos)
{
  const t = { e: at("E é por"), me: at("mercado", 2), ag: at("agentes", 3), de: at("despertando"), in: at("interesse.") };
  V.scene({ id: "s14", t0: T[12], t1: T[13], in: "left", push: 0.04, html: `
    <div class="abs ed" id="s14-h" style="left:70px;top:310px;width:940px;font-size:90px">${words("o mercado de")} <span class="wd" style="color:${GN}">agentes</span> <span class="wd">de IA</span></div>
    <div class="abs paper" id="s14-p" style="left:70px;top:560px;width:940px;height:560px;padding:40px">
      <div class="lbl" style="color:${GY}">interesse</div>
      <svg viewBox="0 0 860 440" style="width:860px;height:440px"><path d="M0 420 H 860" stroke="rgba(17,17,17,.15)" stroke-width="3"/><path id="s14-c" d="M10 400 C 200 390, 330 360, 450 300 S 700 90, 850 30" stroke="${GN}" stroke-width="10" fill="none" stroke-linecap="round"/></svg></div>
  `, js: `
inn("#s14-h .wd",${t.e},"blur",.45,{stagger:.08});
inn("#s14-p",${t.me - 0.1},"up",.45);
draw("#s14-c",${t.de - 0.1},1.2);${S("riser", t.de - 0.3, .5)}${S("ding", t.in + 0.3, .5)}
` });
}
// S15 — CTA de opinião (sem palavra-chave)
{
  const t = { ag: at("Agora"), vo: at("Você utilizaria"), ut: at("utilizaria"), ta: at("tarefas", 2), di: at("dia?") };
  V.scene({ id: "s15", t0: T[13], t1: V.dur, last: true, in: "zoom", push: 0.03, html: `
    <div class="abs ed tc" id="s15-h" style="left:40px;top:300px;width:1000px;font-size:130px">me <span style="background:${CO};color:#fff;padding:0 .12em;border-radius:.12em">conta!</span></div>
    <div class="abs paper" id="s15-p" style="left:90px;top:520px;width:900px;padding:40px 44px">
      <div style="font:800 50px Inter;line-height:1.2;color:${INK}">Você usaria um assistente de IA pras tarefas do dia a dia?</div>
      <div class="row gap24" style="margin-top:34px">
        <div id="s15-y" style="flex:1;height:120px;border-radius:30px;background:${GN};color:#fff;display:grid;place-items:center;font:900 54px Inter">SIM</div>
        <div id="s15-n" style="flex:1;height:120px;border-radius:30px;background:${INK};color:#fff;display:grid;place-items:center;font:900 54px Inter">NÃO</div></div></div>
    <div class="abs igbox" id="s15-b" style="left:90px;top:960px"><div class="av"><div></div></div><div class="tx" style="font:600 40px Inter;color:#8a8478">comente sua opinião…</div><div class="send">Publicar</div></div>
    <div class="abs" id="s15-dn" style="left:470px;top:1110px;width:120px;height:120px;color:${CO}">${icon("chevrons-down", "currentColor", 2.6)}</div>
  `, js: `
inn("#s15-h",${t.ag - 0.05},"slam");${S("impact", t.ag, .7)}
inn("#s15-p",${t.vo - 0.15},"rise",.45);${S("whoosh_s", t.vo - 0.15, .4)}
inn("#s15-y",${t.ut},"pop",.35);inn("#s15-n",${t.ut + 0.15},"pop",.35);${S("pop_multi", t.ut, .5)}
pulse("#s15-y",${t.ta},1.06,.4);pulse("#s15-n",${t.ta + 0.4},1.06,.4);
inn("#s15-b",${t.di - 0.3},"up",.4);${S("pop", t.di - 0.3, .5)}
inn("#s15-dn",${t.di + 0.4},"drop",.4);fromTo("#s15-dn",{y:0},{y:26,duration:.32,yoyo:true,repeat:3,ease:"sine.inOut",immediateRender:false},${t.di + 0.9});
` });
}
V.write(`${OUT}/projeto`);
