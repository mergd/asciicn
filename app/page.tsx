import DocsLayout from "@/components/layout/docs-layout";
import Badge from "@/registry/ascii/badge";

export default function Home() {
  return (
    <DocsLayout>
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">introduction</h1>
          <p className="text-lg text-muted-foreground">
            ascii-styled ui components for next.js
          </p>
        </div>

        <div className="my-8 border-l-2 border-primary pl-4 text-sm">
          <div>┌─────────────────────────────────────┐</div>
          <div>│ clean • minimal • terminal-inspired │</div>
          <div>└─────────────────────────────────────┘</div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">what is asciicn?</h2>
          <p className="text-muted-foreground leading-relaxed">
            asciicn is a component library that brings the aesthetic of terminal
            uis to modern web applications. built with next.js 15 and tailwind
            css, it features monospace typography, ascii decorations, and a
            minimal color palette.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">features</h2>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>ascii-first design - all ui uses ascii chars</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>monospace typography - jetbrains mono nerd font</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>shadcn compatible - use shadcn cli to install</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>theme support - dark and light mode</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>typescript native - full type safety</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>keyboard friendly - full shortcuts [^k]</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">available components</h2>
          <div className="space-y-2">
            <div className="border border-border p-3 hover:bg-accent/30 transition-colors text-sm">
              <div className="mb-1 flex items-center gap-2">
                <span>⌨ input</span>
                <Badge variant="primary" size="sm">
                  ready
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                text input with ascii borders
              </p>
            </div>

            <div className="border border-border p-3 hover:bg-accent/30 transition-colors text-sm">
              <div className="mb-1 flex items-center gap-2">
                <span>🏷 badge</span>
                <Badge variant="primary" size="sm">
                  ready
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                labels with unicode block patterns
              </p>
            </div>

            <div className="border border-border p-3 hover:bg-accent/30 transition-colors text-sm">
              <div className="mb-1 flex items-center gap-2">
                <span>▣ button</span>
                <Badge variant="outline" size="sm">
                  available
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                interactive buttons
              </p>
            </div>

            <div className="border border-border p-3 opacity-60 text-sm">
              <div className="mb-1 flex items-center gap-2">
                <span>░ more</span>
                <Badge variant="secondary" size="sm">
                  planned
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">
                radio, dropdown, accordion...
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <h2 className="text-2xl font-semibold mb-4">quick start</h2>
          <div className="space-y-4">
            <div>
              <p className="mb-2 text-sm text-muted-foreground">
                install via shadcn cli:
              </p>
              <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">
                npx shadcn@latest add https://asciicn.com/r/input.json
              </pre>
            </div>
          </div>
        </div>

        <div className="border border-border bg-muted/20 p-4 text-sm">
          <div className="flex items-start gap-3">
            <span className="text-primary">⌨</span>
            <div className="flex-1">
              <div className="mb-1">keyboard navigation</div>
              <div className="text-xs text-muted-foreground">
                press [^k] to open shortcuts
              </div>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
