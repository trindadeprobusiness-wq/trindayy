# Lote 3 — Direção visual + storyboard (7 vídeos)

**Status: proposta para aprovação. Nada foi implementado.**

Base usada: as 7 narrações do ElevenLabs (transcritas palavra a palavra), as 8 referências, o *Esqueleto Universal de Edição* (`ESTILOS_DE_EDICAO/`) e os repositórios reais de cada ferramenta (clonados e lidos).

---

## 0. Pareamento narração ↔ referência

| Vídeo | Narração | Duração | Referência | Ferramenta real (confirmada) |
|---|---|---|---|---|
| **A · OPEN HIGGSFIELD** | Lendário 17:35 | 0:23 | skand.ai | `Anil-matcha/Open-Higgsfield-AI` |
| **B · XTOOL** | Mário 17:38 | 1:28 | billyia_ | `xtool-org/xtool` |
| **C · HIGGSFIELD (o repositório)** | Mário 17:39 | 0:48 | gpeterson.co | `higgsfield-ai/higgsfield` |
| **D · PS5 NO PC** | Lendário 18:00 | 0:59 | matheusgomes | `boykopovar/AnyPS5` |
| **E · INSTINCT** | Mário 18:05 | 2:02 | llucaspaiva__ | (startup — sem repositório) |
| **F · CLAUDE NO WHATSAPP** | Lendário 18:12 | 0:57 | guipaulinooo | Kapso (sem repositório público encontrado) |
| **G · WA-AKG** | Lucas 18:20 | 0:51 | itsdavixavier | `mrifqidaffaaditya/WA-AKG` |

Sem uso: **pedrohtmallet** (equipe de agentes para YouTube) — nenhuma narração fala disso.

## 1. Pontos que preciso que você confirme

1. **Nome falado ≠ nome real** (só corrijo a legenda; o áudio fica intacto):
   - D: a voz diz "NPS 5" — o projeto da referência é **AnyPS5**. Legenda: "AnyPS5".
   - G: a voz diz "WAAKG" — o projeto é **WA-AKG**.
   - F: a voz diz "Capsu" — a ferramenta é **Kapso**.
   - A: o repositório hoje se apresenta como "Open Generative AI" (o nome do repositório continua `Open-Higgsfield-AI`). Vou mostrar o nome do repositório, que é o que a fala diz.
   - Todas: "Cloud/Clod Code" → **Claude Code**; "X Tool" → **xtool**; "X Code" → **Xcode**.
2. **Trilha:** no último lote você pediu sem música de fundo. Faço **sem música** (voz + efeitos) por padrão? Posso entregar as duas versões.
3. **Logos de terceiros:** não tenho os logos oficiais do Kapso, WhatsApp, n8n e PlayStation, e não uso arte oficial do GTA VI (direitos autorais). Proposta: **tipografia + ícones neutros** (balão verde para WhatsApp, controle genérico para console). Se você me mandar os logos/prints que pode usar, eu substituo.
4. **Vídeo E (Instinct):** não tenho imagens reais da empresa. Tudo será tipografia, interface ilustrativa (marcada como "exemplo") e números **somente os falados** (US$ 10 bilhões). Não vou repetir números da referência que a narração não diz (ex.: "US$ 1 bi").

## 2. Linguagem visual comum (do Esqueleto)

- **Primeiro quadro já com o gancho** (nada de tela vazia), nenhum vazio > 0,3 s, elementos entram **0,06–0,12 s antes** da palavra.
- **Câmera viva** em toda cena (zoom 4,5% + subida de 14 px na duração da cena) e fundo sempre em movimento lento.
- **Entrada de cena:** escala 94→100% + desfoque 10→0 px (0,45 s, expo out). **Saída:** desfoque 0→16 px + escala 100→112% (0,30 s, ease in).
- **Texto palavra a palavra** (sobe 26 px + perde o desfoque, 0,5 s) nos títulos-chave.
- **Área segura:** nada importante acima de y=300 nem abaixo de y=1540; legenda dinâmica em ~y=1235.
- **Marca fixa:** sem logo próprio fornecido → não uso. (Se quiser, me mande o seu @/logo.)
- **Tipografia:** Space Grotesk 700 (títulos), Inter 600–900 (apoio), JetBrains Mono (código/terminal).
- **Som (quando necessário):** whoosh nas viradas, pop em cartões, risco ao riscar, impacto no número/nome herói, digitação em terminal, clique + "plim" ao concluir. Mix final −14 LUFS.

**Paleta por vídeo** (cada um com identidade própria):

| Vídeo | Estilo | Fundo | Destaque | Apoio |
|---|---|---|---|---|
| A | Escuro tech | #07080B | lima ácido #D4FF3A | violeta #8B5CF6 |
| B | Claro premium (estética Apple) | #F5F5F7 | azul iOS #0A84FF | grafite #1D1D1F |
| C | Escuro tech | #05070D | lima #D4FF3A | âmbar de alerta #FFB020 |
| D | Escuro "console" | #050A1F | azul elétrico #2F6BFF | magenta neon #FF2E88 |
| E | Editorial claro | #F3EFE7 | tinta #111 | verde dinheiro #0B8A4C / coral #FF5A36 |
| F | Claro quente | #F6EFE8 | verde WhatsApp #25D366 | terracota #D9774B |
| G | Escuro dashboard | #06110B | verde #22C55E | ciano #22D3EE |

---

## VÍDEO A · OPEN HIGGSFIELD (Lendário 17:35 · 0:23 · CTA "VÍDEO")

**Ideia central:** "pago e fechado" vira "aberto e grátis" em 23 s, com ritmo rápido.

