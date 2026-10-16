// Lote 2 — organiza entregáveis: TIMELINE.md, legendas, FINAL_*.mp4 SEM METADADOS e capa PNG sem metadados.
// Uso: node finalize2.mjs [NN_NOME ...]   (sem argumentos: todos os que já têm render)
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { L2ROOT } from "../lib/kit2.mjs";

const STRIP = "/home/user/trindayy/REELS_IA_PRODUCAO_PREMIUM/_tooling/strip_metadata.sh";
const V = {
  "01_STACK": { out: "FINAL_01_stack_claude_code.mp4", voice: "Lendário (23:58)", scenes: {
    s1: "Gancho — medidor de poder do Claude Code", s2: "Ferramentas orbitando o Claude Code", s3: "OmniRoute: gateway gratuito + provedores reais", s3b: "O modelo certo pra cada tarefa (roteamento do OmniRoute)", s4: "Headroom: comprime o que o agente lê + print real de economia",
    s5: "“E TEM MAIS!” — hooks, subagentes e plugins nativos", s6: "Skills + MCP conectando ferramentas", s7: "A stack se monta camada por camada", s8: "Não precisa aplicar tudo de uma vez: 1-2-3", s9: "CTA — Comenta STACK + Seguir" } },
  "02_INTERFACE": { out: "FINAL_02_interface_com_referencia.mp4", voice: "Lucas (23:59)", scenes: {
    s1: "Gancho — prompt vago → resultado genérico", s2: "Um jeito muito mais prático (explicação longa riscada)", s3: "Referência visual real (exemplo do Taste Skill)", s4: "A IA analisa a estrutura, identifica elementos e gera código",
    s5: "Refinar componentes, aparência e comportamento", s6: "BONITA ≠ PRONTA", s7: "Funciona, adapta ao celular, boa experiência", s8: "Referência + implementação + testes", s9: "CTA — Comenta INTERFACE" } },
  "03_RUFLO": { out: "FINAL_03_ruflo_equipe_de_agentes.mp4", voice: "Mário (00:02)", scenes: {
    s1: "Gancho — 1 agente → uma equipe inteira", s2: "Ruflo (imagem real do repositório) + múltiplos agentes especializados", s3: "1 agente pra tudo = sobrecarga", s3b: "Cada agente com um papel: planejamento, desenvolvimento, análise, verificação",
    s4: "Colaboração: um executa, outro analisa e acha problema → próxima etapa", s5: "Fluxo organizado, menos decisão manual", s6: "Aplicado ao negócio: pesquisa, solução, processos, entregas", s6b: "Sozinho × agentes de apoio",
    s7: "O potencial que pouca gente viu — não é só conversar com IA", s7b: "Coordenar capacidades de ponta a ponta", s8: "Ainda depende de instruções, ferramentas e verificação humana → EQUIPES DIGITAIS", s9: "CTA — Comenta RUFLO + Seguir (comando de instalação real)" } },
  "04_AGENTES": { out: "FINAL_04_agency_agents.mp4", voice: "Lendário (00:03)", scenes: {
    s1: "Gancho — 18 áreas reais do repositório entrando no computador", s2: "Agency Agents — card do repositório msitarzewski/agency-agents", s3: "1 assistente genérico pra qualquer tarefa", s3b: "Agentes reais com função específica (UI Designer, Frontend Developer, Growth Hacker)",
    s4: "Design, Desenvolvimento, Marketing, Vendas (+14 áreas)", s5: "Arquivo real design-ui-designer.md: PAPEL e ORIENTAÇÕES", s6: "Separou, organizou — execução estruturada", s7: "Planeja → desenvolve → revisa → você avança",
    s8: "Não substitui a equipe — IA em etapas específicas", s9: "Projetos, produtos, negócio → possibilidades", s10: "CTA — Comenta AGENTES" } },
  "05_DESIGN": { out: "FINAL_05_design_com_referencias.mp4", voice: "Mário (00:04)", scenes: {
    s1: "Gancho — funciona… mas parece profissional?", s2: "Um dos maiores desafios: IA → interface", s3: "Gerar código ≠ experiência visual (página real de exemplo)", s4: "Formas reais: Taste Skill, Awesome DESIGN.md, Impeccable",
    s5: "Página real analisada: organização, tipografia, espaçamentos, paleta extraída da imagem", s6: "Tokens reais de DESIGN.md → interface própria", s7: "Não é só bonito", s8: "Entender o produto e navegar com facilidade",
    s9: "O segredo: desenvolvimento + referências + refinamento", s10: "CTA — Comenta DESIGN + Seguir" } },
  "06_CODIGO": { out: "FINAL_06_codigo_no_terminal.mp4", voice: "Lendário (00:05)", scenes: {
    s1: "Gancho — ainda no manual? → agente", s2: "Direto pelo terminal", s3: "Instala, instrui e acompanha (exemplo real do README do ScrapeGraphAI)", s4: "Comandos + arquivos + verificações = 1 fluxo",
    s5: "Código gerado ≠ funcionando", s6: "Executar → testar → corrigir", s7: "CTA — Comenta CÓDIGO" } },
  "07_TOKENS": { out: "FINAL_07_tokens_claude_code.mp4", voice: "Mário (00:07)", scenes: {
    s1: "Gancho — tokens vazando no Claude Code", s2: "O motivo é simples", s3: "Nem toda tarefa precisa do modelo mais poderoso", s4: "Alteração pequena / organizar arquivo",
    s5: "Haiku: modelo leve, suficiente", s6: "Cada tarefa, seu modelo", s7: "Modelo é só uma parte", s8: "Contexto: informação desnecessária, instrução repetida, histórico extenso → consumo",
    s9: "O ideal: modelo apropriado + contexto organizado + qualidade verificada", s10: "Melhor ≠ mais tokens — cada recurso onde faz diferença", s11: "CTA — Comenta TOKENS + Seguir" } },
  "08_DESIGN_GRATIS": { out: "FINAL_08_design_gratis.mp4", voice: "Lendário (00:08)", scenes: {
    s1: "Gancho — pagar caro em assinaturas?", s2: "Universo de projetos gratuitos e de código aberto (logos reais)", s3: "Em alta no GitHub", s4: "Alternativas abertas: Penpot, Krita, GIMP, Blender, Excalidraw",
    s5: "Prontos pra instalar e usar", s6: "Grátis ≠ completo (ilustrativo)", s7: "Conferir funcionalidades, compatibilidade e limitações", s8: "Pode atender boa parte das necessidades",
    s9: "Faz diferença pra quem começa, cria conteúdo ou desenvolve", s10: "CTA — Comenta DESIGN GRÁTIS + Seguir" } },
  "09_MODELOS": { out: "FINAL_09_varios_modelos.mp4", voice: "Lendário (00:10)", scenes: {
    s1: "Gancho — só 1 modelo? → vários", s2: "OpenAI, Claude, Grok e Kimi", s3: "Cada um com vantagens — depende da tarefa", s4: "Programação, análise, pesquisa, etapas",
    s5: "Fluxo automatizado", s6: "Integrar modelos no seu fluxo", s7: "O modelo certo pra cada atividade (roteamento ilustrativo)", s8: "Equilibrar qualidade, custo e desempenho",
    s9: "Teste sempre — não existe o melhor pra tudo", s10: "CTA — Comenta MODELOS" } },
};

