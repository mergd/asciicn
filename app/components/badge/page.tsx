import DocsLayout from "@/components/layout/docs-layout";
import Badge from "@/registry/ascii/badge";

export default function BadgePage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight">badge</h1>
            <Badge variant="primary" size="sm">
              registry:ui
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            labels with unicode block character backgrounds
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">installation</h2>
          <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">
            npx shadcn@latest add https://asciicn.com/r/badge.json
          </pre>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">usage</h2>
          <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">{`import Badge from "@/registry/ascii/badge";

<Badge>default</Badge>
<Badge variant="primary">primary</Badge>`}</pre>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">examples</h2>

          <div className="space-y-4">
            <div>
              <h3 className="mb-3 text-sm">variants</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="default">default</Badge>
                <Badge variant="primary">primary</Badge>
                <Badge variant="secondary">secondary</Badge>
                <Badge variant="destructive">destructive</Badge>
                <Badge variant="outline">outline</Badge>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                patterns: ░ ▒ ▓ ·
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">sizes</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge size="sm">small</Badge>
                <Badge size="md">medium</Badge>
                <Badge size="lg">large</Badge>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">with icons</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="primary" icon="✓">
                  verified
                </Badge>
                <Badge variant="destructive" icon="✕">
                  error
                </Badge>
                <Badge variant="outline" icon="★">
                  featured
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">status indicators</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="primary" size="sm">
                  active
                </Badge>
                <Badge variant="secondary" size="sm">
                  pending
                </Badge>
                <Badge variant="default" size="sm">
                  draft
                </Badge>
                <Badge variant="destructive" size="sm">
                  archived
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">design details</h2>
          <p className="text-muted-foreground text-sm">
            badge uses unicode block characters as texture backgrounds:
          </p>
          <ul className="space-y-1 text-muted-foreground text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>░ light shade (default, secondary, outline)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>▒ medium shade (destructive)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>▓ dark shade (primary)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>· dot pattern (outline)</span>
            </li>
          </ul>
          <p className="text-muted-foreground text-xs mt-3">
            pattern repeats 200x at reduced opacity with content layered on top
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">character set</h2>
          <div className="border border-border bg-muted/30 p-4">
            <div className="text-xl tracking-wider">
              ░ ▒ ▓ █ ▀ ▄ ▌ ▐ · ∙ ○ ● ◆ ◇ ■ □ ▪ ▫
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">props</h2>
          <div className="border border-border text-xs">
            <div className="grid grid-cols-4 gap-2 border-b border-border bg-muted/30 p-2">
              <div>prop</div>
              <div>type</div>
              <div>default</div>
              <div>description</div>
            </div>
            <div className="grid grid-cols-4 gap-2 border-b border-border p-2">
              <div>variant</div>
              <div className="text-muted-foreground">string</div>
              <div className="text-muted-foreground">"default"</div>
              <div className="text-muted-foreground">style variant</div>
            </div>
            <div className="grid grid-cols-4 gap-2 border-b border-border p-2">
              <div>size</div>
              <div className="text-muted-foreground">string</div>
              <div className="text-muted-foreground">"md"</div>
              <div className="text-muted-foreground">badge size</div>
            </div>
            <div className="grid grid-cols-4 gap-2 p-2">
              <div>icon</div>
              <div className="text-muted-foreground">string</div>
              <div className="text-muted-foreground">-</div>
              <div className="text-muted-foreground">icon/emoji</div>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
