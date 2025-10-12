"use client";

import { useState } from "react";
import DocsLayout from "@/components/layout/docs-layout";
import { RadioGroup, RadioItem } from "@/components/ascii/radio";
import Badge from "@/registry/ascii/badge";

export default function RadioPage() {
  const [theme, setTheme] = useState("dark");
  const [size, setSize] = useState("medium");
  const [language, setLanguage] = useState("");

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight">radio</h1>
            <Badge variant="primary" size="sm">
              registry:ui
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            radio button groups with ascii indicators
          </p>
        </div>

        <section>
          <h2 className="text-2xl font-semibold">installation</h2>
          <pre className="mt-3 overflow-x-auto border border-border bg-muted/30 p-3 text-xs">
            npx shadcn@latest add https://asciicn.com/r/radio.json
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">usage</h2>
          <pre className="mt-3 overflow-x-auto border border-border bg-muted/30 p-3 text-xs">
            {`import { RadioGroup, RadioItem } from "@/components/ascii/radio";

export default function Example() {
  const [value, setValue] = useState("option1");

  return (
    <RadioGroup 
      value={value} 
      onValueChange={setValue}
      name="example"
    >
      <RadioItem value="option1" label="option one" />
      <RadioItem value="option2" label="option two" />
      <RadioItem value="option3" label="option three" />
    </RadioGroup>
  );
}`}
          </pre>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">examples</h2>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="mb-2 text-sm">basic</h3>
              <RadioGroup value={theme} onValueChange={setTheme} name="theme">
                <RadioItem value="light" label="light mode" />
                <RadioItem value="dark" label="dark mode" />
                <RadioItem value="system" label="system default" />
              </RadioGroup>
              <p className="mt-2 text-xs text-muted-foreground">
                selected: {theme}
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-sm">with sizes</h3>
              <RadioGroup value={size} onValueChange={setSize} name="size">
                <RadioItem value="small" label="small" />
                <RadioItem value="medium" label="medium" />
                <RadioItem value="large" label="large" />
              </RadioGroup>
            </div>

            <div>
              <h3 className="mb-2 text-sm">disabled</h3>
              <RadioGroup disabled value="option1" name="disabled">
                <RadioItem value="option1" label="option one (disabled)" />
                <RadioItem value="option2" label="option two (disabled)" />
                <RadioItem value="option3" label="option three (disabled)" />
              </RadioGroup>
            </div>

            <div>
              <h3 className="mb-2 text-sm">individual disabled items</h3>
              <RadioGroup
                value={language}
                onValueChange={setLanguage}
                name="language"
              >
                <RadioItem value="typescript" label="typescript" />
                <RadioItem value="javascript" label="javascript" />
                <RadioItem value="rust" label="rust" disabled />
                <RadioItem value="go" label="go" />
              </RadioGroup>
            </div>

            <div>
              <h3 className="mb-2 text-sm">without labels</h3>
              <RadioGroup value="option1" name="bare">
                <RadioItem value="option1" />
                <RadioItem value="option2" />
                <RadioItem value="option3" />
              </RadioGroup>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">props</h2>
          <div className="mt-4 space-y-4 text-sm">
            <div>
              <h3 className="mb-2 text-base font-medium">RadioGroup</h3>
              <div className="border border-border text-xs">
                <div className="grid grid-cols-3 gap-2 border-b border-border bg-muted/30 p-2">
                  <div>prop</div>
                  <div>type</div>
                  <div>description</div>
                </div>
                <div className="grid grid-cols-3 gap-2 border-b border-border p-2">
                  <div>value</div>
                  <div className="text-muted-foreground">string</div>
                  <div className="text-muted-foreground">
                    current selected value
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 border-b border-border p-2">
                  <div>onValueChange</div>
                  <div className="text-muted-foreground">function</div>
                  <div className="text-muted-foreground">
                    callback when value changes
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 border-b border-border p-2">
                  <div>name</div>
                  <div className="text-muted-foreground">string</div>
                  <div className="text-muted-foreground">
                    name for the radio group
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 p-2">
                  <div>disabled</div>
                  <div className="text-muted-foreground">boolean</div>
                  <div className="text-muted-foreground">
                    disable all radio items
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-base font-medium">RadioItem</h3>
              <div className="border border-border text-xs">
                <div className="grid grid-cols-3 gap-2 border-b border-border bg-muted/30 p-2">
                  <div>prop</div>
                  <div>type</div>
                  <div>description</div>
                </div>
                <div className="grid grid-cols-3 gap-2 border-b border-border p-2">
                  <div>value</div>
                  <div className="text-muted-foreground">string</div>
                  <div className="text-muted-foreground">
                    unique value for this option
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 border-b border-border p-2">
                  <div>label</div>
                  <div className="text-muted-foreground">string</div>
                  <div className="text-muted-foreground">
                    optional label text
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 p-2">
                  <div>disabled</div>
                  <div className="text-muted-foreground">boolean</div>
                  <div className="text-muted-foreground">
                    disable this specific item
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
