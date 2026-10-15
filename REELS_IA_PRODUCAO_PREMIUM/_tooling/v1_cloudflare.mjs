// VÍDEO 01 — CLOUDFLARE SECURITY AUDIT (narração Elvis 20:07:36)
import { Video, icon, logo, ghRepo, esc } from "./lib/build.mjs";

const ROOT = "/home/user/trindayy/REELS_IA_PRODUCAO_PREMIUM/01_CLOUDFLARE";
const V = new Video({
  id: "v1", title: "Cloudflare Security Audit",
  wordsPath: `${ROOT}/narracao/palavras_raw.json`, audioDur: 56.764,
  accent: "#22d3ee", capKey: "#38bdf8",
  fixes: { "Cloud@10": "Claude", "Cloud": "Claude", "Quero": "Quer", "auditoria": "AUDITORIA" },
  keywords: ["Cloudflare", "Cloudflare.", "graça,", "brechas", "segurança", "milhares", "falhas", "28", "mil", "estrelas", "Claude", "Code", "mapeia", "agentes", "login,", "dados,", "APIs", "Injection.", "interessante.", "provar", "verificados", "relatório", "corrigi-las.", "AUDITORIA", "link?"],
});
const at = (p, n) => V.at(p, n), en = (p, n) => V.end(p, n), S = (t, x, g) => V.sfx(t, x, g);
const ORANGE = "#f38020", CLAUDE = "#d97757";

V.extraCss = `
.cf-tile{background:linear-gradient(160deg,#fff,#eef1f6)}
.codecard{width:940px}
.codecard .ln{display:flex;gap:22px;padding:3px 26px;font-family:"JetBrains Mono",monospace;font-size:25px;line-height:1.55;color:#c8d3ee;white-space:pre;position:relative}
.codecard .ln .no{color:#4b5670;width:28px;text-align:right}
.codecard .ln.bad{background:linear-gradient(90deg,rgba(255,77,94,.0),rgba(255,77,94,.0))}
.flag{position:absolute;right:20px;top:50%;margin-top:-24px;height:48px;display:flex;align-items:center;gap:8px;padding:0 16px;border-radius:12px;background:#ff4d5e;color:#fff;font:800 22px Inter;letter-spacing:.02em}
.flag svg{width:26px;height:26px}
.beam{position:absolute;left:0;right:0;height:120px;background:linear-gradient(180deg,rgba(34,211,238,0),rgba(34,211,238,.28),rgba(34,211,238,0));border-bottom:2px solid rgba(34,211,238,.9)}
.cell{width:74px;height:46px;border-radius:9px;background:rgba(80,110,170,.16);border:1px solid rgba(140,170,240,.14);position:relative}
.cell i{position:absolute;width:14px;height:14px;border-radius:50%;background:#ff4d5e;box-shadow:0 0 14px #ff4d5e;left:30px;top:16px}
.agent{width:170px;height:170px;border-radius:44px;display:grid;place-items:center;background:linear-gradient(160deg,#1d2b52,#0e1630);border:2px solid rgba(34,211,238,.45);box-shadow:0 22px 60px rgba(0,0,0,.55)}
.agent svg{width:58%;height:58%}
.target{width:440px;height:200px;border-radius:30px;display:flex;align-items:center;gap:26px;padding:0 34px}
.target .ti{width:96px;height:96px;border-radius:26px;display:grid;place-items:center;background:rgba(34,211,238,.12);border:1.5px solid rgba(34,211,238,.4)}
.target .ti svg{width:58%;height:58%}
.target .tt{font:800 38px Inter;letter-spacing:-.02em}
.target .ts{font:600 22px "JetBrains Mono";color:#7c89a6;margin-top:6px}
.cand{width:290px;height:250px;border-radius:30px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px}
.cand .ci{width:92px;height:92px;border-radius:24px;display:grid;place-items:center;background:rgba(255,77,94,.14);border:1.5px solid rgba(255,77,94,.5)}
.cand .ci svg{width:56%;height:56%}
.cand .ct{font:800 30px Inter}
.cand .cs{font:600 21px "JetBrains Mono";color:#8b97b3}
.stamp{position:absolute;left:50%;top:50%;width:250px;margin-left:-125px;margin-top:-34px;height:68px;border-radius:14px;display:flex;align-items:center;justify-content:center;font:900 28px Inter;letter-spacing:.06em;border:4px solid}
.stamp.no{color:#ff4d5e;border-color:#ff4d5e;background:rgba(40,8,14,.92)}
.stamp.ok{color:#34d399;border-color:#34d399;background:rgba(6,34,24,.92)}
.rep .row{display:flex;align-items:center;gap:18px;padding:18px 0;border-bottom:1.5px solid #e3e8f1;font:700 28px Inter;color:#0b1222}
.sev{font:800 19px Inter;letter-spacing:.06em;padding:6px 12px;border-radius:8px}
.sev.a{background:#ffe1e4;color:#d0213a}.sev.m{background:#fff1d1;color:#b26b00}
.ok-pill{margin-left:auto;font:700 21px Inter;color:#0f9f6e;display:flex;gap:6px;align-items:center}
.ok-pill svg{width:24px;height:24px}
.diff{margin-top:18px;border-radius:16px;background:#0d1117;padding:16px 0;font:500 23px "JetBrains Mono";white-space:pre}
.diff div{padding:4px 22px}
.diff .m{background:rgba(248,81,73,.16);color:#ffb3ad}.diff .p{background:rgba(46,160,67,.2);color:#9be9a8}
.igbox{width:900px;height:132px;border-radius:66px;background:#fff;display:flex;align-items:center;gap:24px;padding:0 26px;box-shadow:0 30px 90px rgba(0,0,0,.6)}
.igbox .av{width:84px;height:84px;border-radius:50%;background:conic-gradient(from 210deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5,#feda75);padding:5px}
.igbox .av div{width:100%;height:100%;border-radius:50%;background:#1b2747}
.igbox .tx{font:900 64px "Space Grotesk";color:#0b1222;letter-spacing:-.01em}
.igbox .send{margin-left:auto;font:800 30px Inter;color:#0095f6}
.follow{display:inline-flex;align-items:center;gap:16px;padding:24px 46px;border-radius:24px;background:#0095f6;color:#fff;font:800 40px Inter;box-shadow:0 24px 60px rgba(0,149,246,.35)}
.follow svg{width:44px;height:44px}
`;

