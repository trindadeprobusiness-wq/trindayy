// LOTE 2 · 08 — DESIGN GRÁTIS (Lendário 00:08) · ref cc2d1924
// Logos reais tirados dos próprios repositórios (penpot/penpot, KDE/krita, GNOME/gimp, blender/blender, excalidraw/excalidraw).
// Sem estrelas/números inventados; a comparação "grátis × profissional" é ilustrativa e não cita ferramenta específica.
import { Video, icon, logo } from "../lib/build.mjs";
import { KIT2_CSS, ctaHtml2, ctaJs2, L2ROOT, TR } from "../lib/kit2.mjs";

const OUT = `${L2ROOT}/08_DESIGN_GRATIS`;
const MG = "#e11d74", TE = "#0891b2", YE = "#facc15", GR = "#16a34a", RD = "#ef4444", INK = "#0f1115";
const V = new Video({
  id: "l08", title: "Design Grátis Open Source", kit2: true, theme: "light", capMaxWords: 3, capMaxChars: 18,
  wordsPath: `${TR}/2026-10-16T00_08_37_Lend_rio_-_Cheerful_Vibrant_and_Fun.json`, audioDur: 65.2, // 64.37 s narração + respiro
  accent: MG, capKey: MG, vars: { a1: MG, a2: TE, a3: YE, capbg: MG, capfg: "#fff" },
  fixes: {},
  keywords: ["caro", "gratuitos", "aberto", "GitHub.", "alternativas", "comerciais.", "instalação", "gratuito", "profissional.", "funcionalidades", "compatibilidade", "limitações.", "necessidades."],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
const OSS = [["Penpot", "oss-penpot.svg", "design de interface"], ["Krita", "oss-krita.svg", "pintura digital"], ["GIMP", "oss-gimp.svg", "edição de imagem"], ["Blender", "oss-blender.svg", "3D e animação"], ["Excalidraw", "oss-excalidraw.svg", "diagramas e esboços"]];
V.extraCss = KIT2_CSS + `
.lg{width:150px;height:150px;border-radius:40px;background:#fff;display:grid;place-items:center;box-shadow:0 18px 40px rgba(60,40,10,.18);border:2px solid rgba(15,17,21,.06)}
.lg img{width:70%;height:70%;object-fit:contain}
.rcp{border-radius:22px 22px 0 0;background:#fff;box-shadow:0 30px 70px rgba(60,40,10,.22);padding:34px 40px;font:700 34px "JetBrains Mono";color:#3b3833}
.rcp .ln{display:flex;justify-content:space-between;padding:14px 0;border-bottom:3px dashed rgba(15,17,21,.12)}
.rcp .pr{color:${RD};font-weight:900}
.alt{display:flex;align-items:center;gap:22px;padding:18px 24px;border-radius:28px;background:#fffdf9;border:2px solid rgba(15,17,21,.08);box-shadow:0 14px 30px rgba(60,40,10,.12)}
.alt .lg{width:104px;height:104px;border-radius:28px;box-shadow:none;border:2px solid rgba(15,17,21,.08)}
.alt .an{font:900 44px Inter;letter-spacing:-.02em;line-height:1}
.alt .ad{font:700 26px "JetBrains Mono";color:#6b6457;margin-top:6px}
.slot{height:120px;border-radius:24px;display:flex;align-items:center;justify-content:center;gap:14px;font:800 32px Inter}
.chk{display:flex;align-items:center;gap:22px;padding:28px 32px;border-radius:28px;background:#fffdf9;border:3px solid rgba(15,17,21,.08);box-shadow:0 16px 36px rgba(60,40,10,.12);font:900 46px Inter;letter-spacing:-.02em}
.chk .ci{width:76px;height:76px;flex:none}
.ring{position:absolute;width:520px;height:520px;border-radius:50%}
`;
[at("Existe"), at("E alguns"), at("A proposta"), at("E o mais"), at("Mas"), at("Por isso,"), at("Dependendo"), at("E isso"), at("Quer")].forEach((t, i) => V.swipe(t - 0.05, [MG, TE, YE][i % 3]));

// S1 HOOK — ainda acha que precisa pagar caro?
{
  const t = { ac: at("acha"), pa: at("pagar"), ca: at("caro"), qu: at("qualquer"), fe: at("ferramenta"), de: at("design?") };
  const lines = [["design", "$$$"], ["vídeo", "$$$"], ["fontes", "$$$"], ["imagens", "$$$"]];
  V.scene({ id: "s1", t0: 0, t1: 4.5, in: "none", push: 0.04, html: `
    <div class="abs center-x tc" id="s1-h" style="top:170px;width:1040px"><div class="kw" style="font-size:110px">pagar</div><div class="kw" style="font-size:190px;color:${RD}">CARO?</div></div>
    <div class="abs rcp" id="s1-rc" style="left:190px;top:560px;width:700px">
      <div style="font:900 30px Inter;letter-spacing:.2em;color:#9a948a;margin-bottom:10px">ASSINATURAS / MÊS</div>
      ${lines.map(([n, p], i) => `<div class="ln" id="s1-l${i}"><span>${n}</span><span class="pr">${p}</span></div>`).join("")}
    </div>
    <div class="abs" id="s1-q" style="left:760px;top:500px"><div class="sticker" style="font-size:96px;padding:4px 32px;background:${MG};color:#fff;transform:rotate(10deg)">?</div></div>
  `, js: `
inn("#s1-h",0,"slam",.42);${S("impact", 0.02, .75)}
fromTo("#s1-rc",{opacity:0,clipPath:"inset(0 0 100% 0)"},{opacity:1,clipPath:"inset(0 0 0% 0)",duration:.5,ease:E.o},0.2);
${lines.map((_, i) => `inn("#s1-l${i}",${(t.pa + i * 0.22).toFixed(2)},"left",.3);`).join("")}${S("typing", t.pa, .5)}${S("counter", t.ca, .45)}
shake("#s1-rc",${t.fe});
inn("#s1-q",${t.de - 0.1},"slam");${S("alert", t.de, .55)}
` });
}
// S2 — universo de projetos gratuitos e de código aberto
{
  const t = { ex: at("Existe"), un: at("universo"), pj: at("projetos"), gr: at("gratuitos"), co: at("código"), ab: at("aberto"), mu: at("muita"), cn: at("conhece.") };
  const R = 330, cx = 540, cy = 760;
  V.scene({ id: "s2", t0: 4.5, t1: 10.45, in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc" id="s2-h" style="top:170px;width:1040px"><div class="kw" style="font-size:96px">um <span class="hlbox">universo</span></div></div>
    <svg class="wires" viewBox="0 0 1080 1920"><circle id="s2-orb" cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="rgba(225,29,116,.35)" stroke-width="5" stroke-dasharray="14 14"/></svg>
    <div class="abs" id="s2-core" style="left:${cx - 150}px;top:${cy - 150}px;width:300px;height:300px;border-radius:50%;background:${MG};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;color:#fff;box-shadow:0 30px 80px rgba(225,29,116,.4)">
      <div style="width:90px;height:90px">${icon("heart-handshake", "#fff", 2)}</div><div style="font:900 40px Inter;line-height:1">grátis</div><div style="font:700 24px 'JetBrains Mono'">open source</div></div>
    <div class="abs" id="s2-ring" style="left:0;top:0;width:1080px;height:1920px">
      ${OSS.map(([n, f], i) => { const a = -Math.PI / 2 + (i * 2 * Math.PI) / OSS.length; return `<div class="abs" id="s2-o${i}" style="left:${(cx + R * Math.cos(a) - 75).toFixed(0)}px;top:${(cy + R * Math.sin(a) - 75).toFixed(0)}px"><div class="lg"><img src="${logo(f)}"/></div></div>`; }).join("")}
    </div>
    <div class="abs center-x tc" id="s2-k" style="top:1140px;width:900px"><div class="sticker dark" style="font-size:38px">${icon("eye-off", "#fff", 2.4)}muita gente ainda não conhece</div></div>
  `, js: `
inn("#s2-h",${t.ex},"up",.45);
fromTo("#s2-orb",{opacity:0,scale:.6,svgOrigin:"${cx} ${cy}"},{opacity:1,scale:1,duration:.6,ease:E.o},${t.un - 0.1});${S("whoosh", t.un - 0.1, .5)}
inn("#s2-core",${t.gr - 0.1},"pop",.45);${S("pop", t.gr - 0.1, .65)}
${OSS.map((_, i) => `inn("#s2-o${i}",${(t.co + i * 0.13).toFixed(2)},"pop",.35);`).join("")}${S("pop_multi", t.co, .65)}
fromTo("#s2-orb",{rotation:0,svgOrigin:"${cx} ${cy}"},{rotation:90,duration:5,ease:"none"},${t.un});
inn("#s2-k",${t.mu},"up",.4);
` });
}
// S3 — ganhando destaque no GitHub
{
  const t = { e: at("E alguns"), ga: at("ganhando"), de: at("destaque"), gh: at("GitHub.") };
  V.scene({ id: "s3", t0: 10.45, t1: 13.65, in: "left", push: 0.04, html: `
    <div class="abs center-x tc" id="s3-h" style="top:170px;width:1040px"><div class="kw" style="font-size:100px">em <span class="hlbox">alta</span> no</div></div>
    <div class="abs" id="s3-gh" style="left:390px;top:330px;width:300px;height:300px;border-radius:80px;background:${INK};display:grid;place-items:center"><img src="${logo("github-white.svg")}" style="width:60%"/></div>
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s3-line" d="M120 1080 L320 1010 L470 1040 L640 900 L800 860 L960 700" stroke="${MG}" stroke-width="14" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
    <div class="abs" id="s3-ar" style="left:900px;top:640px;width:120px;height:120px">${icon("trending-up", MG, 2.6)}</div>
  `, js: `
inn("#s3-h",${t.e},"up",.4);
inn("#s3-gh",${t.ga - 0.1},"pop",.45);${S("pop", t.ga - 0.1, .6)}
draw("#s3-line",${t.de - 0.1},.8);${S("riser", t.de - 0.1, .5)}
inn("#s3-ar",${t.gh - 0.1},"pop",.35);${S("ding", t.gh, .55)}
` });
}
// S4 — alternativas para tarefas criativas (projetos reais)
{
  const t = { a: at("A proposta"), of: at("oferecer"), al: at("alternativas"), de: at("determinadas"), ta: at("tarefas"), cr: at("criativas"), se: at("sem"), dp: at("depender"), so: at("softwares"), co: at("comerciais.") };
  V.scene({ id: "s4", t0: 13.65, t1: 21.05, in: "rise", push: 0.03, html: `
    <div class="abs center-x tc" id="s4-h" style="top:160px;width:1040px"><div class="kw" style="font-size:86px">alternativas <span class="hlbox">abertas</span></div></div>
    <div class="abs col gap16" style="left:70px;top:300px;width:940px">
      ${OSS.map(([n, f, d], i) => `<div class="alt" id="s4-a${i}"><div class="lg"><img src="${logo(f)}"/></div><div><div class="an">${n}</div><div class="ad">${d}</div></div><div style="margin-left:auto;padding:8px 18px;border-radius:14px;background:${GR};color:#fff;font:900 26px Inter">grátis</div></div>`).join("")}
    </div>
    <div class="abs center-x tc" id="s4-no" style="top:1090px;width:1000px"><div class="sticker" style="font-size:38px;background:${INK};color:#fff">${icon("unlink", "#fff", 2.4)}sem depender só de software pago</div></div>
  `, js: `
inn("#s4-h",${t.al - 0.1},"up",.45);
${OSS.map((_, i) => `inn("#s4-a${i}",${(t.de + i * 0.32).toFixed(2)},"left",.4);`).join("")}${S("pop_multi", t.de, .55)}${S("pop_multi", t.cr, .45)}
inn("#s4-no",${t.so - 0.1},"pop",.4);${S("confirm", t.co, .55)}
` });
}
// S5 — projetos prontos para instalar e usar
{
  const t = { e: at("E o mais"), in: at("interessante"), en: at("encontrar"), pr: at("preparados"), is: at("instalação"), ut: at("utilização.") };
  V.scene({ id: "s5", t0: 21.05, t1: 27.45, in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc" id="s5-h" style="top:170px;width:1040px"><div class="kw" style="font-size:100px">prontos pra</div><div class="kw" style="font-size:140px;color:${TE}">INSTALAR</div></div>
    <div class="abs card" id="s5-card" style="left:120px;top:540px;width:840px;padding:40px 44px">
      <div class="row gap24" style="align-items:center"><div class="lg" style="width:120px;height:120px"><img src="${logo("oss-krita.svg")}"/></div><div><div style="font:900 48px Inter">Krita</div><div style="font:700 26px 'JetBrains Mono';color:#6b6457">código aberto · grátis</div></div></div>
      <div class="meter" style="width:752px;height:36px;margin-top:34px"><div class="fill" id="s5-f" style="background:${TE}"></div></div>
      <div class="row" style="margin-top:30px;justify-content:space-between;align-items:center">
        <div class="sticker" id="s5-dl" style="font-size:38px;background:${TE};color:#fff">${icon("download", "#fff", 2.6)}instalar</div>
        <div class="sticker green" id="s5-ok" style="font-size:38px">${icon("check", "#fff", 3)}pronto pra usar</div>
      </div>
    </div>
  `, js: `
inn("#s5-h",${t.e},"up",.45);
inn("#s5-card",${t.en - 0.1},"rise",.5);${S("whoosh_s", t.en - 0.1, .45)}
pulse("#s5-dl",${t.pr},1.08,.3);${S("click", t.pr, .6)}
set("#s5-f",{scaleX:0},${t.e});fromTo("#s5-f",{scaleX:0},{scaleX:1,duration:1.2,ease:"power1.inOut"},${t.is - 0.3});${S("counter", t.is - 0.3, .45)}
set("#s5-ok",{opacity:0},${t.e});inn("#s5-ok",${t.ut},"pop",.35);${S("confirm", t.ut, .6)}
` });
}
// S6 — gratuito ≠ todos os recursos de uma ferramenta profissional (ilustrativo)
{
  const t = { m: at("Mas"), de: at("detalhe"), ob: at("observar."), se: at("Ser"), gr: at("gratuito"), ns: at("não significa"), to: at("todos"), re: at("recursos"), pr: at("profissional.") };
  V.scene({ id: "s6", t0: 27.45, t1: 36.45, in: "left", push: 0.03, html: `
    <div class="abs center-x tc" id="s6-w" style="top:170px;width:1000px"><div class="sticker" style="font-size:52px;background:${YE};color:#111;transform:rotate(-2deg)">${icon("triangle-alert", "#111", 2.6)}um detalhe importante</div></div>
    <div class="abs center-x tc" id="s6-h" style="top:300px;width:1040px"><div class="kw" style="font-size:110px">grátis <span style="color:${RD}">≠</span> completo</div></div>
    <div class="abs card" id="s6-box" style="left:90px;top:470px;width:900px;padding:34px">
      <div style="font:900 30px Inter;letter-spacing:.14em;color:#9a948a;margin-bottom:22px">RECURSOS DE UMA FERRAMENTA PROFISSIONAL</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px">
        ${[0, 1, 2, 3, 4, 5].map((k) => k < 4 ? `<div class="slot" id="s6-s${k}" style="background:${TE};color:#fff">${icon("check", "#fff", 3).replace("<svg", '<svg style="width:46px;height:46px"')}</div>` : `<div class="slot" id="s6-s${k}" style="border:4px dashed rgba(15,17,21,.25);color:rgba(15,17,21,.4)">?</div>`).join("")}
      </div>
    </div>
    <div class="abs center-x tc" id="s6-tag" style="top:1070px;width:800px"><div class="sticker red" style="font-size:38px;transform:rotate(4deg)">nem sempre tem tudo</div></div>
  `, js: `
inn("#s6-w",${t.m},"slam");${S("alert", t.de, .5)}
out("#s6-w",${t.se - 0.2},"up",.2);
inn("#s6-h",${t.gr - 0.1},"slam");${S("impact", t.gr - 0.1, .6)}
inn("#s6-box",${t.ns - 0.1},"rise",.45);
${[0, 1, 2, 3].map((k) => `inn("#s6-s${k}",${(t.to + k * 0.12).toFixed(2)},"pop",.3);`).join("")}${S("pop_multi", t.to, .55)}
inn("#s6-s4",${t.re},"fade",.3);inn("#s6-s5",${t.re + 0.12},"fade",.3);
inn("#s6-tag",${t.pr - 0.1},"pop",.4);${S("glitch", t.pr, .5)}
` });
}
// S7 — conferir funcionalidades, compatibilidade e limitações
{
  const t = { p: at("Por isso,"), an: at("antes"), es: at("escolher,"), im: at("importante"), cf: at("conferir"), fu: at("funcionalidades"), cp: at("compatibilidade"), li: at("limitações.") };
  const it = [["funcionalidades", "list-checks", TE, t.fu], ["compatibilidade", "monitor-smartphone", MG, t.cp], ["limitações", "triangle-alert", "#d97706", t.li]];
  V.scene({ id: "s7", t0: 36.45, t1: 43.95, in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc" id="s7-h" style="top:170px;width:1040px"><div class="kw" style="font-size:100px">antes de <span class="hlbox">escolher</span></div></div>
    <div class="abs" id="s7-mg" style="left:800px;top:330px;width:170px;height:170px">${icon("search", INK, 2.2)}</div>
    <div class="abs col gap24" style="left:90px;top:540px;width:900px">
      ${it.map(([n, ic, c], i) => `<div class="chk" id="s7-i${i}"><div class="ci">${icon(ic, c, 2.2)}</div>${n}<div class="ci" id="s7-c${i}" style="margin-left:auto">${icon("circle-check-big", GR, 2.6)}</div></div>`).join("")}
    </div>
  `, js: `
inn("#s7-h",${t.an - 0.1},"up",.45);
inn("#s7-mg",${t.cf - 0.1},"pop",.4);${S("scan", t.cf - 0.1, .5)}
${it.map(([, , , tt], i) => `inn("#s7-i${i}",${(tt - 0.15).toFixed(2)},"left",.4);set("#s7-c${i}",{opacity:0},${t.p});inn("#s7-c${i}",${(tt + 0.35).toFixed(2)},"pop",.3);${V.sfx("confirm", tt + 0.35, 0.55)}`).join("\n")}
` });
}
// S8 — pode atender boa parte das suas necessidades
{
  const t = { d: at("Dependendo"), tr: at("trabalho,"), al: at("alternativa"), co: at("código", 2), at_: at("atender"), bp: at("boa parte"), ne: at("necessidades.") };
  V.scene({ id: "s8", t0: 43.95, t1: 50.55, in: "rise", push: 0.03, html: `
    <div class="abs center-x tc" id="s8-h" style="top:170px;width:1040px"><div class="kw" style="font-size:96px">depende do seu</div><div class="kw" style="font-size:130px;color:${MG}">TRABALHO</div></div>
    <svg class="wires" viewBox="0 0 1080 1920"><circle cx="540" cy="820" r="230" fill="none" stroke="rgba(15,17,21,.08)" stroke-width="60"/><circle id="s8-arc" cx="540" cy="820" r="230" fill="none" stroke="${TE}" stroke-width="60" stroke-linecap="round" transform="rotate(-90 540 820)" stroke-dasharray="1445" stroke-dashoffset="1445"/></svg>
    <div class="abs center-x tc" id="s8-mid" style="top:740px;width:400px"><div style="font:900 50px Inter;line-height:1.05">boa parte<br/><span style="color:${TE}">do que<br/>você precisa</span></div></div>
  `, js: `
inn("#s8-h",${t.d},"up",.45);
fromTo("#s8-arc",{strokeDashoffset:1445},{strokeDashoffset:361,duration:1.4,ease:"power2.out",immediateRender:true},${t.al});${S("riser", t.al, .45)}
inn("#s8-mid",${t.bp - 0.1},"pop",.4);${S("ding", t.bp, .55)}pulse("#s8-mid",${t.ne},1.06,.35);
` });
}
// S9 — quem está começando, produz conteúdo ou desenvolve projetos
{
  const t = { e: at("E isso"), di: at("diferença"), co: at("começando,"), pr: at("produz"), ct: at("conteúdo"), de: at("desenvolve"), pj: at("projetos.") };
  const ps = [["começando", "sprout", GR, t.co], ["criando conteúdo", "clapperboard", MG, t.pr], ["desenvolvendo", "code-2", TE, t.de]];
  V.scene({ id: "s9", t0: 50.55, t1: 56.35, in: "left", push: 0.03, html: `
    <div class="abs center-x tc" id="s9-h" style="top:170px;width:1040px"><div class="kw" style="font-size:100px">faz <span class="hlbox">diferença</span></div><div class="kw" style="font-size:70px;margin-top:10px">pra quem está…</div></div>
    <div class="abs col gap24" style="left:90px;top:480px;width:900px">
      ${ps.map(([n, ic, c], i) => `<div class="chk" id="s9-p${i}" style="border-color:${c}"><div class="ci" style="width:96px;height:96px;border-radius:28px;background:${c};display:grid;place-items:center"><div style="width:60%;height:60%">${icon(ic, "#fff", 2.2)}</div></div>${n}</div>`).join("")}
    </div>
  `, js: `
inn("#s9-h",${t.e},"up",.45);${S("impact", t.di, .5)}
${ps.map(([, , , tt], i) => `inn("#s9-p${i}",${(tt - 0.12).toFixed(2)},"left",.4);${V.sfx("pop", tt - 0.12, 0.7)}`).join("\n")}
` });
}
// S10 — CTA DESIGN GRÁTIS
{
  const t = { q: at("Quer"), co: at("Comenta"), w: at("Design grátis"), seg: at("segue") };
  V.scene({ id: "s10", t0: 56.35, t1: V.dur, last: true, in: "zoom", push: 0.03,
    html: ctaHtml2("s10", { pre: `alternativas <span class="hlbox">grátis?</span>`, word: "DESIGN GRÁTIS", color: MG }),
    js: ctaJs2(V, "s10", { q: t.q, co: t.co, word: t.w, seg: t.seg }) });
}
V.write(`${OUT}/projeto`);
