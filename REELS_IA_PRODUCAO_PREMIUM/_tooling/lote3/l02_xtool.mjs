// LOTE 3 · 02 — XTOOL + CLAUDE CODE (Mário 17:38) · ref billyia_
// Reais (repositório xtool-org/xtool): descrição do README, subcomandos (dev/install), ícone Linux/xtool.png,
// screenshots do tutorial (HelloWorld.png, Home.png, Verified.png), código do ContentView e linhas da saída de
// `xtool dev` que aparecem no Cover.png. O pedido ao Claude Code é exemplo (a fala diz "imagine").
import fs from "node:fs";
import { Video, icon } from "../lib/build.mjs";
import { KIT2_CSS, ctaHtml2, ctaJs2 } from "../lib/kit2.mjs";
import { KIT3_CSS, L3ROOT, P3, narr, gh3, words } from "../lib/kit3.mjs";

const DIR = "02_XTOOL", OUT = `${L3ROOT}/${DIR}`;
const BL = "#0a84ff", GR = "#1d1d1f", BG = "#f5f5f7", IN = "#5e5ce6", GN = "#30d158", OR = "#ff9f0a";
// correções só na legenda: "X Tool" → xtool, "X Code" → Xcode, "Clod/Cloud" → Claude, "Swift UI" → SwiftUI
const raw = JSON.parse(fs.readFileSync(narr(DIR), "utf8")), fixes = {};
raw.forEach((w, i) => {
  const nx = raw[i + 1]?.text || "";
  if (w.text === "X" && /^Tool/.test(nx)) { fixes[`X@${i}`] = ""; fixes[`${nx}@${i + 1}`] = nx.replace("Tool", "xtool"); }
  if (w.text === "X" && /^Code/.test(nx)) { fixes[`X@${i}`] = ""; fixes[`${nx}@${i + 1}`] = nx.replace("Code", "Xcode"); }
  if (w.text === "Swift" && /^UI/.test(nx)) { fixes[`Swift@${i}`] = "SwiftUI" + nx.slice(2); fixes[`${nx}@${i + 1}`] = ""; }
  if (w.text === "Clod" || w.text === "Cloud") fixes[`${w.text}@${i}`] = "Claude";
});
const V = new Video({
  id: "l3-02", title: "xtool + Claude Code", kit2: true, theme: "light", capMaxWords: 3, capMaxChars: 18,
  wordsPath: narr(DIR), audioDur: 89.3, fixes,
  accent: BL, capKey: BL, vars: { a1: BL, a2: IN, a3: OR, capbg: BL, capfg: "#fff", ink: GR },
  keywords: ["Mac", "iPhone.", "Claude", "Tool,", "multiplataforma", "Swift", "Windows", "Linux.", "telas,", "componentes", "estrutura", "compilação", "instalação", "flexível", "nativos", "gratuitamente", "natural.", "app"],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
V.extraCss = KIT2_CSS + KIT3_CSS + `
#root{background:${BG}} .theme-light .bg{background:radial-gradient(120% 80% at 50% 0%,#ffffff 0%,${BG} 60%,#e8e8ed 100%)}
.theme-light .bg-grid{background-image:radial-gradient(rgba(29,29,31,.08) 2px,transparent 2.5px)}
.theme-light .bg-glow.a{background:radial-gradient(circle,rgba(10,132,255,.20),transparent 62%)} .theme-light .bg-glow.b{background:radial-gradient(circle,rgba(94,92,230,.16),transparent 62%)}
.theme-light .vignette{background:radial-gradient(130% 85% at 50% 42%,transparent 62%,rgba(0,0,30,.10) 100%)}
.wcard{background:#fff;border-radius:34px;box-shadow:0 30px 80px rgba(0,0,40,.12),0 2px 0 rgba(255,255,255,.9) inset;border:1.5px solid rgba(0,0,0,.06)}
.code{position:absolute;border-radius:28px;background:#1e1e1e;box-shadow:0 40px 100px rgba(0,0,40,.25);overflow:hidden}
.code .cb{height:56px;display:flex;align-items:center;gap:10px;padding:0 22px;background:#2a2a2a;font:600 22px "JetBrains Mono";color:#9a9a9a}
.code .cb i{display:block;width:16px;height:16px;border-radius:50%}
.code pre{margin:0;padding:20px 26px;font:500 23px/1.55 "JetBrains Mono";color:#d4d4d4;white-space:pre}
.code .k{color:#c586c0}.code .t{color:#4ec9b0}.code .s{color:#ce9178}.code .f{color:#dcdcaa}.code .c{color:#6a9955}.code .p{color:${GN}}
.lnk{display:block}
.tree{font:500 29px/1.6 "JetBrains Mono";color:${GR}}
.tree .d{color:${BL};font-weight:700}
.node3{display:flex;align-items:center;gap:20px;padding:22px 26px;border-radius:26px;background:#fff;border:2px solid rgba(0,0,0,.08);box-shadow:0 18px 40px rgba(0,0,40,.10);font:700 32px "JetBrains Mono";color:${GR}}
.node3 .ni{width:64px;height:64px;border-radius:18px;display:grid;place-items:center;background:#eef1f6}
.node3 .ni svg{width:60%;height:60%}
.sk{position:absolute;border-radius:16px;background:#e5e5ea;border:3px dashed #c7c7cc}
.persona{display:flex;align-items:center;gap:20px;padding:24px 34px;border-radius:30px;font:800 44px Inter;background:#fff;box-shadow:0 20px 50px rgba(0,0,40,.12)}
.persona .pi{width:72px;height:72px;border-radius:20px;display:grid;place-items:center}
.persona .pi svg{width:62%;height:62%}
.spd{position:absolute;height:6px;border-radius:3px;background:linear-gradient(90deg,transparent,${BL})}
`;
const SW = [at("E o mais"), at("Existe"), at("Basicamente,"), at("Isso"), at("E é"), at("Com o", 2), at("Ou"), at("E o melhor,"), at("Para quem"), at("Se você")];
SW.forEach((t, i) => V.swipe(t - 0.05, [BL, IN, GR][i % 3]));
const T = { s2: SW[0] - 0.08, s3: SW[1] - 0.08, s4: SW[2] - 0.08, s5: SW[3] - 0.08, s6: SW[4] - 0.08, s7: SW[5] - 0.08, s8: SW[6] - 0.08, s9: SW[7] - 0.08, s10: SW[8] - 0.08, s11: SW[9] - 0.08 };

// ---------- iPhone persistente (overlay): atravessa s1→s8 e troca de tela conforme o app "nasce" ----------
const PH = { iph: at("iPhone."), comb: at("combinar"), cc: at("Clod"), te: at("telas,"), cm: at("componentes"), es: at("estrutura"), ins: at("instalação"), req: at("requisitos"), fx: at("flexível"), nat: at("nativos"), hello: 0 };
V.overlayHtml += `
<div id="ph" style="position:absolute;left:325px;top:330px;width:430px;height:900px;opacity:0;z-index:4">
  <div class="iph" style="left:0;top:0"><div class="scr">
    <div class="isl"></div>
    <div id="ph-wall" style="position:absolute;inset:0;background:linear-gradient(160deg,#0a84ff,#5e5ce6 60%,#bf5af2)">
      <div style="position:absolute;top:120px;width:100%;text-align:center;font:600 120px Inter;color:#fff;letter-spacing:-.03em">9:41</div>
      <div id="ph-slot" style="position:absolute;left:150px;top:420px;width:120px;height:120px;border-radius:30px;border:5px dashed rgba(255,255,255,.75);display:grid;place-items:center;font:800 54px Inter;color:#fff">?</div>
    </div>
    <div id="ph-wire" style="position:absolute;inset:0;background:#fff;opacity:0">
      <div class="sk" id="sk0" style="left:30px;top:90px;width:340px;height:56px"></div>
      <div class="sk" id="sk1" style="left:30px;top:180px;width:340px;height:190px"></div>
      <div class="sk" id="sk2" style="left:30px;top:395px;width:160px;height:160px"></div>
      <div class="sk" id="sk3" style="left:210px;top:395px;width:160px;height:160px"></div>
      <div class="sk" id="sk4" style="left:30px;top:600px;width:340px;height:80px;border-radius:40px"></div>
    </div>
    <img id="ph-hello" src="${P3("xt_hello.jpg")}" style="opacity:0"/>
    <img id="ph-home" src="${P3("xt_home.jpg")}" style="opacity:0"/>
    <img id="ph-ver" src="${P3("xt_verified.jpg")}" style="opacity:0"/>
  </div></div>
</div>`;
const sk = [0, 1, 2, 3, 4];
V.extraJs.push(`
tl.fromTo("#ph",{opacity:0,y:700,scale:.9},{opacity:1,y:0,scale:.9,duration:.7,ease:"back.out(1.3)",immediateRender:true},${(PH.iph - 0.25).toFixed(2)});
tl.to("#ph",{x:215,scale:.8,duration:.6,ease:"power3.inOut"},${(PH.comb - 0.1).toFixed(2)});
tl.to("#ph",{x:760,opacity:0,duration:.45,ease:"power2.in"},${(T.s3 - 0.3).toFixed(2)});
tl.set("#ph",{x:215,y:40,scale:.78},${(T.s5 - 0.05).toFixed(2)});
tl.fromTo("#ph",{opacity:0,y:300},{opacity:1,y:40,duration:.6,ease:"expo.out",immediateRender:false},${(T.s5 + 0.15).toFixed(2)});
tl.to("#ph",{x:0,y:20,scale:.86,duration:.7,ease:"power3.inOut"},${(T.s8 + 0.05).toFixed(2)});
tl.fromTo("#ph",{rotationY:0,transformPerspective:1600},{rotationY:-16,duration:1.6,ease:"sine.inOut",yoyo:true,repeat:2,immediateRender:false},${(T.s8 + 0.8).toFixed(2)});
tl.to("#ph",{y:900,opacity:0,duration:.45,ease:"power2.in"},${(T.s9 - 0.3).toFixed(2)});
tl.fromTo("#ph-slot",{scale:1},{scale:1.12,duration:.35,yoyo:true,repeat:5,ease:"sine.inOut",immediateRender:false},${(PH.iph + 0.5).toFixed(2)});
// s6: wireframe → componentes encaixam
tl.to("#ph-wall",{opacity:0,duration:.3},${(T.s5 + 0.1).toFixed(2)});
tl.to("#ph-wire",{opacity:1,duration:.3},${(PH.te - 0.1).toFixed(2)});
${sk.map((i) => `tl.fromTo("#sk${i}",{scale:.5,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(2)",immediateRender:false},${(PH.te + i * 0.12).toFixed(2)});tl.to("#sk${i}",{backgroundColor:"${[BL, "#e8f0ff", "#ffd9a8", "#c9f2d4", BL][i]}",borderColor:"rgba(0,0,0,0)",duration:.25},${(PH.cm + i * 0.1).toFixed(2)});`).join("\n")}
// s7: instalação (Home.png real) → requisitos (Verified.png real) ; s8 volta ao Hello World
tl.to("#ph-home",{opacity:1,duration:.3},${(PH.ins + 0.2).toFixed(2)});
tl.to("#ph-ver",{opacity:1,duration:.3},${(PH.req - 0.1).toFixed(2)});
tl.to("#ph-ver",{opacity:0,duration:.3},${(T.s8 + 0.1).toFixed(2)});tl.to("#ph-home",{opacity:0,duration:.01},${(T.s8 + 0.4).toFixed(2)});
`);

// S1 — gancho: a corrente que prendia ao Mac se parte
{
  const t = { ne: at("não"), ex: at("exclusivamente"), mac: at("Mac"), dv: at("desenvolver"), ap: at("aplicativos"), ip: at("iPhone.") };
  V.scene({ id: "s1", t0: 0, t1: T.s2, in: "none", push: 0.045, html: `
    <div class="abs center-x tc" id="s1-h" style="top:310px;width:1040px"><div class="kw" style="font-size:150px;color:${GR}">${words("SEM MAC?")}</div></div>
    <div class="abs" id="s1-mac" style="left:120px;top:560px;width:440px;height:300px">
      <div style="width:440px;height:270px;border-radius:22px;background:#2c2c2e;border:12px solid #3a3a3c;display:grid;place-items:center"><div style="width:90px;height:90px">${icon("laptop", "#8e8e93", 1.6)}</div></div>
      <div style="width:520px;height:22px;margin-left:-40px;border-radius:0 0 18px 18px;background:#3a3a3c"></div>
      <div class="sticker dark" style="position:absolute;left:110px;top:300px;font-size:30px">só no Mac</div></div>
    <div class="abs" id="s1-ch" style="left:560px;top:690px;width:300px;height:60px">
      ${[0, 1, 2, 3].map((i) => `<div id="s1-l${i}" style="position:absolute;left:${i * 70}px;top:0;width:86px;height:46px;border-radius:23px;border:10px solid #8e8e93"></div>`).join("")}</div>
    <div class="abs" id="s1-ip0" style="left:860px;top:600px;width:140px;height:250px;border-radius:30px;background:#1d1d1f;border:6px solid #3a3a3c"></div>
  `, js: `
inn("#s1-h .wd",0.02,"blur",.5,{stagger:.1});${S("whoosh_s", 0.02, .45)}
inn("#s1-mac",0.25,"bscale",.5);inn("#s1-ch",0.35,"fade",.3);inn("#s1-ip0",0.4,"bscale",.5);
fromTo("#s1-ch",{scaleX:1},{scaleX:1.12,duration:.5,ease:"sine.inOut",transformOrigin:"left center"},${t.ne});
${[0, 1, 2, 3].map((i) => `fromTo("#s1-l${i}",{y:0,rotation:0,opacity:1},{y:${380 + i * 60},rotation:${[-70, 50, -40, 80][i]},opacity:0,duration:.9,ease:"power2.in"},${(t.ex + 0.25 + i * 0.05).toFixed(2)});`).join("")}${S("glitch", t.ex + 0.2, .5)}${S("drop", t.ex + 0.3, .6)}
pulse("#s1-mac",${t.mac},1.04,.3);
to("#s1-mac",{opacity:0,filter:"blur(14px)",x:-80,duration:.5},${t.ip - 0.5});to("#s1-ip0",{opacity:0,duration:.3},${t.ip - 0.35});
to("#s1-h",{y:-40,opacity:0,filter:"blur(12px)",duration:.4},${t.ip - 0.35});${S("whoosh", t.ip - 0.3, .5)}
` });
}
// S2 — + Claude Code
{
  const t = { mi: at("interessante"), co: at("combinar"), cc: at("Clod"), cd: at("Code.") };
  V.scene({ id: "s2", t0: T.s2, t1: T.s3, in: "cut", push: 0.03, html: `
    <div class="abs center-x tc" id="s2-h" style="top:310px;width:1040px"><div class="kw" style="font-size:104px;color:${GR}">${words("agora com o")}</div></div>
    <div class="abs" id="s2-cc" style="left:90px;top:620px;width:300px;height:300px;border-radius:72px;background:#fff;box-shadow:0 30px 80px rgba(0,0,40,.16);display:grid;place-items:center"><img src="assets/logos/claude-icon.svg" style="width:62%;height:62%"/></div>
    <div class="abs tc" id="s2-ccl" style="left:40px;top:950px;width:400px;font:800 46px Inter;color:${GR}">Claude Code</div>
    <div class="abs" id="s2-plus" style="left:420px;top:700px;width:130px;height:130px;border-radius:50%;background:${BL};display:grid;place-items:center;box-shadow:0 20px 50px rgba(10,132,255,.35)"><div style="width:60%;height:60%">${icon("plus", "#fff", 3)}</div></div>
  `, js: `
inn("#s2-h .wd",${T.s2 + 0.05},"blur",.45,{stagger:.08});
inn("#s2-plus",${t.co},"pop",.4);${S("pop", t.co, .6)}pulse("#s2-plus",${t.co + 0.6},1.15,.4);
inn("#s2-cc",${t.cc - 0.1},"pop",.45);${S("impact", t.cc - 0.08, .55)}
inn("#s2-ccl",${t.cd - 0.1},"blur",.4);
` });
}
// S3 — o repositório real xtool-org/xtool
{
  const t = { ex: at("Existe"), ca: at("código", 1), ch: at("chamado"), xt: at("Tool,"), at: at("atenção"), de: at("desenvolve") };
  V.scene({ id: "s3", t0: T.s3, t1: T.s4, in: "zoom", push: 0.035, html: `
    <div class="abs" id="s3-ic" style="left:390px;top:300px;width:300px;height:300px"><img src="${P3("xt_icon.png")}" style="width:100%;height:100%;border-radius:68px"/></div>
    <div class="abs center-x tc" id="s3-nm" style="top:630px;width:1000px"><div class="kw" style="font:700 150px 'JetBrains Mono';letter-spacing:-.04em;color:${GR}"><span id="s3-ty" data-text="xtool"></span><span style="color:${BL}">_</span></div></div>
    <div class="abs" id="s3-gh" style="left:70px;top:830px">${gh3({ id: "s3-card", owner: "xtool-org", repo: "xtool", avatar: P3("av_xtool.png"), desc: "Cross-platform Xcode replacement. Build and deploy iOS apps with SwiftPM on Linux, Windows, and macOS." })}</div>
    <div class="abs" id="s3-os" style="left:760px;top:790px"><div class="sticker" style="font-size:32px;background:${GN};color:#fff">${icon("code-xml", "#fff", 2.4)}código aberto</div></div>
  `, js: `
inn("#s3-ic",${t.ex - 0.05},"bscale",.5);${S("whoosh_s", t.ex - 0.1, .45)}
inn("#s3-os",${t.ca - 0.1},"pop",.4);${S("pop", t.ca - 0.1, .55)}
inn("#s3-nm",${t.ch - 0.05},"fade",.2);type("#s3-ty",${t.xt - 0.3},.45);${S("typing", t.xt - 0.3, .45)}
inn("#s3-gh",${t.xt + 0.3},"rise",.5);
glow("#s3-card",${t.at - 0.2},"rgba(10,132,255,.55)",.4);
` });
}
// S4 — o que ele substitui: Xcode (macOS) × xtool (multiplataforma)
{
  const t = { ba: at("Basicamente,"), fu: at("funciona"), al: at("alternativa"), mu: at("multiplataforma"), fe: at("ferramentas"), xc: at("Code.", 1) };
  const xcIdx = V.words.findIndex((w) => w.disp === "Xcode."); const tXc = +V.words[xcIdx].start.toFixed(3);
  V.scene({ id: "s4", t0: T.s4, t1: T.s5, in: "left", push: 0.03, html: `
    <div class="abs center-x tc" id="s4-h" style="top:310px;width:1040px"><div class="kw" style="font-size:96px;color:${GR}">${words("uma alternativa")}</div><div class="kw" style="font-size:96px;color:${BL}">${words("multiplataforma")}</div></div>
    <div class="abs wcard tc" id="s4-a" style="left:60px;top:640px;width:440px;height:440px;padding-top:60px">
      <div style="width:140px;height:140px;margin:0 auto 26px;border-radius:36px;background:#e5e5ea;display:grid;place-items:center"><div style="width:60%;height:60%">${icon("hammer", "#8e8e93", 2)}</div></div>
      <div style="font:800 56px Inter;color:${GR}">Xcode<div id="s4-ul" style="height:8px;border-radius:4px;background:${OR};width:220px;margin:6px auto 0"></div></div>
      <div style="font:600 32px Inter;color:#8e8e93;margin-top:14px">só macOS</div></div>
    <div class="abs wcard tc" id="s4-b" style="left:580px;top:640px;width:440px;height:440px;padding-top:30px;border:3px solid ${BL}">
      <div style="position:relative;width:200px;height:200px;margin:0 auto 6px">
        <img src="${P3("xt_icon.png")}" style="position:absolute;left:50px;top:50px;width:100px;height:100px;border-radius:24px"/>
        <div id="s4-orb" style="position:absolute;inset:0">
          <div style="position:absolute;left:76px;top:-20px;width:52px;height:52px;border-radius:14px;background:#fff;box-shadow:0 6px 16px rgba(0,0,0,.15);display:grid;place-items:center"><img src="assets/logos/linux-tux.svg" style="width:70%"/></div>
          <div style="position:absolute;left:-6px;top:128px;width:52px;height:52px;border-radius:14px;background:#fff;box-shadow:0 6px 16px rgba(0,0,0,.15);display:grid;place-items:center"><img src="assets/logos/microsoft-icon.svg" style="width:62%"/></div>
          <div style="position:absolute;left:158px;top:128px;width:52px;height:52px;border-radius:14px;background:#fff;box-shadow:0 6px 16px rgba(0,0,0,.15);display:grid;place-items:center"><div style="width:62%;height:62%">${icon("apple", GR, 2)}</div></div>
        </div></div>
      <div style="font:800 56px 'JetBrains Mono';color:${GR}">xtool</div>
      <div style="font:600 30px Inter;color:${BL};margin-top:10px">Linux · Windows · macOS</div></div>
  `, js: `
inn("#s4-h .wd",${t.ba},"blur",.45,{stagger:.1});
inn("#s4-a",${t.fu - 0.1},"left",.45);${S("whoosh_s", t.fu - 0.1, .4)}
inn("#s4-b",${t.al - 0.1},"right",.45);${S("pop", t.al, .5)}
fromTo("#s4-orb",{rotation:0},{rotation:120,duration:.9,ease:"back.out(1.4)"},${t.mu - 0.1});${S("whoosh_s", t.mu - 0.1, .4)}
fromTo("#s4-orb",{rotation:120},{rotation:240,duration:1.6,ease:"power2.inOut"},${t.mu + 1.2});
strike("#s4-ul",${tXc - 0.1},.35);${S("click", tXc - 0.05, .55)}
` });
}
// S5 — Swift/SwiftUI (código real do tutorial) → tela real "Hello, world!" no iPhone; Windows e Linux
{
  const t = { is: at("Isso"), tr: at("trabalhar"), io: at("iOS"), sw: at("Swift"), su: at("Swift", 2), wi: at("Windows"), li: at("Linux.") };
  const L = [`<span class="k">import</span> SwiftUI`, ``, `<span class="k">struct</span> <span class="t">ContentView</span>: <span class="t">View</span> {`, `  <span class="k">var</span> body: <span class="k">some</span> <span class="t">View</span> {`, `    <span class="t">VStack</span> {`, `      <span class="t">Image</span>(systemName: <span class="s">"globe"</span>)`, `        .<span class="f">imageScale</span>(.large)`, `        .<span class="f">foregroundStyle</span>(.tint)`, `      <span class="t">Text</span>(<span class="s">"Hello, world!"</span>)`, `    }`, `    .<span class="f">padding</span>()`, `  }`, `}`];
  const tl0 = t.tr, step = (t.su + 0.3 - tl0) / L.length;
  V.scene({ id: "s5", t0: T.s5, t1: T.s6, in: "rise", push: 0.03, html: `
    <div class="abs" id="s5-k" style="left:60px;top:310px"><div class="kw" style="font-size:78px;color:${GR}">${words("apps para")} <span class="wd" style="color:${BL}">iOS</span></div></div>
    <div class="code" id="s5-ed" style="left:40px;top:430px;width:560px;height:560px"><div class="cb"><i style="background:#ff5f57"></i><i style="background:#febc2e"></i><i style="background:#28c840"></i><span style="margin-left:12px">ContentView.swift</span></div>
      <pre>${L.map((l, i) => `<span class="lnk" id="s5-l${i}">${l || " "}</span>`).join("")}</pre></div>
    <div class="exm" id="s5-lb" style="left:610px;top:405px;color:#6e6e73;white-space:nowrap;font-size:19px">tela real · tutorial do xtool</div>
    <div class="abs" id="s5-c0" style="left:40px;top:1020px"><div class="chipx" style="background:${OR};color:#fff">${icon("bird", "#fff", 2.4)}Swift</div></div>
    <div class="abs" id="s5-c1" style="left:290px;top:1020px"><div class="chipx" style="background:${BL};color:#fff">${icon("layout-template", "#fff", 2.4)}SwiftUI</div></div>
    <div class="abs" id="s5-c2" style="left:40px;top:1120px"><div class="chipx" style="background:#fff;color:${GR};box-shadow:0 12px 30px rgba(0,0,40,.12)"><img src="assets/logos/microsoft-icon.svg"/>Windows</div></div>
    <div class="abs" id="s5-c3" style="left:350px;top:1120px"><div class="chipx" style="background:#fff;color:${GR};box-shadow:0 12px 30px rgba(0,0,40,.12)"><img src="assets/logos/linux-tux.svg"/>Linux</div></div>
  `, js: `
inn("#s5-k .wd",${T.s5 + 0.05},"blur",.45,{stagger:.08});
inn("#s5-ed",${t.is + 0.1},"bscale",.5);
${L.map((_, i) => `set("#s5-l${i}",{opacity:0},${T.s5});set("#s5-l${i}",{opacity:1},${(tl0 + i * step).toFixed(2)});`).join("")}${S("typing", tl0, .45)}${S("typing", tl0 + 1.4, .4)}${S("typing", tl0 + 2.8, .4)}
inn("#s5-c0",${t.sw - 0.08},"pop",.35);${S("pop", t.sw - 0.08, .6)}
inn("#s5-c1",${t.su - 0.08},"pop",.35);${S("pop", t.su - 0.08, .6)}
inn("#s5-lb",${t.su + 0.3},"fade",.3);
inn("#s5-c2",${t.wi - 0.08},"pop",.35);${S("pop", t.wi - 0.08, .6)}
inn("#s5-c3",${t.li - 0.08},"pop",.35);${S("pop", t.li - 0.08, .6)}
` });
  V.extraJs.push(`tl.fromTo("#ph-hello",{opacity:0},{opacity:1,duration:.35,immediateRender:false},${(t.su + 0.35).toFixed(2)});${S("confirm", t.su + 0.35, .55)}tl.to("#ph-hello",{opacity:0,duration:.25},${(T.s6 + 0.2).toFixed(2)});tl.to("#ph-hello",{opacity:1,duration:.35},${(T.s8 + 0.1).toFixed(2)});`);
}
// S6 — imagine pedir ao Claude Code (exemplo): telas, componentes, estrutura (árvore real de um projeto xtool)
{
  const t = { e: at("E é"), in: at("Imagine"), pe: at("pedir"), cc: at("Cloud"), ap: at("aplicativo,"), te: at("telas,"), cm: at("componentes"), es: at("estrutura"), pr: at("projeto.") };
  const tree = [`<span class="d">Hello/</span>`, `├ Package.swift`, `├ xtool.yml`, `└ <span class="d">Sources/Hello/</span>`, `   ├ HelloApp.swift`, `   └ ContentView.swift`];
  V.scene({ id: "s6", t0: T.s6, t1: T.s7, in: "zoom", push: 0.03, html: `
    <div class="abs" id="s6-h" style="left:60px;top:300px"><div class="kw" style="font-size:84px;color:${GR}">${words("e aqui fica")}</div><div class="kw" style="font-size:84px;color:${BL}">${words("interessante")}</div></div>
    <div class="code" id="s6-t" style="left:40px;top:520px;width:560px;height:330px;background:#141414"><div class="cb"><img src="assets/logos/claude-icon.svg" style="width:28px;height:28px"/><span style="margin-left:6px">Claude Code</span><span style="margin-left:auto;font-size:18px;color:#777">exemplo</span></div>
      <pre style="white-space:pre-wrap;font-size:26px"><span class="p">&gt;</span> <span id="s6-pr" data-text="crie um app para iPhone em SwiftUI: telas, componentes e toda a estrutura do projeto"></span></pre></div>
    <div class="abs wcard" id="s6-tr" style="left:40px;top:880px;width:560px;padding:24px 30px"><div class="tree">${tree.map((l, i) => `<span class="lnk" id="s6-r${i}">${l}</span>`).join("")}</div></div>
    <div class="abs" id="s6-c1" style="left:600px;top:385px"><div class="sticker" style="font-size:26px;padding:12px 22px;background:${BL};color:#fff">${icon("smartphone", "#fff", 2.4)}telas</div></div>
    <div class="abs" id="s6-c2" style="left:785px;top:385px"><div class="sticker" style="font-size:26px;padding:12px 22px;background:${OR};color:#fff">${icon("blocks", "#fff", 2.4)}componentes</div></div>
  `, js: `
inn("#s6-h .wd",${t.e},"blur",.45,{stagger:.08});
inn("#s6-t",${t.in - 0.1},"bscale",.5);${S("whoosh_s", t.in - 0.15, .4)}
type("#s6-pr",${t.pe},${(t.te - t.pe - 0.2).toFixed(2)});${S("typing", t.pe, .5)}${S("typing", t.pe + 1.6, .45)}
inn("#s6-c1",${t.te - 0.08},"pop",.35);${S("pop_multi", t.te - 0.05, .5)}
inn("#s6-c2",${t.cm - 0.08},"pop",.35);${S("click", t.cm, .6)}
inn("#s6-tr",${t.es - 0.3},"up",.4);
${tree.map((_, i) => `inn("#s6-r${i}",${(t.es - 0.1 + i * 0.12).toFixed(2)},"left",.3);`).join("")}${S("pop_multi", t.es, .45)}
` });
}
// S7 — compilar e instalar (subcomandos reais + linhas reais da saída de `xtool dev` no Cover.png)
{
  const t = { co: at("Com o", 2), le: at("levar"), et: at("etapas"), cp: at("compilação"), ins: at("instalação"), di: at("dispositivos"), re: at("respeitando"), rq: at("requisitos"), ap: at("Apple.") };
  const log = [[`<span class="p">$</span> xtool dev`, t.co + 0.6], [`Building for debugging...`, t.et], [`Build of product 'Hello-App' complete!`, t.cp + 0.2], [`[Signing] 100%`, t.ins - 0.35], [`[Installing] 100%`, t.ins + 0.1], [`[Verifying] 100%`, t.di]];
  V.scene({ id: "s7", t0: T.s7, t1: T.s8, in: "left", push: 0.03, html: `
    <div class="abs" id="s7-h" style="left:60px;top:300px"><div class="kw" style="font-size:80px;color:${GR}">${words("compilar e")}</div><div class="kw" style="font-size:80px;color:${BL}">${words("instalar")}</div></div>
    <div class="abs col gap16" style="left:40px;top:510px;width:560px">
      <div class="node3" id="s7-n0"><div class="ni">${icon("hammer", BL, 2.2)}</div>xtool dev</div>
      <div class="node3" id="s7-n1"><div class="ni">${icon("pen-tool", IN, 2.2)}</div>assinar</div>
      <div class="node3" id="s7-n2"><div class="ni">${icon("smartphone", GN, 2.2)}</div>xtool install</div>
    </div>
    <div class="code" id="s7-log" style="left:40px;top:900px;width:560px;height:290px;background:#141414"><div class="cb" style="height:44px;font-size:18px">saída real · README do xtool</div>
      <pre style="font-size:21px;padding:14px 22px">${log.map(([l], i) => `<span class="lnk" id="s7-g${i}">${l}</span>`).join("")}</pre></div>
    <div class="abs" id="s7-req" style="left:560px;top:370px"><div class="sticker" style="font-size:28px;background:${GR};color:#fff">${icon("shield-check", GN, 2.4)}requisitos da Apple</div></div>
  `, js: `
inn("#s7-h .wd",${t.co},"blur",.45,{stagger:.08});
${[0, 1, 2].map((i) => `inn("#s7-n${i}",${(t.le + i * 0.15).toFixed(2)},"left",.4);`).join("")}${S("pop_multi", t.le, .5)}
inn("#s7-log",${t.et - 0.3},"up",.4);
${log.map(([, tt], i) => `set("#s7-g${i}",{opacity:0},${T.s7});set("#s7-g${i}",{opacity:1},${tt.toFixed(2)});`).join("")}${S("typing", t.co + 0.6, .45)}
glow("#s7-n0",${t.cp - 0.1},"rgba(10,132,255,.5)",.3);${S("click", t.cp, .55)}
glow("#s7-n1",${t.ins - 0.35},"rgba(94,92,230,.5)",.3);
glow("#s7-n2",${t.ins + 0.1},"rgba(48,209,88,.6)",.3);${S("ding", t.ins + 0.25, .6)}
inn("#s7-req",${t.rq - 0.1},"slam");${S("confirm", t.rq, .6)}
` });
}
// S8 — mais flexível, apps nativos
{
  const t = { ou: at("Ou"), ma: at("maneira"), fl: at("flexível"), cr: at("criar", 2), na: at("nativos"), ip: at("iPhone.", 2) };
  V.scene({ id: "s8", t0: T.s8, t1: T.s9, in: "zoom", push: 0.04, html: `
    <div class="abs center-x tc" id="s8-w" style="top:560px;width:1080px"><div class="kw" style="font-size:210px;color:rgba(10,132,255,.16)">FLEXÍVEL</div></div>
    <div class="abs center-x tc" id="s8-h" style="top:310px;width:1040px"><div class="kw" style="font-size:90px;color:${GR}">${words("muito mais flexível")}</div></div>
    <div class="abs" id="s8-st" style="left:690px;top:1000px;color:${GN};transform:rotate(-10deg)"><div class="stamp" style="font-size:64px;background:rgba(255,255,255,.85)">nativo</div></div>
  `, js: `
inn("#s8-h .wd",${t.ou},"blur",.45,{stagger:.1});
inn("#s8-w",${t.fl - 0.1},"bscale",.6);${S("whoosh", t.fl - 0.15, .45)}
fromTo("#s8-w",{letterSpacing:"-0.045em"},{letterSpacing:"0.02em",duration:2.4,ease:"power2.out"},${t.fl});
fromTo("#s8-st",{scale:2.2,opacity:0,rotation:-24},{scale:1,opacity:1,rotation:-10,duration:.32,ease:"back.out(1.6)"},${t.na - 0.08});${S("stamp", t.na - 0.02, .8)}
` });
}
// S9 — grátis no GitHub
{
  const t = { e: at("E o melhor,"), pr: at("projeto", 3), gr: at("gratuitamente"), gh: at("GitHub.") };
  V.scene({ id: "s9", t0: T.s9, t1: T.s10, in: "rise", push: 0.035, html: `
    <div class="abs center-x tc" id="s9-h" style="top:310px;width:1040px"><div class="kw" style="font-size:100px;color:${GR}">${words("e o melhor:")}</div></div>
    <div class="abs" id="s9-gh" style="left:70px;top:560px">${gh3({ id: "s9-card", owner: "xtool-org", repo: "xtool", avatar: P3("av_xtool.png"), desc: "Cross-platform Xcode replacement. Build and deploy iOS apps with SwiftPM on Linux, Windows, and macOS.", tags: ["swift", "ios", "linux", "windows"] })}</div>
    <div class="abs" id="s9-st" style="left:560px;top:930px;color:${GN};transform:rotate(-8deg)"><div class="stamp" style="background:rgba(255,255,255,.9)">GRÁTIS</div></div>
  `, js: `
inn("#s9-h .wd",${t.e},"blur",.45,{stagger:.1});
inn("#s9-gh",${t.pr - 0.1},"rise",.5);${S("whoosh_s", t.pr - 0.1, .4)}
fromTo("#s9-st",{scale:2.4,opacity:0,rotation:-26},{scale:1,opacity:1,rotation:-8,duration:.32,ease:"back.out(1.6)"},${t.gr - 0.08});${S("stamp", t.gr - 0.02, .85)}
shake("#s9-gh",${t.gr + 0.2});
` });
}
// S10 — para quem é + linguagem natural → código
{
  const t = { pa: at("Para quem"), ia: at("inteligência"), pg: at("Programação"), cr: at("criação"), co: at("combinação"), ab: at("abre"), pr: at("principalmente"), ac: at("acelerar"), cm: at("comandos"), ln: at("linguagem"), na: at("natural.") };
  const P = [["inteligência artificial", "brain", IN, t.ia], ["programação", "code-xml", BL, t.pg], ["criação de apps", "smartphone", OR, t.cr]];
  V.scene({ id: "s10", t0: T.s10, t1: T.s11, in: "left", push: 0.03, html: `
    <div class="abs center-x tc" id="s10-h" style="top:300px;width:1040px"><div class="kw" style="font-size:84px;color:${GR}">${words("pra quem trabalha com")}</div></div>
    <div class="abs col gap20" id="s10-ps" style="left:90px;top:470px">
      ${P.map(([n, ic, c], i) => `<div class="persona" id="s10-p${i}"><div class="pi" style="background:${c}">${icon(ic, "#fff", 2.2)}</div>${n}</div>`).join("")}</div>
    ${[0, 1, 2, 3, 4, 5].map((i) => `<div class="spd" id="s10-sp${i}" style="left:${[60, 300, 120, 520, 200, 640][i]}px;top:${[860, 900, 1150, 960, 1080, 1180][i]}px;width:${[380, 260, 320, 300, 420, 280][i]}px"></div>`).join("")}
    <div class="abs wcard" id="s10-nl" style="left:70px;top:860px;width:940px;padding:28px 36px">
      <div class="lbl" style="color:${BL};opacity:1">linguagem natural</div>
      <div style="position:relative;height:150px;margin-top:10px">
        <div id="s10-pt" style="position:absolute;inset:0;font:700 44px Inter;color:${GR};line-height:1.25">"crie uma tela com um botão de entrar"</div>
        <pre id="s10-cd" style="position:absolute;inset:0;margin:0;font:500 30px/1.45 'JetBrains Mono';color:${GR};white-space:pre"><span style="color:#c586c0">Button</span>(<span style="color:#ce9178">"Entrar"</span>) {
  login()
}</pre></div>
      <div class="lbl" id="s10-ex" style="position:absolute;right:30px;top:30px">exemplo</div></div>
  `, js: `
inn("#s10-h .wd",${t.pa},"blur",.45,{stagger:.08});
${P.map(([, , , tt], i) => `inn("#s10-p${i}",${(tt - 0.1).toFixed(2)},"left",.4);${V.sfx("pop", tt - 0.1, 0.6)}`).join("\n")}
pulse("#s10-ps",${t.ab},1.04,.4);
${[0, 1, 2, 3, 4, 5].map((i) => `fromTo("#s10-sp${i}",{x:-300,opacity:0},{x:500,opacity:1,duration:.7,ease:"power2.in",repeat:2,immediateRender:false},${(t.ac - 0.1 + i * 0.08).toFixed(2)});`).join("")}${S("whoosh", t.ac - 0.1, .5)}
inn("#s10-nl",${t.ac + 0.9},"up",.45);
set("#s10-cd",{opacity:0},${T.s10});
fromTo("#s10-pt",{opacity:1,filter:"blur(0px)"},{opacity:0,filter:"blur(12px)",duration:.4},${t.ln});
fromTo("#s10-cd",{opacity:0,filter:"blur(12px)",y:16},{opacity:1,filter:"blur(0px)",y:0,duration:.45,ease:"expo.out"},${t.ln + 0.2});${S("shimmer", t.ln + 0.2, .6)}
` });
}
// S11 — CTA APP
{
  const t = { q: at("Se você"), co: at("comenta"), w: at("app"), seg: at("repositório.") };
  V.scene({ id: "s11", t0: T.s11, t1: V.dur, last: true, in: "zoom", push: 0.03,
    html: ctaHtml2("s11", { pre: `quer <span class="hlbox">aprender?</span>`, word: "APP", color: BL, follow: false }),
    js: ctaJs2(V, "s11", { q: t.q, co: t.co, word: t.w, seg: t.seg, follow: false }) });
}
V.write(`${OUT}/projeto`);
