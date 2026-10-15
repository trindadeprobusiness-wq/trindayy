// Organise deliverables + write per-video TIMELINE.md from the built compositions
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const BASE = "/home/user/trindayy/REELS_IA_PRODUCAO_PREMIUM";
const V = {
  "01_CLOUDFLARE": { render: "v1_draft.mp4", out: "FINAL_01_cloudflare_security_audit.mp4", voice: "Elvis (20:07:36)", scenes: {
    s1: "Gancho — Cloudflare + Claude, selo GRÁTIS, código com scanner revelando a brecha", s2: "Uso interno — grade de código com milhares de falhas, fonte: blog da Cloudflare",
    s3: "Credibilidade — repositório cloudflare/security-audit-skill e contador até 28 mil estrelas", s4: "Instalação no Claude Code (comando real) + mapa da aplicação (architecture.md / coverage-ledger.json)",
    s5: "Time de agentes (hunters) — login, banco de dados, APIs e Prompt Injection acendem na palavra exata", s6: "Virada — “a parte mais interessante”",
    s7: "Agente verificador tenta provar que a falha não existe — carimbo NÃO EXISTE", s8: "Filtro: confirmed / rejected → só o verificado chega ao relatório final",
    s9: "Relatório (REPORT.md) com falhas verificadas e diff de correção (exemplo ilustrativo)", s10: "CTA — Comenta AUDITORIA + Seguir" } },
  "02_REVERSE_ENGINEER": { render: "v2_final.mp4", out: "FINAL_02_reverse_engineer_anything.mp4", voice: "Lendário (20:10:57)", scenes: {
    s1: "Gancho — GitHub #1, em alta na semana, título palavra a palavra e repositório morluto/rea", s2: "App → agente de IA → captura real do REA analisando um binário no Hopper",
    s3: "“Não está roubando o código-fonte” — analisa sem acesso ao código", s4: "Você ama um recurso de um aplicativo", s5: "Investigar → Entender → Construir o seu próprio",
    s6: "Hardware antigo de volta à vida — trilhas da placa acendendo", s7: "Relato: teclado Logitech MX Keypad funcionando no Linux, cronômetro até 15:00",
    s8: "Scanners e placas de som antigas sem driver (fotos da referência)", s9: "Contador até 88.900 estrelas no GitHub",
    s10: "Código aberto (MIT), roda localmente, `npx rea-agents setup`, Claude Code + Codex", s11: "CTA — Comenta DECODE + Seguir" } },
  "03_GITHUB_TOOLS": { render: "v3_final.mp4", out: "FINAL_03_cinco_projetos_github.mp4", voice: "Elvis (20:12:47)", scenes: {
    s1: "Gancho — mesmo Claude: chatbot × operação inteira (5 ferramentas conectadas)", s2: "5 projetos do GitHub",
    s3: "01 HyperFrames (HeyGen): Claude Code → index.html → vídeo.mp4", s3b: "01 HyperFrames: prompt em linguagem natural → legenda, abertura e render na palavra exata",
    s4: "02 Google Workspace CLI: demo oficial do gws + Claude Code ↔ Gmail/Drive/Calendar", s4b: "02 gws gmail +triage: caixa de entrada de hoje → 3 precisam de resposta",
    s5: "03 Apify: diagrama oficial do Apify MCP Server — milhares de Actors", s5b: "03 Apify: 100 academias no Instagram → tabela separando quem não tem site (dados ilustrativos)",
    s6: "04 Agent Skills (Addy Osmani): +20 skills com nomes reais do repositório", s6b: "04 Processo: “Cria meu aplicativo” riscado → entende, divide, executa, verifica",
    s7: "05 Playwright CLI (Microsoft): narração não é prova — “Funcionou perfeitamente” riscado", s7b: "05 Navegador real: abrir, clicar, preencher, resultado + comandos playwright-cli",
    s8: "Recapitulação — chatbot × operação, mesmo modelo", s9: "CTA — Comenta GITHUB + as 5 ferramentas" } },
};

for (const [dir, cfg] of Object.entries(V)) {
  const P = path.join(BASE, dir, "projeto");
  const html = fs.readFileSync(path.join(P, "index.html"), "utf8");
  const secs = [...html.matchAll(/<section id="(\w+)" class="scene clip[^"]*" data-start="([\d.]+)" data-duration="([\d.]+)"/g)];
  const cues = JSON.parse(fs.readFileSync(path.join(P, "sfx_cues.json"), "utf8"));
  const f = (s) => `${Math.floor(s / 60)}:${(s % 60).toFixed(2).padStart(5, "0")}`;
  let md = `# Timeline — ${dir}\n\nNarração: ${cfg.voice} · preservada integralmente (sem cortes, sem alteração de velocidade).\nTodos os tempos vêm do alinhamento palavra a palavra da narração (\`narracao/palavras_raw.json\`).\n\n| Cena | Início | Fim | O que acontece |\n|---|---|---|---|\n`;
  for (const [, id, st, du] of secs) md += `| ${id} | ${f(+st)} | ${f(+st + +du)} | ${cfg.scenes[id] || ""} |\n`;
  md += `\n## Efeitos sonoros (${cues.length})\n\n| Tempo | Efeito |\n|---|---|\n` + cues.map((c) => `| ${f(c.t)} | ${c.type} |`).join("\n") + "\n";
  fs.writeFileSync(path.join(BASE, dir, "TIMELINE.md"), md);
  // deliverables
  const L = path.join(BASE, dir, "legendas"); fs.mkdirSync(L, { recursive: true });
  fs.copyFileSync(path.join(P, "legendas.srt"), path.join(L, "legendas.srt"));
  const r = path.join(P, "renders", cfg.render);
  // final MP4 always ships WITHOUT metadata (video stream copied untouched; see strip_metadata.sh)
  if (fs.existsSync(r)) execFileSync(path.join(BASE, "_tooling", "strip_metadata.sh"), [r, path.join(BASE, dir, cfg.out), path.join(P, "assets", "mix.wav")], { stdio: "inherit" });
  const cov = path.join(P, "capa", "shot", "frame-00-at-0.5s.png");
  if (fs.existsSync(cov)) execFileSync("python3", ["-I", "-c", "import sys;from PIL import Image;im=Image.open(sys.argv[1]).convert('RGB');Image.frombytes('RGB',im.size,im.tobytes()).save(sys.argv[2],optimize=True)", cov, path.join(BASE, dir, "capa_instagram.png")]);
  console.log(dir, secs.length, "scenes", fs.existsSync(r) ? "→ " + cfg.out : "(render pending)");
}
