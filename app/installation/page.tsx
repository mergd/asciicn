import DocsLayout from "@/components/layout/docs-layout";

export default function Installation() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">installation</h1>
          <p className="text-lg text-muted-foreground">
            how to install and configure asciicn
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">prerequisites</h2>
          <p className="text-muted-foreground text-sm">
            next.js 15 project with tailwind css v4 configured
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">using shadcn cli</h2>
          <p className="text-muted-foreground text-sm">
            easiest way to install components:
          </p>
          <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">
            npx shadcn@latest add https://asciicn.fldr.zip/r/input.json
          </pre>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">manual installation</h2>
          <p className="text-muted-foreground text-sm">
            copy components manually from component pages
          </p>

          <div className="space-y-3">
            <h3 className="text-lg">1. install font</h3>
            <p className="text-muted-foreground text-xs">
              download meslo nerd font and add to public/fonts/
            </p>
            <p className="text-muted-foreground text-xs">
              the nerd font provides 3000+ glyphs for terminal-native icons. all
              components use these glyphs instead of external icon libraries.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg">2. configure tailwind css</h3>
            <p className="text-muted-foreground text-xs">
              add css variables to globals.css:
            </p>
            <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">{`@theme {
  --font-mono: "MesloLGM Nerd Font", monospace;
  
  /* light mode colors */
  --color-background: hsl(210 40% 98%);
  --color-foreground: hsl(222 47% 11%);
  --color-primary: hsl(221 83% 53%);
  --color-border: hsl(214 32% 88%);
  /* ... more colors */
}`}</pre>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg">3. copy component code</h3>
            <p className="text-muted-foreground text-xs">
              copy components from registry/ascii/ to your project
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <h2 className="text-2xl font-semibold mb-4">
            using nerd font glyphs
          </h2>
          <p className="text-muted-foreground text-sm mb-4">
            asciicn components use nerd font glyphs for all icons. you can
            browse available glyphs at the{" "}
            <a
              href="https://www.nerdfonts.com/cheat-sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              nerd fonts cheat sheet
            </a>
            .
          </p>
          <div className="space-y-2">
            <p className="text-muted-foreground text-xs">
              examples of glyphs available:
            </p>
            <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">{`file icons:   󰈙  󰈷  󰈎  󰈎
dev icons:    󰌘  󰌷  󰟒  
ui controls:  󰒃  󰒆  󰒉  󰒌  
status:       󰄬  󰄭  󰄮  
arrows:       󱡀  󱡁  󱡂  󱡃`}</pre>
            <p className="text-muted-foreground text-xs mt-3">
              use unicode values directly in components:{" "}
              <code className="bg-muted/30 px-1 py-0.5 rounded text-xs">
                {"<span>\\ue5c3</span>"}
              </code>
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <h2 className="text-2xl font-semibold mb-4">project structure</h2>
          <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">{`app/
  globals.css
  layout.tsx
registry/
  ascii/
    input.tsx
    badge.tsx
    button.tsx
    menu.tsx
public/
  fonts/
    MesloLGMNerdFont-Regular.ttf`}</pre>
        </div>
      </div>
    </DocsLayout>
  );
}
