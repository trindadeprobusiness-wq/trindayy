// LOTE 3 · 04 — PS5 NO PC / AnyPS5 (Lendário 18:00) · ref matheusgomes
// Reais (boykopovar/AnyPS5): avatar, descrição do README ("Tool for automatic executables porting to Linux and
// Windows."), "No emulation", relinker + bibliotecas nativas, logos Windows/Linux. Sem logo PlayStation e sem
// arte de GTA VI (só tipografia própria). A voz diz "NPS 5": a legenda mostra AnyPS5.
import { Video, icon } from "../lib/build.mjs";
import { KIT2_CSS, ctaHtml2, ctaJs2 } from "../lib/kit2.mjs";
import { KIT3_CSS, L3ROOT, P3, narr, gh3, words } from "../lib/kit3.mjs";

const DIR = "04_PS5", OUT = `${L3ROOT}/${DIR}`;
const BL = "#2f6bff", MG = "#ff2e88", BG = "#050a1f", CY = "#38bdf8", RD = "#ff3b47";
const V = new Video({
  id: "l3-04", title: "PS5 no PC — AnyPS5", kit2: true, theme: "dark", capMaxWords: 3, capMaxChars: 18,
  wordsPath: narr(DIR), audioDur: 59.9,
  accent: BL, capKey: MG, vars: { a1: BL, a2: MG, a3: CY, capbg: BL, capfg: "#fff", bg: BG },
  fixes: { "NPS": "AnyPS5." },
  keywords: ["PlayStation", "computador!", "GTA", "VI.", "impossível,", "GitHub", "NPS", "camada", "compatibilidade", "Windows", "Linux.", "reduzir", "atenção!", "não", "experimental", "hardware,", "PS5"],
});
// remove o "5." que sobra de "NPS 5." (já incluso em "AnyPS5.")
V.words = V.words.filter((w, i, a) => !(w.text === "5." && a[i - 1]?.text === "NPS"));
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
V.extraCss = KIT2_CSS + KIT3_CSS + `
#root{background:${BG}} .bg-glow.a{background:radial-gradient(circle,rgba(47,107,255,.32),transparent 62%)} .bg-glow.b{background:radial-gradient(circle,rgba(255,46,136,.22),transparent 62%)}
.theme-dark .bg-grid{background-image:radial-gradient(rgba(120,150,255,.14) 2px,transparent 2.5px)}
.neon{background:linear-gradient(180deg,#ffd36e 0%,#ff7a59 45%,#ff2e88 100%);-webkit-background-clip:text;color:transparent;filter:drop-shadow(0 0 30px rgba(255,46,136,.45))}
.layer{position:absolute;left:110px;width:860px;height:150px;border-radius:30px;display:flex;align-items:center;gap:24px;padding:0 36px;font:800 44px Inter}
.layer .li{width:80px;height:80px}
.blk3{position:absolute;width:118px;height:76px;border-radius:12px;background:#1c2547;border:2px solid #34407a;box-shadow:inset 0 -6px 0 rgba(0,0,0,.25)}
.lg{position:absolute;width:250px;height:250px;border-radius:60px;background:#fff;display:grid;place-items:center;box-shadow:0 30px 80px rgba(0,0,0,.45)}
.lg img{width:60%;height:60%;object-fit:contain}
.ret{position:absolute;width:330px;height:330px}
`;
const SW = [at("E agora"), at("Parece"), at("O nome"), at("A proposta"), at("E o mais"), at("Basicamente,"), at("Mas atenção!"), at("Se você"), at("vale")];
SW.forEach((t, i) => V.swipe(t - 0.05, [BL, MG, CY][i % 3]));
const T = SW.map((t) => t - 0.08);

