"use client";

import { useState } from "react";
import DocsLayout from "@/components/layout/docs-layout";
import Switch from "@/registry/ascii/switch";
import Badge from "@/registry/ascii/badge";

export default function SwitchPage() {
  const [defaultChecked, setDefaultChecked] = useState(false);
  const [bracketChecked, setBracketChecked] = useState(true);
  const [labeled, setLabeled] = useState(false);
  const [disabledOn, setDisabledOn] = useState(true);
  const [disabledOff, setDisabledOff] = useState(false);

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight">switch</h1>
            <Badge variant="outline" size="sm">
              available
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            toggle switch with ascii states
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">usage</h2>
          <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">{`import Switch from "@/registry/ascii/switch";

const [checked, setChecked] = useState(false);

<Switch 
  checked={checked} 
  onCheckedChange={setChecked}
/>`}</pre>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">examples</h2>

          <div className="space-y-6">
            <div>
              <h3 className="mb-3 text-sm">default variant</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Switch
                  checked={defaultChecked}
                  onCheckedChange={setDefaultChecked}
                />
                <span className="text-xs text-muted-foreground">
                  state: {defaultChecked ? "on" : "off"}
                </span>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">bracket variant</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Switch
                  variant="bracket"
                  checked={bracketChecked}
                  onCheckedChange={setBracketChecked}
                />
                <span className="text-xs text-muted-foreground">
                  state: {bracketChecked ? "on" : "off"}
                </span>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">with label</h3>
              <div className="flex flex-col gap-2">
                <Switch
                  label="enable notifications"
                  checked={labeled}
                  onCheckedChange={setLabeled}
                />
                <Switch
                  variant="bracket"
                  label="dark mode"
                  checked={bracketChecked}
                  onCheckedChange={setBracketChecked}
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">disabled states</h3>
              <div className="flex flex-col gap-2">
                <Switch
                  label="disabled (on)"
                  checked={disabledOn}
                  onCheckedChange={setDisabledOn}
                  disabled
                />
                <Switch
                  label="disabled (off)"
                  checked={disabledOff}
                  onCheckedChange={setDisabledOff}
                  disabled
                />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">keyboard navigation</h3>
              <div className="space-y-2">
                <Switch
                  label="focus me and press space or enter"
                  checked={defaultChecked}
                  onCheckedChange={setDefaultChecked}
                />
                <p className="text-xs text-muted-foreground">
                  supports keyboard: [space] or [enter] to toggle
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">design notes</h2>
          <ul className="text-muted-foreground text-sm space-y-2">
            <li>• uses unicode characters: [·] for off, [■] for on</li>
            <li>
              • bracket variant uses minimal tui-style notation: [ · ] / [ ■ ]
            </li>
            <li>• default variant shows text label inline: [· off] / [■ on]</li>
            <li>• keyboard accessible with space and enter keys</li>
            <li>• smooth transitions for state changes</li>
          </ul>
        </div>
      </div>
    </DocsLayout>
  );
}