// ---------------- S1 — HOOK (0 → 7.0) ----------------
{
  const t = { cf: 0, gr: at("graça,"), sk: at("skill"), cl: at("Cloud"), br: at("brechas"), seg: at("segurança"), cod: at("código.") };
  const code = [
    `app.post("/login", async (req, res) => {`,
    `  const { user, pass } = req.body;`,
    `  const q = "SELECT * FROM users`,
    `    WHERE name='" + user + "'";`,
    `  const row = await db.query(q);`,
    `  if (row.pass === pass) login(res);`,
    `});`,
  ];
  V.scene({ id: "s1", t0: 0, t1: 7.0, in: "none", push: 0.04, html: `
    <div class="abs" id="s1-tiles" style="left:0;right:0;top:150px;height:250px">
      <div class="tile white abs" id="s1-cf" style="left:415px;top:0;width:250px;height:250px;border-radius:60px"><img src="${logo("cloudflare-icon.svg")}" style="width:74%"/></div>
      <div class="abs" id="s1-plus" style="opacity:0;left:515px;top:85px;width:50px;height:80px;font:700 80px Inter;color:#5d6880;text-align:center;line-height:80px">+</div>
      <div class="tile abs" id="s1-cl" style="left:415px;top:0;width:250px;height:250px;border-radius:60px;background:linear-gradient(160deg,#2a1d18,#140e0c);border-color:rgba(217,119,87,.5);opacity:0"><img src="${logo("claude-icon.svg")}" style="width:62%"/></div>
    </div>
    <div class="abs center-x tc" id="s1-h" style="top:440px;width:1000px">
      <div class="display" style="font-size:92px">A <span style="color:${ORANGE}">CLOUDFLARE</span> LIBEROU</div>
    </div>
    <div class="abs center-x tc" style="top:548px;width:1000px;height:130px">
      <div class="badge" id="s1-free" style="background:linear-gradient(135deg,#2f7bff,#22d3ee);color:#03111f;box-shadow:0 0 0 6px rgba(34,211,238,.25),0 30px 80px rgba(34,211,238,.35)">GRÁTIS</div>
    </div>
    <div class="abs" id="s1-skill" style="left:70px;top:705px;width:940px;display:flex;justify-content:center;gap:16px">
      <div class="chip amber">${icon("puzzle", "#fbbf24")}skill do Claude</div>
      <div class="chip red" id="s1-sec">${icon("shield-alert", "#ff4d5e")}segurança</div>
    </div>
    <div class="win codecard abs" id="s1-code" style="left:70px;top:810px">
      <div class="win-bar"><i></i><i></i><i></i><span class="t">seu-app / src / auth.ts</span></div>
      <div style="position:relative;padding:14px 0 18px">
        ${code.map((l, i) => `<div class="ln" id="s1-l${i}"><span class="no">${i + 1}</span><span>${esc(l)}</span></div>`).join("")}
        <div class="beam" id="s1-beam" style="top:-120px"></div>
        <div class="flag" id="s1-flag" style="top:148px">${icon("bug", "#fff", 2.4)}BRECHA</div>
      </div>
    </div>`, js: `
fromTo("#s1-cf",{scale:1.45,rotation:-8},{scale:1,rotation:0,duration:.7,ease:E.o4},0);
fromTo("#s1-h",{y:30,opacity:.0},{y:0,opacity:1,duration:.35,ease:E.o},0.0);
inn("#s1-free",${t.gr - 0.08},"slam");${S("impact", t.gr - 0.08, 0.9)}
pulse("#s1-free",${t.gr + 0.6},1.05,.5);
inn("#s1-skill",${t.sk - 0.05},"up",.45);${S("pop", t.sk - 0.05, .7)}
to("#s1-cf",{x:-165,duration:.55,ease:E.o4},${t.cl - 0.12});
fromTo("#s1-cl",{x:0,opacity:0,scale:.6},{x:165,opacity:1,scale:1,duration:.55,ease:E.back},${t.cl - 0.12});${S("whoosh_s", t.cl - 0.15, .7)}
fromTo("#s1-plus",{opacity:0,scale:.3},{opacity:1,scale:1,duration:.35,ease:E.back},${t.cl + 0.1});
inn("#s1-code",0.9,"rise",.7);${S("whoosh_s", 0.85, .45)}
fromTo("#s1-beam",{y:0},{y:420,duration:1.0,ease:"power1.inOut"},${t.br - 0.35});${S("scan", t.br - 0.35, .8)}
to("#s1-l2, #s1-l3",{backgroundColor:"rgba(255,77,94,.22)",color:"#ffd0d5",duration:.2},${t.br + 0.05});
inn("#s1-flag",${t.br + 0.08},"pop",.4);${S("alert", t.br + 0.08, .8)}
shake("#s1-code",${t.br + 0.1});
pulse("#s1-sec",${t.seg},1.12,.5);
` });
}

