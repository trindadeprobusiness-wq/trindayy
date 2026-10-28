# Lote 4 — Direção visual + storyboard (3 vídeos)

**Status: proposta para aprovação. Nada foi implementado.**

**Base visual: ESTILO CAMPEÃO** (`ESTILOS_DE_EDICAO/ESTILO_CAMPEAO_TRINDAYY.md`):
- Fundo azul-marinho escuro e 1 cor de destaque por vídeo.
- Legenda karaokê em caixa normal, no centro.
- Listas numeradas com bolinhas de progresso e números com contador.
- Prova real na tela.
- CTA "COMENTA A PALAVRA" com a caixa do Instagram digitando.

A **estrutura e o ritmo** vêm de cada referência.

## 0. Pareamento

| Vídeo | Narração | Duração | Referência | Palavra do CTA |
|---|---|---|---|---|
| **A · AGÊNCIA DE 13 CLAUDES** | Lendário 10:18 | 0:33 | aighostlab | SKILL (+ seguir) |
| **B · DESMONTANDO UM SaaS** | Mário 10:20 | 2:18 | destravandosaas | comenta qual peça (enquete aberta) |
| **C · TOP 3 DO GITHUB** | Mário 10:22 | 1:25 | lowcodepedro | REPOSITÓRIO |

## 1. Pontos para confirmar

1. **Legendas corrigidas** (o áudio não muda):
   - Clod/Cloud/Clouds → Claude/Claudes;
   - SaS → SaaS;
   - "tempo. Tolkien" → "tempo, tokens";
   - Open Claw → OpenClaw.
2. **Vídeo A:** a narração não diz o nome da skill, e a referência não mostra o repositório. Faço sem card de repositório inventado: tipografia + logo do Claude + os "13 agentes". Se você tiver o link ou o nome da skill, eu coloco o card real.
3. **Vídeo C:** não mostro número de estrelas nem de downloads, porque a narração não cita. Uso o card real de cada repositório com descrição, comando de instalação e logo verdadeiros:
   - `anomalyco/opencode`: "The open source AI coding agent.";
   - `plandex-ai/plandex`: "An AI coding agent designed for large tasks and real world projects.";
   - `aaif-goose/goose`: "your native open source AI agent — desktop app, CLI, and API".
4. **Referências em 3D** (A e B): o "palco" e a "maquete" viram 2,5D (cartões e blocos em perspectiva com sombra e profundidade), dentro do fundo escuro do estilo campeão.
5. **Música:** entrego com a trilha de retenção (muda junto com os cortes) e também a versão sem música, como no lote 3.

---

## VÍDEO A · AGÊNCIA DE 13 CLAUDES (0:33 · destaque roxo #a78bfa + laranja Claude #d97757)

**Ideia:** um "escritório" de 13 Claudes que vai acendendo um por função. Um contador fixo `AGENTES ×13` no topo dá a sensação de time crescendo. É rápido: uma função a cada 2–3 s, como na referência.

| Tempo | Fala | Visual |
|---|---|---|
| 0,0–2,6 | "O Claude acabou com o Instagram!" | Quadro 0: ícone do Instagram rachando + "O CLAUDE ACABOU COM O INSTAGRAM" palavra a palavra. Tremor curto em "acabou". |
| 2,6–8,3 | "skill… agência inteira de 13 Claudes… de graça" | Etiqueta "1 SKILL = 1 AGÊNCIA". Grade 13 → mesas em perspectiva com 13 avatares do Claude acendendo em cascata (contador 0 → 13). Selo "R$ 0" em "de graça". |
| 8,3–14,2 | Roteirista · 26 fórmulas de gancho · dá nota | Cabeçalho numerado **1 Roteirista** (●○○○○). Folha de roteiro digitando, leque de "26 fórmulas" (contador 0 → 26). Medidor de nota enchendo + carimbo "APROVADO" em "gravar" (marcado "exemplo"). |
| 14,2–20,7 | Social Media · comentários · bio · semana inteira | **2 Social Media**: balões de comentário recebendo ✓. **3 Bio nova**: perfil com a bio reescrita (riscado → nova). **4 Semana pronta**: calendário SEG…DOM preenchendo. Um a cada ~2 s, com as bolinhas avançando. |
| 20,7–27,8 | "E olha isso! O mais insano… caça os Reels viralizando… reescreve com a sua voz" | **5 O mais insano** (destaque laranja): grade de miniaturas de Reels com visualizações subindo; uma mira trava no maior; ele vira um roteiro com "sua voz" (onda de áudio). |
| 27,8–30,4 | "uma agência que não cobra nada!" | Os 13 Claudes juntos + **R$ 0** gigante com contador caindo de "agência" → 0. |
| 30,4–fim | "Comenta a skill e me segue…" | CTA campeão: "COMENTA A PALAVRA" → **SKILL**, caixa do Instagram digitando, botão **Seguir**. |

---

## VÍDEO B · DESMONTANDO UM SaaS (2:18 · destaque ciano #22d3ee + âmbar #fbbf24 no nome da peça)

