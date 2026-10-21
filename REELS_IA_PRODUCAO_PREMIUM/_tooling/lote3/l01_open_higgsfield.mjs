// LOTE 3 · 01 — OPEN HIGGSFIELD (Lendário 17:35) · ref skand.ai
// Reais: repositório Anil-matcha/Open-Higgsfield-AI (avatar, banner public/banner.png, demo docs/assets/demo.mp4
// recortado), frase "Try it Online — No Install Required" e URL hospedada do README.
import { Video, icon } from "../lib/build.mjs";
import { KIT2_CSS, ctaHtml2, ctaJs2 } from "../lib/kit2.mjs";
import { KIT3_CSS, L3ROOT, P3, narr, gh3, words } from "../lib/kit3.mjs";

const DIR = "01_OPEN_HIGGSFIELD", OUT = `${L3ROOT}/${DIR}`;
const LI = "#d4ff3a", VI = "#8b5cf6", BG = "#07080b";
const V = new Video({
  id: "l3-01", title: "Open Higgsfield AI", kit2: true, theme: "dark", capMaxWords: 3, capMaxChars: 18,
  wordsPath: narr(DIR), audioDur: 24.5, // 23.25 s de narração + respiro no CTA
  accent: LI, capKey: LI, vars: { a1: LI, a2: VI, a3: LI, capbg: LI, capfg: "#0b0d05", bg: BG },
  fixes: { "OpenHigsfield": "Open-Higgsfield" },
  keywords: ["alternativa", "código", "aberto", "Higgsfield", "OpenHigsfield", "GitHub.", "testar", "navegador.", "vídeo"],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
V.extraCss = KIT2_CSS + KIT3_CSS + `
#root{background:${BG}} .bg-glow.a{background:radial-gradient(circle,rgba(212,255,58,.16),transparent 62%)} .bg-glow.b{background:radial-gradient(circle,rgba(139,92,246,.28),transparent 62%)}
.theme-dark .bg-grid{background-image:radial-gradient(rgba(212,255,58,.10) 2px,transparent 2.5px)}
.pill{position:absolute;width:440px;height:300px;border-radius:44px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px}
.pill .pt{font:700 54px "Space Grotesk";letter-spacing:-.03em}
.pill .pi{width:110px;height:110px;position:relative}
.pill .pi > div{position:absolute;inset:0}
.vidcard{position:absolute;border-radius:30px;overflow:hidden;border:2px solid rgba(212,255,58,.5);box-shadow:0 50px 120px rgba(0,0,0,.6),0 0 80px rgba(212,255,58,.12)}
`;
[at("O projeto"), at("Ele"), at("Quer")].forEach((t, i) => V.swipe(t - 0.05, [LI, VI, LI][i]));

// S1 — gancho: pago/fechado × código aberto
{
  const t = { al: at("alternativa"), co: at("código"), hf: at("Higgsfield"), ge: at("gerar"), vi: at("vídeos"), ia: at("inteligência") };
  V.scene({ id: "s1", t0: 0, t1: 6.67, in: "none", push: 0.045, html: `
    <div class="abs center-x tc" id="s1-h" style="top:330px;width:1040px"><div class="kw" style="font-size:104px">${words("uma alternativa")}</div><div class="kw" style="font-size:176px;color:${LI}">${words("ABERTA")}</div></div>
    <div class="pill" id="s1-pa" style="left:60px;top:690px;background:#16161c;border:2px solid #2c2c36">
      <div class="pi"><div>${icon("lock", "#a1a1aa", 2)}</div></div><div class="pt" style="color:#d4d4d8">Higgsfield</div>
      <div class="sticker dark" style="font-size:30px;padding:10px 22px;background:#26262e">${icon("credit-card", "#fff", 2.4)}assinatura</div></div>
    <div class="abs" id="s1-ar" style="left:500px;top:800px;width:80px;height:80px">${icon("arrow-right-left", "#fff", 2.4)}</div>
    <div class="pill" id="s1-pb" style="left:580px;top:690px;background:${LI};color:#0b0d05">
      <div class="pi"><div id="s1-lk">${icon("lock", "#0b0d05", 2.2)}</div><div id="s1-ul">${icon("lock-open", "#0b0d05", 2.2)}</div></div><div class="pt">código aberto</div>
      <div class="sticker dark" style="font-size:30px;padding:10px 22px">${icon("code-xml", LI, 2.4)}open source</div></div>
    <div class="abs center-x tc" id="s1-cl" style="top:1040px;width:900px"><div class="sticker" style="font-size:42px;background:${VI};color:#fff">${icon("clapperboard", "#fff", 2.4)}gerar vídeos com IA</div></div>
  `, js: `
inn("#s1-h .wd",0.02,"blur",.5,{stagger:.08});${S("whoosh_s", 0.02, .5)}
pulse("#s1-h",${t.al},1.04,.3);
inn("#s1-pb",${t.co - 0.12},"pop",.45);${S("pop", t.co - 0.12, .7)}
set("#s1-ul",{opacity:0},0);
to("#s1-lk",{opacity:0,y:-18,duration:.18},${t.co + 0.35});fromTo("#s1-ul",{opacity:0,scale:.6,rotation:-14},{opacity:1,scale:1,rotation:0,duration:.4,ease:"back.out(2.4)"},${t.co + 0.38});${S("lock", t.co + 0.35, .8)}
inn("#s1-pa",${t.hf - 0.1},"left",.45);${S("whoosh_s", t.hf - 0.1, .45)}
inn("#s1-ar",${t.hf + 0.2},"pop",.35);
to("#s1-pa",{opacity:.45,scale:.94,duration:.4},${t.ge - 0.1});
inn("#s1-cl",${t.vi - 0.1},"drop",.45);${S("pop", t.vi - 0.1, .6)}
fromTo("#s1-cl .sticker",{rotation:-18},{rotation:0,duration:.22,ease:"power3.out"},${t.vi + 0.2});
pulse("#s1-pb",${t.ia},1.05,.35);
` });
}
// S2 — o projeto: banner real + card do repositório
{
  const t = { o: at("O projeto"), ch: at("chama"), nm: at("OpenHigsfield"), ai: at("AI"), di: at("disponível"), gh: at("GitHub.") };
  V.scene({ id: "s2", t0: 6.67, t1: 11.47, in: "zoom", push: 0.04, html: `
    <div class="abs shot" id="s2-ban" style="left:280px;top:320px;width:520px;height:520px;border-color:rgba(139,92,246,.7)"><img src="${P3("oh_banner.jpg")}"/></div>
    <div class="abs" id="s2-gh" style="left:70px;top:880px">${gh3({ id: "s2-card", owner: "Anil-matcha", repo: "Open-Higgsfield-AI", avatar: P3("av_anil.png"), nameId: "s2-nm" })}</div>
    <div class="abs" id="s2-seal" style="left:640px;top:810px"><div class="sticker" style="font-size:40px;background:#fff;color:#111"><img src="assets/logos/github-icon.svg" style="width:46px;height:46px"/>no GitHub</div></div>
    <div class="exm" id="s2-lb" style="left:300px;top:282px;color:#c4b5fd">banner real do repositório</div>
  `, js: `
fromTo("#s2-ban",{opacity:0,scale:.86,rotationX:-20,transformPerspective:1400,filter:"blur(10px)"},{opacity:1,scale:1,rotationX:0,filter:"blur(0px)",duration:.6,ease:E.expo},${t.o - 0.05});${S("whoosh", t.o - 0.1, .45)}
inn("#s2-lb",${t.o + 0.3},"fade",.3);
inn("#s2-gh",${t.ch - 0.15},"rise",.45);
type("#s2-nm",${t.nm - 0.05},.9);${S("typing", t.nm - 0.05, .6)}
pulse("#s2-card",${t.ai},1.03,.3);
inn("#s2-seal",${t.gh - 0.1},"slam");${S("impact", t.gh - 0.08, .7)}
` });
}
// S3 — o que ele faz: demo real (recorte do docs/assets/demo.mp4) + "Try it Online — No Install Required"
{
  const t = { e: at("Ele"), re: at("recursos"), ge: at("geração"), vi: at("vídeos", 2), op: at("opção"), te: at("testar"), na: at("navegador.") };
  V.scene({ id: "s3", t0: 11.47, t1: 18.67, in: "rise", push: 0.03, html: `
    <div class="abs" id="s3-k" style="left:70px;top:300px"><div class="lbl" style="color:${LI}">▶ demo real do repositório</div></div>
    <div class="vidcard" id="s3-ph" style="left:40px;top:350px;width:1000px;height:600px;background:#000"></div>
    <div class="abs row gap16" id="s3-ch" style="left:70px;top:990px">
      <div class="chipx" id="s3-c1" style="background:${LI};color:#0b0d05">${icon("sparkles", "#0b0d05", 2.4)}geração com IA</div>
      <div class="chipx" id="s3-c2" style="background:#1d1d24;color:#fff;border:2px solid #34343f">${icon("film", LI, 2.4)}vídeos</div>
    </div>
    <div class="abs" id="s3-url" style="left:70px;top:1090px;width:940px;height:96px;border-radius:48px;background:#18181d;border:2px solid #34343f;display:flex;align-items:center;gap:16px;padding:0 30px;font:600 34px Inter;color:#e4e4e7">
      <div style="width:36px;height:36px">${icon("globe", LI, 2.2)}</div><span id="s3-ut" data-text="muapi.ai/open-generative-ai"></span>
      <div id="s3-ni" class="sticker" style="margin-left:auto;font-size:26px;padding:10px 20px;background:${LI};color:#0b0d05">${icon("check", "#0b0d05", 3)}sem instalar</div></div>
  `, js: `
inn("#s3-k",${t.e},"fade",.3);
inn("#s3-ph",${t.e - 0.05},"bscale",.5);
inn("#s3-c1",${t.ge - 0.1},"pop",.35);${S("pop", t.ge - 0.1, .6)}
inn("#s3-c2",${t.vi - 0.1},"pop",.35);${S("pop", t.vi - 0.1, .55)}
inn("#s3-url",${t.op - 0.1},"up",.4);${S("whoosh_s", t.op - 0.15, .4)}
type("#s3-ut",${t.te - 0.05},.8);${S("typing", t.te - 0.05, .5)}
inn("#s3-ni",${t.na - 0.1},"slam");${S("confirm", t.na, .6)}
` });
  // vídeo real por cima da cena (fora do .cam para o player de mídia do HyperFrames)
  V.overlayHtml += `<div id="s3-vw" style="position:absolute;left:42px;top:352px;width:996px;height:596px;opacity:0;overflow:hidden;border-radius:28px;z-index:3"><video id="s3-vid" src="assets/video/oh_demo_cut.mp4" muted playsinline data-start="11.47" data-duration="7.2" data-track-index="5" data-media-start="0" style="display:block;width:996px;height:598px;object-fit:cover"></video></div>`;
  V.extraJs.push(`tl.fromTo("#s3-vw",{opacity:0,scale:.94,filter:"blur(10px)"},{opacity:1,scale:1,filter:"blur(0px)",duration:.5,ease:"expo.out",immediateRender:true},${(t.e - 0.05).toFixed(2)});tl.to("#s3-vw",{opacity:0,duration:.25},18.4);`);
}
// S4 — CTA VÍDEO
{
  const t = { q: at("Quer"), co: at("Comenta"), w: at("vídeo"), seg: at("repositório.") };
  V.scene({ id: "s4", t0: 18.67, t1: V.dur, last: true, in: "zoom", push: 0.03,
    html: ctaHtml2("s4", { pre: `quer <span class="hlbox" style="color:#0b0d05">conhecer?</span>`, word: "VÍDEO", color: LI, follow: false }),
    js: ctaJs2(V, "s4", { q: t.q, co: t.co, word: t.w, seg: t.seg, follow: false }) });
}
V.write(`${OUT}/projeto`);