// ---------------- S2 — USO INTERNO / MILHARES DE FALHAS (7.0 → 13.45) ----------------
{
  const t = { e: at("Eles"), uso: at("uso"), enc: at("encontrou"), mil: at("milhares"), fal: at("falhas"), pr: at("própria"), cf: at("Cloudflare.") };
  // deterministic pseudo-random order for red dots
  const N = 10 * 8; let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const lit = []; for (let i = 0; i < N; i++) if (rnd() < 0.42) lit.push(i);
  const order = lit.map((i) => ({ i, r: rnd() })).sort((a, b) => a.r - b.r).map((x) => x.i);
  const cells = Array.from({ length: N }, (_, i) => `<div class="cell" id="s2-c${i}">${lit.includes(i) ? `<i id="s2-d${i}"></i>` : ""}</div>`).join("");
  V.scene({ id: "s2", t0: 6.85, t1: 13.45, in: "rise", html: `
    <div class="abs center-x row gap16" id="s2-k" style="top:170px;width:940px;justify-content:center">
      <div class="tile white" style="width:92px;height:92px;border-radius:24px"><img src="${logo("cloudflare-icon.svg")}" style="width:78%"/></div>
      <div class="kicker" style="color:#ffd2ad">uso interno · Cloudflare</div>
    </div>
    <div class="abs center-x tc" id="s2-h" style="top:300px;width:1000px">
      <div class="display" style="font-size:118px">MILHARES</div>
      <div class="display" style="font-size:118px;color:#ff4d5e">DE FALHAS</div>
    </div>
    <div class="abs card" id="s2-grid" style="left:70px;top:590px;width:940px;height:530px;padding:26px 24px;display:grid;grid-template-columns:repeat(10,74px);gap:16px 14px;justify-content:center;align-content:center">${cells}</div>
    <div class="abs center-x tc mono" id="s2-src" style="top:1130px;width:940px;font-size:22px;color:#7d89a3">fonte: blog.cloudflare.com · “Build your own vulnerability harness”</div>
  `, js: `
inn("#s2-k",${t.e},"down",.5);
inn("#s2-grid",${t.e + 0.2},"rise",.6);
set("#s2-h",{opacity:0},${t.e});
fromTo("#s2-grid .cell",{opacity:0},{opacity:1,duration:.3,stagger:.006},${t.e + 0.3});
${order.map((i, k) => `fromTo("#s2-d${i}",{scale:0,opacity:0},{scale:1,opacity:1,duration:.25,ease:E.back},${(t.enc + (k / order.length) * 1.6).toFixed(3)});`).join("")}
${S("tick_roll", t.enc, .55)}
fromTo("#s2-h",{opacity:0,scale:1.15},{opacity:1,scale:1,duration:.45,ease:E.o4},${t.mil - 0.05});${S("impact", t.mil - 0.05, .75)}
to("#s2-grid",{boxShadow:"0 0 0 3px rgba(255,77,94,.55), 0 30px 90px rgba(255,77,94,.25)",duration:.5},${t.fal});
inn("#s2-src",${t.pr - 0.3},"fade",.5);
pulse("#s2-k .tile",${t.cf},1.15,.5);
` });
}