### A1 — 0,00–6,60 · Gancho
- **Fala:** "Você sabia que existe uma alternativa de código aberto ao Higgsfield para gerar vídeos com inteligência artificial?"
- **Visual:** duas pílulas lado a lado. À esquerda "Higgsfield" com um cadeado e um "$". À direita "código aberto" com `</>`. Entre elas, uma seta ⇄. Embaixo, um ícone de claquete.
- **Movimento:** o título "uma alternativa ABERTA" já está na tela no quadro 0 e entra palavra a palavra. Em 2,10 ("código aberto") o cadeado da direita abre com um quique (back out). Em 3,22 a pílula "Higgsfield" entra pela esquerda. Em 4,55 ("vídeos") a claquete fecha (rotação de 0,2 s).
- **Transição:** a pílula aberta cresce e vira o card do repositório (*match cut* por escala).
- **Som:** "clack" do cadeado abrindo em 2,10.
- **Por quê:** o contraste visual pago × aberto é a promessa do vídeo. O cadeado abrindo resume a ideia em 1 segundo, antes do primeiro corte.
- **Prompt técnico:** `cena s1 0–6.6; kw palavra-a-palavra desde 0.05; #lock: fromTo rotation/shackle y -18→0 em at("código")-0.1; #pill-hf inn left em at("Higgsfield")-0.08; #clap rotation -25→0 0.2s em at("vídeos")-0.06; sfx lock@at("código")`

### A2 — 6,70–11,40 · Revelação do projeto
- **Fala:** "O projeto se chama OpenHiggsfield AI e está disponível no GitHub."
- **Visual:** card de repositório GitHub fiel (modo escuro) com `Anil-matcha / Open-Higgsfield-AI` e o selo "Public". O nome do projeto aparece em tipografia gigante por cima.
- **Movimento:** o card sobe com rotação 3D leve (rotationX −20→0). Em 7,95 o nome "Open Higgsfield AI" é digitado letra a letra. Em 10,65 ("GitHub") entra um selo GitHub com raios girando atrás.
- **Transição:** *whip pan* horizontal (borrão de movimento) para a cena do navegador.
- **Som:** digitação no nome + impacto no selo GitHub.
- **Por quê:** prova real de que o projeto existe (o nome do repositório é a evidência). A digitação sincroniza leitura e fala.
- **Prompt técnico:** `ghCard dark(owner:"Anil-matcha", repo:"Open-Higgsfield-AI"); type("#repo-name", at("chama")+0.3, 1.0); inn("#gh-seal", at("GitHub.")-0.08, "slam") + raios rotation 0→60 contínuo`

### A3 — 11,50–18,60 · O que ele faz
- **Fala:** "Ele oferece recursos de geração de vídeos por inteligência artificial e uma opção para testar diretamente pelo navegador."
- **Visual:** janela de navegador estilizada. A barra de endereço digita a URL real do README (`muapi.ai/open-generative-ai`). Dentro, um painel de "estúdio" com o campo *prompt* e o botão "Gerar". Por baixo, a frase real do README em destaque: **"Try it Online — No Install Required"**.
- **Movimento:** em 13,0 ("geração") um *prompt* ilustrativo é digitado no campo e uma barra de progresso enche. Em 16,4 ("testar") o botão recebe um clique (encolhe 4% e volta). Em 17,9 ("navegador") a janela inteira dá um zoom-out e revela o navegador completo.
- **Transição:** a janela encolhe e vira um ícone que voa para o centro do CTA.
- **Som:** clique em 16,4; "plim" ao terminar a barra.
- **Por quê:** "testar pelo navegador" é o maior benefício (zero instalação). Mostrar o fluxo prompt → gerar vale mais do que listar recursos. Não mostro vídeo gerado falso: a barra de progresso termina em um quadro "pronto", sem conteúdo inventado.
- **Prompt técnico:** `browser frame; type("#url", at("Ele")+0.1, .8, "muapi.ai/open-generative-ai"); type("#prompt", at("geração")-0.08, 1.2); fill("#bar", at("vídeos",2), 1.4); click("#btn", at("testar")-0.08); fromTo("#win",{scale:1.15},{scale:1}, at("navegador")-0.1)`

### A4 — 18,70–fim · CTA
- **Fala:** "Quer conhecer essa ferramenta? Comenta vídeo que eu te envio o repositório."
- **Visual:** CTA padrão do kit (palavra herói "VÍDEO" em lima + caixa de comentário do Instagram digitando + seta ↓).
- **Movimento:** "VÍDEO" entra com *slam* e partículas em 20,98; a caixa digita em seguida; a seta pulsa até o fim.
- **Som:** impacto em "vídeo".
- **Por quê:** o CTA precisa de pelo menos 3 s na tela. Adiciono ~1 s de respiro depois da última palavra.

---

## VÍDEO B · XTOOL + CLAUDE CODE (Mário 17:38 · 1:28 · CTA "APP")

**Ideia central:** um **iPhone persistente** atravessa o vídeo todo e "ganha vida" à medida que o app é construído. É o fio condutor visual que segura 88 s.

### B1 — 0,00–5,90 · Gancho
- **Fala:** "Você não precisa mais depender exclusivamente de um Mac para desenvolver aplicativos para iPhone."
- **Visual:** silhueta de notebook genérico preso por uma corrente a um iPhone, com o rótulo "só no Mac". Sem logo da Apple.
- **Movimento:** o quadro 0 já mostra notebook + corrente + título "SEM MAC?". Em 1,85 ("exclusivamente") a corrente estica e se parte em 3 elos que caem com física (rotação + gravidade). Em 4,95 ("iPhone") o iPhone sobe ao centro com *spring*.
- **Transição:** o iPhone fica e o notebook sai por desfoque (o iPhone é o objeto contínuo).
- **Som:** corrente partindo em 1,85; "whoosh" suave no iPhone.
- **Por quê:** a quebra da dependência é literalmente uma corrente quebrando. É o tipo de metáfora que acrescenta significado em vez de enfeitar.
- **Prompt técnico:** `#chain links: keyframes y 0→420, rotation 0→±80, opacity→0 a partir de at("exclusivamente")-0.06; #iphone fromTo y 600→0 ease back em at("iPhone.")-0.1 (persistente entre cenas)`

