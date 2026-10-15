# REELS IA — Produção Premium (3 Reels)

Três Reels verticais produzidos a partir das suas narrações definitivas do ElevenLabs e dos vídeos de referência.

| # | Vídeo | Narração | Duração | Arquivo final |
|---|---|---|---|---|
| 01 | Cloudflare Security Audit | Elvis (20:07:36) | 56,77 s | `01_CLOUDFLARE/FINAL_01_cloudflare_security_audit.mp4` |
| 02 | Reverse Engineer Anything | Lendário (20:10:57) | 58,53 s | `02_REVERSE_ENGINEER/FINAL_02_reverse_engineer_anything.mp4` |
| 03 | Cinco projetos do GitHub | Elvis (20:12:47) | 98,2 s | `03_GITHUB_TOOLS/FINAL_03_cinco_projetos_github.mp4` |

**Formato:** MP4 · H.264 · 1080×1920 (9:16) · 30 fps · áudio AAC 48 kHz estéreo · −14 LUFS (padrão de loudness do Instagram).

## Estrutura de cada pasta

```
0X_.../
├── FINAL_0X_....mp4        ← vídeo pronto para publicar
├── capa_instagram.png      ← capa vertical 1080×1920 (conteúdo principal dentro do recorte 4:5 do feed)
├── TIMELINE.md             ← cena a cena + todos os efeitos sonoros, com tempos
├── legendas/legendas.srt   ← legendas em PT-BR (também queimadas no vídeo)
├── referencia/             ← vídeo de referência original
├── narracao/               ← narração ElevenLabs original + alinhamento palavra a palavra (palavras_raw.json)
└── projeto/                ← projeto HyperFrames editável (index.html + assets/ + mix de áudio + stems)
    ├── assets/mix.wav      ← mix final (voz + trilha + efeitos)
    ├── assets/stems/       ← trilha e efeitos separados
    ├── sfx_cues.json       ← lista de efeitos sonoros com tempo exato
    └── capa/               ← composição da capa
_tooling/                   ← gerador das 3 composições, motor de áudio e capas (reproduzível)
```

## Como foi feito

1. **Validação dos arquivos:** os 6 arquivos foram conferidos por nome, horário de geração e duração, e casados como você pediu (01 ↔ Elvis 20:07, 02 ↔ Lendário 20:10, 03 ↔ Elvis 20:12).
2. **Engenharia reversa das referências:** quadros extraídos a cada 2 s para mapear ganchos, sequência de demonstrações, textos e CTAs.
3. **Sincronização:** as três narrações foram transcritas localmente com tempo por palavra (modelo Parakeet v3, multilíngue). Cada cena, número, ícone e efeito sonoro é ancorado na palavra exata em que é dito, ou seja, nada é posicionado “a olho”.
4. **Animação:** composições HTML + GSAP renderizadas com **HyperFrames** (determinístico, quadro a quadro).
5. **Áudio:** a narração entra sem cortes, sem acelerar e sem mudar o tom. A trilha e todos os efeitos sonoros (whooshes, cliques, digitação, impactos, confirmações) foram **sintetizados do zero** para estes vídeos, então não há problema de licença. A trilha abaixa automaticamente sob a voz (ducking) e o mix é normalizado em −14 LUFS.
6. **Verificação:** em cada render, a narração foi comparada com o áudio final por correlação cruzada: deslocamento de 0 ms no início, no meio e no fim. Também foram verificados frames pretos (nenhum), proporção, codecs e duração.

## Origem das imagens

**Autênticas, obtidas dos repositórios oficiais via Git:**
- Textos, descrições, nomes de arquivos e comandos reais: `cloudflare/security-audit-skill` (fases, `architecture.md`, `coverage-ledger.json`, `confirmed`/`rejected`, `REPORT.md`, comando `npx skills add …`), `morluto/rea` (descrição, tópicos, `npx rea-agents setup`, Hopper/Ghidra), `heygen-com/hyperframes`, `googleworkspace/cli` (`gws gmail +triage`), `apify/apify-mcp-server`, `addyosmani/agent-skills` (nomes reais das skills e o ciclo DEFINE → SHIP), `microsoft/playwright-cli` (comandos `open`, `fill`, `click`, `screenshot`).
- Capturas reais: REA analisando um binário no Hopper (repo oficial), diagrama oficial do Apify MCP Server, **demo oficial em vídeo do gws** e o logotipo do HyperFrames.
- Logos oficiais das marcas (Cloudflare, Claude, GitHub, Gmail, Drive, Calendar, Microsoft, Playwright, Linux/Tux, Logitech, Codex, Instagram), vindos dos pacotes de ícones de marca Iconify e Simple Icons.
- Fotos do scanner e da placa de som: recortadas do seu vídeo de referência 02.

**Representações ilustrativas, sinalizadas no vídeo quando trazem dados:**
- O trecho de código vulnerável e o diff de correção do vídeo 01 (marcados como “exemplo ilustrativo”).
- A tabela de academias do vídeo 03 usa perfis anônimos (`@academia_01`…) com o aviso “dados ilustrativos”. Nenhum dado pessoal foi inventado como se fosse real.
- A caixa de entrada (vídeo 03), o formulário de checkout e as janelas de interface são recriações em vetor.
- O teclado MX Keypad é uma ilustração em vetor acompanhada do logo real da Logitech, porque este ambiente não tinha acesso a sites de imagens.

**Números:** exatamente os da narração (28 mil, 88.900, 15 minutos, 100 academias, +20 skills), sem atualização silenciosa.

## Legendas

As legendas são palavra por palavra (karaokê) e ficam na faixa central-inferior, entre y≈1270 e 1420, fora da área dos botões e da descrição do Instagram. Elas seguem fielmente o áudio, com a grafia dos nomes próprios corrigida: Claude, HeyGen, Apify, Addy Osmani, Logitech, DECODE, HyperFrames.

## Como editar ou renderizar de novo

```bash
cd REELS_IA_PRODUCAO_PREMIUM/01_CLOUDFLARE/projeto
npx hyperframes preview                 # editor visual (Studio) no navegador
npx hyperframes render -q delivery      # gera o MP4 em renders/
```

Para mudar uma cena ou um tempo pela fonte, edite `_tooling/v1_cloudflare.mjs` (ou v2/v3) e rode:

```bash
node _tooling/v1_cloudflare.mjs
python3 _tooling/audio.py 01_CLOUDFLARE/narracao/narracao_elvis.mp3 01_CLOUDFLARE/projeto/sfx_cues.json 01_CLOUDFLARE/projeto/assets/mix.wav --key A --bpm 100
```

A sincronia continua correta porque as cenas são ancoradas em palavras (por exemplo, `at("28")`), não em segundos fixos.
