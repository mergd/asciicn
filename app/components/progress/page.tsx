"use client";

import { useState, useEffect } from "react";
import DocsLayout from "@/components/layout/docs-layout";
import { Progress, ProgressBar } from "@/registry/ascii/progress";
import Badge from "@/registry/ascii/badge";
import Button from "@/registry/ascii/button";

export default function ProgressPage() {
  const [progress, setProgress] = useState(0);
  const [animatedProgress, setAnimatedProgress] = useState(33);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const startAnimation = () => {
    setAnimatedProgress(0);
    setTimeout(() => setAnimatedProgress(100), 100);
  };

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight">progress</h1>
            <Badge variant="primary" size="sm">
              registry:ui
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            progress bars with unicode block characters
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">installation</h2>
          <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">
            npx shadcn@latest add https://asciicn.com/r/progress.json
          </pre>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">usage</h2>
          <pre className="border border-border bg-muted/30 p-3 overflow-x-auto text-xs">{`import { Progress } from "@/registry/ascii/progress";

<Progress value={60} max={100} />
<Progress value={45} showValue />
<Progress value={75} variant="gradient" animated />`}</pre>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">examples</h2>

          <div className="space-y-4">
            <div>
              <h3 className="mb-3 text-sm">basic progress</h3>
              <div className="max-w-md space-y-3">
                <Progress value={25} />
                <Progress value={50} />
                <Progress value={75} />
                <Progress value={100} />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">with value display</h3>
              <div className="max-w-md space-y-3">
                <Progress value={30} showValue />
                <Progress value={65} showValue />
                <Progress value={90} showValue />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">variants</h3>
              <div className="max-w-md space-y-3">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">
                    default (solid blocks)
                  </div>
                  <Progress value={60} variant="default" showValue />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">
                    gradient (progressive shading)
                  </div>
                  <Progress value={60} variant="gradient" showValue />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">
                    striped (alternating pattern)
                  </div>
                  <Progress value={60} variant="striped" showValue />
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">sizes</h3>
              <div className="max-w-md space-y-3">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">
                    small
                  </div>
                  <Progress value={50} size="sm" showValue />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">
                    medium
                  </div>
                  <Progress value={50} size="md" showValue />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-1">
                    large
                  </div>
                  <Progress value={50} size="lg" showValue />
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">animated progress</h3>
              <div className="max-w-md space-y-3">
                <div>
                  <div className="text-xs text-muted-foreground mb-2">
                    live updating (updates every second)
                  </div>
                  <Progress value={progress} showValue animated />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-2">
                    smooth transition animation
                  </div>
                  <Progress value={animatedProgress} showValue animated />
                  <Button
                    variant="secondary"
                    onClick={startAnimation}
                    className="mt-2"
                  >
                    [ restart animation ]
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">progress bar with labels</h3>
              <div className="max-w-md space-y-3">
                <ProgressBar value={35} label="download progress" />
                <ProgressBar value={72} label="upload status" />
                <ProgressBar value={100} label="completed" />
              </div>
            </div>

            <div>
              <h3 className="mb-3 text-sm">use cases</h3>
              <div className="max-w-md space-y-4">
                <div className="border border-border bg-card p-3">
                  <div className="text-xs font-medium mb-2">
                    installing packages
                  </div>
                  <ProgressBar
                    value={45}
                    label="npm install"
                    showValue={false}
                  />
                  <div className="text-xs text-muted-foreground mt-1">
                    installing dependencies... 127/283
                  </div>
                </div>

                <div className="border border-border bg-card p-3">
                  <div className="text-xs font-medium mb-2">build progress</div>
                  <div className="space-y-2">
                    <ProgressBar
                      value={100}
                      label="compilation"
                      showValue={false}
                    />
                    <ProgressBar
                      value={75}
                      label="optimization"
                      showValue={false}
                    />
                    <ProgressBar
                      value={30}
                      label="bundling"
                      showValue={false}
                    />
                  </div>
                </div>

                <div className="border border-border bg-card p-3">
                  <div className="text-xs font-medium mb-2">storage usage</div>
                  <ProgressBar value={68} label="disk space" />
                  <div className="text-xs text-muted-foreground mt-1">
                    6.8 gb / 10 gb used
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">design details</h2>
          <p className="text-muted-foreground text-sm">
            progress uses unicode block characters to visualize completion:
          </p>
          <ul className="space-y-1 text-muted-foreground text-sm">
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>default: solid █ blocks for filled, ░ for empty</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>gradient: progressive shading ░ ▒ ▓ █</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>striped: alternating ▓ █ pattern</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>40 blocks total for smooth incremental display</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">▸</span>
              <span>tabular-nums for aligned percentage display</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">character set</h2>
          <div className="border border-border bg-muted/30 p-4 space-y-2">
            <div className="text-sm">
              <div className="text-muted-foreground text-xs mb-1">
                block characters:
              </div>
              <div className="text-xl tracking-wider">░ ▒ ▓ █</div>
            </div>
            <div className="text-sm">
              <div className="text-muted-foreground text-xs mb-1">usage:</div>
              <div className="text-xs">
                <div>░ = empty/light (0-25%)</div>
                <div>▒ = medium (25-50%)</div>
                <div>▓ = dark (50-75%)</div>
                <div>█ = full (75-100%)</div>
              </div>
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
              <div>value</div>
              <div className="text-muted-foreground">number</div>
              <div className="text-muted-foreground">required</div>
              <div className="text-muted-foreground">current value</div>
            </div>
            <div className="grid grid-cols-4 gap-2 border-b border-border p-2">
              <div>max</div>
              <div className="text-muted-foreground">number</div>
              <div className="text-muted-foreground">100</div>
              <div className="text-muted-foreground">maximum value</div>
            </div>
            <div className="grid grid-cols-4 gap-2 border-b border-border p-2">
              <div>showValue</div>
              <div className="text-muted-foreground">boolean</div>
              <div className="text-muted-foreground">false</div>
              <div className="text-muted-foreground">show percentage</div>
            </div>
            <div className="grid grid-cols-4 gap-2 border-b border-border p-2">
              <div>variant</div>
              <div className="text-muted-foreground">string</div>
              <div className="text-muted-foreground">"default"</div>
              <div className="text-muted-foreground">visual style</div>
            </div>
            <div className="grid grid-cols-4 gap-2 border-b border-border p-2">
              <div>animated</div>
              <div className="text-muted-foreground">boolean</div>
              <div className="text-muted-foreground">false</div>
              <div className="text-muted-foreground">smooth transition</div>
            </div>
            <div className="grid grid-cols-4 gap-2 p-2">
              <div>size</div>
              <div className="text-muted-foreground">string</div>
              <div className="text-muted-foreground">"md"</div>
              <div className="text-muted-foreground">bar size</div>
            </div>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
