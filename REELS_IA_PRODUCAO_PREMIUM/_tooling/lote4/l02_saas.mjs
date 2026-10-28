// LOTE 4 · 02 — DESMONTANDO UM SaaS (Mário 10:20) · ref destravandosaas · ESTILO CAMPEÃO
// 13 peças no mesmo ciclo da fala: "Mas…" (problema, vermelho) → "Então…" (pedido digitado no terminal) → "Esse é o ___" (peça encaixa).
// Interfaces e pedidos são ilustrativos (a fala diz "você pede pro Claude"); IP e chave de API são fictícios e mascarados.
import { Video, icon, logo } from "../lib/build.mjs";
import { KIT4_CSS, COMMON_CSS, narr } from "../lib/kit4.mjs";

const DIR = "02_SAAS", OUT = `/home/user/trindayy/REELS_IA_LOTE4/${DIR}`;
const CY = "#22d3ee", AM = "#fbbf24", RD = "#ff4d5e", CL = "#d97757", GN = "#34d399";
const V = new Video({
  id: "l4-02", title: "Desmontando um SaaS", wordsPath: narr(DIR), audioDur: 139.75, autoHide: true,
  accent: CY, capKey: AM,
  fixes: { "Clod,": "Claude,", "Clod": "Claude", "Cloud": "Claude", "SaS.": "SaaS.", "Proibido.": "proibido." },
  keywords: ["servidor.", "domínio.", "banco", "dados.", "login.", "permissões.", "API.", "gateway", "pagamento.", "webhook.", "assinatura.", "transacional.", "variáveis", "ambiente.", "monitoramento.", "backup.", "SaS.", "sumiu.", "enorme.", "proibido.", "Proibido.", "desmontada?"],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
const W = V.words, st = (i) => +W[i].start.toFixed(3);
// âncoras automáticas: 13 "Então" (pedido) e 13 "Esse/Essa/Essas" (nome = 3ª palavra depois)
const idxE = W.map((w, i) => (w.n === "entao" ? i : -1)).filter((i) => i >= 0);
const idxN = W.map((w, i) => (["esse", "essa", "essas"].includes(w.n) && ["e", "sao"].includes(W[i + 1]?.n) ? i : -1)).filter((i) => i >= 0);
if (idxE.length !== 13 || idxN.length !== 13) throw new Error(`âncoras: ${idxE.length} então / ${idxN.length} esse`);
const PECAS = [
  { n: "SERVIDOR", ic: "server", c: "#38bdf8", prob: null, req: "coloca meu app num servidor ligado 24h" },
  { n: "DOMÍNIO", ic: "globe", c: "#60a5fa", prob: [`<span class="mono" style="font-size:.62em">http://203.0.113.47</span>`, "o cliente precisa digitar um número enorme"], req: "liga o domínio agenda.com.br no servidor" },
  { n: "BANCO DE DADOS", ic: "database", c: AM, prob: [`14h <span style="color:${RD}">✕</span>`, "recarregou a página e o horário sumiu"], req: "salva os horários num banco de dados" },
  { n: "LOGIN", ic: "key-round", c: "#a78bfa", prob: [icon("users", RD, 2), "qualquer pessoa entra e mexe na agenda"], req: "cria login com e-mail e senha" },
  { n: "PERMISSÕES", ic: "shield-check", c: GN, prob: [`A <span style="color:${RD}">→</span> agenda do B`, "o cliente A vê a agenda do cliente B"], req: "cada usuário só vê os próprios horários" },
  { n: "API", ic: "braces", c: CY, prob: [`tela <span style="color:${RD}">⟶</span> banco`, "quem descobrir o caminho apaga tudo"], req: "cria uma API entre a tela e o banco" },
  { n: "GATEWAY DE PAGAMENTO", ic: "credit-card", c: "#f472b6", prob: [`<span style="color:${RD}">PROIBIDO</span>`, "guardar o cartão do cliente"], req: "integra um gateway de pagamento" },
  { n: "WEBHOOK", ic: "bell-ring", c: "#fb923c", prob: [`pagou<span style="color:${RD}">?</span>`, "o pagamento acontece lá fora"], req: "avisa meu servidor quando o cliente pagar" },
  { n: "ASSINATURA", ic: "calendar-sync", c: "#4ade80", prob: [`cobrar na mão <span style="color:${RD}">✕</span>`, "todo mês, um por um, não dá"], req: "cobra sozinho todo mês no mesmo dia" },
  { n: "E-MAIL TRANSACIONAL", ic: "mail", c: "#93c5fd", prob: [`${icon("bell-off", RD, 2)}`, "senha esquecida, cartão vencido… ninguém avisa"], req: "manda e-mail automático pro cliente" },
  { n: "VARIÁVEIS DE AMBIENTE", ic: "vault", c: "#facc15", prob: [`<span class="mono" style="font-size:.6em">STRIPE_KEY=sk_live_••••</span>`, "a chave subiu pro GitHub e um robô achou"], req: "guarda as chaves fora do código (.env)" },
  { n: "MONITORAMENTO", ic: "siren", c: "#f87171", prob: [`03:00 <span style="color:${RD}">●</span>`, "o servidor caiu e ninguém viu"], req: "me avisa no celular se o servidor cair" },
  { n: "BACKUP", ic: "archive-restore", c: "#2dd4bf", prob: [`${icon("trash-2", RD, 2)}`, "um dia você apaga o banco inteiro"], req: "faz uma cópia do banco toda noite" },
];
V.extraCss = COMMON_CSS + KIT4_CSS + `
.trm{position:absolute;left:70px;top:150px;width:940px;height:132px;border-radius:24px;background:#0b111f;border:2px solid rgba(160,190,255,.18);box-shadow:0 24px 60px rgba(0,0,0,.5);z-index:5;overflow:hidden}
.trm .bar{height:44px;display:flex;align-items:center;gap:10px;padding:0 20px;background:#111a2c;font:600 19px "JetBrains Mono";color:#7f8db0}
.trm .bar img{width:24px;height:24px}
.trm .ln{position:absolute;left:24px;right:24px;top:62px;font:600 30px "JetBrains Mono";color:#eef3ff;white-space:nowrap;overflow:hidden}
.trm .ln b{color:${CL}}
.rack{position:absolute;left:60px;top:1050px;width:960px;display:flex;justify-content:space-between;z-index:5}
.rack .sl{width:66px;height:66px;border-radius:18px;background:rgba(14,21,38,.92);border:2px solid rgba(160,190,255,.14);display:grid;place-items:center}
.rack .sl svg{width:58%;height:58%}
.prob{position:absolute;left:70px;top:330px;width:940px;height:330px;border-radius:30px;background:linear-gradient(165deg,rgba(60,14,24,.92),rgba(24,8,14,.95));border:3px solid rgba(255,77,94,.55);box-shadow:0 30px 80px rgba(0,0,0,.55),0 0 60px rgba(255,77,94,.15);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;text-align:center}
.prob .pk{font:700 22px "JetBrains Mono";letter-spacing:.16em;color:#ff8f9a}
.prob .pv{font:700 92px "Space Grotesk";letter-spacing:-.03em;color:#fff;line-height:1}
.prob .pv svg{width:110px;height:110px}
.prob .pt{font:700 36px Inter;color:#ffd0d5;max-width:820px}
.sol{position:absolute;left:400px;top:570px;width:280px;height:280px;border-radius:72px;display:grid;place-items:center;box-shadow:0 30px 80px rgba(0,0,0,.55)}
.sol svg{width:52%;height:52%}
.pname{position:absolute;left:40px;width:1000px;top:870px;text-align:center}
`;
// ---------- overlays persistentes: terminal do Claude Code, contador e "rack" das 13 peças ----------
const tEnd = at("Parabéns!") - 0.08, tCTA = at("Agora", 2) - 0.08;
const reqs = ["faz um app de agendamento", ...PECAS.map((p) => p.req)];
V.overlayHtml += `
<div class="trm" id="trm"><div class="bar"><img src="${logo("claude-icon.svg")}"/>Claude Code<span style="margin-left:auto;font-size:16px">exemplo</span></div>
  ${reqs.map((r, i) => `<div class="ln" id="rq${i}"><b>&gt;</b> <span id="rqt${i}" data-text="${r}"></span></div>`).join("")}</div>
<div class="cnt" id="cnt" style="top:70px">PEÇAS <b style="color:${AM}"><span id="cn">0</span>/13</b></div>
<div class="rack" id="rack">${PECAS.map((p, i) => `<div class="sl" id="sl${i}">${icon(p.ic, "#3d4a66", 2)}</div>`).join("")}</div>`;
const xj = [];
xj.push(`tl.fromTo("#trm",{opacity:0,y:-40},{opacity:1,y:0,duration:.45,ease:"expo.out",immediateRender:true},0.05);tl.fromTo("#rack",{opacity:0,y:40},{opacity:1,y:0,duration:.45,ease:"expo.out",immediateRender:true},0.3);tl.fromTo("#cnt",{opacity:0},{opacity:1,duration:.3,immediateRender:true},0.3);`);
reqs.forEach((_, i) => xj.push(`tl.set("#rq${i}",{opacity:0},0);`));
const typeAt = (i, t, d) => { xj.push(`tl.set("#rq${i}",{opacity:1},${t.toFixed(2)});${i ? `tl.set("#rq${i - 1}",{opacity:0},${t.toFixed(2)});` : ""}`); return `type("#rqt${i}",${t.toFixed(2)},${d});`; };

// ---------- S0 — o app "lindo" que só existe no seu PC ----------
{
  const t = { fa: at("faz"), el: at("Ele"), li: at("lindo."), so: at("só"), co: at("computador."), de: at("Desligou"), su: at("sumiu.") };
  V.scene({ id: "s0", t0: 0, t1: st(idxE[0]) - 0.08, in: "none", push: 0.04, html: `
    <div class="abs" id="s0-mon" style="left:170px;top:340px;width:740px;height:520px">
      <div id="s0-scr" style="position:relative;width:740px;height:460px;border-radius:30px;background:#0f1a30;border:14px solid #1d2840;overflow:hidden;box-shadow:0 40px 100px rgba(0,0,0,.55)">
        <div id="s0-app" style="position:absolute;left:190px;top:80px;width:330px;height:270px;border-radius:44px;background:linear-gradient(160deg,#38bdf8,#2563eb);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;box-shadow:0 24px 60px rgba(37,99,235,.45)"><div style="width:110px;height:110px">${icon("calendar-check", "#fff", 2)}</div><div style="font:800 46px Inter;color:#fff">APP</div></div>
        <div id="s0-off" style="position:absolute;inset:0;background:#02040a"></div></div>
      <div style="width:200px;height:64px;margin:0 auto;background:#1d2840;clip-path:polygon(20% 0,80% 0,100% 100%,0 100%)"></div></div>
    <div class="abs" id="s0-sp" style="left:700px;top:360px;width:110px;height:110px">${icon("sparkles", AM, 2)}</div>
    <div class="abs" id="s0-pc" style="left:330px;top:900px"><div class="chip red" style="font-size:36px">${icon("monitor", "#ffd0d5", 2.2)}só no seu computador</div></div>
  `, js: `
${typeAt(0, t.fa - 0.1, 0.9)}${S("typing", t.fa - 0.1, .55)}
inn("#s0-mon",0.15,"up",.5);set("#s0-off",{opacity:0},0);
fromTo("#s0-app",{scale:0,opacity:0,rotation:-10},{scale:1,opacity:1,rotation:0,duration:.55,ease:E.back},${t.el - 0.1});${S("pop", t.el - 0.1, .7)}
inn("#s0-sp",${t.li - 0.1},"pop",.35);pulse("#s0-app",${t.li},1.08,.4);${S("shimmer", t.li, .6)}
inn("#s0-pc",${t.so - 0.05},"up",.4);${S("alert", t.so, .45)}
to("#s0-off",{opacity:1,duration:.12},${t.de + 0.1});to("#s0-sp",{opacity:0,duration:.1},${t.de + 0.1});${S("power", t.de, .7)}
shake("#s0-mon",${t.su - 0.1});${S("glitch", t.su - 0.1, .6)}
` });
}
// ---------- S1..S13 — as 13 peças ----------
PECAS.forEach((p, k) => {
  const tE = st(idxE[k]), iN = idxN[k], tNm = st(iN + 3), tN0 = st(iN);
  const t0 = k === 0 ? tE - 0.08 : st(idxN[k - 1] + 4) - 0.08; // começa no "Mas…/Agora…" depois da peça anterior
  const t1 = k < 12 ? st(idxN[k] + 4) - 0.08 : tEnd;
  const tSol = Math.min(tN0 - 0.5, tE + 2.0);
  const id = `p${k + 1}`;
  V.scene({ id, t0, t1, in: k % 2 ? "left" : "rise", push: 0.035, html: `
    ${p.prob ? `<div class="prob" id="${id}-pb"><div class="pk">PROBLEMA</div><div class="pv">${p.prob[0]}</div><div class="pt">${p.prob[1]}</div></div>` : ""}
    <div class="sol" id="${id}-so" style="background:${p.c}">${icon(p.ic, "#06101c", 2)}</div>
    <div class="pname" id="${id}-nm"><div class="kicker" style="color:${AM}">peça ${k + 1} de 13</div><div class="display" style="font-size:${p.n.length > 14 ? 74 : 104}px;color:${AM};margin-top:10px">${p.n}</div></div>
  `, js: `
${p.prob ? `inn("#${id}-pb",${t0 + 0.05},"down",.45);${S("alert", t0 + 0.1, .5)}
to("#${id}-pb",{scale:.82,y:-40,opacity:.28,duration:.45,ease:"power2.inOut"},${tE + 0.2});` : ""}
${typeAt(k + 1, tE + 0.15, Math.min(1.4, Math.max(0.7, p.req.length * 0.032)))}${S("typing", tE + 0.15, .5)}
fromTo("#${id}-so",{scale:0,opacity:0,rotation:-14},{scale:1,opacity:1,rotation:0,duration:.5,ease:E.back},${tSol.toFixed(2)});${S("pop", tSol, .7)}
glow("#${id}-so",${tSol + 0.4},"${p.c}88",.4);
inn("#${id}-nm",${tNm - 0.1},"slam");${S("impact", tNm - 0.06, .7)}
` });
  xj.push(`tl.to("#sl${k}",{backgroundColor:"${p.c}",borderColor:"${p.c}",duration:.2},${tNm.toFixed(2)});tl.to("#sl${k} svg",{stroke:"#06101c",duration:.2},${tNm.toFixed(2)});tl.fromTo("#sl${k}",{scale:1},{scale:1.25,duration:.15,yoyo:true,repeat:1,immediateRender:false},${tNm.toFixed(2)});`);
});
// contador de peças: um proxy que sobe 1 a cada encaixe (seek-safe, sem callbacks)
xj.push(`(function(){const el=document.getElementById("cn"),p={v:0};${PECAS.map((_, k) => `tl.to(p,{v:${k + 1},duration:.01,onUpdate:()=>{el.textContent=Math.round(p.v)}},${st(idxN[k] + 3).toFixed(2)});`).join("")}})();`);
// ---------- FINAL — parabéns, você construiu um SaaS + CTA de enquete ----------
{
  const t = { pa: at("Parabéns!"), cs: at("construiu"), sa: at("SaS."), ag: at("Agora", 2), co: at("comenta."), qu: at("Qual"), pe: at("peças"), de: at("desmontada?") };
  xj.push(`tl.to("#trm",{opacity:0,y:-40,duration:.35},${(t.pa - 0.1).toFixed(2)});tl.to("#cnt",{opacity:0,duration:.3},${(t.pa - 0.1).toFixed(2)});tl.to("#rack",{y:-560,scale:1.04,duration:.6,ease:"power3.inOut"},${(t.pa - 0.1).toFixed(2)});`);
  V.scene({ id: "s14", t0: tEnd, t1: V.dur, last: true, in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc" id="s14-h" style="top:160px;width:1000px"><div class="kicker" style="color:${AM}">parabéns!</div><div class="display" style="font-size:96px;margin-top:12px">VOCÊ CONSTRUIU</div><div class="display" style="font-size:150px;color:${CY}">UM SaaS</div></div>
    <div class="abs center-x tc" id="s14-q" style="top:600px;width:1000px"><div class="kicker">comenta aqui embaixo</div><div class="h2" style="margin-top:14px">qual peça você quer ver <span style="color:${AM}">desmontada?</span></div></div>
    <div class="abs igbox" id="s14-box" style="left:90px;top:840px"><div class="av"><div></div></div><div class="tx" id="s14-tx" data-text="webhook 👀"></div><div class="send">Publicar</div></div>
    <div class="abs" id="s14-dn" style="left:470px;top:1000px;width:140px;height:140px;color:${CY}">${icon("chevrons-down", "currentColor", 2.6)}</div>
  `, js: `
inn("#s14-h",${t.pa},"slam");${S("impact", t.pa, .8)}${S("shimmer", t.sa, .6)}pulse("#s14-h",${t.sa},1.05,.35);
${PECAS.map((p, k) => `pulse("#sl${k}",${(t.cs + k * 0.04).toFixed(2)},1.2,.25);`).join("")}${S("pop_multi", t.cs, .5)}
inn("#s14-q",${t.co - 0.1},"up",.4);
inn("#s14-box",${t.qu - 0.05},"up",.4);${S("pop", t.qu, .55)}type("#s14-tx",${t.pe},.6);${S("typing", t.pe, .5)}
inn("#s14-dn",${t.de},"drop",.4);fromTo("#s14-dn",{y:0},{y:26,duration:.32,yoyo:true,repeat:5,ease:"sine.inOut",immediateRender:false},${t.de + 0.5});
` });
}
V.extraJs.push(xj.join("\n"));
V.write(`${OUT}/projeto`);