### B2 — 6,00–11,30 · + Claude Code
- **Fala:** "E o mais interessante é que agora você pode combinar essa possibilidade com o Claude Code."
- **Visual:** iPhone à direita e o tile do Claude (logo real) à esquerda, com um "+" pulsando no meio.
- **Movimento:** em 8,45 ("combinar") o iPhone desliza para a direita e o "+" aparece. Em 10,15 ("Claude") o tile do Claude entra com *pop*, e um feixe de luz liga os dois.
- **Transição:** o feixe vira a linha de um card de repositório (*wipe* seguindo a linha).
- **Som:** pop em "Claude".
- **Prompt técnico:** `move #iphone x:+220 em at("combinar")-0.1; inn("#cc-tile", at("Clod")-0.08, "pop"); draw("#beam", at("Clod")+0.1, .4)`

### B3 — 11,40–17,70 · O projeto xtool
- **Fala:** "Existe um projeto de código aberto chamado xtool, que está chamando a atenção de quem desenvolve aplicativos."
- **Visual:** card do repositório real `xtool-org/xtool` com a descrição real: *"Cross-platform Xcode replacement. Build and deploy iOS apps with SwiftPM on Linux, Windows, and macOS."*
- **Movimento:** em 13,75 ("xtool") o nome é digitado em mono gigante. A descrição surge linha a linha. Em 14,95 ("chamando a atenção") o card ganha um brilho pulsante. Não mostro estrelas, porque a narração não cita números.
- **Transição:** zoom no texto "Xcode replacement", que vira o título da próxima cena.
- **Som:** digitação.
- **Prompt técnico:** `ghCard(xtool-org/xtool, desc real do README); type("#name", at("X")-0.06, .5); stagger linhas .12; glow pulse em at("chamando")`

### B4 — 17,80–23,90 · O que ele substitui
- **Fala:** "Basicamente, ele funciona como uma alternativa multiplataforma a algumas ferramentas do Xcode."
- **Visual:** balança/comparativo. À esquerda, "Xcode — macOS". À direita, "xtool — multiplataforma", com 3 pontinhos de sistema orbitando.
- **Movimento:** em 20,65 ("multiplataforma") a órbita gira 120°. Em 23,0 ("Xcode") o rótulo Xcode recebe um sublinhado.
- **Transição:** a órbita "explode" nos chips de sistemas da próxima cena.
- **Prompt técnico:** `compare split; orbit rotation 0→120 em at("multiplataforma")-0.1; underline scaleX em at("X",2)`

### B5 — 24,00–33,50 · Swift, SwiftUI, Windows, Linux
- **Fala:** "Isso significa que você consegue trabalhar com aplicações para iOS utilizando Swift e SwiftUI, inclusive em ambientes como Windows e Linux."
- **Visual:** um editor com um trecho SwiftUI mínimo (`struct ContentView: View { … Text("Olá") }`) e, ao lado, o iPhone **renderizando o resultado** ao vivo. Chips Swift / SwiftUI / Windows / Linux (logos reais de Windows e Linux).
- **Movimento:** o código é digitado entre 25,7 e 29,5. Quando `Text("Olá")` termina, o "Olá" aparece na tela do iPhone (*hot reload* visual). Os chips caem: Swift em 28,35, SwiftUI em 28,95, Windows em 31,75 e Linux em 32,45.
- **Transição:** corte seco com *flash* de 2 quadros na virada "aqui fica interessante".
- **Som:** digitação; pop em cada chip.
- **Por quê:** mostrar o código virando interface no iPhone prova o conceito "desenvolver para iOS" sem precisar de prints de terceiros.
- **Prompt técnico:** `code panel type 25.7→29.5; #iphone screen text "Olá" fade em fim da digitação; chips inn pop em at("Swift")-.08, at("Swift",2)-.08, at("Windows")-.08, at("Linux.")-.08`

### B6 — 33,60–44,70 · Pedir ao Claude Code
- **Fala:** "E é aqui que a coisa fica interessante. Imagine pedir ao Claude Code para desenvolver um aplicativo, criar as telas, organizar os componentes e escrever toda a estrutura do projeto."
- **Visual:** um terminal do Claude Code com o pedido em linguagem natural sendo digitado. Ao lado, o iPhone **se montando**: telas em *wireframe* → componentes → árvore de arquivos.
- **Movimento:** o pedido é digitado entre 36,1 e 38,9. Em 40,25 ("telas") 3 telas deslizam em leque dentro/atrás do iPhone. Em 41,55 ("componentes") botões e cards "encaixam" na tela com *snap*. Em 43,55 ("estrutura") a árvore `App/ Views/ Models/` cresce ao lado.
- **Transição:** a árvore de arquivos colapsa num ícone de pacote, que vira o primeiro passo da próxima cena.
- **Som:** digitação; "snap" curto nos componentes.
- **Por quê:** a fala descreve 4 entregas. Cada uma ganha um estado visual do mesmo iPhone, então o espectador **vê o app nascendo**.
- **Prompt técnico:** `terminal Claude Code; type prompt; #screens fan rotation/stagger em at("telas,")-.08; #comps snap scale .6→1 back em at("componentes")-.08; tree draw lines em at("estrutura")-.08`

### B7 — 44,80–55,00 · Compilar, instalar, requisitos
- **Fala:** "Com o xtool, você consegue levar esse desenvolvimento adiante, incluindo etapas de compilação e instalação em dispositivos compatíveis, respeitando os requisitos da Apple."
- **Visual:** um *pipeline* horizontal com 3 nós, usando **subcomandos reais do README**: `xtool dev` (build & run) → assinatura → `xtool install`. Uma barra de progresso enche. No iPhone surge o ícone do app instalado, com um badge "requisitos da Apple ✓" e a observação "conta Apple / dispositivo compatível".
- **Movimento:** os nós acendem em 49,65 ("compilação") e 50,55 ("instalação"). O ícone do app cai na *home* do iPhone com quique em 51,4. O badge entra em 53,8.
- **Transição:** *push* vertical.
- **Som:** "plim" quando o app instala.
- **Por quê:** é a parte mais concreta e real da ferramenta. Os subcomandos vêm do README (`dev`, `install`, `devices`), sem inventar.
- **Prompt técnico:** `pipeline nodes text mono "xtool dev" / "assinar" / "xtool install"; fill bar 48.6→51.2; #appicon drop em at("instalação")+.2; inn badge em at("requisitos")-.08`

