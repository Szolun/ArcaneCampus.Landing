# Arcane Campus — Landing Page

Landing page de divulgação de **Arcane Campus**, MMORPG 2D free-to-play da Szolun que chega em breve à [Steam](https://store.steampowered.com/app/5399860/Arcane_Campus/).

## Stack

- [Vite](https://vite.dev) + [React 19](https://react.dev) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) com design tokens via `@theme`
- [Lucide](https://lucide.dev) para ícones SVG
- Sem dependências de animação: reveal com `IntersectionObserver` + CSS, respeitando `prefers-reduced-motion`

## Rodando localmente

```bash
npm install
npm run dev
```

| Script              | Descrição                              |
| ------------------- | -------------------------------------- |
| `npm run dev`       | Servidor de desenvolvimento            |
| `npm run build`     | Typecheck + build de produção (`dist`) |
| `npm run preview`   | Serve o build de produção              |
| `npm run typecheck` | Apenas verificação de tipos            |

## Seções

1. **Hero** — arte do campus flutuante, chamada principal e CTA de lista de desejos
2. **O jogo** — key art, descrição e números (grupo de 5, 3 plataformas, 2 idiomas, gratuito)
3. **Destaques** — academias, professores & alunos, grupos, eventos, PvP, guildas
4. **Eventos** — timeline diário → anual
5. **Plataformas** — requisitos mínimos em abas acessíveis (Windows, macOS, Linux), idiomas e recursos Steam
6. **FAQ** — acordeão nativo com `<details>`
7. **CTA final** e rodapé com divulgação de IA da Steam

## Design

| Token         | Valor     | Uso                          |
| ------------- | --------- | ---------------------------- |
| `night`       | `#070A1C` | Fundo                        |
| `surface`     | `#131A3D` | Cards                        |
| `ink`         | `#EEF0FF` | Texto principal              |
| `mist`        | `#AAB1D8` | Texto secundário             |
| `arcane`      | `#8B7BFF` | Primária / estados ativos    |
| `gold`        | `#ECCA80` | CTA e destaques (logo)       |
| `rune`        | `#5EE6F0` | Acento mágico                |

- Tipografia: **Cinzel** (títulos, eco do logo) + **Manrope** (texto)
- Breakpoints mobile-first: 375 / 640 / 768 / 1024 / 1440
- Acessibilidade: skip link, foco visível, alvos de toque ≥ 44px, `aria-*` em menu, abas e idioma, contraste AA

## Internacionalização

Conteúdo em `src/i18n/content.ts` (PT-BR e EN, os mesmos idiomas suportados pelo jogo). O idioma é detectado pelo navegador e pode ser trocado no header; a escolha fica salva no `localStorage`.

## Créditos

Arte e informações do jogo © Szolun, extraídas da página oficial na Steam. Steam é marca registrada da Valve Corporation.
