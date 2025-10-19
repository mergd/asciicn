"use client";

import { useState } from "react";
import DocsLayout from "@/components/layout/docs-layout";
import { Checkbox } from "@/registry/ascii/checkbox";
import Badge from "@/registry/ascii/badge";

export default function CheckboxPage() {
  const [terms, setTerms] = useState(false);
  const [privacy, setPrivacy] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [disabled, setDisabled] = useState(false);

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight">checkbox</h1>
            <Badge variant="primary" size="sm">
              registry:ui
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            checkboxes with ascii indicators
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold">installation</h2>
          <pre className="mt-3 overflow-x-auto border border-border bg-muted/30 p-3 text-xs">
            npx shadcn@latest add https://asciicn.fldr.zip/r/checkbox.json
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">usage</h2>
          <pre className="mt-3 overflow-x-auto border border-border bg-muted/30 p-3 text-xs">
            {`import { Checkbox } from "@/components/ascii/checkbox";

export default function Example() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox 
      checked={checked}
      onCheckedChange={setChecked}
      label="accept terms"
    />
  );
}`}
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">examples</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="mb-2 text-sm">basic</h3>
              <Checkbox
                checked={terms}
                onCheckedChange={setTerms}
                label="i agree to the terms"
              />
              <p className="mt-2 text-xs text-muted-foreground">
                checked: {terms ? "yes" : "no"}
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-sm">text variant (default)</h3>
              <Checkbox
                checked={privacy}
                onCheckedChange={setPrivacy}
                label="accept privacy policy"
                variant="text"
              />
            </div>

            <div>
              <h3 className="mb-2 text-sm">icon variant</h3>
              <Checkbox
                checked={notifications}
                onCheckedChange={setNotifications}
                label="send notifications"
                variant="icon"
              />
            </div>

            <div>
              <h3 className="mb-2 text-sm">disabled</h3>
              <Checkbox
                checked={disabled}
                onCheckedChange={setDisabled}
                label="this is disabled"
                disabled
              />
            </div>

            <div>
              <h3 className="mb-2 text-sm">without labels</h3>
              <div className="flex gap-4">
                <Checkbox checked={true} />
                <Checkbox checked={false} />
                <Checkbox checked={false} disabled />
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">props</h2>
          <div className="mt-4 space-y-4 text-sm">
            <div>
              <h3 className="mb-2 text-base font-medium">Checkbox</h3>
              <div className="border border-border text-xs">
                <div className="grid grid-cols-3 gap-2 border-b border-border bg-muted/30 p-2">
                  <div>prop</div>
                  <div>type</div>
                  <div>description</div>
                </div>
                <div className="grid grid-cols-3 gap-2 border-b border-border p-2">
                  <div>checked</div>
                  <div className="text-muted-foreground">boolean</div>
                  <div className="text-muted-foreground">
                    whether the checkbox is checked
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 border-b border-border p-2">
                  <div>onCheckedChange</div>
                  <div className="text-muted-foreground">function</div>
                  <div className="text-muted-foreground">
                    callback when checked state changes
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 border-b border-border p-2">
                  <div>label</div>
                  <div className="text-muted-foreground">string</div>
                  <div className="text-muted-foreground">
                    optional label text
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 border-b border-border p-2">
                  <div>disabled</div>
                  <div className="text-muted-foreground">boolean</div>
                  <div className="text-muted-foreground">
                    disable the checkbox
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 p-2">
                  <div>variant</div>
                  <div className="text-muted-foreground">string</div>
                  <div className="text-muted-foreground">
                    "text" (default) or "icon" display style
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocsLayout>
  );
}