### B8 — 55,10–61,20 · Flexível e nativo
- **Fala:** "Ou seja, estamos falando de uma maneira muito mais flexível de criar aplicativos nativos para iPhone."
- **Visual:** o iPhone gira levemente em 3D (rotationY −18→18). Atrás dele, a palavra "FLEXÍVEL" em escala grande e um carimbo "nativo".
- **Movimento:** a palavra entra em 57,85 ("flexível"); o carimbo, em 59,75 ("nativos").
- **Prompt técnico:** `#iphone rotationY yoyo; kw slam em at("flexível")-.08; stamp em at("nativos")-.08`

### B9 — 61,30–65,40 · Grátis no GitHub
- **Fala:** "E o melhor, o projeto está disponível gratuitamente no GitHub."
- **Visual:** um selo GitHub e o carimbo "GRÁTIS" batendo no card do repositório (retorno do B3).
- **Som:** impacto em "gratuitamente".
- **Prompt técnico:** `callback do ghCard; stamp slam em at("gratuitamente")-.08`

### B10 — 65,50–80,60 · Para quem é + linguagem natural
- **Fala:** "Para quem trabalha com inteligência artificial, programação ou criação de aplicativos, essa combinação abre possibilidades muito interessantes, principalmente porque você consegue acelerar boa parte do desenvolvimento utilizando comandos em linguagem natural."
- **Visual:** primeiro, 3 *personas* (IA / programação / apps) em chips. Depois, a demonstração-chave: uma **frase em português** que se transforma em linhas de código (as letras viram caracteres mono, efeito *morph*).
- **Movimento:** os chips entram em 66,5, 68,0 e 69,5. Em 75,7 ("acelerar") o fundo ganha linhas de velocidade. Em 78,7 ("comandos em linguagem natural") a frase vira código.
- **Transição:** o código se condensa num ponto que abre o CTA.
- **Por quê:** "linguagem natural → código" é o argumento final de valor e precisa ser visto, não só ouvido.
- **Prompt técnico:** `chips stagger em at("inteligência")/at("Programação")/at("aplicativos,"); speedlines opacity em at("acelerar"); text morph (fade-por-caractere fonte Inter→JetBrains) em at("comandos")-.08`

### B11 — 80,70–fim · CTA "APP"
- **Fala:** "Se você quer conhecer o xtool e aprender como utilizá-lo com o Claude Code, comenta app que eu te envio o repositório."
- **Visual:** CTA do kit com a palavra herói "APP" em azul iOS. A caixa de comentário aparece **dentro da tela do iPhone** (fecha o ciclo do objeto contínuo).
- **Som:** impacto em "app".

---

## VÍDEO C · HIGGSFIELD — O REPOSITÓRIO (Mário 17:39 · 0:48 · CTA "HIGGSFIELD")

**Ideia central:** **honestidade como gancho.** A referência promete "clonaram o Higgsfield de graça". A narração corrige isso, e o visual faz dessa correção o clímax, o que gera confiança.

### C1 — 0,00–6,70 · Gancho
- **Fala:** "Provavelmente já viu aqueles vídeos impressionantes criados com inteligência artificial usando o Higgsfield."
- **Visual:** um mosaico de "quadros de filme" abstratos (gradientes cinematográficos, grão e ícones ▶), **sem usar vídeos de terceiros**, com o *wordmark* "Higgsfield" em tipografia.
- **Movimento:** o mosaico já está rolando no quadro 0 (parallax em 3 colunas). Em 2,25 ("impressionantes") os quadros ganham brilho. Em 5,45 ("Higgsfield") o nome entra com *slam*.
- **Transição:** um cadeado cai sobre o mosaico.
- **Prompt técnico:** `mosaic 3 colunas translateY loop; brightness 1→1.3 em at("impressionantes"); kw slam em at("Higgsfield.")-.08`

### C2 — 6,80–12,40 · O problema
- **Fala:** "O problema é que muitos recursos da plataforma exigem uma assinatura paga."
- **Visual:** um *paywall*: o mosaico desfoca e escurece, e no centro aparece um cartão "assinatura paga" com cadeado e cartão de crédito. Não mostro preço, porque a narração não cita.
- **Movimento:** o desfoque cresce entre 8,0 e 9,6; o cadeado *slam* em 10,25 ("assinatura").
- **Som:** "thud" do cadeado.

### C3 — 12,50–17,70 · A descoberta
- **Fala:** "Mas olha o que eu encontrei. Existe um projeto público Higgsfield disponível no GitHub."
- **Visual:** uma lupa varre a tela e revela o card real `higgsfield-ai/higgsfield`.
- **Movimento:** a varredura vai de 12,8 a 13,6. O card abre em 14,4 e o selo GitHub entra em 17,65.
- **Transição:** zoom para dentro do card.
- **Som:** "scan" na varredura.

### C4 — 18,50–27,90 · O que ele realmente é
- **Fala:** "E o mais interessante é que ele trabalha com uma parte muito importante do universo da inteligência artificial. A infraestrutura para executar e treinos."
- **Visual:** uma grade de **nós de GPU** que acendem em cascata, ligados por linhas, com o título "infraestrutura". Na base, a frase real do README em mono: *"GPU orchestration · training models with billions to trillions of parameters"* e `pip install higgsfield`.
- **Movimento:** a grade acende a partir de 24,95 ("infraestrutura"). Em 25,95 ("executar") um pulso percorre as linhas. Em 26,85 ("treinos") aparece um gráfico de *loss* descendo (genérico, sem eixos numéricos).
- **Por quê:** traduz "infraestrutura de treino" em algo visual e verdadeiro.
- **Prompt técnico:** `grid 6x4 .node glow stagger .03 em at("infraestrutura")-.08; dash pulse ao longo de paths em at("executar"); draw curva em at("treinos.")`