const only = process.argv.slice(2);
for (const [dir, cfg] of Object.entries(V)) {
  if (only.length && !only.includes(dir)) continue;
  const D = path.join(L2ROOT, dir), P = path.join(D, "projeto");
  if (!fs.existsSync(path.join(P, "index.html"))) continue;
  const html = fs.readFileSync(path.join(P, "index.html"), "utf8");
  const secs = [...html.matchAll(/<section id="(\w+)" class="scene clip[^"]*" data-start="([\d.]+)" data-duration="([\d.]+)"/g)];
  const cues = JSON.parse(fs.readFileSync(path.join(P, "sfx_cues.json"), "utf8"));
  const total = +html.match(/data-composition-id="main" data-start="0" data-duration="([\d.]+)"/)[1];
  const f = (s) => `${Math.floor(s / 60)}:${(s % 60).toFixed(2).padStart(5, "0")}`;
  let md = `# Timeline — ${dir}\n\nNarração: ${cfg.voice} · preservada integralmente (sem cortes, sem alteração de velocidade).\n` +
    `Duração do vídeo: ${f(total)} (a narração termina antes; o final segura o CTA com a trilha).\n` +
    `Todos os tempos vêm do alinhamento palavra a palavra da narração (\`narracao/palavras_raw.json\`).\n\n| Cena | Início | Fim | O que acontece |\n|---|---|---|---|\n`;
  for (const [, id, st, du] of secs) md += `| ${id} | ${f(+st)} | ${f(+st + +du)} | ${cfg.scenes[id] || ""} |\n`;
  md += `\n## Efeitos sonoros (${cues.length})\n\nTodos sintetizados (sem samples de terceiros), assim como a trilha.\n\n| Tempo | Efeito |\n|---|---|\n` + cues.map((c) => `| ${f(c.t)} | ${c.type} |`).join("\n") + "\n";
  fs.writeFileSync(path.join(D, "TIMELINE.md"), md);
  const L = path.join(D, "legendas"); fs.mkdirSync(L, { recursive: true });
  fs.copyFileSync(path.join(P, "legendas.srt"), path.join(L, "legendas.srt"));
  const r = path.join(P, "renders", "render.mp4");
  // o MP4 final SEMPRE sai sem metadados (vídeo copiado sem recompressão; ver strip_metadata.sh)
  if (fs.existsSync(r)) execFileSync(STRIP, [r, path.join(D, cfg.out), path.join(P, "assets", "mix.wav")], { stdio: "inherit" });
  const cov = path.join(P, "capa", "shot", "frame-00-at-0.5s.png");
  if (fs.existsSync(cov)) execFileSync("python3", ["-I", "-c", "import sys;from PIL import Image;im=Image.open(sys.argv[1]).convert('RGB');Image.frombytes('RGB',im.size,im.tobytes()).save(sys.argv[2],optimize=True)", cov, path.join(D, "capa_instagram.png")]);
  console.log(dir, secs.length, "cenas", fs.existsSync(r) ? "→ " + cfg.out : "(render pendente)");
}
