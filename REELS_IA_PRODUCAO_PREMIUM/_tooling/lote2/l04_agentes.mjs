// LOTE 2 · 04 — AGENTES (Lendário 00:03) · ref cd841f15 (Agency Agents)
// Divisões, cores, ícones e nomes de agentes vêm do repositório msitarzewski/agency-agents (divisions.json + frontmatter).
import fs from "node:fs";
import { Video, icon, logo, esc } from "../lib/build.mjs";
import { KIT2_CSS, ctaHtml2, ctaJs2, L2ROOT, TR } from "../lib/kit2.mjs";

const OUT = `${L2ROOT}/04_AGENTES`;
const REPO = "/root/repos/msitarzewski_agency-agents";
const DIV = JSON.parse(fs.readFileSync(`${REPO}/divisions.json`, "utf8")).divisions;
const kebab = (s) => s.replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
const D = (k) => ({ ...DIV[k], ic: kebab(DIV[k].icon) });
const VI = "#7c3aed", PK = "#ec4899", GR = "#10b981", OR = "#f97316", BL = "#3b82f6", INK = "#0f1115";
const V = new Video({
  id: "l04", title: "Agency Agents", kit2: true, theme: "light", capMaxWords: 3, capMaxChars: 18,
  wordsPath: `${TR}/2026-10-16T00_03_23_Lend_rio_-_Cheerful_Vibrant_and_Fun.json`, audioDur: 72.4, // 71.24 s narração + respiro
  accent: VI, capKey: VI, vars: { a1: VI, a2: PK, a3: GR, capbg: VI, capfg: "#fff" },
  fixes: {},
  keywords: ["equipe", "Agency", "Agents.", "agentes", "design,", "desenvolvimento.", "Marketing", "vendas.", "papel", "planejar,", "revisar", "específicas.", "negócio,"],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
V.extraCss = KIT2_CSS + `
.laptop{position:absolute;left:150px;top:440px;width:780px}
.laptop .scr{width:780px;height:500px;border-radius:30px 30px 10px 10px;background:#141021;border:14px solid #1f1a2e;box-shadow:0 30px 80px rgba(60,20,120,.35);position:relative;overflow:hidden}
.laptop .base{width:900px;height:34px;margin-left:-60px;border-radius:0 0 30px 30px;background:linear-gradient(#d9d2e6,#b9b0cc)}
.dtile{width:108px;height:108px;border-radius:28px;display:grid;place-items:center;box-shadow:0 10px 24px rgba(0,0,0,.35)}
.dtile svg{width:56%;height:56%}
.agc{display:flex;align-items:center;gap:26px;padding:26px 30px;border-radius:30px;background:#fffdf9;border:3px solid;box-shadow:0 20px 50px rgba(60,40,10,.14)}
.agc .ai{width:110px;height:110px;border-radius:30px;display:grid;place-items:center;flex:none}
.agc .ai svg{width:56%;height:56%}
.agc .an{font:900 46px Inter;letter-spacing:-.02em;line-height:1.05}
.agc .ad{font:700 26px "JetBrains Mono";opacity:.6;margin-top:6px}
.bigt{border-radius:36px;display:flex;flex-direction:column;justify-content:space-between;padding:34px;color:#fff;box-shadow:0 18px 0 rgba(0,0,0,.12),0 30px 60px rgba(60,40,10,.18)}
.bigt .bi{width:120px;height:120px}
.bigt .bl{font:900 60px Inter;letter-spacing:-.03em;line-height:1}
.bigt .bs{font:700 26px "JetBrains Mono";opacity:.85;margin-top:8px}
.md{border-radius:28px;background:#16131f;color:#e8e3f5;font:500 29px "JetBrains Mono";line-height:1.55;padding:34px 36px;box-shadow:0 30px 70px rgba(30,10,60,.3);white-space:pre-wrap}
.md .k{color:#c4b5fd}.md .s{color:#86efac}.md .h{color:#f9a8d4;font-weight:800}.md .c{color:#8b84a3}
.md .hl{border-radius:10px;padding:2px 6px;margin:0 -6px}
.lane{border-radius:26px;background:rgba(124,58,237,.07);border:2px dashed rgba(124,58,237,.3);padding:18px 14px;display:flex;flex-direction:column;gap:14px}
.lane .lt{font:900 32px Inter;text-align:center}
.kc{height:76px;border-radius:18px;box-shadow:0 8px 0 rgba(0,0,0,.12)}
.step{display:flex;align-items:center;gap:20px;padding:20px 26px;border-radius:24px;background:#fffdf9;border:2px solid rgba(15,17,21,.1);font:900 40px Inter;box-shadow:0 14px 30px rgba(60,40,10,.12);position:relative}
.aib{position:absolute;right:-16px;top:-18px;padding:8px 16px;border-radius:14px;background:${VI};color:#fff;font:900 26px Inter;box-shadow:0 8px 18px rgba(124,58,237,.4)}
`;
const tile = (k, s = 108) => { const d = D(k); return `<div class="dtile" style="width:${s}px;height:${s}px;background:${d.color}">${icon(d.ic, "#fff", 2.2)}</div>`; };
[at("Esse é"), at("Em vez"), at("Você pode"), at("Cada agente"), at("E olha"), at("Um agente"), at("Isso não"), at("E para quem"), at("Quer")].forEach((t, i) => V.swipe(t - 0.05, [VI, PK, GR][i % 3]));

// S1 HOOK — equipe inteira dentro do computador
{
  const t = { mo: at("montar"), eq: at("equipe"), pr: at("profissionais"), ia: at("inteligência"), co: at("computador?") };
  const keys = Object.keys(DIV); // 18 divisões reais
  V.scene({ id: "s1", t0: 0, t1: 6.6, in: "none", push: 0.04, html: `
    <div class="abs center-x tc" id="s1-h" style="top:170px;width:1040px"><div class="kw" style="font-size:112px">sua <span class="hlbox">equipe</span> de IA</div></div>
    <div class="laptop" id="s1-lap"><div class="scr"><div class="abs" style="left:28px;top:30px;width:696px;display:grid;grid-template-columns:repeat(6,1fr);row-gap:22px;justify-items:center">
      ${keys.map((k, i) => `<div id="s1-d${i}">${tile(k, 96)}</div>`).join("")}
    </div></div><div class="base"></div></div>
    <div class="abs center-x tc" id="s1-n" style="top:1010px;width:900px"><div class="sticker" style="font-size:44px;background:${VI};color:#fff;transform:rotate(-2deg)">${icon("users", "#fff", 2.6)}18 áreas de especialistas</div></div>
    <div class="abs burst" id="s1-burst" style="left:540px;top:690px;width:0;height:0"></div>
  `, js: `
inn("#s1-h",0,"slam",.42);${S("impact", 0.02, .7)}
inn("#s1-lap",0.15,"rise",.6);${S("whoosh_s", 0.15, .45)}
${keys.map((_, i) => `inn("#s1-d${i}",${(t.eq - 0.1 + i * 0.055).toFixed(2)},"pop",.32);`).join("")}${S("pop_multi", t.eq - 0.1, .75)}${S("tick_roll", t.eq + 0.2, .4)}
inn("#s1-n",${t.ia},"up",.4);
pulse("#s1-lap",${t.co},1.04,.4);burst("#s1-burst",${t.co + 0.05},26);${S("shimmer", t.co, .55)}
` });
}
// S2 — Agency Agents (repositório real)
{
  const t = { e: at("Esse é"), po: at("possibilidade"), pj: at("projeto"), ag: at("Agency"), as: at("Agents.") };
  V.scene({ id: "s2", t0: 6.6, t1: 11.25, in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc" id="s2-h" style="top:200px;width:1060px"><div class="kw" style="font-size:150px;color:${VI}">AGENCY</div><div class="kw" style="font-size:150px;margin-top:-20px">AGENTS</div></div>
    <div class="abs card" id="s2-repo" style="left:70px;top:560px;width:940px;padding:40px 44px">
      <div class="row gap20"><div style="width:64px;height:64px;border-radius:50%;background:#0f1115;display:grid;place-items:center"><img src="${logo("github-white.svg")}" style="width:40px"/></div><div style="font:600 34px Inter;color:#57606a">msitarzewski / <b style="color:${INK}">agency-agents</b></div></div>
      <div style="font:900 44px Inter;letter-spacing:-.02em;line-height:1.15;margin:26px 0 22px">The Agency: AI Specialists Ready to Transform Your Workflow</div>
      <div class="row gap12" style="flex-wrap:wrap">
        <span class="chip" style="font-size:26px">${icon("scale", VI)}MIT</span>
        <span class="chip" style="font-size:26px">${icon("layout-grid", VI)}18 divisões</span>
        <span class="chip" style="font-size:26px">${icon("terminal", VI)}Claude Code · Cursor · Codex</span>
      </div>
    </div>
  `, js: `
inn("#s2-repo",${t.po},"rise",.55);${S("whoosh_s", t.po, .5)}
inn("#s2-h",${t.ag - 0.08},"slam");${S("impact", t.ag - 0.08, .8)}
pulse("#s2-repo",${t.as},1.03,.4);${S("confirm", t.as + 0.2, .5)}
` });
}
// S3a — um assistente genérico pra qualquer tarefa
{
  const t = { ev: at("Em vez"), ut: at("utilizar"), un: at("único"), as: at("assistente"), ge: at("genérico"), qu: at("qualquer"), ta: at("tarefa,") };
  const tasks = ["logo", "código", "vendas", "anúncio", "planilha", "contrato"];
  const pos = [[90, 420], [770, 400], [40, 700], [800, 700], [120, 960], [740, 980]];
  V.scene({ id: "s3", t0: 11.25, t1: 15.15, in: "left", push: 0.04, html: `
    <div class="abs center-x tc" id="s3-h" style="top:180px;width:1040px"><div class="kw" style="font-size:92px">1 assistente <span class="hlbox" style="background:#9ca3af">genérico</span></div></div>
    <div class="abs" id="s3-bot" style="left:380px;top:560px;width:320px;height:320px;border-radius:80px;background:#e5e1d8;border:4px solid #c9c2b4;display:grid;place-items:center"><div style="width:58%;height:58%">${icon("bot", "#8a8478", 1.8)}</div></div>
    <div class="abs" id="s3-q" style="left:640px;top:500px"><div class="sticker" style="font-size:80px;padding:6px 30px;background:#9ca3af;color:#fff;transform:rotate(10deg)">?</div></div>
    ${tasks.map((n, i) => `<div class="abs chip" id="s3-t${i}" style="left:${pos[i][0]}px;top:${pos[i][1]}px;font-size:34px;padding:14px 26px;color:#6b6457">${n}</div>`).join("")}
  `, js: `
inn("#s3-h",${t.ev},"up",.45);
inn("#s3-bot",${t.un - 0.1},"pop",.45);${S("pop", t.un - 0.1, .55)}
${tasks.map((_, i) => `inn("#s3-t${i}",${(t.qu - 0.1 + i * 0.07).toFixed(2)},"pop",.3);floaty("#s3-t${i}",${(t.qu + 0.3).toFixed(2)},1.4,12);`).join("")}${S("pop_multi", t.qu - 0.1, .55)}
inn("#s3-q",${t.ge},"slam");${S("alert", t.ge, .5)}
shake("#s3-bot",${t.ta});
` });
}
// S3b — agentes com funções específicas (agentes reais do repositório)
{
  const t = { pr: at("proposta"), tr: at("trabalhar"), ag: at("agentes"), po: at("possuem"), fu: at("funções"), es: at("específicas.") };
  const ags = [["UI Designer", "design", t.ag], ["Frontend Developer", "engineering", t.fu], ["Growth Hacker", "marketing", t.es]];
  V.scene({ id: "s3b", t0: 15.15, t1: 19.35, in: "zoom", push: 0.04, html: `
    <div class="abs center-x tc" id="s3b-h" style="top:180px;width:1040px"><div class="kw" style="font-size:92px">cada um com<br/><span class="hlbox">sua função</span></div></div>
    <div class="abs col gap24" style="left:70px;top:480px;width:940px">
      ${ags.map(([n, k], i) => { const d = D(k); return `<div class="agc" id="s3b-a${i}" style="border-color:${d.color}"><div class="ai" style="background:${d.color}">${icon(d.ic, "#fff", 2.2)}</div><div><div class="an">${n}</div><div class="ad">${d.label.toLowerCase()} · agente</div></div></div>`; }).join("")}
    </div>
  `, js: `
inn("#s3b-h",${t.pr},"up",.45);
${ags.map(([, , tt], i) => `inn("#s3b-a${i}",${(tt - 0.12).toFixed(2)},"left",.42);${V.sfx("pop", tt - 0.12, 0.7)}`).join("\n")}
${ags.map((_, i) => `glow("#s3b-a${i}",${(t.es + 0.35 + i * 0.08).toFixed(2)},"rgba(124,58,237,.35)");`).join("")}
` });
}
// S4 — design, desenvolvimento, marketing e vendas
{
  const t = { vo: at("Você pode"), or: at("organizar"), re: at("responsabilidades"), de: at("design,"), dv: at("desenvolvimento."), mk: at("Marketing"), ve: at("vendas.") };
  const big = [["design", "Design", t.de], ["engineering", "Desenvolvimento", t.dv], ["marketing", "Marketing", t.mk], ["sales", "Vendas", t.ve]];
  V.scene({ id: "s4", t0: 19.35, t1: 25.65, in: "rise", push: 0.03, html: `
    <div class="abs center-x tc" id="s4-h" style="top:170px;width:1040px"><div class="kw" style="font-size:96px">organize <span class="hlbox">por área</span></div></div>
    <div class="abs" style="left:60px;top:340px;width:960px;display:grid;grid-template-columns:1fr 1fr;gap:28px">
      ${big.map(([k, pt], i) => { const d = D(k); return `<div class="bigt" id="s4-b${i}" style="height:330px;background:${d.color}"><div class="bi">${icon(d.ic, "#fff", 2)}</div><div><div class="bl" style="font-size:${pt.length > 12 ? 48 : 60}px">${pt}</div><div class="bs">${d.label}</div></div></div>`; }).join("")}
    </div>
    <div class="abs center-x tc" id="s4-more" style="top:1080px;width:900px"><div class="sticker dark" style="font-size:38px">${icon("plus", "#fff", 3)}mais 14 áreas no repositório</div></div>
  `, js: `
inn("#s4-h",${t.or - 0.1},"up",.45);
${big.map(([, , tt], i) => `inn("#s4-b${i}",${(tt - 0.1).toFixed(2)},"pop",.42);${V.sfx("pop", tt - 0.1, 0.75)}`).join("\n")}
inn("#s4-more",${t.ve + 0.3},"up",.35);${S("ding", t.ve + 0.3, .45)}
` });
}
// S5 — cada agente recebe um papel e orientações (arquivo real design/design-ui-designer.md)
{
  const t = { c: at("Cada agente"), re: at("recebe"), pa: at("papel"), cj: at("conjunto"), ori: at("orientações"), vo: at("voltadas"), es: at("especialidade.") };
  V.scene({ id: "s5", t0: 25.65, t1: 31.1, in: "left", push: 0.03, html: `
    <div class="abs" id="s5-file" style="left:70px;top:170px"><div class="sticker dark" style="font-size:34px">${icon("file-code", "#fff", 2.4)}design/design-ui-designer.md</div></div>
    <div class="abs md" id="s5-md" style="left:50px;top:290px;width:980px"><span class="c">---</span>
<span class="k">name:</span> <span class="s">UI Designer</span>
<span class="k">description:</span> Expert UI designer specializing in visual design systems, component libraries…
<span class="c">---</span>
<span id="s5-role" class="hl"><b>Role:</b> Visual design systems and interface creation specialist</span>

<span class="h">## Your Core Mission</span>
<span id="s5-ori" class="hl">- Develop component libraries with consistent visual language
- Design scalable design token systems
- Include accessibility compliance (WCAG AA)</span></div>
    <div class="abs" id="s5-t1" style="left:90px;top:1010px"><div class="sticker" style="font-size:40px;background:${PK};color:#fff;transform:rotate(4deg)">PAPEL</div></div>
    <div class="abs" id="s5-t2" style="left:420px;top:1010px"><div class="sticker" style="font-size:40px;background:${VI};color:#fff;transform:rotate(-3deg)">ORIENTAÇÕES</div></div>
  `, js: `
inn("#s5-file",${t.c - 0.05},"pop",.4);
fromTo("#s5-md",{opacity:0,y:120},{opacity:1,y:0,duration:.55,ease:E.o4},${t.c + 0.1});${S("whoosh_s", t.c + 0.1, .5)}
to("#s5-role",{backgroundColor:"#ec4899",color:"#fff",duration:.3},${t.pa - 0.05});inn("#s5-t1",${t.pa},"slam");${S("stamp", t.pa, .6)}
to("#s5-ori",{backgroundColor:"#7c3aed",color:"#fff",duration:.3},${t.ori - 0.05});inn("#s5-t2",${t.ori},"slam");${S("stamp", t.ori, .6)}
pulse("#s5-md",${t.es},1.03,.4);${S("confirm", t.es, .5)}
` });
}
// S6 — separar responsabilidades organiza a execução
{
  const t = { e: at("E olha"), in: at("interessante."), qu: at("Quando"), se: at("separa"), rs: at("responsabilidades", 2), fa: at("fácil"), es: at("estruturar"), ex: at("execução"), pj: at("projeto", 2) };
  const lanes = [["planejar", "#0EA5E9"], ["construir", BL], ["revisar", "#F59E0B"]];
  V.scene({ id: "s6", t0: 31.1, t1: 38.95, in: "zoom", push: 0.04, html: `
    <div class="abs center-x tc" id="s6-olha" style="top:420px;width:1000px"><div class="kw" style="font-size:180px">OLHA</div><div class="kw row" style="font-size:96px;color:${VI};justify-content:center;gap:20px">por quê <span style="width:96px;height:96px;display:inline-block">${icon("eye", VI, 2.6)}</span></div></div>
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s6-mess" d="M200 600 C 420 380, 700 900, 860 560 S 300 420, 520 820 S 900 760, 760 460 S 260 900, 300 640 S 760 980, 880 820" stroke="#9ca3af" stroke-width="12" fill="none" stroke-linecap="round"/></svg>
    <div class="abs" id="s6-mx" style="left:700px;top:880px"><div class="sticker" style="font-size:36px;background:#9ca3af;color:#fff">tudo misturado</div></div>
    <div class="abs center-x tc" id="s6-h" style="top:170px;width:1040px"><div class="kw" style="font-size:90px">separou, <span class="hlbox">organizou</span></div></div>
    <div class="abs" id="s6-board" style="left:60px;top:360px;width:960px;display:grid;grid-template-columns:repeat(3,1fr);gap:20px">
      ${lanes.map(([n, c], i) => `<div class="lane" id="s6-l${i}"><div class="lt" style="color:${c}">${n}</div>${[0, 1, 2].map((k) => `<div class="kc" id="s6-k${i}${k}" style="background:${c};opacity:${0.95 - k * 0.22}"></div>`).join("")}</div>`).join("")}
    </div>
    <div class="abs center-x tc" id="s6-ok" style="top:850px;width:900px"><div class="sticker green" style="font-size:44px">${icon("circle-check-big", "#fff", 2.6)}execução estruturada</div></div>
  `, js: `
inn("#s6-olha",${t.e},"slam");${S("impact", t.e, .7)}
out("#s6-olha",${t.qu - 0.2},"up",.25);
draw("#s6-mess",${t.qu},.9);${S("scan", t.qu, .45)}inn("#s6-mx",${t.se},"pop",.35);
to("#s6-mess",{opacity:0,duration:.3},${t.fa - 0.3});out("#s6-mx",${t.fa - 0.3},"fade",.25);${S("glitch", t.fa - 0.3, .45)}
inn("#s6-h",${t.fa - 0.1},"up",.45);
${lanes.map((_, i) => `inn("#s6-l${i}",${(t.es - 0.1 + i * 0.1).toFixed(2)},"drop",.45);`).join("")}${S("pop_multi", t.es - 0.1, .6)}
inn("#s6-ok",${t.pj - 0.1},"pop",.4);${S("confirm", t.pj, .55)}
` });
}
// S7 — planejar → desenvolver → revisar → você avança
{
  const t = { u: at("Um agente"), pl: at("planejar,"), o1: at("outro"), dv: at("desenvolvimento", 2), o2: at("e outro"), rv: at("revisar"), an: at("antes"), av: at("avançar.") };
  const steps = [["planeja", "Senior Project Manager", "project-management", t.u, t.pl], ["desenvolve", "Frontend Developer", "engineering", t.o1, t.dv], ["revisa", "Code Reviewer", "testing", t.o2, t.rv]];
  V.scene({ id: "s7", t0: 38.95, t1: 47.3, in: "left", push: 0.03, html: `
    ${steps.map(([v, n, k], i) => { const d = D(k); return `<div class="abs agc" id="s7-s${i}" style="left:70px;top:${190 + i * 250}px;width:940px;border-color:${d.color}"><div class="ai" style="background:${d.color}">${icon(d.ic, "#fff", 2.2)}</div><div><div class="an">${v}</div><div class="ad">${n}</div></div><div class="abs" id="s7-c${i}" style="right:34px;top:50%;margin-top:-34px;width:68px;height:68px">${icon("circle-check-big", GR, 2.6)}</div></div>`; }).join("")}
    ${[0, 1].map((i) => `<div class="abs" id="s7-a${i}" style="left:500px;top:${355 + i * 250}px;width:80px;height:80px">${icon("arrow-down", VI, 3)}</div>`).join("")}
    <div class="abs center-x tc" id="s7-go" style="top:960px;width:900px"><div class="sticker" style="font-size:52px;background:${GR};color:#fff">${icon("user-round", "#fff", 2.6)}aí você avança ${icon("arrow-right", "#fff", 3)}</div></div>
  `, js: `
${steps.map(([, , , ti, tw], i) => `inn("#s7-s${i}",${(ti - 0.05).toFixed(2)},"left",.42);${V.sfx("whoosh_s", ti - 0.05, 0.45)}set("#s7-c${i}",{opacity:0},${t.u});inn("#s7-c${i}",${(tw + 0.15).toFixed(2)},"pop",.3);${V.sfx("confirm", tw + 0.15, 0.5)}`).join("\n")}
inn("#s7-a0",${t.o1 - 0.2},"down",.3);inn("#s7-a1",${t.o2 - 0.2},"down",.3);
inn("#s7-go",${t.av - 0.25},"slam");${S("impact", t.av - 0.25, .6)}
` });
}
// S8 — não substitui a equipe; IA em etapas específicas
{
  const t = { i: at("Isso não"), si: at("significa"), su: at("substituir"), eq: at("equipe profissional."), sg: at("significa", 2), cr: at("criar"), es: at("estrutura"), ia: at("inteligência"), pa: at("participa"), et: at("etapas"), mu: at("muito mais específicas.") };
  const flow = [["briefing", false], ["pesquisa", true], ["rascunho", true], ["decisão final", false], ["revisão", true]];
  V.scene({ id: "s8", t0: 47.3, t1: 58.4, in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc" id="s8-team" style="top:240px;width:900px"><div class="card" style="display:inline-flex;flex-direction:column;align-items:center;gap:16px;padding:40px 60px"><div style="width:230px;height:230px">${icon("users", INK, 1.6)}</div><div style="font:900 52px Inter">equipe profissional</div></div></div>
    <div class="abs center-x tc" id="s8-no" style="top:760px;width:1000px"><div class="sticker red" style="font-size:58px;transform:rotate(-3deg)">${icon("x", "#fff", 3)}não é substituir</div></div>
    <div class="abs center-x tc" id="s8-h" style="top:170px;width:1040px"><div class="kw" style="font-size:86px">IA em etapas<br/><span class="hlbox">específicas</span></div></div>
    <div class="abs col gap20" id="s8-flow" style="left:150px;top:470px;width:780px">
      ${flow.map(([n, ai], i) => `<div class="step" id="s8-f${i}"><div style="width:52px;height:52px">${icon(ai ? "sparkles" : "user-round", ai ? VI : "#6b6457", 2.4)}</div>${n}${ai ? `<span class="aib" id="s8-ai${i}">IA</span>` : `<span class="aib" style="background:#0f1115" id="s8-hu${i}">você</span>`}</div>`).join("")}
    </div>
  `, js: `
inn("#s8-team",${t.i},"pop",.45);
inn("#s8-no",${t.su},"slam");${S("stamp", t.su, .65)}
pulse("#s8-team",${t.eq},1.04,.4);
out("#s8-team",${t.sg - 0.2},"up",.3);out("#s8-no",${t.sg - 0.2},"fade",.25);
inn("#s8-h",${t.sg},"up",.45);${S("whoosh_s", t.sg, .45)}
${flow.map((_, i) => `inn("#s8-f${i}",${(t.es + i * 0.14).toFixed(2)},"left",.4);`).join("")}${S("pop_multi", t.es, .55)}
${flow.map(([, ai], i) => `set("#s8-${ai ? "ai" : "hu"}${i}",{opacity:0},${t.sg});inn("#s8-${ai ? "ai" : "hu"}${i}",${((ai ? t.et : t.pa) + i * 0.12).toFixed(2)},"pop",.3);`).join("")}${S("pop", t.pa, .5)}${S("shimmer", t.et, .55)}
${flow.map(([, ai], i) => (ai ? `glow("#s8-f${i}",${(t.mu + 0.2).toFixed(2)},"rgba(124,58,237,.35)");` : "")).join("")}
` });
}
// S9 — quem desenvolve projetos, cria produtos ou administra um negócio
{
  const t = { e: at("E para quem"), de: at("desenvolve"), pj: at("projetos,"), cr: at("cria"), pr: at("produtos"), ad: at("administra"), ne: at("negócio,"), ab: at("abre"), po: at("possibilidades") };
  const ps = [["projetos", "code-2", BL, t.de], ["produtos", "package", PK, t.cr], ["negócio", "briefcase", GR, t.ad]];
  V.scene({ id: "s9", t0: 58.4, t1: 66.15, in: "left", push: 0.03, html: `
    <div class="abs center-x tc" id="s9-h" style="top:170px;width:1040px"><div class="kw" style="font-size:92px">pra quem…</div></div>
    <div class="abs" style="left:60px;top:340px;width:960px;display:grid;grid-template-columns:repeat(3,1fr);gap:22px">
      ${ps.map(([n, ic, c], i) => `<div class="card col" id="s9-p${i}" style="align-items:center;gap:20px;padding:40px 10px;border:3px solid ${c}"><div style="width:130px;height:130px;border-radius:36px;background:${c};display:grid;place-items:center"><div style="width:58%;height:58%">${icon(ic, "#fff", 2.2)}</div></div><div style="font:900 40px Inter;letter-spacing:-.02em">${n}</div></div>`).join("")}
    </div>
    <div class="abs center-x tc" id="s9-po" style="top:760px;width:1060px"><div class="kw" style="font-size:96px;color:${VI}">POSSIBILIDADES</div><div class="kw" style="font-size:64px">abertas</div></div>
    <div class="abs burst" id="s9-burst" style="left:540px;top:840px;width:0;height:0"></div>
  `, js: `
inn("#s9-h",${t.e},"up",.4);
${ps.map(([, , , tt], i) => `inn("#s9-p${i}",${(tt - 0.1).toFixed(2)},"drop",.45);${V.sfx("pop", tt - 0.1, 0.7)}`).join("\n")}
inn("#s9-po",${t.ab},"slam");${S("impact", t.ab, .7)}burst("#s9-burst",${t.po},30);${S("shimmer", t.po, .6)}
` });
}
// S10 — CTA AGENTES
{
  const t = { q: at("Quer"), co: at("Comenta"), w: at("agentes aqui"), seg: at("embaixo,") };
  V.scene({ id: "s10", t0: 66.15, t1: V.dur, last: true, in: "zoom", push: 0.03,
    html: ctaHtml2("s10", { pre: `quer o <span class="hlbox">projeto?</span>`, word: "AGENTES", color: VI, follow: false }),
    js: ctaJs2(V, "s10", { q: t.q, co: t.co, word: t.w, seg: t.seg, follow: false }) });
}
V.write(`${OUT}/projeto`);