### C5 — 28,20–35,90 · O detalhe (clímax)
- **Fala:** "Só que existe um detalhe que você precisa entender. Esse repositório não é o mesmo gerador de vídeos da plataforma comercial."
- **Visual:** tela dividida. À esquerda, "Plataforma comercial → gerador de vídeos" (o mosaico do C1). À direita, "Repositório → infraestrutura de treino" (a grade do C4). Um **≠** enorme em âmbar no centro, mais um adesivo "⚠ detalhe importante".
- **Movimento:** o adesivo entra em 29,05 ("detalhe"). O **≠** aparece em 32,55 ("não é") com *slam* e um tremor curto.
- **Transição:** o lado direito se expande e ocupa a tela.
- **Som:** impacto no ≠.
- **Por quê:** é o momento de confiança do vídeo. Mostrar a diferença explicitamente evita a promessa falsa que a referência faz.

### C6 — 36,20–42,20 · Ainda assim vale
- **Fala:** "Ainda assim, é um projeto interessante para quem gosta de explorar tecnologias abertas de inteligência artificial."
- **Visual:** um cubo "open source" que se abre em ramificações (*branches* de git) desenhadas.
- **Movimento:** as ramificações são desenhadas em 39,2 ("explorar"); um selo "aberto" entra em 40,35.

### C7 — 42,30–fim · CTA "HIGGSFIELD"
- **Visual:** CTA com a palavra herói em lima.

---

## VÍDEO D · PS5 NO PC — AnyPS5 (Lendário 18:00 · 0:59 · CTA "PS5")

**Ideia central:** empolgação controlada. O visual cria o desejo ("GTA VI no PC?!") e depois **trava a promessa** com um "ainda não" bem visível.

### D1 — 0,00–4,90 · Gancho
- **Fala:** "Imagina conseguir rodar jogos de PlayStation 5 diretamente no computador!"
- **Visual:** um controle genérico (sem marca) "voa" para dentro de um monitor de PC, com o título "PS5 → PC".
- **Movimento:** o título já está no quadro 0. Em 1,80 ("PlayStation") o controle surge girando. Em 3,85 ("computador") ele entra no monitor, que acende.
- **Som:** whoosh + "power on".

### D2 — 5,00–9,60 · GTA VI
- **Fala:** "E agora imagine o que isso poderia significar para um jogo como GTA VI."
- **Visual:** "GTA VI" em tipografia própria (gradiente pôr do sol neon rosa→laranja, **sem arte oficial**), com um "?" grande.
- **Movimento:** em 8,2 ("GTA") as letras sobem uma a uma; o "VI" entra com *slam* em 8,85.
- **Som:** impacto em "VI".

### D3 — 9,70–14,50 · Parece impossível
- **Fala:** "Parece impossível, mas apareceu um projeto no GitHub que está chamando a atenção."
- **Visual:** um carimbo "IMPOSSÍVEL" que **racha**; pela rachadura sai o selo GitHub.
- **Movimento:** o carimbo bate em 10,15; a rachadura se desenha em 11,0 ("mas"); o GitHub entra em 12,2.

### D4 — 14,60–17,20 · Nome
- **Fala:** "O nome dele é AnyPS5." (a voz diz "NPS 5")
- **Visual:** o card real `boykopovar/AnyPS5` com a descrição real: *"Tool for automatic executables porting to Linux and Windows."*
- **Movimento:** o nome é digitado em 15,6.

### D5 — 17,30–24,50 · Camada de compatibilidade
- **Fala:** "A proposta é desenvolver uma camada de compatibilidade capaz de lidar com instruções gráficas utilizadas pelo PlayStation."
- **Visual:** um diagrama em 3 camadas empilhadas. Em cima, "Jogo de console"; no meio, "**camada de compatibilidade**", que brilha; embaixo, "GPU do PC". Entre as camadas descem "instruções gráficas" como fluxo de partículas que **mudam de cor** ao atravessar o meio (tradução).
- **Movimento:** a camada do meio é inserida em 18,85 ("camada"); as partículas começam em 21,45 ("instruções").
- **Por quê:** explica visualmente o que é o projeto de verdade (o README fala em *relinker* e bibliotecas nativas, "no emulation") sem jargão.

### D6 — 24,60–29,10 · Windows e Linux
- **Fala:** "E o mais interessante é que o projeto mira sistemas como Windows e Linux."
- **Visual:** logos reais do Windows e do Linux (Tux) com uma mira/retícula que trava em cada um.
- **Movimento:** a retícula trava em 27,75 e 28,35.
- **Som:** "lock-on" em cada trava.

### D7 — 29,20–37,00 · Barreiras
- **Fala:** "Basicamente, a ideia é reduzir algumas das barreiras técnicas que impedem determinados jogos de console de funcionar em outras plataformas."
- **Visual:** um muro de blocos entre "console" e "PC". Os blocos caem um a um.
- **Movimento:** a queda começa em 30,7 ("reduzir") e segue em *stagger*, mas **alguns blocos ficam** (a fala diz "algumas" barreiras).
- **Por quê:** a precisão do verbo "reduzir" (e não "eliminar") aparece na imagem.

