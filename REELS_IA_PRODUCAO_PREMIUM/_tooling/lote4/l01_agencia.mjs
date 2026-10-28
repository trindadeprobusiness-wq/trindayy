// LOTE 4 · 01 — AGÊNCIA DE 13 CLAUDES (Lendário 10:18) · ref aighostlab · ESTILO CAMPEÃO
// Sem card de repositório: a narração não diz o nome da skill. Painéis de roteiro/comentários/bio/semana/Reels são ilustrativos.
import { Video, icon, logo } from "../lib/build.mjs";
import { KIT4_CSS, COMMON_CSS, ctaHtml, ctaJs, header, headerJs, narr } from "../lib/kit4.mjs";

const DIR = "01_AGENCIA_CLAUDE", OUT = `/home/user/trindayy/REELS_IA_LOTE4/${DIR}`;
const PU = "#a78bfa", CL = "#d97757", IG = "#e1306c", GN = "#34d399", AM = "#fbbf24";
const V = new Video({
  id: "l4-01", title: "Agência de 13 Claudes", wordsPath: narr(DIR), audioDur: 34.3, autoHide: true,
  accent: PU, capKey: PU,
  fixes: { "Clod": "Claude", "Clouds": "Claudes" },
  keywords: ["Clod", "Instagram!", "skill", "agência", "13", "Clouds", "graça.", "roteirista", "26", "fórmulas", "gancho", "nota", "Social", "Media", "comentários,", "bio", "semana", "insano.", "viralizando", "voz.", "nada!"],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
V.extraCss = COMMON_CSS + KIT4_CSS + `
.desk{position:absolute;width:150px;height:150px;border-radius:40px;display:grid;place-items:center;background:linear-gradient(160deg,#2a1d18,#140e0c);border:2px solid rgba(217,119,87,.25);box-shadow:0 20px 40px rgba(0,0,0,.5)}
.desk img{width:58%;height:58%;filter:grayscale(1) brightness(.5)}
.desk .rl{position:absolute;bottom:-34px;font:700 20px "JetBrains Mono";color:#8b97b3;white-space:nowrap}
.fcard{position:absolute;width:150px;height:200px;border-radius:18px;background:#141e35;border:2px solid rgba(167,139,250,.5);transform-origin:50% 120%;padding:14px;font:700 18px "JetBrains Mono";color:#c4b5fd}
.cmt{display:flex;align-items:center;gap:18px;padding:18px 22px;border-radius:22px;background:rgba(14,21,38,.9);border:1.5px solid rgba(160,190,255,.14);font:600 28px Inter;color:#dbe5ff}
.cmt .av{width:52px;height:52px;border-radius:50%;flex:none}
.day{flex:1;border-radius:16px;background:rgba(14,21,38,.9);border:1.5px solid rgba(160,190,255,.14);padding:12px 8px;display:flex;flex-direction:column;gap:10px;align-items:center}
.day b{font:700 20px "JetBrains Mono";color:#8b97b3}
.day i{display:block;width:100%;height:46px;border-radius:10px}
.reel{position:absolute;width:280px;height:420px;border-radius:24px;overflow:hidden;border:2px solid rgba(160,190,255,.18);box-shadow:0 20px 50px rgba(0,0,0,.5)}
.reel .vw{position:absolute;left:16px;bottom:16px;display:flex;align-items:center;gap:8px;font:800 26px Inter;color:#fff;text-shadow:0 2px 8px rgba(0,0,0,.6)}
.reel .vw svg{width:28px;height:28px}
`;
// contador fixo do time (s2 → s6)
const tS2 = at("Achei") - 0.08, tCTA = at("Comenta") - 0.08;
V.overlayHtml += `<div class="cnt" id="cnt"><span style="width:34px;height:34px;display:inline-block">${icon("bot", PU, 2.2)}</span>AGENTES <b style="color:${PU}">×<span id="cnt-n">0</span></b></div>`;
V.extraJs.push(`tl.fromTo("#cnt",{opacity:0,y:-30},{opacity:1,y:0,duration:.45,ease:"back.out(1.7)",immediateRender:true},${(tS2 + 0.2).toFixed(2)});tl.to("#cnt",{opacity:0,duration:.3},${(tCTA - 0.2).toFixed(2)});`);
[at("Achei"), at("Tem"), at("Tem", 2), at("E olha"), at("Ou"), at("Comenta")].forEach((t) => S("whoosh", t - 0.25, 0.5));

// S1 — gancho: o Instagram racha
{
  const t = { cl: at("Clod"), ac: at("acabou"), ig: at("Instagram!") };
  V.scene({ id: "s1", t0: 0, t1: tS2, in: "none", push: 0.05, html: `
    <div class="abs" id="s1-ig" style="left:340px;top:250px;width:400px;height:400px;border-radius:104px;background:radial-gradient(circle at 30% 107%,#fdf497 0%,#fd5949 45%,#d6249f 60%,#285aeb 90%);box-shadow:0 40px 120px rgba(214,36,159,.4)"><div style="position:absolute;left:80px;top:80px;width:240px;height:240px;border-radius:70px;border:26px solid #fff"></div><div style="position:absolute;left:142px;top:142px;width:116px;height:116px;border-radius:50%;border:24px solid #fff"></div><div style="position:absolute;left:262px;top:110px;width:30px;height:30px;border-radius:50%;background:#fff"></div></div>
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s1-cr" d="M560 250 L520 360 L585 430 L505 520 L560 600 L530 650" stroke="#060a13" stroke-width="14" fill="none" stroke-linejoin="round"/></svg>
    <div class="abs" id="s1-cc" style="left:770px;top:560px;width:150px;height:150px;border-radius:40px;background:linear-gradient(160deg,#2a1d18,#140e0c);border:2px solid rgba(217,119,87,.6);display:grid;place-items:center;box-shadow:0 20px 50px rgba(0,0,0,.5)"><img src="${logo("claude-icon.svg")}" style="width:60%"/></div>
    <div class="abs center-x tc" id="s1-h" style="top:760px;width:1000px"><div class="display" style="font-size:96px">O <span style="color:${CL}">CLAUDE</span> ACABOU</div><div class="display" style="font-size:96px">COM O <span style="color:${IG}">INSTAGRAM</span></div></div>
  `, js: `
fromTo("#s1-ig",{scale:1.15,rotation:-6},{scale:1,rotation:0,duration:.6,ease:E.o4},0);
inn("#s1-h",0.05,"up",.5);
inn("#s1-cc",${t.cl - 0.1},"pop",.4);${S("pop", t.cl - 0.1, .6)}
draw("#s1-cr",${t.ac - 0.05},.35,"power3.out");shake("#s1-ig",${t.ac + 0.1});${S("glitch", t.ac - 0.05, .7)}${S("impact", t.ac, .6)}
to("#s1-ig",{rotation:-8,y:40,opacity:.55,duration:.6,ease:"power2.in"},${t.ig + 0.2});
` });
}
// S2 — 1 skill = 1 agência inteira de 13 Claudes, de graça
{
  const t = { ac: at("Achei"), sk: at("skill"), ag: at("agência"), n: at("13"), cl: at("Clouds"), pe: at("perfil"), gr: at("graça.") };
  const roles = ["roteirista", "social media", "bio", "agenda", "caça-virais", "ganchos", "legendas", "respostas", "ideias", "capas", "dados", "tendências", "revisão"];
  const D = roles.map((r, i) => [70 + (i % 4) * 245 + (Math.floor(i / 4) % 2 ? 60 : 0), 430 + Math.floor(i / 4) * 190, r, i]);
  V.scene({ id: "s2", t0: tS2, t1: at("Tem") - 0.08, in: "zoom", push: 0.035, html: `
    <div class="abs center-x tc" id="s2-k" style="top:170px;width:1000px"><div class="h1">1 skill <span style="color:#5d6880">=</span> <span style="color:${PU}">1 agência</span></div><div class="kicker" style="margin-top:16px">13 claudes tocando o seu perfil</div></div>
    ${D.map(([x, y, r, i]) => `<div class="desk" id="s2-d${i}" style="left:${x}px;top:${y}px;${i === 12 ? "left:465px;" : ""}"><img src="${logo("claude-icon.svg")}"/><div class="rl">${r}</div></div>`).join("")}
    <div class="abs" id="s2-free" style="left:700px;top:1010px;transform:rotate(-6deg)"><div class="badge" style="font-size:96px;background:${GN};color:#04140c">R$ 0</div></div>
  `, js: `
inn("#s2-k",${t.ac},"up",.45);
${D.map(([, , , i]) => `inn("#s2-d${i}",${(t.sk + 0.1 + i * 0.05).toFixed(2)},"pop",.35);`).join("")}${S("pop_multi", t.sk + 0.1, .5)}
${D.map(([, , , i]) => `to("#s2-d${i} img",{filter:"grayscale(0) brightness(1)",duration:.15},${(t.n + i * 0.045).toFixed(2)});to("#s2-d${i}",{borderColor:"rgba(217,119,87,.8)",duration:.15},${(t.n + i * 0.045).toFixed(2)});`).join("")}
count("#cnt-n",${t.n},.65,0,13,"int");${S("counter", t.n, .55)}pulse("#cnt",${t.n + 0.7},1.12,.35);
inn("#s2-free",${t.gr - 0.08},"slam");${S("impact", t.gr - 0.05, .75)}
` });
}
// S3 — 1 Roteirista: 26 fórmulas de gancho + nota antes de gravar
{
  const t = { te: at("Tem"), ro: at("roteirista"), es: at("escreve"), re: at("Reel"), n26: at("26"), fo: at("fórmulas"), ga: at("gancho"), no: at("nota"), gv: at("gravar.") };
  const F = Array.from({ length: 7 }, (_, i) => i);
  V.scene({ id: "s3", t0: t.te - 0.08, t1: at("Tem", 2) - 0.08, in: "left", push: 0.03, html: `
    ${header("s3", 1, "Roteirista", "escreve o seu reel", PU)}
    <div class="abs pnl" id="s3-pg" style="left:70px;top:330px;width:520px;height:560px;padding:30px">
      <div class="lbl4">roteiro · reel</div>
      <div style="margin-top:20px;font:700 30px Inter;color:#eef3ff;line-height:1.4"><span style="color:${AM}">GANCHO:</span> <span id="s3-ty" data-text="Você está usando o Claude errado…"></span></div>
      ${[0, 1, 2, 3].map((i) => `<div id="s3-l${i}" style="margin-top:22px;height:22px;width:${[90, 75, 85, 60][i]}%;border-radius:11px;background:rgba(160,190,255,.14)"></div>`).join("")}
      <div style="position:absolute;left:30px;right:30px;bottom:30px"><div class="lbl4">nota do gancho</div><div class="meter" style="width:460px;margin-top:12px;height:46px"><div class="fill" id="s3-f" style="background:linear-gradient(90deg,${PU},${GN})"></div></div></div></div>
    <div class="abs" style="left:640px;top:360px;width:380px;height:420px">${F.map((i) => `<div class="fcard" id="s3-c${i}" style="left:110px;top:60px">fórmula<br/><span style="font-size:44px;color:#fff">#${i + 1}</span></div>`).join("")}</div>
    <div class="abs tc" id="s3-n" style="left:620px;top:780px;width:420px"><div class="big" style="font-size:150px;color:${PU}"><span id="s3-cn">0</span></div><div class="kicker">fórmulas de gancho</div></div>
    <div class="abs" id="s3-ap" style="left:230px;top:820px;transform:rotate(-8deg)"><div class="badge" style="font-size:60px;border:6px solid ${GN};color:${GN};background:rgba(6,10,19,.85)">APROVADO ✓</div></div>
    <div class="ex" id="s3-ex" style="left:70px;top:296px">exemplo ilustrativo</div>
  `, js: `
${headerJs(V, "s3", t.ro - 0.15)}
inn("#s3-pg",${t.es - 0.15},"up",.45);inn("#s3-ex",${t.es},"fade",.3);type("#s3-ty",${t.es},1.0);${S("typing", t.es, .5)}
${[0, 1, 2, 3].map((i) => `strike("#s3-l${i}",${(t.re + i * 0.12).toFixed(2)},.3);`).join("")}
${F.map((i) => `fromTo("#s3-c${i}",{rotation:0,opacity:0},{rotation:${-36 + i * 12},opacity:1,duration:.45,ease:E.back},${(t.n26 - 0.1 + i * 0.05).toFixed(2)});`).join("")}${S("pop_multi", t.n26 - 0.1, .55)}
inn("#s3-n",${t.n26 - 0.1},"pop",.4);count("#s3-cn",${t.n26},.55,0,26,"int");${S("counter", t.n26, .5)}
set("#s3-f",{scaleX:0},${t.te});to("#s3-f",{scaleX:.9,duration:.8,ease:E.o},${t.no - 0.05});${S("riser", t.no - 0.3, .4)}
fromTo("#s3-ap",{scale:2.4,opacity:0,rotation:-24},{scale:1,opacity:1,rotation:-8,duration:.3,ease:"back.out(1.6)"},${t.gv - 0.08});${S("impact", t.gv - 0.05, .7)}
` });
}
// S4 — 2 Social Media · 3 Bio nova · 4 Semana pronta (um a cada ~2 s, mesmo painel)
{
  const t = { te: at("Tem", 2), sm: at("Social"), re: at("responde"), co: at("comentários,"), rb: at("reescreve"), bi: at("bio"), pl: at("planeja"), se: at("semana"), in: at("inteira.", 2) };
  const H = [[2, "Social Media", "responde comentários", "#38bdf8", t.sm - 0.15], [3, "Bio nova", "reescreve o seu perfil", AM, t.rb - 0.2], [4, "Semana pronta", "planeja sua semana", GN, t.pl - 0.2]];
  const dias = ["SEG", "TER", "QUA", "QUI", "SEX", "SÁB", "DOM"], cores = [PU, "#38bdf8", GN, AM, CL, IG, PU];
  V.scene({ id: "s4", t0: t.te - 0.08, t1: at("E olha") - 0.08, in: "rise", push: 0.03, html: `
    ${H.map(([n, nm, sb, c], i) => `<div id="s4-h${i}">${header(`s4h${i}`, n, nm, sb, c)}</div>`).join("")}
    <div class="abs" id="s4-a" style="left:70px;top:340px;width:940px">
      ${["amei esse conteúdo!! 🔥", "como faço isso?", "manda o link pf"].map((c, i) => `<div class="cmt" id="s4-m${i}" style="margin-bottom:18px"><div class="av" style="background:${[IG, PU, AM][i]}"></div>${c}<div id="s4-k${i}" style="margin-left:auto;display:flex;align-items:center;gap:8px;font:700 22px Inter;color:${GN}"><span style="width:30px;height:30px;display:inline-block">${icon("reply", GN, 2.4)}</span>respondido</div></div>`).join("")}</div>
    <div class="abs pnl" id="s4-b" style="left:170px;top:330px;width:740px;padding:34px">
      <div class="row gap20"><div style="width:120px;height:120px;border-radius:50%;background:conic-gradient(from 210deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5,#feda75);padding:6px"><div style="width:100%;height:100%;border-radius:50%;background:#1b2747"></div></div><div><div style="font:800 36px Inter">@seuperfil</div><div class="lbl4" style="margin-top:6px">bio</div></div></div>
      <div id="s4-old" style="position:relative;margin-top:24px;font:600 30px Inter;color:#8b97b3">só mais um perfil de tecnologia<div id="s4-x" style="position:absolute;left:0;right:0;top:20px;height:5px;background:#ff4d5e"></div></div>
      <div id="s4-new" style="margin-top:14px;font:700 32px Inter;color:#eef3ff;line-height:1.35">🤖 IA na prática pra você criar mais rápido · ferramentas toda semana ↓</div></div>
    <div class="abs row" id="s4-c" style="left:70px;top:350px;width:940px;gap:10px;align-items:stretch">${dias.map((d, i) => `<div class="day"><b>${d}</b><i id="s4-p${i}" style="background:${cores[i]}"></i><i id="s4-q${i}" style="background:rgba(160,190,255,.14)"></i></div>`).join("")}</div>
    <div class="ex" id="s4-ex" style="left:70px;top:296px">exemplo ilustrativo</div>
  `, js: `
${H.map(([, , , , tt], i) => (i ? `set("#s4-h${i}",{opacity:0},${t.te - 0.08});set("#s4-h${i}",{opacity:1},${(tt - 0.02).toFixed(2)});` : "") + headerJs(V, `s4h${i}`, tt, "whoosh_s") + (i < 2 ? `to("#s4-h${i}",{opacity:0,duration:.2},${(H[i + 1][4] - 0.15).toFixed(2)});` : "")).join("\n")}
inn("#s4-ex",${t.sm},"fade",.3);
${[0, 1, 2].map((i) => `inn("#s4-m${i}",${(t.sm + 0.1 + i * 0.12).toFixed(2)},"left",.35);set("#s4-k${i}",{opacity:0},${t.te});inn("#s4-k${i}",${(t.co - 0.1 + i * 0.15).toFixed(2)},"pop",.3);`).join("")}${S("pop_multi", t.co - 0.1, .5)}
out("#s4-a",${t.rb - 0.3},"left",.25);
set("#s4-b",{opacity:0},${t.te});inn("#s4-b",${t.rb - 0.1},"up",.4);strike("#s4-x",${t.bi - 0.05},.3);set("#s4-new",{opacity:0},${t.te});inn("#s4-new",${t.bi + 0.25},"up",.35);${S("typing", t.bi + 0.2, .45)}
out("#s4-b",${t.pl - 0.3},"left",.25);
set("#s4-c",{opacity:0},${t.te});inn("#s4-c",${t.pl - 0.1},"up",.4);
${[0, 1, 2, 3, 4, 5, 6].map((i) => `set("#s4-p${i}",{scaleY:0},${t.te});to("#s4-p${i}",{scaleY:1,duration:.2,ease:E.back},${(t.se + i * 0.07).toFixed(2)});`).join("")}${S("pop_multi", t.se, .5)}${S("confirm", t.in + 0.2, .5)}
` });
}
// S5 — 5 O mais insano: caça os Reels viralizando e reescreve com a sua voz
{
  const t = { eo: at("E olha"), mi: at("mais"), ins: at("insano."), ca: at("Caça"), vi: at("viralizando"), ni: at("nicho"), re: at("reescreve", 2), vo: at("voz.") };
  const R = [["linear-gradient(160deg,#6d28d9,#1e1b4b)", 70, 380, "12 mil"], ["linear-gradient(160deg,#0e7490,#082f49)", 400, 380, "8 mil"], ["linear-gradient(160deg,#b45309,#451a03)", 730, 380, "88 mil"], ["linear-gradient(160deg,#be185d,#4a044e)", 70, 830, "21 mil"], ["linear-gradient(160deg,#15803d,#052e16)", 400, 830, "5 mil"], ["linear-gradient(160deg,#334155,#0f172a)", 730, 830, "15 mil"]];
  V.scene({ id: "s5", t0: t.eo - 0.08, t1: at("Ou") - 0.08, in: "zoom", push: 0.04, html: `
    <div class="abs center-x tc" id="s5-o" style="top:600px;width:1000px"><div class="display" style="font-size:150px">E OLHA <span style="color:${CL}">ISSO</span></div></div>
    <div id="s5-hd">${header("s5", 5, "O mais insano", "caça os virais do seu nicho", CL)}</div>
    ${R.map(([bg, x, y, v], i) => `<div class="reel" id="s5-r${i}" style="left:${x}px;top:${y}px;height:${i < 3 ? 420 : 300}px;background:${bg}"><div class="vw">${icon("play", "#fff", 2.4)}${v}</div></div>`).join("")}
    <svg class="wires" viewBox="0 0 1080 1920" id="s5-ret"><circle cx="870" cy="590" r="170" stroke="${CL}" stroke-width="8" fill="none"/><path d="M870 400 V460 M870 720 V780 M680 590 H740 M1000 590 H1060" stroke="${CL}" stroke-width="8"/></svg>
    <div class="abs pnl" id="s5-v" style="left:70px;top:830px;width:940px;padding:30px 34px">
      <div class="lbl4" style="color:${CL}">reescrito com a sua voz</div>
      <div class="row" style="gap:6px;margin-top:22px;height:90px;align-items:center">${Array.from({ length: 46 }, (_, i) => `<i style="display:block;width:12px;border-radius:6px;background:${CL};height:${(18 + Math.abs(Math.sin(i * 1.7)) * 70).toFixed(0)}px"></i>`).join("")}</div></div>
    <div class="ex" id="s5-ex" style="left:70px;top:1180px">exemplo ilustrativo</div>
  `, js: `
inn("#s5-o",${t.eo - 0.05},"slam");${S("impact", t.eo, .7)}
out("#s5-o",${t.mi - 0.25},"up",.2);
set("#s5-hd",{opacity:0},${t.eo - 0.08});set("#s5-hd",{opacity:1},${(t.mi - 0.12).toFixed(2)});${headerJs(V, "s5", t.mi - 0.1)}
${R.map((_, i) => `inn("#s5-r${i}",${(t.ca - 0.15 + i * 0.07).toFixed(2)},"rise",.4);`).join("")}${S("pop_multi", t.ca - 0.1, .5)}inn("#s5-ex",${t.ca},"fade",.3);
set("#s5-ret",{opacity:0},${t.eo});fromTo("#s5-ret",{opacity:0,scale:1.6,svgOrigin:"870 590"},{opacity:1,scale:1,svgOrigin:"870 590",duration:.35,ease:E.o},${t.vi - 0.1});${S("lock", t.vi, .75)}
glow("#s5-r2",${t.vi + 0.1},"rgba(217,119,87,.7)",.3);${R.map((_, i) => (i === 2 ? "" : `to("#s5-r${i}",{opacity:.25,duration:.3},${(t.ni).toFixed(2)});`)).join("")}
${[3, 4, 5].map((i) => `to("#s5-r${i}",{opacity:0,duration:.2},${(t.re - 0.3).toFixed(2)});`).join("")}
inn("#s5-v",${t.re - 0.1},"up",.45);${S("whoosh_s", t.re - 0.15, .45)}
fromTo("#s5-v i",{scaleY:.2},{scaleY:1,duration:.25,yoyo:true,repeat:5,ease:"sine.inOut",stagger:{each:.02,from:"center"}},${t.re + 0.3});
` });
}
// S6 — uma agência que não cobra nada: R$ 0
{
  const t = { ou: at("Ou"), ag: at("agência", 2), nc: at("não"), co: at("cobra"), na: at("nada!") };
  V.scene({ id: "s6", t0: t.ou - 0.08, t1: tCTA, in: "rise", push: 0.04, html: `
    <div class="abs center-x tc" id="s6-k" style="top:200px;width:1000px"><div class="kicker">uma agência inteira</div></div>
    <div class="abs center-x row" id="s6-row" style="top:290px;width:1000px;justify-content:center;gap:10px;flex-wrap:wrap">${Array.from({ length: 13 }, (_, i) => `<div style="width:110px;height:110px;border-radius:30px;background:linear-gradient(160deg,#2a1d18,#140e0c);border:2px solid rgba(217,119,87,.6);display:grid;place-items:center"><img src="${logo("claude-icon.svg")}" style="width:58%"/></div>`).join("")}</div>
    <div class="abs center-x tc" id="s6-n" style="top:600px;width:1080px"><div class="big" style="font-size:330px;color:${GN}">R$ 0</div></div>
    <div class="abs center-x tc" id="s6-s" style="top:960px;width:1000px"><div class="h2">não cobra <span style="color:${GN}">nada</span></div></div>
  `, js: `
inn("#s6-k",${t.ou},"fade",.3);
fromTo("#s6-row > div",{scale:0,opacity:0},{scale:1,opacity:1,duration:.3,ease:E.back,stagger:.04},${t.ou + 0.1});${S("pop_multi", t.ou + 0.1, .5)}
inn("#s6-n",${t.nc - 0.1},"slam");${S("impact", t.nc - 0.05, .85)}${S("shimmer", t.nc + 0.1, .5)}
inn("#s6-s",${t.na - 0.1},"up",.35);pulse("#s6-n",${t.na},1.06,.4);
` });
}
// S7 — CTA SKILL + seguir
{
  const t = { co: at("Comenta"), w: at("skill", 2), seg: at("segue"), fe: at("envio") };
  V.scene({ id: "s7", t0: tCTA, t1: V.dur, last: true, in: "zoom", push: 0.03,
    html: ctaHtml("s7", { q: `QUER A <span style="color:${PU}">SKILL?</span>`, word: "SKILL", grad: `linear-gradient(90deg,${PU},${CL})`, logos: [{ f: "claude-icon.svg" }, { f: "instagram-icon.svg", white: true }] }),
    js: ctaJs(V, "s7", { q: t.co - 0.02, co: t.co + 0.15, word: t.w, seg: t.seg, fe: t.fe }) });
}
V.write(`${OUT}/projeto`);
