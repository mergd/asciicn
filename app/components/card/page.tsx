import DocsLayout from "@/components/layout/docs-layout";
import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/registry/ascii/card";
import Badge from "@/registry/ascii/badge";
import Button from "@/registry/ascii/button";

export default function CardPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight">card</h1>
            <Badge variant="primary" size="sm">
              registry:ui
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            container with ascii borders and unicode pattern backgrounds
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">installation</h2>
          <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">
            npx shadcn@latest add https://asciicn.com/r/card.json
          </pre>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">usage</h2>
          <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">{`import Card, {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/registry/ascii/card";

<Card>
  <CardHeader>
    <CardTitle>card title</CardTitle>
    <CardDescription>card description</CardDescription>
  </CardHeader>
  <CardContent>
    your content here
  </CardContent>
  <CardFooter>
    footer content
  </CardFooter>
</Card>`}</pre>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">examples</h2>

          <div className="space-y-4">
            <div>
              <h3 className="mb-3 text-sm">basic card</h3>
              <Card className="max-w-md">
                <CardHeader>
                  <CardTitle>card title</CardTitle>
                  <CardDescription>
                    a simple card with header and content
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">
                    this is the main content area of the card. it can contain
                    any kind of content you want to display.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="mb-3 text-sm">border variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card variant="single" className="max-w-md">
                  <CardHeader>
                    <CardTitle>single border</CardTitle>
                    <CardDescription>
                      using single-line box drawing characters
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      ┌─┐│└─┘ characters
                    </p>
                  </CardContent>
                </Card>

                <Card variant="double" className="max-w-md">
                  <CardHeader>
                    <CardTitle>double border</CardTitle>
                    <CardDescription>
                      using double-line box drawing characters
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground">
                      ╔═╗║╚═╝ characters
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">pattern variants</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card pattern="default" className="max-w-md">
                  <CardContent>
                    <div className="text-xs">
                      <div className="font-medium">default pattern</div>
                      <div className="text-muted-foreground">░ light shade</div>
                    </div>
                  </CardContent>
                </Card>

                <Card pattern="dots" className="max-w-md">
                  <CardContent>
                    <div className="text-xs">
                      <div className="font-medium">dots pattern</div>
                      <div className="text-muted-foreground">
                        · dot characters
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card pattern="dense" className="max-w-md">
                  <CardContent>
                    <div className="text-xs">
                      <div className="font-medium">dense pattern</div>
                      <div className="text-muted-foreground">
                        ▒ medium shade
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">with title and footer</h3>
              <Card
                title="system info"
                footer
                variant="double"
                className="max-w-md"
              >
                <CardContent>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">os:</span>
                      <span>darwin 25.0.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">shell:</span>
                      <span>/bin/fish</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">uptime:</span>
                      <span>7 days</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="mb-3 text-sm">interactive card</h3>
              <Card className="max-w-md">
                <CardHeader>
                  <CardTitle>action card</CardTitle>
                  <CardDescription>
                    card with interactive elements
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground mb-3">
                    this card demonstrates how to include interactive elements
                    like buttons and badges.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary" size="sm">
                      new
                    </Badge>
                    <Badge variant="outline" size="sm">
                      featured
                    </Badge>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary"> cancel </Button>
                  <Button variant="primary">continue</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">design details</h2>
          <p className="text-muted-foreground text-sm">
            card uses ascii box-drawing characters for borders and unicode block
            patterns for backgrounds:
          </p>
          <ul className="space-y-1 text-muted-foreground text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>single-line borders: ┌─┐│└─┘├┤┬┴┼</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>double-line borders: ╔═╗║╚═╝╠╣╦╩╬</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>background patterns: ░ (light), · (dots), ▒ (dense)</span>
            </li>
          </ul>
          <p className="text-muted-foreground text-xs mt-3">
            patterns repeat 400x at 10% opacity behind content with z-index
            layering
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">character set</h2>
          <div className="border border-border bg-muted/30 p-4 space-y-2">
            <div className="text-sm">
              <div className="text-muted-foreground text-xs mb-1">
                single borders:
              </div>
              <div className="text-xl tracking-wider">
                ┌ ┬ ┐ ├ ┼ ┤ └ ┴ ┘ ─ │
              </div>
            </div>
            <div className="text-sm">
              <div className="text-muted-foreground text-xs mb-1">
                double borders:
              </div>
              <div className="text-xl tracking-wider">
                ╔ ╦ ╗ ╠ ╬ ╣ ╚ ╩ ╝ ═ ║
              </div>
            </div>
            <div className="text-sm">
              <div className="text-muted-foreground text-xs mb-1">
                patterns:
              </div>
              <div className="text-xl tracking-wider">░ ▒ ▓ · ∙</div>
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
              <div className="text-muted-foreground">"single"</div>
              <div className="text-muted-foreground">border style</div>
            </div>
            <div className="grid grid-cols-4 gap-2 border-b border-border p-2">
              <div>title</div>
              <div className="text-muted-foreground">string</div>
              <div className="text-muted-foreground">-</div>
              <div className="text-muted-foreground">header title</div>
            </div>
            <div className="grid grid-cols-4 gap-2 border-b border-border p-2">
              <div>footer</div>
              <div className="text-muted-foreground">ReactNode</div>
              <div className="text-muted-foreground">-</div>
              <div className="text-muted-foreground">footer content</div>
            </div>
            <div className="grid grid-cols-4 gap-2 p-2">
              <div>pattern</div>
              <div className="text-muted-foreground">string</div>
              <div className="text-muted-foreground">"default"</div>
              <div className="text-muted-foreground">background pattern</div>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
