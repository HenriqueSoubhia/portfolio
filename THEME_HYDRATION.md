# Estratégia de Hidratação do Tema Dinâmico (FOUC Prevention)

## O Problema do "Flash of Unstyled Content" (FOUC)
O projeto atualiza seu tema (cor de fundo) com base no horário exato do usuário conectado. 

Como o **Next.js** utiliza Server-Side Rendering (SSR), a renderização inicial do HTML ocorre no servidor, o qual não tem como inferir o fuso horário ou o momento exato do acesso do browser cliente previamente. 

Se dependêssemos exclusivamente do ecossistema do React (utilizando hooks como `useEffect`) para injetar esse estilo no corpo da página, teríamos o seguinte cenário inevitável:
1. O servidor entregaria uma página com o estilo de fundo padrão inserido no CSS (`fallback`).
2. O navegador montaria rapidamente a tela pela primeira vez exibindo o fundo padrão (ex: amarelo).
3. Uma fração de segundo depois, o React "ligaria" (processo de hidratação), determinaria que na verdade é noite, e substituiria a cor imediatamente para azul.
4. O usuário sofreria o temível **"Crash de tela" visual** (o piscar ou FOUC) prejudicando a fluidez e sentimento premium da landing page.

## A Solução: Script Síncrono Bloqueante (Inline)
Para atingir o padrão ouro da Web (e espelhar o comportamento de bibliotecas consolidadas como `next-themes`), adotamos a técnica de colocar um `<script>` bloqueante e puramente focado debaixo da raiz `<head>` do arquivo `app/layout.tsx`.

### Arquitetura da solução:
- O navegador processa e "monta" o documento HTML de cima para baixo.
- Quando ele vê a declaração do nosso script inline, suspende a leitura do resto do documento por alguns milissegundos para rodar a lógica Javascript síncrona bruta.
- O código lê a hora diretamente da API nativa do `Date` e injeta `document.documentElement.style.setProperty('--bg-color', ...)`.
- Somente após estabelecer a variável nativa exata do horário local, o navegador prossegue lendo a tag `<body>` para realmente "pintar" o fundo da tela. Assim, a exibição de FOUC cai para 0%.

### A Dupla Verificação
No mesmo fluxo, usamos o Client Component (`ThemeProvider`) para assumir as rédeas pós-hidratação. O Provider, montado no React, garante que as rotas se liguem à API do relógio e ativa um `setInterval` que checa a hora nativa a cada 1 minuto. Isso reativa a cor dinamicamente se a aba ficar inativa ou a hora virar dentro da aplicação, resultando em re-renderizações harmoniosas pelas animações de transição de CSS.
