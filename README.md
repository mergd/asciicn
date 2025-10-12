# asciicn

ascii-styled ui components for next.js

## structure

```
registry/ascii/       # source components (single source of truth)
components/layout/    # layout components
app/                  # next.js app
```

## usage

components are in `registry/ascii/` and imported via `@/registry/ascii/`:

```tsx
import Input from "@/registry/ascii/input";
import Badge from "@/registry/ascii/badge";
import Button from "@/registry/ascii/button";
```

## installation

### via shadcn cli

```bash
npx shadcn@latest add https://asciicn.com/r/input.json
```

### manual

copy components from `registry/ascii/` to your project

## development

```bash
bun install
bun dev
```

## components

- input - text input with ascii borders
- badge - labels with unicode block patterns  
- button - interactive buttons with bracket notation
- menu - sidebar navigation

## philosophy

this is a tui library - components should look at home in a terminal application

- lowercase text everywhere
- bracket notation: `[x]`, `[ok]`, `[^k]`
- unicode block characters: ░▒▓█
- keyboard-first navigation
- minimal, functional aesthetic
