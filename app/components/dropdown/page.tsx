"use client";

import { useState } from "react";
import DocsLayout from "@/components/layout/docs-layout";
import Dropdown from "@/registry/ascii/dropdown";
import Badge from "@/registry/ascii/badge";

export default function DropdownPage() {
  const [selectedTheme, setSelectedTheme] = useState("dark");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedTerminal, setSelectedTerminal] = useState("bash");

  const themeOptions = [
    { value: "dark", label: "dark mode", icon: "◆" },
    { value: "light", label: "light mode", icon: "◇" },
    { value: "system", label: "system", icon: "●" },
  ];

  const languageOptions = [
    { value: "en", label: "english", icon: "🌐" },
    { value: "es", label: "español", icon: "🌐" },
    { value: "fr", label: "français", icon: "🌐" },
    { value: "de", label: "deutsch", icon: "🌐" },
    { value: "ja", label: "日本語", icon: "🌐" },
    { value: "locked", label: "中文", icon: "🔒", disabled: true },
  ];

  const terminalOptions = [
    { value: "bash", label: "/bin/bash" },
    { value: "zsh", label: "/bin/zsh" },
    { value: "fish", label: "/usr/local/bin/fish" },
    { value: "sh", label: "/bin/sh" },
  ];

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight">dropdown</h1>
            <Badge variant="primary" size="sm">
              registry:ui
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            dropdown menu with keyboard navigation and ascii borders
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">installation</h2>
          <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">
            npx shadcn@latest add https://asciicn.com/r/dropdown.json
          </pre>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">usage</h2>
          <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">{`import Dropdown from "@/registry/ascii/dropdown";

const options = [
  { value: "1", label: "option 1" },
  { value: "2", label: "option 2" },
];

<Dropdown
  options={options}
  value={selected}
  onChange={setSelected}
/>`}</pre>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">examples</h2>

          <div className="space-y-4">
            <div>
              <h3 className="mb-3 text-sm">basic</h3>
              <Dropdown
                options={themeOptions}
                value={selectedTheme}
                onChange={setSelectedTheme}
                placeholder="select theme"
              />
              <p className="text-xs text-muted-foreground mt-2">
                selected:{" "}
                <span className="text-foreground">{selectedTheme}</span>
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-sm">with icons</h3>
              <Dropdown
                options={languageOptions}
                value={selectedLanguage}
                onChange={setSelectedLanguage}
                placeholder="select language"
              />
              <p className="text-xs text-muted-foreground mt-2">
                selected:{" "}
                <span className="text-foreground">
                  {selectedLanguage || "none"}
                </span>
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-sm">single border (default)</h3>
              <Dropdown
                options={terminalOptions}
                value={selectedTerminal}
                onChange={setSelectedTerminal}
                variant="single"
              />
            </div>

            <div>
              <h3 className="mb-3 text-sm">double border</h3>
              <Dropdown
                options={terminalOptions}
                value={selectedTerminal}
                onChange={setSelectedTerminal}
                variant="double"
              />
            </div>

            <div>
              <h3 className="mb-3 text-sm">disabled</h3>
              <Dropdown
                options={themeOptions}
                value={selectedTheme}
                onChange={setSelectedTheme}
                disabled
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">keyboard shortcuts</h2>
          <div className="border border-border text-xs">
            <div className="grid grid-cols-2 gap-2 border-b border-border bg-muted/30 p-2">
              <div>key</div>
              <div>action</div>
            </div>
            <div className="grid grid-cols-2 gap-2 border-b border-border p-2">
              <div className="text-muted-foreground">space / enter</div>
              <div>open dropdown or select option</div>
            </div>
            <div className="grid grid-cols-2 gap-2 border-b border-border p-2">
              <div className="text-muted-foreground">↑ / ↓</div>
              <div>navigate options</div>
            </div>
            <div className="grid grid-cols-2 gap-2 p-2">
              <div className="text-muted-foreground">esc</div>
              <div>close dropdown</div>
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
              <div>options</div>
              <div className="text-muted-foreground">array</div>
              <div className="text-muted-foreground">required</div>
              <div className="text-muted-foreground">dropdown options</div>
            </div>
            <div className="grid grid-cols-4 gap-2 border-b border-border p-2">
              <div>value</div>
              <div className="text-muted-foreground">string</div>
              <div className="text-muted-foreground">-</div>
              <div className="text-muted-foreground">selected value</div>
            </div>
            <div className="grid grid-cols-4 gap-2 border-b border-border p-2">
              <div>onChange</div>
              <div className="text-muted-foreground">function</div>
              <div className="text-muted-foreground">-</div>
              <div className="text-muted-foreground">change handler</div>
            </div>
            <div className="grid grid-cols-4 gap-2 border-b border-border p-2">
              <div>placeholder</div>
              <div className="text-muted-foreground">string</div>
              <div className="text-muted-foreground">"select option"</div>
              <div className="text-muted-foreground">placeholder text</div>
            </div>
            <div className="grid grid-cols-4 gap-2 border-b border-border p-2">
              <div>variant</div>
              <div className="text-muted-foreground">string</div>
              <div className="text-muted-foreground">"single"</div>
              <div className="text-muted-foreground">border style</div>
            </div>
            <div className="grid grid-cols-4 gap-2 p-2">
              <div>disabled</div>
              <div className="text-muted-foreground">boolean</div>
              <div className="text-muted-foreground">false</div>
              <div className="text-muted-foreground">disabled state</div>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
