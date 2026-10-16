// LOTE 2 · 05 — DESIGN (Mário 00:04) · ref 83e8eb2c (Taste / Impeccable / Playwright CLI / Awesome DESIGN.md)
// Imagens reais: exemplos do Taste Skill (examples/v2) e banner do repositório; tokens reais de design-md/linear.app/DESIGN.md;
// paleta "identidade visual" extraída por k-means da própria imagem taste-night-dates.jpg.
import { Video, icon, logo } from "../lib/build.mjs";
import { KIT2_CSS, ctaHtml2, ctaJs2, P2, L2ROOT, TR } from "../lib/kit2.mjs";

const OUT = `${L2ROOT}/05_DESIGN`;
const CO = "#ff6b4a", LI = "#b4f461", YE = "#ffd23f", CY = "#90e9ee", INK = "#0f1115";
const V = new Video({
  id: "l05", title: "Design com Referências", kit2: true, theme: "dark", capMaxWords: 3, capMaxChars: 18,
  wordsPath: `${TR}/2026-10-16T00_04_29_M_rio_-_Excited_Constant_and_Cheerful.json`, audioDur: 62.7, // 61.96 s narração + respiro
  accent: CO, capKey: LI, vars: { a1: CO, a2: LI, a3: YE, capbg: CO, capfg: "#fff" },
  fixes: { "Atender": "entender" }, // ASR ouviu "Atender"; a narração diz "entender"
  keywords: ["profissional?", "desafios", "código", "visual", "referências", "tipografia,", "espaçamentos", "identidade", "bonito.", "facilidade.", "refinamento"],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
const PAL = ["#90e9ee", "#7cc5c9", "#5a9093", "#396062", "#1c3132", "#030606"]; // k-means real da imagem
V.extraCss = KIT2_CSS + `
.wf{border-radius:24px;background:#f4f2fb;overflow:hidden;position:relative;box-shadow:0 40px 90px rgba(0,0,0,.45)}
.wf i{position:absolute;display:block;border-radius:12px;background:#dedaf0}
.code{border-radius:26px;background:#0b0d12;border:2px solid rgba(255,255,255,.1);padding:28px 32px;font:500 30px "JetBrains Mono";line-height:1.6;color:#e6edf3;white-space:pre;box-shadow:0 30px 70px rgba(0,0,0,.4)}
.code .t{color:#7ee787}.code .a{color:#79c0ff}.code .s{color:#ffa657}
.neq{font:700 220px "Space Grotesk";color:${CO};line-height:1;text-shadow:0 0 40px rgba(255,107,74,.5)}
.tool{display:flex;align-items:center;gap:22px;padding:24px 30px;border-radius:28px;background:rgba(255,255,255,.06);border:2px solid rgba(255,255,255,.14);font:900 44px Inter;letter-spacing:-.02em}
.tool .ti{width:84px;height:84px;border-radius:24px;display:grid;place-items:center;flex:none}
.tool .ti svg{width:58%;height:58%}
.tool .ts{font:600 24px "JetBrains Mono";opacity:.6;margin-top:4px;letter-spacing:0}
.bbox{position:absolute;border:4px solid ${LI};border-radius:10px;background:rgba(180,244,97,.08)}
.bbox b{position:absolute;left:-4px;top:-40px;font:800 22px "JetBrains Mono";background:${LI};color:#111;padding:4px 10px;border-radius:8px;white-space:nowrap}
.sw{width:130px;height:130px;border-radius:28px;border:3px solid rgba(255,255,255,.25);box-shadow:0 14px 30px rgba(0,0,0,.35)}
.swl{font:700 22px "JetBrains Mono";text-align:center;margin-top:10px;opacity:.85}
.dmd{border-radius:26px;background:#0b0d12;border:2px solid rgba(255,255,255,.12);padding:26px 30px;font:500 26px "JetBrains Mono";line-height:1.55;color:#d0d6e0;white-space:pre}
.dmd .k{color:#828fff}.dmd .v{color:#f7f8f8}.dmd .c{color:#62666d}
.phone{width:380px;height:760px;border-radius:56px;border:14px solid #1d1f26;background:#000;overflow:hidden;position:relative;box-shadow:0 40px 90px rgba(0,0,0,.5)}
.ing{width:270px;height:270px;border-radius:44px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;font:900 34px Inter;color:#111;text-align:center;line-height:1.05}
.ing .ii{width:100px;height:100px}
`;
[at("Esse é"), at("Porque"), at("E existem"), at("Você pode"), at("Depois,"), at("E não"), at("Uma boa"), at("O segredo"), at("Quer")].forEach((t, i) => V.swipe(t - 0.05, [CO, LI, YE][i % 3]));

// S1 HOOK — funciona… mas parece profissional?
{
  const t = { si: at("site"), fu: at("funcionar."), m: at("Mas"), re: at("realmente"), pa: at("parece"), pr: at("profissional?") };
  V.scene({ id: "s1", t0: 0, t1: 6.65, in: "none", push: 0.04, html: `
    <div class="abs wf" id="s1-wf" style="left:110px;top:430px;width:860px;height:620px">
      <i style="left:34px;top:30px;width:150px;height:34px"></i><i style="left:520px;top:30px;width:90px;height:34px"></i><i style="left:630px;top:30px;width:90px;height:34px"></i><i style="left:740px;top:32px;width:90px;height:30px;background:#7c3aed"></i>
      <i style="left:34px;top:100px;width:792px;height:240px;background:linear-gradient(120deg,#7c3aed,#c084fc 55%,#60a5fa)"></i>
      <i style="left:300px;top:190px;width:260px;height:30px;background:rgba(255,255,255,.75)"></i><i style="left:340px;top:240px;width:180px;height:44px;background:#fff;border-radius:22px"></i>
      <i style="left:34px;top:370px;width:244px;height:220px"></i><i style="left:308px;top:370px;width:244px;height:220px"></i><i style="left:582px;top:370px;width:244px;height:220px"></i>
      ${[0, 1, 2].map((k) => `<i style="left:${130 + k * 274}px;top:400px;width:56px;height:56px;border-radius:50%;background:#c4b5fd"></i>`).join("")}
    </div>
    <div class="abs" id="s1-ok" style="left:90px;top:380px"><div class="sticker green" style="font-size:44px;transform:rotate(-4deg)">${icon("check", "#fff", 3)}funciona</div></div>
    <div class="abs center-x tc" id="s1-h" style="top:160px;width:1040px"><div class="kw" style="font-size:96px">mas parece</div><div class="kw" style="font-size:124px;color:${CO}">PROFISSIONAL?</div></div>
    <div class="abs" id="s1-gen" style="left:600px;top:990px"><div class="sticker" style="font-size:40px;background:#9ca3af;color:#fff;transform:rotate(5deg)">cara de “feito por IA”</div></div>
  `, js: `
fromTo("#s1-wf",{opacity:0,y:160,scale:.92},{opacity:1,y:0,scale:1,duration:.6,ease:E.o4},0);${S("whoosh", 0.02, .5)}
inn("#s1-ok",${t.fu - 0.15},"slam");${S("confirm", t.fu - 0.1, .6)}
inn("#s1-h",${t.m},"slam");${S("impact", t.m, .7)}
to("#s1-ok",{opacity:.35,scale:.85,duration:.3},${t.re});
inn("#s1-gen",${t.pa},"pop",.4);${S("glitch", t.pa, .5)}
shake("#s1-wf",${t.pr});${S("alert", t.pr + 0.1, .55)}
` });
}
// S2 — um dos maiores desafios de quem usa IA pra criar interfaces
{
  const t = { e: at("Esse é"), ma: at("maiores"), de: at("desafios"), ia: at("inteligência"), dv: at("desenvolver"), in: at("interfaces.") };
  V.scene({ id: "s2", t0: 6.65, t1: 13.2, in: "zoom", push: 0.04, html: `
    <div class="abs center-x tc" id="s2-h" style="top:190px;width:1040px"><div class="kw" style="font-size:88px">um dos maiores</div><div class="kw" style="font-size:150px;color:${LI}">DESAFIOS</div></div>
    <div class="abs row" id="s2-flow" style="left:80px;top:640px;width:920px;justify-content:space-between;align-items:center">
      <div class="col" id="s2-a" style="align-items:center;gap:14px"><div style="width:220px;height:220px;border-radius:56px;background:${CO};display:grid;place-items:center"><div style="width:56%;height:56%">${icon("sparkles", "#fff", 2)}</div></div><div class="h3" style="font-size:40px">IA</div></div>
      <div id="s2-ar" style="width:150px;height:150px">${icon("arrow-right", YE, 2.6)}</div>
      <div class="col" id="s2-b" style="align-items:center;gap:14px"><div style="width:220px;height:220px;border-radius:56px;background:#1d2230;border:3px solid rgba(255,255,255,.2);display:grid;place-items:center"><div style="width:56%;height:56%">${icon("layout-template", CY, 2)}</div></div><div class="h3" style="font-size:40px">interface</div></div>
    </div>
  `, js: `
inn("#s2-h",${t.ma - 0.1},"up",.45);pulse("#s2-h",${t.de},1.06,.35);${S("impact", t.de, .65)}
inn("#s2-a",${t.ia - 0.1},"pop",.4);${S("pop", t.ia - 0.1, .6)}
inn("#s2-ar",${t.dv - 0.1},"left",.35);${S("whoosh_s", t.dv - 0.1, .45)}
inn("#s2-b",${t.in - 0.1},"pop",.4);${S("pop", t.in - 0.1, .6)}
` });
}
// S3 — gerar código ≠ criar experiência visual
{
  const t = { p: at("Porque"), ge: at("gerar"), co: at("código"), cr: at("Criar"), ex: at("experiência"), vi: at("visual"), ou: at("outra"), cm: at("completamente"), di: at("diferente.") };
  V.scene({ id: "s3", t0: 13.2, t1: 20.75, in: "left", push: 0.03, html: `
    <div class="abs" id="s3-l1" style="left:70px;top:150px"><div class="sticker" style="font-size:40px;background:${LI};color:#111">${icon("code-2", "#111", 2.6)}gerar código</div></div>
    <div class="abs code" id="s3-code" style="left:70px;top:250px;width:940px"><span id="s3-tx" data-text="<section class=&quot;hero&quot;>
  <h1>Monday is roast day</h1>
  <p>The door stays shut…</p>
</section>"></span></div>
    <div class="abs center-x tc neq" id="s3-neq" style="top:470px;width:300px">≠</div>
    <div class="abs" id="s3-l2" style="left:70px;top:700px"><div class="sticker orange" style="font-size:40px">${icon("eye", "#fff", 2.6)}experiência visual</div></div>
    <div class="abs shot" id="s3-pg" style="left:70px;top:800px;width:940px;height:400px;border-color:rgba(255,255,255,.7)"><img src="${P2("taste-coffee-roast.jpg")}" style="object-position:top"/></div>
  `, js: `
inn("#s3-l1",${t.ge - 0.1},"pop",.35);
inn("#s3-code",${t.co - 0.1},"rise",.45);type("#s3-tx",${t.co},.9);${S("typing", t.co, .55)}
inn("#s3-l2",${t.cr - 0.1},"pop",.35);
inn("#s3-pg",${t.ex - 0.1},"rise",.55);${S("whoosh", t.ex - 0.1, .5)}
fromTo("#s3-pg img",{scale:1.2},{scale:1,duration:2.5,ease:"power2.out"},${t.ex});
inn("#s3-neq",${t.cm - 0.1},"slam");${S("impact", t.cm, .75)}
pulse("#s3-neq",${t.di},1.15,.35);
` });
}
// S4 — referências de design para melhorar o processo (ferramentas reais)
{
  const t = { e: at("E existem"), fo: at("formas"), ut: at("utilizar"), re: at("referências"), de: at("design."), me: at("melhorar"), pr: at("processo.") };
  const tools = [["Taste Skill", "anti-slop frontend framework", "palette", CO, t.fo], ["Awesome DESIGN.md", "84 sites como referência", "book-open", LI, t.re], ["Impeccable", "itera o design ao vivo no navegador", "wand-sparkles", YE, t.de]];
  V.scene({ id: "s4", t0: 20.75, t1: 25.5, in: "zoom", push: 0.03, html: `
    <div class="abs shot" id="s4-ban" style="left:70px;top:170px;width:940px;height:279px;border-color:rgba(255,255,255,.8)"><img src="${P2("taste-banner.png")}"/></div>
    <div class="abs col gap20" style="left:70px;top:500px;width:940px">
      ${tools.map(([n, s, ic, c], i) => `<div class="tool" id="s4-t${i}"><div class="ti" style="background:${c}">${icon(ic, "#111", 2.2)}</div><div><div>${n}</div><div class="ts">${s}</div></div></div>`).join("")}
    </div>
    <div class="abs center-x tc" id="s4-up" style="top:1070px;width:800px"><div class="sticker green" style="font-size:42px">${icon("trending-up", "#fff", 2.6)}processo melhor</div></div>
  `, js: `
fromTo("#s4-ban",{opacity:0,y:-60,scale:1.05},{opacity:1,y:0,scale:1,duration:.55,ease:E.o4},${t.e});${S("whoosh_s", t.e, .45)}
${tools.map(([, , , , tt], i) => `inn("#s4-t${i}",${(tt - 0.1).toFixed(2)},"left",.4);${V.sfx("pop", tt - 0.1, 0.65)}`).join("\n")}
inn("#s4-up",${t.me},"up",.4);${S("confirm", t.pr, .5)}
` });
}
// S5 — partir de exemplos reais: organização, tipografia, espaçamentos, identidade visual
{
  const t = { vo: at("Você pode"), ex: at("exemplos"), rea: at("reais"), pg: at("páginas,"), an: at("analisar"), org: at("organização"), el: at("elementos,"), ti: at("tipografia,"), es: at("espaçamentos"), id: at("identidade"), vi: at("visual", 2) };
  const boxes = [["nav", 16, 12, 908, 50], ["título", 20, 92, 320, 210], ["destaques", 610, 70, 310, 470], ["cards", 20, 330, 560, 210]];
  V.scene({ id: "s5", t0: 25.5, t1: 34.35, in: "left", push: 0.03, html: `
    <div class="abs" id="s5-st" style="left:70px;top:150px"><div class="sticker" style="font-size:40px;background:#fff;color:#111">${icon("globe", "#111", 2.6)}página real como referência</div></div>
    <div class="abs shot" id="s5-ref" style="left:70px;top:250px;width:940px;height:545px;border-color:rgba(255,255,255,.7)"><img src="${P2("taste-night-dates.jpg")}"/>
      ${boxes.map(([n, x, y, w, h], i) => `<div class="bbox" id="s5-b${i}" style="left:${x}px;top:${y}px;width:${w}px;height:${h}px"><b>${n}</b></div>`).join("")}
      <div class="abs" id="s5-ty" style="left:28px;top:100px;padding:8px 18px;border-radius:12px;background:${YE};color:#111;font:900 40px 'Space Grotesk'">Aa</div>
      ${[0, 1, 2].map((k) => `<div class="abs" id="s5-sp${k}" style="left:${352 + k * 0}px;top:${110 + k * 70}px;width:250px;height:0;border-top:5px dashed ${CO}"></div>`).join("")}
    </div>
    <div class="abs row" id="s5-pal" style="left:70px;top:850px;width:940px;justify-content:space-between">
      ${PAL.map((c, i) => `<div id="s5-c${i}"><div class="sw" style="background:${c}"></div><div class="swl">${c}</div></div>`).join("")}
    </div>
    <div class="abs" id="s5-pl" style="left:70px;top:1080px"><div class="kicker" style="font-size:24px">paleta extraída da própria página</div></div>
  `, js: `
inn("#s5-st",${t.ex - 0.1},"pop",.35);
fromTo("#s5-ref",{opacity:0,y:150,rotation:-3},{opacity:1,y:0,rotation:0,duration:.6,ease:E.back},${t.rea - 0.1});${S("drop", t.rea - 0.1, .55)}
fromTo("#s5-ref img",{scale:1.15},{scale:1,duration:3,ease:"power2.out"},${t.rea});
${boxes.map((_, i) => `inn("#s5-b${i}",${(t.org + i * 0.15).toFixed(2)},"pop",.3);`).join("")}${S("pop_multi", t.org, .55)}${S("scan", t.an, .45)}
to("#s5-ref .bbox",{opacity:.25,duration:.3},${t.ti - 0.2});
inn("#s5-ty",${t.ti - 0.05},"slam");${S("impact", t.ti, .55)}
${[0, 1, 2].map((k) => `fromTo("#s5-sp${k}",{scaleX:0,opacity:0,transformOrigin:"0 50%"},{scaleX:1,opacity:1,duration:.4,ease:E.o},${(t.es + k * 0.12).toFixed(2)});`).join("")}${S("tick_roll", t.es, .45)}
${PAL.map((_, i) => `inn("#s5-c${i}",${(t.id + i * 0.09).toFixed(2)},"drop",.4);`).join("")}${S("pop_multi", t.id, .6)}
inn("#s5-pl",${t.vi},"fade",.4);
` });
}
// S6 — usar as referências para orientar uma interface própria (tokens reais de linear.app/DESIGN.md)
{
  const t = { d: at("Depois,"), ut: at("utilizar", 2), re: at("referências", 2), or: at("orientar"), cr: at("criação"), in: at("interface"), pr: at("própria.") };
  V.scene({ id: "s6", t0: 34.35, t1: 39.35, in: "zoom", push: 0.03, html: `
    <div class="abs" id="s6-f" style="left:70px;top:150px"><div class="sticker dark" style="font-size:32px;border:2px solid rgba(255,255,255,.2)">${icon("file-text", "#fff", 2.4)}design-md/linear.app/DESIGN.md</div></div>
    <div class="abs dmd" id="s6-md" style="left:70px;top:240px;width:940px"><span class="k">colors:</span>
  <span class="k">primary:</span> <span class="v">"#5e6ad2"</span>   <span class="k">canvas:</span> <span class="v">"#010102"</span>
<span class="k">typography:</span>
  <span class="k">display-xl:</span> <span class="v">80px · 600 · -3.0px</span>
<span class="k">spacing:</span> <span class="v">4 8 12 16 24 32 48 96</span>
<span class="k">rounded:</span>  <span class="v">4 6 8 12 16 24 pill</span></div>
    <div class="abs" id="s6-ar" style="left:500px;top:610px;width:80px;height:80px">${icon("arrow-down", YE, 3)}</div>
    <div class="abs" id="s6-ui" style="left:70px;top:710px;width:940px;height:440px;border-radius:24px;background:#010102;border:2px solid #23252a;overflow:hidden;box-shadow:0 40px 90px rgba(0,0,0,.5)">
      <div class="abs" style="left:48px;top:40px;width:120px;height:24px;border-radius:6px;background:#141516"></div>
      <div class="abs" style="right:48px;top:34px;padding:10px 26px;border-radius:9999px;background:#5e6ad2;color:#fff;font:600 24px Inter">Começar</div>
      <div class="abs" id="s6-dt" style="left:48px;top:120px;font:600 80px Inter;letter-spacing:-3px;line-height:1.05;color:#f7f8f8">Sua interface,<br/>seu jeito.</div>
      <div class="abs row gap16" style="left:48px;top:330px">${[0, 1, 2].map(() => `<div style="width:270px;height:80px;border-radius:12px;background:#0f1011;border:1px solid #23252a"></div>`).join("")}</div>
    </div>
    <div class="abs" id="s6-own" style="left:640px;top:1090px"><div class="sticker" style="font-size:40px;background:${CO};color:#fff;transform:rotate(-4deg)">${icon("sparkles", "#fff", 2.6)}interface própria</div></div>
  `, js: `
inn("#s6-f",${t.d - 0.05},"pop",.35);
inn("#s6-md",${t.ut - 0.1},"rise",.5);${S("whoosh_s", t.ut - 0.1, .45)}
glow("#s6-md",${t.or},"rgba(130,143,255,.45)");
inn("#s6-ar",${t.or + 0.1},"down",.35);
fromTo("#s6-ui",{opacity:0,clipPath:"inset(0 0 100% 0)"},{opacity:1,clipPath:"inset(0 0 0% 0)",duration:.8,ease:"power2.out"},${t.cr - 0.1});${S("scan", t.cr - 0.1, .5)}
inn("#s6-own",${t.pr - 0.1},"slam");${S("impact", t.pr - 0.1, .6)}
` });
}
// S7 — não é só deixar bonito
{
  const t = { e: at("E não"), fa: at("falando"), ap: at("apenas"), de: at("deixar"), bo: at("bonito.") };
  V.scene({ id: "s7", t0: 39.35, t1: 42.8, in: "rise", push: 0.04, html: `
    <div class="abs center-x tc" id="s7-a" style="top:330px;width:1040px"><div class="kw" style="font-size:110px">não é só</div></div>
    <div class="abs center-x tc" id="s7-b" style="top:480px;width:1040px;position:absolute"><div class="kw" style="font-size:200px;color:${YE}">BONITO</div></div>
    <div class="abs" id="s7-x" style="left:130px;top:580px;width:820px;height:24px;border-radius:12px;background:${CO}"></div>
    <div class="abs" id="s7-sp" style="left:840px;top:430px;width:120px;height:120px">${icon("sparkles", YE, 2.2)}</div>
  `, js: `
inn("#s7-a",${t.e},"up",.4);
inn("#s7-b",${t.de - 0.1},"slam");${S("shimmer", t.de, .55)}inn("#s7-sp",${t.de + 0.1},"pop",.35);
strike("#s7-x",${t.bo + 0.15},.35);${S("glitch", t.bo + 0.15, .55)}
` });
}
// S8 — ajuda a entender o produto e navegar com facilidade
{
  const t = { u: at("Uma boa"), ap: at("apresentação"), aj: at("ajuda"), pe: at("pessoas"), at_: at("Atender"), pr: at("produto"), na: at("navegar"), fa: at("facilidade.") };
  V.scene({ id: "s8", t0: 42.8, t1: 49.4, in: "left", push: 0.03, html: `
    <div class="abs" id="s8-ph" style="left:70px;top:190px;width:940px;border-radius:24px;overflow:hidden;background:#1d1f26;box-shadow:0 40px 90px rgba(0,0,0,.5);border:2px solid rgba(255,255,255,.15)">
      <div class="row gap12" style="height:52px;padding:0 22px;align-items:center">${["#ff5f57", "#febc2e", "#28c840"].map((c) => `<i style="display:block;width:16px;height:16px;border-radius:50%;background:${c}"></i>`).join("")}<div style="margin-left:18px;flex:1;height:30px;border-radius:15px;background:#2a2d36"></div></div>
      <div style="height:545px;position:relative"><img src="${P2("taste-coffee-storefront.jpg")}" style="width:100%;height:100%;object-fit:cover;display:block"/>
        <div class="abs" id="s8-ring" style="right:10px;top:4px;width:150px;height:150px;border-radius:24px;border:5px solid ${LI};box-shadow:0 0 30px ${LI}"></div></div>
    </div>
    <div class="abs" id="s8-cur" style="left:420px;top:560px;width:96px;height:96px;filter:drop-shadow(0 6px 10px rgba(0,0,0,.6))">${icon("mouse-pointer-2", "#111", 2).replace('fill="none"', 'fill="#fff"')}</div>
    <div class="abs col gap24" style="left:70px;top:860px;width:940px">
      <div class="tool" id="s8-i0"><div class="ti" style="background:${YE}">${icon("lightbulb", "#111", 2.2)}</div>entende o produto</div>
      <div class="tool" id="s8-i1"><div class="ti" style="background:${LI}">${icon("compass", "#111", 2.2)}</div>navega com facilidade</div>
    </div>
  `, js: `
fromTo("#s8-ph",{opacity:0,y:200,rotation:6},{opacity:1,y:0,rotation:0,duration:.6,ease:E.back},${t.u});${S("whoosh", t.u, .5)}
inn("#s8-cur",${t.aj},"pop",.35);
inn("#s8-i0",${t.at_ - 0.1},"left",.4);${S("pop", t.at_ - 0.1, .65)}
fromTo("#s8-cur",{x:0,y:0},{x:440,y:-300,duration:.7,ease:E.io},${t.na - 0.4});inn("#s8-ring",${t.na + 0.3},"pop",.3);${S("click", t.na + 0.3, .7)}
inn("#s8-i1",${t.na - 0.05},"left",.4);
pulse("#s8-i1",${t.fa},1.06,.35);${S("confirm", t.fa, .55)}
` });
}
// S9 — o segredo: desenvolvimento + referências + refinamento visual
{
  const t = { o: at("O segredo"), se: at("segredo"), cb: at("combinar"), dv: at("desenvolvimento,"), rf: at("referências", 3), ql: at("qualidade"), rv: at("refinamento"), vi: at("visual", 4) };
  const ing = [["desenvol-<br/>vimento", "code-2", LI, t.dv], ["referências<br/>de qualidade", "image", CY, t.rf], ["refinamento<br/>visual", "wand-sparkles", YE, t.rv]];
  V.scene({ id: "s9", t0: 49.4, t1: 54.9, in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc" id="s9-h" style="top:170px;width:1040px"><div class="kw" style="font-size:110px">o <span class="hlbox">segredo</span></div></div>
    ${ing.map(([n, ic, c], i) => `<div class="abs ing" id="s9-i${i}" style="left:${55 + i * 345}px;top:420px;background:${c}"><div class="ii">${icon(ic, "#111", 2)}</div><div>${n}</div></div>`).join("")}
    ${[0, 1].map((i) => `<div class="abs" id="s9-p${i}" style="left:${320 + i * 345}px;top:520px;width:70px;height:70px">${icon("plus", "#fff", 3.4)}</div>`).join("")}
    <div class="abs center-x tc" id="s9-eq" style="top:790px;width:900px"><div class="sticker" style="font-size:56px;background:${CO};color:#fff">${icon("badge-check", "#fff", 2.6)}cara de profissional</div></div>
    <div class="abs burst" id="s9-burst" style="left:540px;top:840px;width:0;height:0"></div>
  `, js: `
inn("#s9-h",${t.o},"up",.4);${S("riser", t.o, .45)}
${ing.map(([, , , tt], i) => `inn("#s9-i${i}",${(tt - 0.1).toFixed(2)},"drop",.45);${V.sfx("pop", tt - 0.1, 0.7)}`).join("\n")}
inn("#s9-p0",${t.rf - 0.25},"pop",.3);inn("#s9-p1",${t.rv - 0.25},"pop",.3);
inn("#s9-eq",${t.vi},"slam");${S("impact", t.vi, .75)}burst("#s9-burst",${t.vi + 0.05},28);
` });
}
// S10 — CTA DESIGN
{
  const t = { q: at("Quer"), co: at("Comenta"), w: at("design", 2), seg: at("segue") };
  V.scene({ id: "s10", t0: 54.9, t1: V.dur, last: true, in: "zoom", push: 0.03,
    html: ctaHtml2("s10", { pre: `quer esse <span class="hlbox">processo?</span>`, word: "DESIGN", color: CO, sub: "Taste · DESIGN.md · Impeccable · Playwright CLI" }),
    js: ctaJs2(V, "s10", { q: t.q, co: t.co, word: t.w, seg: t.seg, sub: t.seg + 0.7 }) });
}
V.write(`${OUT}/projeto`);
