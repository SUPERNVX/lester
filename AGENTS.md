# AGENTS.md

Single-page marketing site. Vite 8 + React 19 + TypeScript + Tailwind CSS v4. No backend, no router lib, no tests, no CI.

## Commands

- `npm run dev` — dev server (Vite).
- `npm run build` — `tsc -b && vite build`. This is the typecheck; there is no separate typecheck script.
- `npm run lint` — `oxlint`. Config: `.oxlintrc.json`. No ESLint/Prettier.
- `npm run preview` — serve `dist/`.

No test runner is installed. Verify with `build` + `lint`.

## Structure

- `src/main.tsx` — entry; fonts (`@fontsource-variable/*`, `@fontsource/jetbrains-mono`) and `./index.css` imported here.
- `src/App.tsx` — hash router (no react-router). Routes: `#/`, `#/advisory`, `#/complex-systems`, `#/deep-tech`, `#/alpha-finder`, `#/missions`. New pages must be wired there with `Navbar active` + `Footer` and scroll-to-top on `hashchange`.
- `src/pages/` — one file per route (`Advisory`, `ComplexSystems`, `DeepTech`, `AlphaFinder`, `MissionsPage`).
- `src/components/home/` — home sections (`Proof`, `Problems`, `Services`, `Trajectory`, `Missions`, `Closing`). Shared chrome: `Navbar`, `Footer`, `HomeHero`, `HydrogenPreloader`.
- `src/assets/` — images (`.webp`) imported directly into components. `src/assets/vite.svg`, `react.svg` are template leftovers.
- `dist/` is build output — never edit.

## TypeScript strictness (`tsconfig.app.json`)

Fails build on: unused locals/params (`noUnusedLocals`, `noUnusedParameters`), wrong type-only imports (`verbatimModuleSyntax` — use `import type`), and non-erasable syntax (`erasableSyntaxOnly` — no enums, namespaces, or parameter properties). Target ES2023, `moduleDetection: force`.

## Styling — Tailwind v4, dark-only

- No `tailwind.config.js`. Tokens live in `@theme` in `src/index.css`: `void/obsidian/coal/carbon`, `gold-*` (primary accent `#d4af37`), `mist-100/300/500/700` (text), `success/warning/danger/info`.
- Reuse classes from `index.css`: `eyebrow`, `headline`, `subhead`, `card-soft`, `font-display`, `font-accent`, `font-mono2`, `dither-*`, `gold-glow`, `img-apple`. Keep `overflow-x-hidden` behavior on body.
- Fonts: `font-display` = Fraunces Variable, body = Inter Tight Variable, labels = JetBrains Mono (`font-mono2`).

## Animation / motion conventions

- Import from `motion/react` (package `motion`), never `framer-motion`.
- Gate animation on `useReducedMotion()` — `index.css` already kills marquee/dither/tegaki animation under `prefers-reduced-motion`; match that in new components.
- React Compiler is on via Babel (`vite.config.ts` — `reactCompilerPreset`). Don't add manual `memo`/`useMemo` just for re-renders.
- Handwriting effect: `tegaki/react` (`TegakiRenderer`, `tegaki/fonts/caveat`) — see `HomeHero.tsx`.
- Heavy one-offs: `three` (preloader), `mathjs/number` (`GradualBlur`), `lucide-react` icons.