// ---------------- S3 — 28 MIL ESTRELAS (13.45 → 17.45) ----------------
{
  const t = { p: at("projeto"), n: at("28"), mil: at("mil"), est: at("estrelas"), gh: at("GitHub.") };
  V.scene({ id: "s3", t0: 13.3, t1: 17.45, in: "rise", html: `
    <div class="abs center-x tc" id="s3-big" style="top:180px;width:1000px">
      <div class="row" style="justify-content:center;gap:26px">
        <div class="ic" style="width:120px;height:120px">${icon("star", "#fbbf24", 2.2)}</div>
        <div class="display" style="font-size:190px" id="s3-num">0</div>
      </div>
      <div class="kicker" style="margin-top:6px">estrelas no github</div>
    </div>
    <div class="abs" style="left:70px;top:560px" id="s3-repo">${ghRepo({ id: "s3-gh", owner: "cloudflare", repo: "security-audit-skill", avatar: logo("cloudflare-icon.svg"),
      desc: "A coding-agent skill that turns your agent into a security auditor.", stars: "0", forks: "1.7k", starId: "s3-st" })}</div>
  `, js: `
inn("#s3-repo",${t.p},"rise",.6);${S("whoosh", t.p - 0.1, .6)}
fromTo("#s3-big",{opacity:0,y:40},{opacity:1,y:0,duration:.4,ease:E.o},${t.n - 0.25});
count("#s3-num",${t.n - 0.1},${(t.est - t.n + 0.1).toFixed(2)},0,28,"mil");${S("counter", t.n - 0.1, .6)}
count("#s3-st",${t.n - 0.1},${(t.est - t.n + 0.1).toFixed(2)},0,28,"mil");
glow("#s3-st-btn",${t.est},"rgba(227,179,65,.45)");${S("ding", t.est, .55)}
pulse("#s3-big",${t.est},1.06,.45);
` });
}

// ---------------- S4 — INSTALA + MAPEIA (17.45 → 21.85) ----------------
{
  const t = { i: at("Você instala"), sk: at("skill", 2), cc: at("Cloud Code"), map: at("mapeia"), app: at("aplicativo"), int: at("interno.") };
  const sats = [
    { id: "login", l: "Login", ic: "log-in", x: 175, y: 690 },
    { id: "db", l: "Banco de dados", ic: "database", x: 905, y: 690 },
    { id: "api", l: "APIs", ic: "plug", x: 140, y: 975 },
    { id: "adm", l: "Rotas admin", ic: "route", x: 940, y: 975 },
    { id: "in", l: "Entradas", ic: "text-cursor-input", x: 540, y: 1105 },
  ];
  const cx = 540, cy = 860;
  V.scene({ id: "s4", t0: 17.3, t1: 21.85, in: "left", html: `
    <div class="win abs" id="s4-term" style="left:70px;top:150px;width:940px">
      <div class="win-bar"><i></i><i></i><i></i><span class="t">terminal</span></div>
      <div class="term" style="font-size:22.5px;padding:22px 26px"><span class="p">$</span> <span id="s4-cmd" data-text="npx skills add https://github.com/cloudflare/security-audit-skill"></span>
<span id="s4-ok" class="row" style="display:inline-flex;gap:12px;color:#9be9a8"><img src="${logo("claude-icon.svg")}" style="width:30px;height:30px"/>✓ instalada no Claude Code</span></div>
    </div>
    <svg class="wires" viewBox="0 0 1080 1920">${sats.map((s) => `<path id="s4-w-${s.id}" d="M${cx} ${cy} L${s.x} ${s.y}" stroke="rgba(34,211,238,.65)" stroke-width="3" fill="none" stroke-dasharray="8 10"/>`).join("")}</svg>
    <div class="node" id="s4-app" style="left:${cx - 110}px;top:${cy - 110}px"><div class="dot" style="width:220px;height:220px;border-radius:56px;border-color:rgba(34,211,238,.7)">${icon("app-window", "#22d3ee", 1.8)}</div></div>
    <div class="abs tc" id="s4-applb" style="left:${cx - 200}px;top:${cy + 120}px;width:400px;font:800 30px Inter">seu aplicativo</div>
    ${sats.map((s) => `<div class="node" id="s4-n-${s.id}" style="left:${s.x - 75}px;top:${s.y - 75}px"><div class="dot">${icon(s.ic, "#cfe0ff", 1.8)}</div><div class="lb">${s.l}</div></div>`).join("")}
    <div class="abs row gap12" id="s4-files" style="left:70px;top:420px;width:940px;justify-content:center">
      <div class="chip cyan mono" style="font-size:24px">${icon("file-text", "#22d3ee")}architecture.md</div>
      <div class="chip cyan mono" style="font-size:24px">${icon("file-json", "#22d3ee")}coverage-ledger.json</div>
    </div>
  `, js: `
type("#s4-cmd",${t.i},${(t.cc - t.i - 0.1).toFixed(2)});${S("typing", t.i, .5)}
inn("#s4-ok",${t.cc},"left",.4);${S("confirm", t.cc, .55)}
inn("#s4-app",${t.map - 0.2},"pop",.5);inn("#s4-applb",${t.map},"fade",.4);${S("pop", t.map - 0.2, .7)}
${sats.map((s, k) => `draw("#s4-w-${s.id}",${(t.map + 0.1 + k * 0.12).toFixed(2)},.5);inn("#s4-n-${s.id}",${(t.map + 0.25 + k * 0.12).toFixed(2)},"pop",.45);`).join("\n")}
${S("whoosh_s", t.map + 0.2, .5)}
inn("#s4-files",${t.int - 0.1},"up",.45);${S("click", t.int - 0.1, .6)}
` });
}

