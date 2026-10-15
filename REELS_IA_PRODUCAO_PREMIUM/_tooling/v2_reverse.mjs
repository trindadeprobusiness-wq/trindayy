// VÍDEO 02 — REVERSE ENGINEER ANYTHING (narração Lendário 20:10:57)
import { Video, icon, logo, ghRepo, esc } from "./lib/build.mjs";
import { COMMON_CSS, ctaHtml, ctaJs } from "./lib/common.mjs";

const ROOT = "/home/user/trindayy/REELS_IA_PRODUCAO_PREMIUM/02_REVERSE_ENGINEER";
const V = new Video({
  id: "v2", title: "Reverse Engineer Anything",
  wordsPath: `${ROOT}/narracao/palavras_raw.json`, audioDur: 58.514,
  accent: "#22d3ee", capKey: "#fbbf24",
  fixes: { "teclitec": "teclado Logitech", "KeyPad": "Keypad", "Clod": "Claude", "The@146": "DECODE", "Code@147": "", "fonte.": "fonte." },
  keywords: ["1", "alta", "GitHub", "Reverse", "Engineer", "Anything.", "agente", "dentro.", "roubando", "ama", "recurso", "investigar", "Construir", "próprio.", "hardware", "antigo", "Logitech", "Linux", "15", "minutos.", "scanners", "placas", "driver.", "88.900", "estrelas", "aberto,", "máquina", "Claude", "Codex.", "DECODE", "funcionando?"],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
const AMBER = "#fbbf24";

V.extraCss = COMMON_CSS + `
.kp{width:470px;height:560px;border-radius:46px;background:linear-gradient(165deg,#3a3f48,#23272e);padding:34px;display:grid;grid-template-columns:repeat(4,1fr);grid-template-rows:repeat(5,1fr);gap:16px;box-shadow:0 40px 100px rgba(0,0,0,.7),inset 0 2px 0 rgba(255,255,255,.12)}
.kp b{border-radius:18px;background:linear-gradient(170deg,#4a505b,#353a43);box-shadow:inset 0 -5px 0 rgba(0,0,0,.35),inset 0 1px 0 rgba(255,255,255,.12);display:grid;place-items:center;font:600 30px Inter;color:#e7eaf0}
.kp b.tall{grid-row:span 2}.kp b.wide{grid-column:span 2}
.dialog{width:860px;border-radius:22px;overflow:hidden;background:#f3f5f9;box-shadow:0 30px 80px rgba(0,0,0,.6);color:#0b1222}
.dialog .dt{background:#1f6feb;color:#fff;font:600 24px "JetBrains Mono";padding:12px 22px}
.dialog .db{display:flex;align-items:center;gap:22px;padding:26px 26px;font:800 34px Inter;line-height:1.2}
.layer{position:absolute;left:0;right:0;height:84px;border-radius:20px;display:flex;align-items:center;gap:16px;padding:0 26px;font:800 30px Inter;border:1.5px solid rgba(160,190,255,.3);background:rgba(18,28,52,.88);box-shadow:0 18px 40px rgba(0,0,0,.45)}
.layer svg{width:38px;height:38px}
.mock{width:940px;height:600px;border-radius:30px;overflow:hidden;background:#0f1729;border:1.5px solid rgba(160,190,255,.2);box-shadow:0 40px 100px rgba(0,0,0,.6);display:grid;grid-template-columns:200px 1fr}
.mock .side{background:#0b1222;padding:26px 20px;display:flex;flex-direction:column;gap:18px}
.mock .side i{display:block;height:22px;border-radius:8px;background:rgba(160,190,255,.12)}
.mock .main{padding:30px;display:grid;grid-template-columns:1fr 1fr;grid-template-rows:120px 1fr 1fr;gap:20px}
.mock .blk{border-radius:20px;background:rgba(160,190,255,.07);border:1.5px solid rgba(160,190,255,.12)}
`;

// ---------------- S1 — HOOK: #1 EM ALTA NO GITHUB (0 → 5.85) ----------------
{
  const t = { r: at("repositório"), n1: at("1"), alta: at("alta"), gh: at("GitHub"), sem: at("semana"), rev: at("Reverse"), eng: at("Engineer"), any: at("Anything.") };
  V.scene({ id: "s1", t0: 0, t1: 5.85, in: "none", push: 0.03, html: `
    <div class="abs row" id="s1-top" style="left:0;right:0;top:150px;justify-content:center;gap:30px">
      <div class="tile" id="s1-gh" style="width:240px;height:240px;border-radius:60px;background:linear-gradient(160deg,#1f2633,#0d1117)"><img src="${logo("github-white.svg")}" style="width:64%"/></div>
      <div class="badge" id="s1-n1" style="font-size:210px;padding:10px 40px;background:${AMBER};color:#111;border-radius:42px;box-shadow:0 0 0 8px rgba(251,191,36,.2),0 30px 80px rgba(251,191,36,.35)">#1</div>
    </div>
    <div class="abs center-x tc" id="s1-trend" style="top:430px;width:900px"><div class="chip red" style="font-size:36px;padding:18px 34px">${icon("flame", "#ff4d5e")}EM ALTA NO GITHUB · ESTA SEMANA</div></div>
    <div class="abs center-x tc" style="top:545px;width:1040px">
      <div class="display" style="font-size:112px;line-height:1"><span id="s1-w1" style="display:inline-block">REVERSE</span> <span id="s1-w2" style="display:inline-block;color:#22d3ee">ENGINEER</span></div>
      <div class="display" style="font-size:112px;line-height:1"><span id="s1-w3" style="display:inline-block">ANYTHING</span></div>
    </div>
    <div class="abs" id="s1-repo" style="left:70px;top:800px">${ghRepo({ id: "s1-ghc", owner: "morluto", repo: "rea", avatar: logo("github-icon.svg"), avatarBg: "#fff",
      desc: "Reverse engineer anything with agents, from app behavior down to native binaries.", topics: ["reverse-engineering", "binary-analysis", "claude-code", "codex", "ai-agents"], stars: "88.9k", forks: "19.5k", starId: "s1-st", tabs: false })}</div>
  `, js: `
fromTo("#s1-gh",{scale:1.35,rotation:-10},{scale:1,rotation:0,duration:.7,ease:E.o4},0);
fromTo("#s1-n1",{scale:1.25,x:30},{scale:1,x:0,duration:.6,ease:E.o4},0);
pulse("#s1-n1",${t.n1},1.12,.45);${S("impact", t.n1 - 0.05, .75)}
inn("#s1-trend",${t.alta - 0.1},"pop",.45);${S("pop", t.alta - 0.1, .65)}
inn("#s1-w1",${t.rev - 0.04},"up",.35);${S("whoosh_s", t.rev - 0.1, .5)}
inn("#s1-w2",${t.eng - 0.04},"up",.35);
inn("#s1-w3",${t.any - 0.04},"slam",.4);${S("impact", t.any - 0.04, .55)}
fromTo("#s1-repo",{opacity:0,y:160},{opacity:.45,y:40,duration:.8,ease:E.o4},0.35);to("#s1-repo",{opacity:1,y:0,duration:.5,ease:E.o},${t.rev + 0.1});glow("#s1-st-btn",${t.any},"rgba(227,179,65,.45)");
` });
}

// ---------------- S2 — APONTA O APP → AGENTE → POR DENTRO (5.85 → 12.9) ----------------
{
  const t = { v: at("Você aponta"), app: at("aplicativo"), ag: at("agente"), ia: at("inteligência"), mos: at("mostra"), fun: at("funciona"), den: at("dentro.") };
  V.scene({ id: "s2", t0: 5.7, t1: 12.9, in: "left", html: `
    <div class="abs row" style="left:70px;top:160px;width:940px;justify-content:space-between">
      <div class="col" id="s2-app" style="align-items:center;gap:12px"><div class="tile" style="width:190px;height:190px;border-radius:48px">${`<div style="width:56%;height:56%">${icon("app-window", "#cfe0ff", 1.6)}</div>`}</div><div class="h3" style="font-size:32px">aplicativo</div></div>
      <svg width="380" height="60" viewBox="0 0 380 60"><path id="s2-arr" d="M10 30 L340 30 M318 12 L344 30 L318 48" stroke="#22d3ee" stroke-width="5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <div class="col" id="s2-ag" style="align-items:center;gap:12px"><div class="agent" style="width:190px;height:190px;border-radius:48px">${icon("bot", "#22d3ee", 1.7)}</div><div class="h3" style="font-size:32px">agente de IA</div></div>
    </div>
    <div class="abs win" id="s2-shot" style="left:70px;top:470px;width:940px">
      <div class="win-bar"><i></i><i></i><i></i><span class="t">REA · análise de binário nativo (Hopper)</span></div>
      <img src="assets/photos/rea-hopper-analysis.png" style="display:block;width:940px;height:535px;object-fit:cover"/>
    </div>
    <div class="abs row gap12" id="s2-tags" style="left:70px;top:1100px;width:940px;justify-content:center">
      <div class="chip cyan" id="s2-t0">${icon("cpu", "#22d3ee")}binário</div>
      <div class="chip cyan" id="s2-t1">${icon("workflow", "#22d3ee")}comportamento</div>
      <div class="chip cyan" id="s2-t2">${icon("file-search", "#22d3ee")}evidências</div>
    </div>
  `, js: `
inn("#s2-app",${t.app - 0.15},"pop",.45);${S("pop", t.app - 0.15, .6)}
draw("#s2-arr",${t.app + 0.3},.6);${S("whoosh_s", t.app + 0.3, .5)}
inn("#s2-ag",${t.ag - 0.1},"pop",.45);${S("power", t.ag - 0.1, .55)}
pulse("#s2-ag .agent",${t.ia + 0.3},1.08,.5);
fromTo("#s2-shot",{opacity:0,y:120,rotationX:-30,transformPerspective:1400},{opacity:1,y:0,rotationX:0,duration:.75,ease:E.o4},${t.mos - 0.1});${S("whoosh", t.mos - 0.15, .6)}
fromTo("#s2-shot img",{scale:1.0},{scale:1.18,duration:2.4,ease:"sine.inOut",transformOrigin:"35% 40%"},${t.fun - 0.4});
${[0, 1, 2].map((k) => `inn("#s2-t${k}",${(t.den - 0.15 + k * 0.12).toFixed(2)},"pop",.4);`).join("")}${S("pop_multi", t.den - 0.15, .55)}
` });
}

// ---------------- S3 — NÃO ESTÁ ROUBANDO O CÓDIGO-FONTE (12.9 → 16.0) ----------------
{
  const t = { e: at("E não,"), nao: at("não,"), rou: at("roubando"), cod: at("código"), fo: at("fonte.") };
  V.scene({ id: "s3", t0: 12.75, t1: 16.0, in: "zoom", html: `
    <div class="abs center-x tc" id="s3-no" style="top:170px;width:900px"><div class="display" style="font-size:230px;color:#ff4d5e">NÃO</div></div>
    <div class="abs center-x tc" id="s3-st" style="top:460px;width:1000px">
      <div class="display" style="font-size:84px;position:relative;display:inline-block">roubar código-fonte<div id="s3-line" style="position:absolute;left:-10px;right:-10px;top:50%;height:12px;margin-top:-6px;background:#ff4d5e;border-radius:6px"></div></div>
    </div>
    <div class="abs center-x card row gap24" id="s3-ok" style="top:650px;width:900px;padding:34px 40px">
      <div class="ic" style="width:96px;height:96px;flex:none">${icon("scan-eye", "#34d399", 1.8)}</div>
      <div><div class="h3">analisa o app <span class="hl-green">sem o código-fonte</span></div><div class="body" style="font-size:28px;margin-top:8px">entende como funciona e mostra as evidências</div></div>
    </div>
  `, js: `
inn("#s3-no",${t.nao - 0.05},"slam");${S("impact", t.nao - 0.05, .75)}
shake("#s3-no",${t.nao + 0.35});
inn("#s3-st",${t.rou - 0.25},"up",.4);
strike("#s3-line",${t.rou + 0.15},.35);${S("glitch", t.rou + 0.15, .7)}
inn("#s3-ok",${t.cod},"rise",.5);${S("confirm", t.fo, .5)}
` });
}

// ---------------- S4 — VOCÊ AMA UM RECURSO (16.0 → 20.0) ----------------
{
  const t = { m: at("Mas"), ama: at("ama"), rec: at("recurso"), det: at("determinado"), app: at("aplicativo.") };
  V.scene({ id: "s4", t0: 15.85, t1: 20.0, in: "rise", html: `
    <div class="abs center-x tc" id="s4-h" style="top:160px;width:1000px"><div class="h2">você <span style="color:#ff4d5e">ama</span> um recurso</div></div>
    <div class="abs mock" id="s4-mock" style="left:70px;top:330px">
      <div class="side"><i style="width:70%"></i><i></i><i style="width:80%"></i><i style="width:60%"></i><i></i><i style="width:75%"></i></div>
      <div class="main">
        <div class="blk" style="grid-column:span 2"></div>
        <div class="blk" id="s4-feat" style="grid-row:span 2;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;background:rgba(34,211,238,.10);border-color:rgba(34,211,238,.55)">
          <div style="width:110px;height:110px">${icon("sparkles", "#22d3ee", 1.6)}</div><div class="h3" style="font-size:34px">o recurso</div></div>
        <div class="blk"></div><div class="blk"></div>
      </div>
    </div>
    <div class="abs" id="s4-heart" style="left:520px;top:350px;width:150px;height:150px;border-radius:50%;background:#ff4d5e;display:grid;place-items:center;box-shadow:0 20px 60px rgba(255,77,94,.5)"><div style="width:58%;height:58%">${icon("heart", "#fff", 2.4)}</div></div>
    <div class="abs center-x tc kicker" id="s4-k" style="top:965px;width:940px">de um aplicativo qualquer</div>
  `, js: `
inn("#s4-mock",${t.m},"rise",.6);${S("whoosh", t.m - 0.05, .5)}
inn("#s4-h",${t.ama - 0.2},"up",.4);
inn("#s4-heart",${t.ama},"pop",.45);${S("pop", t.ama, .7)}
pulse("#s4-heart",${t.ama + 0.55},1.15,.45);
glow("#s4-feat",${t.rec},"rgba(34,211,238,.55)");${S("ding", t.rec, .45)}
inn("#s4-k",${t.det},"fade",.4);
` });
}

// ---------------- S5 — INVESTIGAR → ENTENDER → CONSTRUIR (20.0 → 25.75) ----------------
{
  const t = { ag: at("Agora"), inv: at("investigar"), fe: at("feito"), us: at("usar"), con: at("conhecimento."), cons: at("Construir"), pr: at("próprio.") };
  const steps = [{ id: 0, l: "investigar", ic: "search", tt: t.inv }, { id: 1, l: "entender", ic: "lightbulb", tt: t.con - 0.3 }, { id: 2, l: "construir", ic: "hammer", tt: t.cons }];
  V.scene({ id: "s5", t0: 19.85, t1: 25.75, in: "rise", html: `
    <div class="abs row" style="left:70px;top:170px;width:940px;justify-content:space-between">
      ${steps.map((s) => `<div class="card step" id="s5-s${s.id}" style="width:280px"><div class="si" ${s.id === 2 ? 'style="background:rgba(251,191,36,.14);border-color:rgba(251,191,36,.6)"' : ""}>${icon(s.ic, s.id === 2 ? AMBER : "#22d3ee", 1.8)}</div><div class="st">${s.l}</div></div>`).join("")}
    </div>
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s5-a0" d="M352 320 L378 320" stroke="#22d3ee" stroke-width="5" fill="none"/><path id="s5-a1" d="M682 320 L708 320" stroke="#22d3ee" stroke-width="5" fill="none"/></svg>
    <div class="abs win" id="s5-ed" style="left:70px;top:560px;width:940px">
      <div class="win-bar"><i></i><i></i><i></i><span class="t">meu-app / src / meu-recurso.ts</span></div>
      <div class="term" style="font-size:26px;white-space:pre"><span class="c">// como o recurso funciona (evidências do REA)</span>
<span class="k">export function</span> <span class="y">meuRecurso</span>() {
  <span class="c">// sua própria implementação</span>
  <span id="s5-code" data-text="return construirDoMeuJeito();"></span>
}</div>
    </div>
    <div class="abs center-x tc" id="s5-h" style="top:1000px;width:1000px"><div class="h2">construa <span class="hl-amber">o seu próprio</span></div></div>
  `, js: `
${steps.map((s) => `inn("#s5-s${s.id}",${(s.tt - 0.15).toFixed(2)},"pop",.45);glow("#s5-s${s.id}",${s.tt.toFixed(2)},"${s.id === 2 ? "rgba(251,191,36,.5)" : "rgba(34,211,238,.4)"}");${V.sfx("pop", s.tt - 0.15, 0.65)}`).join("\n")}
${steps.slice(0, 2).map((s) => `unglow("#s5-s${s.id}",${(steps[s.id + 1].tt - 0.1).toFixed(2)});`).join("")}
draw("#s5-a0",${t.inv + 0.4},.3);draw("#s5-a1",${t.con - 0.5},.3);
inn("#s5-ed",${t.us - 0.2},"rise",.55);${S("whoosh_s", t.us - 0.25, .45)}
type("#s5-code",${t.cons},.8);${S("typing", t.cons, .5)}
inn("#s5-h",${t.pr - 0.25},"up",.4);${S("confirm", t.pr, .5)}
` });
}

// ---------------- S6 — HARDWARE ANTIGO DE VOLTA À VIDA (25.75 → 29.1) ----------------
{
  const t = { e: at("dá"), tr: at("trazer"), hw: at("hardware"), an: at("antigo"), vo: at("volta"), vi: at("vida.") };
  const traces = ["M60 1180 L60 900 L300 900 L300 700", "M1020 1180 L1020 980 L760 980 L760 620", "M200 160 L200 420 L470 420", "M880 160 L880 380 L610 380", "M540 1180 L540 1000"];
  V.scene({ id: "s6", t0: 25.6, t1: 29.1, in: "cut", push: 0.06, html: `
    <svg class="abs" id="s6-pcb" viewBox="0 0 1080 1500" style="left:0;top:0;width:1080px;height:1500px;opacity:.55">
      <rect x="0" y="0" width="1080" height="1500" fill="#0b2a1f"/>
      ${Array.from({length:26},(_,i)=>{const y=60+i*55;return `<path d="M0 ${y} L${180+((i*137)%400)} ${y} L${240+((i*137)%400)} ${y+40} L1080 ${y+40}" stroke="#1f6b4c" stroke-width="3" fill="none"/>`}).join("")}
      ${[[120,180,180,120],[700,140,220,150],[420,560,240,160],[160,860,200,140],[760,900,190,190],[480,1180,260,130]].map(([x,y,w,h])=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="#111a17" stroke="#2c8a63" stroke-width="3"/>${Array.from({length:8},(_,k)=>`<rect x="${x+12+k*(w-24)/8}" y="${y-14}" width="10" height="14" fill="#9aa39d"/><rect x="${x+12+k*(w-24)/8}" y="${y+h}" width="10" height="14" fill="#9aa39d"/>`).join("")}`).join("")}
      ${Array.from({length:40},(_,i)=>`<circle cx="${(i*263)%1060+10}" cy="${(i*419)%1480+10}" r="7" fill="#c9a24a"/>`).join("")}
    </svg>
    <div class="abs" style="left:0;top:0;width:1080px;height:1500px;background:linear-gradient(180deg,rgba(6,10,19,.2),rgba(6,10,19,.8) 70%,#060a13 99%)"></div>
    <svg class="wires" viewBox="0 0 1080 1920">${traces.map((d, i) => `<path id="s6-tr${i}" d="${d}" stroke="#34d399" stroke-width="6" fill="none" stroke-linecap="round" style="filter:drop-shadow(0 0 10px #34d399)"/>`).join("")}</svg>
    <div class="abs center-x tc" id="s6-h" style="top:480px;width:1000px">
      <div class="row" style="justify-content:center;gap:20px"><div class="ic" style="width:96px;height:96px">${icon("zap", AMBER, 2.2)}</div><div class="display" style="font-size:110px">HARDWARE</div></div>
      <div class="display" style="font-size:150px;color:${AMBER}">ANTIGO</div>
    </div>
    <div class="abs center-x" id="s6-pw" style="top:870px;width:160px;height:160px;border-radius:50%;display:grid;place-items:center;background:rgba(52,211,153,.14);border:3px solid #34d399"><div style="width:56%;height:56%">${icon("power", "#34d399", 2.4)}</div></div>
  `, js: `
fromTo("#s6-pcb",{scale:1.15},{scale:1,duration:3.6,ease:"none",transformOrigin:"50% 40%"},${t.e - 0.3});${S("whoosh", t.e - 0.3, .5)}
inn("#s6-h",${t.hw - 0.1},"slam");${S("impact", t.hw - 0.1, .6)}
${traces.map((_, i) => `draw("#s6-tr${i}",${(t.vo - 0.2 + i * 0.07).toFixed(2)},.6);`).join("")}${S("power", t.vo - 0.2, .7)}
inn("#s6-pw",${t.vi - 0.1},"pop",.45);glow("#s6-pw",${t.vi + 0.1},"rgba(52,211,153,.6)");${S("confirm", t.vi, .55)}
` });
}

// ---------------- S7 — TECLADO LOGITECH MX KEYPAD NO LINUX EM 15 MIN (29.1 → 35.95) ----------------
{
  const t = { p: at("Uma pessoa"), con: at("conseguiu"), tec: at("teclitec"), mx: at("MX"), kp: at("KeyPad"), fu: at("funcionar"), li: at("Linux"), ap: at("apenas"), n15: at("15"), mi: at("minutos.") };
  const keys = [["num", ""], ["/", ""], ["*", ""], ["−", ""], ["7", ""], ["8", ""], ["9", ""], ["+", "tall"], ["4", ""], ["5", ""], ["6", ""], ["1", ""], ["2", ""], ["3", ""], ["↵", "tall"], ["0", "wide"], [",", ""]];
  V.scene({ id: "s7", t0: 28.95, t1: 35.95, in: "rise", html: `
    <div class="abs center-x tc kicker" id="s7-k" style="top:160px;width:940px">relato de usuário</div>
    <div class="abs" id="s7-kp" style="left:110px;top:230px"><div class="kp">${keys.map(([k, c]) => `<b class="${c}">${k}</b>`).join("")}</div></div>
    <div class="abs col" id="s7-lab" style="left:620px;top:280px;gap:14px">
      <div class="row gap16"><img src="${logo("logitech-white.svg")}" style="width:120px;height:60px;object-fit:contain"/><div class="h3" style="font-size:40px;color:#cfd6e4">Logitech</div></div>
      <div class="display" style="font-size:74px">MX Keypad</div>
    </div>
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s7-link" d="M590 660 C 700 660, 720 760, 790 760" stroke="#34d399" stroke-width="5" fill="none" stroke-dasharray="2 0"/></svg>
    <div class="abs" id="s7-tux" style="left:780px;top:640px;width:220px;height:220px" ><div class="tile white" style="width:220px;height:220px;border-radius:56px"><img src="${logo("linux-tux.svg")}"/></div></div>
    <div class="abs chip green" id="s7-ok" style="left:610px;top:878px;font-size:30px">${icon("check", "#34d399", 3)}funciona no Linux</div>
    <div class="abs row gap24" id="s7-timer" style="left:110px;top:835px">
      <div class="ic" style="width:84px;height:84px">${icon("timer", "#ff4d5e", 2.2)}</div>
      <div class="display" id="s7-clock" style="font-size:100px">00:00</div>
    </div>
    <div class="abs glass" id="s7-q" style="left:70px;top:990px;width:940px;padding:24px 30px;font:500 29px Inter;line-height:1.38;color:#dbe3f5">
      <div class="mono" style="font-size:20px;color:#7f8db0;margin-bottom:8px">comentário de usuário</div>“Usei pra fazer meu teclado <b>Logitech MX Keypad</b> funcionar no Linux. Muito feliz com o resultado depois de só 15 minutos.”</div>
  `, js: `
inn("#s7-k",${t.p},"fade",.4);
fromTo("#s7-kp",{opacity:0,y:120,rotationX:40,transformPerspective:1200},{opacity:1,y:0,rotationX:0,duration:.7,ease:E.o4},${t.tec - 0.2});${S("whoosh", t.tec - 0.25, .55)}
fromTo("#s7-kp b",{opacity:.25},{opacity:1,duration:.12,stagger:.035},${t.tec + 0.3});${S("typing", t.tec + 0.3, .45)}
inn("#s7-lab",${t.mx - 0.15},"left",.5);${S("pop", t.mx - 0.15, .55)}
draw("#s7-link",${t.fu - 0.1},.5);
inn("#s7-tux",${t.li - 0.2},"pop",.45);${S("pop", t.li - 0.2, .65)}
inn("#s7-ok",${t.li + 0.25},"up",.4);${S("confirm", t.li + 0.25, .55)}
inn("#s7-timer",${t.ap - 0.3},"left",.4);
count("#s7-clock",${t.ap - 0.1},${(t.mi - t.ap + 0.25).toFixed(2)},0,900,"time");${S("counter", t.ap - 0.1, .55)}
to("#s7-clock",{color:"#34d399",duration:.25},${t.mi + 0.2});${S("ding", t.mi + 0.2, .5)}
inn("#s7-q",${t.n15 + 0.2},"up",.5);
` });
}

// ---------------- S8 — SCANNERS E PLACAS DE SOM SEM DRIVER (35.95 → 42.3) ----------------
{
  const t = { o: at("Outras"), te: at("testando"), sc: at("scanners"), pl: at("placas"), an: at("antigas"), pe: at("perderam"), dr: at("driver.") };
  V.scene({ id: "s8", t0: 35.8, t1: 42.3, in: "rise", html: `
    <div class="abs center-x tc" id="s8-h" style="top:160px;width:1000px"><div class="h2">outras pessoas já estão <span class="hl-amber">testando</span></div></div>
    <div class="abs polaroid" id="s8-sc" style="left:90px;top:330px;"><img src="assets/photos/scanner.png" style="width:380px;height:440px"/><div class="pl">scanner</div></div>
    <div class="abs polaroid" id="s8-pl" style="left:520px;top:400px;"><img src="assets/photos/placa_som.png" style="width:460px;height:250px"/><div class="pl">placa de som</div></div>
    <div class="abs dialog" id="s8-dlg" style="left:110px;top:930px">
      <div class="dt">Gerenciador de dispositivos</div>
      <div class="db"><div style="width:72px;height:72px;flex:none">${icon("triangle-alert", "#e8a200", 2.2)}</div><div>Dispositivo desconhecido:<br/>driver não encontrado</div></div>
    </div>
  `, js: `
inn("#s8-h",${t.o},"up",.45);${S("whoosh", t.o - 0.05, .5)}
fromTo("#s8-sc",{opacity:0,y:-200,rotation:-14},{opacity:1,y:0,rotation:-5,duration:.6,ease:E.back},${t.sc - 0.15});${S("drop", t.sc - 0.15, .55)}
fromTo("#s8-pl",{opacity:0,y:-200,rotation:14},{opacity:1,y:0,rotation:6,duration:.6,ease:E.back},${t.pl - 0.15});${S("drop", t.pl - 0.15, .55)}
inn("#s8-dlg",${t.pe - 0.15},"pop",.45);${S("alert", t.pe - 0.1, .7)}
shake("#s8-dlg",${t.dr});
` });
}

// ---------------- S9 — 88.900 ESTRELAS (42.3 → 46.95) ----------------
{
  const t = { p: at("projeto"), ul: at("ultrapassou"), n: at("88.900"), es: at("estrelas"), gh: at("GitHub.") };
  V.scene({ id: "s9", t0: 42.15, t1: 46.95, in: "zoom", html: `
    <div class="abs center-x tc" id="s9-big" style="top:190px;width:1040px">
      <div class="row" style="justify-content:center;gap:22px"><div class="ic" style="width:110px;height:110px">${icon("star", AMBER, 2.2)}</div><div class="display" id="s9-num" style="font-size:200px">0</div></div>
      <div class="kicker" style="margin-top:4px">estrelas no github</div>
    </div>
    <div class="abs" id="s9-repo" style="left:70px;top:560px">${ghRepo({ id: "s9-gh", owner: "morluto", repo: "rea", avatar: logo("github-icon.svg"),
      desc: "REA: Reverse Engineer Anything — one MCP for reverse engineering across binaries, applications, and runtime behavior.", topics: ["reverse-engineering", "decompiler", "disassembler", "ghidra", "model-context-protocol"], stars: "0", forks: "19.5k", starId: "s9-st" })}</div>
  `, js: `
inn("#s9-repo",${t.p},"rise",.55);${S("whoosh", t.p - 0.05, .5)}
count("#s9-num",${t.n - 0.05},1.2,0,88900,"int");${S("counter", t.n - 0.05, .6)}
count("#s9-st",${t.n - 0.05},1.2,0,88900,"int");
pulse("#s9-big",${t.es},1.06,.45);glow("#s9-st-btn",${t.es},"rgba(227,179,65,.45)");${S("ding", t.es, .55)}
` });
}

// ---------------- S10 — CÓDIGO ABERTO, LOCAL, CLAUDE CODE + CODEX (46.95 → 52.65) ----------------
{
  const t = { e: at("É"), ab: at("aberto,"), ro: at("roda"), mq: at("máquina"), ut: at("utilizado"), cc: at("Clod"), cx: at("Codex.") };
  V.scene({ id: "s10", t0: 46.8, t1: 52.65, in: "rise", html: `
    <div class="abs col gap20" style="left:70px;top:170px;width:940px">
      <div class="card row gap24" id="s10-r0" style="padding:28px 34px"><div class="ic" style="width:84px;height:84px">${icon("git-branch", "#34d399", 2)}</div><div><div class="h3">código aberto</div><div class="mono" style="font-size:24px;color:#7f8db0;margin-top:6px">licença MIT · github.com/morluto/rea</div></div></div>
      <div class="card row gap24" id="s10-r1" style="padding:28px 34px"><div class="ic" style="width:84px;height:84px">${icon("laptop", "#22d3ee", 2)}</div><div><div class="h3">roda na sua máquina</div><div class="mono" style="font-size:24px;color:#7f8db0;margin-top:6px">a análise é feita localmente</div></div></div>
    </div>
    <div class="abs win" id="s10-term" style="left:70px;top:560px;width:940px">
      <div class="win-bar"><i></i><i></i><i></i><span class="t">terminal</span></div>
      <div class="term"><span class="p">$</span> <span id="s10-cmd" data-text="npx rea-agents setup"></span></div>
    </div>
    <div class="abs row" style="left:70px;top:820px;width:940px;justify-content:center;gap:40px">
      <div class="col" id="s10-cc" style="align-items:center;gap:14px"><div class="tile" style="width:220px;height:220px;border-radius:56px;background:linear-gradient(160deg,#2a1d18,#140e0c);border-color:rgba(217,119,87,.5)"><img src="${logo("claude-icon.svg")}"/></div><div class="h3" style="font-size:34px">Claude Code</div></div>
      <div class="col" id="s10-cx" style="align-items:center;gap:14px"><div class="tile white" style="width:220px;height:220px;border-radius:56px"><img src="${logo("codex.svg")}"/></div><div class="h3" style="font-size:34px">Codex</div></div>
    </div>
  `, js: `
inn("#s10-r0",${t.e},"left",.45);${S("pop", t.ab - 0.1, .6)}
inn("#s10-r1",${t.ro - 0.1},"left",.45);${S("pop", t.ro - 0.1, .6)}
glow("#s10-r1",${t.mq},"rgba(34,211,238,.4)");
inn("#s10-term",${t.mq + 0.25},"up",.4);type("#s10-cmd",${t.ut - 0.3},.6);${S("typing", t.ut - 0.3, .45)}
inn("#s10-cc",${t.cc - 0.1},"pop",.45);${S("pop", t.cc - 0.1, .65)}
inn("#s10-cx",${t.cx - 0.1},"pop",.45);${S("pop", t.cx - 0.1, .65)}
` });
}

// ---------------- S11 — CTA DECODE (52.65 → end) ----------------
{
  const t = { q: at("Quer"), co: at("Comenta"), w: at("Comenta") + 0.48, seg: at("segue"), fe: at("próxima") };
  V.scene({ id: "s11", t0: 52.5, t1: 58.514, last: true, in: "zoom", push: 0.03,
    html: ctaHtml("s11", { q: `QUER VER <span class="hl-amber">FUNCIONANDO?</span>`, word: "DECODE", grad: "linear-gradient(90deg,#fbbf24,#ff8a3d)", logos: [{ f: "github-white.svg" }] }).replace('font-size:104px">QUER VER', 'font-size:84px">QUER VER'),
    js: ctaJs(V, "s11", { q: t.q, co: t.co, word: t.w, seg: t.seg, fe: t.fe }) });
}

V.write(`${ROOT}/projeto`);