### D8 — 37,10–48,90 · Mas atenção (trava da promessa)
- **Fala:** "Mas atenção! Isso ainda não significa que GTA VI esteja rodando no PC por meio dessa ferramenta. Estamos falando de uma proposta experimental que precisa demonstrar seus resultados na prática."
- **Visual:** o fundo vira vermelho-escuro (fundo alternativo). O título "GTA VI no PC?" volta e leva um carimbo "AINDA NÃO". Depois entra um selo "experimental" com um frasco de laboratório.
- **Movimento:** o *flash* e a virada de fundo acontecem em 37,1. O carimbo bate em 38,9 ("não"). O selo entra em 45,2 ("experimental").
- **Som:** alerta curto em "atenção"; carimbo.
- **Por quê:** credibilidade, já que a referência diz "GTA 6 vai chegar pro PC". A narração corrige, e o visual reforça.

### D9 — 49,00–55,50 · Para quem gosta
- **Fala:** "Se você gosta de tecnologia, programação e projetos que desafiam os limites do hardware, vale a pena conhecer."
- **Visual:** 3 chips e um chip de processador com o medidor no limite.

### D10 — 55,60–fim · CTA "PS5"

---

## VÍDEO E · INSTINCT — O MODELO DE NEGÓCIO (Mário 18:05 · 2:02 · CTA "comenta sua opinião")

**Ideia central:** estética **editorial financeira** (tipo infográfico de revista de negócios). É o vídeo mais longo, e o fio condutor é **um único balão de conversa** que vira reserva, vira transação e vira receita.

> Observação: em 45,5–45,9 a narração tem uma gagueira ("não é a É apenas"). Não corto o áudio (regra), mas a legenda mostra a frase limpa: "não é apenas a tecnologia".

### E1 — 0,00–7,70 · Gancho
- **Fala:** "Uma startup de agentes de IA chamou a atenção do mercado com uma avaliação de 10 bilhões de dólares."
- **Visual:** o número herói **US$ 10 bilhões** em roleta, com uma fita de cotação correndo ao fundo.
- **Movimento:** o título "uma startup de agentes" aparece no quadro 0. A roleta gira de 4,6 ("avaliação") até travar em "10" em 5,5, e "bilhões" bate em 6,1.
- **Som:** "tick" da roleta + impacto no travamento.

### E2 — 7,80–17,70 · Algo que você usa todo dia
- **Fala:** "E o mais curioso é que a proposta do negócio gira em torno de algo que você provavelmente utiliza todos os dias — um assistente pessoal de inteligência artificial."
- **Visual:** um celular com uma interface de chat limpa e o rótulo "assistente pessoal".
- **Movimento:** o celular sobe em 11,3 ("algo"); o balão "Oi! Como posso ajudar?" digita em 14,9.

### E3 — 17,80–25,90 · Instinct
- **Fala:** "A empresa se chama Instinct, e a ideia é transformar uma conversa simples em uma experiência capaz. Capaz de executar tarefas para o usuário."
- **Visual:** o *wordmark* "Instinct" em tipografia editorial (sem logo oficial). O balão de conversa **se transforma** num botão de ação "executar ▶".
- **Movimento:** "Instinct" entra letra a letra em 18,9. O *morph* balão → botão acontece em 24,0 ("executar").

### E4 — 26,00–32,70 · Três tarefas
- **Fala:** "...reservar um restaurante, marcar um compromisso ou pedir um carro para chegar a determinado lugar."
- **Visual:** 3 cards de tarefa com ícones (talheres, calendário, carro), sem marcas de apps.
- **Movimento:** os cards entram em 27,2, 28,6 e 30,1, empilhando.

### E5 — 32,80–37,60 · Vários apps → uma mensagem
- **Fala:** "Em vez de abrir vários aplicativos, você simplesmente manda uma mensagem para o assistente."
- **Visual:** uma grade de 9 ícones de app genéricos que **colapsa** num único balão.
- **Movimento:** a grade aparece em 33,4; o colapso em 36,1 ("manda").
- **Som:** whoosh de sucção.

### E6 — 38,30–43,50 · A IA executa
- **Fala:** "A inteligência artificial entende o que você precisa e ajuda a executar aquela tarefa."
- **Visual:** um chat de exemplo, marcado como "exemplo": o usuário escreve "Mesa para 2 hoje às 20h?" e o agente responde "Reservado ✓".
- **Movimento:** "digitando…" aparece em 39,8 ("entende"); a resposta com ✓, em 42,0.
- **Som:** "plim" no ✓.

### E7 — 43,60–49,90 · A virada
- **Fala:** "Mas a parte mais interessante não é apenas a tecnologia, é o modelo de negócio por trás dela."
- **Visual:** **o fundo vira escuro** (fundo alternativo) e entra o título "O MODELO DE NEGÓCIO".
- **Movimento:** "tecnologia" aparece e fica a 45% de opacidade; em 47,7 ("modelo") o título bate.
- **Som:** whoosh grave + impacto.

### E8 — 50,00–58,60 · Assinatura × transação
- **Fala:** "...não precisa depender exclusivamente de assinaturas mensais. Ela também pode ganhar dinheiro intermediando transações."
- **Visual:** um card "assinatura mensal" recebe um risco. Ao lado, um fluxo usuário → [Instinct] → empresa, com uma moeda atravessando.
- **Movimento:** o risco acontece em 53,7 ("assinaturas"); a moeda viaja em 56,9 ("intermediando").

### E9 — 58,70–69,60 · A comissão
- **Fala:** "Por exemplo, quando alguém solicita um serviço, realiza uma reserva ou faz uma compra utilizando o assistente, existe a possibilidade de gerar uma comissão sobre aquela operação."
- **Visual:** um **recibo** que imprime 3 linhas (serviço / reserva / compra) e uma barra de valor em que uma fatia destacada leva o rótulo "comissão". **Sem porcentagem**, porque a fala não cita.
- **Movimento:** o recibo imprime em 60,0, 62,0 e 63,2. A fatia se destaca em 67,2 ("comissão").
- **Som:** impressora curta.