// ---------------- S5 — TIME DE AGENTES (21.85 → 30.85) ----------------
{
  const t = { d: at("Depois"), time: at("time"), ag: at("agentes"), pro: at("procurar"), lo: at("login,"), db: at("banco"), api: at("APIs"), at: at("ataques"), pi: at("Prompt") };
  const targets = [
    { id: "lo", l: "Login", s: "auth · sessões", ic: "log-in", x: 70, y: 690, t: t.lo },
    { id: "db", l: "Banco de dados", s: "queries · dados", ic: "database", x: 570, y: 690, t: t.db },
    { id: "api", l: "APIs", s: "rotas · endpoints", ic: "plug", x: 70, y: 935, t: t.api },
    { id: "pi", l: "Prompt Injection", s: "entradas de IA", ic: "message-square-warning", x: 570, y: 935, t: t.pi, red: true },
  ];
  const ax = [160, 400, 680, 920];
  V.scene({ id: "s5", t0: 21.7, t1: 30.85, in: "rise", html: `
    <div class="abs center-x tc" id="s5-h" style="top:160px;width:1000px"><div class="h2">UM TIME DE <span class="hl">AGENTES</span></div><div class="kicker" style="margin-top:14px">caçando falhas em paralelo</div></div>
    ${ax.map((x, k) => `<div class="abs" id="s5-a${k}" style="left:${x - 85}px;top:350px"><div class="agent">${icon("bot", "#22d3ee", 1.8)}</div><div class="mono tc" style="margin-top:10px;font-size:20px;color:#7f8db0">hunter ${k + 1}</div></div>`).join("")}
    <svg class="wires" viewBox="0 0 1080 1920">${targets.map((g, k) => `<path id="s5-w-${g.id}" d="M${ax[k]} 560 C ${ax[k]} 620, ${g.x + 220} 620, ${g.x + 220} ${g.y}" stroke="${g.red ? "rgba(255,77,94,.85)" : "rgba(34,211,238,.8)"}" stroke-width="3.5" fill="none"/>`).join("")}</svg>
    ${targets.map((g) => `<div class="abs card target" id="s5-t-${g.id}" style="left:${g.x}px;top:${g.y}px"><div class="ti" ${g.red ? 'style="background:rgba(255,77,94,.14);border-color:rgba(255,77,94,.55)"' : ""}>${icon(g.ic, g.red ? "#ff4d5e" : "#22d3ee", 1.9)}</div><div><div class="tt">${g.l}</div><div class="ts">${g.s}</div></div></div>`).join("")}
    <div class="abs row gap12" id="s5-ia" style="left:70px;top:1180px;width:940px;justify-content:center;opacity:0"></div>
  `, js: `
fromTo("#s5-h",{opacity:0,y:30},{opacity:1,y:0,duration:.45,ease:E.o},${t.time - 0.15});${S("whoosh", t.d, .55)}
${ax.map((_, k) => `inn("#s5-a${k}",${(t.ag - 0.1 + k * 0.1).toFixed(2)},"pop",.45);`).join("")}${S("pop_multi", t.ag - 0.1, .7)}
${targets.map((g) => `set("#s5-t-${g.id}",{opacity:.28},${t.d});`).join("")}
${ax.map((_, k) => `pulse("#s5-a${k} .agent",${(t.pro + k * 0.08).toFixed(2)},1.1,.4);`).join("")}
${targets.map((g) => `draw("#s5-w-${g.id}",${(g.t - 0.25).toFixed(2)},.4);fromTo("#s5-t-${g.id}",{opacity:.28,scale:.96},{opacity:1,scale:1,duration:.35,ease:E.back},${g.t.toFixed(2)});glow("#s5-t-${g.id}",${g.t.toFixed(2)},"${g.red ? "rgba(255,77,94,.6)" : "rgba(34,211,238,.45)"}");${V.sfx(g.red ? "alert" : "lock", g.t, g.red ? 0.8 : 0.6)}`).join("\n")}
shake("#s5-t-pi",${t.pi + 0.15});
` });
}

