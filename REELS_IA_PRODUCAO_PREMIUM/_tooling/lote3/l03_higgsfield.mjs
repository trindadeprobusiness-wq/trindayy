// LOTE 3 · 03 — HIGGSFIELD, O REPOSITÓRIO (Mário 17:39) · ref gpeterson.co
// Reais (higgsfield-ai/higgsfield): avatar, descrição do README, diagrama docs/static/architecture.png e
// `pip install higgsfield==0.0.3`. Os "quadros de filme" do gancho são gradientes abstratos (sem vídeo de terceiros).
import { Video, icon } from "../lib/build.mjs";
import { KIT2_CSS, ctaHtml2, ctaJs2 } from "../lib/kit2.mjs";
import { KIT3_CSS, L3ROOT, P3, narr, gh3, words } from "../lib/kit3.mjs";

const DIR = "03_HIGGSFIELD", OUT = `${L3ROOT}/${DIR}`;
const LI = "#d4ff3a", AM = "#ffb020", BG = "#05070d", VI = "#8b5cf6";
const V = new Video({
  id: "l3-03", title: "Higgsfield no GitHub", kit2: true, theme: "dark", capMaxWords: 3, capMaxChars: 18,
  wordsPath: narr(DIR), audioDur: 49.3,
  accent: LI, capKey: LI, vars: { a1: LI, a2: AM, a3: LI, capbg: LI, capfg: "#0b0d05", bg: BG },
  fixes: { "Rigsfield": "Higgsfield", "Hicksfield": "Higgsfield" },
  keywords: ["impressionantes", "Higgsfield.", "assinatura", "paga.", "Rigsfield", "GitHub.", "infraestrutura", "treinos.", "detalhe", "não", "mesmo", "abertas", "Hicksfield"],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
const FR = ["linear-gradient(160deg,#ff7a18,#af002d 70%)", "linear-gradient(160deg,#00c6ff,#0072ff)", "linear-gradient(200deg,#f7971e,#ffd200)", "linear-gradient(160deg,#8e2de2,#4a00e0)", "linear-gradient(180deg,#134e5e,#71b280)", "linear-gradient(160deg,#ee0979,#ff6a00)", "linear-gradient(200deg,#1f4037,#99f2c8)", "linear-gradient(160deg,#fc466b,#3f5efb)", "linear-gradient(180deg,#0f2027,#2c5364)"];
const mosaic = (id, h = 1500) => `<div class="abs" id="${id}" style="left:-40px;top:-80px;width:1160px;height:${h}px;display:flex;gap:22px;transform:rotate(-6deg)">${[0, 1, 2].map((c) => `<div class="mcol" id="${id}-c${c}" style="flex:1;display:flex;flex-direction:column;gap:22px">${[0, 1, 2, 3, 4, 5].map((r) => `<div class="mfr" style="background:${FR[(c * 3 + r) % FR.length]}"><div class="mpl">${icon("play", "#fff", 2.4)}</div></div>`).join("")}</div>`).join("")}</div>`;
V.extraCss = KIT2_CSS + KIT3_CSS + `
#root{background:${BG}} .bg-glow.a{background:radial-gradient(circle,rgba(212,255,58,.14),transparent 62%)} .bg-glow.b{background:radial-gradient(circle,rgba(255,176,32,.16),transparent 62%)}
.theme-dark .bg-grid{background-image:radial-gradient(rgba(212,255,58,.09) 2px,transparent 2.5px)}
.mfr{height:430px;border-radius:30px;position:relative;overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,.5)}
.mfr:after{content:"";position:absolute;inset:0;background:repeating-linear-gradient(0deg,rgba(0,0,0,.08) 0 2px,transparent 2px 4px)}
.mpl{position:absolute;left:50%;top:50%;width:90px;height:90px;margin:-45px 0 0 -45px;border-radius:50%;background:rgba(0,0,0,.35);display:grid;place-items:center;backdrop-filter:blur(4px)}
.mpl svg{width:46%;height:46%}
.gpu{position:absolute;width:132px;height:92px;border-radius:18px;background:#10141d;border:2px solid #263042;display:flex;align-items:center;justify-content:center;font:700 22px "JetBrains Mono";color:#5b6577}
.wcard3{background:#fff;border-radius:30px;overflow:hidden;box-shadow:0 40px 100px rgba(0,0,0,.6)}
`;
const SW = [at("O problema"), at("Mas"), at("E o mais"), at("Só"), at("Ainda"), at("Quer")];
SW.forEach((t, i) => V.swipe(t - 0.05, [LI, AM, VI][i % 3]));
const T = SW.map((t) => t - 0.08);

// S1 — gancho: mosaico de "quadros de filme" abstratos + wordmark Higgsfield
{
  const t = { pr: at("Provavelmente"), im: at("impressionantes"), cr: at("criados"), hf: at("Higgsfield.") };
  V.scene({ id: "s1", t0: 0, t1: T[0], in: "none", push: 0.05, html: `
    ${mosaic("s1-m")}
    <div class="abs" style="inset:0;background:linear-gradient(180deg,rgba(5,7,13,.2),rgba(5,7,13,.55) 55%,rgba(5,7,13,.9))"></div>
    <div class="abs center-x tc" id="s1-h" style="top:420px;width:1040px"><div class="kw" style="font-size:96px">${words("vídeos impressionantes")}</div><div class="kw" style="font-size:96px">${words("com IA")}</div></div>
    <div class="abs center-x tc" id="s1-hf" style="top:740px;width:1080px"><div class="kw" style="font-size:180px;color:${LI};text-shadow:0 20px 60px rgba(0,0,0,.6)">Higgsfield</div></div>
  `, js: `
${[0, 1, 2].map((c) => `fromTo("#s1-m-c${c}",{y:${c === 1 ? -420 : 0}},{y:${c === 1 ? 0 : -420},duration:7,ease:"none",immediateRender:true},0);`).join("")}
inn("#s1-h .wd",0.05,"blur",.5,{stagger:.1});${S("whoosh_s", 0.05, .45)}
fromTo("#s1-m",{filter:"brightness(.8) saturate(.9)"},{filter:"brightness(1.25) saturate(1.3)",duration:.5,ease:"power2.out"},${t.im - 0.1});${S("shimmer", t.im, .5)}
inn("#s1-hf",${t.hf - 0.1},"slam");${S("impact", t.hf - 0.08, .8)}
` });
}
// S2 — o problema: paywall
{
  const t = { pb: at("problema"), mu: at("muitos"), re: at("recursos"), ex: at("exigem"), as: at("assinatura"), pg: at("paga.") };
  V.scene({ id: "s2", t0: T[0], t1: T[1], in: "cut", push: 0.03, html: `
    ${mosaic("s2-m")}
    <div class="abs" id="s2-dim" style="inset:0;background:rgba(5,7,13,.55)"></div>
    <div class="abs center-x tc" id="s2-h" style="top:310px;width:1040px"><div class="kw" style="font-size:100px">${words("o problema")}</div></div>
    <div class="abs pane tc" id="s2-pw" style="left:170px;top:520px;width:740px;height:560px;background:rgba(14,16,24,.92);border:2px solid #2a3142;box-shadow:0 40px 120px rgba(0,0,0,.7)">
      <div id="s2-lk" style="width:170px;height:170px;margin:40px auto 20px;border-radius:44px;background:${AM};display:grid;place-items:center"><div style="width:58%;height:58%">${icon("lock", "#1a1203", 2.4)}</div></div>
      <div style="font:700 66px 'Space Grotesk';letter-spacing:-.03em">assinatura paga</div>
      <div class="row gap16" style="justify-content:center;margin-top:26px"><div class="chipx" style="background:#1d2230;color:#cbd5e1;font-size:30px">${icon("credit-card", AM, 2.2)}recursos premium</div></div></div>
  `, js: `
fromTo("#s2-m",{filter:"blur(0px)"},{filter:"blur(18px)",duration:1.6,ease:"power2.inOut"},${t.mu});
inn("#s2-h .wd",${T[0] + 0.05},"blur",.45,{stagger:.1});
inn("#s2-pw",${t.ex - 0.2},"bscale",.5);${S("whoosh_s", t.ex - 0.25, .4)}
fromTo("#s2-lk",{scale:2.2,opacity:0,rotation:-20},{scale:1,opacity:1,rotation:0,duration:.35,ease:"back.out(1.6)"},${t.as - 0.08});${S("lock", t.as - 0.02, .9)}${S("impact", t.as, .5)}
shake("#s2-pw",${t.pg});
` });
}
// S3 — a descoberta: lupa varre e revela o repositório real
{
  const t = { ma: at("Mas"), ol: at("olha"), en: at("encontrei."), ex: at("Existe"), pr: at("projeto"), pu: at("público"), hf: at("Rigsfield"), gh: at("GitHub.") };
  V.scene({ id: "s3", t0: T[1], t1: T[2], in: "zoom", push: 0.035, html: `
    <div class="abs center-x tc" id="s3-h" style="top:310px;width:1040px"><div class="kw" style="font-size:96px">${words("olha o que eu")}</div><div class="kw" style="font-size:96px;color:${LI}">${words("encontrei")}</div></div>
    <div class="abs" id="s3-gh" style="left:70px;top:620px">${gh3({ id: "s3-card", owner: "higgsfield-ai", repo: "higgsfield", avatar: P3("av_higgsfield.png"), desc: "Fault-tolerant, highly scalable GPU orchestration, and a machine learning framework designed for training models with billions to trillions of parameters" })}</div>
    <div class="abs" id="s3-pu" style="left:660px;top:580px"><div class="sticker" style="font-size:32px;background:${LI};color:#0b0d05">${icon("globe", "#0b0d05", 2.4)}público</div></div>
    <div class="abs" id="s3-lp" style="left:-200px;top:650px;width:240px;height:240px;border-radius:50%;border:14px solid #fff;box-shadow:0 0 0 6px rgba(0,0,0,.4),inset 0 0 60px rgba(212,255,58,.35);background:rgba(212,255,58,.08)"><div style="position:absolute;right:-90px;bottom:-60px;width:120px;height:30px;border-radius:15px;background:#fff;transform:rotate(40deg)"></div></div>
    <div class="abs" id="s3-seal" style="left:330px;top:1100px"><div class="sticker" style="font-size:40px;background:#fff;color:#111"><img src="assets/logos/github-icon.svg" style="width:46px;height:46px"/>no GitHub</div></div>
  `, js: `
inn("#s3-h .wd",${t.ma},"blur",.45,{stagger:.1});
fromTo("#s3-lp",{x:0,opacity:1},{x:1250,duration:1.3,ease:"power2.inOut"},${t.ol});${S("scan", t.ol, .6)}
inn("#s3-gh",${t.pr - 0.15},"bscale",.5);${S("whoosh_s", t.pr - 0.2, .45)}
inn("#s3-pu",${t.pu - 0.08},"pop",.35);${S("pop", t.pu - 0.08, .6)}
pulse("#s3-card",${t.hf},1.03,.3);
inn("#s3-seal",${t.gh - 0.1},"slam");${S("impact", t.gh - 0.08, .65)}
` });
}
// S4 — o que ele realmente é: diagrama real do README → nós de GPU + curva de treino
{
  const t = { e: at("E o mais"), tr: at("trabalha"), pa: at("parte"), un: at("universo"), inf: at("infraestrutura"), ex: at("executar"), tn: at("treinos.") };
  const G = []; for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) G.push([90 + c * 152, 600 + r * 120, r * 6 + c]);
  V.scene({ id: "s4", t0: T[2], t1: T[3], in: "rise", push: 0.03, html: `
    <div class="abs center-x tc" id="s4-h" style="top:300px;width:1040px"><div class="kw" style="font-size:90px">${words("uma parte importante")}</div><div class="kw" style="font-size:90px">${words("da IA")}</div></div>
    <div class="abs wcard3" id="s4-ar" style="left:90px;top:520px;width:900px;height:648px"><img src="${P3("hf_arch.jpg")}" style="width:100%;height:100%;object-fit:cover"/></div>
    <div class="exm" id="s4-lb" style="left:90px;top:1180px;color:${LI}">diagrama real do README</div>
    <div class="abs center-x tc" id="s4-h2" style="top:300px;width:1040px"><div class="kw" style="font-size:118px;color:${LI}">${words("infraestrutura")}</div><div class="kw" style="font-size:70px">${words("pra treinar modelos")}</div></div>
    <svg class="wires" viewBox="0 0 1080 1920" id="s4-wr">${[0, 1, 2].map((r) => `<path id="s4-p${r}" d="M156 ${646 + r * 120} H 926" stroke="${LI}" stroke-width="4" fill="none" opacity=".55"/>`).join("")}</svg>
    ${G.map(([x, y, i]) => `<div class="gpu" id="s4-g${i}" style="left:${x}px;top:${y}px">GPU ${i}</div>`).join("")}
    <div class="abs pane" id="s4-ls" style="left:90px;top:960px;width:900px;height:230px;background:#0c1018;border:2px solid #263042;padding:20px 28px">
      <div class="lbl" style="color:#9aa4b2">treino</div>
      <svg viewBox="0 0 840 150" style="width:840px;height:150px"><path id="s4-lc" d="M10 20 C 120 40, 160 90, 260 100 S 480 128, 600 134 S 780 140, 830 141" stroke="${LI}" stroke-width="7" fill="none" stroke-linecap="round"/></svg></div>
    <div class="abs" id="s4-pip" style="left:580px;top:976px"><div class="chipx mono" style="padding:10px 22px;background:#161c28;border:2px solid #263042;color:#d6f5e0;font:600 23px 'JetBrains Mono'"><span style="color:${LI}">$</span> pip install higgsfield</div></div>
  `, js: `
inn("#s4-h .wd",${t.e},"blur",.45,{stagger:.08});
inn("#s4-ar",${t.pa - 0.2},"bscale",.55);${S("whoosh_s", t.pa - 0.25, .45)}inn("#s4-lb",${t.pa + 0.2},"fade",.3);
fromTo("#s4-ar",{scale:1},{scale:1.08,duration:3,ease:"none"},${t.pa + 0.3});
out("#s4-h",${t.inf - 0.35},"up",.3);out("#s4-ar",${t.inf - 0.35},"shrink",.3);out("#s4-lb",${t.inf - 0.35},"fade",.2);
inn("#s4-h2 .wd",${t.inf - 0.08},"blur",.45,{stagger:.08});${S("impact", t.inf - 0.05, .6)}
${G.map(([, , i]) => `set("#s4-g${i}",{opacity:0},${T[2]});fromTo("#s4-g${i}",{opacity:0,scale:.6},{opacity:1,scale:1,duration:.3,ease:"back.out(2)"},${(t.inf + 0.05 + i * 0.03).toFixed(2)});`).join("")}${S("pop_multi", t.inf + 0.1, .5)}
set("#s4-wr",{opacity:0},${T[2]});set("#s4-wr",{opacity:1},${t.inf + 0.3});
${[0, 1, 2].map((r) => `draw("#s4-p${r}",${(t.ex - 0.1 + r * 0.1).toFixed(2)},.6);`).join("")}${S("whoosh_s", t.ex - 0.1, .45)}
${G.map(([, , i]) => `to("#s4-g${i}",{backgroundColor:"#1b2408",borderColor:"${LI}",color:"${LI}",duration:.15},${(t.ex + (i % 6) * 0.08).toFixed(2)});`).join("")}
inn("#s4-ls",${t.tn - 0.25},"up",.4);draw("#s4-lc",${t.tn - 0.05},1.0);${S("whoosh_s", t.tn, .4)}
inn("#s4-pip",${t.tn + 0.5},"pop",.35);
` });
}
// S5 — o detalhe (clímax): plataforma comercial ≠ repositório
{
  const t = { so: at("Só"), de: at("detalhe"), en: at("entender."), es: at("Esse"), rp: at("repositório"), na: at("não"), ge: at("gerador"), co: at("comercial.") };
  V.scene({ id: "s5", t0: T[3], t1: T[4], in: "zoom", push: 0.035, html: `
    <div class="abs center-x tc" id="s5-w" style="top:300px;width:1000px"><div class="sticker" style="font-size:50px;background:${AM};color:#1a1203;transform:rotate(-2deg)">${icon("triangle-alert", "#1a1203", 2.6)}detalhe importante</div></div>
    <div class="abs pane tc" id="s5-a" style="left:50px;top:460px;width:430px;height:640px;background:#0e121b;border:2px solid #2a3142">
      <div class="lbl" style="color:#9aa4b2">plataforma comercial</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:26px 0">${[0, 1, 2, 3].map((i) => `<div style="height:150px;border-radius:18px;background:${FR[i * 2]};position:relative"><div class="mpl" style="width:56px;height:56px;margin:-28px 0 0 -28px">${icon("play", "#fff", 2.4)}</div></div>`).join("")}</div>
      <div style="font:700 50px 'Space Grotesk';letter-spacing:-.03em">gerador de vídeos</div></div>
    <div class="abs pane tc" id="s5-b" style="left:600px;top:460px;width:430px;height:640px;background:#0e121b;border:2px solid ${LI}">
      <div class="lbl" style="color:${LI}">repositório no GitHub</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin:26px 0">${Array.from({ length: 9 }, (_, i) => `<div style="height:96px;border-radius:14px;background:#1b2408;border:2px solid ${LI};font:700 18px 'JetBrains Mono';color:${LI};display:grid;place-items:center">GPU ${i}</div>`).join("")}</div>
      <div style="font:700 50px 'Space Grotesk';letter-spacing:-.03em">infraestrutura de treino</div></div>
    <div class="abs" id="s5-ne" style="left:450px;top:640px;width:180px;height:180px;border-radius:50%;background:${AM};display:grid;place-items:center;font:700 150px 'Space Grotesk';color:#1a1203;line-height:1;box-shadow:0 0 80px rgba(255,176,32,.5)">≠</div>
  `, js: `
inn("#s5-w",${t.de - 0.1},"slam");${S("alert", t.de - 0.05, .6)}
inn("#s5-a",${t.de + 0.35},"left",.45);${S("whoosh_s", t.de + 0.3, .4)}
inn("#s5-b",${t.en - 0.1},"right",.45);${S("whoosh_s", t.en - 0.15, .4)}
glow("#s5-b",${t.rp},"rgba(212,255,58,.35)",.3);
set("#s5-ne",{opacity:0},${T[3]});fromTo("#s5-ne",{scale:2.4,opacity:0,rotation:-30},{scale:1,opacity:1,rotation:0,duration:.35,ease:"back.out(1.6)"},${t.na - 0.08});${S("impact", t.na - 0.05, .9)}
shake("#s5-a",${t.na + 0.25});
to("#s5-a",{opacity:.45,duration:.4},${t.co});glow("#s5-b",${t.co},"rgba(212,255,58,.45)",.4);
` });
}
// S6 — ainda assim vale: tecnologias abertas (ramificações git)
{
  const t = { ai: at("Ainda"), pr: at("projeto", 2), in: at("interessante", 2), ex: at("explorar"), te: at("tecnologias"), ab: at("abertas"), ia: at("inteligência", 3) };
  V.scene({ id: "s6", t0: T[4], t1: T[5], in: "left", push: 0.03, html: `
    <div class="abs center-x tc" id="s6-h" style="top:300px;width:1040px"><div class="kw" style="font-size:96px">${words("ainda assim,")}</div><div class="kw" style="font-size:96px;color:${LI}">${words("vale explorar")}</div></div>
    <div class="abs" id="s6-cb" style="left:440px;top:560px;width:200px;height:200px;border-radius:50px;background:${LI};display:grid;place-items:center;box-shadow:0 0 90px rgba(212,255,58,.4)"><div style="width:56%;height:56%">${icon("package-open", "#0b0d05", 2)}</div></div>
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s6-b0" d="M540 760 C 540 860, 220 860, 220 980" stroke="${LI}" stroke-width="7" fill="none"/><path id="s6-b1" d="M540 760 L 540 1000" stroke="${LI}" stroke-width="7" fill="none"/><path id="s6-b2" d="M540 760 C 540 860, 860 860, 860 980" stroke="${LI}" stroke-width="7" fill="none"/></svg>
    ${[["git-branch", 220, 980], ["cpu", 540, 1000], ["flask-conical", 860, 980]].map(([ic, x, y], i) => `<div class="abs" id="s6-n${i}" style="left:${x - 60}px;top:${y}px;width:120px;height:120px;border-radius:34px;background:#10141d;border:2px solid ${LI};display:grid;place-items:center"><div style="width:52%;height:52%">${icon(ic, LI, 2.2)}</div></div>`).join("")}
    <div class="abs" id="s6-st" style="left:650px;top:580px;color:${LI};transform:rotate(-8deg)"><div class="stamp" style="font-size:54px">aberto</div></div>
  `, js: `
inn("#s6-h .wd",${t.ai},"blur",.45,{stagger:.1});
inn("#s6-cb",${t.pr - 0.1},"pop",.45);${S("pop", t.pr - 0.1, .6)}
${[0, 1, 2].map((i) => `draw("#s6-b${i}",${(t.ex - 0.1 + i * 0.1).toFixed(2)},.5);inn("#s6-n${i}",${(t.ex + 0.35 + i * 0.12).toFixed(2)},"pop",.3);`).join("")}${S("whoosh_s", t.ex - 0.1, .45)}${S("pop_multi", t.ex + 0.35, .5)}
fromTo("#s6-st",{scale:2.2,opacity:0,rotation:-24},{scale:1,opacity:1,rotation:-8,duration:.32,ease:"back.out(1.6)"},${t.ab - 0.08});${S("stamp", t.ab - 0.02, .8)}
` });
}
// S7 — CTA HIGGSFIELD
{
  const t = { q: at("Quer"), co: at("Comenta"), w: at("Hicksfield"), seg: at("repositório!", 2) };
  V.scene({ id: "s7", t0: T[5], t1: V.dur, last: true, in: "zoom", push: 0.03,
    html: ctaHtml2("s7", { pre: `quer o <span class="hlbox" style="color:#0b0d05">código?</span>`, word: "HIGGSFIELD", color: LI, follow: false }),
    js: ctaJs2(V, "s7", { q: t.q, co: t.co, word: t.w, seg: t.seg, follow: false }) });
}
V.write(`${OUT}/projeto`);
