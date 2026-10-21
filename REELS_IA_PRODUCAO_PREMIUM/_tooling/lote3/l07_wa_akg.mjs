// LOTE 3 · 07 — WA-AKG (Lucas 18:20) · ref itsdavixavier
// Reais (mrifqidaffaaditya/WA-AKG): avatar, descrição do README, diagrama "How it Works" (User/App → Gateway →
// WhatsApp Server, Prisma/DB), pacote n8n-nodes-wa-akg (cor #EA4B71 do badge), pastas reais (src/app…, prisma/).
// Não mostramos "disparo em massa"/anti-ban (a narração não fala disso). O painel é ilustrativo.
import { Video, icon } from "../lib/build.mjs";
import { KIT2_CSS, ctaHtml2, ctaJs2 } from "../lib/kit2.mjs";
import { KIT3_CSS, L3ROOT, P3, narr, gh3, words } from "../lib/kit3.mjs";

const DIR = "07_WA_AKG", OUT = `${L3ROOT}/${DIR}`;
const GN = "#22c55e", CY = "#22d3ee", BG = "#06110b", N8 = "#ea4b71", PN = "#0c1c13", LN = "#1d3a28";
const V = new Video({
  id: "l3-07", title: "WA-AKG", kit2: true, theme: "dark", capMaxWords: 3, capMaxChars: 18,
  wordsPath: narr(DIR), audioDur: 52.45,
  accent: GN, capKey: GN, vars: { a1: GN, a2: CY, a3: GN, capbg: GN, capfg: "#04120a", bg: BG },
  fixes: { "WAAKG.": "WA-AKG.", "N8N.": "n8n." },
  keywords: ["WhatsApp", "atenção", "gratuito", "código", "aberto", "WAAKG.", "API", "painel", "conexões,", "mensagens", "N8N.", "atendimento,", "mídias,", "figurinhas", "sessões.", "adaptar"],
});
const at = (p, n) => V.at(p, n), S = (t, x, g) => V.sfx(t, x, g);
V.extraCss = KIT2_CSS + KIT3_CSS + `
#root{background:${BG}} .bg-glow.a{background:radial-gradient(circle,rgba(34,197,94,.22),transparent 62%)} .bg-glow.b{background:radial-gradient(circle,rgba(34,211,238,.16),transparent 62%)}
.theme-dark .bg-grid{background-image:radial-gradient(rgba(34,197,94,.12) 2px,transparent 2.5px)}
.nd{position:absolute;width:210px;height:170px;border-radius:30px;background:${PN};border:2px solid ${LN};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;font:800 30px Inter;color:#e5f5ea}
.nd .ni{width:66px;height:66px}
.dash{position:absolute;border-radius:30px;background:${PN};border:2px solid ${LN};padding:26px}
.tl{border-radius:24px;background:#0f2418;border:2px solid ${LN};padding:22px}
.tl h4{font:800 34px Inter;color:#e5f5ea;display:flex;align-items:center;gap:14px;margin:0 0 14px}
.tl h4 span{display:inline-block;width:44px;height:44px}
.row3{display:flex;align-items:center;gap:12px;font:600 24px "JetBrains Mono";color:#9fc5ad;padding:6px 0}
.st{width:14px;height:14px;border-radius:50%;background:${GN}}
.n8{position:absolute;width:300px;height:120px;border-radius:22px;background:#1c1f26;border:2px solid #3a3f4b;display:flex;align-items:center;gap:16px;padding:0 20px;font:700 27px Inter;color:#e8eaf0}
.n8 .ni{width:64px;height:64px;border-radius:16px;display:grid;place-items:center;flex:none}
.n8 .ni svg{width:58%;height:58%}
.fc{width:290px;height:300px;border-radius:30px;background:${PN};border:2px solid ${LN};display:flex;flex-direction:column;align-items:center;justify-content:center;gap:20px;font:800 38px Inter;color:#e5f5ea}
.fc .fi{width:120px;height:120px;border-radius:32px;display:grid;place-items:center}
.fc .fi svg{width:56%;height:56%}
.tree{font:500 31px/1.6 "JetBrains Mono";color:#cfe8d8}
.tree b{color:${GN}}
`;
const SW = [at("Encontrei"), at("Basicamente,"), at("Você consegue"), at("E uma"), at("O projeto"), at("E como"), at("Quer")];
SW.forEach((t, i) => V.swipe(t - 0.05, [GN, CY, "#0f2418"][i % 3]));
const T = SW.map((t) => t - 0.08);