// ---------------- S6 — A PARTE MAIS INTERESSANTE (30.85 → 33.35) ----------------
{
  const t = { e: at("aqui"), p: at("parte"), i: at("interessante.") };
  V.scene({ id: "s6", t0: 30.7, t1: 33.35, in: "zoom", push: 0.06, html: `
    <div class="abs" style="left:90px;top:230px;width:900px;height:900px;border-radius:50%;background:radial-gradient(circle,rgba(34,211,238,.22),transparent 65%)" id="s6-spot"></div>
    <div class="abs center-x tc" style="top:420px;width:1000px">
      <div class="display" id="s6-a" style="font-size:110px">A PARTE</div>
      <div class="display" id="s6-b" style="font-size:110px">MAIS</div>
      <div class="display" id="s6-c" style="font-size:118px;color:#22d3ee">INTERESSANTE</div>
    </div>
    <div class="abs center-x" id="s6-arrow" style="top:930px;width:110px;height:110px">${icon("arrow-down", "#22d3ee", 2.4)}</div>
  `, js: `
inn("#s6-a",${t.e},"up",.4);inn("#s6-b",${t.p},"up",.4);${S("riser", t.e - 0.2, .6)}
inn("#s6-c",${t.i - 0.05},"slam");${S("impact", t.i - 0.05, .8)}
inn("#s6-arrow",${t.i + 0.3},"down",.4);
fromTo("#s6-arrow",{y:0},{y:24,duration:.4,yoyo:true,repeat:1,ease:E.soft},${t.i + 0.7});
` });
}

