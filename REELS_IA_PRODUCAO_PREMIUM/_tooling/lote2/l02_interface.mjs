// LOTE 2 · 02 — INTERFACE (Lucas 23:59) · ref 323dd4ca (Reverse Engineer Anything)
import { Video, icon, logo, esc } from "../lib/build.mjs";
import { KIT2_CSS, ctaHtml2, ctaJs2, P2, L2ROOT, TR } from "../lib/kit2.mjs";

const OUT = `${L2ROOT}/02_INTERFACE`;
const V = new Video({
  id: "l02", title: "Interface com Referência", kit2: true, theme: "light", capMaxWords: 3, capMaxChars: 18,
  wordsPath: `${TR}/2026-10-15T23_59_53_Lucas_-_Engaging_Captivating_and_Kind.json`, audioDur: 48.9, // 47.31 s de narração + 1.6 s de respiro no CTA (narração intacta)
  accent: "#2f7bff", capKey: "#2f7bff", vars: { a1: "#2f7bff", a2: "#ff6a3d", a3: "#ffd23f", capbg: "#2f7bff", capfg: "#fff" },
  fixes: {},
  keywords: ["interfaces", "referências", "visuais", "código.", "celular", "testes", "funcionar,", "bonita."],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
const BL = "#2f7bff", OR = "#ff6a3d", YE = "#ffd23f", GR = "#16a34a", RD = "#ef4444", INK = "#0f1115";
V.extraCss = KIT2_CSS + `
.pbox{border-radius:28px;background:#fff;border:2px solid rgba(15,17,21,.1);box-shadow:0 24px 60px rgba(60,40,10,.16);padding:26px 30px}
.pbox .pt{font:600 34px Inter;line-height:1.35;color:#0f1115;min-height:46px}
.wf{border-radius:22px;background:#fff;border:2px solid rgba(15,17,21,.1);box-shadow:0 24px 60px rgba(60,40,10,.16);overflow:hidden;position:relative}
.wf i{position:absolute;display:block;border-radius:10px;background:#e7e2d8}
.bbox{position:absolute;border:4px solid #2f7bff;border-radius:10px;background:rgba(47,123,255,.08)}
.bbox b{position:absolute;left:-4px;top:-38px;font:800 20px "JetBrains Mono";background:#2f7bff;color:#fff;padding:4px 10px;border-radius:8px;white-space:nowrap}
.code{border-radius:24px;background:#0f1115;padding:22px 28px;font:500 26px "JetBrains Mono";line-height:1.6;color:#e6edf3;box-shadow:0 30px 70px rgba(0,0,0,.3);white-space:pre}
.code .t{color:#7ee787}.code .a{color:#79c0ff}.code .s{color:#ffa657}
.slider{height:16px;border-radius:8px;background:#e7e2d8;position:relative}
.slider .k{position:absolute;top:-14px;width:44px;height:44px;border-radius:50%;background:#2f7bff;box-shadow:0 6px 14px rgba(0,0,0,.25)}
.venn{position:absolute;width:420px;height:420px;border-radius:50%;display:grid;place-items:center;font:900 38px Inter;color:#fff;mix-blend-mode:multiply}
.phone{width:300px;height:600px;border-radius:46px;border:12px solid #0f1115;background:#fff;overflow:hidden;position:relative;box-shadow:0 30px 70px rgba(0,0,0,.3)}
`;
[at("Existe"), at("você pode usar"), at("A inteligência"), at("Depois,"), at("Mas"), at("Ela"), at("É essa"), at("Quer")].forEach((t, i) => V.swipe(t - 0.05, [BL, YE, OR, BL, YE, OR, BL, YE][i]));

// S1 HOOK — prompt vago → resultado genérico
{
  const t = { cr: at("criando"), in: at("interfaces"), se: at("sem"), mo: at("mostrar"), ex: at("exatamente"), re: at("resultado"), de: at("deseja?") };
  V.scene({ id: "s1", t0: 0, t1: 5.85, in: "none", push: 0.04, html: `
    <div class="abs pbox" id="s1-p" style="left:70px;top:160px;width:940px">
      <div class="row gap12" style="margin-bottom:10px"><div class="ic" style="width:36px;height:36px">${icon("message-square-text", BL, 2.2)}</div><div class="mono" style="font-size:22px;color:#6b6457">você → IA</div></div>
      <div class="pt" id="s1-tx" data-text="“faz um site bonito, moderno, clean, com um hero legal…”"></div>
    </div>
    <div class="abs wf" id="s1-wf" style="left:170px;top:470px;width:740px;height:560px">
      <i style="left:30px;top:30px;width:200px;height:34px"></i><i style="left:520px;top:30px;width:190px;height:34px"></i>
      <i style="left:30px;top:110px;width:680px;height:200px;background:linear-gradient(135deg,#c4b5fd,#93c5fd)"></i>
      <i style="left:30px;top:340px;width:210px;height:180px"></i><i style="left:265px;top:340px;width:210px;height:180px"></i><i style="left:500px;top:340px;width:210px;height:180px"></i>
    </div>
    <div class="abs" id="s1-q" style="left:760px;top:420px"><div class="sticker red" style="font-size:120px;padding:10px 40px;transform:rotate(10deg)">?</div></div>
    <div class="abs" id="s1-g" style="left:120px;top:980px"><div class="sticker dark" style="font-size:34px;transform:rotate(-4deg)">resultado genérico</div></div>
  `, js: `
fromTo("#s1-p",{y:-40,scale:1.05},{y:0,scale:1,duration:.5,ease:E.o},0);
type("#s1-tx",0.05,${(t.se - 0.2).toFixed(2)});${S("typing", 0.05, .45)}
inn("#s1-wf",${t.in},"rise",.55);${S("whoosh_s", t.in, .5)}
inn("#s1-q",${t.mo},"slam");${S("impact", t.mo, .7)}
shake("#s1-wf",${t.ex});
inn("#s1-g",${t.re},"pop",.4);${S("alert", t.de, .5)}
` });
}
// S2 — maneira mais prática; em vez de explicar cada detalhe
{
  const t = { ex: at("Existe"), pr: at("prática"), em: at("Em"), xp: at("explicar"), de: at("detalhe"), pg: at("página,") };
  V.scene({ id: "s2", t0: 5.85, t1: 11.4, in: "zoom", push: 0.04, html: `
    <div class="abs center-x tc" id="s2-h" style="top:190px;width:1040px"><div class="kw" style="font-size:110px">um jeito <span class="hlbox">muito mais</span><br/>prático</div></div>
    <div class="abs" id="s2-z" style="left:760px;top:330px"><div class="sticker" style="font-size:46px;transform:rotate(8deg)">${icon("zap", INK, 2.6)}</div></div>
    <div class="abs pbox" id="s2-long" style="left:110px;top:600px;width:860px;padding:30px">
      <div style="font:600 27px Inter;line-height:1.5;color:#6b6457">“o header tem 80px, logo à esquerda, menu com 5 itens, botão azul arredondado, hero com título de 64px, subtítulo cinza, imagem à direita, três cards abaixo com sombra suave…”</div>
      <div id="s2-x" style="position:absolute;left:20px;right:20px;top:50%;height:12px;margin-top:-6px;background:${RD};border-radius:6px"></div>
    </div>
  `, js: `
inn("#s2-h",${t.ex},"up",.45);
inn("#s2-z",${t.pr - 0.1},"pop",.4);${S("pop", t.pr - 0.1, .65)}
inn("#s2-long",${t.em},"rise",.5);${S("whoosh_s", t.em, .45)}
strike("#s2-x",${t.de},.45);${S("glitch", t.de, .55)}
to("#s2-long",{opacity:.45,scale:.95,duration:.4},${t.pg});
` });
}
// S3 — referências visuais orientam a construção
{
  const t = { vo: at("você pode usar"), re: at("referências"), vi: at("visuais"), or: at("orientar"), co: at("construção"), pj: at("projeto.") };
  V.scene({ id: "s3", t0: 11.35, t1: 15.7, in: "left", push: 0.04, html: `
    <div class="abs" id="s3-st" style="left:70px;top:160px"><div class="sticker blue" style="font-size:56px;transform:rotate(-3deg)">${icon("image", "#fff", 2.6)}REFERÊNCIA VISUAL</div></div>
    <div class="abs chip" id="s3-link" style="left:70px;top:310px;font-size:28px">${icon("link", BL)}cola o link ou o print da página</div>
    <div class="abs shot" id="s3-ref" style="left:90px;top:410px;width:900px;height:522px;border-color:#fff"><img src="${P2("taste-coffee-storefront.jpg")}"/></div>
    <div class="abs" id="s3-ok" style="left:700px;top:880px"><div class="sticker green" style="font-size:36px;transform:rotate(4deg)">${icon("check", "#fff", 3)}a IA vê o que você quer</div></div>
  `, js: `
inn("#s3-st",${t.re - 0.1},"slam");${S("impact", t.re - 0.1, .6)}
inn("#s3-link",${t.vi},"left",.4);${S("click", t.vi, .6)}
fromTo("#s3-ref",{opacity:0,y:200,rotation:-6,scale:.9},{opacity:1,y:0,rotation:-2,scale:1,duration:.65,ease:E.back},${t.or - 0.2});${S("drop", t.or - 0.2, .55)}
inn("#s3-ok",${t.co},"pop",.4);${S("confirm", t.pj, .5)}
` });
}
// S4 — analisa estrutura, identifica elementos, transforma em código
{
  const t = { a: at("A inteligência"), an: at("analisa"), es: at("estrutura,"), id: at("identifica"), el: at("elementos"), tr: at("transformar"), cd: at("código.") };
  const boxes = [["header", 10, 8, 880, 70], ["hero", 10, 90, 600, 300], ["imagem", 620, 90, 270, 300], ["botão", 40, 330, 220, 54]];
  V.scene({ id: "s4", t0: 15.65, t1: 23.0, in: "rise", push: 0.03, html: `
    <div class="abs shot" id="s4-ref" style="left:90px;top:170px;width:900px;height:460px;border-color:#fff"><img src="${P2("taste-coffee-storefront.jpg")}" style="object-position:top"/>
      <div class="abs" id="s4-scan" style="left:0;right:0;top:0;height:90px;background:linear-gradient(180deg,rgba(47,123,255,0),rgba(47,123,255,.35));border-bottom:4px solid #2f7bff"></div>
      ${boxes.map(([n, x, y, w, h], i) => `<div class="bbox" id="s4-b${i}" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px"><b>${n}</b></div>`).join("")}
    </div>
    <div class="abs" id="s4-ar" style="left:500px;top:650px;width:80px;height:80px">${icon("arrow-down", BL, 3)}</div>
    <div class="abs code" id="s4-code" style="left:90px;top:750px;width:900px"><span class="t">&lt;header&gt;</span> logo · menu <span class="t">&lt;/header&gt;</span>
<span class="t">&lt;section</span> <span class="a">class</span>=<span class="s">"hero"</span><span class="t">&gt;</span>
  <span class="t">&lt;h1&gt;</span>Twenty seats…<span class="t">&lt;/h1&gt;</span>
  <span class="t">&lt;button&gt;</span>Get directions<span class="t">&lt;/button&gt;</span>
<span class="t">&lt;/section&gt;</span></div>
  `, js: `
inn("#s4-ref",${t.a},"rise",.5);
fromTo("#s4-scan",{y:-90},{y:460,duration:1.0,ease:"power1.inOut"},${t.an - 0.1});${S("scan", t.an - 0.1, .7)}
${boxes.map((_, i) => `inn("#s4-b${i}",${(t.id + i * 0.18).toFixed(2)},"pop",.35);`).join("")}${S("pop_multi", t.id, .6)}
inn("#s4-ar",${t.tr - 0.15},"down",.35);
fromTo("#s4-code",{opacity:0,clipPath:"inset(0 0 100% 0)"},{opacity:1,clipPath:"inset(0 0 0% 0)",duration:.9,ease:"power2.out"},${t.tr});${S("typing", t.tr, .5)}
pulse("#s4-code",${t.cd},1.04,.4);${S("confirm", t.cd, .5)}
` });
}
// S5 — refinar: componentes, aparência, comportamento
{
  const t = { d: at("Depois,"), re: at("refinando"), co: at("componentes,"), ap: at("aparência"), cp: at("comportamento.") };
  V.scene({ id: "s5", t0: 22.95, t1: 28.7, in: "left", push: 0.03, html: `
    <div class="abs center-x tc" id="s5-h" style="top:170px;width:1040px"><div class="kw" style="font-size:96px">refina <span class="hlbox">até ficar certo</span></div></div>
    <div class="abs center-x" id="s5-btn" style="top:430px;width:460px;height:130px;border-radius:14px;background:#c9c2b4;display:grid;place-items:center;font:800 40px Inter;color:#fff">Comprar agora</div>
    <div class="abs card col gap24" id="s5-pan" style="left:150px;top:660px;width:780px;padding:36px 40px">
      ${[["componentes", "layout-grid", t.co], ["aparência", "palette", t.ap], ["comportamento", "mouse-pointer-click", t.cp]].map(([l, ic], i) => `<div class="row gap20" id="s5-r${i}"><div class="ic" style="width:44px;height:44px">${icon(ic, BL, 2.2)}</div><div style="font:800 32px Inter;width:250px">${l}</div><div class="slider" style="flex:1"><div class="k" id="s5-k${i}" style="left:0"></div></div></div>`).join("")}
    </div>
  `, js: `
inn("#s5-h",${t.d},"up",.45);
inn("#s5-btn",${t.re - 0.2},"pop",.4);
inn("#s5-pan",${t.re},"rise",.5);
fromTo("#s5-k0",{x:0},{x:360,duration:.5,ease:E.o},${t.co});to("#s5-btn",{borderRadius:"65px",width:520,duration:.5,ease:E.back},${t.co});${S("click", t.co, .7)}
fromTo("#s5-k1",{x:0},{x:300,duration:.5,ease:E.o},${t.ap});to("#s5-btn",{backgroundColor:"${BL}",boxShadow:"0 20px 40px rgba(47,123,255,.4)",duration:.5},${t.ap});${S("click", t.ap, .7)}
fromTo("#s5-k2",{x:0},{x:400,duration:.5,ease:E.o},${t.cp});fromTo("#s5-btn",{scale:1},{scale:1.08,duration:.18,yoyo:true,repeat:3,ease:E.soft,immediateRender:false},${t.cp + 0.1});${S("pop", t.cp + 0.1, .6)}
` });
}
// S6 — bonito não basta
{
  const t = { m: at("Mas"), de: at("o detalhe"), im: at("importante."), nb: at("Não"), ge: at("gerar"), bo: at("bonita.") };
  V.scene({ id: "s6", t0: 28.65, t1: 33.1, in: "zoom", push: 0.05, html: `
    <div class="abs center-x tc" id="s6-w" style="top:150px;width:1000px"><div class="sticker orange" style="font-size:44px;transform:rotate(-3deg)">${icon("triangle-alert", "#fff", 2.6)}DETALHE IMPORTANTE</div></div>
    <div class="abs center-x tc" id="s6-h1" style="top:290px;width:1040px"><div class="kw" style="font-size:150px">BONITA</div></div>
    <div class="abs center-x tc" id="s6-h2" style="top:440px;width:1040px"><div class="kw" style="font-size:150px;color:${RD}">≠ PRONTA</div></div>
    <div class="abs shot" id="s6-pg" style="left:150px;top:660px;width:780px;height:455px;border-color:#fff"><img src="${P2("taste-night-dates.jpg")}"/></div>
    <div class="abs" id="s6-bug" style="left:640px;top:1040px"><div class="sticker red" style="font-size:38px;transform:rotate(6deg)">${icon("bug", "#fff", 2.6)}não funciona</div></div>
  `, js: `
inn("#s6-pg",${t.m},"rise",.5);
inn("#s6-w",${t.de - 0.05},"pop",.4);${S("alert", t.de, .55)}
to("#s6-w",{opacity:0,y:-30,duration:.3},${t.nb - 0.2});
inn("#s6-h1",${t.nb - 0.05},"slam");${S("impact", t.nb, .65)}
inn("#s6-h2",${t.bo - 0.1},"slam");${S("impact", t.bo - 0.1, .75)}
inn("#s6-bug",${t.bo + 0.1},"pop",.4);${S("glitch", t.bo + 0.1, .5)}
shake("#s6-pg",${t.bo + 0.15});
` });
}
// S7 — funcionar, celular, experiência
{
  const t = { el: at("Ela"), fu: at("funcionar,"), ad: at("adaptar"), ce: at("celular"), bo: at("boa"), ex: at("experiência") };
  const items = [["funciona", "circle-check-big", t.fu], ["adapta ao celular", "smartphone", t.ce], ["boa experiência", "heart", t.ex]];
  V.scene({ id: "s7", t0: 33.05, t1: 38.9, in: "left", push: 0.03, html: `
    <div class="abs" id="s7-ph" style="left:650px;top:240px"><div class="phone" style="width:340px;height:690px"><img src="${P2("taste-night-dates.jpg")}" style="width:100%;height:100%;object-fit:cover;object-position:0 0"/></div></div>
    <div class="abs col gap24" style="left:60px;top:400px;width:560px">
      ${items.map(([l, ic], i) => `<div class="card row gap20" id="s7-i${i}" style="padding:26px 28px"><div class="ic" style="width:60px;height:60px">${icon(ic, GR, 2.4)}</div><div style="font:900 36px Inter;letter-spacing:-.02em">${l}</div></div>`).join("")}
    </div>
  `, js: `
fromTo("#s7-ph",{opacity:0,scale:2.2,y:200},{opacity:1,scale:1,y:0,duration:.7,ease:E.o4},${t.ad - 0.1});${S("whoosh", t.ad - 0.1, .55)}
${items.map(([, , tt], i) => `inn("#s7-i${i}",${(tt - 0.1).toFixed(2)},"left",.4);${V.sfx("confirm", tt, 0.5)}`).join("\n")}
` });
}
// S8 — referência + implementação + testes
{
  const t = { e: at("É essa"), cb: at("combinação"), rf: at("referência,"), im: at("implementação"), te: at("testes"), di: at("diferença.") };
  V.scene({ id: "s8", t0: 38.85, t1: 43.4, in: "zoom", push: 0.04, html: `
    <div class="abs center-x tc" id="s8-h" style="top:170px;width:1040px"><div class="kw" style="font-size:84px">a combinação que <span class="hlbox">faz diferença</span></div></div>
    <div class="abs" style="left:0;top:380px;width:1080px;height:760px">
      <div class="venn" id="s8-a" style="left:120px;top:20px;background:${BL}">referência</div>
      <div class="venn" id="s8-b" style="left:540px;top:20px;background:${OR}">implementação</div>
      <div class="venn" id="s8-c" style="left:330px;top:330px;background:${YE};color:#111">testes</div>
    </div>
    <div class="abs burst" id="s8-burst" style="left:540px;top:700px"></div>
  `, js: `
inn("#s8-h",${t.e},"up",.45);
fromTo("#s8-a",{x:-300,opacity:0},{x:0,opacity:1,duration:.5,ease:E.back},${t.rf - 0.1});${S("pop", t.rf, .6)}
fromTo("#s8-b",{x:300,opacity:0},{x:0,opacity:1,duration:.5,ease:E.back},${t.im - 0.1});${S("pop", t.im, .6)}
fromTo("#s8-c",{y:300,opacity:0},{y:0,opacity:1,duration:.5,ease:E.back},${t.te - 0.1});${S("pop", t.te, .6)}
burst("#s8-burst",${t.di},24);${S("impact", t.di, .6)}
` });
}
// S9 — CTA INTERFACE
{
  const t = { q: at("Quer"), co: at("Comenta"), w: at("interface", 2), seg: at("embaixo.") };
  V.scene({ id: "s9", t0: 43.35, t1: V.dur, last: true, in: "zoom", push: 0.03,
    html: ctaHtml2("s9", { pre: `quer esse <span class="hlbox">fluxo?</span>`, word: "INTERFACE", color: BL, follow: false }),
    js: ctaJs2(V, "s9", { q: t.q, co: t.co, word: t.w, seg: t.seg, follow: false }) });
}
V.write(`${OUT}/projeto`);