// S1 — gancho: controle entra no monitor do PC
{
  const t = { ro: at("rodar"), ps: at("PlayStation"), di: at("diretamente"), pc: at("computador!") };
  V.scene({ id: "s1", t0: 0, t1: T[0], in: "none", push: 0.05, html: `
    <div class="abs center-x tc" id="s1-h" style="top:310px;width:1040px"><div class="kw" style="font-size:150px">${words("PS5")} <span class="wd" style="color:${MG}">→</span> <span class="wd" style="color:${BL}">PC</span></div></div>
    <div class="abs" id="s1-mon" style="left:190px;top:560px;width:700px;height:460px">
      <div id="s1-scr" style="width:700px;height:420px;border-radius:30px;background:#0a0f24;border:14px solid #20294a;display:grid;place-items:center;overflow:hidden"><div id="s1-on" style="width:100%;height:100%;background:radial-gradient(circle at 50% 50%,rgba(47,107,255,.85),rgba(255,46,136,.5) 55%,transparent 80%);opacity:0"></div></div>
      <div style="width:160px;height:60px;margin:0 auto;background:#20294a;clip-path:polygon(20% 0,80% 0,100% 100%,0 100%)"></div></div>
    <div class="abs" id="s1-pad" style="left:380px;top:640px;width:320px;height:320px">${icon("gamepad-2", "#fff", 1.6)}</div>
  `, js: `
inn("#s1-h .wd",0.02,"blur",.5,{stagger:.1});${S("whoosh_s", 0.02, .45)}
inn("#s1-mon",0.3,"bscale",.5);
fromTo("#s1-pad",{opacity:0,scale:1.8,rotation:-200,x:-300,y:-200},{opacity:1,scale:1,rotation:0,x:0,y:0,duration:.9,ease:"power3.out"},${t.ps - 0.15});${S("whoosh", t.ps - 0.2, .55)}
to("#s1-pad",{scale:.55,duration:.4,ease:"power2.in"},${t.pc - 0.35});
to("#s1-on",{opacity:1,duration:.3},${t.pc - 0.05});${S("power", t.pc - 0.08, .7)}
to("#s1-pad",{scale:.62,duration:.2},${t.pc + 0.1});
` });
}
// S2 — GTA VI (tipografia própria, sem arte oficial)
{
  const t = { ag: at("agora"), im: at("imagine"), si: at("significar"), jo: at("jogo"), gt: at("GTA"), vi: at("VI.") };
  V.scene({ id: "s2", t0: T[0], t1: T[1], in: "cut", push: 0.04, html: `
    <div class="abs center-x tc" id="s2-h" style="top:310px;width:1040px"><div class="kw" style="font-size:90px">${words("agora imagine em")}</div></div>
    <div class="abs center-x tc" id="s2-g" style="top:520px;width:1080px"><div class="kw" style="font-size:300px;letter-spacing:-.02em">${["G", "T", "A"].map((c, i) => `<span class="wd neon" id="s2-c${i}">${c}</span>`).join("")}</div></div>
    <div class="abs center-x tc" id="s2-v" style="top:800px;width:1080px"><div class="kw neon" style="font-size:280px">VI</div></div>
    <div class="abs" id="s2-q" style="left:820px;top:820px;font:700 230px 'Space Grotesk';color:#fff;opacity:.9">?</div>
  `, js: `
inn("#s2-h .wd",${T[0] + 0.05},"blur",.45,{stagger:.1});
${[0, 1, 2].map((i) => `fromTo("#s2-c${i}",{y:160,opacity:0},{y:0,opacity:1,duration:.4,ease:"back.out(1.6)"},${(t.gt - 0.1 + i * 0.1).toFixed(2)});`).join("")}${S("pop_multi", t.gt - 0.1, .55)}
inn("#s2-v",${t.vi - 0.08},"slam");${S("impact", t.vi - 0.05, .85)}
inn("#s2-q",${t.vi + 0.35},"pop",.4);pulse("#s2-q",${t.vi + 0.8},1.15,.4);
` });
}
// S3 — parece impossível… mas apareceu no GitHub
{
  const t = { pa: at("Parece"), im: at("impossível,"), ma: at("mas"), ap: at("apareceu"), gh: at("GitHub"), at: at("atenção.") };
  V.scene({ id: "s3", t0: T[1], t1: T[2], in: "zoom", push: 0.04, html: `
    <div class="abs" id="s3-st" style="left:110px;top:520px;color:${RD};transform:rotate(-8deg)"><div class="stamp" style="font-size:120px;background:rgba(5,10,31,.6)">IMPOSSÍVEL</div></div>
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s3-cr" d="M540 470 L 500 560 L 580 620 L 510 700 L 570 760 L 530 860" stroke="#fff" stroke-width="10" fill="none" stroke-linejoin="round"/></svg>
    <div class="abs" id="s3-gh" style="left:340px;top:880px"><div class="sticker" style="font-size:52px;background:#fff;color:#111"><img src="assets/logos/github-icon.svg" style="width:60px;height:60px"/>GitHub</div></div>
    <div class="abs center-x tc" id="s3-h" style="top:310px;width:1040px"><div class="kw" style="font-size:80px">${words("parece impossível…")}</div></div>
  `, js: `
inn("#s3-h .wd",${t.pa},"blur",.45,{stagger:.1});
fromTo("#s3-st",{scale:2.4,opacity:0,rotation:-24},{scale:1,opacity:1,rotation:-8,duration:.32,ease:"back.out(1.6)"},${t.im - 0.06});${S("stamp", t.im, .85)}
draw("#s3-cr",${t.ma - 0.05},.35,"power3.out");${S("glitch", t.ma - 0.05, .6)}
to("#s3-st",{opacity:.35,filter:"blur(3px)",duration:.4},${t.ap});
inn("#s3-gh",${t.gh - 0.1},"slam");${S("impact", t.gh - 0.08, .7)}
pulse("#s3-gh",${t.at},1.08,.4);
` });
}
// S4 — o nome: AnyPS5 (repositório real)
{
  const t = { o: at("O nome"), np: at("NPS") };
  V.scene({ id: "s4", t0: T[2], t1: T[3], in: "rise", push: 0.035, html: `
    <div class="abs center-x tc" id="s4-h" style="top:310px;width:1040px"><div class="kw" style="font-size:96px">${words("o nome dele é")}</div></div>
    <div class="abs center-x tc" id="s4-nm" style="top:470px;width:1040px"><div class="kw" style="font-size:190px;color:${BL}"><span id="s4-ty" data-text="AnyPS5"></span></div></div>
    <div class="abs" id="s4-gh" style="left:70px;top:740px">${gh3({ id: "s4-card", owner: "boykopovar", repo: "AnyPS5", avatar: P3("av_boykopovar.png"), desc: "Tool for automatic executables porting to Linux and Windows." })}</div>
  `, js: `
inn("#s4-h .wd",${t.o},"blur",.45,{stagger:.08});
type("#s4-ty",${t.np - 0.05},.5);${S("typing", t.np - 0.05, .5)}${S("impact", t.np + 0.5, .55)}
inn("#s4-gh",${t.np + 0.3},"rise",.45);
` });
}
// S5 — camada de compatibilidade (README: relinker + bibliotecas nativas, "No emulation")
{
  const t = { a: at("A proposta"), de: at("desenvolver"), ca: at("camada"), cp: at("compatibilidade"), in: at("instruções"), gr: at("gráficas"), ps: at("PlayStation.", 2) };
  const P = Array.from({ length: 10 }, (_, i) => i);
  V.scene({ id: "s5", t0: T[3], t1: T[4], in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc" id="s5-h" style="top:300px;width:1040px"><div class="kw" style="font-size:80px">${words("uma camada de")}</div><div class="kw" style="font-size:80px;color:${BL}">${words("compatibilidade")}</div></div>
    <div class="layer" id="s5-l0" style="top:520px;background:#141a36;border:2px solid #2a3570"><div class="li">${icon("gamepad-2", MG, 2)}</div>jogo de console</div>
    <div class="layer" id="s5-l1" style="top:760px;background:${BL};color:#fff;box-shadow:0 0 80px rgba(47,107,255,.55)"><div class="li">${icon("layers", "#fff", 2)}</div>camada de compatibilidade</div>
    <div class="layer" id="s5-l2" style="top:1000px;background:#141a36;border:2px solid #2a3570"><div class="li">${icon("monitor", CY, 2)}</div>PC · Windows / Linux</div>
    ${P.map((i) => `<div class="abs" id="s5-p${i}" style="left:${200 + (i % 5) * 160}px;top:690px;width:22px;height:22px;border-radius:6px;background:${MG}"></div>`).join("")}
    <div class="exm" id="s5-ne" style="left:700px;top:1170px;color:${CY}">README: “no emulation”</div>
  `, js: `
inn("#s5-h .wd",${t.a},"blur",.45,{stagger:.08});
inn("#s5-l0",${t.de - 0.1},"down",.4);inn("#s5-l2",${t.de + 0.1},"up",.4);${S("whoosh_s", t.de - 0.1, .4)}
fromTo("#s5-l1",{scaleX:0,opacity:0},{scaleX:1,opacity:1,duration:.5,ease:"expo.out"},${t.ca - 0.08});${S("power", t.ca - 0.05, .6)}
${P.map((i) => `set("#s5-p${i}",{opacity:0},${T[3]});fromTo("#s5-p${i}",{y:0,opacity:1,backgroundColor:"${MG}"},{keyframes:{y:[0,120,240,320],backgroundColor:["${MG}","${MG}","${CY}","${CY}"],opacity:[1,1,1,0]},duration:1.2,ease:"none",repeat:1},${(t.in - 0.1 + i * 0.13).toFixed(2)});`).join("")}${S("scan", t.in - 0.1, .5)}
inn("#s5-ne",${t.ps - 0.1},"fade",.35);
` });
}
// S6 — mira Windows e Linux (logos reais)
{
  const t = { e: at("E o mais"), mi: at("mira"), wi: at("Windows"), li: at("Linux.") };
  V.scene({ id: "s6", t0: T[4], t1: T[5], in: "left", push: 0.035, html: `
    <div class="abs center-x tc" id="s6-h" style="top:310px;width:1040px"><div class="kw" style="font-size:96px">${words("o projeto")} <span class="wd" style="color:${MG}">mira</span></div></div>
    <div class="lg" id="s6-w" style="left:130px;top:620px"><img src="assets/logos/microsoft-icon.svg"/></div>
    <div class="lg" id="s6-l" style="left:700px;top:620px"><img src="assets/logos/linux-tux.svg"/></div>
    <svg class="ret" id="s6-r" viewBox="0 0 330 330" style="left:90px;top:580px"><circle cx="165" cy="165" r="140" stroke="${MG}" stroke-width="8" fill="none"/><path d="M165 0 V60 M165 270 V330 M0 165 H60 M270 165 H330" stroke="${MG}" stroke-width="8"/></svg>
  `, js: `
inn("#s6-h .wd",${t.e},"blur",.45,{stagger:.1});
inn("#s6-w",${t.mi},"pop",.4);inn("#s6-l",${t.mi + 0.15},"pop",.4);${S("pop_multi", t.mi, .5)}
fromTo("#s6-r",{opacity:0,scale:1.6,x:240},{opacity:1,scale:1,x:0,duration:.35,ease:"power3.out"},${t.wi - 0.15});${S("lock", t.wi, .7)}
to("#s6-r",{x:570,duration:.35,ease:"power3.inOut"},${t.li - 0.2});${S("lock", t.li + 0.1, .7)}
pulse("#s6-w",${t.wi + 0.1},1.08,.3);pulse("#s6-l",${t.li + 0.15},1.08,.3);
` });
}
// S7 — reduzir algumas barreiras (alguns blocos ficam)
{
  const t = { ba: at("Basicamente,"), re: at("reduzir"), al: at("algumas"), bt: at("barreiras"), co: at("console"), pl: at("plataformas.") };
  const B = []; for (let r = 0; r < 6; r++) for (let c = 0; c < 2; c++) B.push([470 + c * 124 + (r % 2 ? 0 : 0), 560 + r * 84, r * 2 + c]);
  const stay = new Set([1, 4, 9]);
  V.scene({ id: "s7", t0: T[5], t1: T[6], in: "rise", push: 0.03, html: `
    <div class="abs center-x tc" id="s7-h" style="top:300px;width:1040px"><div class="kw" style="font-size:86px">${words("reduzir")} <span class="wd" style="color:${BL}">barreiras</span></div></div>
    <div class="abs tc" id="s7-a" style="left:60px;top:680px;width:340px"><div style="width:180px;height:180px;margin:0 auto;border-radius:44px;background:#141a36;border:2px solid #2a3570;display:grid;place-items:center"><div style="width:58%;height:58%">${icon("gamepad-2", MG, 2)}</div></div><div style="font:800 40px Inter;margin-top:16px">console</div></div>
    <div class="abs tc" id="s7-b" style="left:680px;top:680px;width:340px"><div style="width:180px;height:180px;margin:0 auto;border-radius:44px;background:#141a36;border:2px solid #2a3570;display:grid;place-items:center"><div style="width:58%;height:58%">${icon("monitor", CY, 2)}</div></div><div style="font:800 40px Inter;margin-top:16px">PC</div></div>
    ${B.map(([x, y, i]) => `<div class="blk3" id="s7-k${i}" style="left:${x}px;top:${y}px"></div>`).join("")}
    <div class="abs" id="s7-ar" style="left:390px;top:735px;width:300px;height:60px;opacity:0"><svg viewBox="0 0 300 60" style="width:300px;height:60px"><path d="M10 30 H 270 M 240 8 L 280 30 L 240 52" stroke="${BL}" stroke-width="8" fill="none" stroke-linecap="round"/></svg></div>
  `, js: `
inn("#s7-h .wd",${t.ba},"blur",.45,{stagger:.1});
inn("#s7-a",${t.ba + 0.2},"left",.4);inn("#s7-b",${t.ba + 0.3},"right",.4);
${B.map(([, , i]) => `inn("#s7-k${i}",${(t.ba + 0.4 + i * 0.03).toFixed(2)},"drop",.3);`).join("")}${S("pop_multi", t.ba + 0.4, .45)}
${B.filter(([, , i]) => !stay.has(i)).map(([, , i], j) => `fromTo("#s7-k${i}",{y:0,rotation:0,opacity:1},{y:${700 + (i % 3) * 80},rotation:${(i % 2 ? 1 : -1) * (40 + i * 7)},opacity:0,duration:.8,ease:"power2.in"},${(t.re + j * 0.12).toFixed(2)});`).join("")}${S("drop", t.re, .6)}${S("drop", t.re + 0.5, .5)}
${[...stay].map((i) => `glow("#s7-k${i}",${t.al + 0.1},"rgba(255,46,136,.6)",.3);`).join("")}
to("#s7-ar",{opacity:1,duration:.3},${t.co});draw("#s7-ar path",${t.co},.6);${S("whoosh_s", t.co, .4)}
` });
}
// S8 — mas atenção: ainda não (fundo vermelho) + proposta experimental
{
  const t = { ma: at("Mas atenção!"), is: at("Isso", 2), na: at("não"), gt: at("GTA", 2), pc: at("PC"), es: at("Estamos"), ex: at("experimental"), de: at("demonstrar"), pr: at("prática.") };
  V.scene({ id: "s8", t0: T[6], t1: T[7], in: "cut", push: 0.035, html: `
    <div class="abs" id="s8-bg" style="inset:-60px;background:radial-gradient(120% 80% at 50% 40%,#3a0712,#14030a 70%)"></div>
    <div class="abs center-x tc" id="s8-w" style="top:300px;width:1000px"><div class="sticker" style="font-size:56px;background:${RD};color:#fff">${icon("triangle-alert", "#fff", 2.6)}atenção</div></div>
    <div class="abs center-x tc" id="s8-q" style="top:470px;width:1080px"><div class="kw" style="font-size:150px"><span class="neon">GTA VI</span></div><div class="kw" style="font-size:110px">no PC?</div></div>
    <div class="abs" id="s8-st" style="left:170px;top:600px;color:${RD};transform:rotate(-9deg)"><div class="stamp" style="font-size:130px;background:rgba(20,3,10,.75)">AINDA NÃO</div></div>
    <div class="abs pane tc" id="s8-ex" style="left:140px;top:860px;width:800px;background:#1f0a12;border:2px solid #5a1a2a">
      <div class="row gap20" style="justify-content:center"><div style="width:90px;height:90px">${icon("flask-conical", "#ffb4c0", 2)}</div><div style="font:700 72px 'Space Grotesk';color:#fff;letter-spacing:-.03em">experimental</div></div>
      <div id="s8-pr" style="font:700 34px Inter;color:#ffb4c0;margin-top:14px">precisa provar resultados na prática</div></div>
  `, js: `
fromTo("#s8-bg",{opacity:0},{opacity:1,duration:.15},${T[6]});${S("alert", t.ma, .7)}
inn("#s8-w",${t.ma - 0.05},"slam");
inn("#s8-q",${t.is - 0.1},"bscale",.45);
fromTo("#s8-st",{scale:2.6,opacity:0,rotation:-26},{scale:1,opacity:1,rotation:-9,duration:.3,ease:"back.out(1.6)"},${t.na - 0.06});${S("stamp", t.na, .9)}shake("#s8-q",${t.na + 0.2});
to("#s8-q",{y:-90,scale:.8,duration:.5,ease:"power3.inOut"},${t.es - 0.3});to("#s8-st",{y:-120,scale:.8,duration:.5,ease:"power3.inOut"},${t.es - 0.3});
inn("#s8-ex",${t.ex - 0.1},"bscale",.45);${S("impact", t.ex - 0.05, .6)}
inn("#s8-pr",${t.de - 0.1},"blur",.4);
` });
}
// S9 — para quem gosta de tecnologia, programação e limites do hardware
{
  const t = { se: at("Se você"), te: at("tecnologia,"), pg: at("programação"), pj: at("projetos"), de: at("desafiam"), li: at("limites"), hw: at("hardware,") };
  const C = [["tecnologia", "cpu", BL, t.te], ["programação", "code-xml", MG, t.pg], ["projetos ousados", "rocket", CY, t.pj]];
  V.scene({ id: "s9", t0: T[7], t1: T[8], in: "zoom", push: 0.03, html: `
    <div class="abs col gap20" style="left:90px;top:320px">${C.map(([n, ic, c], i) => `<div class="chipx" id="s9-c${i}" style="background:${c};color:#fff">${icon(ic, "#fff", 2.4)}${n}</div>`).join("")}</div>
    <div class="abs pane" id="s9-hw" style="left:90px;top:680px;width:900px;background:#0c1330;border:2px solid #2a3570">
      <div class="row gap24"><div style="width:120px;height:120px">${icon("cpu", CY, 1.8)}</div><div style="font:700 60px 'Space Grotesk'">limites do hardware</div></div>
      <div class="meter" style="width:840px;margin-top:26px"><div class="fill" id="s9-f" style="background:linear-gradient(90deg,${CY},${BL},${MG})"></div></div></div>
  `, js: `
${C.map(([, , , tt], i) => `inn("#s9-c${i}",${(tt - 0.1).toFixed(2)},"left",.4);${V.sfx("pop", tt - 0.1, 0.6)}`).join("\n")}
inn("#s9-hw",${t.de - 0.1},"up",.45);
set("#s9-f",{scaleX:0},${T[7]});to("#s9-f",{scaleX:1,duration:.9,ease:"power3.out"},${t.li - 0.1});${S("riser", t.li - 0.4, .5)}
shake("#s9-hw",${t.hw});
` });
}
// S10 — CTA PS5
{
  const t = { q: at("vale"), co: at("Comenta"), w: at("PS5"), seg: at("repositório.") };
  V.scene({ id: "s10", t0: T[8], t1: V.dur, last: true, in: "zoom", push: 0.03,
    html: ctaHtml2("s10", { pre: `vale a pena <span class="hlbox">conhecer</span>`, word: "PS5", color: MG, follow: false }),
    js: ctaJs2(V, "s10", { q: t.q, co: t.co, word: t.w, seg: t.seg, follow: false }) });
}
V.write(`${OUT}/projeto`);