### E10 — 69,70–81,50 · Escala
- **Fala:** "Pensa na escala disso. Milhares de pessoas utilizando um assistente diariamente realizando diferentes tipos de transações. Cada operação representa uma oportunidade de receita."
- **Visual:** uma constelação de pontos (pessoas) que pulsam com transações. A cada pulso, uma moeda minúscula corre até o centro.
- **Movimento:** os pontos se multiplicam em 71,6 ("Milhares"); o fluxo de moedas, em 77,0. A palavra "receita" acende em 80,9.
- **Por quê:** "escala" é o argumento do *valuation*. A constelação mostra volume sem inventar números.

### E11 — 81,60–92,40 · Zero curva de aprendizado
- **Fala:** "O usuário não precisa aprender a utilizar uma plataforma completamente nova. Ele simplesmente conversa com uma inteligência artificial."
- **Visual:** um painel complexo cheio de menus, com um risco, contra o balão de chat simples com ✓.
- **Movimento:** o risco no painel em 85,0 ("não precisa"); o balão com ✓ em 90,0 ("conversa").

### E12 — 92,50–98,50 · Para as empresas
- **Fala:** "Para as empresas, também pode representar uma maneira de adquirir clientes e facilitar vendas."
- **Visual:** um funil: chat → empresa, com os rótulos "aquisição" (95,8) e "vendas" (97,8).

### E13 — 98,60–115,70 · Agente ≠ chatbot
- **Fala:** "No final, a grande oportunidade não está apenas em criar mais um chatbot. Está em construir agentes capazes de resolver problemas reais e participar de transações comerciais. E é por isso que esse mercado de agentes de IA está despertando tanto interesse."
- **Visual:** "chatbot" recebe um risco e é substituído por "AGENTE", com 3 setas de ação. Depois entra uma curva de interesse subindo (sem eixos numéricos).
- **Movimento:** o risco em 102,5; "AGENTE" bate em 104,6; a curva é desenhada a partir de 113,9 ("despertando").

### E14 — 115,80–fim · CTA de opinião
- **Fala:** "Agora me conta! Você utilizaria um assistente de IA para resolver suas tarefas do dia a dia?"
- **Visual:** um cartão de enquete "SIM / NÃO" e a caixa de comentário (sem palavra-chave: a narração pede a opinião).

---

## VÍDEO F · CLAUDE NO WHATSAPP — KAPSO (Lendário 18:12 · 0:57 · CTA "WHATSAPP")

**Ideia central:** um tutorial em **3 passos numerados** (como a referência, mas com identidade própria) e uma **conversa real de agendamento** como prova do resultado.

### F1 — 0,00–6,90 · Gancho
- **Fala:** "Você sabia que consegue conectar o Claude diretamente ao WhatsApp para criar seu próprio agente de inteligência artificial?"
- **Visual:** o tile do Claude (logo real) ligado por uma linha tracejada a um balão verde (WhatsApp genérico, a menos que você autorize o logo). Título: "o Claude no seu WhatsApp".
- **Movimento:** o título aparece no quadro 0. A linha é desenhada em 1,4 ("conectar") e o balão verde *pop* em 3,3 ("WhatsApp"). Em 5,0 ("agente") o balão ganha um rostinho/indicador "online".

### F2 — 7,00–11,70 · Sem integração do zero
- **Fala:** "...você não precisa desenvolver toda a integração do zero."
- **Visual:** uma pilha de blocos de código (webhook, autenticação, envio) que recebe um risco e fica a 45%.
- **Movimento:** o risco em 11,2 ("zero").

### F3 — 11,80–17,40 · Kapso
- **Fala:** "Existe uma ferramenta chamada Kapso, que facilita a conexão com a API oficial do WhatsApp."
- **Visual:** o *wordmark* "Kapso" em tipografia como **ponte** entre Claude e WhatsApp, com o selo "API oficial ✓".
- **Movimento:** a ponte "constrói" (o *path* é desenhado) em 13,3; o selo entra em 15,5 ("API").

### F4 — 17,50–22,80 · Passo 1
- **Fala:** "O processo funciona assim. Primeiro, você cria sua conta e conecta um número de WhatsApp."
- **Visual:** o número "1" grande e um card "Números conectados", com o número **mascarado** (`+55 •• ••••-••••`) e o status "Conectado ✓".
- **Movimento:** o "1" bate em 19,2; o status vira ✓ em 22,2.
- **Som:** clique + "plim".

### F5 — 22,90–26,60 · Passo 2
- **Fala:** "Depois, adiciona as habilidades necessárias ao Claude Code."
- **Visual:** o número "2" e um terminal do Claude Code com a linha "habilidades do WhatsApp carregadas ✓" (genérica, sem comando inventado).
- **Movimento:** "2" em 22,9; a linha digita em 24,3.

### F6 — 26,70–37,90 · Passo 3 — descreva
- **Fala:** "E agora vem a melhor parte. Você simplesmente descreve o que quer construir. Pode ser um agente de atendimento, um assistente que responde perguntas ou uma automação que organiza agendamentos."
- **Visual:** o número "3" e o pedido sendo digitado. Depois, 3 cards de tipo de agente (atendimento / perguntas / agendamentos).
- **Movimento:** "3" em 26,7; a digitação em 29,8 ("descreve"); os cards em 32,7, 34,3 e 37,2.

### F7 — 38,10–43,90 · O Claude Code monta tudo
- **Fala:** "O Claude Code ajuda a criar a estrutura da aplicação e os fluxos necessários para conectar. Tudo."
- **Visual:** uma árvore de arquivos crescendo; em seguida, uma **conversa de exemplo** no WhatsApp (marcada "exemplo"): "Tem horário sexta?" → o agente oferece horários → "Confirmado ✓".
- **Movimento:** a árvore cresce em 40,0; o chat aparece a partir de 41,5. Em 43,8 ("Tudo") um *zoom punch*.
- **Por quê:** fecha o tutorial mostrando o resultado (o agente agendando), que é o desejo real do público.