// S1 — gancho: seus sistemas sem o elo com o WhatsApp
{
  const t = { au: at("automações"), co: at("conectar"), wa: at("WhatsApp"), si: at("sistemas,"), pr: at("presta"), at: at("atenção"), fe: at("ferramenta.") };
  const N = [["CRM", "users", 90, 560], ["banco de dados", "database", 435, 520], ["site", "globe", 780, 560]];
  V.scene({ id: "s1", t0: 0, t1: T[0], in: "none", push: 0.045, html: `
    <div class="abs center-x tc" id="s1-h" style="top:300px;width:1040px"><div class="kw" style="font-size:92px">${words("WhatsApp +")}</div><div class="kw" style="font-size:92px;color:${GN}">${words("seus sistemas")}</div></div>
    ${N.map(([n, ic, x, y], i) => `<div class="nd" id="s1-n${i}" style="left:${x}px;top:${y}px"><div class="ni">${icon(ic, CY, 2)}</div>${n}</div>`).join("")}
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s1-l0" d="M300 645 H 435" stroke="${CY}" stroke-width="5" fill="none"/><path id="s1-l1" d="M645 645 H 780" stroke="${CY}" stroke-width="5" fill="none"/><path id="s1-gap" d="M540 690 V 900" stroke="${GN}" stroke-width="7" stroke-dasharray="16 16" fill="none"/></svg>
    <div class="abs" id="s1-q" style="left:505px;top:770px;width:70px;height:70px;border-radius:50%;background:${BG};border:4px solid ${GN};display:grid;place-items:center;font:900 40px Inter;color:${GN}">?</div>
    <div class="abs" id="s1-w" style="left:440px;top:920px;width:200px;height:200px;border-radius:50%;background:${GN};display:grid;place-items:center;box-shadow:0 0 80px rgba(34,197,94,.45)"><div style="width:56%;height:56%">${icon("message-circle", "#04120a", 2)}</div></div>
  `, js: `
inn("#s1-h .wd",0.02,"blur",.5,{stagger:.08});${S("whoosh_s", 0.02, .45)}
${[0, 1, 2].map((i) => `inn("#s1-n${i}",${(0.2 + i * 0.1).toFixed(2)},"bscale",.45);`).join("")}draw("#s1-l0",0.5,.4);draw("#s1-l1",0.6,.4);
inn("#s1-w",${t.co - 0.1},"pop",.45);${S("pop", t.co - 0.1, .6)}
draw("#s1-gap",${t.wa - 0.1},.5);inn("#s1-q",${t.wa + 0.2},"pop",.35);
fromTo("#s1-q",{opacity:1},{opacity:.25,duration:.25,yoyo:true,repeat:5,immediateRender:false},${t.si});
punch("#s1",${t.pr - 0.05},.06);${S("alert", t.pr - 0.05, .6)}
` });
}
// S2 — o projeto: WA-AKG (repositório real)
{
  const t = { en: at("Encontrei"), gr: at("gratuito"), co: at("código"), gh: at("GitHub"), ch: at("chamado"), wa: at("WAAKG.") };
  V.scene({ id: "s2", t0: T[0], t1: T[1], in: "zoom", push: 0.035, html: `
    <div class="abs center-x tc" id="s2-h" style="top:300px;width:1040px"><div class="kw" style="font-size:96px">${words("encontrei no")} <span class="wd" style="color:${GN}">GitHub</span></div></div>
    <div class="abs row gap16" style="left:70px;top:470px">
      <div class="chipx" id="s2-c1" style="background:${GN};color:#04120a">${icon("gift", "#04120a", 2.4)}gratuito</div>
      <div class="chipx" id="s2-c2" style="background:#0f2418;color:#e5f5ea;border:2px solid ${GN}">${icon("code-xml", GN, 2.4)}código aberto</div></div>
    <div class="abs" id="s2-gh" style="left:70px;top:610px">${gh3({ id: "s2-card", owner: "mrifqidaffaaditya", repo: "WA-AKG", avatar: P3("av_waakg.png"), nameId: "s2-nm", desc: "The Ultimate WhatsApp Gateway &amp; Dashboard — a professional, multi-session WhatsApp Gateway, Dashboard, and Automation System.", tags: ["whatsapp", "gateway", "dashboard", "n8n"] })}</div>
  `, js: `
inn("#s2-h .wd",${t.en},"blur",.45,{stagger:.08});
inn("#s2-c1",${t.gr - 0.1},"pop",.35);${S("pop", t.gr - 0.1, .6)}
inn("#s2-c2",${t.co - 0.1},"pop",.35);${S("pop", t.co - 0.1, .6)}
inn("#s2-gh",${t.gh - 0.1},"rise",.45);${S("whoosh_s", t.gh - 0.15, .4)}
type("#s2-nm",${t.wa - 0.05},.5);${S("typing", t.wa - 0.05, .5)}${S("impact", t.wa + 0.5, .5)}
` });
}
// S3 — como funciona (diagrama "How it Works" do README)
{
  const t = { ba: at("Basicamente,"), es: at("estrutura"), co: at("conectar", 2), ge: at("gerenciar"), se: at("sessões"), api: at("API"), pa: at("painel") };
  V.scene({ id: "s3", t0: T[1], t1: T[2], in: "rise", push: 0.03, html: `
    <div class="abs" id="s3-k" style="left:70px;top:300px"><div class="lbl" style="color:${GN}">how it works · README</div></div>
    <div class="nd" id="s3-u" style="left:70px;top:380px;width:280px"><div class="ni">${icon("app-window", CY, 2)}</div>User / App</div>
    <div class="nd" id="s3-g" style="left:400px;top:600px;width:280px;border-color:${GN};box-shadow:0 0 60px rgba(34,197,94,.3)"><div class="ni">${icon("server", GN, 2)}</div>WA-AKG Gateway</div>
    <div class="nd" id="s3-w" style="left:730px;top:380px;width:280px"><div class="ni">${icon("message-circle", GN, 2)}</div>WhatsApp Server</div>
    <div class="nd" id="s3-d" style="left:730px;top:830px;width:280px"><div class="ni">${icon("database", CY, 2)}</div>Prisma / DB</div>
    <div class="nd" id="s3-p" style="left:70px;top:830px;width:280px"><div class="ni">${icon("layout-dashboard", CY, 2)}</div>painel</div>
    <svg class="wires" viewBox="0 0 1080 1920">
      <path id="s3-a0" d="M210 550 C 210 640, 300 685, 400 685" stroke="${CY}" stroke-width="6" fill="none"/>
      <path id="s3-a1" d="M680 685 C 790 685, 870 640, 870 550" stroke="${GN}" stroke-width="6" fill="none"/>
      <path id="s3-a2" d="M680 700 C 790 720, 870 760, 870 830" stroke="${CY}" stroke-width="6" fill="none"/>
      <path id="s3-a3" d="M400 700 C 300 720, 210 760, 210 830" stroke="${GN}" stroke-width="6" fill="none"/></svg>
    <div class="abs" id="s3-l0" style="left:230px;top:600px"><div class="chipx mono" style="font:700 22px 'JetBrains Mono';padding:8px 16px;background:#0f2418;color:${CY}">REST API</div></div>
    <div class="abs" id="s3-l1" style="left:760px;top:600px"><div class="chipx mono" style="font:700 22px 'JetBrains Mono';padding:8px 16px;background:#0f2418;color:${GN}">Baileys</div></div>
    <div class="abs" id="s3-ss" style="left:400px;top:1040px"><div class="sticker" style="font-size:32px;background:${GN};color:#04120a">${icon("layers", "#04120a", 2.4)}várias sessões</div></div>
  `, js: `
inn("#s3-k",${t.ba},"fade",.3);
inn("#s3-g",${t.es - 0.1},"pop",.4);${S("pop", t.es - 0.1, .6)}
inn("#s3-w",${t.co - 0.1},"pop",.35);draw("#s3-a1",${t.co},.4);inn("#s3-l1",${t.co + 0.3},"fade",.3);${S("whoosh_s", t.co, .4)}
inn("#s3-d",${t.ge - 0.1},"pop",.35);draw("#s3-a2",${t.ge},.4);
inn("#s3-ss",${t.se - 0.05},"pop",.35);${S("pop", t.se, .5)}
inn("#s3-u",${t.api - 0.2},"pop",.35);draw("#s3-a0",${t.api - 0.1},.4);inn("#s3-l0",${t.api + 0.1},"fade",.3);${S("click", t.api, .6)}
inn("#s3-p",${t.pa - 0.1},"pop",.35);draw("#s3-a3",${t.pa},.35);${S("pop", t.pa, .55)}
` });
}
// S4 — o painel: conexões, mensagens, integrações (ilustrativo)
{
  const t = { vc: at("Você consegue"), ad: at("administrar"), cn: at("conexões,"), me: at("mensagens"), in: at("integrar"), fu: at("funcionalidades.") };
  V.scene({ id: "s4", t0: T[2], t1: T[3], in: "zoom", push: 0.03, html: `
    <div class="abs" id="s4-h" style="left:70px;top:300px"><div class="kw" style="font-size:84px">${words("tudo num")} <span class="wd" style="color:${GN}">painel</span></div></div>
    <div class="dash" id="s4-d" style="left:50px;top:440px;width:980px;height:600px">
      <div class="row" style="justify-content:space-between;margin-bottom:20px"><div class="lbl" style="color:${GN};opacity:1">dashboard</div><div class="lbl" style="color:#6f8f7b">exemplo ilustrativo</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:18px">
        <div class="tl" id="s4-t0"><h4><span>${icon("smartphone", GN, 2.2)}</span>Conexões</h4>${["sessão 1", "sessão 2", "sessão 3"].map((s) => `<div class="row3"><i class="st"></i>${s} · online</div>`).join("")}</div>
        <div class="tl" id="s4-t1"><h4><span>${icon("messages-square", CY, 2.2)}</span>Mensagens</h4>${["nova mensagem", "resposta enviada", "nova mensagem"].map((s, i) => `<div class="row3" id="s4-m${i}"><i class="st" style="background:${CY}"></i>${s}</div>`).join("")}</div>
        <div class="tl" id="s4-t2" style="grid-column:span 2"><h4><span>${icon("plug", GN, 2.2)}</span>Integrações</h4><div class="row gap16">${["webhook", "REST API", "n8n"].map((s) => `<div class="chipx" style="font-size:28px;padding:12px 22px;background:#0b1a11;color:#cfe8d8;border:2px solid ${LN}">${s}</div>`).join("")}</div></div>
      </div></div>
  `, js: `
inn("#s4-h .wd",${t.vc},"blur",.45,{stagger:.1});
inn("#s4-d",${t.ad - 0.2},"bscale",.45);
${[0, 1, 2].map((i) => `set("#s4-t${i}",{opacity:.25},${T[2]});`).join("")}
to("#s4-t0",{opacity:1,borderColor:"${GN}",duration:.25},${t.cn - 0.1});${S("pop", t.cn - 0.1, .6)}
to("#s4-t1",{opacity:1,borderColor:"${CY}",duration:.25},${t.me - 0.1});${S("pop", t.me - 0.1, .6)}
${[0, 1, 2].map((i) => `inn("#s4-m${i}",${(t.me + i * 0.2).toFixed(2)},"left",.25);`).join("")}
to("#s4-t2",{opacity:1,borderColor:"${GN}",duration:.25},${t.in - 0.1});${S("pop", t.in - 0.1, .6)}
` });
}
// S5 — integração com n8n (pacote real n8n-nodes-wa-akg) → fluxos
{
  const t = { e: at("E uma"), su: at("suporte"), n8: at("N8N."), ab: at("abre"), fl: at("fluxos"), at: at("atendimento,"), pr: at("processos"), ou: at("outras"), fe: at("ferramentas.") };
  const F = [["WA-AKG Trigger", "message-circle", GN, 90, 560, t.ab - 0.1], ["atendimento", "headset", CY, 690, 560, t.at - 0.1], ["organizar processos", "list-checks", "#f59e0b", 90, 820, t.pr - 0.1], ["outras ferramentas", "blocks", N8, 690, 820, t.ou - 0.1]];
  V.scene({ id: "s5", t0: T[3], t1: T[4], in: "left", push: 0.03, html: `
    <div class="abs" id="s5-h" style="left:70px;top:300px"><div class="kw" style="font-size:80px">${words("integração com")}</div></div>
    <div class="abs" id="s5-n" style="left:70px;top:385px"><div class="kw" style="font-size:140px;color:${N8}">n8n</div></div>
    <div class="abs" id="s5-pk" style="left:420px;top:440px"><div class="chipx" style="font:700 26px 'JetBrains Mono';padding:10px 20px;background:${N8};color:#fff">npm · n8n-nodes-wa-akg</div></div>
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s5-w0" d="M390 620 H 690" stroke="#9aa3b5" stroke-width="5" fill="none"/><path id="s5-w1" d="M840 680 C 840 760, 240 740, 240 820" stroke="#9aa3b5" stroke-width="5" fill="none"/><path id="s5-w2" d="M390 880 H 690" stroke="#9aa3b5" stroke-width="5" fill="none"/></svg>
    ${F.map(([n, ic, c, x, y], i) => `<div class="n8" id="s5-f${i}" style="left:${x}px;top:${y}px"><div class="ni" style="background:${c}">${icon(ic, "#fff", 2.2)}</div>${n}</div>`).join("")}
    <div class="abs" id="s5-ok" style="left:330px;top:1040px"><div class="sticker" style="font-size:36px;background:${GN};color:#04120a">${icon("workflow", "#04120a", 2.4)}fluxos automáticos</div></div>
  `, js: `
inn("#s5-h .wd",${t.e},"blur",.45,{stagger:.1});
inn("#s5-n",${t.n8 - 0.1},"slam");${S("impact", t.n8 - 0.05, .8)}
inn("#s5-pk",${t.n8 + 0.4},"up",.35);
${F.map(([, , , , , tt], i) => `inn("#s5-f${i}",${tt.toFixed(2)},"pop",.35);${V.sfx("pop", tt, 0.6)}`).join("")}
draw("#s5-w0",${(t.at - 0.3).toFixed(2)},.35);draw("#s5-w1",${(t.pr - 0.35).toFixed(2)},.35);draw("#s5-w2",${(t.ou - 0.3).toFixed(2)},.35);
inn("#s5-ok",${t.fe - 0.1},"slam");${S("confirm", t.fe, .55)}
` });
}
// S6 — mídias, figurinhas, sessões
{
  const t = { o: at("O projeto"), re: at("recursos"), mi: at("mídias,"), fi: at("figurinhas"), se: at("sessões.", 2) };
  const C = [["mídias", "image", CY, t.mi], ["figurinhas", "sticker", "#f59e0b", t.fi], ["sessões", "layers", GN, t.se]];
  V.scene({ id: "s6", t0: T[4], t1: T[5], in: "zoom", push: 0.03, html: `
    <div class="abs center-x tc" id="s6-h" style="top:310px;width:1040px"><div class="kw" style="font-size:90px">${words("e mais recursos")}</div></div>
    <div class="abs row" style="left:50px;top:560px;width:980px;justify-content:space-between">${C.map(([n, ic, c], i) => `<div class="fc" id="s6-c${i}"><div class="fi" style="background:${c}">${icon(ic, "#04120a", 2.2)}</div>${n}</div>`).join("")}</div>
  `, js: `
inn("#s6-h .wd",${t.o},"blur",.45,{stagger:.1});
${C.map(([, , , tt], i) => `inn("#s6-c${i}",${(tt - 0.15).toFixed(2)},"rise",.4);${V.sfx("pop", tt - 0.15, 0.6)}`).join("\n")}
` });
}
// S7 — código aberto: estudar a estrutura (pastas reais) e adaptar ao seu projeto
{
  const t = { e: at("E como"), ab: at("aberto,", 2), es: at("estudar"), st: at("estrutura", 2), ad: at("adaptar"), so: at("solução"), pj: at("projeto.", 3) };
  const tr = [`<b>WA-AKG/</b>`, `├ src/`, `│  ├ app/`, `│  ├ components/`, `│  ├ modules/`, `│  └ server/`, `├ prisma/schema.prisma`, `└ docs/`];
  V.scene({ id: "s7", t0: T[5], t1: T[6], in: "left", push: 0.03, html: `
    <div class="abs" id="s7-h" style="left:70px;top:300px"><div class="kw" style="font-size:84px">${words("estude e")} <span class="wd" style="color:${GN}">adapte</span></div></div>
    <div class="abs dash" id="s7-t" style="left:50px;top:450px;width:600px;padding:28px 34px"><div class="lbl" style="color:#6f8f7b;margin-bottom:12px">estrutura real do repositório</div><div class="tree">${tr.map((l, i) => `<div id="s7-r${i}">${l}</div>`).join("")}</div></div>
    <svg class="wires" viewBox="0 0 1080 1920"><path id="s7-fk" d="M650 700 C 760 700, 800 860, 860 960" stroke="${GN}" stroke-width="8" fill="none" stroke-linecap="round"/></svg>
    <div class="abs" id="s7-ic" style="left:870px;top:640px;width:120px;height:120px;border-radius:34px;background:${GN};display:grid;place-items:center"><div style="width:56%;height:56%">${icon("git-fork", "#04120a", 2.2)}</div></div>
    <div class="abs tc" id="s7-y" style="left:700px;top:970px;width:340px"><div style="width:150px;height:150px;margin:0 auto;border-radius:40px;background:${CY};display:grid;place-items:center"><div style="width:56%;height:56%">${icon("folder-heart", "#04120a", 2)}</div></div><div style="font:800 38px Inter;margin-top:14px">seu projeto</div></div>
  `, js: `
inn("#s7-h .wd",${t.e},"blur",.45,{stagger:.1});
inn("#s7-t",${t.ab - 0.1},"rise",.4);
${tr.map((_, i) => `inn("#s7-r${i}",${(t.es - 0.1 + i * 0.09).toFixed(2)},"left",.25);`).join("")}${S("pop_multi", t.es, .45)}
inn("#s7-ic",${t.ad - 0.3},"pop",.35);draw("#s7-fk",${t.ad - 0.1},.5);${S("whoosh_s", t.ad - 0.1, .45)}
inn("#s7-y",${t.so},"pop",.4);${S("ding", t.pj, .55)}
` });
}
// S8 — CTA API
{
  const t = { q: at("Quer"), co: at("Comenta"), w: at("API", 2), seg: at("link.") };
  V.scene({ id: "s8", t0: T[6], t1: V.dur, last: true, in: "zoom", push: 0.03,
    html: ctaHtml2("s8", { pre: `quer o <span class="hlbox" style="color:#04120a">repositório?</span>`, word: "API", color: GN, follow: false }),
    js: ctaJs2(V, "s8", { q: t.q, co: t.co, word: t.w, seg: t.seg, follow: false }) });
}
V.write(`${OUT}/projeto`);
