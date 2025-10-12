"use client";

import DocsLayout from "@/components/layout/docs-layout";
import Button from "@/registry/ascii/button";
import Badge from "@/registry/ascii/badge";

export default function ButtonPage() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight">button</h1>
            <Badge variant="outline" size="sm">
              available
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            interactive button component
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">usage</h2>
          <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">{`import Button from "@/registry/ascii/button";

<Button onClick={() => alert("clicked!")}>
  click me
</Button>`}</pre>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">examples</h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-sm">variants</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary">primary</Button>
                <Button variant="secondary">secondary</Button>
                <Button variant="ghost">ghost</Button>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">with icons</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" icon="→">
                  next
                </Button>
                <Button variant="secondary" icon="✓">
                  confirm
                </Button>
                <Button variant="ghost" icon="×">
                  cancel
                </Button>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">disabled</h3>
              <div className="flex flex-wrap items-center gap-3">
                <Button variant="primary" disabled>
                  disabled
                </Button>
                <Button variant="secondary" disabled>
                  disabled
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">design note</h2>
          <p className="text-muted-foreground text-sm">
            secondary variant uses bracket notation [ button ] for tui aesthetic
          </p>
        </div>
      </div>
    </DocsLayout>
  );
}
