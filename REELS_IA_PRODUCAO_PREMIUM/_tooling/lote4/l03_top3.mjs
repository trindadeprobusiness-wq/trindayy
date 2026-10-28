// LOTE 4 · 03 — TOP 3 DO GITHUB (Mário 10:22) · ref lowcodepedro · ESTILO CAMPEÃO
// Reais: anomalyco/opencode, plandex-ai/plandex, aaif-goose/goose (avatares, descrições e logos dos READMEs, comandos de instalação).
// Sem estrelas/downloads (a narração não cita números). Comparação de "peso" e checklist são ilustrativas (marcadas).
import fs from "node:fs";
import { Video, icon, logo } from "../lib/build.mjs";
import { KIT4_CSS, COMMON_CSS, ctaHtml, ctaJs, header, headerJs, gh4, P4, narr } from "../lib/kit4.mjs";

const DIR = "03_TOP3_GITHUB", OUT = `/home/user/trindayy/REELS_IA_LOTE4/${DIR}`;
const GN = "#3fb950", OC = "#e5e7eb", PX = "#a78bfa", GO = "#facc15", RD = "#ff4d5e", CY = "#22d3ee";
const raw = JSON.parse(fs.readFileSync(narr(DIR), "utf8")), fixes = { "Tolkien": "tokens", "Plandex.": "Plandex." };
raw.forEach((w, i) => {
  const nx = raw[i + 1]?.text || "";
  if (w.text === "Open" && /^Code/.test(nx)) { fixes[`Open@${i}`] = ""; fixes[`${nx}@${i + 1}`] = nx.replace("Code", "OpenCode"); }
  if (w.text === "Open" && /^Claw/.test(nx)) { fixes[`Open@${i}`] = ""; fixes[`${nx}@${i + 1}`] = "OpenClaw"; }
});
const V = new Video({
  id: "l4-03", title: "Top 3 do GitHub", wordsPath: narr(DIR), audioDur: 86.55, autoHide: true, fixes,
  accent: GN, capKey: GN,
  keywords: ["Top", "3", "GitHub", "30", "Code,", "absurdo.", "instalar", "entender", "projeto", "várias", "inteligências", "Plandex.", "etapas", "feature", "grande", "resolvido.", "tempo.", "Tolkien", "acelera", "Goose,", "preferido.", "Severino.", "local", "pesado", "skills.", "pesquisar,", "mercado,", "público,", "repositório"],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
V.extraCss = COMMON_CSS + KIT4_CSS + `
.mini{position:absolute;width:820px;display:flex;align-items:center;gap:22px;padding:22px 28px;border-radius:24px;background:#0d1117;border:1.5px solid #30363d;box-shadow:0 26px 60px rgba(0,0,0,.55);font:600 30px Inter;color:#e6edf3}
.mini .rk{font:700 44px "Space Grotesk";color:${GN};width:50px}
.mini img{width:64px;height:64px;border-radius:14px}
.mini .ow{color:#9198a1}
.lk{position:absolute;width:150px;height:150px;border-radius:40px;background:#fff;display:grid;place-items:center;box-shadow:0 20px 50px rgba(0,0,0,.45)}
.lk img{width:62%;height:62%}
.bar2{height:54px;border-radius:14px;transform-origin:left center}
#s10-word .display{font-size:116px!important}
#s10-q .display{font-size:78px!important}
`;
const MINI = [["anomalyco", "opencode", "av_anomalyco.png"], ["plandex-ai", "plandex", "av_plandex-ai.png"], ["aaif-goose", "goose", "av_aaif-goose.png"]];
const SC = [at("Code,"), at("É um", 2), at("Plandex."), at("Se você"), at("Isso"), at("Esse é"), at("E não"), at("Além", 2), at("Já", 2)].map((t) => t - 0.08);
SC.forEach((t) => S("whoosh", t - 0.15, 0.5));

// S1 — TOP 3 · mais baixados · 30 dias
{
  const t = { tp: at("Top"), re: at("repositórios"), gh: at("GitHub"), d30: at("30"), di: at("dias!") };
  V.scene({ id: "s1", t0: 0, t1: SC[0], in: "none", push: 0.05, html: `
    <div class="abs row" style="left:70px;top:170px;gap:26px;align-items:center">
      <div class="tile" id="s1-gh" style="width:170px;height:170px;border-radius:46px;background:linear-gradient(160deg,#1f2633,#0d1117)"><img src="${logo("github-white.svg")}"/></div>
      <div id="s1-t"><div class="display" style="font-size:190px;line-height:.85">TOP <span style="color:${GN}">3</span></div></div></div>
    <div class="abs" id="s1-k" style="left:76px;top:390px"><div class="kicker">mais baixados no github · últimos <span id="s1-n" style="color:${GN}">0</span> dias</div></div>
    ${MINI.map(([o, r, a], i) => `<div class="mini" id="s1-m${i}" style="left:${130 - i * 30}px;top:${520 + i * 150}px"><div class="rk">${i + 1}</div><img src="${P4(a)}"/><div><span class="ow">${o} / </span><b>${r}</b></div></div>`).join("")}
  `, js: `
fromTo("#s1-gh",{scale:.4,opacity:0,rotation:-20},{scale:1,opacity:1,rotation:0,duration:.5,ease:E.back},0.02);inn("#s1-t",0.08,"slam");${S("impact", 0.1, .75)}
inn("#s1-k",${t.re},"fade",.35);
${MINI.map((_, i) => `inn("#s1-m${i}",${(t.gh - 0.1 + i * 0.15).toFixed(2)},"rise",.45);`).join("")}${S("pop_multi", t.gh - 0.1, .55)}
count("#s1-n",${t.d30 - 0.15},.5,0,30,"int");${S("counter", t.d30 - 0.15, .45)}
` });
}
// S2 — 1 OpenCode, o queridinho (card real)
{
  const t = { oc: at("Code,"), qu: at("queridinho"), fa: at("falei"), ab: at("absurdo.") };
  V.scene({ id: "s2", t0: SC[0], t1: SC[1], in: "left", push: 0.035, html: `
    ${header("s2", 1, "OpenCode", "o queridinho de muita gente", GN, 3)}
    <div class="abs" id="s2-gh" style="left:70px;top:330px">${gh4({ id: "s2-card", owner: "anomalyco", repo: "opencode", avatar: P4("av_anomalyco.png"), desc: "The open source AI coding agent.", topics: ["ai", "coding-agent", "terminal", "open-source"] })}</div>
    <div class="abs center-x tc" id="s2-lg" style="top:760px;width:760px;padding:44px 0;border-radius:32px;background:#0b0b0d;border:2px solid rgba(63,185,80,.35)"><img src="${P4("opencode-logo-dark.svg")}" style="height:120px"/></div>
    <div class="abs" id="s2-ab" style="left:640px;top:1020px;transform:rotate(-5deg)"><div class="badge" style="font-size:54px;border:5px solid ${GN};color:${GN};background:rgba(6,10,19,.85)">absurdo</div></div>
  `, js: `
${headerJs(V, "s2", t.oc - 0.1)}
inn("#s2-gh",${t.oc + 0.15},"rise",.5);
inn("#s2-lg",${t.fa - 0.1},"up",.45);
fromTo("#s2-ab",{scale:2.2,opacity:0,rotation:-20},{scale:1,opacity:1,rotation:-5,duration:.3,ease:"back.out(1.6)"},${t.ab - 0.08});${S("impact", t.ab - 0.05, .7)}
` });
}
// S3 — instala no PC, entende o projeto, distribui por várias IAs
{
  const t = { ag: at("agente"), in: at("instalar"), en: at("entender"), pr: at("projeto"), di: at("distribuir"), va: at("várias"), ia: at("inteligências"), nf: at("não"), so: at("só.") };
  const files = ["src/", "  app.ts", "  api/", "  db/", "package.json", "README.md"];
  const M = [["prov-claude.svg", 300], ["prov-openai.svg", 540], ["prov-gemini.svg", 780]];
  V.scene({ id: "s3", t0: SC[1], t1: SC[2], in: "zoom", push: 0.03, html: `
    ${header("s3", 1, "OpenCode", "agente open source no seu pc", GN, 3)}
    <div class="abs" id="s3-tm" style="left:70px;top:320px"><div class="win" style="width:940px"><div class="win-bar"><i></i><i></i><i></i><span class="t">terminal · README oficial</span></div><div class="term" style="font-size:28px"><span class="p">$</span> <span id="s3-c" data-text="curl -fsSL https://opencode.ai/v2/install | bash"></span></div></div></div>
    <div class="abs pnl" id="s3-tr" style="left:70px;top:520px;width:420px;padding:26px 30px;font:600 28px/1.55 'JetBrains Mono';color:#c8d3ee">${files.map((f, i) => `<div id="s3-f${i}" style="white-space:pre">${f}</div>`).join("")}<div id="s3-sc" style="position:absolute;left:0;right:0;top:20px;height:8px;background:${GN};box-shadow:0 0 30px ${GN}"></div></div>
    <div class="abs" id="s3-hub" style="left:610px;top:560px;width:150px;height:150px;border-radius:40px;background:#0b0b0d;border:2px solid rgba(63,185,80,.5);display:grid;place-items:center"><img src="${P4("av_anomalyco.png")}" style="width:70%;border-radius:22px"/></div>
    <svg class="wires" viewBox="0 0 1080 1920">${M.map(([, x], i) => `<path id="s3-w${i}" d="M685 710 C 685 800, ${x + 75} 800, ${x + 75} 880" stroke="${GN}" stroke-width="5" fill="none"/>`).join("")}</svg>
    ${M.map(([f, x], i) => `<div class="lk" id="s3-l${i}" style="left:${x}px;top:880px"><img src="${logo(f)}"/></div>`).join("")}
    <div class="abs" id="s3-np" style="left:520px;top:1060px"><div class="chip green">${icon("unlink", "#c8f7e5", 2.2)}sem ficar preso a 1 IA</div></div>
  `, js: `
${headerJs(V, "s3", SC[1] + 0.05, "whoosh_s")}
inn("#s3-tm",${t.ag - 0.1},"up",.4);type("#s3-c",${t.in - 0.1},1.0);${S("typing", t.in - 0.1, .55)}
inn("#s3-tr",${t.en - 0.15},"left",.4);${files.map((_, i) => `inn("#s3-f${i}",${(t.en + i * 0.08).toFixed(2)},"left",.25);`).join("")}
fromTo("#s3-sc",{y:0,opacity:.9},{y:250,opacity:.3,duration:1.1,ease:"power1.inOut",repeat:1,yoyo:true},${t.pr - 0.1});${S("scan", t.pr - 0.1, .55)}
inn("#s3-hub",${t.di - 0.1},"pop",.4);${S("pop", t.di - 0.1, .6)}
${M.map((_, i) => `draw("#s3-w${i}",${(t.va + i * 0.12).toFixed(2)},.4);inn("#s3-l${i}",${(t.ia - 0.1 + i * 0.15).toFixed(2)},"pop",.35);`).join("")}${S("pop_multi", t.ia - 0.1, .55)}
inn("#s3-np",${t.nf - 0.05},"up",.35);${S("confirm", t.so, .5)}
` });
}
// S4 — 2 Plandex (card real) · quebra em etapas, enquanto o OpenCode trabalha direto
{
  const t = { px: at("Plandex."), en: at("Enquanto"), oc: at("Code", 2), di: at("direto"), qb: at("quebrar"), et: at("etapas"), si: at("sistema.", 2) };
  V.scene({ id: "s4", t0: SC[2], t1: SC[3], in: "left", push: 0.035, html: `
    ${header("s4", 2, "Plandex", "tarefas grandes, em etapas", PX, 3)}
    <div class="abs" id="s4-gh" style="left:70px;top:330px">${gh4({ id: "s4-card", owner: "plandex-ai", repo: "plandex", avatar: P4("av_plandex-ai.png"), desc: "An AI coding agent designed for large tasks and real world projects." })}</div>
    <div class="abs pnl" id="s4-a" style="left:70px;top:760px;width:440px;padding:26px 28px"><div class="lbl4">OpenCode</div><div style="font:800 34px Inter;margin-top:12px">direto no projeto</div><div class="bar2" id="s4-ba" style="margin-top:18px;background:${OC}"></div></div>
    <div class="abs pnl" id="s4-b" style="left:570px;top:760px;width:440px;padding:26px 28px;border-color:${PX}"><div class="lbl4" style="color:${PX}">Plandex</div><div style="font:800 34px Inter;margin-top:12px">em várias etapas</div><div class="row" style="gap:8px;margin-top:18px">${[0, 1, 2, 3, 4].map((i) => `<div class="bar2" id="s4-s${i}" style="flex:1;background:${PX}"></div>`).join("")}</div></div>
  `, js: `
${headerJs(V, "s4", t.px - 0.1)}
inn("#s4-gh",${t.px + 0.2},"rise",.5);
inn("#s4-a",${t.oc - 0.1},"up",.4);set("#s4-ba",{scaleX:0},${SC[2]});to("#s4-ba",{scaleX:1,duration:.6,ease:E.o},${t.di});
inn("#s4-b",${t.qb - 0.15},"up",.4);${[0, 1, 2, 3, 4].map((i) => `set("#s4-s${i}",{scaleX:0},${SC[2]});to("#s4-s${i}",{scaleX:1,duration:.2,ease:E.back},${(t.et + i * 0.12).toFixed(2)});`).join("")}${S("pop_multi", t.et, .5)}
` });
}
// S5 — feature gigante → pequenas etapas → constrói, resolve e só leva o que está resolvido
{
  const t = { se: at("Se você"), fe: at("feature"), gr: at("grande"), qb: at("quebra"), pe: at("pequenas"), co: at("constrói"), re: at("resolve"), le: at("leva"), cd: at("código", 1), rs: at("resolvido.") };
  const K = ["Login", "Banco de dados", "API", "Pagamento", "Testes", "Deploy"];
  V.scene({ id: "s5", t0: SC[3], t1: SC[4], in: "zoom", push: 0.03, html: `
    ${header("s5", 2, "Plandex", "ele mesmo constrói e resolve", PX, 3)}
    <div class="abs pnl" id="s5-is" style="left:70px;top:320px;width:940px;padding:24px 30px;display:flex;align-items:center;gap:20px"><div style="width:52px;height:52px">${icon("circle-dot", GN, 2.4)}</div><div style="font:800 40px Inter">Feature muito grande</div><div class="chip amber" style="margin-left:auto;font-size:26px">size: XL</div></div>
    <div class="abs pnl" id="s5-ck" style="left:70px;top:470px;width:600px;padding:18px 18px">${K.map((k, i) => `<div class="chk" id="s5-k${i}"><div class="bx" id="s5-b${i}"><span id="s5-v${i}">${icon("check", "#fff", 3.2)}</span></div><span id="s5-t${i}">${k}</span></div>`).join("")}</div>
    <div class="abs pnl" id="s5-df" style="left:700px;top:470px;width:310px;padding:22px;font:600 24px/1.7 'JetBrains Mono'"><div class="lbl4" style="font-size:18px">seu código</div>${["+ login()", "+ salvarAgenda()", "+ cobrar()", "+ deploy()"].map((l, i) => `<div id="s5-d${i}" style="color:${GN}">${l}</div>`).join("")}</div>
    <div class="ex" id="s5-ex" style="left:70px;top:1180px">exemplo ilustrativo</div>
  `, js: `
${headerJs(V, "s5", SC[3] + 0.05, "whoosh_s")}
inn("#s5-is",${t.fe - 0.1},"down",.4);${S("pop", t.fe - 0.1, .6)}pulse("#s5-is",${t.gr},1.05,.35);inn("#s5-ex",${t.fe},"fade",.3);
inn("#s5-ck",${t.qb - 0.1},"up",.4);${K.map((_, i) => `inn("#s5-k${i}",${(t.pe + i * 0.1).toFixed(2)},"left",.3);set("#s5-v${i}",{opacity:0},${SC[3]});`).join("")}${S("pop_multi", t.pe, .5)}
${K.map((_, i) => { const tt = t.co + i * ((t.le - t.co) / K.length); return `to("#s5-b${i}",{backgroundColor:"${PX}",borderColor:"${PX}",duration:.15},${tt.toFixed(2)});to("#s5-v${i}",{opacity:1,duration:.1},${tt.toFixed(2)});to("#s5-t${i}",{opacity:.55,duration:.2},${(tt + 0.1).toFixed(2)});`; }).join("")}${S("confirm", t.co, .45)}${S("confirm", t.re + 0.5, .45)}
inn("#s5-df",${t.le - 0.1},"right",.4);${[0, 1, 2, 3].map((i) => `inn("#s5-d${i}",${(t.cd + i * 0.15).toFixed(2)},"left",.25);`).join("")}
glow("#s5-df",${t.rs},"rgba(63,185,80,.55)",.35);${S("ding", t.rs, .6)}
` });
}
// S6 — economiza tempo, tokens e acelera
{
  const t = { is: at("Isso"), ec: at("economiza"), te: at("tempo."), to: at("Tolkien"), ac: at("acelera"), si: at("sistema.", 3) };
  const B = [["clock", "tempo", t.te], ["coins", "tokens", t.to], ["rocket", "acelera", t.ac]];
  V.scene({ id: "s6", t0: SC[4], t1: SC[5], in: "rise", push: 0.04, html: `
    <div class="abs center-x tc" id="s6-h" style="top:200px;width:1000px"><div class="h1">economiza</div></div>
    <div class="abs row" style="left:70px;top:430px;width:940px;justify-content:space-between">${B.map(([ic, n], i) => `<div class="pnl tc" id="s6-b${i}" style="width:290px;padding:40px 10px;border-color:${PX}"><div style="width:120px;height:120px;margin:0 auto">${icon(ic, PX, 1.8)}</div><div class="h3" style="margin-top:20px">${n}</div></div>`).join("")}</div>
  `, js: `
inn("#s6-h",${t.is},"up",.4);pulse("#s6-h",${t.ec},1.06,.35);
${B.map(([, , tt], i) => `inn("#s6-b${i}",${(tt - 0.1).toFixed(2)},"pop",.4);${V.sfx("pop", tt - 0.1, 0.6)}`).join("")}
fromTo("#s6-b2",{y:0},{y:-40,duration:.4,yoyo:true,repeat:1,ease:"power2.out",immediateRender:false},${t.ac + 0.3});${S("whoosh_s", t.ac + 0.3, .45)}
` });
}
// S7 — 3 Goose, o meu preferido (card real) · o "Severino" que roda local
{
  const t = { es: at("Esse é"), go: at("Goose,"), pf: at("preferido."), sv: at("Severino."), ro: at("roda"), lo: at("local"), fz: at("faz"), co: at("construir", 2) };
  V.scene({ id: "s7", t0: SC[5], t1: SC[6], in: "left", push: 0.035, html: `
    ${header("s7", 3, "Goose", "o meu preferido", GO, 3)}
    <div class="abs" id="s7-gh" style="left:70px;top:330px">${gh4({ id: "s7-card", owner: "aaif-goose", repo: "goose", avatar: P4("av_aaif-goose.png"), desc: "your native open source AI agent — desktop app, CLI, and API — for code, workflows, and everything in between" })}</div>
    <div class="abs" id="s7-pf" style="left:700px;top:290px;transform:rotate(6deg)"><div class="chip amber" style="font-size:30px">${icon("star", "#ffeab0", 2.4)}meu preferido</div></div>
    <div class="abs" id="s7-sv" style="left:70px;top:770px"><div class="h2">o famoso <span style="color:${GO}">“Severino”</span></div></div>
    <div class="abs row" id="s7-ch" style="left:70px;top:880px;width:940px;gap:14px;flex-wrap:wrap">${[["laptop", "roda local"], ["hammer", "constrói"], ["wand-sparkles", "faz de tudo"]].map(([ic, n], i) => `<div class="chip" id="s7-c${i}" style="font-size:32px">${icon(ic, GO, 2.2)}${n}</div>`).join("")}</div>
  `, js: `
${headerJs(V, "s7", t.es - 0.1)}
inn("#s7-gh",${t.go},"rise",.5);
fromTo("#s7-pf",{scale:2,opacity:0,rotation:-14},{scale:1,opacity:1,rotation:6,duration:.3,ease:"back.out(1.6)"},${t.pf - 0.1});${S("impact", t.pf - 0.05, .6)}
inn("#s7-sv",${t.sv - 0.25},"up",.4);
inn("#s7-c0",${t.lo - 0.1},"pop",.3);inn("#s7-c2",${t.fz - 0.05},"pop",.3);inn("#s7-c1",${t.co - 0.1},"pop",.3);${S("pop", t.lo - 0.1, .55)}${S("pop", t.fz, .5)}${S("pop", t.co - 0.1, .5)}
` });
}
// S8 — não é pesado como Hermes/OpenClaw · roda direto no PC e tem várias skills
{
  const t = { e: at("E não"), pe: at("pesado"), he: at("Hermes"), oc: at("Claw"), ro: at("rodar"), pc: at("PC"), sk: at("skills.") };
  const R = [["Hermes", RD, 0.92, t.he], ["OpenClaw", RD, 0.85, t.oc], ["Goose", GN, 0.22, t.ro]];
  V.scene({ id: "s8", t0: SC[6], t1: SC[7], in: "zoom", push: 0.03, html: `
    <div class="abs" id="s8-h" style="left:70px;top:200px"><div class="h1">não é <span style="color:${RD}">pesado</span></div><div class="lbl4" style="margin-top:14px">peso na sua máquina · comparação ilustrativa</div></div>
    <div class="abs pnl" style="left:70px;top:430px;width:940px;padding:34px 36px" id="s8-p">${R.map(([n, c], i) => `<div style="margin:${i ? 28 : 0}px 0 0" id="s8-r${i}"><div class="row" style="justify-content:space-between;font:800 34px Inter"><span>${n}</span><span style="color:${c};font-size:26px">${i < 2 ? "pesado" : "leve"}</span></div><div style="margin-top:10px;height:44px;border-radius:12px;background:rgba(160,190,255,.1)"><div class="bar2" id="s8-f${i}" style="height:44px;width:100%;background:${c}"></div></div></div>`).join("")}</div>
    <div class="abs row" id="s8-pc" style="left:70px;top:900px;gap:16px"><div class="chip green">${icon("monitor", "#c8f7e5", 2.2)}direto no PC</div><div class="chip amber" id="s8-sk">${icon("puzzle", "#ffeab0", 2.2)}várias skills</div></div>
  `, js: `
inn("#s8-h",${t.e},"up",.4);${S("alert", t.pe, .45)}
inn("#s8-p",${t.pe + 0.1},"up",.4);
${R.map(([, , v, tt], i) => `inn("#s8-r${i}",${(tt - 0.15).toFixed(2)},"left",.3);set("#s8-f${i}",{scaleX:0},${SC[6]});to("#s8-f${i}",{scaleX:${v},duration:.6,ease:E.o},${(tt).toFixed(2)});`).join("")}${S("riser", t.he - 0.3, .35)}${S("ding", t.ro + 0.3, .55)}
inn("#s8-pc",${t.pc - 0.1},"up",.35);inn("#s8-sk",${t.sk - 0.15},"pop",.3);${S("pop", t.sk - 0.15, .55)}
` });
}
// S9 — além de construir: pesquisar, mercado, público · uso diário
{
  const t = { al: at("Além", 2), co: at("construir,", 3), pq: at("pesquisar,"), me: at("mercado,"), pu: at("público,"), ag: at("agente", 5), di: at("diário.") };
  const K = [["construir", t.co], ["pesquisar", t.pq], ["encontrar mercado", t.me], ["encontrar público", t.pu]];
  V.scene({ id: "s9", t0: SC[7], t1: SC[8], in: "left", push: 0.03, html: `
    ${header("s9", 3, "Goose", "skills além do código", GO, 3)}
    <div class="abs pnl" id="s9-ck" style="left:70px;top:330px;width:940px;padding:20px 22px">${K.map(([k], i) => `<div class="chk" id="s9-k${i}"><div class="bx" id="s9-b${i}"><span id="s9-v${i}">${icon("check", "#0b1222", 3.2)}</span></div>${k}</div>`).join("")}</div>
    <div class="abs" id="s9-d" style="left:600px;top:860px;transform:rotate(-5deg)"><div class="badge" style="font-size:58px;background:${GO};color:#1a1203">uso diário</div></div>
  `, js: `
${headerJs(V, "s9", t.al - 0.1, "whoosh_s")}
inn("#s9-ck",${t.al + 0.1},"up",.4);
${K.map(([, tt], i) => `inn("#s9-k${i}",${(tt - 0.25).toFixed(2)},"left",.3);set("#s9-v${i}",{opacity:0},${SC[7]});to("#s9-b${i}",{backgroundColor:"${GO}",borderColor:"${GO}",duration:.15},${tt.toFixed(2)});to("#s9-v${i}",{opacity:1,duration:.1},${tt.toFixed(2)});${V.sfx("click", tt, 0.55)}`).join("")}
fromTo("#s9-d",{scale:2.2,opacity:0,rotation:-20},{scale:1,opacity:1,rotation:-5,duration:.3,ease:"back.out(1.6)"},${t.di - 0.1});${S("impact", t.di - 0.05, .65)}
` });
}
// S10 — CTA REPOSITÓRIO
{
  const t = { ja: at("Já", 2), co: at("comenta"), w: at("repositório"), pa: at("passo"), ot: at("otimizar") };
  V.scene({ id: "s10", t0: SC[8], t1: V.dur, last: true, in: "zoom", push: 0.03,
    html: ctaHtml("s10", { q: `QUER O <span style="color:${GN}">PASSO A PASSO?</span>`, word: "REPOSITÓRIO", grad: `linear-gradient(90deg,${GN},${CY})`, logos: [{ f: "../photos4/av_anomalyco.png", white: true }, { f: "../photos4/av_plandex-ai.png", white: true }, { f: "../photos4/av_aaif-goose.png", white: true }] }),
    js: ctaJs(V, "s10", { q: t.ja - 0.02, co: t.co, word: t.w, seg: t.pa, fe: t.ot - 0.3 }) });
}
V.write(`${OUT}/projeto`);
