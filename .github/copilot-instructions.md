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

## Design Guide — Notebook Doodle Sketch
The UI uses a hand-drawn school notebook aesthetic. All visual work must stay consistent with this theme.

### Palette (`@theme` tokens in `index.css`)
- **Paper**: `--color-paper` (cream `#fdf6e3`), `--color-paper-dark` (darker cream)
- **Ink**: `--color-pencil` (dark gray), `--color-pencil-light` (mid gray), `--color-pen-blue` / `--color-pen-blue-dark`
- **Highlighters**: `--color-highlight-yellow`, `--color-highlight-pink`, `--color-highlight-green` / `-dark`
- **Notebook lines**: `--color-ruled-line` (blue), `--color-margin-line` (red)
- **Accents**: `--color-tape` (sticky note yellow), `--color-eraser` (soft pink)

### Fonts
- Body: `font-hand` → "Patrick Hand" (Google Fonts)
- Headings: `font-heading` → "Shadows Into Light Two" (Google Fonts)

### CSS Utilities (defined in `index.css`)
- `.sketch-border` / `.sketch-border-thin` / `.sketch-border-blue` — wobbly hand-drawn borders via irregular `border-radius`
- `.highlighter-yellow` / `.highlighter-pink` / `.highlighter-green` — gradient-based highlighter wash
- `.sticky-note` + `.tape` — yellow sticky note with tape strip pseudo-element
- `.torn-paper` — torn top edge via `clip-path` (used on modals)
- `.scribble-circle` — hand-drawn ring `::after` pseudo-element (used on marked bingo squares)
- `.wavy-underline` — wavy text underline in pen-blue
- `.doodle-star` — rotating star decoration via `::before`

### Animations (`@keyframes` in `index.css`)
- `sketch-in` — fade + scale + slight rotation entrance
- `wobble` — gentle left-right rotation (hover effect)
- `doodle-pop` — bouncy scale entrance (modal)
- `wiggle` — continuous subtle rotation (decorative elements)

### Rules
- Never use solid white (`#fff`) or system gray backgrounds — use `paper` / `paper-dark` tokens.
- No rounded corners via `rounded-*` — use `sketch-border` variants for the hand-drawn look.
- Marked/interactive states use highlighter washes, not solid fills.
- Decorative text (stars, arrows, doodles) uses pen-blue at low opacity.
- Keep the left `pl-14`/`pl-16` padding on screens to clear the red margin line.
