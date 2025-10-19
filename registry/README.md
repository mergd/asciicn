# registry

component source files for shadcn cli compatibility

## structure

all components live in `registry/ascii/` - this is the single source of truth

```
registry/
  ascii/
    input.tsx
    badge.tsx
    button.tsx
    menu.tsx
  README.md
registry.json         # shadcn registry manifest
```

## usage in project

```tsx
import Input from "@/registry/ascii/input";
import Badge from "@/registry/ascii/badge";
```

## adding new components

1. create component in `registry/ascii/[name].tsx`
2. add entry to `registry.json`
3. update imports if needed

## distribution

users install via:

```bash
npx shadcn@latest add https://asciicn.fldr.zip/r/[component].json
```
