"use client";

import { useState } from "react";
import DocsLayout from "@/components/layout/docs-layout";
import Input from "@/registry/ascii/input";
import Badge from "@/registry/ascii/badge";

export default function InputPage() {
  const [value, setValue] = useState("");

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight">input</h1>
            <Badge variant="primary" size="sm">
              registry:ui
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            text input with ascii borders and variants
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">installation</h2>
          <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">
            npx shadcn@latest add https://asciicn.com/r/input.json
          </pre>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">usage</h2>
          <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">{`import Input from "@/registry/ascii/input";

<Input placeholder="enter text..." />`}</pre>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">examples</h2>

          <div className="space-y-4">
            <div>
              <h3 className="mb-3 text-sm">default</h3>
              <Input
                placeholder="enter some text..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            <div>
              <h3 className="mb-3 text-sm">double border</h3>
              <Input
                variant="double"
                placeholder="stronger border"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            <div>
              <h3 className="mb-3 text-sm">with label</h3>
              <Input
                label="username"
                placeholder="john_doe"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            <div>
              <h3 className="mb-3 text-sm">with icon</h3>
              <Input
                icon="🔍"
                placeholder="search..."
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            <div>
              <h3 className="mb-3 text-sm">error state</h3>
              <Input
                error
                placeholder="this has an error"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </div>

            <div>
              <h3 className="mb-3 text-sm">disabled</h3>
              <Input disabled placeholder="disabled input" />
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
              <div className="text-muted-foreground">border style</div>
            </div>
            <div className="grid grid-cols-4 gap-2 border-b border-border p-2">
              <div>error</div>
              <div className="text-muted-foreground">boolean</div>
              <div className="text-muted-foreground">false</div>
              <div className="text-muted-foreground">error state</div>
            </div>
            <div className="grid grid-cols-4 gap-2 border-b border-border p-2">
              <div>label</div>
              <div className="text-muted-foreground">string</div>
              <div className="text-muted-foreground">-</div>
              <div className="text-muted-foreground">label text</div>
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