// ---------------- S7 — OUTRO AGENTE TENTA PROVAR QUE NÃO EXISTE (33.35 → 39.95) ----------------
{
  const t = { c: at("Cada"), enc: at("encontrada"), pas: at("passa"), out: at("outro"), ag: at("agente"), tr: at("trabalho"), pr: at("provar"), pb: at("problema"), ne: at("não existe.") };
  const cs = [0, 1, 2].map((k) => ({ k, x: 70 + k * 325 }));
  V.scene({ id: "s7", t0: 33.2, t1: 39.95, in: "rise", html: `
    <div class="abs center-x tc kicker" id="s7-k" style="top:165px;width:940px;color:#9fdcff">verificação independente</div>
    ${cs.map((c) => `<div class="abs card cand" id="s7-c${c.k}" style="left:${c.x}px;top:235px"><div class="ci">${icon("bug", "#ff4d5e", 1.9)}</div><div class="ct">possível falha</div><div class="cs">candidata #${c.k + 1}</div><div class="stamp no" id="s7-no${c.k}">✕ NÃO EXISTE</div></div>`).join("")}
    <svg class="wires" viewBox="0 0 1080 1920">${cs.map((c) => `<path id="s7-w${c.k}" d="M${c.x + 145} 500 C ${c.x + 145} 580, 540 560, 540 640" stroke="rgba(160,190,255,.55)" stroke-width="3" fill="none"/>`).join("")}</svg>
    <div class="abs center-x tc" id="s7-ver" style="top:645px;width:420px">
      <div class="agent" style="width:230px;height:230px;border-radius:60px;margin:0 auto;border-color:rgba(251,191,36,.7)">${icon("shield-question", "#fbbf24", 1.7)}</div>
      <div class="h3" style="margin-top:18px">agente verificador</div>
    </div>
    <div class="abs center-x glass tc" id="s7-bub" style="top:1000px;width:760px;padding:26px 30px;font:700 38px Inter">“Vou tentar <span class="hl-amber">provar</span> que essa falha <span class="hl-red">não existe</span>.”</div>
  `, js: `
inn("#s7-k",${t.c},"fade",.4);
${cs.map((c) => `inn("#s7-c${c.k}",${(t.c + c.k * 0.12).toFixed(2)},"pop",.45);set("#s7-no${c.k}",{opacity:0},${t.c});`).join("")}${S("pop_multi", t.c, .6)}
${cs.map((c) => `draw("#s7-w${c.k}",${(t.pas + c.k * 0.1).toFixed(2)},.45);`).join("")}${S("whoosh_s", t.pas, .55)}
inn("#s7-ver",${t.out - 0.05},"rise",.55);${S("power", t.out, .6)}
inn("#s7-bub",${t.tr - 0.2},"up",.45);
pulse("#s7-ver .agent",${t.pr},1.08,.5);
glow("#s7-c1",${t.pb - 0.1},"rgba(251,191,36,.45)");
fromTo("#s7-no1",{opacity:0,scale:1.8,rotation:-12},{opacity:1,scale:1,rotation:-8,duration:.35,ease:"back.out(1.5)"},${t.ne});${S("stamp", t.ne, .85)}
to("#s7-c1",{opacity:.55,duration:.3},${t.ne + 0.3});
` });
}

// ---------------- S8 — SÓ O QUE É REAL CHEGA AO RELATÓRIO (39.95 → 44.6) ----------------
{
  const t = { a: at("Assim,"), so: at("somente"), re: at("realmente"), ve: at("verificados"), ch: at("chegam"), rel: at("relatório"), fi: at("final.") };
  V.scene({ id: "s8", t0: 39.8, t1: 44.6, in: "rise", html: `
    <div class="abs center-x tc" style="top:165px;width:1000px"><div class="h2">só o que é <span class="hl-green">verificado</span></div></div>
    ${[0, 1, 2].map((k) => `<div class="abs card cand" id="s8-c${k}" style="left:${70 + k * 325}px;top:300px;height:210px"><div class="ci" style="width:80px;height:80px">${icon("bug", "#ff4d5e", 1.9)}</div><div class="cs">candidata #${k + 1}</div></div>`).join("")}
    <div class="abs" id="s8-filter" style="left:70px;top:560px;width:940px;height:88px;border-radius:24px;background:linear-gradient(90deg,rgba(47,123,255,.25),rgba(34,211,238,.25));border:2px solid rgba(34,211,238,.6);display:flex;align-items:center;justify-content:center;gap:16px;font:800 34px Inter">${icon("filter", "#22d3ee")}<span>verificação</span></div>
    <div class="abs row" style="left:70px;top:690px;width:940px;justify-content:space-between">
      <div class="chip green mono" id="s8-k0" style="font-size:26px">✓ confirmed</div>
      <div class="chip red mono" id="s8-k1" style="font-size:26px">✕ rejected</div>
      <div class="chip green mono" id="s8-k2" style="font-size:26px">✓ confirmed</div>
    </div>
    <div class="abs center-x win" id="s8-doc" style="top:820px;width:560px">
      <div class="win-bar"><i></i><i></i><i></i><span class="t">findings.json → REPORT.md</span></div>
      <div style="padding:26px 30px;display:flex;align-items:center;gap:24px"><div class="ic" style="width:110px;height:110px">${icon("file-check-2", "#34d399", 1.6)}</div><div><div class="h3">Relatório final</div><div class="mono" style="font-size:22px;color:#7f8db0;margin-top:8px">2 falhas confirmadas</div></div></div>
    </div>
  `, js: `
${[0, 1, 2].map((k) => `inn("#s8-c${k}",${(t.a + k * 0.08).toFixed(2)},"down",.4);`).join("")}${S("whoosh", t.a - 0.1, .55)}
inn("#s8-filter",${t.a + 0.2},"wipe",.5);
inn("#s8-k0",${t.so},"pop",.35);inn("#s8-k2",${t.so + 0.15},"pop",.35);inn("#s8-k1",${t.so + 0.3},"pop",.35);${S("confirm", t.so, .5)}
to("#s8-c1",{y:60,opacity:.15,rotation:8,duration:.5,ease:"power2.in"},${t.re});${S("drop", t.re, .5)}
to("#s8-k1",{opacity:.3,duration:.4},${t.re + 0.2});
glow("#s8-c0",${t.ve},"rgba(52,211,153,.45)");glow("#s8-c2",${t.ve},"rgba(52,211,153,.45)");
inn("#s8-doc",${t.ch - 0.1},"rise",.55);${S("ding", t.rel, .6)}
pulse("#s8-doc",${t.fi},1.05,.45);
` });
}

// ---------------- S9 — RELATÓRIO + COMO CORRIGIR (44.6 → 50.3) ----------------
{
  const t = { nf: at("No final,"), rec: at("recebe"), rel: at("relatório", 2), fa: at("falhas", 3), id: at("identificadas"), ex: at("exatamente"), co: at("corrigi-las.") };
  V.scene({ id: "s9", t0: 44.45, t1: 50.3, in: "rise", push: 0.025, html: `
    <div class="abs card light rep" id="s9-rep" style="left:70px;top:160px;width:940px;padding:34px 40px 40px;border-radius:34px">
      <div class="row gap16" style="margin-bottom:10px"><div class="ic" style="width:56px;height:56px">${icon("shield-check", "#0f9f6e", 2)}</div><div style="font:900 44px 'Space Grotesk';letter-spacing:-.02em">Relatório de segurança</div></div>
      <div class="mono" style="font-size:21px;color:#5b6680;margin-bottom:10px">REPORT.md · FINDINGS-DETAIL.md</div>
      <div class="row" id="s9-r0"><span class="sev a">ALTA</span><span>Falha #1 · rota /login</span><span class="ok-pill">${icon("check-circle-2", "#0f9f6e")}verificada</span></div>
      <div class="row" id="s9-r1"><span class="sev m">MÉDIA</span><span>Falha #2 · sessão</span><span class="ok-pill">${icon("check-circle-2", "#0f9f6e")}verificada</span></div>
      <div id="s9-fix" style="margin-top:22px">
        <div style="font:800 30px Inter;color:#0b1222" class="row gap12"><span class="ic" style="width:36px;height:36px">${icon("wrench", "#2f7bff", 2.2)}</span>Como corrigir</div>
        <div class="diff"><div class="m" id="s9-m">- "... WHERE name='" + user + "'"</div><div class="p" id="s9-p">+ db.query("... WHERE name = ?", [user])</div></div>
      </div>
      <div class="mono" style="font-size:18px;color:#8a94aa;margin-top:16px">exemplo ilustrativo</div>
    </div>
  `, js: `
fromTo("#s9-rep",{y:180,opacity:0,rotationX:-25,transformPerspective:1200},{y:0,opacity:1,rotationX:0,duration:.7,ease:E.o4},${t.nf});${S("whoosh", t.nf - 0.05, .6)}
inn("#s9-r0",${t.fa - 0.05},"left",.4);inn("#s9-r1",${t.id},"left",.4);${S("click", t.fa - 0.05, .6)}${S("click", t.id, .6)}
inn("#s9-fix",${t.ex - 0.2},"up",.45);
inn("#s9-m",${t.ex},"left",.35);inn("#s9-p",${t.co - 0.1},"left",.35);${S("confirm", t.co, .65)}
` });
}

// ---------------- S10 — CTA AUDITORIA (50.3 → end) ----------------
{
  const t = { q: at("Quero"), co: at("Comenta"), au: at("auditoria"), aq: at("aqui"), seg: at("segue"), fe: at("ferramentas"), ia: at("inteligência", 2) };
  V.scene({ id: "s10", t0: 50.15, t1: 56.764, last: true, in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc" id="s10-q" style="top:170px;width:1000px"><div class="display" style="font-size:112px">QUER O <span class="hl">LINK?</span></div></div>
    <div class="abs center-x tc kicker" id="s10-k" style="top:330px;width:940px">comenta a palavra</div>
    <div class="abs center-x tc" id="s10-word" style="top:395px;width:1000px"><div class="display" style="font-size:150px;background:linear-gradient(90deg,#2f7bff,#22d3ee);-webkit-background-clip:text;color:transparent;padding:0 10px">AUDITORIA</div></div>
    <div class="abs igbox" id="s10-box" style="left:90px;top:610px"><div class="av"><div></div></div><div class="tx" id="s10-tx" data-text="AUDITORIA"></div><div class="send">Publicar</div></div>
    <div class="abs center-x tc" style="top:820px;width:600px"><div class="follow" id="s10-fol">${icon("user-plus", "#fff", 2.4)}Seguir</div></div>
    <div class="abs center-x row gap24" id="s10-logos" style="top:1000px;width:940px;justify-content:center">
      <div class="tile white" style="width:130px;height:130px;border-radius:34px"><img src="${logo("cloudflare-icon.svg")}"/></div>
      <div class="tile" style="width:130px;height:130px;border-radius:34px"><img src="${logo("claude-icon.svg")}"/></div>
      <div class="chip">${icon("sparkles", "#22d3ee")}mais ferramentas de IA</div>
    </div>
  `, js: `
inn("#s10-q",${t.q - 0.05},"slam");${S("impact", t.q - 0.05, .7)}
inn("#s10-k",${t.co - 0.05},"fade",.3);
inn("#s10-box",${t.co},"up",.45);${S("pop", t.co, .6)}
type("#s10-tx",${t.au},.45);${S("typing", t.au, .55)}
inn("#s10-word",${t.au + 0.05},"pop",.5);${S("shimmer", t.au + 0.05, .7)}
pulse("#s10-box",${t.aq},1.04,.4);
inn("#s10-fol",${t.seg - 0.05},"pop",.45);${S("click", t.seg - 0.05, .8)}
pulse("#s10-fol",${t.seg + 0.5},1.06,.4);
inn("#s10-logos",${t.fe - 0.1},"up",.5);${S("whoosh_s", t.fe - 0.15, .45)}
` });
}

V.write(`${ROOT}/projeto`);
