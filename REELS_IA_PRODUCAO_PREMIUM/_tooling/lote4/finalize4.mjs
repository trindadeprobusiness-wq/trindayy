// Lote 4 — entregáveis: TIMELINE.md, legendas, FINAL_*.mp4 e FINAL_*_sem_musica.mp4 SEM METADADOS, capa PNG sem metadados.
// Uso: node finalize3.mjs [NN_NOME ...]
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { L4ROOT as L3ROOT } from "../lib/kit4.mjs";

const STRIP = "/home/user/trindayy/REELS_IA_PRODUCAO_PREMIUM/_tooling/strip_metadata.sh";
const V = {
  "01_AGENCIA_CLAUDE": { out: "FINAL_01_agencia_de_13_claudes", voice: "Lendário (10:18)", scenes: {
    s1: "Gancho — o Claude acabou com o Instagram (ícone racha)", s2: "1 skill = 1 agência: 13 Claudes acendendo + R$ 0", s3: "1 Roteirista: 26 fórmulas de gancho + nota + APROVADO", s4: "2 Social Media · 3 Bio nova · 4 Semana pronta",
    s5: "5 O mais insano: caça os Reels virais do nicho e reescreve com a sua voz", s6: "Uma agência que não cobra nada: R$ 0", s7: "CTA — Comenta SKILL + Seguir" } },
  "02_SAAS": { out: "FINAL_02_desmontando_um_saas", voice: "Mário (10:20)", scenes: {
    s0: "O app lindo que só existe no seu PC", p1: "Peça 1 — Servidor", p2: "Peça 2 — Domínio", p3: "Peça 3 — Banco de dados", p4: "Peça 4 — Login", p5: "Peça 5 — Permissões", p6: "Peça 6 — API",
    p7: "Peça 7 — Gateway de pagamento", p8: "Peça 8 — Webhook", p9: "Peça 9 — Assinatura", p10: "Peça 10 — E-mail transacional", p11: "Peça 11 — Variáveis de ambiente", p12: "Peça 12 — Monitoramento", p13: "Peça 13 — Backup",
    s14: "Você construiu um SaaS + CTA: qual peça você quer ver desmontada?" } },
  "03_TOP3_GITHUB": { out: "FINAL_03_top3_repositorios_github", voice: "Mário (10:22)", scenes: {
    s1: "Gancho — TOP 3 mais baixados no GitHub (30 dias)", s2: "1 OpenCode — card real anomalyco/opencode", s3: "Instala (comando real), entende o projeto, distribui por várias IAs", s4: "2 Plandex — card real + direto × em etapas",
    s5: "Feature gigante → checklist → só leva pro código o que está resolvido", s6: "Economiza tempo, tokens e acelera", s7: "3 Goose — card real, o preferido, o “Severino”", s8: "Não é pesado como Hermes/OpenClaw (ilustrativo)",
    s9: "Skills: construir, pesquisar, mercado, público — uso diário", s10: "CTA — Comenta REPOSITÓRIO" } },
};
const only = process.argv.slice(2);
for (const [dir, cfg] of Object.entries(V)) {
  if (only.length && !only.includes(dir)) continue;
  const D = path.join(L3ROOT, dir), P = path.join(D, "projeto");
  const html = fs.readFileSync(path.join(P, "index.html"), "utf8");
  const secs = [...html.matchAll(/<section id="(\w+)" class="scene clip[^"]*" data-start="([\d.]+)" data-duration="([\d.]+)"/g)];
  const cues = JSON.parse(fs.readFileSync(path.join(P, "sfx_cues.json"), "utf8"));
  const total = +html.match(/data-composition-id="main" data-start="0" data-duration="([\d.]+)"/)[1];
  const f = (s) => `${Math.floor(s / 60)}:${(s % 60).toFixed(2).padStart(5, "0")}`;
  let md = `# Timeline — ${dir}\n\nNarração: ${cfg.voice} · preservada integralmente (sem cortes, sem alteração de velocidade).\n` +
    `Duração do vídeo: ${f(total)} (≈1,3 s depois da última palavra para o CTA respirar).\n` +
    `Todos os tempos vêm do alinhamento palavra a palavra da narração (\`narracao/palavras_raw.json\`).\n\n| Cena | Início | Fim | O que acontece |\n|---|---|---|---|\n`;
  for (const [, id, st, du] of secs) md += `| ${id} | ${f(+st)} | ${f(+st + +du)} | ${cfg.scenes[id] || ""} |\n`;
  md += `\n## Efeitos sonoros (${cues.length})\n\nTodos sintetizados (sem samples de terceiros), assim como a trilha.\n\n| Tempo | Efeito |\n|---|---|\n` + cues.map((c) => `| ${f(c.t)} | ${c.type} |`).join("\n") + "\n";
  fs.writeFileSync(path.join(D, "TIMELINE.md"), md);
  const L = path.join(D, "legendas"); fs.mkdirSync(L, { recursive: true });
  fs.copyFileSync(path.join(P, "legendas.srt"), path.join(L, "legendas.srt"));
  const r = path.join(P, "renders", "render.mp4");
  if (fs.existsSync(r)) {
    // os MP4 finais SEMPRE saem sem metadados (vídeo copiado sem recompressão; ver strip_metadata.sh)
    execFileSync(STRIP, [r, path.join(D, `${cfg.out}.mp4`), path.join(P, "assets", "mix.wav")], { stdio: "inherit" });
    execFileSync(STRIP, [r, path.join(D, `${cfg.out}_sem_musica.mp4`), path.join(P, "assets", "mix_sem_musica.wav")], { stdio: "inherit" });
  }
  const cov = path.join(P, "capa", "shot", "frame-00-at-0.5s.png");
  if (fs.existsSync(cov)) execFileSync("python3", ["-I", "-c", "import sys;from PIL import Image;im=Image.open(sys.argv[1]).convert('RGB');Image.frombytes('RGB',im.size,im.tobytes()).save(sys.argv[2],optimize=True)", cov, path.join(D, "capa_instagram.png")]);
  console.log(dir, secs.length, "cenas", fs.existsSync(r) ? "→ " + cfg.out : "(render pendente)");
}
