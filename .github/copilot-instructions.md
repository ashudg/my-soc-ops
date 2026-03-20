# My SOC Ops — Workspace Instructions

## Pre-commit Checklist (mandatory)
- [ ] **Lint** — `npm run lint` passes with zero warnings
- [ ] **Build** — `npm run build` completes without errors
- [ ] **Test** — `npm test` all green

## Stack
React 19 · TypeScript (strict) · Vite 7 · Tailwind CSS v4 (`@theme`, no JS config) · Vitest + RTL · ESLint 9 flat config · localStorage persistence

## Structure
`components/` PascalCase · `hooks/` camelCase · `types/index.ts` all shared types · `utils/` pure functions + colocated `.test.ts` · `data/` static data · `App.tsx` default export, all others named

## Conventions
- `import type` for type-only imports; props named `<Component>Props`.
- Functional components only; named exports (default only for `App.tsx`); `on<EventName>` handlers.
- Game state in `useBingoGame` hook — no external state lib. localStorage with version + schema validation.
- Pure `utils/` functions — immutable, never mutate.
- Tailwind v4 CSS-first: tokens in `@theme` (`index.css`). Read `.github/instructions/tailwind-4.instructions.md` first.
- Tests: `describe`/`it` blocks, Vitest globals, RTL auto-cleanup via `test/setup.ts`.
- Arrow functions for callbacks; named `function` for exports. Minimal comments. No barrel files.
