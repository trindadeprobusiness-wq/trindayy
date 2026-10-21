// Lote 3 — entregáveis: TIMELINE.md, legendas, FINAL_*.mp4 e FINAL_*_sem_musica.mp4 SEM METADADOS, capa PNG sem metadados.
// Uso: node finalize3.mjs [NN_NOME ...]
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { L3ROOT } from "../lib/kit3.mjs";

const STRIP = "/home/user/trindayy/REELS_IA_PRODUCAO_PREMIUM/_tooling/strip_metadata.sh";
const V = {
  "01_OPEN_HIGGSFIELD": { out: "FINAL_01_open_higgsfield", voice: "Lendário (17:35)", scenes: {
    s1: "Gancho — pago × código aberto (cadeado abre)", s2: "Banner real + card do repositório Anil-matcha/Open-Higgsfield-AI", s3: "Demo real do repositório + URL hospedada (sem instalar)", s4: "CTA — Comenta VÍDEO" } },
  "02_XTOOL": { out: "FINAL_02_xtool_claude_code", voice: "Mário (17:38)", scenes: {
    s1: "Gancho — a corrente que prendia ao Mac se parte; iPhone entra", s2: "+ Claude Code", s3: "Repositório real xtool-org/xtool", s4: "Xcode (macOS) × xtool (multiplataforma)", s5: "Código SwiftUI real do tutorial → tela real “Hello, world!” no iPhone; Swift, SwiftUI, Windows, Linux",
    s6: "Pedido ao Claude Code (exemplo): telas, componentes, estrutura", s7: "xtool dev → assinar → xtool install (saída real do README) + tela real do app instalado", s8: "Mais flexível, apps nativos", s9: "Grátis no GitHub", s10: "Para quem é + linguagem natural → código", s11: "CTA — Comenta APP" } },
  "03_HIGGSFIELD": { out: "FINAL_03_higgsfield_repositorio", voice: "Mário (17:39)", scenes: {
    s1: "Gancho — vídeos impressionantes / Higgsfield", s2: "O problema: assinatura paga", s3: "A descoberta: repositório real higgsfield-ai/higgsfield", s4: "Diagrama real do README → nós de GPU e curva de treino", s5: "O detalhe: plataforma comercial ≠ repositório", s6: "Ainda assim vale explorar (código aberto)", s7: "CTA — Comenta HIGGSFIELD" } },
  "04_PS5": { out: "FINAL_04_ps5_no_pc_anyps5", voice: "Lendário (18:00)", scenes: {
    s1: "Gancho — controle entra no PC", s2: "E o GTA VI? (tipografia própria)", s3: "Parece impossível… mas apareceu no GitHub", s4: "O nome: AnyPS5 (repositório real)", s5: "Camada de compatibilidade (README: no emulation)", s6: "Mira Windows e Linux",
    s7: "Reduzir algumas barreiras", s8: "Atenção: ainda não — proposta experimental", s9: "Tecnologia, programação, limites do hardware", s10: "CTA — Comenta PS5" } },
  "05_INSTINCT": { out: "FINAL_05_instinct_modelo_de_negocio", voice: "Mário (18:05)", scenes: {
    s1: "Gancho — US$ 10 bilhões", s2: "Algo que você usa todo dia: assistente pessoal", s3: "Instinct: conversa → executar", s4: "Restaurante, compromisso, carro", s5: "Vários apps → uma mensagem", s6: "A IA entende e executa (exemplo)", s7: "A virada: o modelo de negócio",
    s8: "Assinatura mensal × intermediar transações", s9: "Recibo e comissão (sem porcentagem inventada)", s10: "Escala: milhares de pessoas → receita", s11: "Sem curva de aprendizado: é só conversar", s12: "Para empresas: clientes e vendas", s13: "Não é mais um chatbot: agentes", s14: "Mercado de agentes despertando interesse", s15: "CTA — me conta (enquete)" } },
  "06_WHATSAPP": { out: "FINAL_06_claude_no_whatsapp", voice: "Lendário (18:12)", scenes: {
    s1: "Gancho — o Claude no seu WhatsApp", s2: "Sem programar a integração do zero", s3: "Kapso: ponte para a API oficial", s4: "Passo 1 — conta e número conectado (mascarado)", s5: "Passo 2 — habilidades no Claude Code", s6: "Passo 3 — descreva o que quer construir", s7: "O Claude Code monta tudo + conversa de exemplo", s8: "Regras: consentimento e janela de 24 h", s9: "CTA — Comenta WHATSAPP" } },
  "07_WA_AKG": { out: "FINAL_07_wa_akg", voice: "Lucas (18:20)", scenes: {
    s1: "Gancho — WhatsApp + seus sistemas", s2: "Repositório real mrifqidaffaaditya/WA-AKG", s3: "Como funciona (diagrama do README)", s4: "Painel: conexões, mensagens, integrações (ilustrativo)", s5: "Integração com n8n (n8n-nodes-wa-akg) → fluxos", s6: "Mídias, figurinhas, sessões", s7: "Estrutura real do repositório → adapte ao seu projeto", s8: "CTA — Comenta API" } },
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