**Ideia:** a "maquete" do app é montada peça por peça, sempre na mesma área da tela. Cada uma das **13 peças** segue o ciclo da fala:
1. **"Mas…"**: o problema aparece em vermelho (algo quebra ou some).
2. **"Então você pede pro Claude…"**: o terminal do Claude Code no topo digita o pedido.
3. **"Esse é o ___"**: o nome da peça bate em âmbar, a peça encaixa na maquete e o contador `PEÇAS 1/13` avança.

| Tempo | Peça | Problema (vermelho) → solução (visual) |
|---|---|---|
| 0,0–9,9 | — | Terminal: `> faz um app de agendamento`. Bloco **APP** aparece "lindo" (brilho). Selo "SÓ NO SEU PC". Em "desligou", o monitor apaga e o APP some (glitch). |
| 9,9–16,7 | 1 · Servidor | Pedido digitado → o APP sobe para um rack/servidor com LED "LIGADO 24h" e globo da internet. |
| 16,7–25,4 | 2 · Domínio | Barra de endereço com IP enorme `203.0.113.47` (vermelho) → placa `agenda.com.br` apontando para o servidor. |
| 25,4–35,8 | 3 · Banco de dados | Cliente marca "14h", a página recarrega e o horário some → cilindro **DB** guarda o horário. |
| 35,8–43,9 | 4 · Login | Várias pessoas mexendo na agenda → catraca com "e-mail + senha". |
| 43,9–54,3 | 5 · Permissões | Cliente A vê a agenda de B (alerta) → etiquetas A/B nos horários, cada um vê só o seu. |
| 54,3–65,7 | 6 · API | Linha direta tela→banco + ladrão apagando → bloco **API** no meio conferindo cada pedido (✓/✗). |
| 65,7–75,1 | 7 · Gateway de pagamento | Cartão "PROIBIDO guardar" (carimbo) → maquininha externa recebendo o cartão. |
| 75,1–84,3 | 8 · Webhook | "?" entre gateway e app → seta de aviso `pagamento.aprovado` voltando ao servidor. |
| 84,3–93,0 | 9 · Assinatura | Calendário com "cobrar na mão" riscado → ciclo automático "todo mês, mesmo dia". |
| 93,0–102,4 | 10 · E-mail transacional | Senha esquecida + cartão vencido, "ninguém avisa" → envelopes saindo sozinhos. |
| 102,4–115,4 | 11 · Variáveis de ambiente | Chave `STRIPE_KEY=sk_live_…` no código (mascarada) subindo pro GitHub + robô achando → chave entra no cofre `.env` do servidor. |
| 115,4–124,9 | 12 · Monitoramento | Relógio 03:00, servidor caído, cliente reclamando → alarme no celular. |
| 124,9–132,9 | 13 · Backup | Banco apagado (fumaça) → lua/noite + cópia indo para outro lugar. |
| 132,9–fim | — | Maquete completa com as 13 peças acesas, "PARABÉNS! VOCÊ CONSTRUIU UM **SaaS**" + CTA: caixa do Instagram com "qual peça você quer ver desmontada?" e chips das 13 peças. |

---

## VÍDEO C · TOP 3 DO GITHUB (1:25 · destaque verde GitHub #3fb950)

**Ideia:** fiel à referência (interface do GitHub) e ao estilo campeão (ranking numerado 1-2-3 com bolinhas de progresso). Cada repositório ganha uma demonstração concreta do que a fala descreve.

| Tempo | Fala | Visual |
|---|---|---|
| 0,2–4,8 | "Top 3 repositórios mais baixados… 30 dias!" | Quadro 0: "TOP 3" gigante + página GitHub "Trending" com 3 cards empilhados (sem números). Selo "últimos 30 dias". |
| 4,8–23,2 | **1 · OpenCode** | Cabeçalho numerado + card real `anomalyco/opencode` com logo real. Terminal com o comando real `curl -fsSL https://opencode.ai/v2/install \| bash` em "instalar". Em "entender o seu projeto", árvore de arquivos escaneada. Em "várias IAs", o agente se liga a Claude, GPT e Gemini (logos reais), "não fica preso a uma só". |
| 23,2–50,4 | **2 · Plandex** | Card real `plandex-ai/plandex` + descrição real. "Feature muito grande" → issue gigante quebrando numa checklist (Login, Banco, API, Pagamento, Testes, Deploy) que vai sendo marcada. "Só leva pro código o que está resolvido" → diff verde entrando no projeto. "Economiza tempo, tokens" → relógio + medidor de tokens (sem porcentagem inventada). |
| 50,4–78,6 | **3 · Goose** (o preferido) | Card real `aaif-goose/goose` + logo real + selo "MEU PREFERIDO". "Severino" → um agente fazendo várias tarefas (chips). "Roda local" → ícone de PC + comando real de instalação. "Não é pesado como Hermes / OpenClaw" → barras de "peso na máquina" (comparação ilustrativa, marcada). Skills: construir · pesquisar · mercado · público, sendo marcadas. |
| 78,6–fim | "Comenta o repositório… passo a passo…" | CTA campeão: **REPOSITÓRIO**, caixa digitando, logos dos 3 projetos lado a lado. |

---

## Próximo passo

Se aprovar (pode ajustar qualquer cena ou só responder os 5 pontos), implemento os 3 vídeos:
- no estilo campeão;
- com a sincronia verificada;
- com legendas corrigidas e capa;
- com descrição para o Instagram;
- com e sem música;
- e sempre **sem metadados**.