### F8 — 44,20–52,50 · Regras oficiais
- **Fala:** "Mas é importante respeitar as regras oficiais do WhatsApp, incluindo o consentimento dos contatos e a janela de atendimento de 24 horas."
- **Visual:** um card "Regras". O item 1 é "consentimento (opt-in)" com ✓. O item 2 é um **relógio de 24 h** cujo ponteiro dá a volta.
- **Movimento:** o card entra em 44,8 ("importante"); o ✓ do opt-in em 48,3; o relógio gira de 50,1 a 52,0 e o "24" aparece em 51,4 (número falado = número na tela).
- **Som:** "tick" do relógio.
- **Por quê:** credibilidade e cuidado com políticas, alinhados à fala.

### F9 — 52,60–fim · CTA "WHATSAPP"

---

## VÍDEO G · WA-AKG (Lucas 18:20 · 0:51 · CTA "API")

**Ideia central:** um **painel/dashboard vivo** em tons de verde. O vídeo inteiro acontece "dentro" de uma interface que vai ligando módulos.

> Não mostro "disparo em massa" nem "anti-banimento", que aparecem na referência e no README, porque a narração não fala disso e é um uso que pode violar as regras do WhatsApp.

### G1 — 0,00–6,50 · Gancho
- **Fala:** "Se você trabalha com automações e precisa conectar o WhatsApp aos seus sistemas, presta atenção nessa ferramenta."
- **Visual:** nós de sistemas (CRM, banco de dados, site), com ícones genéricos, ligados entre si, e um **elo faltando** até o balão verde. No fim, um pulso "atenção".
- **Movimento:** os nós já estão no quadro 0. O elo pisca vazio em 2,1 ("conectar"). Em 4,6 ("presta atenção") a tela dá um *zoom punch* no elo.
- **Som:** alerta curto.

### G2 — 6,60–11,80 · O projeto
- **Fala:** "Encontrei um projeto gratuito e de código aberto no GitHub chamado WA-AKG."
- **Visual:** o card real `mrifqidaffaaditya/WA-AKG` com o título real: *"The Ultimate WhatsApp Gateway & Dashboard"*, e os chips "grátis" e "open source".
- **Movimento:** os chips entram em 7,7 e 8,4; o nome é digitado em 10,3.

### G3 — 11,90–18,80 · Como funciona
- **Fala:** "Basicamente, ele oferece uma estrutura para conectar e gerenciar sessões do WhatsApp utilizando uma API e um painel de controle."
- **Visual:** o **diagrama real "How it Works" do README** recriado: User/App → WA-AKG Gateway → WhatsApp Server, com o banco (Prisma/DB).
- **Movimento:** as setas são desenhadas na ordem da fala: "conectar" (14,1), "API" (17,1), "painel" (17,8).

### G4 — 18,90–24,00 · O painel
- **Fala:** "Você consegue administrar conexões, trabalhar com mensagens e integrar diferentes funcionalidades."
- **Visual:** um dashboard com 3 *tiles* que acendem: "Conexões" (sessões com status), "Mensagens" (lista entrando) e "Integrações" (plugues).
- **Movimento:** os tiles acendem em 20,1, 21,4 e 22,2.

### G5 — 24,10–34,90 · n8n
- **Fala:** "E uma das partes mais interessantes é o suporte à integração com o n8n. Isso abre possibilidades para criar fluxos automáticos de atendimento, organizar processos e conectar o WhatsApp a outras ferramentas."
- **Visual:** um *canvas* de *workflow* estilo n8n (nós retangulares + conexões curvas): gatilho "WA-AKG Trigger" → "Atendimento" → "Planilha/CRM". O nome "n8n" vem em tipografia na cor oficial #EA4B71 (do *badge* real do README: "n8n-nodes-wa-akg").
- **Movimento:** "n8n" bate em 27,5. Os nós e conexões são desenhados entre 29,8 e 34,8, um por item falado ("atendimento" 31,3, "processos" 32,6, "outras ferramentas" 34,8).
- **Por quê:** a integração com n8n é o maior diferencial para o público de automação.

### G6 — 35,60–40,70 · Mídias, figurinhas, sessões
- **Fala:** "O projeto também apresenta recursos relacionados a mídias, figurinhas e gerenciamento de sessões."
- **Visual:** 3 cards com ícones (imagem, figurinha sorrindo, sessões).
- **Movimento:** os cards entram em 38,0, 38,5 e 39,2.

### G7 — 40,80–46,30 · Código aberto, adaptável
- **Fala:** "E como o código é aberto, você pode estudar a estrutura e adaptar a solução às necessidades do seu projeto."
- **Visual:** a árvore real de pastas do repositório, que se abre; uma ramificação (*fork*) sai para "seu projeto".
- **Movimento:** a árvore se abre em 42,5 ("estudar"); o *fork* aparece em 43,6 ("adaptar").

### G8 — 46,40–fim · CTA "API"

---

## 3. O que já tenho de material real

| Vídeo | Ativos reais disponíveis |
|---|---|
| A | README e nome do repositório Open-Higgsfield-AI, seção "Try it Online", URL hospedada |
| B | README do xtool (descrição, subcomandos `setup/auth/dev/install/devices`), **screenshot real `Cover.png`** do repositório, logos Linux/Windows, logo Claude |
| C | README do higgsfield (descrição, `pip install higgsfield`, diagrama de arquitetura) |
| D | README do AnyPS5 (descrição, "no emulation"), logos Linux/Windows |
| E | — (só tipografia e interface ilustrativa) |
| F | logo Claude; **faltam** logo Kapso e logo WhatsApp (pendente da sua autorização/arquivo) |
| G | README do WA-AKG (título, diagrama, integração n8n), estrutura de pastas real |

## 4. Próximo passo

Se aprovar (pode ajustar qualquer cena ou responder só os 4 pontos da seção 1), eu implemento os 7 vídeos com o mesmo rigor do lote anterior: sincronia com a voz verificada, legendas corrigidas, capa, descrição, versão final **sem metadados** e, se você quiser, as versões com e sem música.
