# asciicn

ascii-styled ui components for next.js

## structure

```
registry/ascii/       # source components (single source of truth)
components/layout/    # layout components
app/                  # next.js app
```

## requirements

- **meslo nerd font** - provides 3000+ glyphs for terminal-native icons
- next.js 15+
- tailwind css v4

## usage

components are in `registry/ascii/` and imported via `@/registry/ascii/`:

```tsx
import Input from "@/registry/ascii/input";
import Badge from "@/registry/ascii/badge";
import Button from "@/registry/ascii/button";
```

all components use nerd font glyphs for icons - browse available glyphs at [nerd fonts cheat sheet](https://www.nerdfonts.com/cheat-sheet)

## installation

### via shadcn cli

```bash
npx shadcn@latest add https://asciicn.fldr.zip/r/input.json
```

### manual

1. download meslo nerd font to `public/fonts/`
2. configure tailwind with meslo font family
3. copy components from `registry/ascii/` to your project

## development

```bash
bun install
bun dev
```

## components

- input - text input with ascii borders
- badge - labels with unicode block patterns
- button - interactive buttons with bracket notation
- radio - radio buttons with nerd font glyphs
- menu - sidebar navigation
- dialog - modal dialogs with ascii frames

## philosophy

this is a tui library - components should look at home in a terminal application

- lowercase text everywhere
- bracket notation: `[x]`, `[ok]`, `[^k]`
- nerd font glyphs for icons (no external icon libraries)
- unicode block characters: ░▒▓█
- keyboard-first navigation
- minimal, functional aesthetic
