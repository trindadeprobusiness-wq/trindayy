// LOTE 3 · 06 — CLAUDE NO WHATSAPP / KAPSO (Lendário 18:12) · ref guipaulinooo
// Sem logos do Kapso/WhatsApp (não fornecidos): wordmark tipográfico + balão verde genérico. Logo do Claude é real.
// Número de telefone mascarado; conversas e árvore de arquivos marcadas como "exemplo". A voz diz "Capsu": legenda "Kapso".
import fs from "node:fs";
import { Video, icon } from "../lib/build.mjs";
import { KIT2_CSS, ctaHtml2, ctaJs2 } from "../lib/kit2.mjs";
import { KIT3_CSS, L3ROOT, narr, words, iphone } from "../lib/kit3.mjs";

const DIR = "06_WHATSAPP", OUT = `${L3ROOT}/${DIR}`;
const WA = "#25d366", WD = "#128c4a", TC = "#d9774b", INK = "#1b1b1b", PA = "#f6efe8", GY = "#8d8279";
const raw = JSON.parse(fs.readFileSync(narr(DIR), "utf8")), fixes = {};
raw.forEach((w, i) => { if (w.text === "Cloud") fixes[`Cloud@${i}`] = "Claude"; if (w.text === "Capsu,") fixes[`Capsu,@${i}`] = "Kapso,"; });
const V = new Video({
  id: "l3-06", title: "Claude no WhatsApp", kit2: true, theme: "light", capMaxWords: 3, capMaxChars: 18,
  wordsPath: narr(DIR), audioDur: 58.5, fixes,
  accent: WD, capKey: WD, vars: { a1: TC, a2: WA, a3: "#ffd23f", capbg: WA, capfg: "#06260f", ink: INK, paper: PA },
  keywords: ["Cloud", "WhatsApp", "agente", "zero.", "Capsu,", "API", "oficial", "Primeiro,", "Depois,", "habilidades", "descreve", "Tudo.", "consentimento", "24", "horas."],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
V.extraCss = KIT2_CSS + KIT3_CSS + `
#root{background:${PA}} .theme-light .bg-glow.a{background:radial-gradient(circle,rgba(37,211,102,.22),transparent 62%)} .theme-light .bg-glow.b{background:radial-gradient(circle,rgba(217,119,75,.20),transparent 62%)}
.paper{background:#fffdf9;border-radius:30px;box-shadow:0 24px 60px rgba(60,40,10,.14);border:1.5px solid rgba(27,27,27,.07)}
.wab{width:240px;height:240px;border-radius:50%;background:${WA};display:grid;place-items:center;box-shadow:0 26px 70px rgba(37,211,102,.4)}
.wab svg{width:56%;height:56%}
.stepn{position:absolute;font:700 330px "Space Grotesk";letter-spacing:-.06em;line-height:.8;color:${TC}}
.term{position:absolute;border-radius:26px;background:#141414;box-shadow:0 40px 100px rgba(0,0,0,.25);overflow:hidden}
.term .bar{height:58px;display:flex;align-items:center;gap:12px;padding:0 22px;background:#222;font:600 22px "JetBrains Mono";color:#aaa}
.term .body{padding:24px 28px;font:500 29px/1.55 "JetBrains Mono";color:#e6e6e6;white-space:pre-wrap}
.blkc{display:flex;align-items:center;gap:20px;padding:24px 30px;border-radius:24px;background:#fffdf9;border:2px solid rgba(27,27,27,.1);font:700 38px "JetBrains Mono";color:${INK};box-shadow:0 14px 30px rgba(60,40,10,.1)}
.blkc .bi{width:56px;height:56px}
.tp{display:flex;align-items:center;gap:22px;padding:26px 32px;font:800 42px Inter;color:${INK}}
.tp .ti{width:88px;height:88px;border-radius:24px;display:grid;place-items:center}
.tp .ti svg{width:56%;height:56%}
`;
const SW = [at("E o mais"), at("Existe"), at("O processo"), at("Depois,"), at("E agora"), at("O Cloud", 2), at("Mas"), at("Quer", 2)];
SW.forEach((t, i) => V.swipe(t - 0.05, [WA, TC, INK][i % 3]));
const T = SW.map((t) => t - 0.08);
const waPhone = (id, x, y, sc, inner) => iphone({ id, x, y, scale: sc, bg: "#efe7de", screen: `<div style="position:absolute;left:0;right:0;top:0;height:170px;background:#075e54;display:flex;align-items:flex-end;gap:14px;padding:0 24px 22px"><div style="width:56px;height:56px;border-radius:50%;background:${WA};display:grid;place-items:center"><div style="width:56%;height:56%">${icon("bot", "#fff", 2.2)}</div></div><div style="font:800 28px Inter;color:#fff">agente<div style="font:500 20px Inter;opacity:.8">online</div></div></div><div style="position:absolute;left:20px;right:20px;top:200px;display:flex;flex-direction:column;gap:16px">${inner}</div>` });

// S1 — gancho: Claude ⟶ WhatsApp
{
  const t = { co: at("conectar"), cl: at("Cloud"), wa: at("WhatsApp"), ag: at("agente"), ia: at("inteligência") };
  V.scene({ id: "s1", t0: 0, t1: T[0], in: "none", push: 0.045, html: `
    <div class="abs center-x tc" id="s1-h" style="top:310px;width:1040px"><div class="kw" style="font-size:96px;color:${INK}">${words("o Claude no seu")}</div><div class="kw" style="font-size:150px;color:${WD}">${words("WhatsApp")}</div></div>
    <div class="abs" id="s1-c" style="left:110px;top:680px;width:240px;height:240px;border-radius:64px;background:#fff;display:grid;place-items:center;box-shadow:0 26px 70px rgba(60,40,10,.16)"><img src="assets/logos/claude-icon.svg" style="width:60%;height:60%"/></div>
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s1-l" d="M360 800 C 480 720, 600 880, 720 800" stroke="${INK}" stroke-width="8" stroke-dasharray="18 14" fill="none" stroke-linecap="round"/></svg>
    <div class="abs wab" id="s1-w" style="left:730px;top:680px">${icon("message-circle", "#fff", 2)}</div>
    <div class="abs" id="s1-on" style="left:900px;top:690px;width:56px;height:56px;border-radius:50%;background:#fff;display:grid;place-items:center;box-shadow:0 6px 16px rgba(0,0,0,.15)"><div style="width:30px;height:30px;border-radius:50%;background:${WA}"></div></div>
    <div class="abs" id="s1-ag" style="left:620px;top:960px"><div class="sticker" style="font-size:36px;background:${INK};color:#fff">${icon("bot", WA, 2.4)}seu agente de IA</div></div>
  `, js: `
inn("#s1-h .wd",0.02,"blur",.5,{stagger:.08});${S("whoosh_s", 0.02, .45)}
inn("#s1-c",0.3,"pop",.45);
draw("#s1-l",${t.co - 0.1},.7);${S("whoosh_s", t.co - 0.1, .4)}
inn("#s1-w",${t.wa - 0.12},"pop",.45);${S("pop", t.wa - 0.1, .75)}
inn("#s1-on",${t.ag - 0.1},"pop",.3);pulse("#s1-on",${t.ag + 0.3},1.3,.4);
inn("#s1-ag",${t.ag},"up",.4);${S("ding", t.ag, .5)}
` });
}
// S2 — sem desenvolver a integração do zero
{
  const t = { e: at("E o mais"), np: at("não"), de: at("desenvolver"), in: at("integração"), ze: at("zero.") };
  const B = [["webhook", "webhook"], ["autenticação", "key-round"], ["envio de mensagens", "send"], ["filas e erros", "triangle-alert"]];
  V.scene({ id: "s2", t0: T[0], t1: T[1], in: "cut", push: 0.03, html: `
    <div class="abs" id="s2-h" style="left:70px;top:310px"><div class="kw" style="font-size:90px;color:${INK}">${words("sem programar")}</div><div class="kw" style="font-size:90px;color:${TC}">${words("tudo do zero")}</div></div>
    <div class="abs col gap16" id="s2-st" style="left:70px;top:560px;width:940px">${B.map(([n, ic], i) => `<div class="blkc" id="s2-b${i}"><div class="bi">${icon(ic, TC, 2.2)}</div>${n}</div>`).join("")}
      <div id="s2-x" style="position:absolute;left:-20px;right:-20px;top:240px;height:14px;background:${TC};transform:rotate(-14deg)"></div></div>
  `, js: `
inn("#s2-h .wd",${t.e},"blur",.45,{stagger:.08});
${B.map((_, i) => `inn("#s2-b${i}",${(t.de - 0.1 + i * 0.15).toFixed(2)},"left",.35);`).join("")}${S("pop_multi", t.de, .5)}
set("#s2-x",{scaleX:0},${T[0]});to("#s2-x",{scaleX:1,duration:.3,ease:"power2.inOut"},${t.ze - 0.1});${S("whoosh_s", t.ze - 0.1, .5)}
to("#s2-st .blkc",{opacity:.4,duration:.3},${t.ze + 0.2});
` });
}
// S3 — Kapso: ponte para a API oficial do WhatsApp
{
  const t = { ex: at("Existe"), ka: at("Capsu,"), fa: at("facilita"), co: at("conexão"), api: at("API"), of: at("oficial") };
  V.scene({ id: "s3", t0: T[1], t1: T[2], in: "zoom", push: 0.035, html: `
    <div class="abs center-x tc" id="s3-h" style="top:310px;width:1040px"><div class="kw" style="font-size:84px;color:${INK}">${words("uma ferramenta chamada")}</div></div>
    <div class="abs center-x tc" id="s3-k" style="top:420px;width:1040px"><div class="kw" style="font-size:210px;color:${INK}">Kapso</div></div>
    <div class="abs" id="s3-c" style="left:90px;top:760px;width:200px;height:200px;border-radius:54px;background:#fff;display:grid;place-items:center;box-shadow:0 20px 50px rgba(60,40,10,.14)"><img src="assets/logos/claude-icon.svg" style="width:60%;height:60%"/></div>
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s3-br" d="M300 860 C 420 700, 660 700, 780 860" stroke="${TC}" stroke-width="12" fill="none" stroke-linecap="round"/><path id="s3-dk" d="M300 870 H 780" stroke="${INK}" stroke-width="6" stroke-dasharray="4 18" fill="none" stroke-linecap="round"/></svg>
    <div class="abs wab" id="s3-w" style="left:790px;top:760px;width:200px;height:200px">${icon("message-circle", "#fff", 2)}</div>
    <div class="abs" id="s3-api" style="left:330px;top:1010px"><div class="sticker" style="font-size:40px;background:${WA};color:#06260f">${icon("badge-check", "#06260f", 2.4)}API oficial</div></div>
  `, js: `
inn("#s3-h .wd",${t.ex},"blur",.45,{stagger:.08});
inn("#s3-c",${t.ex + 0.2},"left",.4);inn("#s3-w",${t.ex + 0.3},"right",.4);
inn("#s3-k",${t.ka - 0.1},"slam");${S("impact", t.ka - 0.05, .75)}
draw("#s3-br",${t.fa - 0.1},.7);draw("#s3-dk",${t.co - 0.1},.5);${S("whoosh_s", t.fa - 0.1, .45)}
inn("#s3-api",${t.api - 0.1},"pop",.4);${S("confirm", t.of, .6)}
` });
}
// S4 — passo 1: conta + número conectado (mascarado)
{
  const t = { pr: at("processo"), p1: at("Primeiro,"), cr: at("cria"), ct: at("conta"), cn: at("conecta"), nu: at("número"), wa: at("WhatsApp.", 3) };
  V.scene({ id: "s4", t0: T[2], t1: T[3], in: "left", push: 0.03, html: `
    <div class="abs" id="s4-k" style="left:70px;top:320px"><div class="lbl" style="color:${GY}">como funciona</div></div>
    <div class="stepn" id="s4-n" style="left:60px;top:370px">1</div>
    <div class="abs" id="s4-t" style="left:330px;top:420px;width:700px;font:800 54px Inter;line-height:1.15;color:${INK}">crie a conta e conecte um número</div>
    <div class="abs paper" id="s4-c" style="left:70px;top:720px;width:940px;padding:34px 40px">
      <div class="lbl" style="color:${GY}">números conectados</div>
      <div class="row" style="margin-top:24px;gap:24px"><div style="width:84px;height:84px;border-radius:50%;background:${WA};display:grid;place-items:center"><div style="width:54%;height:54%">${icon("phone", "#fff", 2.2)}</div></div>
        <div style="font:700 46px 'JetBrains Mono';color:${INK}">+55 •• •••••-••••</div></div>
      <div class="row" style="margin-top:26px;gap:16px"><div id="s4-p" class="chipx" style="background:#f1e7dc;color:${GY};font-size:30px">${icon("loader", GY, 2.4)}conectando…</div>
        <div id="s4-ok" class="chipx" style="background:${WA};color:#06260f;font-size:30px">${icon("check", "#06260f", 3)}conectado</div></div></div>
    <div class="exm" id="s4-ex" style="left:820px;top:690px;color:${GY}">exemplo</div>
  `, js: `
inn("#s4-k",${t.pr},"fade",.3);
fromTo("#s4-n",{scale:2,opacity:0},{scale:1,opacity:1,duration:.4,ease:"back.out(1.6)"},${t.p1 - 0.1});${S("impact", t.p1 - 0.05, .7)}
inn("#s4-t",${t.p1 + 0.15},"blur",.45);
inn("#s4-c",${t.ct - 0.1},"rise",.45);inn("#s4-ex",${t.ct + 0.2},"fade",.3);
inn("#s4-p",${t.cn},"pop",.3);${S("click", t.cn, .6)}
set("#s4-ok",{opacity:0},${T[2]});to("#s4-p",{opacity:0,duration:.15},${t.wa - 0.1});inn("#s4-ok",${t.wa - 0.05},"pop",.35);${S("ding", t.wa, .7)}
` });
}
// S5 — passo 2: habilidades no Claude Code
{
  const t = { de: at("Depois,"), ad: at("adiciona"), ha: at("habilidades"), cc: at("Cloud", 2) };
  V.scene({ id: "s5", t0: T[3], t1: T[4], in: "zoom", push: 0.03, html: `
    <div class="stepn" id="s5-n" style="left:60px;top:300px">2</div>
    <div class="abs" id="s5-t" style="left:330px;top:350px;width:700px;font:800 54px Inter;line-height:1.15;color:${INK}">adicione as habilidades ao Claude Code</div>
    <div class="term" id="s5-tm" style="left:70px;top:640px;width:940px;height:330px"><div class="bar"><img src="assets/logos/claude-icon.svg" style="width:30px;height:30px"/>Claude Code<span style="margin-left:auto;font-size:18px;color:#777">exemplo</span></div>
      <div class="body"><span style="color:${WA}">✓</span> <span id="s5-l" data-text="habilidades do WhatsApp adicionadas"></span>
<span id="s5-l2" style="color:#9a9a9a">pronto para construir o seu agente</span></div></div>
  `, js: `
fromTo("#s5-n",{scale:2,opacity:0},{scale:1,opacity:1,duration:.4,ease:"back.out(1.6)"},${t.de - 0.1});${S("impact", t.de - 0.05, .7)}
inn("#s5-t",${t.de + 0.15},"blur",.45);
inn("#s5-tm",${t.ad - 0.1},"rise",.45);
type("#s5-l",${t.ha - 0.05},.9);${S("typing", t.ha - 0.05, .5)}
set("#s5-l2",{opacity:0},${T[3]});inn("#s5-l2",${t.cc},"fade",.3);${S("confirm", t.cc, .5)}
` });
}
// S6 — passo 3: descreva o que quer construir
{
  const t = { ea: at("E agora"), me: at("melhor"), si: at("simplesmente"), ds: at("descreve"), co: at("construir."), at: at("atendimento,"), pe: at("perguntas"), ag: at("agendamentos.") };
  const K = [["agente de atendimento", "headset", WA, t.at], ["responde perguntas", "message-circle-question", TC, t.pe], ["organiza agendamentos", "calendar-check", INK, t.ag]];
  V.scene({ id: "s6", t0: T[4], t1: T[5], in: "rise", push: 0.03, html: `
    <div class="stepn" id="s6-n" style="left:60px;top:300px">3</div>
    <div class="abs" id="s6-t" style="left:330px;top:350px;width:700px;font:800 54px Inter;line-height:1.15;color:${INK}">descreva o que quer construir</div>
    <div class="abs paper" id="s6-p" style="left:70px;top:620px;width:940px;padding:26px 32px;font:600 36px Inter;color:${INK}"><span style="color:${GY}">›</span> <span id="s6-ty" data-text="quero um agente que atende meus clientes no WhatsApp"></span></div>
    <div class="abs col gap16" style="left:70px;top:790px;width:940px">${K.map(([n, ic, c], i) => `<div class="paper tp" id="s6-k${i}"><div class="ti" style="background:${c}">${icon(ic, "#fff", 2.2)}</div>${n}</div>`).join("")}</div>
  `, js: `
fromTo("#s6-n",{scale:2,opacity:0},{scale:1,opacity:1,duration:.4,ease:"back.out(1.6)"},${t.ea - 0.05});${S("impact", t.ea, .7)}
inn("#s6-t",${t.me - 0.1},"blur",.45);
inn("#s6-p",${t.si - 0.1},"up",.4);type("#s6-ty",${t.ds - 0.05},1.3);${S("typing", t.ds - 0.05, .5)}
${K.map(([, , , tt], i) => `inn("#s6-k${i}",${(tt - 0.3).toFixed(2)},"rise",.4);${V.sfx("pop", tt - 0.3, 0.6)}`).join("\n")}
` });
}
// S7 — o Claude Code monta a estrutura e os fluxos → conversa de exemplo
{
  const t = { o: at("O Cloud", 2), aj: at("ajuda"), es: at("estrutura"), ap: at("aplicação"), fl: at("fluxos"), cn: at("conectar."), tu: at("Tudo.") };
  const tree = [`<b style="color:${WD}">meu-agente/</b>`, `├ webhook`, `├ fluxos/`, `│  ├ atendimento`, `│  └ agendamento`, `└ config`];
  V.scene({ id: "s7", t0: T[5], t1: T[6], in: "left", push: 0.04, html: `
    <div class="abs" id="s7-h" style="left:70px;top:310px"><div class="kw" style="font-size:80px;color:${INK}">${words("o Claude Code")}</div><div class="kw" style="font-size:80px;color:${WD}">${words("monta tudo")}</div></div>
    <div class="abs paper" id="s7-tr" style="left:50px;top:540px;width:470px;padding:26px 30px;font:500 30px/1.6 'JetBrains Mono';color:${INK}">${tree.map((l, i) => `<div id="s7-r${i}">${l}</div>`).join("")}</div>
    ${waPhone("s7-ph", 560, 460, 0.74, `<div id="s7-m1" class="bub wa" style="font-size:26px;align-self:flex-end">Tem horário sexta?</div><div id="s7-m2" class="bub wb" style="font-size:26px;align-self:flex-start">Tenho às 10h ou às 15h 🙂</div><div id="s7-m3" class="bub wa" style="font-size:26px;align-self:flex-end">15h!</div><div id="s7-m4" class="bub wb" style="font-size:26px;align-self:flex-start">Confirmado ✓</div>`)}
    <div class="exm" id="s7-ex" style="left:50px;top:1060px;color:${GY}">exemplo ilustrativo</div>
  `, js: `
inn("#s7-h .wd",${t.o},"blur",.45,{stagger:.08});
inn("#s7-tr",${t.es - 0.2},"left",.4);
${[0, 1, 2, 3, 4, 5].map((i) => `inn("#s7-r${i}",${(t.es + i * 0.15).toFixed(2)},"left",.25);`).join("")}${S("pop_multi", t.es, .45)}
inn("#s7-ph",${t.fl - 0.2},"bscale",.45);inn("#s7-ex",${t.fl},"fade",.3);
${[1, 2, 3, 4].map((i) => `set("#s7-m${i}",{opacity:0},${T[5]});inn("#s7-m${i}",${(t.fl + 0.1 + (i - 1) * 0.55).toFixed(2)},"pop",.3);${V.sfx("pop", t.fl + 0.1 + (i - 1) * 0.55, 0.45)}`).join("")}
punch("#s7-ph",${t.tu},.06);${S("ding", t.tu, .7)}
` });
}
// S8 — regras oficiais: consentimento + janela de 24 horas
{
  const t = { ma: at("Mas"), im: at("importante"), re: at("regras"), cs: at("consentimento"), ja: at("janela"), at: at("atendimento", 2), n24: at("24"), ho: at("horas.") };
  V.scene({ id: "s8", t0: T[6], t1: T[7], in: "zoom", push: 0.03, html: `
    <div class="abs" id="s8-h" style="left:70px;top:310px"><div class="kw" style="font-size:86px;color:${INK}">${words("respeite as")} <span class="wd" style="color:${TC}">regras</span></div></div>
    <div class="abs paper" id="s8-c" style="left:70px;top:470px;width:940px;padding:34px 40px">
      <div class="lbl" style="color:${GY}">regras oficiais do WhatsApp</div>
      <div class="row" style="margin-top:24px;gap:22px;font:800 44px Inter;color:${INK}"><div id="s8-k" style="width:70px;height:70px">${icon("circle-check-big", WD, 2.6)}</div>consentimento dos contatos</div>
      <div class="row" style="margin-top:30px;gap:30px;align-items:center">
        <div style="position:relative;width:240px;height:240px;border-radius:50%;border:10px solid ${INK};background:#fff">
          <div id="s8-hd" style="position:absolute;left:115px;top:20px;width:10px;height:100px;border-radius:5px;background:${TC};transform-origin:5px 100px"></div>
          <div style="position:absolute;left:105px;top:105px;width:30px;height:30px;border-radius:50%;background:${INK}"></div></div>
        <div><div class="lbl" style="color:${GY}">janela de atendimento</div><div id="s8-24" style="font:700 150px 'Space Grotesk';letter-spacing:-.05em;color:${INK};line-height:1">24h</div></div></div></div>
  `, js: `
inn("#s8-h .wd",${t.ma},"blur",.45,{stagger:.08});
inn("#s8-c",${t.im - 0.1},"rise",.45);${S("whoosh_s", t.im - 0.1, .4)}
set("#s8-k",{opacity:0},${T[6]});inn("#s8-k",${t.cs - 0.05},"pop",.35);${S("confirm", t.cs, .6)}
fromTo("#s8-hd",{rotation:0},{rotation:360,duration:${(t.ho - t.ja + 0.2).toFixed(2)},ease:"power1.inOut"},${t.ja});${S("tick_roll", t.ja, .5)}
set("#s8-24",{opacity:0},${T[6]});inn("#s8-24",${t.n24 - 0.08},"slam");${S("impact", t.n24 - 0.05, .7)}
` });
}
// S9 — CTA WHATSAPP
{
  const t = { q: at("Quer", 2), co: at("Comenta"), w: at("WhatsApp", 5), seg: at("material.") };
  V.scene({ id: "s9", t0: T[7], t1: V.dur, last: true, in: "zoom", push: 0.03,
    html: ctaHtml2("s9", { pre: `quer <span class="hlbox">aprender?</span>`, word: "WHATSAPP", color: WD, follow: false }),
    js: ctaJs2(V, "s9", { q: t.q, co: t.co, word: t.w, seg: t.seg, follow: false }) });
}
V.write(`${OUT}/projeto`);
